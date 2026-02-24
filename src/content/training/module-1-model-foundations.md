---
title: "Module 1: The ACE Model"
description: "Deep understanding of the ACE framework including zones, competency concepts, progressive competency, and organizational investments -- the knowledge foundation for all facilitation skills."
order: 1
duration: "2-day intensive or 8 hours async"
prerequisites: "Module 1 of 6 (prerequisite for all subsequent modules)"
---

**Duration:** 2-day intensive or 8 hours async
**Position in program:** Module 1 of 6 (prerequisite for all subsequent modules)

---

## Learning Objectives

By the end of this module, trainees will be able to:

1. **Articulate the ACE model with clarity and confidence.** Explain the framework's purpose, structure, and key concepts to both technical and non-technical audiences without relying on notes or materials.

2. **Explain the four zones with specific, concrete examples.** Describe each zone's definition, proficiencies, organizational investments, benefits, and techniques using examples grounded in real software development contexts -- not abstract descriptions.

3. **Distinguish competency from knowledge and best-day performance.** Explain why ACE measures habitual behavior under stress rather than theoretical understanding or peak capability, and identify the practical implications for assessment.

4. **Explain the progressive competency model.** Articulate how all four zones form a single linear progression where organizations choose their stopping point based on strategy, risk appetite, and investment capacity, and explain why each zone transition deserves strategic analysis.

5. **Explain why investments must be organizational, not just team-level.** Identify the common failure mode of investing in individuals while leaving the organizational system unchanged, and describe the specific categories of organizational investment required for each zone transition.

---

## Content Outline

### Session 1: Introduction to the ACE Framework

**Origin and purpose.** ACE provides a structured approach to AI adoption that respects organizational context, focusing on habitual behaviors rather than checklist compliance.

**The three problems ACE solves.** Organizations do not know where they are (confusion between individual enthusiasm and organizational capability), where to go (pressure to pursue the highest level rather than the right destination), or how to get there (lack of structured investment planning).

**The engagement model.** Facilitated diagnostic, goal setting, roadmap creation, implementation support, and reassessment. The system is designed to be repeatable -- a continuous improvement cycle grounded in observable behavior.

**What ACE is not.** Not a mandate -- it is a progression where organizations choose their stopping point based on strategic need. Not an audit (it is a facilitated self-assessment). Not a certification or compliance framework. Not a tool recommendation engine.

### Session 2: The Competency Concept

**What competency means.** Habitual behavior under stress. What a team does reliably when conditions are unfavorable -- tight deadlines, production incidents, unfamiliar codebases, organizational pressure.

**The performance under pressure analogy.** A basketball player who drills free throws at 90% in the gym but drops to 50% in a playoff game has skill but not competency. Competency is the performance that holds up when the stakes rise and the conditions deteriorate. Knowledge is necessary but not sufficient for competency.

**Why knowledge is insufficient.** Common knowledge-without-competency patterns: teams that completed training but do not use tools, developers who can explain prompting strategies but default to manual coding under pressure, organizations with documented standards that are not followed.

**Why best-day performance is insufficient.** Assessment based on demos, hackathons, or pilot projects overstates actual capability. ACE assesses what teams do consistently, especially when conditions are least conducive to new practices.

**Four stages within a zone.** Emerging (practicing but inconsistent), Developing (mostly consistent but untested by sustained pressure), Established (habitual and consistent even under stress), Exemplary (can coach others and innovate within the zone). These stages apply within each zone independently.

**Implications for measurement.** Assess what teams do, not what they know. Assess behavior under pressure, not under ideal conditions. Use facilitated self-assessment, not external audit.

### Session 3: Zone 1 Deep Dive -- Augmenting

**Definition.** Individual developers use AI coding assistants habitually in their daily work. The shift is from "AI is unfamiliar" to "AI tools are a normal part of how I work."

**Core metric.** Developers habitually use AI coding tools in their daily work, even under deadline pressure or in unfamiliar codebases.

**Proficiencies.** Walk through engineering proficiencies (inline completion, AI for debugging, mode selection between vibe-coding/CHOP/AI-assisted coding, code review of AI output, test and documentation generation), product management proficiencies (story writing, meeting notes, effective prompting), design proficiencies (ideation, AI-powered design tools), and QA proficiencies (test case generation, bug triage and root cause analysis, test data creation). Note that data science/ML practitioners should participate in Zone 1 adoption alongside other roles -- their existing practices naturally overlap with AI tool usage.

**Organizational investments.** Tool licenses for all roles, clear policies on approved tools and data handling, structured training, removing fear and stigma, practical access (API keys, accounts), guidelines for when AI-generated code needs extra review.

**Techniques.** Inline code completion, chat-based assistants, general-purpose AI assistants, prompt engineering basics, CHOP workflow, vibe-coding for prototyping.

**Benefits.** Faster task completion, reduced blank-page problem, faster onboarding to unfamiliar codebases, reduced boilerplate, more time for higher-value work, democratized coding help, improved written communication.

**Timeline.** Individual habitual usage: 1-3 months. Visible improvements: 2-4 weeks. Organization-wide: 2-6 months. True competency: lags adoption by 1-2 months.

### Session 4: Zone 2 Deep Dive -- Integrating

**Definition.** AI is embedded in team-level delivery workflows. Usage is systematic, not ad-hoc. The team has a shared, evolving agentic setup committed to source control.

**Core metric.** The team ships AI-verified, production-ready code using a shared agentic workflow that all members contribute to and evolve.

**Proficiencies.** Plan/Code/Verify as default workflow, shared AGENTS.md/CLAUDE.md with project context, mandatory feedback loops (compiler, linter, tests), externalized plans for multi-step implementations, context engineering at the project level, rigorous code review of AI output, fresh sessions for PR review, retrospective iteration on agentic setup. PM proficiencies: AI behavioral criteria in stories, retrospective participation, systematic AI use for discovery, definition of done with AI verification.

**Organizational investments.** One Team One Setup mandate, time for infrastructure establishment, tool standardization, quality gate policy, budget integration, workflow training (Plan/Code/Verify specifically), cross-team knowledge sharing, retrospective culture.

**Techniques.** Plan/Code/Verify, shared AI configuration, mandatory feedback loops, Vibe TDD, context management, externalized planning, skills/commands/subagents, pairing modes (Sync & Split, Multi-Tabbed, Dueling Pair), automated PR review, weekly agentic setup retrospective.

**Zone 2 as the competitive baseline.** Every software organization should aim to reach at least Zone 2. An organization that has not reached Zone 2 competency is operating at a structural disadvantage.

### Session 5: Zone 3 Deep Dive -- Accelerating

**The Prime Directive.** "You are no longer writing the code. You are designing the process by which code is produced." The Michelin Star chef analogy -- transitioning from executing each dish to designing kitchens.

**Definition.** AI drives core development work. Humans specify, review, and orchestrate; AI implements. The developer role changes from writing code to designing the process by which code is produced.

**The cross-functional identity shift.** Zone 3 transforms the entire software production pipeline, not just engineering. Explain the parallel transformations: PMs shift from writing feature specs to defining the behavioral envelope of AI systems. Designers shift from producing artifacts to encoding design standards as machine-verifiable factory inputs. QA engineers shift from testing individual outputs to designing evaluation infrastructure. These role transformations are equally essential to the production pipeline -- a factory with excellent engineering pipelines but no machine-verifiable design standards, no quantified behavioral envelopes, and no systematic evaluation infrastructure is incomplete.

**The AI Engineer identity.** This is not a senior developer who uses AI tools. It is a distinct role focused on designing and operating the systems that produce software rather than producing the software directly.

**Core metric.** Engineers operate as process designers, PMs as behavioral specifiers, designers as specification encoders, and QA engineers as evaluation pipeline specialists -- each role defines its respective inputs to the AI production pipeline.

**Key proficiencies.** Continuous Alignment Testing (CAT) pipelines, eval harness design, context engineering at the system level, observability instrumentation, pipeline-level failure diagnosis, prompt versioning, "separate generation from decisioning" patterns (four levels: Conditioning, Authority, Workflows, Evals). QA proficiencies: eval harness design, CAT pipeline ownership, failure mode taxonomy, acceptance thresholds. Design proficiency: encoding design standards as machine-verifiable pipeline inputs.

**Organizational investments.** Creating the AI Engineer role, team budget authority for experimentation, CAT in the definition of done, AI observability infrastructure, prompt versioning practices, dedicated pipeline improvement time, cross-functional training, organizational tolerance for non-determinism.

**Why Zone 3 requires careful evaluation.** Zone 3 requires structural changes that are expensive, difficult to reverse, and disruptive. Appropriate only when volume, velocity, or complexity justifies restructuring how engineering work is organized. The same strategic analysis framework applies here as at every zone transition.

### Session 6: Zone 4 Deep Dive -- Industrializing

**The factory metaphor.** The organization operates an AI-first software factory. Engineers maintain the factory, PMs define portfolio-level production targets, designers own the factory's specification layer, and QA engineers operate the evaluation infrastructure; AI produces the software. The shift from craft production to industrial production.

**Maturity of practice.** Zone 4 practices are less mature than those in earlier zones. The proficiencies represent the current understanding of what competency at this level looks like and will evolve as more organizations operate at this level.

**Core metric (working formulation).** The organization can reliably specify, produce, evaluate, and deploy AI-generated software at scale, with all production roles operating in their factory functions -- engineers as factory designers, PMs as portfolio-level specifiers, designers as specification layer owners, and QA as evaluation infrastructure operators.

**Key proficiencies.** Engineers design and maintain the AI production pipeline as their primary job function, systematic governance for AI system changes, factory-level failure diagnosis and repair, evaluations at scale, model/prompt/tool changes as factory maintenance events, defined SLAs for AI production reliability. Design proficiencies: factory design specification layer ownership, portfolio-scale design compliance verification. QA proficiencies: factory evaluation infrastructure operations, factory-level quality SLAs, drift detection program design and execution.

**Organizational investments.** Fundamental reorganization around AI production, factory infrastructure investment, governance and compliance frameworks for AI production, factory-floor metrics and reporting, risk management for AI production at scale, cross-functional rotation programs, external audit mechanisms.

**When Zone 4 is the right target.** Most organizations will find their optimal stopping point at Zone 2 or Zone 3. Zone 4 is appropriate for organizations where software production volume is a strategic differentiator, and the organization is prepared for a multi-year cultural transformation.

### Session 7: The Progressive Competency Model

**A single linear progression.** All four zones form a single path: Zone 1 -> Zone 2 -> Zone 3 -> Zone 4. Each zone builds on the capabilities and habits of the previous one. Organizations choose how far along this path to travel.

**Choosing your stopping point.** The right zone is the one that matches your strategic context. Zone 2 is the typical near-term target for most organizations -- the competitive baseline. Zones 3 and 4 require progressively larger investments justified by strategic context. A deeply competent Zone 2 organization that chose its destination through careful analysis is in a stronger position than a Zone 4 organization that overextended.

**The climbing metaphor.** Think of the zones like camps on a mountain. Base camp (Zone 1) and Camp 1 (Zone 2) are destinations every expedition reaches. Camp 2 (Zone 3) and the summit (Zone 4) require progressively more resources, preparation, and risk tolerance. Not every expedition needs to summit -- the right altitude depends on your objective.

**Strategic analysis at every transition.** Every zone transition -- not just the later ones -- involves investment decisions that deserve analysis. The investments grow at each step, and the analysis should grow with them.

**Factors for zone targeting.** Risk appetite, investment capacity, strategic need, current competitive position. These are explored in depth in Module 3.

### Session 8: Organizational Investments vs. Team Training

**The common failure mode.** Organizations approach AI adoption as a training problem, investing in individuals while leaving the organizational system unchanged. The pattern is predictable: enthusiastic individuals adopt tools, encounter organizational friction, and either abandon the tools or use them in isolated, sub-optimal ways.

**Why team-level training fails without organizational support.** Teams can learn new practices but cannot sustain them if the organizational environment works against those practices. The organizational system -- policies, tools, processes, incentives, management behavior -- determines what behaviors are sustainable.

**What "organizational investment" means.** Structural changes, policy changes, resource allocation, and management behavior. Each dimension must be addressed for a zone transition to succeed.

**Zone-specific failure patterns.** Zone 1: individual use blocked by organizational friction. Zone 2: teams cannot systematize without infrastructure support. Zone 3: engineers cannot transform without role restructuring. Zone 4: strategic AI requires executive commitment.

**The investment ROI framing.** Each zone transition has identifiable costs and returns. The investment case must be made to management, not just to teams.

### Session 9: How ACE Differs from Maturity Models

**The maturity model problem.** Traditional maturity models (CMMI, various AI maturity frameworks) present levels as a linear hierarchy where higher is always better. This creates pressure to climb levels for prestige rather than business value.

**Key distinctions.** ACE uses zones, not levels. Zones are destinations, not ranks. The diagnostic is a facilitated self-assessment, not an external audit. Competency is measured by habitual behavior, not knowledge or peak performance. Zone targeting is a strategic choice, not an aspirational goal.

**Common misframings to watch for.** "We need to be at the highest zone." "We failed because we are only at Zone 2." "Zone 3 is better than Zone 2." Facilitators must be prepared to reframe these conversations consistently.

---

## Learning Activities

### Activity 1: Zone Gallery Walk

**Format:** Small group exercise, 45 minutes

Trainees receive 6-8 brief organizational descriptions (1-2 paragraphs each) that describe real-world patterns of AI usage in software development. Working in pairs, trainees:

1. Read each description and identify the organization's current zone and approximate competency stage.
2. Note specific evidence from the description that supports their assessment.
3. Identify what would need to change for the organization to advance to the next zone.

Pairs then share their assessments with the full group. The facilitator guides discussion around disagreements, emphasizing that zone identification requires looking at habitual behavior, not aspirations or peak performance.

**Example scenarios include:** A startup where every developer uses Copilot but each has a different setup and there are no shared practices. An enterprise where one team has an impressive AGENTS.md but other teams have not adopted it. A consulting firm where engineers describe themselves as "AI Engineers" but still write most implementation code manually.

### Activity 2: "Is This Competency?" Case Studies

**Format:** Full group discussion, 30 minutes

The facilitator presents 8-10 short vignettes (2-3 sentences each) describing team behaviors. For each vignette, trainees vote: "This is competency" or "This is not competency." The facilitator then leads discussion about each answer.

**Example vignettes:**

- "The team uses AI tools during every sprint, but when a production incident occurs, they revert to manual debugging because 'there is no time to mess with AI.'" (Not competency -- abandoned under stress.)
- "A developer uses Copilot daily and finds it faster for most tasks. When the internet goes down, she works without it but noticeably slows down." (Competency -- the habitual use is clear; inability to use tools when unavailable is not a competency issue.)
- "The team completed an AI workshop last month and all members can demonstrate effective prompting techniques. Usage in daily work is sporadic." (Not competency -- knowledge without habitual practice.)
- "The team has AGENTS.md committed to the repo, but it was written by one senior engineer six months ago and has not been updated since." (Not competency at Zone 2 -- not a shared, evolving practice.)

### Activity 3: Investment Analysis Exercise

**Format:** Small group exercise, 40 minutes

Each small group (3-4 trainees) receives a scenario describing an organization attempting a zone transition that is stalling. The scenario includes details about what training has been provided, what tools are available, and what organizational structures are in place.

Groups must:

1. Identify which organizational investment categories are missing or insufficient.
2. Classify each missing investment as structural, policy, resource, or management behavior.
3. Draft a brief recommendation for what the organization needs to invest in to unblock the transition.

Groups present their analysis to the full cohort. The facilitator highlights patterns: the most common missing investment is management behavior (leaders who sponsor in name only), followed by policy changes that have not been made.

### Activity 4: Peer Teaching

**Format:** Individual presentation with group feedback, 60 minutes

Each trainee is assigned one zone (1-4). They have 20 minutes to prepare a 5-minute explanation of their assigned zone, targeted at a non-technical executive audience. The explanation must cover: what the zone is, what it requires, what it delivers, who should target it, and **why an organization should or should not choose this zone as their destination**. Every presentation, regardless of assigned zone, must address why an organization should or should not choose this zone as their stopping point, and how the progressive competency model applies to that zone's position in the progression. Trainees assigned Zone 1 or 2 should explain why these zones represent the typical near-term path. Trainees assigned Zone 3 or 4 should explain what strategic conditions justify progressing this far and why stopping earlier may be the right choice.

After each presentation, the group provides feedback on:

- Accuracy: Did the trainee represent the zone correctly?
- Clarity: Would a non-technical executive understand the explanation?
- Framing: Did the trainee avoid maturity-model language (e.g., "better" or "more advanced")?
- Concreteness: Did the trainee use specific examples rather than abstract descriptions?
- Progressive competency: Did the trainee correctly position their zone within the single-path progression? Did they explain why organizations might choose this zone as their stopping point? Did they avoid maturity-model language?
- Cross-role inclusivity: Did the trainee address how non-engineering roles (PM, design, QA) participate at this zone? Especially for Zone 3 and Zone 4, did they describe the parallel role transformations, not just the engineering identity shift?

This activity serves a triple purpose: it tests zone understanding, it practices the communication skills facilitators need when working with organizational leadership, and it ensures every trainee articulates the progressive competency model regardless of which zone they present.

---

## Assessment

### Written Reflection

**Format:** Take-home, 2-3 pages

Describe a real or hypothetical organization at each of the four zones. For each zone, identify:

- Specific observable behaviors that indicate the zone and competency stage
- The organizational investments that support (or are missing for) the current state
- What would need to change for the organization to advance (or why it should not advance)

Trainees may use a single organization progressing through zones, or four different organizations each at a different zone. The assessment evaluates the trainee's ability to apply zone definitions to concrete situations and reason about investments and progression.

### Case Study Quiz

**Format:** In-session or take-home, 45 minutes

Given 4-6 organizational descriptions (longer and more detailed than the gallery walk scenarios), trainees must:

1. Identify the organization's current zone and competency stage with supporting evidence.
2. Identify the most likely target zone given the organizational context described.
3. Identify the top 3 organizational investments required to reach the target zone.
4. Identify one common pitfall the organization should watch for during the transition.

Scoring emphasizes reasoning quality over specific answers. Multiple reasonable zone assessments may be acceptable if well-supported.

---

## Preparation for Module 2

After completing Module 1, trainees should:

- **Retrieval exercise (do this first, from memory, before looking at any materials):** Without consulting any notes or documents, write down: (a) the definition of competency as used in the ACE framework, (b) the four zones in order with a one-sentence description of each, (c) the four competency stages within a zone, and (d) three differences between ACE and a traditional maturity model. After writing your answers from memory, check them against the Module 1 materials and note what you got wrong or incomplete.
- Review the diagnostic questionnaire instruments for all zones.
- Read the facilitation notes included with each questionnaire.
- Reflect on their own experience being assessed or assessed by others -- what made assessments feel safe and productive vs. threatening and performative?

Module 2 builds directly on Module 1's knowledge foundation by applying it to the specific skills of diagnostic facilitation.

---

## Related Documentation

- [What Is ACE?](/toolkit/what-is-ace/)
- [Competency vs. Knowledge](/toolkit/competency-vs-knowledge/)
- [Progressive Competency Model](/toolkit/progressive-competency-model/)
- [Organizational Investments](/toolkit/organizational-investments/)
- [Zone 1 Reference](/toolkit/zone-1-augmenting/)
- [Zone 2 Reference](/toolkit/zone-2-integrating/)
- [Zone 3 Reference](/toolkit/zone-3-accelerating/)
- [Zone 4 Reference](/toolkit/zone-4-industrializing/)
