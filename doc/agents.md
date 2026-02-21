# Agent Orchestration Guide

In QuantPype, **agents** are the units that do one job each: process data, produce signals, check risk, or size orders. They can be **rule-based** (no ML) or **small, specialized models** (SLMs / tiny neural nets) for tasks where that helps.

This doc describes how agents fit into the platform and how you can add or extend them.

---

## 1. What Agents Are

- **Not:** One big general-purpose LLM making all decisions.
- **Yes:** Many small components, each doing a narrow task:
  - Example (rule-based): “If position > X, block further buys.”
  - Example (model): “Given this text, output a sentiment score from -10 to +10.”

Using small, task-specific agents keeps latency low and makes it easier to audit and debug.

---

## 2. How You Can Add Agents

**Rule-based agents (no ML)**  
- Implement logic in code (e.g. thresholds, limits, correlation checks).  
- Fast, interpretable, and easy to deploy.  
- Good for risk, sizing, and many signal filters.

**Model-based agents (optional)**  
- One small model per task (e.g. sentiment, signal classification).  
- Trained offline; at runtime you only run inference.  
- Use quantization (e.g. 8-bit, GGUF-style) so they fit in limited VRAM or run on CPU with low millisecond latency.  
- Deploy in your own environment (Docker, local process, or your cloud).

**Orchestration**  
- The platform wires agents into pipelines: who receives which data, who calls the risk layer, who can trigger execution.  
- You can start with rules and add small models only where they add value.

---

## 3. Local vs. Cloud

- **Local:** Execution, alpha, keys, and any sensitive logic run on your machines.  
- **Cloud (optional):** Non-sensitive work only: e.g. sentiment aggregation, backtesting, data ingest.  
- **Link:** Encrypted channel (e.g. mTLS). Cloud never needs to see your strategies or live orders.

---

## 4. Types of Agents (Examples)

**Information / sensing**  
- Ingest or summarize data (e.g. news, order book stats).  
- Output structured signals (scores, flags) for downstream agents.  
- Can be rules (e.g. “volume > threshold”) or small models (e.g. sentiment).

**Risk**  
- Pre-trade checks: position limits, leverage, fat-finger, wash-trade.  
- Sizing: e.g. volatility-based position size.  
- Usually rule-based first; ML can be added later for things like anomaly detection.

**Execution / alpha**  
- Alpha: your proprietary logic that produces trade ideas.  
- Execution: translate approved ideas into orders via your broker/venue adapters.  
- These run locally; the platform doesn’t host them.

---

## 5. Feasible Additions

- **SDK or API** to register custom agents (your code, your runtime).  
- **Webhooks** so external systems can push data or receive signals.  
- **Templates** for common agent types (sentiment, risk, sizing) so you can clone and tweak.  
- **Containers:** run agents as Docker (or similar) for portability and resource limits.

---

## 6. How They Work Together

A simple flow:

1. **Ingest:** Data enters a pipeline (market data, news, etc.).  
2. **Signals:** Information agents produce scores or events.  
3. **Alpha:** Your logic (local) decides whether to propose a trade.  
4. **Risk:** Risk agents check limits and sizing; they approve, reduce size, or block.  
5. **Execute:** Approved orders go out through your execution layer (local).

The whole loop can run in **milliseconds to tens of milliseconds** depending on your setup; the platform is designed to keep the path short and observable.

---

## 7. Example Agents (Reference)

Names you’ll see in the UI or docs; each does one job:

- **SentimentX** — Information: text/social → sentiment score (e.g. -10 to +10). Often cloud.
- **AlphaScanner** — Information: order book / L2 → signals or anomalies. Can be local or cloud.
- **DarkPoolScan** — Information: OTC / dark pool activity → block or flow signals. Usually local.
- **RiskSentinel** — Risk: pre-trade checks (fat-finger, margin, wash-trade). Local.
- **Guardian.ai** — Portfolio: exposure, correlation, drawdown; can throttle or pause strategies. Local.
- **VolatilityNexus** — Risk/sizing: volatility-based position sizing. Local.
- **NeuralArb / LiquidityFlow** — Execution/alpha: your proprietary logic and order routing. Local only.

You can add more agents via rules or small models; the platform doesn’t require these exact names.

---

## 8. Deployment Options

- **Bare process** — Run agents as processes on your machine; the platform (or your code) starts and monitors them.
- **Docker** — Package each agent in a container; run on local or cloud; same image for dev and prod.
- **Serverless (optional)** — For non-sensitive, bursty work (e.g. backtest jobs), you could run agents as serverless functions in your cloud; the bridge syncs results back to the local layer.
