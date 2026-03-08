---
title: "Technique Catalog"
description: "A reference catalog of all techniques, tools, and practices used across the AIL zones."
section: "reference"
type: "catalog"
audience: "facilitator"
order: 9
---
A reference catalog of all techniques, tools, and practices used across the AIL zones. Entries are organized by zone and sorted alphabetically within each zone. Each entry is a concise lookup reference; for full context on any technique, consult the linked zone reference document.

This catalog synthesizes techniques from the individual zone reference documents. For full context on any zone, see:
- [Zone 1: Augmenting](/toolkit/zone-1-augmenting)
- [Zone 2: Integrating](/toolkit/zone-2-integrating)
- [Zone 3: Accelerating](/toolkit/zone-3-accelerating)
- [Zone 4: Industrializing](/toolkit/zone-4-industrializing)

---

## Zone 1 Techniques

Individual-level AI tool adoption. These are the foundational practices every team member -- engineers, product managers, designers -- builds as habitual daily behavior.

### AI-Assisted Coding

**Zone(s):** 1
**Summary:** Rigorous, human-reviewed AI-augmented development for production code. Every piece of AI-generated output is read, understood, and validated before acceptance.
**Purpose:** Provides the productivity benefits of AI code generation while maintaining the developer's ownership of correctness, security, and alignment with project conventions. Distinguishes professional AI usage from uncritical acceptance.
**See Also:** [CHOP](#chop-chat-oriented-programming), [Vibe-Coding](#vibe-coding), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### AI-Assisted Debugging

**Zone(s):** 1
**Summary:** Using AI assistants to diagnose error messages, trace unexpected behavior, and explain unfamiliar code as a standard step in the debugging workflow.
**Purpose:** Accelerates root-cause analysis and reduces time spent blocked on cryptic errors. Makes senior-level diagnostic reasoning accessible to developers working outside their area of expertise.
**See Also:** [Chat-Based AI Assistants](#chat-based-ai-assistants), [AI-Assisted Coding](#ai-assisted-coding), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### AI-Generated Documentation

**Zone(s):** 1
**Summary:** Using AI to draft, expand, or improve documentation artifacts: docstrings, README files, architecture summaries, API references, and inline comments.
**Purpose:** Reduces the friction that causes documentation to be skipped or deferred under time pressure. AI provides a starting draft that the developer refines, lowering the activation cost.
**See Also:** [AI-Generated Tests](#ai-generated-tests), [Prompt Engineering Basics](#prompt-engineering-basics), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### AI-Generated Tests

**Zone(s):** 1, 2
**Summary:** Using AI to generate test stubs, test cases, and test code from requirements or existing implementation. At Zone 1, used to reduce the friction of test writing; at Zone 2, evolved into Vibe TDD.
**Purpose:** Increases test coverage by making it faster to produce tests, and surfaces cases the developer might not have considered. The developer reviews generated tests for correctness and completeness.
**Note:** At Zone 2, AI-generated tests evolve into VTDD (Vibe Test-Driven Development), which adds a structured stub-review step that catches specification errors before implementation begins. See the [VTDD entry](#vibe-tdd-vtdd) for the Zone 2 practice.
**See Also:** [Vibe TDD (VTDD)](#vibe-tdd-vtdd), [AI-Assisted Coding](#ai-assisted-coding), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Chat-Based AI Assistants

**Zone(s):** 1
**Summary:** Conversational AI interfaces (Claude Code, OpenAI Codex, OpenCode, and equivalents) used for interactive coding tasks, debugging, explanation, and iteration through dialogue.
**Purpose:** Provides a higher-bandwidth collaboration mode than inline completion. Appropriate for tasks that require back-and-forth refinement, context sharing, and iterative development. The core interface for CHOP.
**See Also:** [CHOP (Chat-Oriented Programming)](#chop-chat-oriented-programming), [Inline Code Completion](#inline-code-completion), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### CHOP (Chat-Oriented Programming)

**Zone(s):** 1
**Summary:** An interactive workflow where the developer and AI collaborate through conversation: the developer describes a task, the AI generates code, the developer reviews and feeds back, and the cycle repeats.
**Purpose:** Provides a deliberate, iterative mode of AI collaboration suited to production coding tasks. More structured than open-ended chat, more interactive than inline completion. The developer maintains direction and quality while leveraging AI generation.
**See Also:** [Chat-Based AI Assistants](#chat-based-ai-assistants), [AI-Assisted Coding](#ai-assisted-coding), [Vibe-Coding](#vibe-coding), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### Inline Code Completion

**Zone(s):** 1
**Summary:** Real-time AI code suggestions provided as the developer types, ranging from single-line completions to full function bodies (GitHub Copilot, Cursor, Windsurf, and equivalents).
**Purpose:** The lowest-friction entry point for AI-augmented development. Reduces keystrokes, accelerates boilerplate, and surfaces relevant completions in context without requiring the developer to break flow.
**See Also:** [Chat-Based AI Assistants](#chat-based-ai-assistants), [CHOP (Chat-Oriented Programming)](#chop-chat-oriented-programming), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### Prompt Engineering Basics

**Zone(s):** 1
**Summary:** The foundational skill of communicating clearly with AI tools: specifying intent, providing relevant context, articulating output format, and iterating on prompts to improve results.
**Purpose:** The single highest-leverage Zone 1 skill. Better prompts produce better results across all AI interactions. This skill deepens in subsequent zones into context engineering and system-level prompt design.
**See Also:** [Context Engineering](#context-engineering), [CHOP (Chat-Oriented Programming)](#chop-chat-oriented-programming), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### Vibe-Coding

**Zone(s):** 1
**Summary:** Exploratory, low-stakes AI-assisted coding for prototypes, proofs of concept, and experiments. The developer describes a desired outcome at a high level and accepts AI-generated code with lighter review.
**Purpose:** Accelerates exploration and learning when production quality is not required. Appropriate for throwaway spikes, technology experiments, and rapid prototypes where speed of exploration matters more than code quality.
**See Also:** [CHOP (Chat-Oriented Programming)](#chop-chat-oriented-programming), [AI-Assisted Coding](#ai-assisted-coding), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

## Cross-Craft Techniques

Non-engineering techniques that support product management, design, and QA practitioners in integrating AI into their core professional work -- not just artifact production, but the strategic and analytical dimensions of each discipline.

### AI-Assisted Product Discovery

**Zone(s):** 1, 2
**Summary:** Using AI to synthesize customer interview transcripts, analyze survey data, generate product hypotheses, model competitive positioning, and structure prioritization frameworks as a regular part of product discovery work.
**Purpose:** Accelerates the discovery cycle by reducing the manual synthesis burden that often causes discovery work to be skipped under delivery pressure. The PM uses AI output as a starting point for product judgment, not as a replacement for it.
**See Also:** [Prompt Engineering Basics](#prompt-engineering-basics), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### AI-Assisted Design Research Synthesis

**Zone(s):** 1, 2
**Summary:** Using AI to analyze user research transcripts, identify patterns in usability testing data, flag accessibility issues, and generate insights from qualitative design research as a regular part of design analysis work.
**Purpose:** Reduces the time between collecting user research data and extracting actionable design insights. Enables designers to synthesize larger volumes of qualitative data than would be practical manually, while the designer applies domain expertise to validate and interpret AI-generated patterns.
**See Also:** [Prompt Engineering Basics](#prompt-engineering-basics), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

### AI-Assisted Test Strategy Design

**Zone(s):** 1, 2
**Summary:** Using AI to analyze requirements for test coverage gaps, generate risk-based test strategies, identify boundary conditions and edge cases from specifications, and evaluate test effectiveness across the test suite.
**Purpose:** Elevates QA from test execution to test strategy by using AI to handle the analytical work of identifying what to test and why, freeing QA engineers to focus on the judgment-intensive work of designing effective test approaches for complex scenarios.
**See Also:** [AI-Generated Tests](#ai-generated-tests), [Zone 1: Augmenting](/toolkit/zone-1-augmenting)

---

## Zone 2 Techniques

Team-level AI integration. These practices systematize AI usage from individual initiative into shared team infrastructure: committed configuration, enforced quality gates, and deliberate collaboration patterns.

### Automated PR Review

**Zone(s):** 2
**Summary:** Automated code review tools (CodeRabbit, GitHub Copilot code review, and equivalents) integrated into the pull request workflow to complement human review on every PR.
**Purpose:** Catches mechanical issues -- style violations, common anti-patterns, missing tests -- before human reviewers see the PR, so that human attention can focus on design, intent, and correctness. Does not replace human review.
**See Also:** [Fresh-Session PR Review](#fresh-session-pr-review), [Mandatory Feedback Loops](#mandatory-feedback-loops-pre-commit-hooks--ci-gates), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Context Engineering

**Zone(s):** 2, 3
**Summary:** Deliberate management of what information enters an AI's context window. At Zone 2, this includes session-level practices (using `/compact`, starting fresh sessions, using subagents for isolation) and project-level practices (structured externalized plans and docs).
**Purpose:** Ensures agents have the right information at the right time and prevents context pollution between independent tasks. Distinct from prompt engineering, which focuses on instructions rather than information architecture.
**See Also:** [Context Engineering at System Level](#context-engineering-at-system-level), [Externalized Planning](#externalized-planning), [Subagents](#subagents), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Dueling Pair Pairing

**Zone(s):** 2
**Summary:** Two developers each direct an AI agent to solve the same problem independently, then compare and synthesize the results.
**Purpose:** Surfaces alternative approaches and surfaces design trade-offs that single-agent generation would not reveal. Particularly valuable for architecture decisions, algorithm choices, and situations where comparing alternatives produces better outcomes.
**See Also:** [Sync & Split Pairing](#sync--split-pairing), [Multi-Tabbed Pairing](#multi-tabbed-pairing), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Externalized Planning

**Zone(s):** 2
**Summary:** Plans, architecture decisions (ADRs), task breakdowns, and design documents are written as files committed to the repository, serving simultaneously as human documentation and agent context.
**Purpose:** Makes planning explicit and persistent, allowing agents to follow a plan coherently across multiple sessions and enabling the team to review and align on the plan before implementation begins.
**See Also:** [Plan/Code/Verify Workflow](#plancodeverify-workflow), [Context Engineering](#context-engineering), [Shared AI Configuration (AGENTS.md / CLAUDE.md)](#shared-ai-configuration-agentsmd--claudemd), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Fresh-Session PR Review

**Zone(s):** 2
**Summary:** AI-assisted code review is performed by starting a fresh AI session that has no prior context about implementation decisions, ensuring independent and unbiased review.
**Purpose:** Prevents the AI reviewer from being anchored to the reasoning it was party to during implementation. A fresh session reviews the code on its own merits rather than rationalizing the choices already made.
**See Also:** [Automated PR Review](#automated-pr-review), [Context Engineering](#context-engineering), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Mandatory Feedback Loops (Pre-Commit Hooks / CI Gates)

**Zone(s):** 2
**Summary:** Pre-commit hooks or CI pipeline gates that require AI-generated code to pass compiler checks, linters, and automated tests before it can be committed. Non-negotiable; no bypass in regular practice.
**Purpose:** Catches the categories of defects that agents characteristically produce -- syntax errors, style violations, test regressions -- before they reach review. Enforces quality as a structural constraint rather than relying on individual diligence.
**See Also:** [Plan/Code/Verify Workflow](#plancodeverify-workflow), [Automated PR Review](#automated-pr-review), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Multi-Tabbed Pairing

**Zone(s):** 2
**Summary:** One developer manages multiple agent sessions in parallel, each working on a different subtask of a larger piece of work.
**Purpose:** Enables parallel exploration or execution of independent subtasks, increasing throughput for work that can be decomposed cleanly. Requires deliberate context management to keep sessions appropriately isolated.
**See Also:** [Sync & Split Pairing](#sync--split-pairing), [Dueling Pair Pairing](#dueling-pair-pairing), [Subagents](#subagents), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Plan/Code/Verify Workflow

**Zone(s):** 2
**Summary:** The team's default three-phase workflow for all code changes: Plan (gather context, produce an externalized plan), Code (execute iteratively with the agent against the plan), Verify (check correctness, quality, and safety before the work is considered complete).
**Purpose:** Imposes structure on agentic coding, preventing unguided generation and ensuring every change is explicitly planned, incrementally implemented, and fully verified. Habitual use under deadline pressure is the Zone 2 core metric.
**See Also:** [Externalized Planning](#externalized-planning), [Mandatory Feedback Loops](#mandatory-feedback-loops-pre-commit-hooks--ci-gates), [Vibe TDD (VTDD)](#vibe-tdd-vtdd), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Shared AI Configuration (AGENTS.md / CLAUDE.md)

**Zone(s):** 2
**Summary:** Project-level AI configuration files committed to source control that encode project context, coding standards, architectural constraints, workflow instructions, and team conventions. All team members contribute to their evolution.
**Purpose:** Establishes a single shared AI "constitution" for the team, replacing individual personal setups with a versioned, reviewable, collectively maintained configuration. Enables consistent agent behavior across all team members and sessions.
**See Also:** [Externalized Planning](#externalized-planning), [Weekly Agentic Setup Retrospective](#weekly-agentic-setup-retrospective), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Skills and Commands

**Zone(s):** 2
**Summary:** Reusable agent capabilities built by the team: Skills activate contextually based on the current task; Commands are user-invoked agent operations for recurring team workflows (e.g., `/commit`, `/review-pr`).
**Purpose:** Encodes recurring workflow patterns into reusable, version-controlled capabilities, reducing repetitive prompt construction and ensuring consistent agent behavior for common tasks across the team.
**See Also:** [Subagents](#subagents), [Shared AI Configuration (AGENTS.md / CLAUDE.md)](#shared-ai-configuration-agentsmd--claudemd), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Subagents

**Zone(s):** 2
**Summary:** Isolated agent sessions spawned for specific tasks, keeping them separate from the main working session's context.
**Purpose:** Protects the primary session's context from being polluted by unrelated work, enables parallel execution of independent tasks, and provides clean isolation for tasks like code review that benefit from no prior context.
**See Also:** [Skills and Commands](#skills-and-commands), [Context Engineering](#context-engineering), [Fresh-Session PR Review](#fresh-session-pr-review), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Sync & Split Pairing

**Zone(s):** 2
**Summary:** Two developers plan together, then split to execute their portions independently with their own agents, reconvening to integrate the results.
**Purpose:** Combines the alignment benefits of pair planning with the throughput benefits of parallel execution. Works well for tasks that can be divided cleanly after a shared understanding is established.
**See Also:** [Multi-Tabbed Pairing](#multi-tabbed-pairing), [Dueling Pair Pairing](#dueling-pair-pairing), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Vibe TDD (VTDD)

**Zone(s):** 2
**Summary:** A testing pattern for agentic workflows: the agent stubs tests first based on requirements, the human reviews the stubs to surface misunderstandings, then real tests are generated collaboratively.
**Purpose:** Catches specification errors before implementation begins. The stub review step surfaces cases where the agent has misunderstood requirements, producing better-aligned tests and cleaner implementations than either pure human TDD or pure agent-generated tests.
**See Also:** [AI-Generated Tests](#ai-generated-tests), [Plan/Code/Verify Workflow](#plancodeverify-workflow), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

### Weekly Agentic Setup Retrospective

**Zone(s):** 2
**Summary:** A regular (weekly or bi-weekly) reflection on how the team's agentic setup is working, integrated into the team's existing retrospective. Produces concrete updates to AGENTS.md, feedback loops, and shared tooling.
**Purpose:** Treats the agentic setup as a living system that requires continuous improvement. Without regular reflection, configurations stagnate and stop reflecting actual team needs.
**See Also:** [Shared AI Configuration (AGENTS.md / CLAUDE.md)](#shared-ai-configuration-agentsmd--claudemd), [Zone 2: Integrating](/toolkit/zone-2-integrating)

---

## Zone 3 Techniques

Organizational-level AI engineering. These practices shift the primary mode of engineering from writing code to designing the processes, specifications, and verification systems that produce code.

### Authority (Separate Generation from Decisioning — Level 2)

**Zone(s):** 3
**Summary:** The second level of the "Separate Generation from Decisioning" framework. Humans retain ownership of outcomes without authoring every line: through verification design, chain of custody, and permission structures.
**Purpose:** Defines how authority over AI-generated output is exercised without requiring humans to produce every artifact directly. Establishes accountability structures that scale as generation volume increases.
**See Also:** [Conditioning (Level 1)](#conditioning-separate-generation-from-decisioning--level-1), [Workflows / Orchestration (Level 3)](#workflows--orchestration-separate-generation-from-decisioning--level-3), [Evals at Scale (Level 4)](#evals-at-scale-separate-generation-from-decisioning--level-4), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### CAT (Continuous Alignment Testing)

**Zone(s):** 3
**Summary:** Automated pipelines that define expected AI behaviors as testable assertions, run them against AI pipeline outputs on every change, and report pass/fail results alongside traditional CI results.
**Purpose:** The AI analog of continuous integration. Catches behavioral regressions in AI pipelines -- prompt changes, model updates, context modifications -- before they reach production. Quality becomes a system property rather than a manual review outcome.
**See Also:** [Eval Harness Design](#eval-harness-design), [Prompt Versioning](#prompt-versioning), [Evals at Scale (Level 4)](#evals-at-scale-separate-generation-from-decisioning--level-4), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Conditioning (Separate Generation from Decisioning — Level 1)

**Zone(s):** 3
**Summary:** The first level of the "Separate Generation from Decisioning" framework. Steering a probabilistic AI component through intent specification, context engineering, and constraint design to shape what it generates.
**Purpose:** Establishes the foundation for governing AI-generated output. Before authority, workflows, or evals can be designed, the generation process itself must be deliberately shaped.
**See Also:** [Authority (Level 2)](#authority-separate-generation-from-decisioning--level-2), [Context Engineering at System Level](#context-engineering-at-system-level), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Context Engineering at System Level

**Zone(s):** 3
**Summary:** Designing what information enters AI context windows at the system architecture level: what is retrieved, how it is structured, when it is refreshed. Encompasses RAG, context windowing strategies, dynamic context assembly, and context prioritization.
**Purpose:** Makes context a first-class architectural concern rather than an ad-hoc session practice. Determines AI output quality more than any other single factor in complex pipeline systems.
**See Also:** [Context Engineering](#context-engineering), [Conditioning (Level 1)](#conditioning-separate-generation-from-decisioning--level-1), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Eval Harness Design

**Zone(s):** 3
**Summary:** The infrastructure that defines and executes evaluations of AI pipeline quality: test cases with input/expected-output pairs, scoring rubrics (exact match, semantic similarity, rubric-graded), acceptable thresholds, and results reporting.
**Purpose:** Provides the operational definition of "correct" for AI-generated output. Enables automated quality assurance at the pipeline level, making quality measurable and improvable through iteration.
**See Also:** [CAT (Continuous Alignment Testing)](#cat-continuous-alignment-testing), [Failure Mode Taxonomy](#failure-mode-taxonomy), [Evals at Scale (Level 4)](#evals-at-scale-separate-generation-from-decisioning--level-4), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Evals at Scale (Separate Generation from Decisioning — Level 4)

**Zone(s):** 3
**Summary:** The fourth level of the "Separate Generation from Decisioning" framework. Building eval harnesses and feedback loops so that the AI system self-corrects: drift management, governance, and continuous improvement close the loop.
**Purpose:** Completes the governance framework by creating self-correcting quality mechanisms. At this level, the system detects its own failures and the team has processes to act on what is detected.
**See Also:** [CAT (Continuous Alignment Testing)](#cat-continuous-alignment-testing), [Observability](#observability-ai-traces-cost-tracking-drift-monitoring), [Workflows / Orchestration (Level 3)](#workflows--orchestration-separate-generation-from-decisioning--level-3), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Failure Mode Taxonomy

**Zone(s):** 3
**Summary:** A structured classification of AI failure types used for systematic root cause diagnosis: context missing, retrieval error, hallucination, task underspecification, constraint violation, and eval gap.
**Purpose:** Prevents teams from conflating different failure types or applying single-layer fixes to multi-layer problems. Each failure mode has a different cause and a different remediation strategy.
**See Also:** [Eval Harness Design](#eval-harness-design), [Observability](#observability-ai-traces-cost-tracking-drift-monitoring), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Observability (AI Traces, Cost Tracking, Drift Monitoring)

**Zone(s):** 3
**Summary:** Instrumentation that captures traces of tool calls, inputs, retrieved documents, intermediate outputs, timing, and costs for every AI pipeline interaction. Includes drift alerting when output quality begins to shift.
**Purpose:** Makes AI pipeline behavior visible and diagnosable. Without observability, failures cannot be reliably traced to their cause and improvements cannot be validated. The foundation on which all other Zone 3 practices depend.
**See Also:** [Failure Mode Taxonomy](#failure-mode-taxonomy), [CAT (Continuous Alignment Testing)](#cat-continuous-alignment-testing), [Evals at Scale (Level 4)](#evals-at-scale-separate-generation-from-decisioning--level-4), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Prompt Versioning

**Zone(s):** 3
**Summary:** Prompts are stored in version control, reviewed in pull requests, tested against eval suites, and deployed through pipelines -- treated with the same rigor as application code.
**Purpose:** Eliminates untracked prompt changes as a source of silent regressions. Any change to a production prompt has equivalent or greater impact on system behavior as a code change, and must be subject to equivalent review and testing.
**See Also:** [CAT (Continuous Alignment Testing)](#cat-continuous-alignment-testing), [Eval Harness Design](#eval-harness-design), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Workflows / Orchestration (Separate Generation from Decisioning — Level 3)

**Zone(s):** 3
**Summary:** The third level of the "Separate Generation from Decisioning" framework. Turning raw AI capability into scaled production through pipeline decomposition, failure mode diagnosis, and observability -- the "factory floor" of AI-driven development.
**Purpose:** Operationalizes AI generation at production scale by decomposing tasks into pipelines with defined inputs, operations, verification steps, and outputs. Makes complex AI workflows debuggable and improvable at the stage level.
**See Also:** [Authority (Level 2)](#authority-separate-generation-from-decisioning--level-2), [Evals at Scale (Level 4)](#evals-at-scale-separate-generation-from-decisioning--level-4), [Observability](#observability-ai-traces-cost-tracking-drift-monitoring), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

## Zone 3 Cross-Craft Techniques

Role transformation practices for non-engineering disciplines at Zone 3. These techniques reflect the identity shifts described by the Prime Directive -- PMs, designers, and QA engineers transform their professional practice alongside engineers.

### Behavioral Specification Design (PM)

**Zone(s):** 3
**Summary:** PMs write machine-parseable behavioral specifications that define what AI pipelines must produce, including acceptance criteria expressed as testable assertions, edge case coverage requirements, and behavioral constraints.
**Purpose:** Transforms the PM role from writing user stories for human developers to defining behavioral contracts for AI production pipelines. The quality of specification directly determines the quality of AI-generated output.
**See Also:** [CAT (Continuous Alignment Testing)](#cat-continuous-alignment-testing), [Eval Harness Design](#eval-harness-design), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Specification Encoding (Design)

**Zone(s):** 3
**Summary:** Designers encode design intent into machine-readable specifications -- design tokens, component contracts, layout grammars, and interaction rules -- that AI pipelines consume as constraints during generation.
**Purpose:** Transforms the designer role from producing visual artifacts to encoding design systems as specifications that govern AI output quality. Ensures AI-generated interfaces meet design standards systematically rather than through post-generation review.
**See Also:** [Context Engineering at System Level](#context-engineering-at-system-level), [Conditioning (Level 1)](#conditioning-separate-generation-from-decisioning--level-1), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

### Evaluation Pipeline Specialization (QA)

**Zone(s):** 3
**Summary:** QA engineers design, build, and operate the evaluation pipelines that verify AI-generated output quality: defining eval criteria, building eval harnesses, analyzing eval results for systemic patterns, and improving eval coverage over time.
**Purpose:** Transforms the QA role from testing human-written code to operating the quality infrastructure for AI-generated output. QA becomes the team's authority on what "correct" means for AI pipelines and how to measure it at scale.
**See Also:** [Eval Harness Design](#eval-harness-design), [CAT (Continuous Alignment Testing)](#cat-continuous-alignment-testing), [Failure Mode Taxonomy](#failure-mode-taxonomy), [Zone 3: Accelerating](/toolkit/zone-3-accelerating)

---

## Zone 4 Techniques

Factory-scale AI production. These techniques are less mature than those in earlier zones, as fewer organizations have operated at this level. Some extrapolate Zone 3 practices to industrial scale; others represent newer concepts with limited established implementations. See [Zone 4: Industrializing](/toolkit/zone-4-industrializing) for full context.

### Factory-Level Governance

**Zone(s):** 4
**Summary:** Versioned, tested, reviewed change management processes for all factory components -- models, prompts, tool configurations, pipeline components -- treated with the same rigor as production infrastructure changes.
**Purpose:** Ensures that changes to the AI production system are deliberate, traceable, and safe to roll back. A prompt change that alters factory behavior is a production deployment, not a minor tweak.
**See Also:** [SLA-Based Production Monitoring](#sla-based-production-monitoring), [Zone 4: Industrializing](/toolkit/zone-4-industrializing)

---

### Portfolio-Scale Evaluation Pipelines

**Zone(s):** 4
**Summary:** Zone 3's CAT and eval harness methodology applied at the portfolio level: automated evaluation of all factory output across every artifact for correctness, security, performance, and domain-specific requirements.
**Purpose:** Provides industrial-scale quality assurance that would be impossible through individual code review. Every artifact passes through the same evaluation system; quality does not depend on individual diligence or attention.
**See Also:** [CAT (Continuous Alignment Testing)](#cat-continuous-alignment-testing), [Factory-Level Governance](#factory-level-governance), [Zone 4: Industrializing](/toolkit/zone-4-industrializing)

---

### SLA-Based Production Monitoring

**Zone(s):** 4
**Summary:** Real-time monitoring of factory service-level agreements -- uptime, throughput, defect rate, time-to-resolution -- with defined incident response playbooks for factory-specific failure modes.
**Purpose:** Applies operational discipline to the AI production system itself, treating factory reliability as a production concern with measurable targets and structured response processes when those targets are violated.
**See Also:** [Portfolio-Scale Evaluation Pipelines](#portfolio-scale-evaluation-pipelines), [Factory-Level Governance](#factory-level-governance), [Zone 4: Industrializing](/toolkit/zone-4-industrializing)

---

## Related Documentation

- [Zone 1: Augmenting](/toolkit/zone-1-augmenting) -- Zone reference including Zone 1 proficiency context for the techniques in this catalog
- [Zone 2: Integrating](/toolkit/zone-2-integrating) -- Zone reference including Zone 2 proficiency context
- [Zone 3: Accelerating](/toolkit/zone-3-accelerating) -- Zone reference including Zone 3 proficiency context
- [Zone 4: Industrializing](/toolkit/zone-4-industrializing) -- Zone reference including Zone 4 proficiency context
- [Proficiency Catalog](/toolkit/proficiency-catalog) -- The observable proficiencies that these techniques support and enable
- [Investment Catalog](/toolkit/investment-catalog) -- The organizational investments required to deploy and sustain each technique
- [Quick Reference](/toolkit/quick-reference) -- One-page workshop reference including key vocabulary from this catalog
