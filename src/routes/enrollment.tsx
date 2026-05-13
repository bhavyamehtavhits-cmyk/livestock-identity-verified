import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gov/Layout";

export const Route = createFileRoute("/enrollment")({
  component: Enrollment,
  head: () => ({ meta: [{ title: "Animal Enrollment · NDLM" }] }),
});

function Enrollment() {
  return (
    <PageShell title="Animal Enrollment" subtitle="Register a new bovine into the National Digital Livestock Mission registry.">
      <div className="grid gap-6 lg:grid-cols-3">
        <form className="lg:col-span-2 rounded-lg border border-border bg-card p-6 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Animal ID (auto)" value="NDLM-GJ-45882" readOnly />
            <Field label="Tag Number" placeholder="e.g. 27-AND-00482" />
            <Select label="Species" options={["Cattle (Cow)", "Buffalo", "Bullock"]} />
            <Select label="Breed" options={["Gir", "Sahiwal", "Murrah", "Jaffrabadi", "Holstein Friesian"]} />
            <Field label="Date of Birth" type="date" />
            <Select label="Sex" options={["Female", "Male"]} />
            <Field label="Owner Name" placeholder="Owner full name" />
            <Field label="Owner Aadhaar (masked)" placeholder="XXXX-XXXX-1234" />
            <Select label="State" options={["Gujarat", "Rajasthan", "Maharashtra", "Uttar Pradesh"]} />
            <Select label="District / Pilot" options={["Anand Dairy Cluster", "Mehsana", "Kolhapur", "Meerut"]} />
          </div>

          <div>
            <div className="text-sm font-semibold text-gov-navy mb-2">Biometric Capture</div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Muzzle Image", "Face Image", "Side Profile"].map((t) => (
                <div key={t} className="rounded-md border-2 border-dashed border-border p-4 text-center">
                  <div className="text-3xl">📷</div>
                  <div className="text-sm font-medium text-gov-navy mt-2">{t}</div>
                  <div className="text-[11px] text-muted-foreground">Tap to capture / upload</div>
                  <button type="button" className="mt-3 text-xs px-3 py-1 rounded bg-gov-blue text-white">Capture</button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-border pt-4">
            <button type="button" className="px-4 py-2 text-sm rounded-md border border-border">Save Draft</button>
            <button type="submit" className="px-4 py-2 text-sm rounded-md bg-gov-blue text-white font-medium">Submit Enrollment</button>
          </div>
        </form>

        <aside className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="font-semibold text-gov-navy">Enrollment Checklist</div>
            <ul className="mt-3 space-y-2 text-sm">
              {["Owner identity verified", "Animal demographics", "Muzzle image (clear)", "Face image", "GPS location captured", "FLW signature"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-sm bg-success/20 text-success grid place-items-center text-[10px]">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-gov-blue-soft p-5 text-sm">
            <div className="font-semibold text-gov-navy mb-1">Pilot Region</div>
            <div className="text-muted-foreground">Anand Dairy Cluster, Gujarat</div>
            <div className="mt-3 text-xs text-muted-foreground">FLW: <strong className="text-gov-navy">Rakesh Patel</strong> (FLW-GJ-2204)</div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-gov-navy">{label}</span>
      <input {...rest} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-gov-navy">{label}</span>
      <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
