# QuantPype - Platform Wiki

## 1. Vision & Mission
**Vision:** To democratize and decentralize institutional-grade quantitative finance through hybrid intelligence, bridging local data sovereignty with cloud-scale monitoring.
**Mission:** To provide an ultra-low latency, highly secure, and collaborative AI-driven platform for automating high-frequency trading pipelines and orchestrating collective quant agents that manage the next generation of funds.

---

## 2. Idea & Core Purpose
**The Idea:** QuantPype is a Next.js-based terminal interface that orchestrates a swarm of specialized AI agents. It safely connects sensitive proprietary trading logic (running on isolated local hardware) with distributed global market monitoring swarms (running on scalable cloud nodes).

**The Purpose:** 
Traditional quantitative funds rely on monolithic, highly centralized, and expensive architectures. QuantPype decentralizes this paradigm by allowing traders to run "Alpha" generation locally while offloading global sentiment analysis, alternative data scraping, and general risk parity calculations to a coordinated cloud swarm.

**What Problem It Solves:**

Due to the depth of the problems QuantPype addresses—specifically regarding Privacy vs. Public Cloud Scalability, Execution Speed Bottlenecks (Latency), and Orchestrating Massive Data Pipelines—this topic has been separated into its own detailed document.

Please refer to the dedicated [What Problem It Solves](./what-problem-it-solves.md) document for a comprehensive breakdown of the core issues in algorithmic trading and how QuantPype's architecture solves them.

---

## 3. Nature & Actions
- **Nature:** A hybrid decentralized AI orchestration application and web-based trading execution terminal.
- **Actions & Components:** 
  - **Pipelines:** Ingest market data and stream strategy execution (e.g., *RiskSentinel, NeuralArb, LiquidityFlow*). They handle massive throughputs (up to 5.4GB/s).
  - **Agents:** Collaborative SLMs (Small Language Models) focusing on specific tasks (e.g., *AlphaScanner, DarkPoolScan*). For detailed information on how they are trained (Distillation/Quantization) and used in a coordinated swarm, see the [Agent Orchestration Guide](./agents.md), and for how they enforce capital preservation, see the [Risk & Portfolio Management Guide](./risk-portfolio-management.md).
  - **Dashboard:** Provides real-time visibility into total fund values, active strategies, global exposure, and system execution latency.

---

## 4. Market Research
The quantitative finance market is rapidly shifting toward AI-assisted strategy execution. However, standard generative AI tools suffer from severe latency limitations (hundreds of milliseconds or seconds) and hallucination risks, making them unsuitable for live electronic trading. 
- **Target Audience:** Boutique quant funds, autonomous proprietary trading firms, and advanced algorithmic retail traders.
- **Competitors:** Existing institutional platforms (e.g., Bloomberg Terminal functionalities, Palantir Foundry for financial services) typically lack out-of-the-box local/cloud AI swarm coordination explicitly tailored for localized quant flows.
- **Market Edge (The Moat):** A relentless focus on "Zero-Knowledge Security" and small, ultra-fast local inference capabilities rather than API-dependent massive models. This gives users absolute control over their trading IP (Intellectual Property).

---

## 5. Technical Infrastructure & Tech Stack
**Frontend / Web App:**
- **Framework:** Next.js (App Router) combined with React 19.
- **Styling:** Tailwind CSS v4, utilizing native CSS cascade layers and a custom UI system featuring glassmorphism and a cyberpunk/terminal aesthetic.
- **Language:** TypeScript for type-safe react components, state management, and props.

**Architecture (Conceptual Backend):**
- **Sovereign Local Nodes:** Software nodes running exclusively on the user's localized hardware (GPUs). Responsible for cryptographic key generation, secure trade execution, and highly classified Alpha logic. 
- **Cloud Swarm:** Distributed containerized servers handling non-critical, heavily parallelized tasks like global news sentiment analysis and massive historical backtesting.
- **Quantum Bridge:** The secure bidirectional communication layer (e.g., WebSocket/gRPC streams coupled with 256-bit encryption) syncing local and cloud nodes.

---

## 6. Optimization Strategy: The Power of Smaller Models
To achieve the **0.04ms execution latency** stated in the terminal, QuantPype entirely circumvents monolithic Foundational Models (like GPT-4), relying instead on **Small Language Models (SLMs)** and specialized neural networks.

1. **Model Quantization:**
   Models are highly quantized (reduced from 32-bit floating-point to 4-bit or 8-bit integers using formats like GGUF). This allows the entire model to fit inside local GPU VRAM or even directly within a fast CPU cache, maximizing memory bandwidth and throughput.
2. **Knowledge Distillation:**
   Massive "teacher" models are used offline to train tiny "student" models. These student models are highly specialized to identify specific binary market patterns (e.g., a model *only* trained to read FIX protocol messages and output buy/sell integers).
3. **Agentic Specialization (The Swarm):**
   Instead of one overarching model doing all the work, QuantPype orchestrates a swarm of micro-models. E.g., `SentimentX` purely parses text strings for sentiment scores, while `VolatilityNexus` only does math for options pricing. This ensures computations are tiny, concurrent, and practically instantaneous.

---

## 7. Step-by-Step Procedure & Usage Guide

Below is the definitive guide on how the web application infrastructure runs, executes, and is utilized.

### Phase 1: Environment Setup
Before execution, the engineer or trader must provision the codebase.

1. **Clone & Install Dependencies:**
   ```bash
   git clone <repo_url>
   cd quantpype
   npm install
   ```
   *Explanation:* The `npm install` command reads the `package.json` file to download necessary dependencies like React 19, Next.js, and Tailwind CSS v4 into the `node_modules` directory locally.

### Phase 2: Running the Web Application
Depending on the environment, the Next.js server is started differently.

1. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   *Explanation:* This command spins up the Next.js local development server (typically on `http://localhost:3000`). It compiles the React components on the fly (JIT) and watches for file changes, utilizing Hot Module Replacement (HMR) for instant visual updates without page refreshes.

2. **Build & Deploy for Production:**
   ```bash
   npm run build
   ```
   *Explanation:* The `build` command instructs Next.js to compile the application into an optimized, minified production build inside the `.next` folder. It statically generates pages where possible to maximize speed and SEO.
   
   ```bash
   npm start
   ```
   *Explanation:* The `start` command runs the optimized production server. It utilizes the pre-built files created by the `build` command to serve the application to live users globally with minimum TTFB (Time To First Byte).

### Phase 3: System Execution Flow (Application Use)
Once the platform is running, a typical operational cycle looks like this:

- **Step 1 - Initialization:** The user securely logs into the Web Dashboard. The `Quantum Bridge` initializes a secure WebSocket connection syncing the UI to the backend Swarm.
- **Step 2 - Pipeline Activation:** The user navigates to the "Pipelines" tab to toggle data streams (e.g., `AlphaScanner-01`). The system begins ingesting market data sequences at massive throughput rates.
- **Step 3 - Agent Inference:** The incoming data is passed in small chunks to the local SLM agents. These quantized models evaluate the data streams for signals (e.g., detecting a dark pool liquidity block).
- **Step 4 - Risk Parity & Execution:** If an execution signal exceeds the confidence threshold, the `RiskSentinel` agent rapidly checks global exposure limits. If approved, the trade is sent out through the `NeuralArb` local execution agent directly to the exchange.
- **Step 5 - Feedback Loop & Telemetry:** The UI dashboard reacts defensively, mapping updates in real-time, reflecting new net fund values, execution latencies, and streaming system logs back to the user interface.
