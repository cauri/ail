---
title: "Module 6: Embedded Delivery and Mentoring"
description: "How to deliver software alongside client teams as an embedded Practitioner — building AI-ready engineering habits and agentic development capability through paired delivery, fast feedback loops, and shoulder-to-shoulder craft."
order: 6
duration: "1-day intensive or 5 hours async"
prerequisites: "Deep craft expertise in engineering, product management, or design; familiarity with AIL zones and the progressive competency model (Module 1 recommended)"
---

**Duration:** 1-day intensive or 5 hours async
**Position in program:** Module 6 of 6 (companion to [Module 5: Facilitator-Led Assessment and Coaching](/training/module-5-coaching-engagement/); see [Program Overview](/training/program-overview/) for full program structure)

---

## Learning Objectives

By the end of this module, Practitioners will be able to:

1. **Operate as an effective embedded team member from day one.** Join a client team, build trust quickly, understand the existing codebase and workflow, and begin contributing to delivery within the first week -- while establishing the pairing relationships through which all mentoring will happen.

2. **Mentor through paired delivery rather than instruction.** Pair with client team members on real stories, rotating pairs every few days to spread knowledge across the team. Demonstrate practices -- TDD, Plan/Code/Verify, context engineering, continuous integration, collaborative design -- through the shared work rather than through workshops or training sessions. Recognize when to drive, when to navigate, and when to step back as the client team member's competency develops.

3. **Maintain the capability-building purpose throughout delivery.** Distinguish embedded delivery from staff augmentation. The engagement has two pillars -- build a product and build a capability -- and both must be served simultaneously. Continuously assess whether the work is building client team competency or simply getting features shipped. Adjust the approach when delivery pressure threatens to overwhelm the mentoring purpose.

4. **Collaborate effectively across crafts within the embedded team.** Work as an integrated cross-craft team -- Engineering, Product, and Design -- where each Practitioner mentors within their discipline while operating as part of a unified delivery team. Coordinate mentoring approaches across crafts to ensure the client team builds capability holistically.

5. **Plan and execute ramp-down based on competency evidence.** Recognize the signals that indicate a client team member is ready to take ownership of a practice. Shift gradually from driving to navigating to observing. Coordinate with the AIL Facilitator to ensure ramp-down timing aligns with re-diagnostic evidence.

6. **Embody the values that make embedded work effective.** Mastery: pursue continuous improvement in your own craft, not just the client's. Humanity: put the client team's success ahead of your own comfort or ego. Courage: be transparent with clients even when the message is difficult. Iteration: improve the software, the process, and the engagement itself in constant small steps.

---

## Content Outline

### Session 1: The Embedded Delivery Model

**What embedded delivery means.** Practitioners join the client team as full members. This is not advisory work where you observe, diagnose, and recommend. You work the same backlog. You attend the same standups. You write production code, design real features, manage actual product work -- alongside the client team. The distinction between "your work" and "their work" should dissolve quickly. The mentoring happens through the work, not alongside it.

the organization's embedded model serves two purposes simultaneously:
- **Build a Product** -- deliver working software that matters to the client's business
- **Build a Capability** -- teach the client team how to build great software themselves through the shared work

Both purposes operate concurrently. An engagement that only ships code without building capability has failed. An engagement that only mentors without shipping has no credibility. The integration of delivery and capability building is what makes embedded work effective.

**Why embedded delivery works for competency building.** The AIL framework defines competency as habitual behavior under pressure. Habits form through repeated practice in real conditions, not through training sessions. When an Practitioner pairs with a client engineer on a real story under real deadline pressure, the client engineer experiences the practice in the environment where they need to sustain it. Transfer of training is not an issue because there is no transfer -- the practice is built in place.

This is the organization's foundational insight: the pairing IS the training. "Shoulder-to-shoulder building" is how practices transfer -- not through workshops followed by hope that the team applies what they learned, but through doing the actual work together until the practice becomes habitual.

**The Practitioner team composition.** An embedded Practitioner team is a balanced, cross-craft team sized to the engagement. the organization's three core crafts -- Engineering, Product, and Design -- work together as an integrated unit. A typical composition for a single client team might be 2-3 Practitioner Engineers, 1 Practitioner Product Manager, and 1 Practitioner Designer. The specific composition depends on the client team's needs identified during Discovery and Diagnostic phases. Larger engagements scale accordingly.

**Essential practices for agentic development.** AI agents need specific engineering infrastructure to produce reliable code at scale. They need immediate feedback loops to catch errors (test-driven development). They need generated code validated against the full codebase on every change (continuous integration). Capability transfer between Practitioners and client teams happens through doing the actual work together (pair programming). And tight iteration cycles reduce the blast radius of agent errors (small iterations delivering value without delay). These practices are not process for process's sake -- they are the engineering discipline that makes agentic development safe and reliable. Without the humans on the team understanding these basics, they will struggle to master AI-assisted development regardless of how sophisticated the tooling becomes. Most client teams begin at Zone 0 or Zone 1, which means the Practitioner's first job is often establishing these foundational disciplines through the shared work -- not jumping to advanced agentic workflows before the team has the engineering habits to sustain them. Every Practitioner is expected to practice and mentor within this discipline, introducing these practices through paired work on real stories.

**The agentic coding mindset.** Practitioners bring a specific philosophical orientation to AI-augmented development, grounded in whinternally calls the Prime Directive: *You are no longer writing the code. You are designing the process by which code is produced.* This is not a diminishment of engineering craft -- it is an elevation from builder to architect, from executing to orchestrating. Ownership and accountability remain with the engineer; what changes is the nature of the work. The engineer's job becomes process design: every failure is a signal, every success is a pattern to reinforce, and the goal is building a system that reliably produces correct code.

This mindset is supported by the organization's Principles of Agentic Coding -- a set of foundational principles that guide how Practitioners work with AI tools and how they teach client teams to work with them:

- Embrace the current pace of change -- agentic coding is not a one-time skill; it requires continual reconsideration of how software is built
- Agents are the means to generate and manipulate software -- prompting models is the primary way to generate, understand, and update code
- Use less harness with each model release -- as models improve, less scaffolding is needed
- Context engineering matters -- getting the right data at the right time before inference determines output quality
- Direct feedback loops are how agents generate working software -- compiler, linter, and tests are the agent's guardrails
- Plans are how agents generate working software -- producing and reviewing plans before implementation leads to better outcomes
- The cost of generating software is rapidly decreasing -- which shifts value toward deciding what to build and comprehending what was built
- Software exists on a continuum from "it works" to "I must understand how it works"
- Better architecture means less comprehension is needed -- a well-modularized codebase with a functional core and imperative shell contains more guardrails for agents

These principles are not theoretical -- they are what Practitioners practice daily and what they introduce to client teams through the shared work. When an Practitioner pairs with a client engineer, these principles inform every decision: why the Practitioner writes the plan before prompting the agent, why the Practitioner insists on running tests before each commit, why the Practitioner structures the AGENTS.md as signposts rather than exhaustive rules.

**Practitioner preparation.** Before joining client engagements, Practitioners complete structured internal training through [AIL Academy](/training#ail-academy) -- an intensive, hands-on program that covers agent-ready environments, agentic coding workflows, tool calling, orchestration, evaluation, and multi-agent systems. Academy ensures that Practitioners have built habitual competency — the same standard AIL applies to client teams — in the practices they will demonstrate through embedded delivery. This training is engineering-first (no slide decks, no passive learning -- participants build working systems) and establishes the baseline expertise every Practitioner brings to embedded work. The Academy ensures that when an Practitioner joins a client team, they bring tested practices, not just theoretical knowledge.

The Academy program includes: setting up and configuring agent-ready development environments from scratch; building working agentic coding pipelines (Plan/Code/Verify, feedback loops, AGENTS.md configuration) on real codebases; implementing tool calling and orchestration patterns; designing and running eval harnesses; and working with multi-agent systems. Each module culminates in a working deliverable — not a quiz or presentation, but a functioning system that demonstrates the Practitioner's ability to apply the practice under realistic conditions. Readiness to join client engagements is assessed through practical demonstration: the Practitioner must show that they can set up a client team's agentic workflow from a standing start, pair effectively with engineers at varying skill levels, and diagnose common pipeline failures. The Academy is continuously updated as tooling and best practices evolve — what is taught reflects what Practitioners will encounter in current engagements, not a static curriculum.

![VA-13: Engagement Lifecycle](/images/engagement-lifecycle.svg)

**How embedded delivery relates to the AIL engagement.** Collaborative Delivery does not wait for the assessment track to complete. In many engagements, Practitioners begin embedding during Discovery -- working alongside the team to assess their actual engineering discipline (testing habits, pairing comfort, integration practices, iteration cadence) while simultaneously getting the team "AI-ready" by introducing the XP fundamentals that Zone 2 requires. Most client teams start at Zone 0 or Zone 1, which means this foundational capability-building work is immediately valuable and does not depend on diagnostic results or a finalized roadmap. The Practitioner's direct observations of the team during this early period also provide first-hand observational signal that complements the Facilitator's diagnostic. As the assessment track produces the diagnosis and roadmap, the Practitioner team's focus sharpens from general XP discipline-building to the specific zone-transition goals the roadmap identifies. The AIL Facilitator continues to run the assessment layer -- check-ins, retrospectives, re-diagnostics -- while the Practitioner team focuses on delivery and mentoring. The Facilitator and the Practitioner team lead coordinate regularly but maintain distinct roles.

### Session 2: Pairing and Pair Rotation

**Pairing is the core mechanism.** One Practitioner pairs with one client team member on real work. This is not occasional pairing when it is convenient -- it is the default working mode. The Practitioner and client team member share a screen (or sit at the same workstation), work the same story, and produce code (or designs, or product decisions) together. The Practitioner demonstrates the practices -- TDD, Plan/Code/Verify, context engineering, continuous integration, well-factored code -- through the act of doing them. The client team member absorbs the practices through participation, not instruction.

**Agentic pairing modes.** Pairing with AI agents is not the same as traditional pair programming. The AIL program has developed four named pairing modes, each suited to different situations and pair dynamics. Practitioners should be fluent in all four and introduce them to client teams based on context:

- **Traditionalist:** One person drives (prompting agents and guiding their work), the other watches changes in realtime, reviewing and discussing. The reviewer's verify step begins immediately as code appears. Traditional techniques like ping-pong and pomodoro still apply -- remember to swap roles. *Well suited for: strong traditional driver/navigator pairs; senior-with-junior pairings.* This is the closest to classical pair programming and is often the starting mode for client engineers new to agentic coding.
- **Sync & Split:** The pair meets to plan the work together. Each developer then pairs with their own agent to code the planned tasks independently on their own machines. The pair reconvenes to verify -- reviewing, shipping, reworking, or discarding code. *Well suited for: independent types; pairs with opposite preferences (e.g., multitasking vs. single-threaded).*
- **Multi-Tabbed:** The pair works off one machine, rotating between multiple tabs where agents are working on isolated tasks. They verify and continue prompting each agent before moving to the next tab. No waiting -- if one agent is working, open a new tab. *Well suited for: multitaskers who thrive on parallelism.*
- **Dueling Pair:** Both developers are on the same call. One focuses on the code being output by agents. The other focuses on tweaking the agentic setup (AGENTS.md, prompts, context, skills) to improve the next iteration. *Well suited for: collaborative senior/senior pairs where both can contribute at a meta-level.*

Early in the engagement, the Practitioner typically introduces the Traditionalist mode first -- it is the most accessible for engineers new to agentic pairing. As the client engineer builds comfort, the Practitioner introduces other modes and helps the pair find which mode fits their working style. The choice of mode is a team decision, not a mandate.

**Rotating pairs to spread knowledge.** Every few days, all engineers switch pairs. An Practitioner who paired with Client Engineer A on Monday through Wednesday pairs with Client Engineer B on Thursday. This rotation serves multiple purposes: it ensures that knowledge spreads across the entire team rather than concentrating in one relationship; it exposes every client team member to the Practitioner's practices; it prevents unhealthy dependency on a single pairing partner; and it gives both the Practitioner and the client engineer fresh perspectives on different parts of the codebase.

Pair rotation also serves as a natural assessment mechanism. When an Practitioner rotates to a new partner, they can observe whether the practices they introduced with the previous partner have persisted -- whether the previous partner continues TDD and Plan/Code/Verify when working with someone else, or whether those practices only appeared when the Practitioner was present. This distinction between "practices when observed" and "practices when autonomous" is the difference between the Emerging stage and genuine competency.

**The progression: drive, pair, observe, hand off.** Mentoring through embedded delivery follows a natural progression:
- **Drive:** The Practitioner drives the work while the client team member navigates and participates. This is where new practices are introduced through demonstration.
- **Pair:** The Practitioner and client team member alternate driving as equals, with the Practitioner available to guide when needed. This is where the client team member begins building the habit.
- **Observe:** The client team member drives while the Practitioner observes, intervening only when necessary. This is where the Practitioner assesses whether the practice is becoming habitual.
- **Hand off:** The client team member owns the practice independently. The Practitioner monitors from a distance and is available for questions.

This progression happens per-practice, not per-person. A client engineer might be at "hand off" on TDD while still at "pair" on context engineering. The Practitioner tracks each practice independently.

**Introducing core practices through the work.** Practitioners do not schedule training sessions. They demonstrate practices by doing them. On day one, the Practitioner writes the first failing test when they sit down to pair. They demonstrate the red-green-refactor cycle on a real story. When working with AI tools, they show the discipline in practice: write a failing test, prompt the agent to write the simplest code to pass it, review what the agent produced, refactor, repeat.

The six core principles that Practitioners introduce through practice -- not as a lecture, but as the way they work -- are:

1. **AI-first, human-verified** -- Start every task with an agentic coding tool. Review before merge.
2. **Don't edit code directly** -- Resist the urge to manually fix source code. If the agent produces something wrong, iterate on prompts, context, or guardrails until it gets it right. Every manual fix is a missed opportunity to improve the pipeline.
3. **Feedback loops are mandatory** -- Compiler + Linter + Tests = the agent's guardrails. The agent must be able to and required to run them for every change.
4. **Context over commands** -- Well-structured prompts with relevant files beat elaborate command libraries.
5. **Meta-prompt relentlessly** -- Use agents to improve your prompts, AGENTS.md files, and workflows. When something goes wrong, ask: "How could I have prompted you to get this right the first time?"
6. **One pipeline, shared by all** -- The code-production pipeline must be designed into the project and committed to the repo. AGENTS.md, skills, commands, and guardrails are team infrastructure, not personal preference.

These principles are introduced organically -- not recited as a list but demonstrated through the pairing. The client engineer sees the Practitioner resist manually editing a file and instead iterate on the prompt. They see the Practitioner set up a pre-commit hook that requires the agent to run tests. They see the Practitioner add a rule to the AGENTS.md only after the agent makes the same mistake twice. The principles become visible through behavior.

**Sane defaults.** Practitioners bring a tested set of tooling recommendations as a starting point for teams new to agentic development. These "sane defaults" have been validated across multiple engagements and provide a minimum viable setup: a recommended LLM provider and model, an agent harness, a skills protocol for repeatable operations, lightweight issue tracking that lives alongside the code, and documentation lookup tools that minimize token usage. Practitioners also bring guidelines for AGENTS.md -- keeping it concise (~100 lines, used as "signposts" that point to key files, patterns, and conventions rather than exhaustive rule sets), and adding rules only when the agent repeatedly makes the same mistake. These defaults are recommendations, not mandates -- the team can and should adapt them to their context. But starting from a tested baseline is faster than starting from a blank page.

**Recognizing when to intervene and when to let struggle happen.** Learning requires productive struggle -- this is a core tenet of the organization's teaching philosophy. Comfort is not the optimal state for learning; mild difficulty is. A client engineer who is working through a Plan/Code/Verify cycle slowly and imperfectly is learning. An Practitioner who jumps in to "fix" the plan is taking the learning away. When you feel the urge to intervene, pause and ask yourself: is this person stuck in a way that won't resolve, or are they building competency through effort? Err on the side of letting the struggle continue -- premature rescue is the most common Practitioner mistake.

When you do intervene, apply the same Judgement Before Revelation pattern used in workshops: prompt the client engineer for their reasoning first ("What are you trying to accomplish with this prompt?" or "What failure mode are you trying to prevent?"), surface their thinking, then reveal your approach and ground it in the specific problem it solves. This makes the intervention a learning moment rather than a correction.

**Supplementary workshops and the organization's teaching pedagogy.** While pairing is the primary mechanism, interactive workshops can complement the daily work -- covering topics like AGENTS.md design, eval harness architecture, or Plan/Code/Verify workflow design at a team level. When Practitioners run these workshops, they follow the organization's teaching methodology: *Judgement Before Revelation.*

The core loop is: **Prompt** (ask participants to articulate their reasoning) → **Surface** (acknowledge multiple perspectives from responses) → **Reveal** (show the actual approach or implementation) → **Ground** (name the failure mode it addresses or the problem it solves). This loop repeats across each topic within the workshop, building transferable judgment rather than familiarity with a single example.

Three commitments guide every workshop:

1. **Always prompt for learner reasoning before showing your solution.** Before showing how to structure an AGENTS.md, ask: "What would you include, and why?" Before showing an eval harness, ask: "What failure mode would you worry about first?" Give participants 30-60 seconds to respond. Only after responses appear should you reveal the actual approach.
2. **Treat responses as perspectives to compare, not answers to grade.** One proposal may focus on agent reliability; another on team workflow; another on code quality guardrails. Name what each captures and what it leaves out. This shows that most technical decisions involve trade-offs and scope choices.
3. **Ground every concept in its purpose.** What problem does this solve? What failure does this prevent? This keeps practices grounded in behavior and risk rather than abstraction.

What Practitioners do NOT do in workshops: no slide decks (passive consumption creates the illusion of understanding without learning), no upfront learning objectives (productive struggle is what makes things stick -- outlining everything upfront removes that struggle), and no exercises disconnected from the team's actual codebase. The team works on their own code, their own AGENTS.md, their own workflow. Every workshop should produce a takeaway artifact -- a principles list, a checklist, an updated configuration -- something the team leaves with that reminds them of the work they did, not just the content they heard.

The pattern: *Don't make it easy to learn. Make them do. Then give them something to remember doing it.*

Workshops supplement the pairing; they do not replace it.

**Mentoring across crafts.** Practitioner Engineers mentor engineering practices: TDD, pair programming, Plan/Code/Verify, context engineering, AI-aware code review, VTDD, feedback loop configuration, continuous integration discipline. Practitioner Product Managers mentor product practices: writing AI-verifiable acceptance criteria, incorporating AI into user research, participating in agentic workflow retrospectives, lean product development. Practitioner Designers mentor design practices: collaborative design with AI tools, design system integration with agentic workflows, user-centered iteration. Each Practitioner mentors within their discipline, but the team operates as an integrated delivery unit -- the same way a well-functioning balanced team naturally works.

### Session 3: Staff Augmentation vs. Capability Building

**The critical distinction.** Staff augmentation increases capacity. Capability building increases competency. Embedded delivery looks like staff augmentation from the outside -- extra people doing work. But the purpose is different: every piece of work an Practitioner does should be building the client team's ability to do that work independently. If the Practitioner team is simply shipping features without transferring capability, the engagement has devolved into staff augmentation regardless of what it is called. The goal is always to leave the client with a culture of craft -- the practices, the discipline, and the habits to build great software on their own.

**The daily test.** At the end of each day, each Practitioner should be able to answer: "Is the client team more competent today than they were yesterday?" If the answer is consistently "no -- I just shipped code," the mentoring purpose is being lost. This does not mean every interaction must be a teaching moment. Sometimes delivery urgency requires the Practitioner to move fast. But the overall pattern should show clear capability transfer. The pairing and pair-rotation model is the primary mechanism for ensuring this -- if pairing is happening and pairs are rotating, capability transfer is the natural result.

**When delivery pressure threatens the mentoring purpose.** Client teams face real deadlines. When a sprint is behind, there is enormous pressure to have the Practitioners "just do the work" rather than pair through it. Practitioners must resist this pressure while remaining pragmatic. The response is not "I will not help with the deadline" -- it is "I will help with the deadline AND maintain the pairing structure." This requires courage -- one of the core values. Being transparent with the client about why the pairing matters, even when the deadline is tight, is more honest than quietly dropping the mentoring to ship faster.

**Signals that the engagement is drifting toward staff augmentation.**
- Client team members stop joining pairing sessions because "the Practitioner can handle it"
- Pairs stop rotating because "it is more efficient to stay put"
- The backlog is tacitly split into "Practitioner stories" and "client stories"
- Client team members are not demonstrably more competent than they were at the start of the engagement
- The engagement has no ramp-down plan or the ramp-down keeps getting delayed
- Delivery metrics improve while competency diagnostic scores do not

When these signals appear, the Practitioner team lead should raise them with the AIL Facilitator and the engagement sponsor. This requires courage and transparency -- naming the drift honestly without framing it as a failure. It is a course correction, and earlier is better.

### Session 4: Ramp-Down Planning and Execution

**When to begin ramp-down.** Ramp-down planning should begin when re-diagnostic evidence shows that client team members are building genuine competency in the practices the Practitioners introduced. "Genuine competency" means the practices are becoming habitual -- present under pressure, not just on good days. The AIL Facilitator's re-diagnostic results are the primary evidence source, supplemented by the Practitioner team's day-to-day observations.

**How ramp-down works.** Ramp-down is practice-by-practice and person-by-person, not a bulk transition. As specific client team members demonstrate competency in specific practices, the Practitioner shifts from "pair" to "observe" to "available for questions" on those practices. The Practitioner's time on the team gradually decreases as the client team takes ownership of more practices.

A typical ramp-down might look like:
- Month 1-6: Full Practitioner team embedded, working alongside client team
- Month 7-9: Practitioner team reduces to 60-70% of original staffing; senior Practitioners observe more, pair less
- Month 10-12: Practitioner team at 30-40%; primarily available for questions and occasional pairing on advanced practices
- Month 12+: Practitioner team departs; AIL Facilitator conducts final re-diagnostic to confirm sustained competency

**The final re-diagnostic.** The engagement should not conclude until at least one re-diagnostic cycle has been completed after the Practitioner team's ramp-down. This is the evidence that the client team sustains competency independently. If the final re-diagnostic shows regression, the ramp-down was premature, and the Practitioner team should re-engage temporarily.

**Leaving a culture of craft.** The goal of every engagement is that the client team can "build great software long after we're gone." Ramp-down is successful when the practices the Practitioners introduced are self-sustaining -- when the team does TDD not because the Practitioner is watching, but because it's how they work. When pair programming continues because the team values it, not because the rotation schedule requires it. When the AGENTS.md is maintained because the team sees its value, not because the Practitioner reminds them. The culture of craft must become the client team's own.

**Handing off to the AIL Facilitator.** The Practitioner team's observations about client team competency development should be shared with the AIL Facilitator throughout the engagement. At ramp-down, the Practitioner team lead provides the Facilitator with a detailed assessment of each client team member's practice-by-practice competency status. This informs the Facilitator's final re-diagnostic and any ongoing assessment after the Practitioner team departs.

### Session 5: Relationship Management as an Embedded Team Member

**Building trust quickly.** Practitioners must earn the client team's trust before mentoring can be effective. Trust is built by demonstrating competence in the work itself -- not by talking about credentials or past engagements. The first week of an embedded engagement should focus on contributing to the team's actual work, understanding the codebase and domain, and showing that the Practitioner is there to help, not to judge or impose. the organization's values provide the foundation: **Mastery** (devoting yourself to your craft and continuously improving through the work), **Humanity** (supporting each other and putting the team's success first), **Courage** (being transparent with clients, facing difficult situations honestly), and **Iteration** (constantly making small improvements to software, process, and the team itself). These are not slogans -- they are the behaviors that earn trust.

**Embracing the humility of consulting.** Practitioners "care passionately about their craft, embrace the humility of consulting, and consider themselves evangelists for software best practices." The humility matters. The client team knows their domain, their codebase, and their organizational constraints better than the Practitioner ever will. The Practitioner brings craft expertise and fresh perspective; the client team brings context and institutional knowledge. Respect for that balance is what distinguishes a trusted partner from an arrogant consultant.

**Navigating the mentor-colleague dynamic.** Embedded Practitioners occupy a unique position: they are simultaneously colleagues (working the same backlog) and mentors (intentionally building the client team's competency). This dual role requires sensitivity. An Practitioner who acts only as a mentor comes across as condescending. An Practitioner who acts only as a colleague misses the capability-building purpose. The balance shifts over time -- more mentoring-like in early stages, more colleague-like as the client team builds competency.

**Handling resistance to change.** Some client team members will resist the practices the Practitioner introduces -- not out of malice, but because change is uncomfortable and the existing workflow is familiar. The Practitioner's response is not to argue for the practice but to demonstrate it. When a client engineer sees that Plan/Code/Verify produces better results on a real story, the resistance often dissolves. When it does not, the Practitioner should surface the resistance to the Practitioner team lead and the AIL Facilitator as a coaching input, not as a performance problem.

**Giving honest feedback about competency development.** Practitioners are responsible for honest assessment of how each client team member is progressing. This feedback flows to the Practitioner team lead and, in appropriate form, to the AIL Facilitator. It does not flow directly to client management unless the engagement structure explicitly includes that reporting path. The same confidentiality principles that protect diagnostic results protect the Practitioner's observations about individual team members.

---

## Learning Activities

### Activity 1: Embedded Onboarding Simulation

**Format:** Pairs role-play exercise, 45 minutes

One trainee plays an Practitioner Engineer joining a client team for the first time. The other plays a senior client engineer using a persona card. The persona card describes: a client engineer who is individually competent with AI tools (Zone 1 Established) but skeptical about team-level practices like shared AGENTS.md and Plan/Code/Verify, having had a bad experience with a previous "process improvement" initiative that added overhead without value.

The Practitioner must: introduce themselves and build rapport without defaulting to credentials, understand the client engineer's current workflow before suggesting changes, identify one practice to introduce through a real task (provided in the scenario), choose an appropriate agentic pairing mode for this first session (typically Traditionalist for a new pairing), and begin the work together in a way that demonstrates the practice rather than prescribing it. The Practitioner should also demonstrate at least one of the six core principles naturally through the work -- without announcing it as a "principle."

### Activity 2: Staff Aug vs. Capability Building Diagnosis

**Format:** Small group exercise, 30 minutes

Each group of 3-4 trainees receives a scenario describing an embedded engagement that is 4 months in. The scenario includes: the Practitioner team's weekly summary, the client team's sprint metrics, and observations from the AIL Facilitator's most recent check-in. The scenario contains signals that the engagement may be drifting toward staff augmentation.

Groups must: identify the specific signals of staff-aug drift, propose three concrete actions the Practitioner team could take to restore the capability-building focus, and discuss how to raise this with the engagement sponsor without framing it as a failure.

### Activity 3: Ramp-Down Planning Exercise

**Format:** Small group exercise, 30 minutes

Each group receives a re-diagnostic report and a set of Practitioner team observations for a client team that is 8 months into an embedded engagement. The re-diagnostic shows mixed results: strong competency in some practices, still-developing competency in others, and one practice area where the client team has regressed since the last assessment.

Groups must: identify which practices are ready for ramp-down and which are not, design a practice-by-practice ramp-down plan for the next 3 months, and determine what to recommend for the regression area -- more Practitioner support, a different approach, or acceptance that this practice may not become habitual in the current engagement.

### Activity 4: Difficult Conversation Role-Play

**Format:** Pairs role-play exercise, 30 minutes

One trainee plays an Practitioner who needs to have a difficult conversation. Scenario options (one per pair): (a) A client team member who consistently avoids pairing sessions and is falling behind on competency development. (b) A delivery lead who is pressuring the Practitioner team to "just ship" rather than maintain the mentoring structure during a sprint crunch. (c) An engagement sponsor who wants to extend the Practitioner team at full staffing despite re-diagnostic evidence that the client team is ready for ramp-down.

---

## Assessment

### Practical Assessment

**Format:** Take-home applied scenario assessment

Trainees receive a complete embedded engagement scenario: a client team's diagnostic results, the engagement roadmap, the Practitioner team composition, weekly summaries for months 1-6, the AIL Facilitator's check-in notes, and a re-diagnostic at month 7 showing mixed results.

Trainees produce a memo that:

1. Assesses the engagement's current effectiveness at building client team competency -- citing specific evidence from the scenario that indicates capability transfer (or lack thereof).
2. Identifies any signals of staff-augmentation drift and proposes corrective actions.
3. Recommends a ramp-down plan for the next 6 months, specifying which practices are ready for hand-off and which need continued Practitioner support.
4. Addresses how the Practitioner team should coordinate with the AIL Facilitator on the findings.

**Scoring rubric:**

| Dimension | Competent | Not Yet Competent |
|-----------|-----------|-------------------|
| **Embedded team effectiveness** | The memo identifies specific evidence of capability transfer (or its absence) and cites scenario data | The memo asserts effectiveness without citing specific evidence |
| **Mentoring through delivery** | The memo distinguishes between delivery output and competency development, noting where they diverge | The memo treats delivery metrics as proxies for learning without distinction |
| **Maintaining capability-building purpose** | The memo identifies staff-aug drift signals with specific evidence and proposes corrective actions | The memo focuses on delivery metrics without addressing whether the client team is building competency |
| **Cross-craft collaboration** | The memo addresses how Practitioner engineers, PMs, and other roles contribute to client capability building | The memo treats capability transfer as an engineering-only concern |
| **Ramp-down planning** | The ramp-down recommendation specifies which practices are ready for hand-off with evidence, and which need continued support | The ramp-down recommendation is a generic timeline without practice-level specificity |
| **Relationship management** | The memo addresses Facilitator coordination with specific communication recommendations | The memo omits or generalizes the Facilitator relationship |

The trainee must achieve "Competent" on all six dimensions. Trainees who receive "Not Yet Competent" on any dimension revise and resubmit with targeted feedback.

---

## Related Documentation

- [Module 5: Facilitator-Led Assessment and Coaching](/training/module-5-coaching-engagement/)
- [Engagement Model](/toolkit/engagement-model/)
- [Competency vs. Knowledge](/toolkit/competency-vs-knowledge/)
- [Organizational Investments](/toolkit/organizational-investments/)
- [Zone 1 to Zone 2 Roadmap](/toolkit/zone-1-to-2/)
- [Zone 2 to Zone 3 Roadmap](/toolkit/zone-2-to-3/)
