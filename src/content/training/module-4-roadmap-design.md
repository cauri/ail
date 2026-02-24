---
title: "Module 4: Progression Roadmap Design"
description: "How to design realistic, zone-specific progression roadmaps with phased investments, leading indicators, and reassessment cadences that account for non-linear competency development."
order: 4
duration: "1-day intensive or 5 hours async"
prerequisites: "Module 4 of 6 (requires Modules 1-3)"
---

**Duration:** 1-day intensive or 5 hours async
**Position in program:** Module 4 of 6 (requires Modules 1-3)

---

## Learning Objectives

By the end of this module, trainees will be able to:

1. **Select the appropriate roadmap template for a team's specific zone transition.** Identify which of the standard roadmap patterns applies to a given team's current zone and target zone, and explain why template selection requires understanding the organizational context before opening a template.

2. **Adapt a roadmap template to an organization's specific context, constraints, and team composition.** Modify a standard template to reflect organizational realities -- budget limits, team size, competing priorities, existing practices -- while preserving the investments and sequencing the template is designed around.

3. **Identify the specific investments a team needs, in the right sequence, for their target zone transition.** Determine which investments must come first because they unblock subsequent ones, and distinguish between investments that are optional (can be adapted) and those that are mandatory (cannot be skipped without undermining the transition).

4. **Define appropriate leading indicators for each phase of a roadmap.** Select indicators that are observable, early, actionable, and connected to the target zone's proficiencies, and design a Leading Indicators Dashboard that gives the facilitator and client timely signal about whether the investments are producing behavioral change.

5. **Set realistic re-diagnostic intervals and prepare clients for non-linear progress.** Establish reassessment checkpoints appropriate to the zone transition timeline, communicate to clients that plateaus, jumps, and regression are expected features of competency development -- not signs of failure -- and describe how the roadmap should respond to each.

---

## Content Outline

### Session 1: Roadmap Design Principles

**Roadmaps are based on investments, not activities.** The most common failure in roadmap design is producing a list of activities -- workshops to run, tools to configure, training to complete -- without specifying what organizational investment must be in place for each activity to succeed. Activities without investments are aspirational calendars. A roadmap becomes actionable when it answers: what must the organization commit to provide before each phase begins?

**Sequence matters.** Investments unblock other investments. Tool licenses must precede adoption training. Policy clarity must precede normalization. Shared infrastructure must precede team-level workflow changes. A roadmap that lists investments without sequencing them invites parallel commitments that fail because prerequisites were not met. The facilitator's job in roadmap design is to establish the dependency chain before setting the timeline.

**The common failure: too many activities, not enough investment.** Organizations often agree to ambitious activity lists but make vague investment commitments. The roadmap then fills with activities that cannot proceed because the organizational preconditions were never established. A realistic roadmap is sparing with activities and specific about investments. If the investment list is vague, the activity list is fiction.

**Why timelines are estimates, not commitments.** Competency development is not predictable to the week. The roadmap establishes phases with expected durations, not guaranteed completion dates. Facilitators must resist pressure to commit to specific dates. Frame every timeline as a range with named dependencies: "Phase 2 is expected to take 6-8 weeks, provided the policy changes from Phase 1 are complete before week 4."

**The difference between a milestone and an investment.** A milestone is an observable checkpoint: "shared AGENTS.md committed to all team repositories." An investment is what the organization provides to make that milestone possible: "time allocated in sprint capacity for infrastructure setup." Roadmaps that list milestones without the supporting investments have the cause and effect backward.

### Session 2: Zone-Specific Roadmap Patterns

**Baseline to Zone 1.** This is the access and normalization transition. The dominant investment categories are tool access (licenses, accounts, API keys), policy (approved tools, data handling guidelines), and basic training. The roadmap pattern begins with organizational permission before asking individuals to adopt. Without explicit organizational endorsement, developers who want to use AI tools work around informal barriers or do not use them at all. Normalizing AI use requires visible management endorsement as well as practical access.

**Zone 1 to Zone 2.** This transition requires more organizational investment because it involves changing how teams work together, not just how individuals work. Key investments include: the One Team One Setup mandate (standardizing on a shared agentic configuration), time allocation for building and evolving the shared setup, mandatory feedback loop infrastructure (CI gates for compiler, linter, and tests), and PM integration into the workflow. The Plan/Code/Verify pattern must be established as the team default, not an individual option. Without the mandate and the infrastructure, the team remains a collection of individual Zone 1 practitioners rather than a coherent Zone 2 unit.

**Zone 2 to Zone 3.** This is the longest and most structurally demanding transition. The AI Engineer role must be defined before the team can begin operating as Zone 3 engineers -- the new job definition signals what behaviors are expected and rewarded. The Continuous Alignment Testing infrastructure, eval harness, and observability investment must precede the behavioral changes they enable. This transition cannot be accelerated by adding activities; it is gated by structural investments that take time to establish.

**Zone 3 to Zone 4.** Zone 4 practices are less mature than those in earlier zones. No widely-known organization has fully achieved factory-level AI development, and the roadmap pattern is not yet established enough to template. Facilitators working with organizations targeting Zone 4 should contact the framework stewards before beginning roadmap design. The general principle applies -- investments before activities, sequence before timeline -- but the specific investments are organization-specific and require custom design.

**What makes each transition different.** Zone 1 is primarily a removal-of-barriers transition: barriers to access, barriers to permission, barriers to normalcy. Zone 2 is a coordination transition: the team must establish shared practices, shared infrastructure, and shared accountability. Zone 3 is a role-identity transition: engineers are asked to stop thinking of themselves as code writers and start thinking of themselves as process designers. These different transition types require different facilitation approaches, different stakeholder conversations, and different leading indicators.

### Session 3: Leading Indicators by Zone

**Why lagging indicators are insufficient for managing zone transitions.** Diagnostic scores are the definitive measure of competency, but they are lagging -- they confirm that competency has been achieved after it has already developed. If a facilitator waits for re-diagnostic results to learn that a roadmap is not working, they have lost months. Leading indicators give early signal that investments are producing behavioral change before the next diagnostic confirms it.

**Leading indicators for Zone 1.** Daily AI tool usage per developer is the primary behavioral signal. Secondary indicators include: AI tool usage during high-pressure periods (deadlines, incidents) -- this is the competency test because it reveals whether usage is habitual or only convenient; cross-role adoption rates among PMs and designers; and time to first productive use (how quickly new team members reach habitual usage). Tool access metrics (licenses, accounts) are investment metrics, not behavioral indicators -- do not confuse them with leading indicators.

**Leading indicators for Zone 2.** Commit frequency to shared AI configuration files (AGENTS.md, CLAUDE.md) measures whether the team is actively evolving the shared setup. Feedback loop bypass rate -- the percentage of commits that skip mandatory compiler/linter/test gates -- directly measures whether the mandatory infrastructure is actually mandatory. Plan/Code/Verify adoption rate (percentage of changes using the externalized planning approach) indicates workflow adoption. Reduction in AI skill variance across team members, visible in diagnostic score distributions, is an early signal of normalization.

**Leading indicators for Zone 3.** CAT pass rate trend (improving, stable, or declining) indicates whether the AI pipeline is getting more reliable over time. Eval coverage -- the breadth of behaviors covered by the eval harness -- measures whether the team is investing in the testing infrastructure Zone 3 requires. Observability coverage (percentage of pipeline steps with instrumentation) indicates whether failures can be diagnosed. Prompt version change frequency reflects active prompt engineering investment rather than set-and-forget configurations.

**Designing a Leading Indicators Dashboard for a client.** A useful Leading Indicators Dashboard for Zone transitions covers no more than five indicators -- enough to give a picture, few enough to act on. For each indicator, the dashboard should show: current value, trend direction (improving, stable, declining), target range, and alert threshold. The dashboard is not a compliance instrument; it is a coaching tool. When an indicator trends in the wrong direction, the facilitator uses it to open a conversation: "This is declining -- what do you think is happening?"

### Session 4: Adapting Templates to Context

**What to customize.** The standard roadmap templates represent typical timelines and typical activities for typical organizational contexts. Everything that is organization-specific can and should be adapted: the duration of each phase (based on organizational change velocity), the specific activities within phases (based on existing practices that do not need to be established from scratch), team-size adjustments (larger teams require more coordination investment), and the composition of the leading indicators dashboard (based on what is actually measurable in this organization's environment).

**What not to customize.** The sequence of investments is not negotiable. An organization cannot establish shared AI configuration practices (Zone 2) before tool access and normalization (Zone 1) are in place. An organization cannot build an AI Engineer role (Zone 3) before the team has demonstrated Zone 2 competency. The mandatory practices -- One Team One Setup, feedback loops, Plan/Code/Verify -- are not optional features; they are what Zone 2 means. A roadmap that omits them in response to organizational constraints does not produce Zone 2 competency; it produces a customized plan for something else.

**How to handle organizations with partial Zone 2 practices.** Many organizations arrive at the diagnostic with some Zone 2 practices already in place but others absent. They may have mandatory feedback loops but no shared AI configuration, or a committed AGENTS.md that only one person maintains. The roadmap adaptation task is to acknowledge what is already in place, avoid insulting the team by re-establishing what they have, and identify the specific gaps that must be filled. A partial Zone 2 organization needs a targeted roadmap, not a full Zone 1-to-2 roadmap starting from scratch.

**Cross-team dependencies in multi-team engagements.** When a roadmap covers multiple teams, dependencies between teams must be mapped explicitly. One team's Zone 2 infrastructure may depend on a platform team's investment that is not on their roadmap. A shared AGENTS.md configuration may require coordination across teams with different codebases and constraints. The facilitator must identify these dependencies during roadmap design and surface them to leadership before the roadmap is finalized.

### Session 5: Managing Non-Linear Progress

**Why competency development is not linear.** Competency is habit formation at the team and organizational level. Habits do not form on a smooth curve. They form through cycles of practice, reinforcement, backsliding, recovery, and stabilization. Organizations that expect steady, incremental progress against roadmap milestones will encounter reality and interpret normal competency development as roadmap failure.

**Plateaus.** A plateau is the period when a team is practicing consistently but the practices have not yet become habitual under stress. The team is doing the right things, but they are still effortful. Diagnostic scores do not improve during plateaus even though investment is continuing. Plateaus are not stalls; they are the development of unconscious competence. The facilitator's job during a plateau is to sustain confidence: "The indicators show you are practicing. The behavioral shift will come. Let us check the indicators again in six weeks."

**Jumps.** Occasionally, multiple investments mature simultaneously, and the team experiences a rapid improvement in competency scores. Practices that were effortful suddenly become natural. Compound improvements occur as practices reinforce each other -- externalized plans make code review faster, faster code review reinforces the Plan/Code/Verify habit, the reinforced habit reduces the mental load of context engineering. Jumps feel like breakthroughs but are actually the accumulation of investment that has been building over the plateau. Clients who experience a jump may conclude that the earlier plateau was wasted time; the facilitator should clarify that the plateau was the prerequisite for the jump.

**Regression.** Regression is when teams revert to pre-zone behaviors under pressure. A Zone 2 team under deadline pressure stops using externalized plans, drops the mandatory feedback loops, or reverts to individual AI usage rather than shared workflow. Regression is normal. It reveals which practices are truly habitual (they survive pressure) and which are still fragile (they do not). Regression does not erase progress; it identifies where the investment of practice time is most needed. See Module 5 for the detailed regression response framework.

**What to do when a team falls behind on their roadmap.** First, diagnose whether the falling-behind reflects slow progress (practices are developing, just slower than expected) or investment shortfall (the organizational commitments that were supposed to enable the activities were not made). These require different responses. Slow progress calls for patience and additional practice support. Investment shortfall calls for a conversation with leadership about re-commitment.

### Session 6: Roadmap Refresh After Re-Diagnostic

**The re-diagnostic as a calibration event.** The re-diagnostic is not a test; it is a calibration. It answers the question: given where we expected to be by now, where are we actually, and what does the roadmap look like from here? The facilitator's task at a re-diagnostic is not to evaluate the team's performance but to use the results to produce an updated, honest roadmap.

**Advancing milestones that are complete.** When the re-diagnostic shows that the team has achieved competency ahead of the roadmap's milestone schedule, the roadmap should be updated to reflect the actual state. If Phase 2 milestones are complete in month 3 of a 4-month Phase 2, the roadmap advances. This is a positive signal that should be communicated clearly: the investment worked faster than expected.

**Extending timelines where progress stalled.** When the re-diagnostic shows less progress than the roadmap anticipated, timelines must be extended honestly. Facilitators who resist timeline extensions to avoid difficult client conversations create roadmaps that are permanently aspirational. A roadmap that accurately represents current reality, even when reality is behind schedule, is more useful than one that preserves the original timeline for appearances.

**Adding new activities based on newly identified gaps.** Re-diagnostic results sometimes reveal gaps not visible in the original assessment. A team that has made strong progress on Plan/Code/Verify may show a newly visible gap in context engineering that was masked by earlier deficits. The roadmap refresh is the opportunity to surface these gaps and design activities to address them.

**Maintaining client confidence through adjustments.** Clients may interpret roadmap adjustments as evidence that something has gone wrong. The facilitator should communicate adjustments as evidence that the process is working: the framework provides a structured way to learn from evidence and adapt. A roadmap that never changes is not a living plan; it is a document that has been abandoned.

---

## Learning Activities

### Activity 1: Roadmap Design Workshop

**Format:** Small group exercise, 60 minutes

Groups of 3-4 trainees each receive a team profile card specifying: the team's current zone and competency stage (from a completed diagnostic), the target zone selected at the goal-setting session, organizational constraints (e.g., maximum sprint capacity available, specific policy restrictions, team size), and the investment commitments leadership made. Working from the appropriate standard template, each group produces a 6-month roadmap with phased investments, activities, milestones, and leading indicators.

Groups present their roadmaps to the full cohort. The facilitator asks each group to explain their sequencing choices: why does Phase 1 come before Phase 2? What would break if those phases were reversed? This surfaces whether trainees understand the dependency structure of zone transitions or are applying templates mechanically.

### Activity 2: Leading Indicators Selection Exercise

**Format:** Full group exercise, 30 minutes

The facilitator presents a list of 12-15 candidate metrics for a specific zone transition (the exercise rotates between Zone 1 and Zone 2 transitions across cohorts). For each candidate metric, the group evaluates: Is this observable without a survey? Does it change before diagnostic scores change, or after? If it declines, is there a specific action the team or facilitator can take? Does it measure behavior related to the target zone's proficiencies, or does it measure something adjacent?

The facilitator identifies 2-3 metrics that appear useful but are actually vanity metrics or are easily gamed. Discussion of these contested cases produces the most durable learning. The activity concludes with the group agreeing on a five-indicator dashboard for the scenario zone transition.

### Activity 3: Roadmap Adaptation Scenario

**Format:** Pairs exercise, 30 minutes

Each pair receives the standard Zone 1-to-2 roadmap template and an organizational constraint card. Example constraints include: "This organization cannot take developers off feature work for more than 10% of their time," "The security policy review process takes a minimum of 8 weeks, blocking any new tool approvals," and "This team already has a committed AGENTS.md but it has not been updated in four months and only one person contributes to it."

Pairs must adapt the standard template to the constraint without removing mandatory investments or skipping sequencing steps. After the exercise, pairs share their adaptation choices with the full group. The facilitator identifies adaptations that preserved the template's intent and flags adaptations that violated sequencing rules while appearing to accommodate the constraint.

### Activity 4: Explaining Non-Linear Progress to a Frustrated Client

**Format:** Role-play pairs, 25 minutes

One trainee plays the facilitator. The other plays a VP of Engineering using a persona card. The scenario: the team started a Zone 1-to-2 roadmap four months ago. Leading indicators show consistent practice -- commit frequency to AGENTS.md is steady, Plan/Code/Verify adoption is at 60% -- but the mid-point re-diagnostic shows no score improvement from baseline. The VP's reaction: "We've been investing for four months and the numbers haven't moved. This isn't working."

The facilitating trainee must:

1. Explain why the re-diagnostic scores have not changed despite behavioral progress (the plateau concept -- practices are being adopted but are not yet habitual under stress).
2. Use specific leading indicator data from the scenario to demonstrate that investment is producing behavioral change even though the lagging diagnostic score has not yet responded.
3. Recommend whether to adjust the re-diagnostic interval (the current schedule is every 3 months; the trainee must argue for whether to maintain, extend, or shorten based on the evidence).
4. Explain what a "jump" would look like and under what conditions they would expect to see one.

After 12 minutes, pairs switch roles with a different scenario: a team whose leading indicators have flatlined (not just diagnostic scores), requiring the trainee to distinguish a genuine stall from a plateau and recommend a different response.

The group debriefs: What language helped the VP shift from "this failed" to "this is developing"? When leading indicators also flatline, how does the facilitator's message change? What re-diagnostic interval did people recommend, and why?

**Evaluation criteria for Activity 4.** The facilitator trainer evaluates each trainee's performance across three dimensions:

1. **Conceptual accuracy.** The trainee correctly distinguishes a plateau (leading indicators show practice but diagnostic scores have not yet responded) from a genuine stall (leading indicators have also flatlined), and communicates the distinction clearly to the VP without jargon.
2. **Evidence grounding.** The trainee uses specific leading indicator data from the scenario to support their explanation — not generic reassurance. The VP should leave the conversation understanding what the data shows, not just feeling better about the timeline.
3. **Adaptive recommendation.** The trainee's re-diagnostic interval recommendation is justified by the specific scenario evidence (not a default answer), and the trainee can articulate what conditions would change their recommendation. In the second scenario (genuine stall), the trainee's response is substantively different from the plateau response — recommending investigation of root causes rather than patience.

This activity is developmental, not scored for certification. The facilitator trainer provides verbal feedback after each round and identifies trainees who may need additional practice with client-facing communication before the supervised facilitation.

---

## Assessment

### Roadmap Review Exercise

**Format:** Take-home or in-session, 45-60 minutes

Trainees receive a sample roadmap for a Zone 1-to-2 transition that contains deliberate problems: milestones without supporting investments, activities in the wrong sequence, lagging indicators mislabeled as leading indicators, missing mandatory investments (e.g., One Team One Setup is not represented), and an unrealistic timeline that assumes organizational policy changes take one week. Trainees must:

1. Identify each problem and categorize it (sequencing error, missing investment, indicator misclassification, unrealistic timeline, omitted mandatory practice).
2. Explain the practical consequence of each problem -- what would happen if this roadmap were followed as written?
3. Propose a specific correction for each identified problem.

Assessment evaluates the trainee's ability to apply roadmap design principles to a concrete artifact, not just describe them abstractly. Scoring gives equal weight to identification, consequence explanation, and correction quality.

**Pass/fail criteria:**

| Dimension | Pass | Fail |
|-----------|------|------|
| **Identification** | Correctly identifies at least 4 of the 5 deliberate problems with accurate categorization | Identifies fewer than 4 problems or miscategorizes the majority |
| **Consequence explanation** | Each identified problem includes a specific practical consequence (e.g., "Phase 2 activities begin without the infrastructure they require, producing early failure") | Consequences are vague ("this would cause problems") or absent |
| **Correction quality** | Each correction preserves mandatory investments and sequencing rules while addressing the identified problem | Corrections introduce new problems, violate mandatory investment requirements, or are too vague to implement |

Trainees who fail any dimension revise and resubmit with targeted feedback.

---

## Preparation for Module 5

After completing Module 4, trainees should:

- **Retrieval exercise (do this first, from memory):** Without consulting any notes, write down: (a) the difference between a milestone and an investment, (b) three leading indicators for Zone 2 and why they qualify as "leading" rather than "lagging," (c) the three types of non-linear progress patterns and what each signals, and (d) one example of a roadmap adaptation that preserves mandatory investments while accommodating an organizational constraint. After writing, check against Module 4 materials.
- Consider: once a roadmap is designed and approved, what does the facilitator's role become? The roadmap is a plan. Plans require monitoring, coaching, and adjustment over months. How does a facilitator maintain accountability without becoming a project manager?
- Reflect on the non-linear progress patterns discussed in Session 5. Have they observed plateaus, jumps, or regression in their own experience with organizational change? What made those patterns easier or harder to navigate?
- Review the team report and management report formats from Module 2, noting how an initial diagnostic report differs from a re-diagnostic report. What does "progress" look like in a re-diagnostic, and how might a facilitator communicate mixed results (some areas improved, others regressed)?

Module 5 addresses the ongoing facilitator-client relationship across the full implementation support phase: check-ins, retrospectives, re-diagnostics, regression response, and the ethics of long-term engagement.

---

## Related Documentation

- [Organizational Investments](/toolkit/organizational-investments/)
- [Zone 1 Reference](/toolkit/zone-1-augmenting/)
- [Zone 2 Reference](/toolkit/zone-2-integrating/)
- [Zone 3 Reference](/toolkit/zone-3-accelerating/)
- [Zone 4 Reference](/toolkit/zone-4-industrializing/)
