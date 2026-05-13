import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gov/Layout";

export const Route = createFileRoute("/verification")({
  component: Verification,
  head: () => ({ meta: [{ title: "Verification Console · NDLM" }] }),
});

function Verification() {
  return (
    <PageShell title="Verification Console" subtitle="Run muzzle and facial biometric verification against the national bovine registry.">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-gov-blue font-semibold">Query</div>
                <div className="font-semibold text-gov-navy">Animal ID: NDLM-GJ-45882</div>
              </div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-success/15 text-success ring-1 ring-success/30">
                ✓ Match · 98.4%
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <ImagePanel title="Captured" subtitle="Muzzle · 2026-05-13 09:41" />
              <ImagePanel title="Registry Match" subtitle="Enrolled 2024-08-12" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-4 text-sm">
              <Metric label="Muzzle Score" value="98.7%" tone="text-success" />
              <Metric label="Face Score" value="96.1%" tone="text-success" />
              <Metric label="Fusion" value="98.4%" tone="text-success" />
              <Metric label="Latency" value="412 ms" tone="text-info" />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <div className="px-5 py-3 border-b border-border font-semibold text-gov-navy">Verification Queue</div>
            <table className="w-full text-sm">
              <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left px-4 py-2">Time</th>
                  <th className="text-left px-4 py-2">Animal</th>
                  <th className="text-left px-4 py-2">Source</th>
                  <th className="text-right px-4 py-2">Score</th>
                  <th className="text-left px-4 py-2">Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["09:41", "NDLM-GJ-45882", "FLW Mobile", "98.4%", "Verified"],
                  ["09:39", "NDLM-GJ-45881", "Bharat Pashudhan", "92.0%", "Verified"],
                  ["09:36", "NDLM-RJ-21044", "Insurance API", "76.1%", "Review"],
                  ["09:32", "NDLM-UP-11203", "FLW Mobile", "62.4%", "Mismatch"],
                ].map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-2 font-mono text-xs">{r[0]}</td>
                    <td className="px-4 py-2 font-mono text-xs">{r[1]}</td>
                    <td className="px-4 py-2">{r[2]}</td>
                    <td className="px-4 py-2 text-right font-medium">{r[3]}</td>
                    <td className="px-4 py-2">{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="font-semibold text-gov-navy">Run New Verification</div>
            <div className="mt-3 space-y-3 text-sm">
              <input placeholder="Animal ID or Tag" className="w-full rounded-md border border-input px-3 py-2" />
              <select className="w-full rounded-md border border-input px-3 py-2">
                <option>Modality: Muzzle + Face (Fusion)</option>
                <option>Muzzle only</option>
                <option>Face only</option>
              </select>
              <button className="w-full rounded-md bg-gov-blue text-white py-2 font-medium">Verify</button>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 text-sm">
            <div className="font-semibold text-gov-navy mb-2">Audit Trail</div>
            <ol className="space-y-2 text-xs text-muted-foreground">
              <li>09:41:12 · Capture received from FLW Rakesh Patel</li>
              <li>09:41:12 · Pre-processing &amp; quality check passed</li>
              <li>09:41:12 · Muzzle model v3.2 inference</li>
              <li>09:41:13 · Face model v2.8 inference</li>
              <li>09:41:13 · Fusion score 98.4 → VERIFIED</li>
              <li>09:41:13 · Logged to immutable audit ledger</li>
            </ol>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function ImagePanel({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-md border border-border overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-gov-blue-soft to-muted grid place-items-center text-5xl">🐄</div>
      <div className="px-3 py-2 border-t border-border">
        <div className="text-sm font-medium text-gov-navy">{title}</div>
        <div className="text-[11px] text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}
function Metric({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-md border border-border p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`text-lg font-bold ${tone}`}>{value}</div>
    </div>
  );
}
