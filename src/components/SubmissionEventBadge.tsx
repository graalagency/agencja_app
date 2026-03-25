// Kolory przypisywane deterministycznie wg kodu zdarzenia (code % N)
const EVENT_COLORS = [
  'bg-blue-100   text-blue-700   dark:bg-blue-900/30   dark:text-blue-300',
  'bg-green-100  text-green-800  dark:bg-green-900/30  dark:text-green-300',
  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'bg-cyan-100   text-cyan-700   dark:bg-cyan-900/30   dark:text-cyan-300',
  'bg-pink-100   text-pink-700   dark:bg-pink-900/30   dark:text-pink-300',
  'bg-red-100    text-red-700    dark:bg-red-900/30    dark:text-red-300',
  'bg-teal-100   text-teal-700   dark:bg-teal-900/30   dark:text-teal-300',
  'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
]

export function getSubmissionEventColor(code: number): string {
  return EVENT_COLORS[Math.abs(code) % EVENT_COLORS.length]
}

export function SubmissionEventBadge({
  code,
  desc,
}: {
  code: number | null | undefined
  desc?: string | null
}) {
  if (!code) return <span className="text-muted-foreground text-xs">—</span>
  const cls   = getSubmissionEventColor(code)
  const label = desc?.trim() || String(code)
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}>
      {label}
    </span>
  )
}
