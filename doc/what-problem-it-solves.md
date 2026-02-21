# What Problem It Solves

QuantPype is aimed at three practical issues in algorithmic and systematic trading:

---

## 1. Privacy and Control vs. Using the Cloud

**Problem:** Many funds don’t want to send proprietary strategies, live positions, or raw alpha to third-party clouds or vendors. That creates tension when you also want scalable backtesting, sentiment, or data processing.

**What QuantPype does:** Supports a **hybrid setup**. Execution and alpha stay on **your** hardware (local or your own VPC). Only the parts you choose (e.g. aggregated sentiment, historical backtest jobs) run in the cloud. The link between local and cloud is encrypted (e.g. TLS/mTLS). So you get scalability where it’s safe, and control where it matters.

---

## 2. Latency: Big LLMs vs. Live Trading

**Problem:** Large language models (e.g. GPT-style APIs) have high latency and aren’t suitable for live order decisions. You need fast, deterministic or low-latency logic at the point of execution.

**What QuantPype does:** The framework is built for **small, task-specific models and rules**, not a single giant LLM. You can use:

- Rule-based agents (if/then, thresholds).
- Small, quantized models for single tasks (e.g. sentiment score, signal classification).

Those can run with **low millisecond or sub-millisecond inference** on your own hardware. Full pipeline latency (data → signal → risk → order) is in the **millisecond to tens of milliseconds** range in a well-built setup, which is realistic for many systematic strategies (not ultra-HFT).

---

## 3. Managing Pipelines and Risk in One Place

**Problem:** Running multiple data pipelines, strategies, and risk checks usually means gluing together many tools and scripts. It’s hard to see everything in one place and to enforce risk in a consistent way.

**What QuantPype does:** A **single orchestration layer and UI**:

- Define pipelines (data → processing → signals).
- Attach agents (rules or small models) to specific tasks.
- Run a **central risk layer** that sees every proposed trade and can block or size it (limits, fat-finger, wash-trade, etc.).

You get one place to configure, run, and monitor, instead of ad‑hoc scripts and dashboards. Throughput and scale depend on your infrastructure; the platform is designed to be manageable and auditable.

---

## When to Use QuantPype

- You want **alpha and execution on your own infrastructure** and are willing to self-host the orchestration layer.
- You need **one place** to define pipelines, agents, and risk, and to monitor exposure and logs.
- You’re fine with **millisecond-level** pipeline latency (data → signal → risk → order) and don’t need sub-millisecond HFT.
- You want the option to **offload** only non-sensitive work (e.g. backtest, sentiment) to the cloud.

## When It’s Not a Fit

- You need a **fully hosted SaaS** with no self-hosting (QuantPype is a framework you run).
- You need **microsecond co-located** execution (ultra-HFT); the design targets systematic / mid-frequency.
- You want a **single vendor** to supply data, execution, and risk; QuantPype is the orchestration layer; you plug in your own or licensed data and brokers.
