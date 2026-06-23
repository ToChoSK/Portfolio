export function PrintButton() {
  return (
    <div className="flex w-full items-center justify-center gap-2 sm:w-auto">
      <a
        href="/tomas-chovancak-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 min-w-[86px] items-center justify-center whitespace-nowrap rounded-full bg-white px-3.5 text-center text-[13px] font-medium leading-none text-slate-900 shadow-lg transition-all hover:shadow-xl sm:h-11 sm:min-w-[96px] sm:px-4 sm:text-sm sm:hover:scale-105"
      >
        Tlačiť
      </a>
      <a
        href="/tomas-chovancak-cv.pdf"
        download="tomas-chovancak-cv.pdf"
        className="inline-flex h-10 min-w-[116px] items-center justify-center whitespace-nowrap rounded-full bg-slate-900 px-3.5 text-center text-[13px] font-medium leading-none text-white shadow-lg transition-all hover:shadow-xl sm:h-11 sm:min-w-[128px] sm:px-4 sm:text-sm sm:hover:scale-105"
      >
        Stiahnuť PDF
      </a>
    </div>
  )
}
