export default function PipelinesPage() {
    const pipelines = [
        { name: "AlphaScanner-01", status: "Active", type: "Equities", throughput: "High", performance: "+4.2%", environment: "cloud" },
        { name: "RiskSentinel-V2", status: "Optimizing", type: "Global Macro", throughput: "Medium", performance: "Nominal", environment: "local" },
        { name: "NeuralArb-Pro", status: "Executing", type: "Derivatives", throughput: "High", performance: "+12.8%", environment: "cloud" },
        { name: "LiquidityFlow", status: "Active", type: "FX", throughput: "High", performance: "+1.5%", environment: "cloud" },
        { name: "MacroDrift", status: "Active", type: "Fixed Income", throughput: "Medium", performance: "-0.2%", environment: "local" },
        { name: "SentimentX", status: "Executing", type: "Alternative Data", throughput: "High", performance: "+6.7%", environment: "cloud" },
        { name: "DarkPoolScan", status: "Active", type: "OTC Markets", throughput: "Medium", performance: "+0.8%", environment: "local" },
        { name: "VolatilityNexus", status: "Optimizing", type: "Options", throughput: "High", performance: "+5.1%", environment: "cloud" },
    ];

    const overviewStats = [
        { label: "Total Pipelines", value: "8", change: "+2 this week" },
        { label: "Active Strategies", value: "6", change: "75% active" },
        { label: "Fund Overview", value: "—", change: "Connect backend" },
        { label: "Avg Performance", value: "+4.4%", change: "YTD (demo)" },
    ];

    const stats = [
        { label: "Total Fund Value", value: "$124.5M", change: "+12.4% (YTD)", trend: "up" },
        { label: "Active Strategies", value: "42", change: "8 Swarms Active", trend: "neutral" },
        { label: "Global Exposure", value: "84.2%", change: "Within Limits", trend: "neutral" },
        { label: "Execution Latency", value: "<5ms", change: "Target", trend: "down" },
    ];

    const recentActivity = [
        { time: "15:24:12", msg: "AlphaScanner-01 detected liquidity spike in JPY/USD", type: "INFO" },
        { time: "15:20:05", msg: "NeuralArb-Pro scaling exposure in CME Futures", type: "EXEC" },
        { time: "15:18:44", msg: "Guardian.ai recalculated global risk parity", type: "RISK" },
        { time: "15:15:20", msg: "Sentinel Swarm initialized for EM Equities", type: "SYS" },
        { time: "15:12:01", msg: "DarkPoolScan identified block trade opportunity", type: "INFO" },
        { time: "15:08:33", msg: "VolatilityNexus adjusted options hedge ratio", type: "EXEC" },
    ];

    const topStrategies = [
        { name: "NeuralArb-Pro", return: "+12.8%", exposure: "$18.2M", status: "Executing" },
        { name: "SentimentX", return: "+6.7%", exposure: "$12.4M", status: "Executing" },
        { name: "AlphaScanner-01", return: "+4.2%", exposure: "$24.1M", status: "Active" },
        { name: "LiquidityFlow", return: "+1.5%", exposure: "$8.7M", status: "Active" },
    ];

    return (
        <main className="min-h-screen py-8 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                                Pipelines & Terminal
                            </h1>
                            <p className="text-slate-500 max-w-lg text-sm">
                                Strategies, data streams, fund overview, and live activity. Orchestrate pipelines across cloud and local nodes.
                            </p>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <button className="px-4 py-2.5 glass rounded-xl text-sm font-semibold border border-black/10 hover:bg-slate-100 transition-all">
                                Refresh
                            </button>
                        </div>
                    </div>
                </header>

                {/* Fund / Terminal stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((s, i) => (
                        <div key={i} className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">{s.label}</p>
                                {s.trend === "up" && <span className="text-xs font-bold text-emerald-500">UP</span>}
                                {s.trend === "down" && <span className="text-xs font-bold text-rose-500">TARGET</span>}
                            </div>
                            <p className="text-2xl font-black tracking-tight mb-1">{s.value}</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                {s.change}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pipeline workflow diagram — hedge fund style */}
                <section className="mb-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-x-auto">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Pipeline Workflow</h3>
                    <p className="text-sm text-slate-500 mb-6 max-w-2xl">
                        End-to-end quant pipeline: data ingest, research & alpha, risk & compliance, portfolio, execution, and post-trade. Alpha and execution stay local; data and backtest can use cloud.
                    </p>

                    <div className="space-y-4">
                        {/* Layer 1: Data */}
                        <div>
                            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Data</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Market Data", "Alt Data", "News / Sentiment", "Reference Data"].map((label, i) => (
                                    <div key={label} className="px-3 py-2 rounded-lg border bg-indigo-500/5 border-indigo-500/20 text-indigo-800 text-xs font-semibold">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center"><svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>

                        {/* Layer 2: Research & Alpha */}
                        <div>
                            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Research & Alpha</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Signal Generation", "Backtest", "Alpha Models", "Factor Library"].map((label) => (
                                    <div key={label} className="px-3 py-2 rounded-lg border bg-cyan-500/5 border-cyan-500/20 text-cyan-800 text-xs font-semibold">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center"><svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>

                        {/* Layer 3: Risk & Compliance */}
                        <div>
                            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Risk & Compliance</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Pre-trade Risk", "VaR / Exposure", "Compliance", "Wash Trade Check", "Margin"].map((label) => (
                                    <div key={label} className="px-3 py-2 rounded-lg border bg-rose-500/5 border-rose-500/20 text-rose-800 text-xs font-semibold">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center"><svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>

                        {/* Layer 4: Portfolio */}
                        <div>
                            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Portfolio</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Sizing", "Allocation", "Rebalancing", "Correlation Monitor"].map((label) => (
                                    <div key={label} className="px-3 py-2 rounded-lg border bg-emerald-500/5 border-emerald-500/20 text-emerald-800 text-xs font-semibold">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center"><svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>

                        {/* Layer 5: Execution */}
                        <div>
                            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Execution</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Order Management", "Smart Routing", "Venues", "FIX / API"].map((label) => (
                                    <div key={label} className="px-3 py-2 rounded-lg border bg-violet-500/5 border-violet-500/20 text-violet-800 text-xs font-semibold">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center"><svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>

                        {/* Layer 6: Post-trade */}
                        <div>
                            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Post-trade</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Settlement", "Reporting", "P&L Attribution", "Audit Log"].map((label) => (
                                    <div key={label} className="px-3 py-2 rounded-lg border bg-amber-500/5 border-amber-500/20 text-amber-800 text-xs font-semibold">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500/70" /> Data</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-500/70" /> Research</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500/70" /> Risk</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500/70" /> Portfolio</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-violet-500/70" /> Execution</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500/70" /> Post-trade</span>
                    </div>
                </section>

                {/* Two-column: Performance + Activity */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <div>
                                <h3 className="text-lg font-bold mb-1">Performance Matrix</h3>
                                <p className="text-sm text-slate-500">Fund performance over time (demo)</p>
                            </div>
                            <div className="flex gap-2">
                                {["1D", "1W", "1M", "1Y"].map((period, i) => (
                                    <button
                                        key={i}
                                        className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${period === "1M" ? "bg-slate-200/50 text-slate-900" : "text-slate-500 hover:bg-slate-100"}`}
                                    >
                                        {period}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-56 md:h-64">
                            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-slate-400 font-mono">
                                <span>$140M</span><span>$130M</span><span>$120M</span><span>$110M</span>
                            </div>
                            <div className="ml-12 h-full flex items-end gap-1 pb-8 border-b border-slate-200">
                                {[40, 45, 42, 55, 50, 62, 58, 70, 65, 78, 72, 85, 80, 90, 88, 95, 92, 100, 96, 105, 100, 110, 108, 115, 112, 120, 118, 125, 122, 128].map((h, i) => (
                                    <div key={i} className="flex-1 bg-cyan-500 opacity-40 rounded-t-sm hover:opacity-70 transition-all" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                            <div className="ml-12 flex justify-between mt-3 text-[10px] text-slate-400 font-mono">
                                <span>FEB 01</span><span>FEB 07</span><span>FEB 14</span><span>FEB 21</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-lg font-bold">Live Intelligence</h3>
                            <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Streaming
                            </span>
                        </div>
                        <div className="space-y-0 divide-y divide-slate-100">
                            {recentActivity.map((log, i) => (
                                <div key={i} className="py-3 flex gap-2">
                                    <span className="text-[10px] font-mono text-slate-400 shrink-0">{log.time}</span>
                                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 ${log.type === "RISK" ? "bg-amber-500/15 text-amber-600" : log.type === "EXEC" ? "bg-cyan-500/15 text-cyan-600" : log.type === "SYS" ? "bg-violet-500/15 text-violet-500" : "bg-slate-200 text-slate-600"}`}>{log.type}</span>
                                    <p className="text-xs text-slate-700 font-medium truncate">{log.msg}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pipeline overview + filters */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {overviewStats.map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <p className="text-xs text-slate-400 uppercase font-semibold mb-2">{stat.label}</p>
                            <p className="text-2xl font-bold mb-1">{stat.value}</p>
                            <p className="text-xs text-slate-500">{stat.change}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                    <button className="px-4 py-2 bg-slate-200/50 text-slate-900 rounded-lg text-sm font-medium">All Pipelines</button>
                    <button className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg text-sm font-medium">Active</button>
                    <button className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg text-sm font-medium">Optimizing</button>
                    <button className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg text-sm font-medium">Executing</button>
                </div>

                {/* Pipelines table */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <th className="px-6 py-4">Strategy Name</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Throughput</th>
                                    <th className="px-6 py-4">Performance</th>
                                    <th className="px-6 py-4 text-right">Environment</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pipelines.map((p, i) => (
                                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${p.environment === "cloud" ? "bg-cyan-100 border-cyan-200 text-cyan-600" : "bg-emerald-100 border-emerald-200 text-emerald-600"}`}>
                                                    {p.name[0]}
                                                </div>
                                                <span className="font-semibold text-slate-900">{p.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-xs font-mono text-slate-500 uppercase">{p.type}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${p.status === "Active" ? "bg-emerald-500 animate-pulse" : p.status === "Optimizing" ? "bg-cyan-500" : "bg-violet-500"}`} />
                                                <span className="text-sm text-slate-700">{p.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-mono text-slate-600">{p.throughput}</td>
                                        <td className={`px-6 py-4 text-sm font-mono font-bold ${p.performance.startsWith("+") ? "text-emerald-600" : p.performance.startsWith("-") ? "text-rose-600" : "text-slate-600"}`}>
                                            {p.performance}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${p.environment === "local" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20"}`}>
                                                {p.environment}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top strategies */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <h3 className="text-lg font-bold mb-1">Top Performing Strategies</h3>
                            <p className="text-sm text-slate-500">Current period (demo)</p>
                        </div>
                        <button className="text-sm text-cyan-600 hover:text-cyan-700 font-medium">View All →</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs text-slate-400 uppercase font-semibold border-b border-slate-200">
                                    <th className="pb-3 pr-4">Strategy</th>
                                    <th className="pb-3 pr-4">Return</th>
                                    <th className="pb-3 pr-4">Exposure</th>
                                    <th className="pb-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topStrategies.map((strategy, i) => (
                                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50">
                                        <td className="py-3 pr-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold border border-slate-200">{strategy.name[0]}</div>
                                                <span className="font-medium">{strategy.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4 text-emerald-600 font-mono font-medium">{strategy.return}</td>
                                        <td className="py-3 pr-4 text-slate-600 font-mono">{strategy.exposure}</td>
                                        <td className="py-3">
                                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${strategy.status === "Executing" ? "bg-cyan-500/15 text-cyan-600" : "bg-emerald-500/15 text-emerald-600"}`}>
                                                {strategy.status}
                                            </span>
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
