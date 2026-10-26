import { useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FormState = { name: string; email: string; subject: string; message: string };
type FieldErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "sending" | "sent" | "error";

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) errors.message = "Message can't be empty.";
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const isConnected = Boolean(profile.contactFormEndpoint);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    if (!isConnected) {
      // Honest fallback: no backend/form service configured, so hand off to a real mailto
      // draft instead of faking a "message sent" confirmation.
      const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(profile.contactFormEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-ink-500 focus:outline-none ${
      errors[field] ? "border-red-500/60" : "border-ink-700 focus:border-lime-400"
    }`;

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="CONTACT" title={profile.contactHeadline} subtitle={profile.contactSupport} />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-900/40 px-5 py-4 text-sm text-white transition-colors hover:border-lime-400/40"
              >
                <Mail size={18} className="text-lime-400" /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-900/40 px-5 py-4 text-sm text-white transition-colors hover:border-lime-400/40"
              >
                <LinkedinIcon size={18} className="text-lime-400" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-900/40 px-5 py-4 text-sm text-white transition-colors hover:border-lime-400/40"
              >
                <GithubIcon size={18} className="text-lime-400" /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {!isConnected && (
                <p className="flex items-start gap-2 rounded-lg border border-dashed border-ink-600 bg-ink-900/60 px-3 py-2.5 text-xs text-ink-400">
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  No contact-form backend is configured yet, so sending this opens a pre-filled email to {profile.email}{" "}
                  instead of submitting silently.
                </p>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass("name")}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <input
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass("email")}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className={inputClass("subject")}
                  aria-invalid={Boolean(errors.subject)}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={inputClass("message")}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] disabled:opacity-60"
              >
                <Send size={15} />
                {status === "sending" ? "Sending..." : isConnected ? "Send Message" : "Open Email Draft"}
              </button>

              {status === "sent" && (
                <p className="flex items-center gap-2 text-sm text-lime-400">
                  <CheckCircle2 size={16} /> Message sent - thank you!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} /> Something went wrong - email me directly instead.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
