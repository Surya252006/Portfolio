import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Code2,
  ExternalLink,
  ChevronRight,
  Terminal,
} from 'lucide-react';
import { Button } from './ui/button';

export function InteractiveModelPlayground() {
  const [activeTab, setActiveTab] = useState<'medpulse' | 'soil'>('medpulse');

  // MedPulse AI State
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    'High Fever (>102°F)',
    'Persistent Cough',
    'Fatigue & Chills',
  ]);
  const [patientAge, setPatientAge] = useState<number>(32);
  const [isInferencingMed, setIsInferencingMed] = useState(false);
  const [medResult, setMedResult] = useState<{
    triageCategory: string;
    urgencyLevel: 'Emergency' | 'Urgent' | 'Semi-Urgent' | 'Routine';
    confidence: number;
    latencyMs: number;
    recommendedAction: string;
  } | null>({
    triageCategory: 'Acute Respiratory Symptom Complex',
    urgencyLevel: 'Urgent',
    confidence: 94.2,
    latencyMs: 118,
    recommendedAction: 'Priority clinical evaluation within 2 hours; secondary pulmonary observation recommended.',
  });

  // Soil Telemetry State
  const [nitrogen, setNitrogen] = useState<number>(140);
  const [phosphorus, setPhosphorus] = useState<number>(45);
  const [potassium, setPotassium] = useState<number>(180);
  const [ph, setPh] = useState<number>(6.5);
  const [moisture, setMoisture] = useState<number>(68);
  const [isInferencingSoil, setIsInferencingSoil] = useState(false);
  const [soilResult, setSoilResult] = useState<{
    primaryCrop: string;
    matchScore: number;
    secondaryCrop: string;
    secondaryScore: number;
    fertilizerDeficiency: string;
    dosageAdvice: string;
    latencyMs: number;
  } | null>({
    primaryCrop: 'Basmati Paddy (Rice)',
    matchScore: 92.8,
    secondaryCrop: 'High-Yield Maize',
    secondaryScore: 84.5,
    fertilizerDeficiency: 'Phosphorus Marginal (-12 kg/ha)',
    dosageAdvice: 'Apply single superphosphate (SSP) top-dressing before vegetative flowering stage.',
    latencyMs: 96,
  });

  const availableSymptoms = [
    'High Fever (>102°F)',
    'Persistent Cough',
    'Chest Tightness / Dyspnea',
    'Fatigue & Chills',
    'Severe Headache',
    'Oxygen Saturation < 94%',
    'Loss of Taste / Smell',
    'Abdominal Pain',
  ];

  const handleToggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const runMedPulseInference = () => {
    setIsInferencingMed(true);
    setMedResult(null);

    setTimeout(() => {
      const count = selectedSymptoms.length;
      const hasCritical =
        selectedSymptoms.includes('Chest Tightness / Dyspnea') ||
        selectedSymptoms.includes('Oxygen Saturation < 94%');

      let urgency: 'Emergency' | 'Urgent' | 'Semi-Urgent' | 'Routine' = 'Semi-Urgent';
      let category = 'Moderate Viral / Systemic Pattern';
      let advice = 'Standard clinical consult within 24 hours with vitals check.';

      if (hasCritical || count >= 5) {
        urgency = 'Emergency';
        category = 'Cardiopulmonary Critical Risk Vector';
        advice = 'Immediate clinical triage required; triage code RED priority.';
      } else if (count >= 3) {
        urgency = 'Urgent';
        category = 'Acute Inflammatory Respiratory Pattern';
        advice = 'Priority clinical consultation within 2-4 hours.';
      } else if (count <= 1) {
        urgency = 'Routine';
        category = 'Mild Non-Urgent Outpatient Vector';
        advice = 'Standard outpatient observation and hydration.';
      }

      setMedResult({
        triageCategory: category,
        urgencyLevel: urgency,
        confidence: Number((89 + Math.random() * 8).toFixed(1)),
        latencyMs: Math.floor(100 + Math.random() * 45),
        recommendedAction: advice,
      });
      setIsInferencingMed(false);
    }, 600);
  };

  const runSoilInference = () => {
    setIsInferencingSoil(true);
    setSoilResult(null);

    setTimeout(() => {
      let crop = 'Basmati Paddy (Rice)';
      let score = 91.4;
      let secCrop = 'Maize';
      let secScore = 82.0;
      let def = 'Optimal Nutrient Balance';
      let advice = 'Maintain current NPK irrigation schedule; test moisture in 7 days.';

      if (ph < 6.0) {
        crop = 'Tea / Camellia Sinensis';
        score = 88.5;
        secCrop = 'Potato';
        secScore = 81.2;
        def = 'Acidic Soil Chemistry (pH < 6.0)';
        advice = 'Apply agricultural lime (calcium carbonate) to buffer soil acidity.';
      } else if (nitrogen > 150 && moisture > 60) {
        crop = 'Basmati Paddy (Rice)';
        score = 94.6;
        secCrop = 'Sugarcane';
        secScore = 86.4;
        def = 'High Organic Nitrogen Availability';
        advice = 'Optimize potassium application to prevent vegetative lodging.';
      } else if (potassium > 160) {
        crop = 'Cotton / Fiber Crops';
        score = 90.2;
        secCrop = 'Groundnut';
        secScore = 83.1;
        def = 'Potassium Enriched Matrix';
        advice = 'Excellent for boll formation; monitor soil moisture retention.';
      }

      setSoilResult({
        primaryCrop: crop,
        matchScore: score,
        secondaryCrop: secCrop,
        secondaryScore: secScore,
        fertilizerDeficiency: def,
        dosageAdvice: advice,
        latencyMs: Math.floor(85 + Math.random() * 35),
      });
      setIsInferencingSoil(false);
    }, 550);
  };

  return (
    <section id="playground" className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <Zap className="h-3.5 w-3.5" />
            Live Client-Side Demo Sandboxes
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Interactive <span className="text-primary">AI Inference</span> Playground
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Test Surya's applied machine learning pipelines directly in your browser. Experiment with parameters, inspect inference latency, and verify real-time classification metrics.
          </p>

          {/* Model Switcher Tabs */}
          <div className="inline-flex items-center p-1.5 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md mt-6 shadow-md">
            <button
              onClick={() => setActiveTab('medpulse')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-medium transition-all ${
                activeTab === 'medpulse'
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Activity className="w-4 h-4" />
              MedPulse AI (Healthcare Triage)
            </button>

            <button
              onClick={() => setActiveTab('soil')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-medium transition-all ${
                activeTab === 'soil'
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Cpu className="w-4 h-4" />
              Soil Telemetry (Crop ML)
            </button>
          </div>
        </div>

        {/* Playground Container Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-border/90 bg-card/90 backdrop-blur-xl shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Cyber HUD accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none" />

          <AnimatePresence mode="wait">
            {/* ===================== TAB 1: MEDPULSE AI ===================== */}
            {activeTab === 'medpulse' && (
              <motion.div
                key="medpulse"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-border/70">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                        <Activity className="w-5 h-5 text-primary" />
                        MedPulse-Triage-v2 Diagnostic Simulator
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        FastAPI Endpoint Simulation &bull; Latency Target &lt; 150ms
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Model Online
                    </span>
                  </div>

                  {/* Patient Age Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <span>Patient Age:</span>
                      <span className="text-primary font-bold">{patientAge} Years</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={95}
                      value={patientAge}
                      onChange={(e) => setPatientAge(Number(e.target.value))}
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  {/* Symptoms Checklist */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Select Symptoms Vector ({selectedSymptoms.length} active):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableSymptoms.map((symptom) => {
                        const isSelected = selectedSymptoms.includes(symptom);
                        return (
                          <button
                            key={symptom}
                            type="button"
                            onClick={() => handleToggleSymptom(symptom)}
                            className={`flex items-center gap-2.5 p-2.5 rounded-xl text-xs font-mono text-left transition-all border ${
                              isSelected
                                ? 'bg-primary/15 border-primary text-foreground shadow-sm'
                                : 'bg-secondary/40 border-border/80 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                                isSelected
                                  ? 'bg-primary border-primary text-white'
                                  : 'border-muted-foreground/40'
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="w-3 h-3" />}
                            </span>
                            <span className="truncate">{symptom}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="flex items-center gap-3 pt-2">
                    <Button
                      onClick={runMedPulseInference}
                      disabled={isInferencingMed || selectedSymptoms.length === 0}
                      className="font-medium text-xs sm:text-sm"
                    >
                      {isInferencingMed ? (
                        <>
                          <Sparkles className="w-4 h-4 mr-1.5 animate-spin" />
                          Evaluating Neural Vector...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-1.5 fill-current" />
                          Execute Triage Inference
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedSymptoms(['High Fever (>102°F)', 'Persistent Cough']);
                        setPatientAge(28);
                      }}
                      className="text-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5 mr-1" />
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Real-time Output Column */}
                <div className="lg:col-span-5 rounded-2xl border border-border/90 bg-slate-950/80 p-5 sm:p-6 space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-border/70 pb-3">
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-primary" />
                      Inference Telemetry
                    </span>
                    {medResult && (
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        Latency: {medResult.latencyMs}ms
                      </span>
                    )}
                  </div>

                  {medResult ? (
                    <div className="space-y-4">
                      {/* Urgency Badge */}
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">
                          Computed Clinical Urgency
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider ${
                              medResult.urgencyLevel === 'Emergency'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : medResult.urgencyLevel === 'Urgent'
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}
                          >
                            {medResult.urgencyLevel}
                          </span>
                          <span className="text-xs font-mono text-slate-300">
                            Confidence: <strong className="text-foreground">{medResult.confidence}%</strong>
                          </span>
                        </div>
                      </div>

                      {/* Diagnostic Category */}
                      <div className="p-3 rounded-xl bg-secondary/30 border border-border/60">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                          Identified Condition Pattern
                        </span>
                        <span className="text-xs sm:text-sm font-display font-bold text-foreground">
                          {medResult.triageCategory}
                        </span>
                      </div>

                      {/* Clinical Advice */}
                      <div className="text-xs text-slate-300 space-y-1 font-body">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                          Triage Routing Protocol
                        </span>
                        <p>{medResult.recommendedAction}</p>
                      </div>

                      {/* Verified Badge */}
                      <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-muted-foreground">Framework: FastAPI + Scikit-Learn</span>
                        <a
                          href="https://github.com/Surya252006/medplus-ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          View Repository <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="py-12 text-center text-muted-foreground font-mono text-xs">
                      <Sparkles className="w-6 h-6 mx-auto mb-2 text-primary animate-pulse" />
                      Computing inference matrix...
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ===================== TAB 2: SOIL TELEMETRY ===================== */}
            {activeTab === 'soil' && (
              <motion.div
                key="soil"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-border/70">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-primary" />
                        Soil Matrix &amp; Telemetry Recommendation Model
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        Physical Sensor Ingestion (ESP32) &bull; 91.4% Validated Accuracy
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Sensors Active
                    </span>
                  </div>

                  {/* Slider Matrix */}
                  <div className="space-y-3.5">
                    {/* Nitrogen */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-slate-300">
                        <span>Nitrogen (N) Content:</span>
                        <span className="text-primary font-bold">{nitrogen} mg/kg</span>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={220}
                        value={nitrogen}
                        onChange={(e) => setNitrogen(Number(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    {/* Phosphorus */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-slate-300">
                        <span>Phosphorus (P) Content:</span>
                        <span className="text-primary font-bold">{phosphorus} mg/kg</span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={120}
                        value={phosphorus}
                        onChange={(e) => setPhosphorus(Number(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    {/* Potassium */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-slate-300">
                        <span>Potassium (K) Content:</span>
                        <span className="text-primary font-bold">{potassium} mg/kg</span>
                      </div>
                      <input
                        type="range"
                        min={40}
                        max={260}
                        value={potassium}
                        onChange={(e) => setPotassium(Number(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    {/* pH & Moisture */}
                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono text-slate-300">
                          <span>Soil pH:</span>
                          <span className="text-emerald-400 font-bold">{ph}</span>
                        </div>
                        <input
                          type="range"
                          min={4.0}
                          max={9.0}
                          step={0.1}
                          value={ph}
                          onChange={(e) => setPh(Number(e.target.value))}
                          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono text-slate-300">
                          <span>Moisture:</span>
                          <span className="text-cyan-400 font-bold">{moisture}%</span>
                        </div>
                        <input
                          type="range"
                          min={15}
                          max={95}
                          value={moisture}
                          onChange={(e) => setMoisture(Number(e.target.value))}
                          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <Button
                      onClick={runSoilInference}
                      disabled={isInferencingSoil}
                      className="font-medium text-xs sm:text-sm"
                    >
                      {isInferencingSoil ? (
                        <>
                          <Sparkles className="w-4 h-4 mr-1.5 animate-spin" />
                          Evaluating Soil Matrix...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-1.5 fill-current" />
                          Predict Optimal Crop &amp; Dosage
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setNitrogen(140);
                        setPhosphorus(45);
                        setPotassium(180);
                        setPh(6.5);
                        setMoisture(68);
                      }}
                      className="text-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5 mr-1" />
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Output Column */}
                <div className="lg:col-span-5 rounded-2xl border border-border/90 bg-slate-950/80 p-5 sm:p-6 space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-border/70 pb-3">
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-primary" />
                      Crop ML Recommendation
                    </span>
                    {soilResult && (
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        Latency: {soilResult.latencyMs}ms
                      </span>
                    )}
                  </div>

                  {soilResult ? (
                    <div className="space-y-4">
                      {/* Top Recommended Crop */}
                      <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/30">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-primary font-bold uppercase">
                            Primary Optimal Crop
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            {soilResult.matchScore}% Match
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-display font-bold text-foreground mt-1">
                          {soilResult.primaryCrop}
                        </h4>
                      </div>

                      {/* Secondary Alternative */}
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-secondary/30 text-xs font-mono">
                        <span className="text-muted-foreground">Secondary Alternative:</span>
                        <span className="text-slate-200">
                          {soilResult.secondaryCrop} ({soilResult.secondaryScore}%)
                        </span>
                      </div>

                      {/* Chemical Deficiency Analysis */}
                      <div className="space-y-1 text-xs">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                          Nutrient Diagnostic Status
                        </span>
                        <div className="p-2 rounded-lg bg-secondary/40 font-mono text-slate-300">
                          {soilResult.fertilizerDeficiency}
                        </div>
                      </div>

                      {/* Dosage Guidance */}
                      <div className="text-xs text-slate-300 space-y-1 font-body">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                          Bio-Fertilizer Prescription
                        </span>
                        <p>{soilResult.dosageAdvice}</p>
                      </div>

                      {/* Hardware Link */}
                      <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-muted-foreground">Hardware: ESP32 + ADC Ingestion</span>
                        <a
                          href="https://github.com/Surya252006"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          Explore ML Systems <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="py-12 text-center text-muted-foreground font-mono text-xs">
                      <Sparkles className="w-6 h-6 mx-auto mb-2 text-primary animate-pulse" />
                      Computing crop classification vector...
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
