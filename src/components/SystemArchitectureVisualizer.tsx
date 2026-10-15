import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  Server,
  Database,
  Globe,
  Radio,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Terminal,
  Activity,
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  step: string;
  title: string;
  category: string;
  icon: typeof Cpu;
  badge: string;
  summary: string;
  technologies: string[];
  bottleneckSolved: string;
  metric: string;
  codeSnippet: string;
}

const architectureNodes: ArchitectureNode[] = [
  {
    id: 'iot-hardware',
    step: '01',
    title: 'Physical Sensing & Telemetry Ingestion',
    category: 'Hardware & Edge Layer',
    icon: Radio,
    badge: 'Hardware Edge',
    summary:
      'Ingests multi-parameter physical analog/digital telemetry streams from soil NPK, moisture, and pH electrodes via ESP32 microcontrollers.',
    technologies: ['ESP32', 'Arduino C++', 'Analog-to-Digital Converter', 'Serial Streaming'],
    bottleneckSolved:
      'Eliminated sensor jitter and noise through rolling moving-average sampling at 50Hz before payload serialization.',
    metric: '< 20ms Edge Pre-filtering',
    codeSnippet: `// ESP32 Moving Average Telemetry Buffer
float readSoilMoisture() {
  int rawADC = analogRead(MOISTURE_PIN);
  float voltage = (rawADC / 4095.0) * 3.3;
  return mapCalibration(voltage); // Clean calibrated %
}`,
  },
  {
    id: 'fastapi-gateway',
    step: '02',
    title: 'Asynchronous API Gateway & Ingestion',
    category: 'Backend Microservices',
    icon: Server,
    badge: 'FastAPI & Python',
    summary:
      'High-throughput asynchronous FastAPI gateway validating request payloads with strict Pydantic schemas and non-blocking I/O event loops for TN Scheme AI.',
    technologies: ['FastAPI', 'Python 3.13', 'Pydantic v2', 'Uvicorn ASGI'],
    bottleneckSolved:
      'Prevented thread exhaustion during complex rule evaluations across 50+ government welfare eligibility criteria.',
    metric: '< 150ms End-to-End Evaluation',
    codeSnippet: `@app.post("/api/v1/schemes/evaluate")
async def evaluate_student_eligibility(profile: StudentProfileSchema):
    # Asynchronous rule-matching against state criteria
    eligibility_scores = await evaluate_criteria_rules(profile)
    return {"matches": eligibility_scores, "status": "verified"}`,
  },
  {
    id: 'ml-inference',
    step: '03',
    title: 'Agricultural Crop & Fertilizer Recommendation',
    category: 'Applied AI & Telemetry',
    icon: Cpu,
    badge: 'Python & Scikit-Learn',
    summary:
      'Supervised classification models evaluating multi-dimensional physical soil telemetry (NPK, moisture, pH) to recommend optimal crop rotation and nutrient dosage.',
    technologies: ['Python', 'Scikit-Learn', 'NumPy', 'Pandas', 'ESP32 Telemetry'],
    bottleneckSolved:
      'Trained calibrated classifiers to prevent chemical over-fertilization and environmental runoff.',
    metric: 'Demonstrated at Barnstromz 2K26 Expo',
    codeSnippet: `# Scikit-Learn Multi-Parameter Crop Suitability Pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42))
])
recommended_crop = pipeline.predict(soil_features_matrix)`,
  },
  {
    id: 'data-persistence',
    step: '04',
    title: 'Distributed Cloud Persistence & Atomic State',
    category: 'Database & Realtime State',
    icon: Database,
    badge: 'MongoDB Atlas & Supabase',
    summary:
      'Race-condition-free inventory decrementing and session log persistence utilizing atomic operators ($gte, $inc) and PostgreSQL RLS security.',
    technologies: ['MongoDB Atlas', 'Supabase PostgreSQL', 'Firebase Firestore', 'Row Level Security'],
    bottleneckSolved:
      'Eliminated inventory double-spend in KisanConnect agricultural orders using atomic MongoDB compound operators.',
    metric: 'Zero-Race-Condition Atomic Transactions',
    codeSnippet: `// Atomic MongoDB Stock Decrement Pipeline
await db.collection("produce_listings").updateOne(
  { _id: produceId, stock_kg: { $gte: orderedQuantity } },
  { $inc: { stock_kg: -orderedQuantity } }
);`,
  },
  {
    id: 'client-presentation',
    step: '05',
    title: 'High-Performance Production UI & Clients',
    category: 'Frontend & Consumer Apps',
    icon: Globe,
    badge: 'React 18 & Firebase',
    summary:
      'Zero-latency interactive user experiences with sub-second initial paint times, responsive Tailwind systems, and 24/7 Spoofy AI representative.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase Hosting'],
    bottleneckSolved:
      'Optimized client bundle chunking and edge CDN asset caching to sustain sub-1.2s page loads across regional mobile networks.',
    metric: 'Sub-1.2s Page Load & 100% Mobile Responsive',
    codeSnippet: `// Client-Side Responsive State with Zero-Friction Checkout
export function StoreCheckout({ cart }) {
  const handleWhatsAppBridge = () => {
    const payload = serializeOrderPayload(cart);
    window.open(generateWhatsAppUrl(payload), '_blank');
  };
}`,
  },
];

export function SystemArchitectureVisualizer() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('fastapi-gateway');

  const activeNode =
    architectureNodes.find((n) => n.id === selectedNodeId) || architectureNodes[1];

  return (
    <section id="architecture" className="relative py-20 md:py-28 overflow-hidden bg-slate-950/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            <Layers className="h-3.5 w-3.5" />
            End-to-End System Blueprint
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Production <span className="text-cyan-400">System Architecture</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            How Surya engineers scalable software: from physical IoT sensor telemetry ingestion through asynchronous FastAPI gateways to applied neural model inference and atomic cloud persistence.
          </p>
        </div>

        {/* Interactive Architecture Flow Ribbon (Horizontal Swipe on Mobile, Expansive Grid on PC) */}
        <div className="flex lg:grid lg:grid-cols-5 gap-3 w-full max-w-7xl 2xl:max-w-[1700px] mx-auto mb-8 overflow-x-auto pb-3 lg:pb-0 scrollbar-none snap-x px-1">
          {architectureNodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`group relative p-4 rounded-2xl border text-left transition-all shrink-0 w-[240px] sm:w-[260px] lg:w-auto snap-start active:scale-95 ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/15'
                    : 'border-border/80 bg-card/60 hover:border-cyan-500/40 hover:bg-card/90'
                }`}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    STEP {node.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isSelected ? 'text-cyan-400' : 'text-muted-foreground group-hover:text-cyan-400'
                    }`}
                  />
                </div>

                <h4 className="text-xs sm:text-sm font-display font-bold text-foreground line-clamp-2">
                  {node.title}
                </h4>
                <p className="text-[10px] text-muted-foreground font-mono mt-1">
                  {node.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Deep-Dive Inspection Card (Expanded for PC Displays) */}
        <div className="w-full max-w-7xl 2xl:max-w-[1700px] mx-auto rounded-3xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-12 gap-8 items-start text-left"
            >
              {/* Left Column: Architectural Rationale */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                    {activeNode.category} &bull; Pipeline Phase {activeNode.step}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-1">
                    {activeNode.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed mt-2">
                    {activeNode.summary}
                  </p>
                </div>

                {/* Bottleneck Solved Box */}
                <div className="p-4 rounded-2xl bg-secondary/30 border border-border/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    Engineering Challenge &amp; Bottleneck Solved
                  </div>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {activeNode.bottleneckSolved}
                  </p>
                </div>

                {/* Tech Pills & Validated Metric */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Integrated Technologies &amp; Protocols:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-border bg-secondary/50 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Production Metric: <strong>{activeNode.metric}</strong></span>
                </div>
              </div>

              {/* Right Column: Code Implementation Snippet */}
              <div className="lg:col-span-5 rounded-2xl border border-border/90 bg-slate-950/90 overflow-hidden shadow-xl">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-border/70 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Code2 className="w-3.5 h-3.5" />
                    Clean Architecture Snippet
                  </span>
                  <span className="text-[10px] text-slate-400">Production Code</span>
                </div>
                <div className="p-4 overflow-x-auto text-[11px] font-mono text-slate-200 leading-relaxed scrollbar-none">
                  <pre>{activeNode.codeSnippet}</pre>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
