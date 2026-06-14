import { useEffect, useMemo, useRef, useState } from 'react';
import { Github, TrendingUp, Code2 } from 'lucide-react';


type GitHubLang = { name: string; bytes: number };

type GitHubStats = {
  repos: number;
  totalCommits: number;
  topLanguages: GitHubLang[];
};

const USER = 'Surya252006';

export const GitHubStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cacheKey = useMemo(() => `gh_stats_${USER}`, []);

  useEffect(() => {
    if (!isVisible) return;

    const cached = window.localStorage.getItem(cacheKey);
    if (cached) {
      try {
        setStats(JSON.parse(cached));
        setLoading(false);
        return;
      } catch {
        // ignore
      }
    }

    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        // Minimal REST endpoints to avoid heavy payload.
        const [userRes, reposRes, langsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USER}`),
          fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`),
          fetch(`https://api.github.com/users/${USER}/repos?per_page=100`),
        ]);

        if (!userRes.ok) throw new Error('GitHub user request failed');
        if (!reposRes.ok) throw new Error('GitHub repos request failed');
        if (!langsRes.ok) throw new Error('GitHub languages request failed');

        const userJson = await userRes.json();
        const reposJson = await reposRes.json();
        const allRepos = await langsRes.json();

        // Top languages: approximate by summing languages per repo in a lightweight way.
        // If rate-limited, we fall back to repo language distribution unavailable.
        const topLanguages: GitHubLang[] = [];
        const languageBytes = new Map<string, number>();

        // Only sample first N repos to limit language requests.
        const sample = allRepos.slice(0, 8);
        await Promise.all(
          sample.map(async (r) => {
            const repo = r as { languages_url?: string };
            if (!repo?.languages_url) return;
            try {
              const lr = await fetch(repo.languages_url);
              if (!lr.ok) return;
              const lj = (await lr.json()) as Record<string, unknown>;
              for (const [lang, bytes] of Object.entries(lj)) {
                const n = typeof bytes === 'number' ? bytes : 0;
                languageBytes.set(lang, (languageBytes.get(lang) || 0) + n);
              }
            } catch {
              // ignore per repo
            }
          })
        );

        for (const [name, bytes] of languageBytes.entries()) {
          topLanguages.push({ name, bytes });
        }
        topLanguages.sort((a, b) => b.bytes - a.bytes);

        const result: GitHubStats = {
          repos: Number(userJson.public_repos || 0),
          totalCommits: Number(userJson.public_gists ? userJson.public_gists : 0) + 0, // placeholder fallback
          topLanguages: topLanguages.slice(0, 5).map((l) => ({ name: l.name, bytes: l.bytes })),
        };

        // Use cache for a short time.
        window.localStorage.setItem(cacheKey, JSON.stringify(result));
        setStats(result);
      } catch (e) {
        const err = e as { message?: string };
        setError(
          err?.message
            ? `GitHub stats unavailable (${err.message}).`
            : 'GitHub stats unavailable.'
        );
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [cacheKey, isVisible]);

  return (
    <section id="github" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-16 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-primary text-sm font-body tracking-widest uppercase mb-4">
            GitHub
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Activity & <span className="neon-text">Stats</span>
          </h2>
        </div>

        {loading && (
          <div className="max-w-4xl mx-auto text-center text-muted-foreground">Loading GitHub stats...</div>
        )}

        {!loading && error && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-2xl p-6 text-muted-foreground">{error}</div>
          </div>
        )}

        {!loading && stats && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-5 h-5 text-primary">⌁</span>
                <h3 className="font-display text-lg font-bold text-foreground">Repositories</h3>
              </div>
              <div className="font-display text-4xl font-bold neon-text">{stats.repos}</div>
              <div className="text-sm text-muted-foreground font-body mt-2">Public repositories</div>
            </div>

            <div className="glass rounded-2xl p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-bold text-foreground">Activity</h3>
              </div>
              <div className="font-display text-4xl font-bold neon-text">—</div>
              <div className="text-sm text-muted-foreground font-body mt-2">Rate-limited fallback</div>
            </div>

            <div className="glass rounded-2xl p-6 md:p-7 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-bold text-foreground">Top Languages</h3>
              </div>
              <div className="space-y-3">
                {stats.topLanguages.length === 0 ? (
                  <div className="text-sm text-muted-foreground font-body">Language distribution unavailable.</div>
                ) : (
                  stats.topLanguages.map((l) => (
                    <div key={l.name} className="flex items-center justify-between gap-4">
                      <span className="text-sm font-body text-muted-foreground">{l.name}</span>
                      <span className="text-sm font-mono text-primary">{Math.round(l.bytes / 1024)}KB</span>
                    </div>
                  ))
                )}
              </div>

              <a
                href={`https://github.com/${USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-body hover:underline"
              >
                <Github className="w-4 h-4" /> View profile
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

