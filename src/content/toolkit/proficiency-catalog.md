---
title: "Proficiency Catalog"
description: "A comprehensive catalog of all proficiencies across all zones of the AI Competency Evaluation (ACE) model."
type: "catalog"
audience: "facilitator"
section: "reference"
order: 8
---
A comprehensive catalog of all proficiencies across all zones of the AI Competency Evaluation (ACE) model. Proficiencies are specific, observable behaviors practiced habitually -- not occasionally or only when convenient. Competency at each zone is demonstrated when these behaviors persist under pressure.

This catalog synthesizes proficiencies from the individual zone reference documents. For full context on any zone, see:
- [Zone 1: Augmenting](/toolkit/zone-1-augmenting)
- [Zone 2: Integrating](/toolkit/zone-2-integrating)
- [Zone 3: Accelerating](/toolkit/zone-3-accelerating)
- [Zone 4: Industrializing](/toolkit/zone-4-industrializing)

---

## Zone 1: Augmenting Proficiencies

Zone 1 represents individual AI tool adoption. The shift is from "AI is new, unfamiliar, or threatening" to "AI tools are a normal part of how I work every day." Proficiencies are assessed by whether the behaviors persist under deadline pressure and in unfamiliar codebases. See [Zone 1: Augmenting](/toolkit/zone-1-augmenting) for full context.

### Engineering

- **Uses AI coding assistants for code completion and generation daily.** Inline AI completion (GitHub Copilot, Cursor, Windsurf, or equivalent) is active and used as a routine part of writing code, not reserved for special occasions or simple tasks.
- **Uses AI to explain unfamiliar code and debug issues.** When encountering unfamiliar code, error messages, or unexpected behavior, the developer's workflow includes querying an AI assistant as a standard diagnostic step alongside reading documentation and searching the web.
- **Selects the appropriate mode of AI engagement for the task at hand.** The developer distinguishes between vibe-coding (exploratory, low-stakes, AI-driven generation for prototypes and experiments), CHOP -- Chat-Oriented Programming (interactive, chat-based AI collaboration for coding tasks), and AI-assisted coding (rigorous, human-reviewed AI-augmented development for production code). The developer matches the mode to the stakes and context of the work.
- **Reviews and understands AI-generated code before accepting it.** AI output is treated as a draft from a capable but fallible collaborator. The developer reads, comprehends, and validates generated code rather than accepting it blindly. This includes verifying correctness, checking for security issues, and ensuring alignment with project conventions. This also includes awareness that AI-generated code may reflect biases present in training data -- for example, generating stereotyped sample data, defaulting to culturally specific assumptions, or reproducing biased patterns from the codebases it was trained on.
- **Uses AI to write and improve tests and documentation.** Test generation, test case ideation, docstring writing, and README updates are tasks where AI routinely assists, reducing the friction that often causes these activities to be skipped.

### Product Management

- **Uses AI for user story writing, research synthesis, and stakeholder communications.** AI assists with drafting user stories, summarizing research findings, preparing stakeholder updates, and structuring product documents. The product manager refines and validates AI output against their domain knowledge.
- **Uses AI tools for meeting notes and summaries.** Meeting recordings or notes are processed through AI to produce structured summaries, action items, and decisions, reducing the overhead of documentation and improving team alignment.
- **Prompts effectively for PM-relevant tasks.** The product manager can construct prompts that provide sufficient context, constraints, and intent to get useful output from AI tools for product work, rather than receiving generic or unhelpful responses.
- **Uses AI to accelerate product discovery work.** AI assists with synthesizing customer interview data, analyzing competitive positioning, generating and pressure-testing product hypotheses, and structuring prioritization frameworks. The PM uses AI to do better product thinking, not just faster artifact production.
- **Uses AI to analyze quantitative product data and extract actionable insights.** AI assists with interpreting usage analytics, identifying patterns in customer feedback, modeling scenario outcomes, and summarizing market research. The PM treats AI as an analytical partner for the strategic dimensions of product work, not just the documentation dimensions. This includes awareness that AI-generated analysis may reflect biases in training data -- for example, overweighting well-documented market segments, reproducing demographic assumptions, or generating recommendations that reflect the patterns of larger organizations rather than the PM's specific context.

### Design and Architecture

- **Uses AI for ideation, content generation, and design exploration.** AI tools assist with generating design alternatives, creating placeholder content, exploring layout options, and producing copy variations. The designer treats AI as a brainstorming partner that accelerates the exploration phase.
- **Incorporates AI-powered tools into the design workflow.** AI capabilities within design tools (image generation, layout suggestions, content-aware features) are part of the designer's standard toolkit rather than novelties used occasionally.
- **Uses AI to synthesize user research and analyze usability data.** AI assists with identifying patterns in user research transcripts, summarizing usability test findings, flagging accessibility issues in existing designs, and generating insights from qualitative data. The designer uses AI to deepen understanding of user needs, not just to produce artifacts faster.
- **Uses AI to explore and evaluate information architecture and interaction design alternatives.** AI assists with generating navigation structures, evaluating content organization patterns, analyzing competitor UX approaches, and identifying potential usability issues in proposed designs. The designer treats AI as a design thinking partner for the analytical dimensions of design work. This includes awareness that AI-generated design suggestions may embed cultural assumptions, accessibility blind spots, or aesthetic biases from training data.

### Quality Assurance

- **Uses AI to assist with test case generation and test strategy design.** AI tools help generate test cases from requirements, suggest edge cases, and assist with structuring test plans. The QA engineer refines and validates AI-generated test artifacts against their domain knowledge.
- **Uses AI for bug triage, reproduction, and root cause analysis.** When investigating defects, the QA engineer queries AI to help analyze logs, suggest reproduction steps, identify likely root causes, and cross-reference similar issues -- as a standard diagnostic step alongside traditional investigation techniques.
- **Uses AI to create and manage test data.** AI assists with generating realistic test data sets, creating test fixtures, and producing data that covers boundary conditions and edge cases, reducing the manual effort that often makes thorough test data preparation impractical. This includes awareness that AI-generated test data may reflect demographic patterns in training data -- for example, overrepresenting certain user demographics or defaulting to culturally specific data patterns that do not reflect the application's actual user base.

### A Note on Data Science and ML Practitioners

Data science and ML practitioners on the team should participate in Zone 1 adoption alongside other roles. Their existing practices -- notebooks, data analysis, model experimentation -- naturally overlap with AI tool usage. ACE does not define a separate data science proficiency track because data science is a specialization rather than a universal team role in software production. Where data science practitioners are present, they should be included in training, assessed alongside the team, and their AI tool adoption measured by the same habitual-use standard applied to all other roles.

---

## Zone 2: Integrating Proficiencies

Zone 2 shifts from individual tool use to team-level integration. AI is embedded in team-level workflows: code review, testing, documentation, and CI/CD. Usage is systematic, not ad-hoc. The team has a shared, evolving agentic setup committed to source control. This is a workflow integration shift. See [Zone 2: Integrating](/toolkit/zone-2-integrating) for full context.

### Engineering

- **The team executes Plan/Code/Verify as the default workflow for all changes.** The three-phase agentic coding workflow -- Plan (context gathering, plan construction, plan externalization), Code (plan-guided iteration with agent, incremental progress, maintaining coherence), Verify (correctness, quality, safety) -- is the habitual approach for every change, not just when it is convenient or when the change is complex.
- **Engineers maintain and evolve a shared AGENTS.md/CLAUDE.md with project context.** The team's AI configuration is committed to source control as the team's "AI constitution." It contains project-specific context, coding standards, architectural constraints, workflow instructions, and ethical constraints (e.g., data handling rules, prohibited patterns, domain-specific compliance requirements). All members contribute to its evolution.
- **The team enforces automated quality checks on all AI-generated code.** Pre-commit hooks or equivalent gates ensure that AI-generated code passes compiler checks, linter rules, and formatting standards automatically. These are surface-level quality gates -- necessary but not sufficient.
- **The team maintains automated test coverage sufficient to catch behavioral regressions in AI-generated code.** Beyond formatting and compilation gates, the team has behavioral tests that verify AI-generated code actually does what it is supposed to do. This is the deeper quality gate: a passing compiler check does not mean the code is correct.
- **Engineers can guide agents through multi-step implementations using externalized plans.** Plans, architecture decision records (ADRs), task breakdowns, and design documents are written to markdown files checked into the repository. These serve as both human documentation and agent context.
- **The team practices context engineering.** Engineers deliberately curate what goes into the agent's context window. This is distinct from prompt engineering: it involves managing project-level configuration, session-level context, and strategic use of techniques like `/compact`, summarization, and fresh sessions.
- **Code review includes reviewing agent-produced code at PR level or better.** The team does not treat AI-generated code as inherently trustworthy or inherently suspect. It is reviewed with the same rigor as human-written code, with attention to the kinds of errors agents characteristically make.
- **Engineers use fresh agent sessions for PR review to get unbiased assessment.** When using AI for code review, the team starts fresh sessions that have no prior context about the implementation decisions, ensuring the review is independent.
- **The team iterates on its agentic setup in retrospectives.** The shared AI configuration, workflow practices, and tool choices are regular subjects of retrospective discussion. The team treats its agentic setup as a living system that requires continuous improvement.

### Product Management

#### Delivery

- **PMs define product requirements that include AI behavioral criteria and verification expectations.** Beyond traditional functional acceptance criteria, PMs specify how AI-augmented workflows should behave -- what verification steps are required, what documentation should be generated, what quality gates apply, and what AI-specific acceptance criteria must be met (e.g., "AI-generated code must pass the team's behavioral test suite before PR review begins"). PMs own these specifications as part of their standard requirements work, not as an afterthought added by engineering.
- **PMs own the team's definition of done for AI-augmented delivery.** The team's definition of done explicitly includes AI-related quality gates -- automated feedback loops, behavioral test coverage, code review standards for AI-generated output -- and PMs define and maintain these requirements as part of product specification. (Behavioral anchor: the PM can explain the team's AI-specific quality gates and why each one exists, without deferring to engineering.)
- **PMs contribute to retrospectives about agentic workflow improvements.** Product managers actively participate in discussions about how the team's AI practices affect product quality, delivery predictability, and specification clarity -- bringing the product perspective to workflow improvement rather than observing from the sidelines.

#### Discovery

- **PMs use AI-augmented discovery as a shared team practice, not just a personal productivity tool.** The PM leads structured discovery activities -- customer interview synthesis, competitive signal detection, opportunity sizing, assumption testing -- using AI as a team-visible analytical partner. Discovery insights are externalized (documented in the repository alongside engineering plans), not held in the PM's head. The team can see what the PM is learning and how it informs product decisions. (Behavioral anchor: discovery artifacts -- competitive landscape summaries, customer feedback pattern analyses, prioritization rationale documents -- are checked into the repository and referenced in sprint planning.)
- **PMs use AI to maintain a continuously updated understanding of customer needs, competitive dynamics, and market context that informs the team's prioritization decisions.** Rather than conducting periodic research sprints, the PM uses AI to maintain living analyses -- competitive landscape summaries, customer feedback pattern maps, market signal dashboards -- that are current enough to inform real-time prioritization. This is the PM equivalent of engineering's shared AI configuration: a shared, evolving body of product intelligence that the team draws on. (Behavioral anchor: the PM can show you a living analysis document, explain when it was last updated, and point to a recent prioritization decision it informed.)

### Design and Architecture

- **Designers lead AI-augmented design exploration as a systematic practice.** AI tools are part of the design workflow for generating alternatives, documenting design decisions, exploring trade-offs, and evaluating design options against usability criteria -- used as a regular practice, not an occasional experiment. Designers own the design exploration process and use AI to deepen it, not just to accelerate artifact production.
- **Designers own the design standards within the team's shared AI configuration.** Design system rules, component specifications, accessibility requirements, and interaction patterns are encoded in the team's AGENTS.md/CLAUDE.md so that AI-generated code respects design standards by default. Designers define and maintain these standards as the authoritative source for design decisions within the shared configuration -- not as suggestions subject to engineering override. (Behavioral anchor: design-specific rules in AGENTS.md/CLAUDE.md are authored and updated by designers, and the git history shows designer commits to these sections.)
- **Designers use AI to maintain and evolve design system documentation and consistency.** AI assists with auditing design system usage across the codebase, identifying inconsistencies, generating component documentation, and flagging deviations from established patterns. Design system health is a team responsibility that designers lead.
- **Designers lead their own AI-augmented design practice and integrate design outputs into the team's shared workflow as a co-equal contributor.** When design work intersects with implementation (component libraries, design tokens, CSS architecture, prototyping), designers work within the team's Plan/Code/Verify workflow with the same ownership that engineers exercise over code. Designers bring design judgment to the shared workflow; they are co-owners of the process, not participants in an engineering-owned process.

### Quality Assurance

- **Adapts test strategies to account for characteristic AI-generated code patterns.** QA engineers understand the specific failure modes of AI-generated code -- subtle logic errors, security oversights, convention mismatches, hallucinated APIs -- and design test strategies that address these patterns systematically rather than relying on traditional test approaches alone.
- **Participates in the team's shared agentic workflow and retrospectives.** QA engineers are active contributors to the team's AI practices, participating in retrospectives about the agentic workflow's quality impact and helping evolve the shared configuration -- not downstream consumers of engineering decisions.
- **Uses AI tools systematically for test automation and regression analysis as part of the shared workflow.** AI assists with generating test scripts, analyzing regression results, identifying flaky tests, and maintaining test infrastructure -- integrated with the team's shared AI configuration rather than as isolated individual tool use.
- **Evaluates AI-generated test artifacts with the same rigor applied to AI-generated code.** When AI tools generate test scripts, test data, or test infrastructure, QA engineers review these artifacts for the same categories of AI-characteristic errors that affect production code -- hallucinated assertions, incomplete edge case coverage, tests that pass trivially without actually exercising the behavior under test.

---

## Zone 3: Accelerating Proficiencies

Zone 3 represents a role identity shift. AI drives core development work. Humans specify, review, and orchestrate; AI implements. The developer role fundamentally changes from writing code to designing the process by which code is produced. Not every organization will progress this far. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating) for full context.

### AI Engineering

The term "AI Engineer" describes the evolved role identity for software engineers operating at Zone 3. This is not merely a senior developer who uses AI tools -- it is a distinct role with its own competencies, focused on designing and operating the systems that produce software rather than producing the software directly.

- **Engineers define system specifications and verification criteria rather than writing implementation code.** The primary engineering artifact is the specification -- intent, constraints, acceptance criteria, behavioral expectations -- not the code itself. Implementation is delegated to AI pipelines, and the engineer's job is to ensure those pipelines produce correct results.
- **The team has a Continuous Alignment Testing (CAT) pipeline that runs automatically.** CAT is the AI analog of test-driven development. Just as CI/CD pipelines run automated tests against code changes, CAT pipelines verify that AI outputs remain consistent, accurate, and aligned with behavioral expectations. No AI-produced feature ships without passing its eval criteria.
- **Engineers can design and implement eval harnesses for their AI pipelines.** An eval harness defines what "correct" looks like for a given AI pipeline -- the test cases, the scoring rubrics, the acceptable thresholds. Engineers treat eval harness design as a core engineering competency, not an afterthought.
- **Engineers practice context engineering at the system level.** Context engineering -- deliberately deciding what information goes into AI context windows, how it is structured, and when it is refreshed -- is a design discipline distinct from prompt engineering. Engineers reason about context as a system-level concern: what the AI needs to know, what is retrieved, what is injected, and what is omitted.
- **Engineers instrument AI interactions with observability.** Traces of tool calls, inputs used, documents retrieved, intermediate outputs, timing, and costs are captured and accessible. Engineers can diagnose pipeline behavior by examining these traces, not by guessing. Drift monitoring alerts the team when outputs begin to shift.
- **Engineers treat every AI failure as a pipeline design signal, not a one-off fix.** When AI produces incorrect output, the response is not to manually fix the output. The response is to diagnose the failure at the correct layer and improve the pipeline to prevent recurrence.
- **Engineers can diagnose failure modes at the correct layer.** A taxonomy of failure modes (context missing, retrieval error, hallucination, task underspecification, constraint violation, eval gap) is understood and applied. Engineers do not conflate different failure types or apply single-layer fixes to multi-layer problems.
- **The team versions and iterates on prompts like code.** Prompts are stored in version control, reviewed in pull requests, tested against eval suites, and deployed through pipelines. Prompt changes are treated with the same rigor as code changes because they have equivalent impact on system behavior.
- **Engineers implement "separate generation from decisioning" patterns.** This four-level framework structures how AI capabilities are designed and governed:
  - Level 1 -- Conditioning: Steering generation through intent specification, context engineering, and constraint design.
  - Level 2 -- Authority: Keeping ownership without full authorship through verification design, chain of custody, and permission structures.
  - Level 3 -- Workflows: Turning raw AI intelligence into scaled production through pipeline decomposition, failure mode diagnosis, and observability.
  - Level 4 -- Evals: Building eval harnesses and feedback loops so the system self-corrects.

### Product Management (AI-Native Product Manager)

The Zone 3 PM identity has two dimensions: **product discovery leader** -- using AI to maintain continuous, evidence-based understanding of what is valuable and viable -- and **behavioral specifier** -- defining the production pipeline's behavioral envelope based on that discovery. The PM at Zone 3 is not merely a specification writer for the engineering pipeline; they are the person who decides what the pipeline should produce, grounded in evidence that AI makes possible to gather and maintain at a pace that was not previously achievable.

#### Delivery

- **PMs define user stories that include AI behavioral criteria and measurable acceptance criteria.** User stories specify not just what the feature does but how the AI should behave -- response quality thresholds, latency expectations, edge case handling requirements, failure mode definitions, and acceptable variance bounds. Acceptance criteria are quantifiable and testable, not subjective. (Behavioral anchor: a recent user story includes specific numeric thresholds for AI behavior -- e.g., "response accuracy >= 92% on the eval suite" or "latency p95 < 800ms" -- not just qualitative descriptions.)
- **PMs own the product viability model for AI-driven features.** The PM understands and manages the cost structure of AI-driven features (API costs, latency, accuracy trade-offs, infrastructure overhead) and makes informed prioritization decisions based on these factors, not just feature desirability. The PM can quantify the ROI of AI-driven features against traditional alternatives. (Behavioral anchor: the PM maintains a cost-value model for AI-driven features and can explain the trade-off rationale for each active feature.)
- **PMs own stakeholder communication about AI system behavior, including non-determinism.** Non-determinism is a fundamental property of AI systems, not a bug to be fixed. The PM communicates this to stakeholders clearly, sets appropriate expectations for consistency and accuracy, and translates technical non-determinism into business-relevant language. (Behavioral anchor: stakeholders do not escalate AI output variance as bugs because the PM has set expectations proactively.)
- **PMs iterate on prompt-level and workflow-level improvements alongside engineering.** The PM understands that improving an AI feature may mean changing a prompt, adjusting retrieval, or restructuring a pipeline -- not just adding new product requirements. PMs participate in these iterations with product judgment about what improvement means from the user's perspective.
- **PMs define "thresholds of efficacy" -- the accuracy, reliability, and fairness the business can tolerate for each AI-driven use case.** Not every AI feature needs 99.9% accuracy. The PM defines the acceptable performance envelope for each use case and works with engineering to build eval criteria that reflect business reality. Efficacy thresholds include fairness and equity metrics alongside accuracy and reliability where the AI-driven feature affects users differentially -- for example, features that interact with user demographics, geographic contexts, or accessibility requirements. (Behavioral anchor: each AI-driven feature has a documented efficacy threshold with explicit fairness criteria where applicable.)
- **PMs treat prompts, memory, and data pipelines as part of the product surface.** These are not implementation details hidden from product thinking. They are product decisions that affect user experience, and the PM engages with them as product design choices -- reviewing prompt changes for user impact, evaluating memory strategies for user experience implications, and assessing data pipeline decisions for product quality effects.

#### Discovery

- **PMs own continuous product discovery at a pace and depth that AI makes possible for the first time.** The PM runs rapid validation cycles -- using AI to simulate customer reactions, stress-test product hypotheses against market data, model scenario outcomes, and identify viability risks -- at a cadence that would have been impossible without AI. Discovery is continuous, not periodic. The PM's product decisions are informed by an always-current model of customer needs, competitive position, and business viability. (Behavioral anchor: the PM can show living discovery artifacts -- the competitive landscape analysis, the customer need model, the viability risk register -- and explain when each was last updated and what decision it informed.)
- **PMs define what the AI production pipeline should produce based on discovered customer value, not just what engineering can build.** The PM's specifications to the pipeline are grounded in evidence from continuous discovery -- customer evidence, market evidence, viability evidence. The PM exercises the authority to push back on pipeline specifications that optimize for engineering capability without demonstrated customer value. This is the PM's authority in the production pipeline: the right to say "the factory should not produce this, because the discovery evidence does not support it." (Behavioral anchor: the PM can trace any current pipeline specification back to a discovery insight, and can identify specifications that exist because of engineering convenience rather than customer evidence.)

### Architecture

- **Architects design systems with "functional core / imperative shell" patterns that guide agents to success.** System architecture is structured so that AI agents operate within well-defined boundaries: pure functions, clear interfaces, typed contracts, and deterministic verification layers. The architecture makes it easy for AI to succeed and hard for AI to cause undetected damage.
- **Architects design for AI observability from day one.** Observability is not bolted on after the fact. Systems are designed with trace points, logging boundaries, and cost attribution built into the architecture so that AI pipeline behavior is visible and diagnosable from the start.

### Design (Design Strategy and Systems Architects)

The Zone 3 design identity has two dimensions: **experience discovery leader** -- using AI to maintain a continuously current understanding of user needs that informs what the factory should produce -- and **design systems architect** -- encoding the resulting standards as machine-verifiable inputs that govern factory output. Designers at Zone 3 operate at a higher level of abstraction in both dimensions: they lead experience discovery at the pace AI enables, and they encode the resulting standards as machine-verifiable inputs. The "design systems architect" identity without the strategy dimension reduces design to specification maintenance; the "experience discovery leader" identity without the systems dimension leaves discovery disconnected from production. Both are essential.

#### Delivery

- **Designers define AI behavioral expectations and evaluation criteria from the user experience perspective.** UX and product designers define what "good" AI behavior looks like from the user's perspective -- interaction quality, response appropriateness, accessibility compliance, and experience consistency. These behavioral expectations feed directly into eval harnesses and CAT pipelines, ensuring that quality is measured against user-relevant criteria, not just engineering-relevant criteria. (Behavioral anchor: eval harnesses include designer-defined UX criteria -- e.g., "error messages must be user-comprehensible, not technical stack traces" or "generated UI must meet WCAG 2.1 AA" -- and designers review eval results for the UX dimension.)
- **Designers encode design standards, component specifications, and interaction patterns as machine-verifiable inputs to AI pipelines.** Design tokens (colors, spacing, typography) are defined as structured data that AI pipelines reference; component specifications include machine-readable constraints (minimum touch targets, contrast ratios, required ARIA attributes); and interaction patterns are expressed as testable behavioral rules ("dropdown menus must close on outside click") rather than only as visual mockups. Design compliance is verified automatically through the production pipeline, not through manual review. The team starts with its most-used components and extends encoding incrementally.
- **Designers own the design evaluation criteria within the CAT pipeline.** Design compliance checks -- visual consistency, component usage, interaction pattern adherence, accessibility standards -- are defined and maintained by designers, not delegated to engineering. Designers operate as evaluation specialists for the design dimension of AI-produced output. (Behavioral anchor: when a CAT pipeline fails on a design criterion, the designer -- not an engineer -- triages and determines whether the spec needs updating or the output needs fixing.)

#### Discovery

- **Designers use AI to conduct user experience research and evaluation at a pace and depth that was not previously achievable.** AI enables rapid analysis of usage patterns, automated identification of usability issues across the product surface, sentiment analysis of user feedback at scale, and identification of experience opportunities across interaction data. The designer uses these capabilities to maintain a continuously current understanding of how users experience the product -- not as a one-time research project but as an ongoing intelligence function that informs what the factory produces. (Behavioral anchor: the designer can show the current usability landscape for the product -- known friction points, emerging usage patterns, accessibility gaps -- and explain when each finding was last validated and what design decision it informed.)
- **Designers own the definition of "good" for the production pipeline's user-facing output, grounded in ongoing user evidence.** Design standards encoded in the factory are not static specifications derived from historical design decisions. They are living standards that evolve based on continuous user evidence. The designer's authority in the production pipeline is not just "does it match the spec?" but "does the spec still serve users?" When user evidence indicates the spec is wrong, the designer has the authority and the evidence to change it. (Behavioral anchor: the designer can point to a recent example where user evidence led to a revision of factory design specifications, not just a new design artifact.)

### Quality Assurance (Evaluation Pipeline Specialists)

- **Designs eval harnesses and defines evaluation criteria for AI pipelines.** QA engineers bring their testing expertise to the systematic evaluation of AI-produced artifacts, defining what "correct" looks like across functional, security, accessibility, and performance dimensions. Eval harness design is a QA-owned competency that serves the entire production pipeline.
- **Owns and operates CAT pipelines (coverage, health, effectiveness).** QA engineers are responsible for the ongoing health of Continuous Alignment Testing infrastructure -- monitoring coverage gaps, maintaining test case quality, tracking eval effectiveness over time, and ensuring that CAT pipelines catch real regressions rather than producing false confidence.
- **Develops and maintains the failure mode taxonomy.** QA engineers maintain the structured taxonomy of AI failure modes (context missing, retrieval error, hallucination, task underspecification, constraint violation, eval gap) and lead systematic analysis of failures across the pipeline to identify patterns and prevention strategies.
- **Defines acceptance thresholds and quality gates for AI-produced artifacts.** QA engineers collaborate with PMs and engineering to set the quantitative quality standards that AI-produced artifacts must meet -- pass rates, tolerance ranges, coverage requirements, and escalation criteria -- and ensure these thresholds are enforced in the production pipeline.

---

## Zone 4: Industrializing Proficiencies

Zone 4 represents a production model shift. The organization operates an AI-first software factory. Engineers maintain the factory; AI produces the software. Zone 4 represents the deepest level of organizational commitment to AI-driven development. See [Zone 4: Industrializing](/toolkit/zone-4-industrializing) for full context.

### Engineering / Factory Operations

- **Engineers design and maintain the AI production pipeline as their primary job function.** The majority of engineering time is spent on the production system itself -- its architecture, its evaluation infrastructure, its operational health -- not on the application code the system produces. Writing application code by hand is the exception, reserved for situations where the factory cannot yet handle a particular class of problem.
- **The organization has systematic governance processes for AI system changes.** Changes to models, prompts, tool configurations, and pipeline components are treated with the same rigor as changes to production infrastructure. A prompt change that alters the behavior of the factory is not a minor tweak; it is a change to the production line.
- **Engineers can diagnose and repair factory-level failures.** When the AI production system produces incorrect, inconsistent, or low-quality output, engineers can trace the failure to its root cause in the production pipeline. This requires understanding the AI system as a system, not just the artifacts it produces.
- **The team operates evaluations at scale.** Automated regression testing, drift detection, and quality gates run continuously across all factory output. These are industrial-scale quality systems that evaluate every artifact against defined standards.
- **Engineers treat model updates, prompt changes, and tool changes as factory maintenance events.** When an AI model vendor releases an update, the organization has a defined process for evaluating the update's impact on factory output, testing it against existing specifications and quality standards, and rolling it out (or rolling it back) in a controlled manner.
- **The organization has defined SLAs for AI production reliability.** The factory has measurable reliability targets: what percentage of production runs succeed, what the acceptable defect rate is, what the maximum time-to-recovery is when the factory fails. These SLAs are monitored, reported on, and used to drive improvement.

### Product Management

#### Delivery

- **Product managers operate at the portfolio level, defining factory production targets.** Rather than specifying individual features for individual teams, product managers define what the factory should produce at a strategic level. This requires thinking in terms of production capacity, factory specifications, and portfolio-level prioritization rather than sprint-level user stories.
- **Product managers define system-level acceptance criteria for entire AI pipelines.** Acceptance criteria are defined for the factory's behavior, not just for individual features. "The factory should produce API endpoints that meet these performance, security, and documentation standards" is a different kind of specification than a single user story. (Behavioral anchor: acceptance criteria documents exist at the pipeline level, not just the feature level, and PMs own their maintenance.)
- **Product managers manage the tension between production volume and quality governance.** The factory can produce faster than the organization can govern. Product managers understand this tension and make informed trade-offs about where to prioritize speed versus where to prioritize additional governance and evaluation.

#### Discovery

- **Product managers own portfolio-level product strategy informed by AI-enhanced market intelligence.** PMs use AI to maintain continuously updated models of market dynamics, competitive positioning, and customer needs across the portfolio -- identifying cross-product opportunities, detecting emerging market signals, and evolving the factory's production priorities based on evidence rather than convention. The PM ensures the factory produces what the market demands, not just what the factory is capable of producing. (Behavioral anchor: the PM can describe the portfolio-level product strategy, explain what customer and market evidence informs it, and point to recent production priority changes driven by discovery insights rather than engineering convenience.)

### Design

#### Delivery

- **Owns the factory's design specification layer.** Designers own and maintain the factory's design inputs -- component libraries, interaction patterns, accessibility requirements, and visual standards -- encoded as machine-verifiable specifications that AI pipelines consume and validate against. This is the delivery dimension of the Zone 4 design role: governing the specification layer that ensures factory output meets design standards at portfolio scale.
- **Operates design compliance verification at portfolio scale.** Design compliance is verified automatically across all factory output, not through manual review of individual artifacts. Designers maintain the design evaluation criteria, monitor compliance rates across the portfolio, and evolve specifications as design standards change.

#### Discovery

- **Leads design strategy across the portfolio using AI-enhanced research at organizational scale.** Designers use AI to identify cross-product experience patterns, detect emerging user needs across the portfolio, and evolve the organization's design language based on evidence rather than convention. Factory design specifications are informed by continuous portfolio-level user intelligence, not just per-product design decisions. The designer ensures the factory's definition of "good" evolves with user needs, not just with engineering capability. (Behavioral anchor: the designer can describe the portfolio-level user experience strategy, explain what user evidence informs it, and point to recent specification changes driven by portfolio-level insights rather than individual product requests.)

### Quality Assurance (Factory Evaluation Operations)

- **Operates the factory's evaluation infrastructure as their primary function.** QA engineers at Zone 4 are evaluation infrastructure operators. Their primary work is designing, maintaining, monitoring, and improving the automated evaluation systems that verify all factory output. This is an operational role -- analogous to running a quality control program in a manufacturing facility -- not a testing role in the traditional sense.
- **Defines and maintains factory-level quality SLAs.** QA engineers collaborate with engineering and product leadership to set measurable quality targets for factory output: defect rates, evaluation coverage, false positive/negative rates for quality gates, and time-to-detection for quality regressions. These SLAs are monitored and reported on alongside engineering production SLAs.
- **Designs and executes the factory's drift detection program.** QA engineers own the systematic detection of quality drift across the factory's output -- identifying when output quality shifts due to model updates, specification changes, or pipeline modifications before degraded artifacts reach production. This requires statistical process control techniques applied to factory quality metrics.

### Architecture

- **Architects design for factory-scale observability and governance.** The architecture of the production system itself -- not just the applications it produces -- is a primary architectural concern. This includes observability infrastructure, governance checkpoints, and feedback loops that connect production outcomes back to factory specifications.
- **Architects define the "production system" architecture.** The AI production pipeline is a system in its own right, with its own architecture, its own scaling characteristics, its own failure modes, and its own evolution path. Architects at Zone 4 are responsible for this system architecture in addition to (or instead of) traditional application architecture.

---

## Cross-Zone Progression Tables

The following tables show how proficiencies evolve across zones for each role. Each row tracks a capability area; each column shows the expected behavior at that zone.

### Engineering Progression

| Capability Area | Zone 1: Augmenting | Zone 2: Integrating | Zone 3: Accelerating | Zone 4: Industrializing |
|---|---|---|---|---|
| **Primary work mode** | Uses AI coding assistants for code completion and generation daily | Executes Plan/Code/Verify as the default workflow for all changes | Defines system specifications and verification criteria rather than writing implementation code | Designs and maintains the AI production pipeline as primary job function |
| **AI configuration** | Personal, ad-hoc tool setup | Maintains and evolves a shared AGENTS.md/CLAUDE.md with project context | Versions and iterates on prompts like code; practices system-level context engineering | Treats model updates, prompt changes, and tool changes as factory maintenance events |
| **Quality assurance** | Reviews and understands AI-generated code before accepting it | Mandatory feedback loops: agents must pass compiler, linter, and tests before committing | Designs and implements eval harnesses; operates Continuous Alignment Testing (CAT) pipelines | Operates evaluations at industrial scale across all factory output |
| **Failure response** | Uses AI to explain unfamiliar code and debug issues | Code review includes reviewing agent-produced code at PR level or better | Treats every AI failure as a pipeline design signal; diagnoses failure modes at the correct layer | Diagnoses and repairs factory-level failures; traces root causes through the production pipeline |
| **Context management** | Selects appropriate mode of AI engagement (vibe-coding, CHOP, AI-assisted coding) | Practices context engineering at the session and project level | Practices context engineering at the system level (retrieval, injection, refresh strategies) | Designs factory-scale context and specification systems |
| **Testing practices** | Uses AI to write and improve tests and documentation | Guides agents through multi-step implementations using externalized plans | CAT pipeline runs automatically; no AI-produced feature ships without passing eval criteria | Automated regression testing, drift detection, and quality gates run continuously at scale |
| **Collaboration** | Individual tool use | Team iterates on agentic setup in retrospectives; uses fresh sessions for PR review | Implements "separate generation from decisioning" patterns; instruments AI interactions with observability | Organization has systematic governance processes for AI system changes; defined SLAs for production reliability |

### Product Management Progression

| Capability Area | Zone 1: Augmenting | Zone 2: Integrating | Zone 3: Accelerating | Zone 4: Industrializing |
|---|---|---|---|---|
| **Product specification (delivery)** | Uses AI for user story writing, research synthesis, and stakeholder communications | Defines product requirements that include AI behavioral criteria and verification expectations; owns the team's AI-specific definition of done | Defines user stories with AI behavioral criteria, measurable acceptance criteria, and efficacy thresholds including fairness metrics | Operates at the portfolio level, defining factory production targets and system-level acceptance criteria for entire AI pipelines |
| **Product discovery** | Uses AI to accelerate product discovery work -- synthesizing customer data, analyzing competitive positioning, pressure-testing hypotheses | Leads AI-augmented discovery as a shared team practice; maintains continuously updated understanding of customer needs and market context that informs team prioritization | Owns continuous product discovery at AI-native pace -- rapid validation cycles, scenario modeling, viability risk identification; defines what the pipeline should produce based on discovered customer value | Owns portfolio-level product strategy informed by AI-enhanced market intelligence; ensures factory produces what the market demands |
| **AI understanding** | Prompts effectively for PM-relevant tasks | Contributes to retrospectives about agentic workflow improvements | Owns stakeholder communication about AI non-determinism; iterates on prompt-level and workflow-level improvements alongside engineering | Manages the tension between production volume and quality governance |
| **Business value** | Uses AI to analyze quantitative product data and extract actionable insights | Externalizes discovery insights in the repository alongside engineering plans | Owns the product viability model for AI-driven features -- cost structure, ROI quantification, trade-off analysis | Defines factory production targets grounded in portfolio-level discovery evidence |
| **Product surface** | -- | -- | Treats prompts, memory, and data pipelines as part of the product surface | Defines what the factory should produce at a strategic level |

### Design and Architecture Progression

| Capability Area | Zone 1: Augmenting | Zone 2: Integrating | Zone 3: Accelerating | Zone 4: Industrializing |
|---|---|---|---|---|
| **Design delivery** | Uses AI for ideation, content generation, and design exploration | Leads AI-augmented design exploration; owns design standards in the team's shared AI configuration | Defines AI behavioral expectations from UX perspective; encodes design standards as machine-verifiable inputs; owns design evaluation criteria in CAT pipeline | Owns the factory's design specification layer; operates design compliance verification at portfolio scale |
| **Design discovery** | Uses AI to synthesize user research, analyze usability data, and evaluate IA alternatives | Uses AI for systematic design system consistency auditing and documentation | Conducts AI-enhanced UX research at unprecedented pace and depth; owns the living definition of "good" for user-facing output grounded in ongoing user evidence | Leads design strategy across the portfolio using AI-enhanced research at organizational scale |
| **Workflow integration** | -- | Leads own AI-augmented design practice and integrates into team's shared workflow as co-equal contributor | Defines AI behavioral expectations and evaluation criteria from user experience perspective | Designs for factory-scale observability and governance |
| **Architecture** | -- | -- | Architects design systems with "functional core / imperative shell" patterns that guide agents to success; designs for AI observability from day one | Defines the "production system" architecture as a system in its own right |

### Quality Assurance Progression

| Capability Area | Zone 1: Augmenting | Zone 2: Integrating | Zone 3: Accelerating | Zone 4: Industrializing |
|---|---|---|---|---|
| **Primary work mode** | Uses AI to assist with test case generation, bug triage, and test data creation | Adapts test strategies for AI-generated code patterns; participates in shared agentic workflow | Designs eval harnesses and defines evaluation criteria; owns CAT pipeline health | Operates the factory's evaluation infrastructure as primary function |
| **Quality focus** | Individual test quality improvement through AI assistance | Team-level test strategy adaptation for AI-specific failure modes | Pipeline-level evaluation and systematic quality assessment | Factory-level quality SLAs, drift detection, and portfolio-scale evaluation |
| **Collaboration** | Individual tool use for testing tasks | Active participant in team retrospectives and shared workflow evolution | Co-owns eval harnesses with engineering; maintains failure mode taxonomy | Collaborates with engineering and product leadership on factory quality targets |
| **Failure analysis** | Uses AI for root cause analysis of individual bugs | Documents characteristic AI-generated code error patterns | Develops and maintains the failure mode taxonomy; leads systematic failure analysis | Designs and executes factory-scale drift detection program |

---

## Notes on Cumulative Proficiency

The zones are cumulative. Each zone assumes and builds upon the proficiencies of all preceding zones:

- **Zone 2 assumes Zone 1 competency.** Individual engineers must already be competent with AI tools before the team can standardize its approach.
- **Zone 3 assumes Zone 2 competency.** The team-level practices, quality gates, and collaborative AI habits built in Zone 2 become the foundation on which Zone 3's pipeline-driven approach is constructed.
- **Zone 4 assumes Zone 3 competency.** The AI-native development capability established at the team level in Zone 3 is the raw material from which Zone 4's factory is built.

All zones form a single progression, with each building on the previous. Zone 2 is the typical near-term target for most organizations -- the point at which AI adoption becomes a durable team-level capability. Zones 3 and 4 require progressively larger investments that are justified when the scale, velocity, or nature of the work demands them. Organizations choose their stopping point based on strategic context and investment capacity; every zone is a legitimate destination when chosen through informed analysis.

---

## Related Documentation

- [Zone 1: Augmenting](/toolkit/zone-1-augmenting) -- Full zone reference including Zone 1 proficiency context
- [Zone 2: Integrating](/toolkit/zone-2-integrating) -- Full zone reference including Zone 2 proficiency context
- [Zone 3: Accelerating](/toolkit/zone-3-accelerating) -- Full zone reference including Zone 3 proficiency context
- [Zone 4: Industrializing](/toolkit/zone-4-industrializing) -- Full zone reference including Zone 4 proficiency context
- [Technique Catalog](/toolkit/technique-catalog) -- The tools and methods that support each proficiency
- [Investment Catalog](/toolkit/investment-catalog) -- The organizational investments required to enable each zone's proficiencies
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How proficiency scores are aggregated into competency stages
- [Zone-Specific Metrics](/toolkit/zone-specific-metrics) -- Leading indicators tied to proficiency adoption patterns
