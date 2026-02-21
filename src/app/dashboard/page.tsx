export default function Dashboard() {
    const stats = [
        { id: 1, label: "Total Fund Value", value: "$124.5M", change: "+12.4% (YTD)", trend: "up", color: "text-emerald-600" },
        { id: 2, label: "Active Strategies", value: "42", change: "8 Swarms Active", trend: "neutral", color: "text-cyan-600" },
        { id: 3, label: "Global Exposure", value: "84.2%", change: "Within Limits", trend: "neutral", color: "text-violet-600" },
        { id: 4, label: "Execution Latency", value: "0.04ms", change: "-12% (Daily)", trend: "down", color: "text-amber-600" },
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
                                Fund Overview
                            </h1>
                            <div className="flex items-center gap-3">
                                <span className="text-slate-500 font-mono text-sm">
                                    Quantum Ledger: 0x82...A2F
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Verified
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="px-3 py-2.5 glass rounded-xl border border-black/10 hover:bg-slate-100 transition-all text-sm font-semibold">
                                Refresh
                            </button>
                            <button className="px-4 py-2.5 glass rounded-xl text-sm font-semibold border border-black/10 hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                                Export Report
                            </button>
                        </div>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((s, i) => (
                        <div key={i} className="group relative p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden">


                            <div className="relative">
                                <div className="flex justify-between items-start mb-3">
                                    <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                                        {s.label}
                                    </p>
                                    {s.trend === "up" && (
                                        <span className="text-xs font-bold text-emerald-500">UP</span>
                                    )}
                                    {s.trend === "down" && (
                                        <span className="text-xs font-bold text-rose-500">DOWN</span>
                                    )}
                                </div>

                                <h2 className="text-2xl md:text-3xl font-black mb-1 tracking-tight">
                                    {s.value}
                                </h2>

                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-xs text-slate-500 font-medium">
                                        {s.change}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Performance Chart */}
                    <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                            <div>
                                <h3 className="text-lg font-bold mb-1">Performance Matrix</h3>
                                <p className="text-sm text-slate-500">Fund performance over time</p>
                            </div>
                            <div className="flex gap-2">
                                {["1D", "1W", "1M", "1Y"].map((period, i) => (
                                    <button
                                        key={i}
                                        className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${period === "1M"
                                            ? "bg-slate-200/50 text-slate-900"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                            }`}
                                    >
                                        {period}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="relative h-56 md:h-64">
                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-slate-400 font-mono">
                                <span>$140M</span>
                                <span>$130M</span>
                                <span>$120M</span>
                                <span>$110M</span>
                            </div>

                            {/* Chart */}
                            <div className="ml-12 h-full flex items-end gap-1 pb-8 border-b border-zinc-800/50">
                                {[40, 45, 42, 55, 50, 62, 58, 70, 65, 78, 72, 85, 80, 90, 88, 95, 92, 100, 96, 105, 100, 110, 108, 115, 112, 120, 118, 125, 122, 128].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-cyan-500 opacity-40 rounded-t-sm hover:opacity-70 transition-all cursor-pointer group relative"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-100 px-2 py-1 rounded text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-700">
                                            ${(100 + h * 0.2).toFixed(1)}M
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* X-axis labels */}
                            <div className="ml-12 flex justify-between mt-3 text-[10px] text-slate-400 font-mono">
                                <span>FEB 01</span>
                                <span>FEB 07</span>
                                <span>FEB 14</span>
                                <span>FEB 21</span>
                            </div>
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-lg font-bold">Live Intelligence</h3>
                            <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Streaming
                            </span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <tbody className="divide-y divide-slate-100">
                                    {recentActivity.map((log, i) => (
                                        <tr key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                                            <td className="py-3 pr-4">
                                                <span className="text-[10px] font-mono text-slate-400 block whitespace-nowrap">{log.time}</span>
                                            </td>
                                            <td className="py-3 px-2">
                                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap ${log.type === 'RISK' ? 'bg-amber-500/15 text-amber-500' :
                                                    log.type === 'EXEC' ? 'bg-cyan-500/15 text-cyan-600' :
                                                        log.type === 'SYS' ? 'bg-violet-500/15 text-violet-400' :
                                                            'bg-slate-200 text-slate-600'
                                                    }`}>
                                                    {log.type}
                                                </span>
                                            </td>
                                            <td className="py-3 pl-2">
                                                <p className="text-xs text-slate-700 leading-relaxed font-medium">{log.msg}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button className="w-full mt-5 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all">
                            Coming Soon
                        </button>
                    </div>
                </div>

                {/* Top Strategies Table */}
                <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <h3 className="text-lg font-bold mb-1">Top Performing Strategies</h3>
                            <p className="text-sm text-slate-500">Current period leaders</p>
                        </div>
                        <button className="text-sm text-cyan-600 hover:text-cyan-300 transition-colors font-medium">
                            View All →
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs text-slate-400 uppercase font-semibold border-b border-black/5">
                                    <th className="pb-3 pr-4">Strategy</th>
                                    <th className="pb-3 pr-4">Return</th>
                                    <th className="pb-3 pr-4">Exposure</th>
                                    <th className="pb-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topStrategies.map((strategy, i) => (
                                    <tr key={i} className="border-b border-black/5 hover:bg-slate-50/50 transition-colors cursor-pointer">
                                        <td className="py-3 pr-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold border border-slate-200">
                                                    {strategy.name[0]}
                                                </div>
                                                <span className="font-medium">{strategy.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="text-emerald-600 font-mono font-medium">{strategy.return}</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="text-slate-600 font-mono">{strategy.exposure}</span>
                                        </td>
                                        <td className="py-3">
                                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${strategy.status === 'Executing'
                                                ? 'bg-cyan-500/15 text-cyan-600'
                                                : 'bg-emerald-500/15 text-emerald-600'
                                                }`}>
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
