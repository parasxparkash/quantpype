import Image from "next/image";

export default function Home() {
  const pipelines = [
    { name: "AlphaScanner-01", status: "Active", type: "Equities", throughput: "1.2GB/s", performance: "+4.2%" },
    { name: "RiskSentinel-V2", status: "Optimizing", type: "Global Macro", throughput: "850MB/s", performance: "Nominal" },
    { name: "NeuralArb-Pro", status: "Executing", type: "Derivatives", throughput: "2.5GB/s", performance: "+12.8%" },
    { name: "LiquidityFlow", status: "Active", type: "FX", throughput: "3.1GB/s", performance: "+1.5%" },
    { name: "MacroDrift", status: "Active", type: "Fixed Income", throughput: "400MB/s", performance: "-0.2%" },
    { name: "SentimentX", status: "Executing", type: "Alternative Data", throughput: "5.4GB/s", performance: "+6.7%" },
  ];

  const agents = [
    { name: "Vanguard.ai", role: "Strategy Lead", specialty: "Pattern Recognition" },
    { name: "Guardian.ai", role: "Risk Manager", specialty: "Exposure Limits" },
    { name: "Oracle.ai", role: "Alpha Generator", specialty: "NLP & Sentiment" },
  ];

  return (
    <main className="min-h-screen px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-24 text-center flex flex-col items-center">
        <div className="mb-6 px-4 py-1 glass rounded-full text-xs font-mono neon-text uppercase tracking-widest pulse">
          System Status: Operational
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Automated Funds. <br />
          <span className="gradient-text">Agentic Intelligence.</span>
        </h1>
        <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-12">
          QuantPype orchestrates high-frequency pipelines and collaborative AI agents to manage assets with
          unprecedented precision. No humans, just pure math.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
            Launch Terminal
          </button>
          <button className="px-8 py-4 glass font-bold rounded-xl hover:bg-white/5 transition-colors">
            View Intelligence Log
          </button>
        </div>
      </section>

      {/* Pipelines Section */}
      <section className="py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Active Pipelines</h2>
            <p className="text-zinc-500">Real-time data ingestion and strategy execution streams.</p>
          </div>
          <div className="text-sm font-mono text-zinc-600 hidden md:block">
            ACTIVE_STREAMS: 156 // LATENCY: 0.04ms
          </div>
        </div>

        <div className="pipeline-grid">
          {pipelines.map((p, i) => (
            <div key={i} className="pipeline-card group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl group-hover:neon-text transition-colors">{p.name}</h3>
                  <p className="text-xs text-zinc-500 font-mono mt-1">{p.type}</p>
                </div>
                <div className={`status-indicator ${p.status === 'Active' ? 'status-active' :
                    p.status === 'Optimizing' ? 'status-optimizing' :
                      'status-executing'
                  }`} />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">Throughput</p>
                  <p className="font-mono text-sm">{p.throughput}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">Performance</p>
                  <p className={`font-mono text-sm ${p.performance.startsWith('+') ? 'text-emerald-500' : 'text-zinc-300'}`}>
                    {p.performance}
                  </p>
                </div>
              </div>
              <div className="w-full h-1 bg-zinc-900 mt-6 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  style={{ width: `${Math.random() * 60 + 40}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 border-t border-zinc-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Quant Agents working in <span className="neon-text">Swarms</span></h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Our proprietary agents don't just work alone. They collaborate in decentralized swarms to
              validate signals, mitigate risks, and execute trades with collective consensus.
            </p>
            <div className="space-y-4">
              {agents.map((agent, i) => (
                <div key={i} className="flex items-center gap-4 p-4 glass hover:border-zinc-500 transition-colors">
                  <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center font-mono text-xs border border-zinc-700">
                    A-{i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold">{agent.name}</h4>
                    <p className="text-xs text-zinc-500">{agent.role} • {agent.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square glass rounded-3xl flex items-center justify-center overflow-hidden">
            {/* Visual representation of swarm - placeholder for animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />
            <div className="text-center">
              <div className="text-8xl font-black opacity-5 mb-4">SWARM</div>
              <div className="text-zinc-600 font-mono text-xs">VISUALIZING_NEURAL_CONSENSUS...</div>
            </div>
            {/* Decorative circles */}
            <div className="absolute w-64 h-64 border border-zinc-800 rounded-full animate-pulse" />
            <div className="absolute w-96 h-96 border border-zinc-900 rounded-full" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to automate your capital?</h2>
        <button className="px-12 py-5 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-cyan-500/20">
          Request Access to Alpha
        </button>
      </section>
    </main>
  );
}
