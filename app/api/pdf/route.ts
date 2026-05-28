import { NextRequest } from "next/server"
import puppeteer from "puppeteer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const url = new URL("/", request.url)
  url.searchParams.set("pdf", "1")

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    const page = await browser.newPage()

    await page.setViewport({
      width: 1200,
      height: 1800,
      deviceScaleFactor: 2,
    })

    await page.goto(url.toString(), {
      waitUntil: ["load", "networkidle2"],
      timeout: 60000,
    })


    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let scrolled = 0
        const step = 250
        const timer = window.setInterval(() => {
          window.scrollBy(0, step)
          scrolled += step

          if (scrolled >= document.body.scrollHeight) {
            window.clearInterval(timer)
            window.scrollTo(0, 0)
            resolve()
          }
        }, 80)
      })

      const images = Array.from(document.images)
      images.forEach((image) => {
        image.loading = "eager"
      })

      await Promise.all(
        images.map((image) => {
          if (image.complete) {
            return Promise.resolve()
          }

          return new Promise<void>((resolve) => {
            const timeout = window.setTimeout(() => resolve(), 5000)
            image.addEventListener("load", () => {
              window.clearTimeout(timeout)
              resolve()
            }, { once: true })
            image.addEventListener("error", () => {
              window.clearTimeout(timeout)
              resolve()
            }, { once: true })
          })
        }),
      )

      await Promise.all(
        images.map((image) => image.decode?.().catch(() => undefined)),
      )
    })

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    })

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="tomas-chovancak-cv.pdf"',
        "Cache-Control": "no-store",
      },
    })
  } finally {
    await browser.close()
  }
}
