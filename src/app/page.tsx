import Link from "next/link";

export default function Home() {
  const highlights = [
    {
      title: "Cognitive Workflows",
      description:
        "Chain large language models with deterministic logic so bots can read, reason, and take action across your stack.",
    },
    {
      title: "Continuous Optimization",
      description:
        "Automate monitoring with guardrails, drift detection, and human-in-the-loop cues to keep quality and compliance on track.",
    },
    {
      title: "Connected Systems",
      description:
        "Integrate APIs, RPA, and internal tools so AI agents collaborate with people instead of creating shadow automation islands.",
    },
  ];

  const workflow = [
    {
      step: "Discover",
      detail:
        "Audit processes for repetitive decision points, knowledge bottlenecks, and measurable outcomes to automate.",
    },
    {
      step: "Design",
      detail:
        "Model the workflow as a blueprint: triggers, context gathering, reasoning policies, escalation paths, and success metrics.",
    },
    {
      step: "Orchestrate",
      detail:
        "Combine LLM prompts, vector search, deterministic code, and integration adapters inside a governed automation runtime.",
    },
    {
      step: "Deliver",
      detail:
        "Release in stages, collect feedback loops, and plug automation analytics into your operational dashboards.",
    },
  ];

  const metrics = [
    { label: "Cycle-time reduction", value: "30–70%" },
    { label: "Manual handoffs eliminated", value: "up to 80%" },
    { label: "Quality gain with guardrails", value: "20% fewer errors" },
    { label: "ROI realization", value: "3–6 months" },
  ];

  const useCases = [
    {
      name: "Customer operations",
      description:
        "AI agents triage tickets, summarize history, recommend actions, and trigger workflows in CRM or ticketing tools.",
    },
    {
      name: "Revenue operations",
      description:
        "Automated lead enrichment, contract review, forecasting insights, and personalized outreach sequences.",
    },
    {
      name: "IT service management",
      description:
        "Bots classify incidents, run diagnostics, and resolve common issues by invoking scripts, knowledge articles, and approvals.",
    },
    {
      name: "Back-office automation",
      description:
        "Document processing, compliance checks, procurement routing, and financial reconciliations grounded in policy.",
    },
  ];

  const faqs = [
    {
      question: "How is AI automation different from traditional RPA?",
      answer:
        "RPA excels at deterministic tasks. AI automation adds language understanding, probabilistic reasoning, and adaptive decision-making so the system can handle edge cases and unstructured data.",
    },
    {
      question: "Which models should I start with?",
      answer:
        "Blend foundation models (OpenAI, Anthropic, Gemini) with domain-tuned smaller models. Select based on latency, cost, and data-sensitivity requirements.",
    },
    {
      question: "How do we keep humans in control?",
      answer:
        "Define escalation paths, confidence thresholds, and review checkpoints. Expose audit trails so operators can inspect every automated action.",
    },
    {
      question: "What about security and governance?",
      answer:
        "Segment data access, sanitize prompts, and log reasoning steps. Pair automation with zero-trust policies and regular red-teaming.",
    },
  ];

  const resources = [
    {
      title: "Automation Roadmap Canvas",
      href: "#download",
      description:
        "A self-guided template to prioritize processes, assign owners, and capture KPIs for AI-powered automation initiatives.",
    },
    {
      title: "Prompt Engineering Checklist",
      href: "#download",
      description:
        "A practical guide to craft high-signal prompts, apply guardrails, and validate model outputs against business intent.",
    },
    {
      title: "Responsible AI Controls",
      href: "#download",
      description:
        "Policy examples covering data privacy, bias mitigation, monitoring, and incident response for automation programs.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937,_transparent_65%)]" />
      <header className="relative z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-lg font-semibold tracking-tight text-white">
            Agentic Automation Briefing
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#overview" className="hover:text-white">
              Overview
            </a>
            <a href="#workflow" className="hover:text-white">
              Operating Model
            </a>
            <a href="#use-cases" className="hover:text-white">
              Use Cases
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>
          <Link
            href="#download"
            className="rounded-full border border-white/50 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-950"
          >
            Download toolkit
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-24 text-slate-100">
        <section className="grid gap-12 lg:grid-cols-[3fr_2fr]" id="overview">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
              Strategic memo
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              AI automation turns knowledge work into orchestrated, measurable
              workflows that run at machine speed.
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              Intelligent automation combines large language models, decision
              engines, and integration layers so teams can standardize complex
              processes without sacrificing judgment. The result: faster cycle
              times, higher quality, and more engaged experts who focus on
              designing outcomes instead of executing repetitive tasks.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-blue-500/10"
                >
                  <div className="text-2xl font-semibold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900/30 p-8 shadow-2xl shadow-blue-500/20">
            <h2 className="text-lg font-semibold text-white">
              The automation stack
            </h2>
            <p className="text-sm text-slate-300">
              A holistic program blends three layers. Ignore any piece and the
              system becomes brittle:
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <span className="font-medium text-white">Experience:</span> AI
                copilots, chat surfaces, and embedded actions guide users,
                collect context, and trigger automations.
              </li>
              <li>
                <span className="font-medium text-white">Intelligence:</span> LLM
                reasoning, retrieval, structured memory, evaluation harnesses,
                and feedback loops enable adaptive decision-making.
              </li>
              <li>
                <span className="font-medium text-white">Execution:</span>{" "}
                Connectors, API orchestrations, RPA, and governance layers
                execute steps reliably across systems with monitoring and audit
                trails.
              </li>
            </ul>
            <Link
              href="#workflow"
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200"
            >
              Explore the operating model →
            </Link>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section
          id="workflow"
          className="grid gap-12 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900/20 p-10 lg:grid-cols-[1.3fr_1fr]"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Operating model for AI automation
            </h2>
            <p className="text-base text-slate-300">
              Treat automation like a product. Assign product owners, engineers,
              model specialists, and change leaders. Pair delivery sprints with
              guardrail reviews so you scale responsibly.
            </p>
            <ol className="space-y-6">
              {workflow.map((stage, index) => (
                <li key={stage.step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {stage.step}
                    </h3>
                    <p className="text-sm text-slate-300">{stage.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-white">
                Governance checkpoints
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>- Data classification & policy review</li>
                <li>- Prompt and agent evaluation matrix</li>
                <li>- Human override paths with SLAs</li>
                <li>- Observability dashboards & alerts</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-white">
                Roles to staff
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>- Automation product manager</li>
                <li>- Applied ML / prompt engineer</li>
                <li>- Platform engineer / RPA specialist</li>
                <li>- Change management lead</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="use-cases"
          className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                High-leverage use cases
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate-300">
                Start where structured data, documented policies, and measurable
                KPIs already exist. Combine automation with humans-in-the-loop
                for faster adoption.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.name}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-sky-500/10"
              >
                <h3 className="text-xl font-semibold text-white">
                  {useCase.name}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-900/20 p-10 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Frequently asked questions
            </h2>
            <p className="text-base text-slate-300">
              Equip stakeholders with concise answers so they understand how AI
              automation will impact delivery, security, and teams.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="download"
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/80 p-10 text-center"
        >
          <h2 className="text-3xl font-semibold text-white">
            Jump-start your automation roadmap
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Grab the toolkit packed with templates, prompts, and governance
            checklists. It helps cross-functional teams align on scope, define
            success metrics, and launch AI-powered automations that stick.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://ai-automation-playbook.example.com"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Download the toolkit
            </Link>
            <Link
              href="https://newsletter.example.com/automation"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Subscribe for updates
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:justify-center">
            <span>Includes ROI calculator, prompt checklist, and rollout plan</span>
            <span>Weekly drop with new automation playbooks</span>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-10">
          <h2 className="text-2xl font-semibold text-white">Program compass</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-sky-300 hover:text-sky-200"
                >
                  Get the resource →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 py-8 text-center text-xs text-slate-500">
        Built for leaders ready to orchestrate AI-powered automation programs.
      </footer>
    </div>
  );
}
