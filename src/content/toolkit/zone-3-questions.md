---
title: "Zone 3 (Accelerating) Diagnostic Questions"
description: "These questions assess whether an organization has shifted from AI-integrated team workflows to AI-driven core development where humans specify, review, and orchestrate while AI implements."
type: "diagnostic"
audience: "facilitator"
section: "diagnostic"
order: 3
---
## Purpose

These questions assess whether a team has shifted from AI-integrated workflows to AI-driven core development where every role --- engineering, product management, design, and QA --- has moved from producing deliverables directly to specifying, validating, or governing the AI systems that produce them. Zone 3 competency means the entire production pipeline has transformed: engineers design and maintain AI pipelines, PMs define behavioral specifications and acceptance envelopes, designers encode standards as machine-verifiable inputs, and QA engineers build evaluation infrastructure. The questions measure both individual role transformation and team-level infrastructure: Continuous Alignment Testing (CAT), observability of AI-driven processes, eval harnesses, prompt versioning, and cross-functional role transformation.

## Questions

All questions are answered on a 1-5 frequency scale (see Scale below). Each team member answers individually. Questions use first-person ("I") when assessing individual behavior and team-referent ("The team") when assessing collective practices or shared infrastructure. Respondents should select "This behavior is not part of my role on this team" for questions that do not describe work they perform. Questions measure observable behavior --- what people and teams actually do, not what they aspire to or are experimenting with.

**Core Metric**

1. My primary mode of work has shifted from producing deliverables directly to specifying, validating, or governing the AI systems that produce them --- even when it would be faster to do the work myself for a particular task.

**Additional Questions**

2. The team maintains a Continuous Alignment Testing (CAT) pipeline that automatically verifies AI-generated output against project standards, architectural constraints, and behavioral expectations on every change, separate from traditional CI/CD tests.

3. I maintain observability over AI-driven development processes and act on what I learn. *This question is scored as a composite of two sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **3a.** I instrument AI-driven development processes with observability tooling that tracks metrics such as agent success rates, rework frequency, context window utilization, and failure mode distributions.
    - **3b.** I routinely use observability data about AI-driven processes to make specific improvements to the system --- not just collect the data but act on it.

4. The team maintains an eval harness: a suite of repeatable evaluations that measure AI agent performance against known benchmarks, used to validate changes to prompts, model versions, context configurations, or workflow modifications before deploying them.

5. The team versions, reviews, and deploys prompt configurations, context templates, and agent workflow definitions through the same rigor as production code --- including rollback capability when a change degrades agent performance.

6. When AI-generated output fails or produces unexpected results, I diagnose the failure systematically (context issues, prompt drift, model limitations, specification gaps) and apply targeted fixes to the generation pipeline rather than manually correcting individual outputs.

7. I include AI-specific criteria in user stories and acceptance requirements --- specifying expected agent behavior, acceptable output variance, required eval thresholds, or observability requirements --- as a standard part of story writing.

8. I contribute to the specification layer of the AI development pipeline --- defining UI behavioral expectations, interaction patterns, and visual standards that AI-generated implementations must satisfy, with automated checks that verify design compliance.

9. I operate as an evaluation pipeline specialist: I design, maintain, and improve the automated evaluation infrastructure that validates AI-generated output at scale, rather than primarily performing manual testing of individual outputs.

10. The team defaults to specification-first as its mode of working: team members habitually specify intent for the AI pipeline rather than implementing directly. When manual coding does occur, it is a principled exception with a clear rationale (e.g., the task is genuinely unsuitable for the pipeline, or speed-of-response in an incident justifies it), and those exceptions feed back into pipeline improvement --- the team asks "what would need to change so the pipeline could handle this next time?" rather than treating the exception as normal.

## Scale

| Response | Meaning |
|----------|---------|
| N/A | This behavior is not part of my role on this team |
| 1 | Never |
| 2 | Rarely |
| 3 | Sometimes |
| 4 | Often |
| 5 | Always |

The "N/A" option is visually separated from the frequency scale to make clear that it is not a score --- it indicates that the question does not apply to the respondent's role. Responses marked N/A are excluded from that question's composite calculation. See [Scoring Thresholds](/toolkit/scoring-thresholds) for handling details.

## Notes for Facilitator

### Referent Structure

Zone 3 questions use two referent levels:

- **First-person ("I") questions** (Q1, Q3, Q6, Q7, Q8, Q9) assess individual role transformation. These are the questions where the shift from Zone 2 identity to Zone 3 identity is most visible --- the respondent is reporting on whether *their own work* has changed. Aggregate first-person responses to produce team-level composites using the standard scoring procedure. Within-team variance on these questions is meaningful diagnostic signal: it reveals whether the role transformation is uniform or uneven across the team.

- **Team-referent ("The team") questions** (Q2, Q4, Q5, Q10) assess shared infrastructure and collective practices. These describe systems and norms that the team maintains together. Individual respondents are reporting on their observation of the team's collective behavior.

### Interpreting N/A Responses

The "not part of my role" option replaces the previous approach of pre-assigning questions to roles. Respondents self-determine which questions are relevant to their work. This handles team members who wear multiple hats (e.g., a developer who also does QA work, a tech lead who also writes stories).

**Monitor for two patterns:**

- **Appropriate use:** A PM selects "not part of my role" on Q1 (process designer identity) and Q3 (observability instrumentation) because they do not perform engineering work. This is correct --- exclude these responses from the composite.
- **Possible avoidance:** An engineer selects "not part of my role" on Q6 (systematic failure diagnosis) even though they work with AI-generated output daily. This may indicate discomfort with a low score rather than genuine role mismatch. Probe gently during discussion: "I noticed you marked Q6 as not part of your role --- can you tell me more about how you interact with AI-generated output when something goes wrong?"

**Minimum response threshold:** If fewer than 3 team members provide a scored response (1-5) on a given question, flag that question's composite as having reduced reliability in the facilitator report. Do not exclude the question entirely --- the available responses still provide signal --- but note the reduced confidence in the composite.

### What to Watch For

- **The core identity shift applies to every role.** Zone 3 is fundamentally about shifting from "I produce deliverables directly" to "I specify, validate, or govern the systems that produce them." For engineers, this means designing and maintaining AI pipelines. For PMs, this means defining behavioral specifications and acceptance envelopes. For designers, this means encoding standards as machine-verifiable inputs. For QA, this means building evaluation infrastructure. The core metric question (Question 1) tests whether this shift has occurred regardless of role. Probe: "What does your typical week look like? How much of your time is spent specifying, validating, or governing AI systems versus producing deliverables directly? When was the last time you chose to improve the system rather than do the work yourself?"

- **"Separate generation from decisioning" should be observable but is not a standalone scored question.** In a Zone 3 organization, the acts of generating code (AI) and deciding whether that code is acceptable (human) are distinct steps with different owners. This proficiency is assessed through its manifestation in other questions (specification design, eval harnesses, authority structures) rather than as a separate scored item. Facilitators should note evidence of this practice during discussion even though it does not have its own question. Ask: "Who generates the code? Who decides whether it ships? Are these clearly separated in your workflow?"

- **CAT is not just CI/CD.** Continuous Alignment Testing (Question 2) is distinct from traditional test suites. CAT verifies that AI-generated output aligns with project standards, architectural constraints, and behavioral expectations --- things that traditional tests may not cover. If the team says "we have CI/CD" but cannot describe alignment checks specific to AI-generated output, they have not yet established CAT.

- **Observability should produce actionable data.** Question 3 asks about instrumenting and acting on AI process observability. Because Q3 is now first-person, each respondent is reporting on their own practice of instrumenting and using observability data. If a respondent scores high on Q3a (instrumenting) but low on Q3b (acting on data), that is a meaningful diagnostic signal --- the respondent collects data but does not yet use it to drive improvement. Ask: "What did your last observability insight tell you? What did you change as a result?"

- **Eval harnesses should be run regularly.** Question 4 asks about eval suites. These should be run before and after changes to the AI pipeline, not just created once. Ask: "When was the last time you ran your eval suite? What prompted it? What did you learn?"

### Cross-Functional Probe Questions (Pilot)

The following questions are not yet scored items. They are facilitator probes to assess whether the Zone 3 transformation extends beyond engineering. Use them during the discussion phase to gather data for future diagnostic refinement.

- **PM as behavioral specifier:** "Can the PM describe the behavioral envelope for the last AI-driven feature --- what accuracy, latency, and failure modes were acceptable? Were these criteria defined before engineering began pipeline work?"
- **Designer as design systems architect:** "Can the designer show examples of design standards encoded as machine-verifiable inputs to the AI pipeline? Are design compliance checks automated, or does design review remain manual?"
- **QA as evaluation pipeline specialist:** "What percentage of the QA team's time is spent operating evaluation infrastructure versus manually testing individual outputs? Is the eval infrastructure the primary quality mechanism?"
- **Cross-functional accountability:** "When AI-generated output causes a problem, is accountability assignable? Can the team trace a failure to specification, verification, authority, or pipeline design?"
- **Accountability chain:** "Does the organization have a defined chain of responsibility for AI-generated output --- specification accountability, verification accountability, authority accountability, and pipeline accountability? Has this chain been exercised in a real incident?"
- **Audit trail:** "Is AI-generated output traceable to the specification, context, model version, and eval results that governed its production? Could the team answer 'why did the system produce this output?' if asked by a regulator or customer?"

These probes address the concern that Zone 3's 10 scored questions are ~70% engineering-weighted and do not directly assess accountability structures. Data from these probes will inform whether future versions of the diagnostic should include scored cross-functional and accountability questions.

### Common Traps

- **Confusing sophisticated Zone 2 practices with Zone 3.** A team that has excellent AGENTS.md, thorough Plan/Code/Verify, and strong feedback loops is a mature Zone 2 team. Zone 3 requires the additional infrastructure of CAT, eval harnesses, observability, and prompt versioning. The shift is from "we use AI well in our workflow" to "we engineer the AI systems that do the work."

- **Infrastructure without identity shift.** A team may have CAT pipelines, eval harnesses, and observability dashboards but still routinely choose to produce deliverables directly rather than invest in pipeline specification. The infrastructure is a necessary but insufficient condition. Question 10 measures three things simultaneously: (a) specification-first is the default mode, (b) when direct production happens there is a principled rationale, and (c) exceptions feed back into pipeline improvement. This framing measures the identity shift without penalizing appropriate direct work --- the question distinguishes between teams that default to direct production (not Zone 3) and teams that default to specification but make principled exceptions (Zone 3). Probe: "Tell me about the last time a team member chose to do the work directly rather than specifying it for the pipeline. What was the reasoning? Did anything change in the pipeline as a result?"

- **Treating prompt engineering as prompt versioning.** Writing good prompts (Zone 1-2 skill) is different from versioning, reviewing, testing, and deploying prompt configurations as production artifacts (Zone 3 practice). Look for version control, review processes, and rollback capability.

- **Manual correction masquerading as pipeline improvement.** If team members routinely fix AI output by hand rather than fixing the generation pipeline, the team is still operating in a Zone 2 pattern. Zone 3 competency means fixing the system, not the output. Question 6 specifically tests this behavior. Because Q6 is now first-person, each respondent is reporting on their own diagnostic practice --- probe for specific recent examples: "The last time AI output was wrong, what did you personally do? Did you fix the output or fix the pipeline?"

- **PM exclusion from AI criteria.** If product managers write traditional acceptance criteria and engineers add AI-specific criteria after the fact, the PM role has not shifted. Zone 3 PMs understand and specify AI behavioral requirements as part of their standard work. Question 7 is now first-person --- PMs are reporting on their own story-writing practice. If a PM scores low on Q7, that is a direct signal that the role transformation has not occurred for that individual.

- **Overestimating maturity based on tooling.** Having an eval framework installed is not the same as using it habitually. Having observability dashboards is not the same as acting on the data. Probe for habitual use and evidence of decisions made based on these systems.

---

## Related Documentation

- [Zone 2 Questions](/toolkit/zone-2-questions) -- The prerequisite zone questionnaire; Zone 2 competency must be established before Zone 3 assessment
- [Zone 4 Questions](/toolkit/zone-4-questions) -- The next zone questionnaire
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to calculate composite scores and determine competency stage from these responses
- [Zone 3 Reference](/toolkit/zone-3-accelerating) -- Full Zone 3 definition; provides context for interpreting responses and scoring
- [Technique Catalog](/toolkit/technique-catalog) -- Detailed descriptions of CAT, eval harnesses, and other Zone 3 techniques referenced in the questions
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script that administers these questions in the workshop context
- [Discussion Prompts](/toolkit/discussion-prompts) -- Zone 3-specific facilitation prompts for the discussion phase
