"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/** Large mailto link with a copy-to-clipboard affordance. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context, denied permission) — the
      // mailto link next to this button still works.
    }
  }

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
      <a
        href={`mailto:${email}`}
        className="link break-all text-xl font-semibold tracking-tight text-fg hover:text-accent sm:text-2xl"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line-strong px-3 text-xs font-medium text-muted transition-colors hover:border-fg hover:text-fg"
      >
        {copied ? (
          <Check className="size-3.5 text-success" aria-hidden />
        ) : (
          <Copy className="size-3.5" aria-hidden />
        )}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
