---
title: "Zone 2: Integrating"
description: "Zone 2 represents the point at which AI-augmented development moves from individual experimentation to team-level integration."
type: "zone-reference"
audience: "facilitator"
section: "reference"
order: 2
---
## Zone Definition

Zone 2 represents the point at which AI-augmented development moves from individual experimentation to **team-level integration**. In an Integrating team, AI is embedded in team-level workflows: code review, testing, documentation, CI/CD, PM specification, design integration, and QA adaptation. Usage is systematic, not ad-hoc. The team has a shared, evolving agentic setup --- committed to source control, understood by all members, and improved through regular retrospectives. This is a **workflow integration shift**: the team collectively develops the discipline and infrastructure to make AI a reliable, consistent part of how they deliver software, rather than leaving it to individual initiative.

## Who Is This For?

Zone 2 is for teams that have established individual competence with AI tools (Zone 1) and are ready to standardize their approach across the team. This zone is appropriate for:

- **Development teams** where multiple engineers use AI tools but each has a different setup, different prompts, and different levels of effectiveness.
- **Organizations** that want consistent, measurable returns from AI investment rather than pockets of individual productivity.
- **Teams** that have experienced the "AI skill variance" problem: some members get great results, others struggle, and there is no shared understanding of how to use these tools well.
- **Engineering leaders** who need to ensure AI-generated code meets the team's quality standards reliably, not just when the most skilled AI user happens to write it.
- **Product managers** who shape what the team's AI-augmented delivery produces -- defining product direction, acceptance criteria, and quality expectations that the team's shared AI workflow serves.
- **Designers** who define the experience standards the team's AI-augmented delivery must meet and use AI to accelerate their own discovery and production work.
- **QA engineers** who ensure the team's AI-augmented delivery meets quality standards -- adapting test strategies for AI-generated code patterns and contributing quality perspective to the team's shared workflow evolution.

Zone 2 is the **most common near-term target** for organizations pursuing AI-augmented development. Most organizations that complete an ACE diagnostic and choose to invest in progression will target Zone 2, because team-level integration is where AI adoption becomes durable and scalable. However, the decision to pursue Zone 2 should emerge from strategic analysis, not from a framework mandate. Organizations whose strategic analysis supports Zone 1 as the appropriate destination -- because the investment in team-level process change is not justified by their context -- should make that choice with confidence. Zone 1 is a legitimate destination, not a waypoint.

### Evidence Status

**Confidence level: Moderate.** Zone 2 practices build on team-level software engineering practices (CI/CD, code review, shared configuration, test-driven development) that have strong evidence bases independently, combined with emerging evidence on AI-augmented team workflows. The specific integration patterns described here (Plan/Code/Verify, VTDD, shared AGENTS.md configuration) are expert-informed frameworks based on observed practitioner patterns that have not been validated in controlled studies. The organizational investment categories draw on well-established organizational change research. See the [Validation Study Plan](/research/validation-study-plan) for the research program developing empirical evidence for these practices.

## Core Metric

**The team ships AI-verified, production-ready code using a shared agentic workflow that all members contribute to and evolve.**

This metric is assessed by observing whether the team habitually --- even under deadline pressure --- follows its shared workflow, uses its shared AI configuration, and collectively maintains the quality gates that govern AI-generated output. All team roles participate in and contribute to the shared workflow, since the production pipeline depends on inputs from PM (specifications), design (standards), and QA (verification) alongside engineering.

## Benefits

Achieving Zone 2 competency delivers the following observable benefits to the organization:

- **Consistent code quality through systematic AI-assisted review.** Quality does not depend on which engineer wrote the code or how skilled they are with AI tools individually. The team's shared workflow enforces consistent standards.

- **Reduced knowledge silos.** The shared AI setup (AGENTS.md/CLAUDE.md, externalized plans, architecture docs) means project context is accessible to agents and humans alike. Knowledge lives in the repository, not in individuals' heads.

- **Faster onboarding of new team members.** The AI configuration carries project context, coding standards, and architectural decisions. New team members benefit from the same agentic setup that experienced members use, reducing ramp-up time.

- **Measurable velocity improvements through systematic AI use.** Because usage is consistent and governed, the team can actually measure the impact of AI on throughput, defect rates, and cycle time --- rather than relying on anecdotal reports.

- **Reduced bug rates through mandatory feedback loops.** When the team mandates that agents must pass compiler checks, linters, and tests before code is committed, entire categories of defects are caught before they reach review.

- **Better documentation.** AI assists in keeping documentation current because agents have access to project context and can be directed to update docs as part of the workflow.

- **Team-level reliability.** The team's output quality is not dependent on individual AI skill variance. The shared setup and shared practices create a floor of competence that applies to every member.

## Proficiencies

Proficiencies are observable team behaviors, exhibited habitually even under pressure. A team is competent in Zone 2 when these behaviors are the default, not the exception.

### Engineering

- **The team executes Plan/Code/Verify as the default workflow for all changes.** The three-phase agentic coding workflow --- Plan (context gathering, plan construction, plan externalization), Code (plan-guided iteration with agent, incremental progress, maintaining coherence), Verify (correctness, quality, safety) --- is the habitual approach for every change, not just when it is convenient or when the change is complex.

- **Engineers maintain and evolve a shared AGENTS.md/CLAUDE.md with project context.** The team's AI configuration is committed to source control as the team's "AI constitution." It contains project-specific context, coding standards, architectural constraints, workflow instructions, and ethical constraints (e.g., data handling rules, prohibited patterns, domain-specific compliance requirements). All members contribute to its evolution.

- **The team enforces automated quality checks on all AI-generated code.** Pre-commit hooks or CI pipeline gates require that AI-generated code passes compiler checks and linter rules before it can be committed. These surface-level quality gates catch the most common categories of AI-generated code errors: syntax violations, style inconsistencies, and convention mismatches.

- **The team maintains automated test coverage sufficient to catch behavioral regressions in AI-generated code, and all AI-generated code must pass these tests before committing.** "Sufficient" means the team can answer "would our tests catch it if the AI introduced a subtle behavioral error in this area?" with reasonable confidence for the codebase's critical paths. This is not a percentage target -- it is a judgment about whether the test suite provides meaningful behavioral verification for the code AI is producing. Teams that rely solely on syntax and formatting checks (compiler, linter) without behavioral tests have a formatting gate, not a quality gate. The team invests in test coverage specifically because AI-generated code's most common failure mode is subtle behavioral incorrectness that compilers and linters cannot detect.

- **Engineers can guide agents through multi-step implementations using externalized plans.** Plans, architecture decision records (ADRs), task breakdowns, and design documents are written to markdown files checked into the repository. These serve as both human documentation and agent context.

- **The team practices context engineering.** Engineers deliberately curate what goes into the agent's context window. This is distinct from prompt engineering: it involves managing project-level configuration, session-level context, and strategic use of techniques like `/compact`, summarization, and fresh sessions.

- **Code review includes reviewing agent-produced code at PR level or better.** The team does not treat AI-generated code as inherently trustworthy or inherently suspect. It is reviewed with the same rigor as human-written code, with attention to the kinds of errors agents characteristically make.

- **Engineers use fresh agent sessions for PR review to get unbiased assessment.** When using AI for code review, the team starts fresh sessions that have no prior context about the implementation decisions, ensuring the review is independent.

- **The team iterates on its agentic setup in retrospectives.** The shared AI configuration, workflow practices, and tool choices are regular subjects of retrospective discussion. The team treats its agentic setup as a living system that requires continuous improvement.

### Product Management

- **PMs define product requirements that include AI behavioral criteria and verification expectations.** Beyond traditional functional acceptance criteria, PMs specify how AI-augmented workflows should behave --- for example, what verification steps are required, what documentation should be generated, or what quality gates apply.

- **PMs participate in retrospectives about agentic workflow improvements.** Product managers are active participants in discussions about how the team's AI practices are working, not passive observers.

- **PMs use AI for discovery, synthesis, and stakeholder communication systematically.** AI is part of the PM toolkit for research synthesis, competitive analysis, writing, and communication --- used consistently, not sporadically.

- **PMs can specify "definition of done" that includes AI verification criteria.** The team's definition of done explicitly includes AI-related quality gates, and PMs understand and can articulate these requirements.

### Design and Architecture

- **Designers use AI for systematic design exploration and documentation.** AI tools are part of the design workflow for generating alternatives, documenting decisions, and exploring trade-offs --- used as a regular practice, not an occasional experiment.

- **Designers contribute design context, constraints, and standards to the team's shared AI configuration.** Design system rules, component specifications, accessibility requirements, and interaction patterns are encoded in the team's AGENTS.md/CLAUDE.md so that AI-generated code respects design standards by default. Designers are co-owners of the shared configuration, not downstream consumers.

- **Designers use AI to maintain and evolve design system documentation and consistency.** AI assists with auditing design system usage across the codebase, identifying inconsistencies, generating component documentation, and flagging deviations from established patterns. Design system health is a team responsibility that designers lead.

- **Designers engage with the team's shared agentic workflow for design-adjacent implementation work.** When design work intersects with implementation (component libraries, design tokens, CSS architecture, prototyping), designers can work within the team's Plan/Code/Verify workflow. This is collaborative engagement, not subordinate participation.

### Quality Assurance

- **Adapts test strategies to account for characteristic AI-generated code patterns and AI-specific failure modes.** QA engineers understand the specific failure modes of AI-generated code -- subtle logic errors, security oversights, convention mismatches, hallucinated APIs, and biased assumptions embedded in generated code (e.g., hardcoded demographic defaults, culturally specific data patterns, accessibility-excluding interaction designs) -- and design test strategies that address these patterns systematically rather than relying on traditional test approaches alone. Concretely, this means: identifying categories of errors that AI-generated code produces more frequently than human-written code (e.g., plausible-looking but incorrect error handling, inconsistent state management across generated modules, security patterns that appear correct but omit edge cases); designing targeted test cases and checklists for these AI-characteristic failure modes; adjusting regression test coverage to account for the higher variance in AI-generated code paths; ensuring test data reflects the application's actual user demographics rather than AI training data defaults; checking that AI-generated UI components meet the team's accessibility standards; verifying that AI-generated business logic does not embed assumptions about user demographics; and contributing AI-specific quality criteria to the team's definition of done. QA engineers maintain a living catalog of observed AI failure patterns -- including bias patterns -- and update test strategies as new patterns emerge. This catalog is as important to Zone 2 QA as the shared AGENTS.md is to engineering.
- **Participates in the team's shared agentic workflow and retrospectives.** QA engineers are active contributors to the team's AI practices, participating in retrospectives about the agentic workflow's quality impact and helping evolve the shared configuration -- not downstream consumers of engineering decisions.
- **Uses AI tools systematically for test automation and regression analysis as part of the shared workflow.** AI assists with generating test scripts, analyzing regression results, identifying flaky tests, and maintaining test infrastructure -- integrated with the team's shared AI configuration rather than as isolated individual tool use.
- **Evaluates AI-generated test artifacts with the same rigor applied to AI-generated code.** When AI tools generate test scripts, test data, or test infrastructure, QA engineers review these artifacts for the same categories of AI-characteristic errors that affect production code -- hallucinated assertions, incomplete edge case coverage, tests that pass trivially without actually exercising the behavior under test. A test suite generated by AI that looks comprehensive but does not catch real defects is worse than no tests at all because it creates false confidence.

## Organizational Investments

Zone 2 competency requires organizational support beyond team-level effort. These are investments the organization must make to enable and sustain Integrating competency.

### One Team, One Setup

The organization mandates that all AI configuration goes into source control. Personal AI setups, private prompt libraries, and individual tool configurations are replaced by a shared, committed, versioned team configuration. This is the foundational investment: without it, the team cannot achieve consistent, team-level competency.

### Time for Infrastructure

Teams must be given time to establish and iterate on their agentic setup alongside feature delivery. Building shared AGENTS.md/CLAUDE.md files, establishing feedback loops, creating skills and commands, and refining the workflow all require dedicated effort. Organizations that expect teams to build this infrastructure "on the side" while maintaining full feature velocity will not achieve Zone 2 competency.

### Tool Standardization

The organization establishes team agreement on preferred AI tools and providers. This does not mean banning alternatives, but it means the team has a standard stack that everyone knows, everyone uses, and everyone can support. The shared setup depends on shared tools.

### Quality Gate Policy

The organization creates policy on AI-generated code quality gates. This includes expectations about mandatory feedback loops (compiler, linter, tests), code review standards for AI-generated code, and acceptable use guidelines. These policies should be collaboratively developed with teams, not imposed top-down.

### Budget Integration

AI tool costs are integrated into project budgets as a team expense, not treated as personal expenses or departmental overhead. When AI tools are essential to the team's workflow, their cost must be visible and funded like any other infrastructure. Visible AI tool budgets also provide the data foundation for tracking the resource footprint of AI usage -- API costs, compute consumption, and associated energy use -- which becomes increasingly important to monitor as AI usage scales through subsequent zones.

### Workflow Training

The organization invests in training teams in the Plan/Code/Verify workflow specifically --- not just generic "use AI" training. This includes context engineering, externalized planning, feedback loop setup, and the specific skills required to work effectively with agentic tools at the team level.

### Cross-Team Knowledge Sharing

The organization enables cross-team sharing of AI configuration patterns. AGENTS.md templates, skill libraries, workflow patterns, and lessons learned should flow between teams. This prevents each team from reinventing the wheel and accelerates organization-wide adoption.

### Retrospective Culture

The organization supports a retrospective culture around continuous improvement of the agentic setup. This means allocating time for retrospectives, valuing process improvement alongside feature delivery, and treating the team's AI workflow as a first-class subject of continuous improvement.

### External Feedback Channel Readiness

Ensure existing customer feedback and bug reporting channels can surface concerns about AI-generated output quality. This does not require new infrastructure at Zone 2 -- it means ensuring that customer support, QA triage, and product feedback processes are equipped to recognize and route issues that may be AI-characteristic. If a customer reports that the product behaves inconsistently, or that generated content contains biased assumptions, or that a feature does not work for their demographic, the team should be able to trace whether AI-generated code may be a contributing factor. The investment is in awareness and routing, not in building a new system. At Zone 3 and beyond, this awareness develops into structured external governance mechanisms; at Zone 2, the goal is ensuring the channels you already have can catch the signals AI adoption creates.

### Addressing the Emotional Dimension of Shared Practice

The identity shift at Zone 2 is often underestimated because it does not involve formal role changes. But the shift from personal AI setup to shared workflow requires practitioners to give up individual autonomy in exchange for team consistency. An engineer who has developed a personal prompting style that works well for them is being asked to subordinate that personal effectiveness to a shared configuration that may feel less optimal for their individual workflow. This is a real loss, and organizations that dismiss it -- "just use the shared setup" -- will encounter resistance that is misdiagnosed as stubbornness rather than recognized as a legitimate response to the loss of professional autonomy. Effective approaches include: acknowledging the trade-off explicitly ("we are asking you to give up some individual optimization for team consistency -- that is a real trade-off, and we want to hear where it hurts"); creating mechanisms within the shared configuration for individual contributions (the shared AGENTS.md should incorporate the best of individual practices, not replace them with a lowest-common-denominator alternative); and framing the shared workflow as a team creation that everyone owns, not a mandate imposed from outside.

### Management Behavior

Zone 2 competency requires specific management behaviors, not just management sponsorship. The organizational investments above address structural changes; the behaviors below address how managers act day-to-day during the transition. Without these behaviors, structural investments are undermined by managerial actions that signal the old ways are still acceptable.

- **When the shared workflow is bypassed under pressure, treat the bypass as a diagnostic event, not an acceptable adaptation.** If the team abandons Plan/Code/Verify during a crunch, that bypass is information about which practices are fragile. The manager's response is to debrief after the pressure passes and reinforce the fragile practices -- not to normalize the bypass by saying "we had to ship."
- **When someone maintains a personal AI setup instead of the shared configuration, redirect individual excellence toward team contribution.** The response is not to prohibit individual experimentation but to channel it: "That technique you developed is clearly effective -- can you propose it as an addition to the shared configuration so the whole team benefits?"
- **In performance conversations, explicitly adjust what is valued to align with the zone transition.** If the organization rewards individual velocity while asking for team consistency, the incentive structure contradicts the stated direction. Performance criteria should reflect the Zone 2 shift: contributing to shared practices, improving the team's agentic setup, and maintaining quality gates under pressure matter as much as individual output.
- **When retrospectives surface workflow friction, engage substantively rather than defending or abandoning.** If the team reports that the shared workflow creates friction for certain types of work, the manager's response is to investigate and iterate -- not to defend the workflow ("you just need to get used to it") or abandon it ("if it is not working, just do what works"). The retrospective is the mechanism for improving the workflow; management must treat its findings seriously.
- **In interactions with their own management, advocate for and protect the team's practice-building time.** Zone 2 investments require protected time that competes with feature delivery. When upper management pressures for more features, the direct manager must advocate for the practice-building time the roadmap requires rather than quietly absorbing the pressure by squeezing practice time. This is the management behavior that most commonly fails and most directly predicts whether Zone 2 investments succeed.

## Accountability at Zone 2

At Zone 2, accountability for AI practices operates through the team's existing collaborative mechanisms rather than through formal accountability structures (which are introduced at Zone 3). The team holds itself accountable for the quality and integrity of its AI-augmented workflow through:

- **Retrospectives.** The weekly agentic setup retrospective is the primary accountability mechanism. When AI-generated output causes problems -- bugs, regressions, inconsistencies, or bias patterns -- the retrospective is where the team diagnoses what happened and how to prevent recurrence. This is team-level accountability: the team takes collective responsibility for the quality of its AI-augmented output.
- **Code review.** Review of AI-generated code at PR level or better is both a quality gate and an accountability practice. The reviewer who approves AI-generated code shares responsibility for its quality, just as they would for human-written code. This shared responsibility is what makes the review meaningful rather than ceremonial.
- **Shared configuration review.** The periodic bias review of AGENTS.md and AI-generated outputs (described in the Techniques section) is an accountability practice: the team is answering the question "are our AI practices producing output we can stand behind?" on a regular cadence.
- **Quality gate enforcement.** The mandatory feedback loops (compiler, linter, tests) are mechanical accountability: they enforce standards regardless of pressure, fatigue, or individual judgment. When the team maintains these gates even under deadline pressure, the gates are functioning as accountability infrastructure.

This team-level accountability is proportionate to Zone 2's scope of AI authority. At Zone 2, AI-generated code is reviewed by humans, tested by automated suites, and produced through a shared workflow the team collectively maintains. The team is the accountability layer. At Zone 3, where AI becomes the primary implementation engine and operates at pipeline scale, formal accountability structures (chain of responsibility, audit trails, regulatory awareness) become necessary because the scope of AI authority exceeds what team-level mechanisms can govern.

## Techniques

The following techniques, tools, and practices support Zone 2 competency. Teams should adopt these systematically, not selectively.

### Plan/Code/Verify Workflow

The fundamental three-phase agentic coding workflow:

- **Plan**: Gather context from the codebase, requirements, and architecture. Construct a plan for the change. Externalize the plan to a markdown file, ADR, or task list that the agent can reference and the team can review.
- **Code**: Execute the plan iteratively with the agent. Make incremental progress. Maintain coherence between the plan and the implementation. Use the externalized plan as the agent's guide.
- **Verify**: Check correctness (is this the right change?), quality (does it meet team standards?), and safety (did it break anything?). Run the full feedback loop before considering the work complete.

### Shared AI Configuration (AGENTS.md / CLAUDE.md)

The team maintains project-level AI configuration files committed to source control. These files serve as the team's "AI constitution" --- they encode project context, coding standards, architectural constraints, workflow instructions, and team conventions. All members contribute to evolving these files.

### Mandatory Feedback Loops

Pre-commit hooks or CI pipeline gates that require agents to pass compiler checks, linter rules, and automated tests before code can be committed. These feedback loops are the mechanical enforcement of quality standards. They are non-negotiable infrastructure, not optional best practices.

### Vibe TDD (VTDD)

A testing pattern adapted for agentic workflows: the agent stubs tests first based on requirements, the human reviews the stubs to identify misunderstandings about intent or behavior, and then real tests are generated collaboratively. This catches specification errors early and produces better test coverage than either pure human TDD or pure agent-generated tests.

VTDD is the practice that makes the Verify phase of Plan/Code/Verify meaningful. Without a test-first discipline -- whether VTDD, traditional TDD, or an equivalent -- the Verify phase reduces to manual review, which does not scale. Teams establishing Zone 2 practices should adopt VTDD or an equivalent test-first pattern alongside the establishment of mandatory feedback loops, not as a later addition.

### Context Management

Deliberate practices for managing the agent's context window:

- Use `/compact` or summarization to manage long sessions
- Start fresh sessions for independent tasks (especially code review)
- Use subagents for isolated tasks that should not pollute the main session's context
- Structure externalized context (plans, ADRs, architecture docs) so agents can consume it efficiently

### Externalized Planning

Plans, architecture decisions, task breakdowns, and design documents are written to files checked into the repository. This serves dual purposes: human documentation and agent context. The team treats these artifacts as living documents that guide both human understanding and agent behavior.

### Skills, Commands, and Subagents

The team develops reusable agent capabilities:

- **Skills**: Reusable agent capabilities that activate contextually based on the task at hand
- **Commands**: User-invoked agent operations for common team workflows (e.g., `/commit`, `/review-pr`)
- **Subagents**: Isolated agent sessions spawned for specific tasks, protecting the main session's context and enabling parallel work

The team develops a decision framework for when to use each.

### Pairing Modes for Agentic Work

Structured approaches to collaborative work with AI agents:

- **Sync & Split**: Two developers work together to plan, then split to execute with their agents independently, reconvening to integrate
- **Multi-Tabbed**: One developer manages multiple agent sessions in parallel, each working on a different aspect of a larger task
- **Dueling Pair**: Two developers each direct an agent to solve the same problem independently, then compare and synthesize the results

### Automated PR Review

Tools like Code Rabbit, GitHub Copilot, or similar automated review tools integrated into the team's pull request workflow. These complement human review --- they do not replace it. The team configures these tools to enforce team-specific standards.

### Weekly Agentic Setup Retrospective

A regular (weekly or bi-weekly) practice of reflecting on how the team's agentic setup is working. What should change in AGENTS.md? Are the feedback loops catching the right things? Are there new skills or commands the team should build? This is integrated into the team's existing retrospective practice, not treated as a separate ceremony.

**Periodic bias review.** As part of the retrospective cycle, the team should periodically review the shared AI configuration (AGENTS.md/CLAUDE.md) for unintended assumptions or constraints that may have accumulated over time. Configuration files evolve incrementally, and individual additions that seem reasonable in isolation can collectively encode biases -- favoring certain architectural patterns, coding styles, technology choices, or problem-solving approaches over equally valid alternatives. A quarterly review asking "what assumptions does our configuration encode, and are they still serving us?" helps surface constraints that have become invisible through familiarity. This review is particularly important when team composition changes, since new members bring fresh perspective on what the existing configuration takes for granted. This review should also include a periodic sample of the team's AI-generated outputs (code, designs, content, test data) to check whether the AI production workflow is introducing bias patterns that the AGENTS.md configuration alone would not reveal. Configuration review catches biases in what the team tells the AI; output review catches biases in what the AI produces despite correct configuration.

## Timeline

- **3-6 months** for a team to achieve Zone 2 competency from a Zone 1 baseline.
- **Visible improvements within 4-8 weeks** of adopting the shared workflow. Teams typically see consistency improvements first (reduced variance in code quality, faster PR reviews) before seeing throughput gains.
- **Full "One Team, One Setup" maturity takes 3-6 months.** The initial configuration is fast; the iterative refinement based on real usage is what takes time.

Progress is non-linear. Teams will experience plateaus as they establish new habits, jumps as workflow improvements compound, and occasional regression when under pressure. **Regression is normal and expected**, not a sign of failure. When a team reverts to pre-Zone-2 behaviors during a high-pressure period, the regression is diagnostic information: it reveals which practices have become truly habitual and which are still fragile. The appropriate response is to debrief after the pressure period and reinforce the practices that proved fragile, not to treat the regression as evidence that the transition is failing. The key indicator of Zone 2 competency is that the team returns to its shared workflow after disruptions, rather than abandoning it.

## Recognizing and Addressing Regression

Zone 2 competency can regress. Because Zone 2 practices are team-level rather than individual, regression affects the entire team's workflow rather than a single practitioner's habits.

**Common regression triggers:**

- **Delivery pressure.** Extended crunch periods where the team abandons Plan/Code/Verify and reverts to individual ad-hoc AI usage. The shared workflow is the first thing dropped because it is newer and requires more coordination than individual tool use.
- **Team composition changes.** New members who have not built shared workflow habits, or the departure of a team member who was a strong advocate for the shared practices. The shared AGENTS.md may stop being updated when the person who championed it leaves.
- **Tool disruptions.** AI tool migrations, provider outages, or policy changes that break the team's established workflow. When the shared setup stops working, individuals fall back on personal configurations.
- **Management signal reversal.** When management stops protecting practice-building time, stops asking about shared workflow health in check-ins, or rewards individual velocity over team consistency, the organizational signal shifts and the team responds by deprioritizing shared practices.

**Signs of regression:**

- The shared AGENTS.md has not been updated in several retrospective cycles.
- Team members report bypassing Plan/Code/Verify for "simple changes" that are expanding in scope.
- Code review of AI-generated code becomes cursory or is skipped under time pressure.
- Retrospectives stop discussing the agentic setup.
- New team members are not onboarded into the shared workflow.
- Individual team members maintain personal AI configurations that diverge from the shared setup.

**What to do:**

Treat regression as a signal that the organizational investments supporting Zone 2 are insufficient or have degraded, not as individual or team failure. Diagnose the trigger: is this a practice fragility issue (the team needs more time to build the habit), an environmental issue (the organizational conditions for the practice have changed), or a management behavior issue (the signals from leadership are undermining the practice)? Each calls for a different response. Revisit the investments (time allocation, tool access, management behavior, retrospective culture) and address the specific trigger. Re-run the diagnostic to establish current state and plan targeted re-investment. See [Module 5: Facilitator-Led Assessment and Coaching](/training/module-5-coaching-engagement/) for detailed regression diagnostic methodology.

## Progressive Competency Note

Zone 2 is the **most common near-term target for most organizations** adopting AI-augmented software development. While Zone 1 (Augmenting) represents valuable individual capability, the benefits of AI-augmented development become durable and scalable when they are embedded in team-level workflows.

For most software organizations, Zone 2 represents the point at which AI adoption becomes a durable team-level capability rather than a collection of individual practices. However, the decision to pursue Zone 2 should emerge from strategic analysis, not from a framework mandate. Organizations whose strategic analysis supports Zone 1 as the appropriate destination -- because team-level process change is not justified by their context -- should make that choice with confidence. See [How to Choose a Target Zone](/toolkit/choose-target-zone) for the strategic analysis framework.

Teams will practice Zone 2 proficiencies alongside ongoing Zone 1 proficiencies. The zones are cumulative: Zone 2 competency assumes and builds upon Zone 1 competency. Individual engineers continue to develop their personal AI skills while also contributing to the team's shared practices.

## Relationship to Other Zones

### Zone 1: Augmenting (Prerequisite)

Zone 1 competency is a prerequisite for Zone 2. Individual engineers must already be competent with AI tools --- habitually using AI in their daily work, selecting the appropriate mode of AI engagement for each task, and capable of reviewing and evaluating AI-generated output --- before the team can standardize its approach.

If team members lack Zone 1 competency, attempting Zone 2 will fail: you cannot build a shared agentic setup when individuals cannot yet use the tools effectively on their own. The [Zone 1 reference](/toolkit/zone-1-augmenting) and [Baseline-to-Zone-1 Roadmap](/toolkit/baseline-to-zone-1) address the individual skills that are prerequisite to Zone 2.

### Zone 3: Accelerating (Next Option)

Zone 3 extends the team's competency from workflow integration to role transformation. Where Zone 2 makes AI a reliable part of how the team works, Zone 3 changes what individuals on the team are capable of doing. Zone 3 introduces the Prime Directive and addresses cross-functional capability expansion.

Teams that have achieved Zone 2 competency and want to pursue further capability should consider Zone 3, but this is a choice --- not all organizations need or benefit from Zone 3. The decision to pursue Zone 3 should be based on organizational context, strategic goals, and willingness to invest in the deeper structural changes it requires.

The [Zone-2-to-Zone-3 Roadmap](/toolkit/zone-2-to-3) covers the transition practices, and the [Zone 3 reference](/toolkit/zone-3-accelerating) describes the advanced team-level transformations that characterize Zone 3.

---

## Related Documentation

- [What Is ACE?](/toolkit/what-is-ace) -- Framework overview and the four zones in context
- [Zone 1: Augmenting](/toolkit/zone-1-augmenting) -- The prerequisite zone; Zone 2 requires Zone 1 competency as a foundation
- [Zone 3: Accelerating](/toolkit/zone-3-accelerating) -- The next zone in the progression; appropriate for organizations whose strategic analysis supports the investment
- [Zone 2 Diagnostic Questions](/toolkit/zone-2-questions) -- The assessment instrument for this zone
- [Zone-1-to-Zone-2 Roadmap](/toolkit/zone-1-to-2) -- Progression plan for organizations transitioning into Zone 2
- [Zone-2-to-Zone-3 Roadmap](/toolkit/zone-2-to-3) -- Progression plan for the transition out of Zone 2
- [Technique Catalog: Zone 2](/toolkit/technique-catalog) -- Detailed descriptions of Zone 2 tools and methods (Plan/Code/Verify, VTDD, mandatory feedback loops, etc.)
- [Proficiency Catalog](/toolkit/proficiency-catalog) -- Complete listing of Zone 2 proficiencies across all roles
- [Zone-Specific Metrics](/toolkit/zone-specific-metrics) -- Leading indicators for measuring Zone 2 competency progression
- [Progressive Competency Model](/toolkit/progressive-competency-model) -- How zone progression works and why organizations choose their stopping point
- [How to Choose a Target Zone](/toolkit/choose-target-zone) -- Decision framework for whether to pursue Zone 3 after achieving Zone 2
