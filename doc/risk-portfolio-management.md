# Risk & Portfolio Management

In systematic trading, having a trade idea (alpha) is one thing; making sure it doesn’t break risk or portfolio constraints is another. QuantPype addresses this by **separating alpha from risk** and running every proposed trade through a dedicated risk layer.

---

## 1. Separation of Alpha and Risk

- **Alpha agents:** Propose trades (signals, size, direction). They don’t need to know your total margin or firm-level limits.  
- **Risk agents / layer:** See every proposal and can **approve, reduce size, or block**. They enforce limits and portfolio rules; they don’t generate alpha.

This keeps a clear boundary: one side seeks return, the other enforces guardrails. Both can be rule-based; risk can later be augmented with small models (e.g. anomaly detection) if useful.

---

## 2. What the Risk Layer Does (Feasible)

When an alpha agent proposes a trade, the risk layer can:

**Pre-trade checks (rule-based)**  
- **Fat-finger:** Reject or flag if size is far outside normal for that strategy (e.g. vs. recent history).  
- **Margin & leverage:** Block if the trade would exceed your configured max leverage or margin.  
- **Wash-trade / conflict:** Block if it would create an obvious conflict (e.g. opposite position in the same name from another agent).

**Sizing (optional)**  
- **Volatility-based sizing:** Adjust position size by current volatility (e.g. lower size when vol is high).  
- Configurable per strategy or per asset.

**Audit**  
- Every proposal and decision (approve / reduce / block) can be logged with reason codes for compliance and debugging.

---

## 3. Portfolio-Level (Optional)

Beyond single-trade checks, you can add:

- **Exposure limits:** Cap total exposure by asset, sector, or region.  
- **Correlation awareness:** Monitor (or limit) how correlated your strategies are; reallocate or throttle if too much risk is concentrated.  
- **Drawdown controls:** Pause or disable a strategy (or pipeline) if it breaches a drawdown or loss threshold.

These are realistic to implement as rules and config; ML can be added later for things like dynamic allocation if needed.

---

## 4. End-to-End Flow

1. **Alpha:** Agent proposes a trade (asset, side, size, optional confidence).  
2. **Sizing (optional):** Vol or rule-based sizing adjusts size.  
3. **Risk checks:** Fat-finger, margin, leverage, wash-trade; risk layer approves or blocks.  
4. **Execution:** Approved orders go to your execution layer (local).  
5. **Book-keeping:** Positions and risk metrics update; portfolio view and logs reflect the new state.

Latency from proposal to decision can be in the **low millisecond** range for a rule-based risk layer; the platform is designed to keep this path simple and fast.

---

## 5. Example Limits (What to Configure)

- **Position limits** — Max notional or quantity per symbol, per strategy, or per book.
- **Leverage** — Max gross or net leverage (e.g. 2x, 4x) at account or strategy level.
- **Exposure** — Max exposure by sector, region, or asset class (e.g. 20% EM, 50% equities).
- **Drawdown** — Pause or disable a strategy if drawdown exceeds X% from peak or from start-of-day.
- **Fat-finger** — Reject if order size is more than N standard deviations from that strategy’s recent average size.

You define these in config or via the UI; the risk layer enforces them on every proposal.

---

## 6. Integration with Execution

The risk layer sits **in front of** execution: alpha sends a proposal → risk approves or blocks → only approved, possibly resized orders go to the execution layer (your FIX/API adapters). Execution never sees rejected proposals; all decisions are logged so you can audit why a trade was blocked or sized down.
