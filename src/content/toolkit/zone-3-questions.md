---
title: "Zone 3 (Accelerating) Diagnostic Questions"
description: "These questions assess whether an organization has shifted from AI-integrated team workflows to AI-driven core development where humans specify, review, and orchestrate while AI implements."
section: "diagnostic"
order: 3
---
## Purpose

These questions assess whether an organization has shifted from AI-integrated team workflows to AI-driven core development where humans specify, review, and orchestrate while AI implements. Zone 3 competency means the entire production pipeline has transformed: engineers operate as process designers, PMs as behavioral specifiers, designers as design systems architects, and QA engineers as evaluation pipeline specialists. The questions measure organizational-level behaviors: Continuous Alignment Testing (CAT), observability of AI-driven processes, eval harnesses, prompt versioning, cross-functional role transformation, and the emergence of the AI Engineer role.

## Questions

All questions are answered on a 1-5 frequency scale (see Scale below). Each team member answers individually. Questions measure observable behavior at the team and organizational level --- what the engineering organization actually does, not what it aspires to or is experimenting with.

**Core Metric**

1. Engineers operate as process designers who build, tune, and maintain AI-driven development systems (eval harnesses, CAT pipelines, prompt configurations) rather than performing the bulk of implementation work manually --- even when it would be faster to "just write the code" for a particular task.

**Additional Questions**

2. The team maintains a Continuous Alignment Testing (CAT) pipeline that automatically verifies AI-generated output against project standards, architectural constraints, and behavioral expectations on every change, separate from traditional CI/CD tests.

3. Engineers instrument and monitor AI-driven development processes with observability tooling --- tracking metrics such as agent success rates, rework frequency, context window utilization, and failure mode distributions --- and use this data to improve the system.

4. The team maintains an eval harness: a suite of repeatable evaluations that measure AI agent performance against known benchmarks, used to validate changes to prompts, model versions, context configurations, or workflow modifications before deploying them.

5. Prompt configurations, context templates, and agent workflow definitions are versioned, reviewed, and deployed through the same rigor as production code --- including rollback capability when a change degrades agent performance.

6. When AI-generated output fails or produces unexpected results, engineers diagnose the failure systematically (context issues, prompt drift, model limitations, specification gaps) and apply targeted fixes to the generation pipeline rather than manually correcting individual outputs.

7. Product managers include AI-specific criteria in user stories and acceptance requirements --- specifying expected agent behavior, acceptable output variance, required eval thresholds, or observability requirements --- as a standard part of story writing.

8. Designers contribute to the specification layer of the AI development pipeline --- defining UI behavioral expectations, interaction patterns, and visual standards that AI-generated implementations must satisfy, with automated checks that verify design compliance.

9. QA engineers operate as evaluation pipeline specialists: they design, maintain, and improve the automated evaluation infrastructure that validates AI-generated output at scale, rather than primarily performing manual testing of individual outputs.

10. When a task arises that could be completed faster by writing the code directly than by specifying it for an AI pipeline, engineers choose the specification approach because they are investing in pipeline capability rather than optimizing for immediate task completion. This choice is habitual, not exceptional.

## Scale

1 = Never | 2 = Rarely | 3 = Sometimes | 4 = Often | 5 = Always

## Notes for Facilitator

### What to Watch For

- **The Prime Directive is the core identity shift.** Zone 3 is fundamentally about engineers shifting from "I write code" to "I design and maintain the systems that produce code." The core metric question (Question 1) tests whether this shift has occurred. Probe: "When was the last time you chose to build a better generation pipeline instead of manually implementing a feature? What made you choose that approach?"

- **"Separate generation from decisioning" should be observable but is not a standalone scored question.** In a Zone 3 organization, the acts of generating code (AI) and deciding whether that code is acceptable (human) are distinct steps with different owners. This proficiency is assessed through its manifestation in other questions (specification design, eval harnesses, authority structures) rather than as a separate scored item. Facilitators should note evidence of this practice during discussion even though it does not have its own question. Ask: "Who generates the code? Who decides whether it ships? Are these clearly separated in your workflow?"

- **CAT is not just CI/CD.** Continuous Alignment Testing (Question 2) is distinct from traditional test suites. CAT verifies that AI-generated output aligns with project standards, architectural constraints, and behavioral expectations --- things that traditional tests may not cover. If the team says "we have CI/CD" but cannot describe alignment checks specific to AI-generated output, they have not yet established CAT.

- **Observability should produce actionable data.** Question 3 asks about monitoring AI-driven processes. If the team collects metrics but does not use them to make decisions, the observability is not yet mature. Ask: "What did your last observability insight tell you? What did you change as a result?"

- **Eval harnesses should be run regularly.** Question 4 asks about eval suites. These should be run before and after changes to the AI pipeline, not just created once. Ask: "When was the last time you ran your eval suite? What prompted it? What did you learn?"

### Cross-Functional Probe Questions (Pilot)

The following questions are not yet scored items. They are facilitator probes to assess whether the Zone 3 transformation extends beyond engineering. Use them during the discussion phase to gather data for future diagnostic refinement.

- **PM as behavioral specifier:** "Can the PM describe the behavioral envelope for the last AI-driven feature — what accuracy, latency, and failure modes were acceptable? Were these criteria defined before engineering began pipeline work?"
- **Designer as design systems architect:** "Can the designer show examples of design standards encoded as machine-verifiable inputs to the AI pipeline? Are design compliance checks automated, or does design review remain manual?"
- **QA as evaluation pipeline specialist:** "What percentage of the QA team's time is spent operating evaluation infrastructure versus manually testing individual outputs? Is the eval infrastructure the primary quality mechanism?"
- **Cross-functional accountability:** "When AI-generated output causes a problem, is accountability assignable? Can the team trace a failure to specification, verification, authority, or pipeline design?"
- **Accountability chain:** "Does the organization have a defined chain of responsibility for AI-generated output — specification accountability, verification accountability, authority accountability, and pipeline accountability? Has this chain been exercised in a real incident?"
- **Audit trail:** "Is AI-generated output traceable to the specification, context, model version, and eval results that governed its production? Could the team answer 'why did the system produce this output?' if asked by a regulator or customer?"

These probes address the concern that Zone 3's 10 scored questions are ~70% engineering-weighted and do not directly assess accountability structures. Data from these probes will inform whether future versions of the diagnostic should include scored cross-functional and accountability questions.

### Common Traps

- **Confusing sophisticated Zone 2 practices with Zone 3.** A team that has excellent AGENTS.md, thorough Plan/Code/Verify, and strong feedback loops is a mature Zone 2 team. Zone 3 requires the additional infrastructure of CAT, eval harnesses, observability, and prompt versioning. The shift is from "we use AI well in our workflow" to "we engineer the AI systems that do the work."

- **Infrastructure without identity shift.** A team may have CAT pipelines, eval harnesses, and observability dashboards but still routinely choose to write code directly rather than invest in pipeline specification. The infrastructure is a necessary but insufficient condition. Question 10 specifically tests the identity shift: do engineers choose the specification approach as a habitual default, even when writing code directly would be faster? Probe: "Tell me about the last time a team member chose to write code directly rather than specifying it for the pipeline. What was the reasoning? Was that a deliberate exception or a default behavior?"

- **Treating prompt engineering as prompt versioning.** Writing good prompts (Zone 1-2 skill) is different from versioning, reviewing, testing, and deploying prompt configurations as production artifacts (Zone 3 practice). Look for version control, review processes, and rollback capability.

- **Manual correction masquerading as pipeline improvement.** If engineers routinely fix AI output by hand rather than fixing the generation pipeline, the team is still operating in a Zone 2 pattern. Zone 3 competency means fixing the system, not the output. Question 6 specifically tests this behavior.

- **PM exclusion from AI criteria.** If product managers write traditional acceptance criteria and engineers add AI-specific criteria after the fact, the PM role has not shifted. Zone 3 PMs understand and specify AI behavioral requirements as part of their standard work.

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
