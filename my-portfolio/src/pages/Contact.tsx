import { MailIcon, MapPinIcon, PhoneIcon } from "../components/icons";
import { useState, type FormEvent } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { socialIconMap } from "../components/socialIcons";
import { handles, location, socials } from "../data/portfolio";

const details = [
  { icon: MailIcon, label: "Email", value: handles.emailName, href: handles.email },
  {
    icon: PhoneIcon,
    label: "Phone / WhatsApp",
    value: handles.whatsappName,
    href: handles.whatsapp,
  },
  { icon: MapPinIcon, label: "Location", value: location, href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const toEmail = handles.email.replace("mailto:", "");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${toEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
      });

      if (!res.ok) throw new Error("Form submission failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch"
        lead="I'm actively looking for internships, full-stack roles and freelance work. My inbox is always open."
      />

      <div className="mx-auto w-full max-w-[1170px] px-5 pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_290px]">
          <Reveal>
            <form onSubmit={submit} className="card p-6 md:p-10">
              <h2 className="text-2xl font-medium text-paper md:text-[34px]">
                Let&apos;s <span className="text-primary">work</span> together.
              </h2>

              <div className="mt-8 space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border-none bg-gradient-to-br from-white/5 to-white/[0.01] px-5 py-4 text-sm text-paper outline-none transition-shadow placeholder:text-soft/50 focus:ring-2 focus:ring-primary/60"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border-none bg-gradient-to-br from-white/5 to-white/[0.01] px-5 py-4 text-sm text-paper outline-none transition-shadow placeholder:text-soft/50 focus:ring-2 focus:ring-primary/60"
                />
                <textarea
                  required
                  rows={6}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border-none bg-gradient-to-br from-white/5 to-white/[0.01] px-5 py-4 text-sm text-paper outline-none transition-shadow placeholder:text-soft/50 focus:ring-2 focus:ring-primary/60"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="theme-btn w-full rounded-xl text-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Sending…"
                    : status === "sent"
                      ? "Message Sent ✓"
                      : status === "error"
                        ? "Try Again"
                        : "Send Message"}
                </button>

                <p
                  aria-live="polite"
                  className={`text-sm ${
                    status === "sent"
                      ? "text-emerald-400"
                      : status === "error"
                        ? "text-red-400"
                        : "hidden"
                  }`}
                >
                  {status === "sent"
                    ? "Thanks — your message is on its way to David's inbox."
                    : status === "error"
                      ? "Something went wrong. Please try again, or email David directly."
                      : ""}
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="card p-6">
                <h3 className="mb-6 text-base font-medium uppercase text-paper">
                  Contact Info
                </h3>
                <ul className="space-y-7">
                  {details.map((detail) => {
                    const Icon = detail.icon;
                    const inner = (
                      <>
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] text-paper">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-wide text-soft opacity-50">
                            {detail.label}
                          </span>
                          <span className="block truncate text-sm font-medium text-paper">
                            {detail.value}
                          </span>
                        </span>
                      </>
                    );
                    return (
                      <li key={detail.label} className="flex items-center gap-4">
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={
                              detail.href.startsWith("mailto")
                                ? undefined
                                : "_blank"
                            }
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 hover:opacity-90"
                          >
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="card flex items-center justify-around gap-3 p-5">
                {socials.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-paper transition-all hover:bg-paper hover:text-[#0F0F0F]"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}