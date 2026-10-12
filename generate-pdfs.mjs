// Regenerates the static PDFs in public/ (one per language) from a running server.
// Usage: start the app (pnpm dev), then run `pnpm pdf`. Set CV_BASE_URL to use another origin.
import { writeFile } from 'node:fs/promises';

const baseUrl = process.env.CV_BASE_URL ?? 'http://localhost:3000';
const locales = ['sk', 'en', 'cs'];

for (const locale of locales) {
  const response = await fetch(`${baseUrl}/api/pdf?lang=${locale}`);

  if (!response.ok) {
    throw new Error(`PDF for "${locale}" failed: ${response.status} ${response.statusText}`);
  }

  // The route names the file, so the names are defined in one place (lib/cv/locales.ts).
  const fileName = response.headers.get('content-disposition')?.match(/filename="([^"]+)"/)?.[1];

  if (!fileName) {
    throw new Error(`PDF for "${locale}" came back without a file name.`);
  }

  const pdf = Buffer.from(await response.arrayBuffer());
  await writeFile(new URL(`./public/${fileName}`, import.meta.url), pdf);
  console.log(`✓ ${locale}: public/${fileName} (${Math.round(pdf.length / 1024)} kB)`);
}
