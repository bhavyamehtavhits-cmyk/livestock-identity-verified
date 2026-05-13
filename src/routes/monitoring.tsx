import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gov/Layout";

export const Route = createFileRoute("/monitoring")({
  component: Monitoring,
  head: () => ({ meta: [{ title: "Pilot Monitoring · NDLM" }] }),
});

const districts = [
  { name: "Anand Dairy Cluster", state: "GJ", flws: 412, enrolled: 184_220, accuracy: 98.7, trend: "▲" },
  { name: "Mehsana", state: "GJ", flws: 298, enrolled: 122_410, accuracy: 97.9, trend: "▲" },
  { name: "Kolhapur", state: "MH", flws: 356, enrolled: 141_802, accuracy: 98.1, trend: "▲" },
  { name: "Jaipur Rural", state: "RJ", flws: 211, enrolled: 78_315, accuracy: 95.6, trend: "▼" },
  { name: "Meerut", state: "UP", flws: 189, enrolled: 64_102, accuracy: 94.8, trend: "▲" },
];

function Monitoring() {
  return (
    <PageShell title="Pilot Monitoring Dashboard" subtitle="National view of bovine biometric pilot performance and adoption.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          { l: "Active Pilots", v: "27", s: "across 11 states" },
          { l: "Enrolled (Total)", v: "5,90,849", s: "in pilot zones" },
          { l: "Avg Accuracy", v: "98.4%", s: "last 30 days" },
          { l: "SLA Adherence", v: "99.6%", s: "verification API" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-border bg-card p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            <div className="text-2xl font-bold text-gov-navy mt-1">{s.v}</div>
            <div className="text-xs text-muted-foreground">{s.s}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-5 lg:col-span-2">
          <div className="font-semibold text-gov-navy mb-4">Verification Volume · Last 12 Weeks</div>
          <Line />
          <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
            <div><span className="inline-block h-2 w-2 rounded-full bg-gov-blue mr-1" /> Verifications</div>
            <div><span className="inline-block h-2 w-2 rounded-full bg-india-green mr-1" /> Enrollments</div>
            <div><span className="inline-block h-2 w-2 rounded-full bg-warning mr-1" /> Re-captures</div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="font-semibold text-gov-navy mb-4">Modality Distribution</div>
          <Donut />
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-card overflow-hidden">
        <div className="px-5 py-3 border-b border-border font-semibold text-gov-navy">District-wise Performance</div>
        <table className="w-full text-sm">
          <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-2">Pilot Region</th>
              <th className="text-left px-4 py-2">State</th>
              <th className="text-right px-4 py-2">Active FLWs</th>
              <th className="text-right px-4 py-2">Enrolled</th>
              <th className="text-right px-4 py-2">Accuracy</th>
              <th className="text-center px-4 py-2">Trend</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((d) => (
              <tr key={d.name} className="border-t border-border hover:bg-muted/40">
                <td className="px-4 py-2 font-medium text-gov-navy">{d.name}</td>
                <td className="px-4 py-2">{d.state}</td>
                <td className="px-4 py-2 text-right">{d.flws.toLocaleString("en-IN")}</td>
                <td className="px-4 py-2 text-right">{d.enrolled.toLocaleString("en-IN")}</td>
                <td className="px-4 py-2 text-right font-medium">{d.accuracy}%</td>
                <td className={`px-4 py-2 text-center ${d.trend === "▲" ? "text-success" : "text-destructive"}`}>{d.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}

function Line() {
  const a = [42,48,51,55,60,58,64,71,69,78,82,88];
  const b = [22,25,28,30,33,31,35,40,38,44,47,50];
  const c = [8,9,7,8,10,9,11,12,10,11,9,10];
  const max = 100;
  const pts = (arr: number[]) => arr.map((v,i) => `${(i/(arr.length-1))*100},${100-(v/max)*100}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-44">
      {[20,40,60,80].map(y => <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="oklch(0.9 0.015 245)" strokeWidth="0.2" />)}
      <polyline fill="none" stroke="oklch(0.36 0.13 252)" strokeWidth="1.2" points={pts(a)} />
      <polyline fill="none" stroke="oklch(0.55 0.14 150)" strokeWidth="1.2" points={pts(b)} />
      <polyline fill="none" stroke="oklch(0.74 0.16 75)" strokeWidth="1.2" points={pts(c)} />
    </svg>
  );
}
function Donut() {
  const segments = [
    { v: 58, c: "oklch(0.36 0.13 252)", l: "Muzzle" },
    { v: 27, c: "oklch(0.55 0.14 150)", l: "Face" },
    { v: 15, c: "oklch(0.74 0.16 55)", l: "Fusion" },
  ];
  let acc = 0;
  const r = 16, c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 40 40" className="h-32 w-32 -rotate-90">
        {segments.map((s, i) => {
          const dash = (s.v/100)*c;
          const el = <circle key={i} r={r} cx="20" cy="20" fill="transparent" stroke={s.c} strokeWidth="6" strokeDasharray={`${dash} ${c-dash}`} strokeDashoffset={-acc} />;
          acc += dash;
          return el;
        })}
      </svg>
      <div className="space-y-1.5 text-sm">
        {segments.map(s => (
          <div key={s.l} className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm" style={{ background: s.c }} />
            <span className="text-gov-navy">{s.l}</span>
            <span className="text-muted-foreground ml-auto">{s.v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
