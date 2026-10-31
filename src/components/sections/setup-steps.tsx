import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    title: "Set up your restaurant",
    body: "Create an account, add your outlets and build your menu once.",
  },
  {
    title: "Activate your devices",
    body: "Connect each counter, kiosk and screen to its outlet with an activation code.",
  },
  {
    title: "Start billing",
    body: "Take orders and print bills. Sales appear in Imli CMP as they sync.",
  },
];

export function SetupSteps() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="text-center">
          <h2 className="headline text-[40px] sm:text-[56px]">
            Three steps to your <span className="accent text-brand">first bill.</span>
          </h2>
        </Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-6 hidden border-t border-dashed border-brand/40 md:block" />
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative text-center">
              <Reveal delay={index * 0.1}>
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand font-display text-lg font-semibold text-white shadow-[0_0_0_8px_var(--color-surface)]">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mx-auto mt-1.5 max-w-[300px] text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
