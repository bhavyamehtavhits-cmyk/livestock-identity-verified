import { createFileRoute, Link } from "@tanstack/react-router";
import { GovUtilityBar, GovHeader, GovFooter } from "@/components/gov/Layout";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "NDDB NDLM · Bovine Biometric Identification System" },
      { name: "description", content: "AI-powered tamper-proof bovine biometric identification platform under the National Digital Livestock Mission, operated by NDDB." },
    ],
  }),
});

const stats = [
  { label: "Total Animals Verified", value: "2,48,57,932", delta: "+12,480 today", tone: "text-gov-blue" },
  { label: "Active FLWs", value: "1,42,308", delta: "+318 this week", tone: "text-india-green" },
  { label: "Daily Verification Requests", value: "84,217", delta: "Live throughput", tone: "text-info" },
  { label: "Verification Accuracy", value: "98.4%", delta: "Muzzle + Face fusion", tone: "text-success" },
];

const modules = [
  { title: "Animal Enrollment", desc: "Register bovines with biometric capture and demographic metadata.", to: "/enrollment", icon: "🐄" },
  { title: "Face Verification", desc: "AI-based facial recognition for cattle and buffalo identity matching.", to: "/verification", icon: "👁️" },
  { title: "Muzzle Recognition", desc: "Unique muzzle pattern matching using deep convolutional models.", to: "/verification", icon: "🔍" },
  { title: "Verification Requests", desc: "Inbound API and FLW initiated verification queue management.", to: "/admin", icon: "📨" },
  { title: "Pilot Monitoring", desc: "District-wise progress, accuracy and adoption analytics dashboards.", to: "/monitoring", icon: "📊" },
  { title: "API Services", desc: "Secure REST APIs for state portals and Bharat Pashudhan integration.", to: "/admin", icon: "🔌" },
  { title: "Audit Logs", desc: "Tamper-evident logging of all verification and enrollment events.", to: "/admin", icon: "📋" },
];

const workflow = [
  { step: "1", label: "Capture", desc: "FLW captures muzzle/face via mobile" },
  { step: "2", label: "Upload", desc: "Encrypted upload to NDLM gateway" },
  { step: "3", label: "AI Verification", desc: "Biometric model match" },
  { step: "4", label: "Match Result", desc: "Verified / Mismatch / Re-capture" },
];

const pilotRows = [
  { id: "NDLM-GJ-45882", region: "Anand Dairy Cluster", flw: "Rakesh Patel", type: "Muzzle", score: "98.7%", status: "Verified" },
  { id: "NDLM-GJ-45883", region: "Mehsana", flw: "Suresh Vyas", type: "Face", score: "94.2%", status: "Verified" },
  { id: "NDLM-RJ-21044", region: "Jaipur Rural", flw: "Anita Sharma", type: "Muzzle", score: "76.1%", status: "Review" },
  { id: "NDLM-MH-88210", region: "Kolhapur", flw: "Prakash Jadhav", type: "Fusion", score: "99.1%", status: "Verified" },
  { id: "NDLM-UP-11203", region: "Meerut", flw: "Ramesh Yadav", type: "Face", score: "62.4%", status: "Mismatch" },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GovUtilityBar />
      <GovHeader />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gov-navy via-gov-blue to-gov-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative mx-auto max-w-7xl px-4 py-16 grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-india-green" /> Live · National Pilot Phase II
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                AI-Powered Bovine Biometric Identification System
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 max-w-2xl">
                Tamper-proof identification of cattle and buffalo through smartphone-based muzzle and facial biometrics —
                strengthening traceability, insurance, vaccination and livestock welfare across India.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/verification" className="inline-flex items-center rounded-md bg-white text-gov-navy px-5 py-2.5 text-sm font-semibold hover:bg-white/90">
                  Open Verification Console
                </Link>
                <Link to="/enrollment" className="inline-flex items-center rounded-md bg-white/10 ring-1 ring-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/20">
                  Enroll an Animal
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/70">
                <span>✓ STQC Audited</span>
                <span>✓ MeitY Empanelled Cloud</span>
                <span>✓ DPDP Act 2023 Compliant</span>
                <span>✓ Bharat Pashudhan Integrated</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-lg bg-white/10 ring-1 ring-white/20 p-5 backdrop-blur">
                <div className="text-xs uppercase tracking-wider text-white/70 mb-3">Live Verification Snapshot</div>
                <div className="rounded-md bg-gov-navy/60 p-4 font-mono text-xs space-y-1.5">
                  <div><span className="text-white/50">animal_id</span> : <span className="text-saffron">NDLM-GJ-45882</span></div>
                  <div><span className="text-white/50">pilot</span>     : Anand Dairy Cluster</div>
                  <div><span className="text-white/50">modality</span>  : muzzle + face fusion</div>
                  <div><span className="text-white/50">match</span>     : <span className="text-india-green">98.4%</span></div>
                  <div><span className="text-white/50">flw</span>       : Rakesh Patel</div>
                  <div><span className="text-white/50">status</span>    : <span className="text-india-green">VERIFIED ✓</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mx-auto max-w-7xl px-4 -mt-8 relative z-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
                <div className={`mt-2 text-2xl font-bold ${s.tone}`}>{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.delta}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="mx-auto max-w-7xl px-4 py-12">
          <SectionTitle eyebrow="Platform Modules" title="Functional Modules" subtitle="Role-based access for FLWs, district officers, state administrators and integration partners." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <Link key={m.title} to={m.to} className="group rounded-lg border border-border bg-card p-5 hover:border-gov-blue hover:shadow-md transition">
                <div className="text-2xl">{m.icon}</div>
                <div className="mt-3 font-semibold text-gov-navy">{m.title}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.desc}</div>
                <div className="mt-3 text-xs font-medium text-gov-blue group-hover:underline">Open module →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="bg-gov-blue-soft border-y border-border">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <SectionTitle eyebrow="How it works" title="Verification Workflow" subtitle="End-to-end traceable workflow from field capture to authoritative match result." />
            <div className="grid gap-4 md:grid-cols-4">
              {workflow.map((w, i) => (
                <div key={w.step} className="relative rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gov-blue text-white flex items-center justify-center font-bold">{w.step}</div>
                    <div className="font-semibold text-gov-navy">{w.label}</div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{w.desc}</div>
                  {i < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 text-gov-blue text-xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot Monitoring */}
        <section className="mx-auto max-w-7xl px-4 py-12">
          <SectionTitle eyebrow="Operations" title="Pilot Monitoring" subtitle="District-wise verification throughput and recent activity across active pilot regions." />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5 lg:col-span-1">
              <div className="font-semibold text-gov-navy mb-4">Daily Verifications · Last 7 Days</div>
              <BarChart data={[62, 71, 68, 84, 79, 92, 84]} labels={["M","T","W","T","F","S","S"]} />
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <Stat label="Peak" value="92,104" />
                <Stat label="Avg" value="77,238" />
                <Stat label="Mismatch" value="1.6%" />
                <Stat label="Re-capture" value="3.2%" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card overflow-hidden lg:col-span-2">
              <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                <div className="font-semibold text-gov-navy">Recent Verifications</div>
                <Link to="/monitoring" className="text-xs text-gov-blue hover:underline">View all →</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted text-muted-foreground text-xs uppercase tracking-wider">
                    <tr>
                      <th className="text-left px-4 py-2">Animal ID</th>
                      <th className="text-left px-4 py-2">Region</th>
                      <th className="text-left px-4 py-2">FLW</th>
                      <th className="text-left px-4 py-2">Modality</th>
                      <th className="text-right px-4 py-2">Score</th>
                      <th className="text-left px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pilotRows.map((r) => (
                      <tr key={r.id} className="border-t border-border hover:bg-muted/50">
                        <td className="px-4 py-2 font-mono text-xs">{r.id}</td>
                        <td className="px-4 py-2">{r.region}</td>
                        <td className="px-4 py-2">{r.flw}</td>
                        <td className="px-4 py-2">{r.type}</td>
                        <td className="px-4 py-2 text-right font-medium">{r.score}</td>
                        <td className="px-4 py-2"><StatusBadge status={r.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="bg-gov-blue-soft border-y border-border">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <SectionTitle eyebrow="Interoperability" title="National Integrations" subtitle="Standards-based integration with national livestock and identity systems." />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { t: "NDLM Core", d: "Master livestock registry, animal lifecycle records and policy compliance." },
                { t: "Bharat Pashudhan", d: "Bidirectional sync with national animal database for traceability." },
                { t: "Verification APIs", d: "Secure mTLS REST APIs for state portals, insurers and breeders." },
              ].map((i) => (
                <div key={i.t} className="rounded-lg border border-border bg-card p-5">
                  <div className="h-10 w-10 rounded-md bg-gov-blue text-white flex items-center justify-center font-bold">{i.t[0]}</div>
                  <div className="mt-3 font-semibold text-gov-navy">{i.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{i.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GovFooter />
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="text-xs uppercase tracking-wider text-gov-blue font-semibold">{eyebrow}</div>
      <h3 className="text-2xl font-bold text-gov-navy mt-1">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-muted p-2">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="font-semibold text-gov-navy">{value}</div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Verified: "bg-success/15 text-success ring-success/30",
    Review: "bg-warning/20 text-warning ring-warning/30",
    Mismatch: "bg-destructive/15 text-destructive ring-destructive/30",
    Pending: "bg-muted text-muted-foreground ring-border",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${map[status] ?? map.Pending}`}>
      {status}
    </span>
  );
}

function BarChart({ data, labels }: { data: number[]; labels: string[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-2 h-32">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full bg-gov-blue/80 rounded-t" style={{ height: `${(v / max) * 100}%` }} />
          <div className="text-[10px] text-muted-foreground">{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}
