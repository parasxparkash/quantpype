const wikiNav = [
  { id: "overview", label: "Overview" },
  { id: "what-problem", label: "What We Solve" },
  { id: "agents", label: "Agents" },
  { id: "risk-portfolio", label: "Risk & Portfolio" },
];

export default function WikiPage() {
  return (
    <main className="min-h-screen py-6 sm:py-8 w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Wiki
          </h1>
          <p className="mt-1 text-slate-500 text-sm">
            Platform docs: vision, problems we solve, agents, risk management.
          </p>
        </header>

        {/* Simple horizontal nav */}
        <nav className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-slate-200">
          {wikiNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <article className="space-y-12">
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Platform Wiki</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p><strong className="text-slate-800">Vision:</strong> Democratize institutional-grade quant finance through hybrid intelligence—local data sovereignty with cloud-scale monitoring.</p>
              <p><strong className="text-slate-800">Mission:</strong> Ultra-low latency, secure, collaborative AI for high-frequency pipelines and collective quant agents.</p>
              <p>QuantPype is a terminal that orchestrates specialized AI agents: proprietary logic on local hardware, global monitoring on cloud swarms. See <a href="#what-problem" className="text-cyan-600 hover:underline">What We Solve</a> for how we address core bottlenecks.</p>
              <p><strong className="text-slate-800">Components:</strong> Pipelines (data + execution), Agents (SLMs per task), Dashboard (fund value, exposure, latency). Next.js, React 19, Tailwind; Sovereign Local Nodes + Cloud Swarm + Quantum Bridge.</p>
              <p>We use small, quantized models (4–8 bit) and knowledge distillation to reach 0.04ms latency. Run: <code className="bg-slate-100 px-1 rounded font-mono text-xs">npm install</code> → <code className="bg-slate-100 px-1 rounded font-mono text-xs">npm run dev</code> or <code className="bg-slate-100 px-1 rounded font-mono text-xs">npm run build</code> + <code className="bg-slate-100 px-1 rounded font-mono text-xs">npm start</code>.</p>
            </div>
          </section>

          <section id="what-problem" className="scroll-mt-24">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">What Problem It Solves</h2>
            <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-medium text-slate-800 mb-1">1. Privacy vs. cloud</h3>
                <p>Problem: Proprietary strategies and real-time data in the cloud risk IP and security. Solution: Hybrid setup—Cloud Swarm for non-sensitive work, Sovereign Local Nodes for Alpha and keys; Quantum Bridge keeps execution zero-knowledge.</p>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-1">2. Latency</h3>
                <p>Problem: LLMs are too slow for HFT. Solution: SLMs, quantized and task-specific, in GPU/CPU cache → 0.04ms inference.</p>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-1">3. Pipeline orchestration</h3>
                <p>Problem: Terabytes of data and risk limits need big teams. Solution: Terminal UI for Pipelines and Agents; platform handles containers, chunking, load balancing.</p>
              </div>
            </div>
          </section>

          <section id="agents" className="scroll-mt-24">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Agent Orchestration</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>Agents are small, specialized models (one task each). Created via distillation, then quantized (e.g. GGUF) and deployed to Cloud Swarm or Local Node. Cloud = horizontal scale; Local = your hardware, lowest latency.</p>
              <p>Engines: TensorRT, ONNX Runtime, CoreML. Bridge: mTLS, zero-knowledge (cloud never sees trade “why”).</p>
              <p><strong className="text-slate-800">Types:</strong> Information (SentimentX, AlphaScanner, DarkPoolScan), Risk (RiskSentinel, Guardian.ai), Execution (NeuralArb, LiquidityFlow). Flow: Ingest → confirm → Alpha decides → Risk approves → execute; under 1ms.</p>
            </div>
          </section>

          <section id="risk-portfolio" className="scroll-mt-24">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Risk & Portfolio Management</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>Alpha agents say “yes”; risk agents say “no.” Proposals go through pre-trade checks: RiskSentinel (fat-finger, margin, wash-trade), VolatilityNexus (position sizing by volatility).</p>
              <p>Guardian.ai keeps global balance: correlation of strategies, capital reallocation, drawdown enforcement (can disable a pipeline if it breaches).</p>
              <p>Flow: Alpha → volatility sizing → veto checks → execution on local nodes → Guardian recalibrates weights.</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
