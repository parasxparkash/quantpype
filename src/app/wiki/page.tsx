const wikiNav = [
  { id: "overview", label: "Overview" },
  { id: "pipeline-workflow", label: "Pipeline Workflow" },
  { id: "what-problem", label: "What We Solve" },
  { id: "agents", label: "Agents" },
  { id: "risk-portfolio", label: "Risk & Portfolio" },
  { id: "who-its-for", label: "Who It's For" },
  { id: "glossary", label: "Glossary" },
];

export default function WikiPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wiki title bar */}
        <div className="mb-6 pb-4 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            QuantPype Wiki
          </h1>
          <p className="mt-1 text-slate-500 text-sm">
            Platform documentation: workflow, problems we solve, agents, risk, who it's for, glossary.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar: Table of contents (wiki-style) */}
          <aside className="lg:w-52 shrink-0">
            <nav
              className="lg:sticky lg:top-24 p-4 rounded-lg bg-white border border-slate-200 shadow-sm"
              aria-label="Wiki table of contents"
            >
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Contents
              </h2>
              <ul className="space-y-1">
                {wikiNav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block py-2 px-3 text-sm text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-md transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main content: wiki article */}
          <article className="flex-1 min-w-0">
            <div className="prose-wiki max-w-none">
              {/* Section: Overview */}
              <section
                id="overview"
                className="scroll-mt-28 mb-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200">
                  Platform Wiki
                </h2>
                <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
                  <h3 className="text-base font-semibold text-slate-800 mt-6 mb-2">
                    What QuantPype is
                  </h3>
                  <p>
                    QuantPype is an <strong>open platform and framework</strong>, not a traditional SaaS. You self-host and plug in your own strategies and data. We provide the orchestration layer, risk framework, and UI. Optional cloud parts (e.g. backtesting, sentiment) can be offered later; core alpha and execution stay under your control.
                  </p>
                  <p>
                    <strong>Vision:</strong> Make it practical for smaller teams to run institutional-style quant workflows—alpha and execution local, cloud only where it&apos;s safe and scalable.
                  </p>
                  <p>
                    <strong>Mission:</strong> Secure, local-first platform that orchestrates pipelines and agents (rules and/or small ML models), with clear separation between alpha and risk, and one terminal-style UI.
                  </p>
                  <p>
                    QuantPype connects local components (your hardware, execution, keys) with optional cloud (e.g. sentiment, backtest). See <a href="#what-problem" className="text-cyan-600 hover:underline">What We Solve</a> for the problems this addresses.
                  </p>
                  <p>
                    <strong>Feasible features:</strong> Pipelines and agents (rule-based + small models), dashboard, configurable risk layer, backtesting, paper trading, audit logs, REST/WebSocket API for custom agents, broker/venue adapters (where you&apos;re licensed), local-first execution.
                  </p>
                  <p>
                    <strong>Tech:</strong> Web app: Next.js, React, Tailwind. Backend/runtime: your local nodes + optional cloud; encrypted link (e.g. mTLS). Latency: single-step inference can be low-ms; full pipeline (data → order) in milliseconds to tens of milliseconds depending on setup.
                  </p>
                  <p>
                    Run the app: <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-sm">npm install</code> → <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-sm">npm run dev</code> (or <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-sm">npm run build</code> + <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-sm">npm start</code>).
                  </p>
                </div>
              </section>

              {/* Section: Pipeline Workflow */}
              <section
                id="pipeline-workflow"
                className="scroll-mt-28 mb-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200">
                  Pipeline Workflow
                </h2>
                <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
                  <p>
                    A typical quant pipeline flows through six layers. Data and backtest can run in the cloud; alpha, risk, and execution run locally.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Data</strong> — Market data, alternative data, news/sentiment, reference data.</li>
                    <li><strong>Research &amp; Alpha</strong> — Signal generation, backtesting, alpha models, factor library. Alpha stays local.</li>
                    <li><strong>Risk &amp; Compliance</strong> — Pre-trade risk, VaR/exposure, compliance, wash-trade, margin.</li>
                    <li><strong>Portfolio</strong> — Sizing, allocation, rebalancing, correlation monitoring.</li>
                    <li><strong>Execution</strong> — Order management, smart routing, venues, FIX/API. Runs on your nodes.</li>
                    <li><strong>Post-trade</strong> — Settlement, reporting, P&amp;L attribution, audit log.</li>
                  </ol>
                  <p>
                    The Pipelines page in the app shows this workflow; you configure which agents and pipelines belong to each layer.
                  </p>
                </div>
              </section>

              {/* Section: What Problem It Solves */}
              <section
                id="what-problem"
                className="scroll-mt-28 mb-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200">
                  What Problem It Solves
                </h2>
                <div className="space-y-5 text-slate-700 text-[15px] leading-relaxed">
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      1. Privacy vs. cloud
                    </h3>
                    <p>
                      <strong>Problem:</strong> Sending alpha or live positions to third-party clouds is a risk. <strong>Solution:</strong> Hybrid—execution and alpha on your hardware; only chosen workloads (e.g. sentiment, backtest) in the cloud, over encrypted links.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      2. Latency
                    </h3>
                    <p>
                      <strong>Problem:</strong> Big LLMs are too slow for live decisions. <strong>Solution:</strong> Small, task-specific models and rules; low millisecond inference where needed. Full pipeline in milliseconds to tens of milliseconds is realistic for many systematic strategies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      3. Pipeline and risk in one place
                    </h3>
                    <p>
                      <strong>Problem:</strong> Pipelines and risk are often glued from many tools. <strong>Solution:</strong> One orchestration layer and UI—define pipelines and agents, run a central risk layer that approves or blocks every trade, keep everything auditable.
                    </p>
                  </div>
                  <p className="text-sm pt-2 border-t border-slate-100 mt-4">
                    <strong>When to use QuantPype:</strong> You want alpha and execution on your infrastructure, one place to define pipelines and risk, and millisecond-level latency is acceptable. <strong>When not:</strong> You need a fully hosted SaaS with no self-hosting, or microsecond co-located HFT; QuantPype is a framework you run and plug your own data and brokers into.
                  </p>
                </div>
              </section>

              {/* Section: Agents */}
              <section
                id="agents"
                className="scroll-mt-28 mb-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200">
                  Agent Orchestration
                </h2>
                <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
                  <p>
                    Agents do one job each: rules (e.g. limits, thresholds) or small models (e.g. sentiment score). They can be rule-based only or combine rules with small quantized models. You own and run them; the platform wires them into pipelines.
                  </p>
                  <p>
                    <strong>Types:</strong> Information (data/signals), Risk (pre-trade checks, sizing), Execution/Alpha (your logic and orders, local). Local runs execution and alpha; optional cloud for non-sensitive work; link is encrypted (e.g. mTLS).
                  </p>
                  <p>
                    <strong>Feasible additions:</strong> SDK/API for custom agents, webhooks, templates for common agent types, containerized deployment (e.g. Docker). Flow: Ingest → signals → alpha proposes → risk approves/reduces/blocks → execution; latency in the low ms range for a well-built setup.
                  </p>
                  <p className="mt-3">
                    <strong>Example agents:</strong> SentimentX (text → sentiment score), AlphaScanner (order book signals), DarkPoolScan (OTC/dark flow), RiskSentinel (pre-trade checks), Guardian.ai (portfolio/exposure), VolatilityNexus (sizing), NeuralArb/LiquidityFlow (execution/alpha). You can add more; names are reference only.
                  </p>
                  <p>
                    <strong>Deployment:</strong> Agents can run as bare processes, Docker containers, or (for non-sensitive bursty work) serverless in your cloud, with results synced back via the bridge.
                  </p>
                </div>
              </section>

              {/* Section: Risk & Portfolio */}
              <section
                id="risk-portfolio"
                className="scroll-mt-28 mb-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200">
                  Risk & Portfolio Management
                </h2>
                <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
                  <p>
                    Alpha agents propose trades; the risk layer approves, reduces size, or blocks. Pre-trade checks (rule-based): fat-finger, margin/leverage, wash-trade. Optional volatility-based sizing. All decisions can be logged for audit.
                  </p>
                  <p>
                    Portfolio-level (optional): exposure limits, correlation awareness, drawdown controls (e.g. pause a strategy if it breaches a threshold). Flow: Alpha proposal → sizing → risk checks → execution on your nodes → book-keeping and logs.
                  </p>
                  <p>
                    <strong>Example limits to configure:</strong> Position limits (per symbol/strategy), max leverage, exposure caps by sector/region, drawdown threshold (pause strategy), fat-finger (reject if size &gt; N std dev from recent). Risk sits in front of execution: only approved (possibly resized) orders reach your FIX/API; all decisions are logged.
                  </p>
                </div>
              </section>

              {/* Section: Who It's For */}
              <section
                id="who-its-for"
                className="scroll-mt-28 mb-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200">
                  Who It&apos;s For
                </h2>
                <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Quant developers</strong> — Build and plug in strategies and agents; use the platform as the orchestration and risk layer.</li>
                    <li><strong>Risk / ops</strong> — Configure limits, monitor exposure, and audit decisions from one dashboard.</li>
                    <li><strong>Small teams and boutiques</strong> — Run an institutional-style stack without sending alpha to a vendor; scale only data or backtest in the cloud if you choose.</li>
                  </ul>
                  <p>
                    Not aimed at ultra-HFT shops that need microsecond, exchange-co-located execution; the design targets systematic and mid-frequency workflows where millisecond-to-tens-of-milliseconds latency is acceptable.
                  </p>
                </div>
              </section>

              {/* Section: Glossary */}
              <section
                id="glossary"
                className="scroll-mt-28 mb-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200">
                  Glossary
                </h2>
                <div className="space-y-3 text-slate-700 text-[15px] leading-relaxed">
                  <p><strong>Alpha</strong> — Proprietary logic or signal that generates trade ideas. Kept local in QuantPype.</p>
                  <p><strong>Agent</strong> — A single-purpose unit (rule-based or small model) doing one task (e.g. sentiment, risk check, sizing).</p>
                  <p><strong>Pipeline</strong> — A configured flow of data and processing (e.g. market data → signals → risk → execution).</p>
                  <p><strong>Risk layer</strong> — Central component that sees every proposed trade and can approve, reduce size, or block.</p>
                  <p><strong>Quantum Bridge</strong> — In docs, the encrypted link (e.g. mTLS) between your local nodes and optional cloud. Not quantum cryptography.</p>
                  <p><strong>Local node</strong> — Your hardware running execution, alpha, and keys.</p>
                  <p><strong>Cloud swarm</strong> — Optional services (e.g. sentiment, backtest) in your or a trusted cloud.</p>
                  <p><strong>SLM</strong> — Small Language Model. Task-specific, quantized model for low-latency inference.</p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
