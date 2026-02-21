export default function AgentsPage() {
    const agents = [
        { name: "Vanguard.ai", role: "Strategy Lead", specialty: "Pattern Recognition", status: "ONLINE", confidence: 98.2, env: "cloud", uptime: "72d 14h" },
        { name: "Guardian.ai", role: "Risk Manager", specialty: "Exposure Limits", status: "ONLINE", confidence: 99.9, env: "local", uptime: "45d 8h" },
        { name: "Oracle.ai", role: "Alpha Generator", specialty: "NLP & Sentiment", status: "ONLINE", confidence: 94.5, env: "cloud", uptime: "30d 2h" },
        { name: "Aegis.ai", role: "Compliance", specialty: "Regulatory Drift", status: "IDLE", confidence: 100, env: "local", uptime: "12d 6h" },
        { name: "Chronos.ai", role: "Backtesting", specialty: "Time-Series Simulation", status: "COMPUTING", confidence: 97.1, env: "cloud", uptime: "8d 22h" },
        { name: "Specter.ai", role: "Dark Execution", specialty: "Slippage Optimization", status: "ONLINE", confidence: 92.8, env: "local", uptime: "60d 1h" },
    ];

    const stats = [
        { label: "Active Agents", value: "6" },
        { label: "Total Compute", value: "2.4 PF" },
        { label: "Avg Latency", value: "0.03ms" },
        { label: "Success Rate", value: "99.8%" },
    ];

    return (
        <main className="min-h-screen py-8 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                                    Liquid Intelligence
                                </h1>
                                <span className="px-2.5 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-600 rounded-full border border-emerald-500/30">
                                    LIVE
                                </span>
                            </div>
                            <p className="text-slate-500 max-w-lg text-sm">
                                Monitoring orchestrator swarm across {agents.length} active nodes. Real-time agent coordination and task distribution.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <button className="px-5 py-2.5 glass rounded-xl text-sm font-semibold border border-black/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-center gap-2">
                                Deploy Local Node
                            </button>
                            <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2">
                                Coming Soon
                            </button>
                        </div>
                    </div>
                </header>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl bg-slate-50/50 border border-black/5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                                STAT
                            </div>
                            <div>
                                <p className="text-xl font-bold">{stat.value}</p>
                                <p className="text-xs text-slate-500">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Agents Table */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <th className="px-6 py-4">Agent Identification</th>
                                    <th className="px-6 py-4">Primary Specialty</th>
                                    <th className="px-6 py-4 text-center">Confidence</th>
                                    <th className="px-6 py-4">Current Status</th>
                                    <th className="px-6 py-4">Infrastructure</th>
                                    <th className="px-6 py-4 text-right">Uptime</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {agents.map((agent, i) => (
                                    <tr key={i} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border ${agent.env === 'local'
                                                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600'
                                                    : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-600'
                                                    }`}>
                                                    {agent.name[0]}
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">{agent.name}</span>
                                                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{agent.role}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-medium text-slate-700">{agent.specialty}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col items-center gap-1 min-w-[100px]">
                                                <span className="text-xs font-mono font-bold text-cyan-600">{agent.confidence}%</span>
                                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${agent.confidence}%` }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${agent.status === 'ONLINE' ? 'bg-emerald-500/15 text-emerald-600 border border-emerald-500/20' :
                                                agent.status === 'COMPUTING' ? 'bg-cyan-500/15 text-cyan-600 border border-cyan-500/20 animate-pulse' :
                                                    'bg-slate-100 text-slate-500 border border-slate-200'
                                                }`}>
                                                {agent.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight ${agent.env === 'local'
                                                ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                                                : 'bg-cyan-500/10 text-cyan-600 border border-cyan-500/20'
                                                }`}>
                                                {agent.env}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right text-xs font-mono text-slate-500">
                                            {agent.uptime}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
