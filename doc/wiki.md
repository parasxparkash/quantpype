# QuantPype – Platform Wiki

## 1. What QuantPype Is (Category)

**QuantPype is an open platform and framework**, not a traditional SaaS product.

| Term | How it applies |
|------|----------------|
| **Framework** | You run it yourself (self-host). You plug in your own strategies, agents, and data sources. QuantPype provides the orchestration layer, risk framework, and UI. |
| **Platform** | It’s the layer on which you build: pipelines, agents, dashboards, and (optionally) cloud services. It can run fully local or hybrid. |
| **Optional SaaS** | Some parts can be offered as a service later (e.g. hosted backtesting, shared sentiment APIs). Core alpha and execution stay under your control. |

**In short:** Self-hostable orchestration and execution framework for quant workflows, with optional cloud components. You own the code and the sensitive logic; we don’t host your alpha or your orders.

---

## 2. Vision & Mission

**Vision:** Make it practical for smaller teams to run institutional-style quant workflows by keeping alpha and execution local while using cloud only where it’s safe and scalable.

**Mission:** Provide a secure, local-first platform that orchestrates pipelines and agents (rule-based and/or small ML models), with clear separation between alpha generation and risk control, and a single terminal-style UI to run and monitor everything.

---

## 3. Idea & Core Purpose

**The idea:** QuantPype is a web-based terminal and orchestration layer that connects:

- **Local components:** Your hardware runs execution, alpha logic, and keys. Nothing sensitive is required to leave your environment.
- **Optional cloud components:** Non-sensitive workloads (e.g. sentiment aggregation, historical backtesting, data ingest) can run in your own or a trusted cloud.

**The purpose:** Many quant setups are either fully on-prem (hard to scale) or fully in the cloud (IP and data concerns). QuantPype is designed for a **hybrid** model: keep what must stay private on your side, and use cloud only for what you choose to offload.

For a concise breakdown of the problems this addresses, see [What Problem It Solves](./what-problem-it-solves.md).

---

## 4. Features (Feasible Scope)

These are features that are **realistic to build and operate**:

**Core (framework)**

- **Pipelines:** Configure and run data and execution pipelines (e.g. market data → signals → risk check → execution). Throughput depends on your infra; the platform focuses on correctness and observability, not marketing numbers.
- **Agents:** Rule-based and/or small, task-specific models (e.g. sentiment score, risk checks, sizing). See [Agent Orchestration](./agents.md).
- **Terminal / Dashboard:** Single UI to view strategies, exposure, risk, and system health.
- **Risk layer:** Configurable limits (position, leverage, exposure), fat-finger and wash-trade checks, optional volatility-based sizing. See [Risk & Portfolio Management](./risk-portfolio-management.md).

**Extended (realistic additions)**

- **Backtesting:** Run strategies on historical data (local or in your cloud); no need to send alpha to a third party.
- **Paper trading:** Same pipelines and agents against a simulated book before going live.
- **Audit & compliance:** Log all orders, risk decisions, and config changes for review and export.
- **API:** REST and/or WebSocket API to add custom agents, pull signals, or integrate with your existing systems.
- **Broker / venue adapters:** Pluggable adapters for brokers and APIs you’re licensed to use (you remain responsible for data and execution agreements).
- **Local-first execution:** Execution and alpha run on your nodes; optional “bridge” to sync only non-sensitive data with your own cloud.

**What we don’t promise**

- Sub-millisecond *end-to-end* “news to order” latency (see latency section below).
- “Zero-knowledge” in the cryptographic sense; we mean “your alpha and orders don’t leave your control.”
- Throughput figures (e.g. GB/s) as product guarantees; those depend on your hardware and data contracts.

---

## 5. Technical Stack & Architecture

**Web app (this repo)**

- Next.js (App Router), React 19, Tailwind CSS, TypeScript. Serves as the terminal UI and can be deployed anywhere (e.g. GitHub Pages, your own server).

**Backend / runtime (conceptual)**

- **Local nodes:** Your machines run execution, alpha, and keys. Can use GPUs for small-model inference if you add that later.
- **Optional cloud:** Your own or managed services for backtesting, sentiment, or data ingest. Communication over TLS (e.g. mTLS); we use “Quantum Bridge” in docs to mean this secure link, not quantum cryptography.
- **Orchestration:** Pipelines and agents are defined and scheduled by the platform; actual execution can be local containers, processes, or services you wire in.

---

## 6. Latency & Performance (Realistic)

- **Single-step inference:** A small, quantized model doing one task (e.g. classify a signal) can reach low millisecond or sub‑millisecond *inference* on good hardware. We do not quote a single “0.04 ms” number for the whole system.
- **Full loop:** From “data in” to “order sent” involves multiple steps (ingest, optional sentiment, alpha, risk, sizing, execution). End-to-end latency is typically in the **milliseconds to tens of milliseconds** for a well-tuned setup, not microseconds.
- **Throughput:** Depends on your data sources, network, and hardware. The platform is built to handle streaming and batch in a manageable way, not to promise specific GB/s.

---

## 7. Usage (Web App)

**Run the web app (terminal UI)**

```bash
git clone <repo_url>
cd quantpype
npm install
npm run dev
```

Open the app in the browser. For production, build and serve (or deploy the static export):

```bash
npm run build
npm start
```

**Typical flow (when backend exists)**

1. Log in to the dashboard; connect to your local (or hybrid) backend.
2. Configure and enable pipelines (data + strategies).
3. Agents consume data and produce signals; risk layer approves or blocks; execution runs on your nodes.
4. Dashboard shows positions, risk, and logs.

The current repo is the **front-end and documentation**. The execution engine, broker adapters, and data connectors are separate components you or the project would implement against this framework.

---

## 8. Pipeline Workflow (Overview)

A typical quant pipeline in QuantPype flows through six layers:

1. **Data** — Market data, alternative data, news/sentiment, reference data. Can be local or from your cloud ingest.
2. **Research & Alpha** — Signal generation, backtesting, alpha models, factor library. Alpha logic stays local.
3. **Risk & Compliance** — Pre-trade risk, VaR/exposure, compliance checks, wash-trade, margin. Central veto/size layer.
4. **Portfolio** — Sizing, allocation, rebalancing, correlation monitoring. Ensures strategies don’t over-concentrate.
5. **Execution** — Order management, smart routing, venues, FIX/API. Runs on your nodes.
6. **Post-trade** — Settlement, reporting, P&L attribution, audit log. Keeps everything traceable.

Data and backtest can run in the cloud; alpha, risk, and execution run locally. The UI (Pipelines page) shows this workflow; you configure which agents and pipelines belong to each layer.

---

## 9. Who It’s For

- **Quant developers** — Build and plug in strategies and agents; use the platform as the orchestration and risk layer.
- **Risk / ops** — Configure limits, monitor exposure, and audit decisions from one dashboard.
- **Small teams and boutiques** — Run an institutional-style stack without sending alpha to a vendor; scale only the parts you choose (e.g. data, backtest) in the cloud.

Not aimed at ultra-HFT shops that need microsecond-level, exchange-co-located execution; the design targets systematic and mid-frequency workflows where millisecond-to-tens-of-milliseconds latency is acceptable.

---

## 10. Glossary

| Term | Meaning |
|------|--------|
| **Alpha** | Proprietary logic or signal that generates trade ideas. Kept local in QuantPype. |
| **Agent** | A single-purpose unit: rule-based or small model. Does one task (e.g. sentiment, risk check, sizing). |
| **Pipeline** | A configured flow of data and processing (e.g. market data → signals → risk → execution). |
| **Risk layer** | Central component that sees every proposed trade and can approve, reduce size, or block. |
| **Quantum Bridge** | In docs, the encrypted link (e.g. mTLS) between your local nodes and optional cloud. Not quantum cryptography. |
| **Local node** | Your hardware running execution, alpha, and keys. |
| **Cloud swarm** | Optional set of services (e.g. sentiment, backtest) running in your or a trusted cloud. |
| **SLM** | Small Language Model. Task-specific, quantized model for low-latency inference. |
