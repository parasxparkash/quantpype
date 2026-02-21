import AgentSwarmGraphic from "@/components/AgentSwarmGraphic";

export default function Home() {
  const features = [
    {
      title: "Ultra-Low Latency",
      description: "Sub-millisecond execution across global markets with intelligent order routing.",
      color: "cyan"
    },
    {
      title: "Local-First Security",
      description: "Your alpha and execution run on your infrastructure; sensitive logic never has to leave your control.",
      color: "violet"
    },
    {
      title: "Global Distribution",
      description: "Deploy agents across 40+ data centers worldwide for optimal market access.",
      color: "emerald"
    },
    {
      title: "Collaborative AI",
      description: "Multiple specialized agents working together to optimize your portfolio.",
      color: "amber"
    },
  ];

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-white" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-500/30 rounded-2xl rotate-12 animate-float opacity-20" />
        <div className="absolute bottom-40 right-20 w-32 h-32 border border-violet-500/20 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-1/4 w-16 h-16 border border-emerald-500/30 rounded-xl -rotate-12 animate-float opacity-20" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass rounded-full border border-black/10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
              Quantum Bridge: Multi-Node Online
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight animate-slide-up">
            <span className="text-slate-900">Automated Funds.</span>
            <br />
            <span className="text-cyan-600">Hybrid Intelligence.</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-10 leading-relaxed animate-fade-in">
            QuantPype orchestrates high-frequency pipelines and collaborative AI agents
            across <span className="text-emerald-600 font-medium">local hardware nodes</span> and <span className="text-cyan-600 font-medium">distributed cloud swarms</span>.
            Manage your fund with unparalleled privacy and speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="group px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-black/10">
              Coming Soon
            </button>
            <button className="group px-6 py-3 glass font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 border border-black/10 relative overflow-hidden">
              <span className="text-emerald-600">↓</span>
              Local Bridge
              <span className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded-bl font-black tracking-tighter">SOON</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-500 text-sm animate-fade-in">
            <div className="flex items-center gap-2">
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Target uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Built for Modern Quant Teams
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Enterprise-grade infrastructure designed for speed, security, and scalability.
            </p>
          </div>

          {/* Capabilities Matrix */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <th className="px-8 py-5">Core Capability</th>
                    <th className="px-8 py-5">Technical Advantage</th>
                    <th className="px-8 py-5 text-right">Infrastructure Layer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {features.map((feature, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold border ${feature.color === 'cyan' ? 'bg-cyan-100 border-cyan-200 text-cyan-600' :
                            feature.color === 'violet' ? 'bg-violet-100 border-violet-200 text-violet-600' :
                              feature.color === 'emerald' ? 'bg-emerald-100 border-emerald-200 text-emerald-600' :
                                'bg-amber-100 border-amber-200 text-amber-600'
                            }`}>
                            {feature.title[0]}
                          </div>
                          <div>
                            <span className="block font-bold text-slate-900">{feature.title}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm text-slate-500 leading-relaxed max-w-sm">{feature.description}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex flex-col items-end">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${feature.color === 'cyan' ? 'text-cyan-600' :
                            feature.color === 'violet' ? 'text-violet-600' :
                              feature.color === 'emerald' ? 'text-emerald-600' :
                                'text-amber-600'
                            }`}>
                            {feature.color} Cluster
                          </span>
                          <span className="text-[8px] font-black text-slate-400 tracking-tighter mt-1">COMING SOON</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Swarm Graphic Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Connected Intelligence
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Seamlessly bridging sensitive proprietary kernels with distributed monitoring swarms.
            </p>
          </div>
          <AgentSwarmGraphic />
        </div>
      </section>

      {/* Deployment Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Deploy Anywhere. Execute Everywhere.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              QuantPype bridges the gap between your local hardware and global financial markets.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-sm font-bold text-slate-900">
                    <th className="px-8 py-6 border-r border-slate-200">Execution Vector</th>
                    <th className="px-8 py-6 text-emerald-600">Local Bridge (Edge)</th>
                    <th className="px-8 py-6 text-cyan-600">Cloud Swarm (Hub)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { vector: "Strategic Privacy", local: "Absolute (On-Prem)", cloud: "Encrypted, No Alpha Data" },
                    { vector: "Compute Power", local: "User Hardware dependent", cloud: "Infinite (Petaflop scaling)" },
                    { vector: "Typical Latency", local: "Ultra-low (Sub-0.01ms)", cloud: "Regional (1ms - 5ms)" },
                    { vector: "Connectivity", local: "Direct Exchange Feeds", cloud: "Multi-Region Distributed" },
                    { vector: "Coordination", local: "Single Node / Cluster", cloud: "Global Swarm Intelligence" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 text-sm font-semibold text-slate-500 border-r border-slate-200 bg-slate-50/20">{row.vector}</td>
                      <td className="px-8 py-5 text-sm font-medium text-slate-900 border-r border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {row.local}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-sm font-medium text-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {row.cloud}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to secure your Alpha?
          </h2>
          <p className="text-slate-600 text-base mb-8 max-w-2xl mx-auto">
            Join leading quantitative teams leveraging hybrid intelligence for superior risk-adjusted returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg">
              Coming Soon
            </button>
            <button className="px-8 py-3 glass font-semibold rounded-xl hover:bg-slate-100 transition-all border border-black/10">
              Coming Soon
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
