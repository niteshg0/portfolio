import { cn } from "@/lib/utils";

/**
 * Quiet, typographic list of technologies — mono text separated by dots
 * rather than a wall of coloured badges.
 */
export function TechList({
  items,
  label = "Technologies",
  className,
}: {
  items: readonly string[];
  label?: string;
  className?: string;
}) {
  return (
    <ul
      aria-label={label}
      className={cn(
        "flex flex-wrap gap-x-2 gap-y-1 font-mono text-[0.8125rem] leading-6 text-muted",
        className
      )}
    >
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2">
          {item}
          {i < items.length - 1 ? (
            <span aria-hidden className="text-line-strong">
              /
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
