import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { sendEmailJS } from '@/lib/emailjs';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 20) e.message = 'Message should be at least 20 characters.';
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0 && !submitting;

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length > 0) {
      toast.error('Check the form', { description: 'Please fix the highlighted fields.' });
      return;
    }

    setSubmitting(true);
    try {
      // EmailJS example integration (replace with your real IDs)
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      if (
        serviceId.includes('YOUR_') ||
        templateId.includes('YOUR_') ||
        publicKey.includes('YOUR_')
      ) {
        // Fallback (mailto) if EmailJS isn't configured
        window.location.href = `mailto:surya25suresh2006@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        )}`;
        toast.success('Opening your email client…');
        return;
      }

      await sendEmailJS({
        serviceId,
        templateId,
        publicKey,
        name: form.name,
        email: form.email,
        message: form.message,
      });

      toast.success('Message sent', { description: 'I will get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
      setTouched({});
    } catch {
      toast.error('Failed to send message', { description: 'Please try again or email me directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'surya25suresh2006@gmail.com',
      href: 'mailto:surya25suresh2006@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  const social = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Surya252006' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/surya-suresh-755937267/' },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(59,130,246,0.08),transparent_55%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-secondary/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-body tracking-widest uppercase text-text-secondary">Contact</span>
          </div>
          <h2 className="mt-5 font-display font-bold text-[40px] sm:text-[48px] text-foreground">
            Let’s build something <span className="text-primary">great</span>
          </h2>
          <p className="mt-4 text-text-secondary font-body max-w-2xl mx-auto">
            Send a message with context. I reply quickly and value clear problem statements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-foreground">Direct</h3>
                <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-success" /> Available
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary font-body">{c.label}</div>
                      <div className="text-base font-body font-medium text-foreground">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-display text-lg font-bold text-foreground">Social</h4>
                <div className="flex gap-3 mt-3">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-2xl border border-border bg-secondary/20 inline-flex items-center justify-center hover:bg-secondary/30 transition-colors"
                      aria-label={s.label}
                    >
                      <s.icon className="w-5 h-5 text-text-secondary hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
              <h3 className="font-display text-xl font-bold text-foreground">What to include</h3>
              <ul className="mt-4 space-y-3 text-text-secondary font-body">
                {[
                  'Your goal (recruitment, project, startup collaboration)',
                  'Timeline and constraints',
                  'What success looks like',
                  'Any relevant links or requirements',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-7"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-body text-text-secondary">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                  className="mt-2 bg-secondary/30"
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {touched.name && errors.name ? (
                  <div id="name-error" className="mt-2 text-sm text-[var(--success)] font-body">
                    {errors.name}
                  </div>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-body text-text-secondary">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                  className="mt-2 bg-secondary/30"
                  aria-invalid={Boolean(touched.email && errors.email)}
                  required
                />
                {touched.email && errors.email ? (
                  <div className="mt-2 text-sm text-[var(--success)] font-body">{errors.email}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-body text-text-secondary">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  onBlur={() => setTouched((p) => ({ ...p, message: true }))}
                  className="mt-2 bg-secondary/30"
                  rows={5}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  required
                />
                {touched.message && errors.message ? (
                  <div className="mt-2 text-sm text-[var(--success)] font-body">{errors.message}</div>
                ) : null}
              </div>

              <Button
                type="submit"
                variant="default"
                size="xl"
                className="w-full mt-2"
                disabled={!canSubmit}
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-3">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>

              <p className="text-xs text-text-secondary font-body">
                By sending, you confirm you’re okay with being contacted about this message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

