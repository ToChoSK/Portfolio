export function PrintButton() {
  return (
    <div className="flex gap-2">
      <a
        href="/tomas-chovancak-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-slate-900 px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        Tlačiť
      </a>
      <a
        href="/tomas-chovancak-cv.pdf"
        download="tomas-chovancak-cv.pdf"
        className="bg-slate-900 text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        Stiahnuť PDF
      </a>
    </div>
  )
}
