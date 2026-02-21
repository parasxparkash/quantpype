export default function PipelinesPage() {
    const pipelines = [
        { name: "AlphaScanner-01", status: "Active", type: "Equities", throughput: "1.2GB/s", performance: "+4.2%", environment: "cloud" },
        { name: "RiskSentinel-V2", status: "Optimizing", type: "Global Macro", throughput: "850MB/s", performance: "Nominal", environment: "local" },
        { name: "NeuralArb-Pro", status: "Executing", type: "Derivatives", throughput: "2.5GB/s", performance: "+12.8%", environment: "cloud" },
        { name: "LiquidityFlow", status: "Active", type: "FX", throughput: "3.1GB/s", performance: "+1.5%", environment: "cloud" },
        { name: "MacroDrift", status: "Active", type: "Fixed Income", throughput: "400MB/s", performance: "-0.2%", environment: "local" },
        { name: "SentimentX", status: "Executing", type: "Alternative Data", throughput: "5.4GB/s", performance: "+6.7%", environment: "cloud" },
        { name: "DarkPoolScan", status: "Active", type: "OTC Markets", throughput: "1.1GB/s", performance: "+0.8%", environment: "local" },
        { name: "VolatilityNexus", status: "Optimizing", type: "Options", throughput: "2.8GB/s", performance: "+5.1%", environment: "cloud" },
    ];

    const overviewStats = [
        { label: "Total Pipelines", value: "8", change: "+2 this week" },
        { label: "Active Strategies", value: "6", change: "75% active" },
        { label: "Total Throughput", value: "17.4GB/s", change: "12% increase" },
        { label: "Avg Performance", value: "+4.4%", change: "YTD return" },
    ];

    return (
        <main className="min-h-screen py-8 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                                Strategies
                            </h1>
                            <p className="text-slate-500 max-w-lg text-sm">
                                Orchestrating distributed data streams across Cloud and Local nodes with real-time monitoring.
                            </p>
                        </div>

                        <div className="flex gap-3 w-full lg:w-auto">
                            <button className="flex-1 lg:flex-none px-4 py-2.5 glass rounded-xl text-sm font-semibold border border-black/10 hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Node Settings
                            </button>
                            <button className="flex-1 lg:flex-none px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2">
                                Coming Soon
                            </button>
                        </div>
                    </div>
                </header>

                {/* Overview Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {overviewStats.map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <p className="text-xs text-slate-400 uppercase font-semibold mb-2">{stat.label}</p>
                            <p className="text-2xl font-bold mb-1">{stat.value}</p>
                            <p className="text-xs text-slate-500">{stat.change}</p>
                        </div>
                    ))}
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 hide-scrollbar">
                    <button className="px-4 py-2 bg-slate-200/50 text-slate-900 rounded-lg text-sm font-medium whitespace-nowrap">
                        All Pipelines
                    </button>
                    <button className="px-4 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        Active
                    </button>
                    <button className="px-4 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        Optimizing
                    </button>
                    <button className="px-4 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        Executing
                    </button>
                    <div className="flex-1" />
                    <button className="px-4 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        Filter
                    </button>
                </div>

                {/* Pipelines Table */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
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
                                    <tr key={i} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${p.environment === 'cloud'
                                                    ? 'bg-cyan-100 border-cyan-200 text-cyan-600'
                                                    : 'bg-emerald-100 border-emerald-200 text-emerald-600'
                                                    }`}>
                                                    {p.name[0]}
                                                </div>
                                                <span className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">{p.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-mono text-slate-500 uppercase">{p.type}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${p.status === 'Active' ? 'bg-emerald-500 animate-pulse' :
                                                    p.status === 'Optimizing' ? 'bg-cyan-500' : 'bg-violet-500'
                                                    }`} />
                                                <span className="text-sm text-slate-700">{p.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-mono text-slate-600">
                                            {p.throughput}
                                        </td>
                                        <td className={`px-6 py-4 text-sm font-mono font-bold ${p.performance.startsWith('+') ? 'text-emerald-600' :
                                            p.performance.startsWith('-') ? 'text-rose-600' : 'text-slate-600'
                                            }`}>
                                            {p.performance}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight ${p.environment === 'local'
                                                ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                                                : 'bg-cyan-500/10 text-cyan-600 border border-cyan-500/20'
                                                }`}>
                                                {p.environment}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Load More */}
                <div className="mt-10 text-center">
                    <button className="px-6 py-2.5 glass rounded-xl text-sm font-semibold border border-black/10 hover:bg-slate-100 transition-all">
                        Load More Pipelines
                    </button>
                </div>
            </div>
        </main>
    );
}
