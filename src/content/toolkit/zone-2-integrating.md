---
title: "Zone 2: Integrating"
description: "Zone 2 represents the point at which AI-augmented development moves from individual experimentation to team-level integration."
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

Zone 2 is the **typical near-term target** for organizations that want AI to be a durable competitive advantage rather than an individual convenience. For most software organizations, Zone 2 represents the competitive baseline. However, the decision to pursue Zone 2 should emerge from strategic analysis, not from a framework mandate. Organizations whose strategic analysis supports a different conclusion should make that choice with confidence.

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

- **Adapts test strategies to account for characteristic AI-generated code patterns.** QA engineers understand the specific failure modes of AI-generated code -- subtle logic errors, security oversights, convention mismatches, hallucinated APIs -- and design test strategies that address these patterns systematically rather than relying on traditional test approaches alone.
- **Participates in the team's shared agentic workflow and retrospectives.** QA engineers are active contributors to the team's AI practices, participating in retrospectives about the agentic workflow's quality impact and helping evolve the shared configuration -- not downstream consumers of engineering decisions.
- **Uses AI tools systematically for test automation and regression analysis as part of the shared workflow.** AI assists with generating test scripts, analyzing regression results, identifying flaky tests, and maintaining test infrastructure -- integrated with the team's shared AI configuration rather than as isolated individual tool use.

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

AI tool costs are integrated into project budgets as a team expense, not treated as personal expenses or departmental overhead. When AI tools are essential to the team's workflow, their cost must be visible and funded like any other infrastructure.

### Workflow Training

The organization invests in training teams in the Plan/Code/Verify workflow specifically --- not just generic "use AI" training. This includes context engineering, externalized planning, feedback loop setup, and the specific skills required to work effectively with agentic tools at the team level.

### Cross-Team Knowledge Sharing

The organization enables cross-team sharing of AI configuration patterns. AGENTS.md templates, skill libraries, workflow patterns, and lessons learned should flow between teams. This prevents each team from reinventing the wheel and accelerates organization-wide adoption.

### Retrospective Culture

The organization supports a retrospective culture around continuous improvement of the agentic setup. This means allocating time for retrospectives, valuing process improvement alongside feature delivery, and treating the team's AI workflow as a first-class subject of continuous improvement.

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

## Timeline

- **3-6 months** for a team to achieve Zone 2 competency from a Zone 1 baseline.
- **Visible improvements within 4-8 weeks** of adopting the shared workflow. Teams typically see consistency improvements first (reduced variance in code quality, faster PR reviews) before seeing throughput gains.
- **Full "One Team, One Setup" maturity takes 3-6 months.** The initial configuration is fast; the iterative refinement based on real usage is what takes time.

Progress is non-linear. Teams will experience plateaus as they establish new habits, jumps as workflow improvements compound, and occasional regression when under pressure. **Regression is normal and expected**, not a sign of failure. When a team reverts to pre-Zone-2 behaviors during a high-pressure period, the regression is diagnostic information: it reveals which practices have become truly habitual and which are still fragile. The appropriate response is to debrief after the pressure period and reinforce the practices that proved fragile, not to treat the regression as evidence that the transition is failing. The key indicator of Zone 2 competency is that the team returns to its shared workflow after disruptions, rather than abandoning it.

## Progressive Competency Note

Zone 2 is the **typical near-term target for most organizations** adopting AI-augmented software development. While Zone 1 (Augmenting) represents valuable individual capability, the benefits of AI-augmented development become durable and scalable when they are embedded in team-level workflows.

For most software organizations, Zone 2 represents the point at which AI adoption becomes a durable team-level capability rather than a collection of individual practices. However, the decision to pursue Zone 2 should emerge from strategic analysis, not from a framework mandate. Organizations whose strategic analysis supports Zone 1 as the appropriate destination -- because team-level process change is not justified by their context -- should make that choice with confidence. See [How to Choose a Target Zone](/toolkit/choose-target-zone) for the strategic analysis framework.

Teams will practice Zone 2 proficiencies alongside ongoing Zone 1 proficiencies. The zones are cumulative: Zone 2 competency assumes and builds upon Zone 1 competency. Individual engineers continue to develop their personal AI skills while also contributing to the team's shared practices.

## Relationship to Other Zones

### Zone 1: Augmenting (Prerequisite)

Zone 1 competency is a prerequisite for Zone 2. Individual engineers must already be competent with AI tools --- able to use the Plan/Code/Verify workflow individually, comfortable with agentic coding interfaces, and capable of evaluating AI-generated output --- before the team can standardize its approach.

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
- [Progressive Competency Model](/toolkit/progressive-competency-model) -- Why Zone 2 is the competitive baseline for all software organizations
- [How to Choose a Target Zone](/toolkit/choose-target-zone) -- Decision framework for whether to pursue Zone 3 after achieving Zone 2
