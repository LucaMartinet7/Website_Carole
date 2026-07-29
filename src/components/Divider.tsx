type DividerProps = {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-14 bg-[linear-gradient(to_right,transparent,rgba(201,169,110,0.55))] sm:w-20" />
      <span className="text-[0.6rem] tracking-[0.3em] text-[var(--gold)]">◆</span>
      <span className="h-px w-14 bg-[linear-gradient(to_left,transparent,rgba(201,169,110,0.55))] sm:w-20" />
    </div>
  )
}
