import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gov/Layout";

export const Route = createFileRoute("/admin")({
  component: Admin,
  head: () => ({ meta: [{ title: "Administration · NDLM" }] }),
});

function Admin() {
  return (
    <PageShell title="Administrative Monitoring" subtitle="System health, integration status, audit logs and API services management.">
      <div className="grid gap-4 sm:grid-cols-4 mb-6">
        {[
          { l: "API Uptime", v: "99.98%", t: "text-success" },
          { l: "Avg Latency", v: "412 ms", t: "text-info" },
          { l: "Open Incidents", v: "0", t: "text-success" },
          { l: "Pending Reviews", v: "27", t: "text-warning" },
        ].map(s => (
          <div key={s.l} className="rounded-lg border border-border bg-card p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            <div className={`text-2xl font-bold ${s.t} mt-1`}>{s.v}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="px-5 py-3 border-b border-border font-semibold text-gov-navy">Integration Status</div>
          <ul className="divide-y divide-border text-sm">
            {[
              ["Bharat Pashudhan", "Operational", "success"],
              ["NDLM Core Registry", "Operational", "success"],
              ["State Portal · Gujarat", "Operational", "success"],
              ["State Portal · Rajasthan", "Degraded", "warning"],
              ["Insurance Verification API", "Operational", "success"],
            ].map(([n, s, t]) => (
              <li key={n} className="flex items-center justify-between px-5 py-3">
                <span className="text-gov-navy">{n}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ring-1 ${
                  t === "success" ? "bg-success/15 text-success ring-success/30" : "bg-warning/20 text-warning ring-warning/30"
                }`}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="px-5 py-3 border-b border-border font-semibold text-gov-navy">Audit Logs</div>
          <ul className="divide-y divide-border text-xs font-mono">
            {[
              "[09:41:13] VERIFY  NDLM-GJ-45882 by FLW-GJ-2204 → 98.4 OK",
              "[09:40:55] ENROLL  NDLM-GJ-45883 by FLW-GJ-2204 → CREATED",
              "[09:39:11] APIKEY  rotated by admin@nddb",
              "[09:36:02] VERIFY  NDLM-RJ-21044 by INSURE-API → 76.1 REVIEW",
              "[09:32:48] VERIFY  NDLM-UP-11203 by FLW-UP-1188 → 62.4 MISMATCH",
              "[09:30:00] CRON    nightly-sync bharat_pashudhan OK 124k recs",
            ].map((l) => <li key={l} className="px-5 py-2 text-muted-foreground">{l}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-card overflow-hidden">
        <div className="px-5 py-3 border-b border-border font-semibold text-gov-navy">API Services</div>
        <table className="w-full text-sm">
          <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-2">Endpoint</th>
              <th className="text-left px-4 py-2">Method</th>
              <th className="text-left px-4 py-2">Consumers</th>
              <th className="text-right px-4 py-2">Calls (24h)</th>
              <th className="text-right px-4 py-2">p95 Latency</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["/v1/animal/verify", "POST", "Bharat Pashudhan, Insurers", "84,217", "418 ms"],
              ["/v1/animal/enroll", "POST", "FLW App, State Portals", "12,488", "612 ms"],
              ["/v1/animal/{id}", "GET", "All", "3,12,041", "92 ms"],
              ["/v1/audit/stream", "GET", "Internal", "1,204", "210 ms"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border">
                <td className="px-4 py-2 font-mono text-xs">{r[0]}</td>
                <td className="px-4 py-2"><span className="rounded bg-gov-blue/10 text-gov-blue px-2 py-0.5 text-xs font-medium">{r[1]}</span></td>
                <td className="px-4 py-2">{r[2]}</td>
                <td className="px-4 py-2 text-right">{r[3]}</td>
                <td className="px-4 py-2 text-right">{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
