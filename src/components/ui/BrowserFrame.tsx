import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Minimal browser chrome that frames a project screenshot. */
export function BrowserFrame({
  url,
  children,
  className,
}: {
  /** Shown in the address bar, e.g. "alma-sphere-drab.vercel.app". */
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-surface shadow-soft",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        {url ? (
          <p className="min-w-0 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[0.6875rem] text-muted">
            {url}
          </p>
        ) : null}
        <span aria-hidden className="hidden w-[2.75rem] sm:block" />
      </div>
      {children}
    </div>
  );
}
