import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please provide your name.';
    if (!form.email.trim()) e.email = 'Please provide your email.';
    else if (!isValidEmail(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please provide a brief message.';
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0 && !submitting;

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length > 0) {
      toast.error('Incomplete form', { description: 'Please fill in all required fields.' });
      return;
    }

    setSubmitting(true);
    try {
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      if (
        serviceId.includes('YOUR_') ||
        templateId.includes('YOUR_') ||
        publicKey.includes('YOUR_')
      ) {
        // Direct email fallback
        const subjectLine = form.subject.trim() ? encodeURIComponent(form.subject) : 'Project%20Inquiry%20from%20Portfolio';
        window.location.href = `mailto:surya25suresh2006@gmail.com?subject=${subjectLine}&body=${encodeURIComponent(
          `Hi Surya,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`
        )}`;
        toast.success('Opening your email client to send message...');
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

      toast.success('Message delivered successfully', { description: 'Thanks for reaching out! I will respond promptly.' });
      setForm({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } catch {
      toast.error('Unable to send message automatically', { description: 'Please send an email directly to surya25suresh2006@gmail.com' });
    } finally {
      setSubmitting(false);
    }
  };

  const contactChannels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'surya25suresh2006@gmail.com',
      href: 'mailto:surya25suresh2006@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/surya-suresh-755937267',
      href: 'https://www.linkedin.com/in/surya-suresh-755937267/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Surya252006',
      href: 'https://github.com/Surya252006',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Let's Discuss a <span className="text-primary">Project</span> or Opportunity
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Whether you have an engineering role, a software project, or just want to connect, feel free to send a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Info & Communication Cards */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <h3 className="font-display text-lg font-bold text-foreground">
                  Direct Channels
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Fast Response
                </span>
              </div>

              <div className="space-y-3">
                {contactChannels.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="p-3.5 rounded-xl border border-border/70 bg-secondary/30 hover:bg-secondary/60 hover:border-primary/40 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-muted-foreground font-mono">{c.label}</div>
                          <div className="text-xs sm:text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                            {c.value}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Availability Card */}
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-7 shadow-sm space-y-3">
              <h4 className="font-display text-base font-bold text-foreground">
                Target Roles & Engagements
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Artificial Intelligence & Machine Learning Engineering Roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Applied AI, Deep Learning Models & Python Backends (FastAPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full-Stack AI Application Engineering & IoT Telemetry Systems</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/70">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    I typically respond within 24 hours.
                  </p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                      className="bg-secondary/40 border-border"
                      required
                    />
                    {touched.name && errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Your Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                      className="bg-secondary/40 border-border"
                      required
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                    Subject (Optional)
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="e.g. Engineering Role / Web Project Inquiry"
                    value={form.subject}
                    onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                    className="bg-secondary/40 border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, or open role..."
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    onBlur={() => setTouched((p) => ({ ...p, message: true }))}
                    className="bg-secondary/40 border-border resize-none"
                    required
                  />
                  {touched.message && errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full font-medium"
                  disabled={!canSubmit}
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
