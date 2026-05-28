"use client"

export function PrintButton() {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => window.print()}
        className="bg-white text-slate-900 px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        Tlačiť
      </button>
      <a
        href="/api/pdf"
        className="bg-slate-900 text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        Stiahnuť PDF
      </a>
    </div>
  )
}
