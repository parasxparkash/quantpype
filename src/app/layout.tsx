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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <nav className="glass sticky top-0 z-50 flex items-center justify-between px-8 py-4 m-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-black">Q</div>
            <span className="text-xl font-bold gradient-text">QuantPype</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/pipelines" className="hover:text-white transition-colors">Pipelines</a>
            <a href="/agents" className="hover:text-white transition-colors">Agents</a>
            <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
          </div>
          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Connect Fund
          </button>
        </nav>
        {children}
        <footer className="py-12 px-8 border-t border-zinc-800 text-zinc-500 text-sm flex justify-between items-center">
          <div>© 2026 QuantPype Industries. Institutional Grade AI.</div>
          <div className="flex gap-6">
            <span>Terminal: Online</span>
            <span>Latency: 4ms</span>
            <span>Uptime: 99.99%</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
