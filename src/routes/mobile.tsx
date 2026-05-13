import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gov/Layout";

export const Route = createFileRoute("/mobile")({
  component: Mobile,
  head: () => ({ meta: [{ title: "FLW Mobile Capture · NDLM" }] }),
});

function Mobile() {
  return (
    <PageShell title="FLW Mobile Capture Interface" subtitle="Preview of the smartphone capture experience used by Field Level Workers in pilot regions.">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <div className="flex justify-center">
          <div className="w-[320px] rounded-[2.5rem] border-[10px] border-gov-navy bg-gov-navy shadow-2xl overflow-hidden">
            <div className="bg-gov-navy text-white text-[10px] flex justify-between px-5 py-1">
              <span>9:41</span><span>NDLM FLW · 4G</span>
            </div>
            <div className="bg-card">
              <div className="bg-gov-blue text-white px-4 py-3">
                <div className="text-[11px] opacity-80">Logged in as</div>
                <div className="font-semibold text-sm">Rakesh Patel · FLW-GJ-2204</div>
                <div className="text-[11px] opacity-80">Anand Dairy Cluster</div>
              </div>

              <div className="p-3 space-y-3">
                <div className="rounded-md border border-border p-3">
                  <div className="text-[11px] text-muted-foreground">Animal ID</div>
                  <div className="font-mono text-sm font-semibold text-gov-navy">NDLM-GJ-45882</div>
                </div>

                <div className="aspect-square rounded-lg bg-gradient-to-br from-gov-blue-soft to-muted relative grid place-items-center overflow-hidden">
                  <div className="text-6xl">🐄</div>
                  <div className="absolute inset-6 border-2 border-dashed border-gov-blue rounded-md" />
                  <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] bg-black/60 text-white py-1 rounded">
                    Align muzzle within frame
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
                  <div className="rounded bg-muted py-1.5">Quality<br/><strong className="text-success">Good</strong></div>
                  <div className="rounded bg-muted py-1.5">Lighting<br/><strong className="text-success">OK</strong></div>
                  <div className="rounded bg-muted py-1.5">GPS<br/><strong className="text-success">Locked</strong></div>
                </div>

                <button className="w-full rounded-md bg-gov-blue text-white py-2.5 text-sm font-semibold">
                  ● Capture &amp; Verify
                </button>
                <button className="w-full rounded-md border border-border text-gov-navy py-2 text-xs">Switch to Face Mode</button>
              </div>

              <div className="border-t border-border grid grid-cols-4 text-[10px] text-center py-2 text-muted-foreground">
                <div>🏠<br/>Home</div>
                <div className="text-gov-blue">📷<br/>Capture</div>
                <div>📥<br/>Queue</div>
                <div>👤<br/>Me</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="font-semibold text-gov-navy">Field Capture Flow</div>
            <ol className="mt-3 space-y-2 text-sm list-decimal list-inside text-muted-foreground">
              <li>Authenticate with Aadhaar-linked FLW credentials</li>
              <li>Scan tag / enter Animal ID (e.g. NDLM-GJ-45882)</li>
              <li>Position muzzle within frame, app auto-validates quality</li>
              <li>Capture image / 3-second video; GPS &amp; timestamp embedded</li>
              <li>Encrypted upload over mTLS to NDLM verification gateway</li>
              <li>On-device fallback model returns provisional result while offline</li>
            </ol>
          </div>

          <div className="rounded-lg border border-border bg-gov-blue-soft p-5 text-sm">
            <div className="font-semibold text-gov-navy mb-2">Today's Activity · Rakesh Patel</div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded bg-card p-3"><div className="text-2xl font-bold text-gov-blue">42</div><div className="text-[11px] text-muted-foreground">Verifications</div></div>
              <div className="rounded bg-card p-3"><div className="text-2xl font-bold text-india-green">11</div><div className="text-[11px] text-muted-foreground">Enrollments</div></div>
              <div className="rounded bg-card p-3"><div className="text-2xl font-bold text-success">98.4%</div><div className="text-[11px] text-muted-foreground">Accuracy</div></div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
