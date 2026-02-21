"use client";

import React from 'react';

const AgentSwarmGraphic = () => {
    // Pipeline Flow: Input -> Info Agents -> Risk/Portfolio -> Alpha -> Output
    const agents = [
        // Group 1: Inputs (Left)
        { id: "SRC_1", name: "Market Data", type: "Input", color: "indigo", x: -400, y: -80, endpoints: ["BBG", "RTRS"], metrics: { load: "24%", latency: "0.01ms", uptime: "99.99%", throughput: "12.4GB/s" } },
        { id: "SRC_2", name: "Direct Feed", type: "Input", color: "blue", x: -400, y: 80, endpoints: ["FIX", "ITCH"], metrics: { load: "18%", latency: "0.01ms", uptime: "99.99%", throughput: "8.2GB/s" } },

        // Group 2: Information Agents (Mid-Left)
        { id: "INF_1", name: "SentimentX", type: "Info", color: "cyan", x: -200, y: -160, endpoints: ["NLP"], metrics: { load: "62%", latency: "1.2ms", uptime: "99.95%", throughput: "540 tx/s" } },
        { id: "INF_2", name: "AlphaScanner", type: "Info", color: "sky", x: -180, y: 0, endpoints: ["L2"], metrics: { load: "45%", latency: "0.8ms", uptime: "99.98%", throughput: "1.2k tx/s" } },
        { id: "INF_3", name: "DarkPoolScan", type: "Info", color: "teal", x: -200, y: 160, endpoints: ["OTC"], metrics: { load: "31%", latency: "2.4ms", uptime: "99.92%", throughput: "120 tx/s" } },

        // Group 3: Risk & Portfolio (Center)
        { id: "RSK_1", name: "RiskSentinel", type: "Risk", color: "rose", x: 20, y: -100, endpoints: ["VAR", "LIM"], metrics: { load: "88%", latency: "0.1ms", uptime: "100.0%", throughput: "8.5k req/s" } },
        { id: "RSK_2", name: "Guardian.ai", type: "Portfolio", color: "emerald", x: 20, y: 100, endpoints: ["PRT", "COR"], metrics: { load: "12%", latency: "0.4ms", uptime: "99.99%", throughput: "240 signals/s" } },

        // Group 4: Alpha / Execution Agents (Mid-Right)
        { id: "EXE_1", name: "NeuralArb", type: "Alpha", color: "violet", x: 240, y: -80, endpoints: ["STAT"], metrics: { load: "74%", latency: "0.05ms", uptime: "99.97%", throughput: "2.1k orders/s" } },
        { id: "EXE_2", name: "LiquidityFlow", type: "Alpha", color: "fuchsia", x: 240, y: 80, endpoints: ["VWAP"], metrics: { load: "51%", latency: "0.08ms", uptime: "99.98%", throughput: "4.6k orders/s" } },

        // Group 5: Outputs / Execution Routing (Right)
        { id: "OUT_1", name: "Execution", type: "Output", color: "amber", x: 420, y: 0, endpoints: ["NY4", "LD4", "BIN"], metrics: { load: "42%", latency: "0.02ms", uptime: "99.99%", throughput: "15.8GB/s" } },
    ];

    // Define the directed edges between nodes to show data flow
    const edges = [
        // Inputs to Info Agents
        { from: "SRC_1", to: "INF_1" },
        { from: "SRC_1", to: "INF_2" },
        { from: "SRC_2", to: "INF_2" },
        { from: "SRC_2", to: "INF_3" },

        // Info Agents to Risk/Portfolio (Signal generation)
        { from: "INF_1", to: "RSK_2" },
        { from: "INF_2", to: "RSK_1" },
        { from: "INF_2", to: "RSK_2" },
        { from: "INF_3", to: "RSK_1" },

        // Risk/Portfolio to Alpha Agents (Veto/Approval & Sizing)
        { from: "RSK_1", to: "EXE_1", dash: true, color: "rose" }, // Risk checks
        { from: "RSK_1", to: "EXE_2", dash: true, color: "rose" },
        { from: "RSK_2", to: "EXE_1", color: "emerald" }, // Portfolio balancing
        { from: "RSK_2", to: "EXE_2", color: "emerald" },

        // Alpha Agents to Execution (Final Orders)
        { from: "EXE_1", to: "OUT_1", thickness: 2 },
        { from: "EXE_2", to: "OUT_1", thickness: 2 },
    ];

    // Fixed duration strings to avoid server/client float mismatch (hydration)
    const edgeDurs = ["2s", "2.4s", "2.8s", "3.2s", "3.6s"] as const;
    const epDurs = ["1.5s", "1.75s", "2s", "2.25s"] as const;

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; border: string; text: string; glow: string; hex: string }> = {
            cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-600", glow: "bg-cyan-500/20", hex: "#06b6d4" },
            violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400", glow: "bg-violet-500/20", hex: "#8b5cf6" },
            emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-600", glow: "bg-emerald-500/20", hex: "#10b981" },
            amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", glow: "bg-amber-500/20", hex: "#f59e0b" },
            rose: { bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-600", glow: "bg-rose-500/20", hex: "#f43f5e" },
            blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", glow: "bg-blue-500/20", hex: "#3b82f6" },
            orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", glow: "bg-orange-500/20", hex: "#f97316" },
            indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400", glow: "bg-indigo-500/20", hex: "#6366f1" },
            teal: { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400", glow: "bg-teal-500/20", hex: "#14b8a6" },
            lime: { bg: "bg-lime-500/10", border: "border-lime-500/30", text: "text-lime-400", glow: "bg-lime-500/20", hex: "#84cc16" },
            fuchsia: { bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30", text: "text-fuchsia-400", glow: "bg-fuchsia-500/20", hex: "#d946ef" },
            sky: { bg: "bg-sky-500/10", border: "border-sky-500/30", text: "text-sky-400", glow: "bg-sky-500/20", hex: "#0ea5e9" },
            zinc: { bg: "bg-zinc-500/10", border: "border-zinc-500/30", text: "text-slate-600", glow: "bg-zinc-500/20", hex: "#71717a" },
        };
        return colors[color] || colors.cyan;
    };

    return (
        <div className="relative w-full h-[700px] md:h-[800px] flex items-center justify-center overflow-hidden rounded-[32px] md:rounded-[48px] border border-black/5 my-12 md:my-20">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-white" />

            {/* Deep Background Glows indicating pipeline stages */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 md:w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 md:w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* SVG Edges Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet">
                <defs>


                    <filter id="glow-lg">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" /><feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {edges.map((edge, i) => {
                    const sourceNode = agents.find(a => a.id === edge.from);
                    const targetNode = agents.find(a => a.id === edge.to);

                    if (!sourceNode || !targetNode) return null;

                    const cx = 500; const cy = 400;
                    const sx = cx + sourceNode.x; const sy = cy + sourceNode.y;
                    const tx = cx + targetNode.x; const ty = cy + targetNode.y;

                    // Create a smooth curve between nodes
                    const midX = (sx + tx) / 2;
                    const controlPointX = midX;
                    const path = `M ${sx} ${sy} C ${controlPointX} ${sy}, ${controlPointX} ${ty}, ${tx} ${ty}`;

                    const edgeColorHex = edge.color ? getColorClasses(edge.color).hex : '#cbd5e1';
                    const strokeStyle = edgeColorHex;

                    return (
                        <g key={`edge-${i}`}>
                            <path
                                d={path}
                                fill="none"
                                stroke={strokeStyle}
                                strokeWidth={edge.thickness || 1.5}
                                strokeDasharray={edge.dash ? "6, 6" : "none"}
                                className={edge.color ? "opacity-40" : "opacity-30"}
                            />
                            {/* Animated Particle traveling along the path - deterministic dur for hydration */}
                            <circle r={edge.thickness ? 2.5 : 2} fill={edgeColorHex} filter="url(#glow-lg)">
                                <animateMotion dur={edgeDurs[i % edgeDurs.length]} repeatCount="indefinite" path={path} />
                            </circle>
                        </g>
                    );
                })}

                {/* Draw Endpoints connecting to their parent node */}
                {agents.map((agent, i) => {
                    const cx = 500; const cy = 400;
                    const ax = cx + agent.x; const ay = cy + agent.y;

                    return agent.endpoints.map((ep, ei) => {
                        // Position endpoints above or below the node
                        const offset = ei % 2 === 0 ? -40 : 40;
                        const ex = ax + (ei * 30) - ((agent.endpoints.length - 1) * 15);
                        const ey = ay + offset;
                        const epPath = `M ${ex} ${ey} L ${ax} ${ay}`;

                        return (
                            <g key={`ep-flow-${i}-${ei}`}>
                                <path d={epPath} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" strokeDasharray="2 4" />
                                <circle r="1" fill="#000" opacity="0.3">
                                    <animateMotion dur={epDurs[(i * 2 + ei) % epDurs.length]} repeatCount="indefinite" path={epPath} />
                                </circle>
                            </g>
                        );
                    });
                })}
            </svg>

            {/* HTML Nodes Layer */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {agents.map((agent, i) => {
                    const colorClasses = getColorClasses(agent.color);

                    return (
                        <div
                            key={i}
                            className="absolute flex flex-col items-center justify-center"
                            style={{ transform: `translate(${agent.x}px, ${agent.y}px)` }}
                        >
                            {/* Endpoints Layer (Positioned absolutely around node) */}
                            {agent.endpoints.map((ep, ei) => {
                                const offset = ei % 2 === 0 ? '-3.5rem' : '3.5rem';
                                const xOffset = (ei * 30) - ((agent.endpoints.length - 1) * 15);

                                return (
                                    <div
                                        key={`ep-${ei}`}
                                        className="absolute group/ep"
                                        style={{ transform: `translate(${xOffset}px, ${offset})` }}
                                    >
                                        <div className="w-8 h-6 bg-slate-50/90 border border-black/10 rounded flex items-center justify-center text-[9px] font-bold text-slate-500 shadow-xl backdrop-blur-sm group-hover/ep:border-black/30 group-hover/ep:text-slate-900 transition-all cursor-crosshair">
                                            {ep}
                                        </div>
                                    </div>
                                );
                            })}


                            {/* Node Core */}
                            <div className="relative group/node cursor-pointer z-20">
                                <div className={`absolute -inset-3 ${colorClasses.glow} blur-xl rounded-full opacity-0 group-hover/node:opacity-100 transition-opacity`} />

                                <div className={`relative w-14 h-14 bg-white border ${colorClasses.border} rounded-2xl flex items-center justify-center shadow-md transition-all group-hover/node:scale-110 overflow-hidden`}>
                                    <div className={`absolute inset-0 ${colorClasses.bg}`} />
                                    <span className={`text-xs font-black ${colorClasses.text} relative z-10`}>{agent.id.split('_')[0]}</span>
                                </div>

                                {/* Hover Detail Popup */}
                                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-all scale-95 group-hover/node:scale-100 pointer-events-none z-30">
                                    <div className="bg-white border border-black/10 p-4 rounded-xl shadow-2xl min-w-[200px] backdrop-blur-md">
                                        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-black/5">
                                            <div className={`w-8 h-8 rounded-lg ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center font-bold text-xs ${colorClasses.text}`}>
                                                {agent.id.split('_')[0]}
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-900 whitespace-nowrap leading-none mb-1">{agent.name}</div>
                                                <div className={`text-[9px] ${colorClasses.text} font-mono tracking-wider uppercase leading-none`}>{agent.type} NODE</div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                            <div>
                                                <p className="text-[8px] text-slate-400 uppercase font-black mb-0.5">Cluster Load</p>
                                                <p className="text-[11px] font-mono font-bold text-slate-900">{agent.metrics.load}</p>
                                                <div className="w-full h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                    <div className={`h-full ${colorClasses.bg.replace('/10', '')} opacity-60`} style={{ width: agent.metrics.load }} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[8px] text-slate-400 uppercase font-black mb-0.5">Avg Latency</p>
                                                <p className="text-[11px] font-mono font-bold text-slate-900">{agent.metrics.latency}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] text-slate-400 uppercase font-black mb-0.5">Node Uptime</p>
                                                <p className="text-[11px] font-mono font-bold text-slate-900">{agent.metrics.uptime}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] text-slate-400 uppercase font-black mb-0.5">Throughput</p>
                                                <p className="text-[11px] font-mono font-bold text-slate-900">{agent.metrics.throughput}</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                                            <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-tighter">● SYNC VERIFIED</span>
                                            <span className="text-[8px] text-slate-400 font-mono">#{agent.id}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Corner Decor & Legend */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 bg-white/80 p-3 rounded-lg border border-black/5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono text-slate-900 font-semibold">SWARM PIPELINE</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-0.5 bg-rose-500 opacity-60 rounded" />
                    <span className="text-[10px] font-mono text-slate-600">RISK VETO PATH</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-0.5 bg-emerald-500 opacity-60 rounded" />
                    <span className="text-[10px] font-mono text-slate-600">PORTFOLIO SIZING</span>
                </div>
            </div>

            <div className="absolute bottom-6 right-6 text-right">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Execution Latency Floor
                </div>
                <div className="text-sm font-mono text-cyan-600 font-bold mt-1">
                    0.04 ms
                </div>
            </div>

            {/* Architecture Labels */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-24 opacity-30 pointer-events-none hidden md:flex">
                <div className="text-xs font-mono text-slate-900 uppercase tracking-[0.2em] w-32 text-center">Data Ingest</div>
                <div className="text-xs font-mono text-slate-900 uppercase tracking-[0.2em] w-32 text-center">Info Agents</div>
                <div className="text-xs font-mono text-slate-900 uppercase tracking-[0.2em] w-32 text-center">Risk Swarm</div>
                <div className="text-xs font-mono text-slate-900 uppercase tracking-[0.2em] w-32 text-center">Execution</div>
            </div>
        </div>
    );
};

export default AgentSwarmGraphic;
