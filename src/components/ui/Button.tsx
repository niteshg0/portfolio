import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,transform] duration-200 " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-accent hover:text-accent-fg",
  secondary:
    "border border-line-strong bg-surface text-fg hover:border-fg",
  ghost: "text-muted hover:text-fg hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type StyleProps = { variant?: Variant; size?: Size };

export function Button({
  variant,
  size,
  className,
  ...props
}: ComponentProps<"button"> & StyleProps) {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

/**
 * Anchor styled as a button. Internal routes use next/link; external URLs,
 * mailto links and downloads render a plain anchor.
 */
export function ButtonLink({
  variant,
  size,
  className,
  href,
  external,
  ...props
}: Omit<ComponentProps<"a">, "href"> &
  StyleProps & { href: string; external?: boolean }) {
  const classes = buttonStyles({ variant, size, className });

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      />
    );
  }

  if (href.startsWith("/") && !props.download) {
    return <Link href={href} className={classes} {...props} />;
  }

  return <a href={href} className={classes} {...props} />;
}
