"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { site } from "@/content/site";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

const fieldStyles =
  "w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-[0.9375rem] text-fg " +
  "placeholder:text-subtle transition-colors hover:border-subtle " +
  "focus:border-accent focus:outline-2 focus:outline-offset-0 focus:outline-accent/30 " +
  "aria-[invalid=true]:border-danger";

function Field({
  label,
  error,
  children,
  id,
}: {
  label: string;
  error?: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  async function onSubmit(values: ContactValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    message: `${uid}-message`,
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-line bg-surface p-5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id={ids.name} error={errors.name?.message}>
          <input
            id={ids.name}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${ids.name}-error` : undefined}
            className={fieldStyles}
            {...register("name")}
          />
        </Field>
        <Field label="Email" id={ids.email} error={errors.email?.message}>
          <input
            id={ids.email}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${ids.email}-error` : undefined}
            className={fieldStyles}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" id={ids.message} error={errors.message?.message}>
          <textarea
            id={ids.message}
            rows={6}
            placeholder="Tell me a little about the role or project…"
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? `${ids.message}-error` : undefined
            }
            className={cn(fieldStyles, "min-h-36 resize-y")}
            {...register("message")}
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </>
          )}
        </Button>

        <p aria-live="polite" className="text-sm sm:text-right">
          {status === "sent" ? (
            <span className="inline-flex items-center gap-1.5 text-success">
              <Check className="size-4" aria-hidden />
              Thanks — your message is on its way.
            </span>
          ) : null}
          {status === "error" ? (
            <span className="text-danger">
              That didn&apos;t go through. Please email me directly at{" "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
              .
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
