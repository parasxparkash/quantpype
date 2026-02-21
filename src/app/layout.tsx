import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantPype | Collaborative Quant Intelligence",
  description: "Automated pipelines and collective quant agents managing the next generation of funds.",
  keywords: ["quantitative finance", "AI agents", "automated trading", "pipeline management"],
  authors: [{ name: "QuantPype" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-grid`}>
        <div className="scanline" />

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
        </div>

        <div className="relative z-10 flex flex-col min-h-screen w-full">
          {/* Header */}
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center justify-between h-16">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 group">
                  <span className="text-xl font-bold tracking-tight">
                    Quant Pype
                  </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-lg border border-black/5">
                  <a href="/" className="nav-link">Home</a>
                  <a href="/pipelines" className="nav-link">Pipelines</a>
                  <a href="/agents" className="nav-link">Agents</a>
                  <a href="/dashboard" className="nav-link">Terminal</a>
                  <a href="/wiki" className="nav-link">Wiki</a>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                  <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-md">
                    Coming Soon
                  </button>

                  {/* Mobile Menu Button */}
                  <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
                    <span className="w-5 h-0.5 bg-black rounded"></span>
                    <span className="w-5 h-0.5 bg-black rounded"></span>
                    <span className="w-5 h-0.5 bg-black rounded"></span>
                  </button>
                </div>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* Footer */}
          <footer className="relative mt-auto border-t border-black/5 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg font-bold">Quant Pype</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                    Institutional-grade AI infrastructure for quantitative finance.
                    Orchestrating high-frequency pipelines and collaborative agents across distributed nodes.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 text-slate-900">Platform</h4>
                  <ul className="space-y-2">
                    <li><a href="/pipelines" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Pipelines</a></li>
                    <li><a href="/agents" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Agents</a></li>
                    <li><a href="/dashboard" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Terminal</a></li>
                    <li><a href="/wiki" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Wiki</a></li>
                  </ul>
                </div>

                {/* Status */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 text-slate-900">System Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-slate-500 text-sm">Terminal: Online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 text-sm">Latency: 4ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 text-sm">Uptime: 99.99%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-slate-500 text-sm">
                  © 2026 QuantPype Industries. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    All Systems Operational
                  </span>
                  <span>v2.4.1</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
