---
title: "ACE Diagnostic: Team Report"
description: "A sample completed team diagnostic report for the Payments Platform team at FinServ Corp."
section: "reports"
order: 2
---
## Payments Platform Team — FinServ Corp

**Team:** Payments Platform
**Date:** January 28, 2026
**Facilitator:** Maya Okafor
**Participants:** 6 team members (4 engineers, 1 tech lead, 1 PM)
**Zones Assessed:** Zone 1 (Augmenting), Zone 2 (Integrating) screening

---

> **Confidentiality:** This report is for the Payments Platform team and should not be shared with FinServ Corp management or other teams without explicit team consent. A separate management report covering aggregated organizational patterns has been provided to FinServ Corp leadership. That report does not include your scores, discussion content, or identified blockers.

---

## Assessment Summary

The Payments Platform team completed a facilitated ACE diagnostic workshop on January 28, 2026. All six team members participated for the full 110-minute session. The team assessed Zone 1 in full and completed a screening pass through Zone 2 to establish competency.

**Current zone and stage: Zone 1 — Competent**

The team has achieved Zone 1 Competency. All six members rated the Zone 1 core metric at 5/Always, overall Zone 1 scores average 4.4, and the team met the competency threshold on 3 of 7 items at composite 5 with all remaining items at composite 4. This places the team solidly in the Competent stage — AI tool usage is habitual across roles and holds under pressure. Zone 1 Mastery would require broader 5s across the full item set; for now, the right focus is Zone 2 transition, not chasing the last increment of Zone 1 refinement.

Zone 2 screening revealed emerging but inconsistent Zone 2 practices. The team does not yet have the shared configuration, mandatory feedback loops, or Plan/Code/Verify discipline that Zone 2 requires. The recommended next focus for this team is the Zone 2 transition.

---

## Zone 1 Proficiency Breakdown

The table below shows each Zone 1 proficiency item, the team's composite score, and a brief observation based on scores and workshop discussion.

| Proficiency | Composite | Observation |
|---|---|---|
| Q1 (Core): AI usage under deadline pressure | 5 | All 6 members rated 5. Confirmed in discussion: the team described maintaining AI-assisted workflows during a production incident last quarter and a compliance crunch in Q3. AI tools are genuinely a first instinct under pressure, not a fair-weather habit. |
| Q2: Daily AI code completion and generation | 5 | All engineers and the tech lead report daily use of AI coding tools as a matter of course. Engineers described reaching for AI before reaching for documentation when exploring an unfamiliar part of the codebase. |
| Q3: AI for diagnostics and debugging | 5 | Strong consensus. Engineers routinely paste stack traces and error context into AI tools, iterate on hypotheses, and use AI to navigate unfamiliar code. One engineer described AI as "my first rubber duck." |
| Q4: Mode selection — choosing the right AI engagement mode for the task | 4 | Emerging but implicit. Engineers distinguish in practice between quick autocomplete, conversational debugging, and longer agentic runs, but this is individual and intuitive rather than a shared vocabulary the team reasons about together. |
| Q5: Reviewing AI output before accepting | 4 | Good awareness, occasional pressure-related lapses. Discussion revealed that review discipline sometimes compresses during sprint crunch. The team acknowledged this is an area they want to tighten as they move into Zone 2, where AI output volume increases. |
| Q6: Non-engineering roles using AI | 4 | The PM uses AI for research synthesis, drafting acceptance criteria, and preparing for stakeholder conversations regularly. This is meaningfully above average. Scored 4 rather than 5 because usage is habitual for some tasks but still ad hoc for others — it has not fully become the default mode for all PM work. |
| Q7: AI for tests, documentation, and peripheral artifacts | 4 | All engineers use AI for test scaffolding and inline code comments consistently. Commit messages and higher-level documentation (ADRs, runbooks, incident postmortems) remain primarily manual. |

**Zone 1 competency threshold met: Yes**

Core metric: 6/6 members at 5. Overall zone average: 4.4. Composite 5 items: 3 of 7. Composite 4 items: 4 of 7. All items at composite 4 or above: 7 of 7. The competency threshold (core metric unanimous at 5, 75%+ of individual responses at 5, 6/7 items at composite 5) is met on the core metric condition and on the per-item floor. The team is Competent. The 4s on Q4-Q7 are real growth areas and will matter in Zone 2, but they do not change the zone or stage designation.

---

## Zone 2 Competency

Zone 2 (Integrating) requires the team to operate as a unit around a shared AI-assisted workflow. The screening pass through Zone 2 items revealed the following:

**Emerging Zone 2 practices:**

- Two engineers independently described starting to think about PR review of AI-generated code as different from reviewing human-written code (Q5). In the workshop discussion, one engineer said, "I've started looking more carefully at generated test logic — it passes but it's sometimes testing the wrong thing." This is nascent Zone 2 instinct.
- The tech lead has written informal notes in the team Confluence about preferred AI interaction patterns and context setup. This is a precursor to a committed AGENTS.md but is not yet in source control and has not been adopted consistently by the team.
- One retrospective in Q4 touched on AI tooling, suggesting the team is open to making agentic setup a recurring team-level conversation (Q6).

**Absent Zone 2 practices:**

- No shared AI configuration file (AGENTS.md or CLAUDE.md) in the repository. Each engineer's tooling reflects individual preference. There is no shared answer to "what should an AI agent know about this codebase before touching it?"
- No Plan/Code/Verify discipline. Engineers generate and commit AI-produced code without consistently externalizing a plan before generation or running a mandatory verification sequence after. The individual discipline varies but is not a team norm.
- No mandatory feedback loops. The test suite, linter, and compiler are available and used, but not enforced as required verification steps before accepting AI output. Enforcement exists at CI, not at the point of generation.
- No externalized plans in the repository (Q4). Work planning lives in Jira tickets and Slack threads, neither of which is readable by an AI agent working from the codebase.
- The PM does not yet write acceptance criteria in AI-verifiable form (Q7). Criteria are functional and well-structured, but not written with AI agent consumption in mind. This will become a meaningful gap as the team moves toward agentic workflows.

**Zone 2 competency threshold met: No.** The team is not yet operating in Zone 2. Zone 2 Learning requires consistent practice of the foundational items; none are yet habitual.

---

## Strengths

**1. Genuine Zone 1 competency — this is not a paper achievement**

All six team members, across four engineers, one PM, and a tech lead, use AI tools daily as a matter of habit. The workshop confirmed this is durable: team members described maintaining AI-assisted workflows through a production incident and a compliance crunch. Zone 1 competency that holds under pressure is the prerequisite for Zone 2, and this team has it. Many teams at Zone 1 have individual AI enthusiasts alongside non-adopters; this team does not have that problem.

**2. PM AI adoption is ahead of the curve**

The PM's habitual use of AI for research synthesis and criteria drafting is uncommon and valuable. In Zone 2, the PM's role expands — AI-verifiable acceptance criteria become an input to the agentic workflow, not just a communication artifact. The PM is already building the habits that underpin this shift. This gives the team an uncommon Zone 2 advantage: they will not need to convince the PM to start using AI tools; they need only redirect how those tools are used.

**3. Strong AI debugging practice across the engineering team**

All four engineers and the tech lead described mature AI debugging habits: pasting error context, iterating on hypotheses, using AI to navigate unfamiliar code paths. This is directly relevant to Zone 2, where AI agents are expected to reason through the codebase with limited hand-holding. A team that uses AI competently for debugging has already internalized the feedback-loop mindset that Zone 2 formalizes as Plan/Code/Verify.

**4. Team is culturally ready for Zone 2**

The workshop itself was evidence of this. The team engaged seriously with the scoring, challenged each other on variance (notably on Q4 and Q5), and spent substantive time discussing what a shared AGENTS.md would actually say. Teams that treat AI tooling as individual preference tend to stall at Zone 1. This team is already thinking in team-level terms. That orientation is the most important predictor of Zone 2 progress.

---

## Growth Areas

**1. No shared configuration — individual setups diverge silently**

Each engineer has their own AI tool configuration, context preferences, and approach to prompting. At Zone 1, where individual adoption is the measure, this is fine. At Zone 2, it is an immediate blocker: the team's AI-assisted workflow can only produce consistent results if agents start from consistent context. The tech lead's Confluence notes contain much of what an initial AGENTS.md needs; the gap is converting that implicit knowledge into a committed, maintained artifact.

**2. Plan/Code/Verify discipline is absent as a shared practice**

Engineers described generating code, reviewing it, and committing it — solid Zone 1 behavior. None described externalizing a plan before generation or running a mandatory feedback sequence before accepting output. The distinction matters at Zone 2 because agentic runs produce larger, faster outputs that are significantly harder to review without a prior plan as a reference. The absence of this discipline is not a problem at Zone 1; it is simply the next thing to build.

**3. Feedback loops are available but not enforced at the point of generation**

The team has a test suite, linter, and compiler. These run in CI. They are not configured as mandatory gates immediately after AI generation, before code is committed. One engineer mentioned pushing a commit during a late-sprint push without running tests locally, reasoning that "it was a small AI change." This is exactly the scenario Zone 2 mandatory feedback loops are designed to prevent: at Zone 2 velocity, there is no such thing as a small AI change in terms of potential scope.

**4. AI configuration and team knowledge live outside the repository**

The tech lead's Confluence notes, the informal shared understandings about what AI is and isn't good for on this codebase, the PM's criteria formats — none of this is in source control. For Zone 2, configuration and context must be in the repository because AI agents read from the repository. What exists only in Confluence or individual memory is invisible to an agent. The team is accumulating the right knowledge; it needs to be externalized into the codebase.

---

## Investment Recommendations

The following investments are specific to this team's Zone 2 transition. They are sequenced so that each one builds on the previous, with the lowest-effort, highest-leverage actions first.

### 1. Write and commit a team AGENTS.md

**Category:** Team practice
**Effort:** Low — half-day workshop plus ongoing maintenance
**Timeline:** Within 30 days

This is the single most important action for Zone 2 transition. The AGENTS.md (or CLAUDE.md, depending on the primary agentic tool) is the team's shared AI configuration: it tells AI agents how the codebase is organized, what conventions to follow, what verification steps are required, and what is in and out of scope for autonomous action. It is also the artifact that makes "One Team One Setup" concrete — once it lives in the repository, every team member and every AI agent starts from the same context.

The tech lead's existing Confluence notes are the input. A practical first session: the tech lead (or, if an Artisan Engineer is embedded with the team, the Artisan and tech lead together) shares the notes as a starting draft, and the team spends 90 minutes converting them into an AGENTS.md and adding items from each engineer's individual configuration. Commit the result. The file will evolve through retro iteration; it does not need to be complete to be useful. A two-page AGENTS.md that the team actually maintains is worth more than a ten-page one that goes stale.

### 2. Establish Plan/Code/Verify as an explicit team norm

**Category:** Team practice
**Effort:** Low — norm-setting, no tooling required
**Timeline:** Within 30 days, running in parallel with investment 1

Plan/Code/Verify is a three-phase discipline for AI-assisted development: externalize a plan (as a markdown file in the repo, a GitHub issue comment, or a structured prompt) before generation; generate code using the plan as context; verify output against the plan using the mandatory feedback loop before accepting. For small changes, the plan is a sentence. For complex changes, it is a short document with scope and constraints stated explicitly.

The team's immediate action is to name this pattern and agree it exists. The tech lead can introduce it at the next sprint planning or retro as "our Zone 2 habit to build." If an Artisan Engineer is embedded with the team, the most effective introduction is the Artisan demonstrating Plan/Code/Verify through pair programming on a real story — the client engineer experiences the practice firsthand rather than hearing about it. Within two sprints, it should feel natural for engineers to say "I haven't written a plan yet" before starting an AI generation task, and to treat that as a prompt to do so rather than an obstacle to skip.

### 3. Enforce mandatory feedback loops in the development workflow

**Category:** Tooling
**Effort:** Medium — configuration work required
**Timeline:** Within 60 days

The goal is to make it structurally difficult to merge AI-generated code that has not passed the full feedback loop: compiler, linter, and test suite. Enforcement at CI is good; enforcement at the point of generation is better. A practical implementation: add a one-line script to the AGENTS.md that agents are instructed to run before declaring any task complete (`make verify` or equivalent). For local development, pre-commit hooks that run lint and fast tests add a second gate.

The team should also discuss the policy on bypassing hooks. A useful retro question: "Did anyone use --no-verify this sprint? Why?" Normalizing this discussion removes the temptation to silently bypass and surfaces the conditions under which the feedback loop feels like friction.

### 4. PM: write acceptance criteria in AI-verifiable form

**Category:** Team practice — PM role
**Effort:** Low — format change and iteration
**Timeline:** Within 60 days

AI agents at Zone 2 read acceptance criteria directly. Criteria written as prose narrative are harder for agents to consume than criteria written as structured, testable conditions. The PM should experiment with a format that expresses observable outcomes: Given/When/Then structure, or a bulleted list of conditions that can be verified by running the test suite or inspecting observable system behavior.

This is a gradual shift. A useful starting point: the PM picks two stories per sprint to write in structured format and asks engineers whether the structured criteria were easier to work from with AI assistance. Feedback from that experiment shapes the format. The goal is not syntactic compliance but criteria that both human engineers and AI agents find unambiguous.

---

## Next Steps

### Immediate actions (next 30 days)

- **Week 1:** Tech lead schedules a half-day AGENTS.md kickoff with all engineers. Input: Confluence notes on AI conventions, 15 minutes from each engineer on their individual tool setup, and discussion on what the team wants an AI agent to know before touching the codebase.
- **Week 2:** First AGENTS.md committed to the main branch. All team members review and add at least one item from their individual configuration. Include the mandatory feedback loop command in the file.
- **Week 2-3:** Tech lead introduces Plan/Code/Verify at the next sprint planning or retro. Engineers pair on one story using the pattern explicitly — if an Artisan Engineer is embedded, the Artisan and a client engineer pair on the first story together to make the practice concrete before it becomes habitual.
- **Week 4:** AGENTS.md retrospective — 15 minutes at the retro to review what worked, what to add, what to change. This becomes a standing item.

### Next 90 days

- Pre-commit hooks configured and documented in AGENTS.md. Target: no AI-generated code merged without full local feedback loop passing.
- Plan/Code/Verify running as the default for all non-trivial AI generation tasks. "Trivial" is defined by the team — a useful first definition: any AI task that touches more than one function or produces more than 20 lines.
- PM running structured acceptance criteria on at least half of all stories.
- AGENTS.md updated at each sprint retro as a standing 15-minute agenda item.
- If Artisan team is embedded: Artisan Engineers are actively pairing with client engineers on Plan/Code/Verify and AGENTS.md evolution; ramp-down indicators are being tracked.
- Schedule re-assessment for 90 days out (late April 2026) to evaluate Zone 2 Learning stage competency.

---

*This report was prepared by Maya Okafor following a facilitated ACE diagnostic workshop on January 28, 2026. This report is confidential to the Payments Platform team and should not be shared with FinServ Corp management or other teams without the team's consent. A separate management report with aggregated, anonymized organizational patterns has been provided to FinServ Corp leadership.*

---

*[Framework reference: This is a sample report for facilitator training. See the related materials below.]*

## Related Documentation

- [Team Report Template](/toolkit/team-report-template) -- The blank template used to produce reports like this one
- [Sample Management Report](/toolkit/sample-management-report) -- The companion management report for this same FinServ Corp engagement
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- Reference for the competency stage determinations and threshold criteria cited in this report
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Full Zone 1 definition; context for the Zone 1 findings in this report
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Full Zone 2 definition; context for the Zone 2 competency screening findings
- [Interpreting Results](/toolkit/interpreting-results) -- How to read and communicate results like those shown in this sample
