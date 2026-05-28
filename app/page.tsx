import { CVPage1 } from "@/components/cv/cv-page-1"
import { CVPage2 } from "@/components/cv/cv-page-2"
import { PrintButton } from "@/components/cv/print-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 py-8 print:bg-white print:py-0">
      <div className="flex flex-col items-center gap-8 print:gap-0">
        <CVPage1 />
        <CVPage2 />
      </div>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 print:hidden">
        <PrintButton />
      </div>
    </main>
  )
}
