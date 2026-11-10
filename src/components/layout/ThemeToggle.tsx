"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Both icons are always rendered and swapped with CSS, so the control is
 * correct on first paint without waiting for hydration.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className="flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <Sun className="hidden size-[1.125rem] dark:block" aria-hidden />
      <Moon className="size-[1.125rem] dark:hidden" aria-hidden />
    </button>
  );
}
