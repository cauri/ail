---
title: "Zone 4 (Industrializing) Diagnostic Questions"
description: "These questions assess whether an organization operates as an AI-first software factory where engineers design, govern, and maintain the factory itself rather than performing development work directly"
type: "diagnostic"
audience: "facilitator"
section: "diagnostic"
order: 4
---
## Purpose

These questions assess whether an organization operates as an AI-first software factory where a multi-role team -- engineers, PMs, designers, and QA engineers -- designs, governs, and maintains the factory itself rather than performing development work directly. Zone 4 competency means the organization has industrialized AI-driven development: multiple AI pipelines operate at portfolio scale with formal governance, drift management, production SLAs, and systematic evaluation. Engineers are factory designers and operators, PMs define portfolio-level production targets, designers own the factory's specification layer, and QA engineers operate the evaluation infrastructure; AI systems are the production workforce.

### Evidence Status

**These questions are theoretical and have not been validated against real organizational practice.** No organization has demonstrably achieved the fully industrialized AI development capability that Zone 4 describes. The questions are designed based on trajectory analysis from Zone 3 patterns, analogy to industrial manufacturing, and early reports from organizations pursuing elements of this level. Facilitators should treat Zone 4 assessment results as directional indicators, not validated competency measurements. The [Validation Study Plan](/research/validation-study-plan) includes Zone 4 question validation as a future phase, contingent on organizations reaching sufficient Zone 4 maturity to provide empirical data.

## Questions

All questions are answered on a 1-5 frequency scale (see Scale below). Each team member answers individually. Every question includes a "This behavior is not part of my role on this team" option for respondents whose role does not involve the behavior described. Questions measure observable behavior at the individual, team, or organizational level --- what actually happens, not what is piloted or planned.

**Referent types.** Some questions ask about your individual behavior ("I do X") --- answer based on your own practice. Other questions ask about organizational behavior ("The organization does X") --- answer based on your observation of what the organization does as a whole. Each question is labeled with its referent type. See the Referent Types section under Notes for Facilitator for guidance on interpreting responses to each type.

**Core Metric** *(Individual Behavior)*

1. I spend the majority of my time designing, tuning, and governing AI production systems at the factory level --- maintaining pipeline infrastructure, defining portfolio-level standards, or operating evaluation systems --- rather than performing individual production tasks, and this is the explicit, recognized purpose of my role in the organization.

**Additional Questions**

2. *(Organizational Behavior)* The organization operates formal governance over its AI development pipelines. *This question is scored as a composite of two sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **2a.** Pipeline changes go through defined approval workflows with audit trails for AI-generated output and compliance verification.
    - **2b.** Defined escalation paths exist and are followed when pipelines produce output outside acceptable bounds.

3. *(Organizational Behavior)* The organization operates eval suites at portfolio scale: standardized evaluations run automatically across multiple products, teams, or codebases, with results aggregated into dashboards that inform organizational decisions about AI pipeline investment and configuration.

4. *(Organizational Behavior)* The organization systematically detects and remediates drift in AI pipeline performance. *This question is scored as a composite of two sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **4a.** The organization proactively detects drift in AI pipeline performance --- including model drift from provider updates, prompt drift from accumulated configuration changes, and specification drift from evolving requirements --- before degraded output reaches production.
    - **4b.** When drift is detected, the organization remediates it systematically rather than through ad-hoc fixes, and the remediation process is documented and repeatable.

5. *(Organizational Behavior)* The organization operates AI-driven development pipelines under defined production SLAs (throughput targets, quality thresholds, failure rate bounds) that are monitored, reported on, and enforced with the same rigor as production system SLAs.

6. *(Individual Behavior)* I operate at the portfolio level --- defining what the AI production system should produce across multiple products or capability domains, specifying system-level acceptance criteria, and managing the tension between production volume and quality governance.

7. *(Individual Behavior)* I rotate between factory design, evaluation infrastructure, and production operations roles --- building cross-functional understanding of the full AI production system rather than specializing in a single aspect of pipeline management.

8. *(Organizational Behavior)* The organization has integrated design and UX functions into the factory system: design standards, component libraries, and interaction specifications are encoded as factory inputs that AI pipelines consume and validate against, with automated design compliance verification at portfolio scale.

9. *(Organizational Behavior)* The organization operates quality governance at the factory level: standardized quality criteria, acceptance thresholds, and risk assessment frameworks are applied uniformly across all products in the portfolio, with systematic escalation paths when any product falls below quality thresholds.

10. *(Organizational Behavior)* The organization maintains ethical governance of its AI production pipelines. *This question is scored as a composite of two sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **10a.** The organization systematically monitors for bias in AI-generated outputs, maintains accountability structures for AI-caused harm, and provides workforce transition support for affected roles.
    - **10b.** The organization regularly reviews which software categories are appropriate for AI-driven production versus those requiring human authorship, and acts on those reviews.

## Scale

| Response | Meaning |
|----------|---------|
| N/A | This behavior is not part of my role on this team |
| 1 | Never |
| 2 | Rarely |
| 3 | Sometimes |
| 4 | Often |
| 5 | Always |

The "N/A" option is visually separated from the frequency scale to make clear that it is not a score --- it indicates that the question does not apply to the respondent's role. See Interpreting N/A Responses under Notes for Facilitator.

## Notes for Facilitator

**Important: Zone 4 assessment requires cross-team validation.** A single team may not have visibility into portfolio-scale behaviors. See the final Common Trap below for details on supplementing team workshops with cross-team validation.

### Referent Types

Zone 4 questions use two referent types. Understanding the distinction is important for correct interpretation and scoring.

**Individual Behavior questions (Questions 1, 6, 7)** use first-person "I" phrasing. Each respondent reports on their own behavior. When aggregated, these composites measure whether team members share a common individual practice (the direct consensus model). Low agreement on these questions means team members have genuinely different individual practices --- this is behavioral variance, not measurement error.

**Organizational Behavior questions (Questions 2, 3, 4, 5, 8, 9, 10)** use "The organization" phrasing. Each respondent reports their perception of what the organization does. When aggregated, these composites measure whether team members share a common perception of organizational practice (the referent-shift consensus model). Low agreement on these questions may indicate either genuine inconsistency in organizational practice OR differences in respondent visibility into organizational-level behaviors. For Zone 4, the latter is especially relevant --- individual team members may have limited visibility into portfolio-scale governance, drift management, or evaluation infrastructure. When organizational-behavior questions show high variance, probe whether the variance reflects genuine inconsistency or visibility gaps before interpreting it as a competency deficit.

### Interpreting N/A Responses

The "This behavior is not part of my role on this team" option replaces the previous approach of facilitator-directed question skipping. Respondents determine for themselves whether each question applies to their role on the team.

**Before the discussion phase**, scan the response sheet for "not part of my role" selections. Flag any that appear implausible given the respondent's role:
- Questions 2, 3, 4, 5, 8, 9, 10 (organizational behavior): These describe organizational-level behaviors that every team member should be able to observe. A "not part of my role" response on an organizational question is unusual and should be probed --- it may indicate the respondent does not have visibility into the behavior rather than that the behavior is role-inapplicable.
- Questions 1, 6, 7 (individual behavior): These are legitimately role-specific. A PM selecting "not part of my role" on Question 1 (factory design time allocation) is appropriate. An engineer selecting "not part of my role" on Question 7 (role rotation) is worth probing --- it may reflect a genuine organizational constraint or may reflect avoidance.

**During the discussion phase**, probe any flagged responses: "I noticed you selected 'not part of my role' on Question N. Can you help me understand --- is this behavior something that genuinely does not apply to your work, or is it something you have not had the opportunity to do?"

**For scoring**, see the minimum-n rules in the [Scoring Thresholds](/toolkit/scoring-thresholds) document. "Not part of my role" responses are excluded from the question composite denominator. They are not treated as zeros or missing data --- they are legitimate exclusions that reduce the effective sample size for that question.

### What to Watch For

- **Factory orientation is the defining identity --- for every role.** The core metric (Question 1) tests whether respondents see themselves as factory designers and operators. This is a profound identity shift from Zone 3's "systems specifier." For engineers, this means maintaining pipeline infrastructure. For PMs, this means defining portfolio-level standards and production targets. For designers, this means operating the factory's specification layer. For QA, this means operating evaluation systems at portfolio scale. Probe: "How do you describe your role to someone outside the organization? What does a typical week look like for you? How much of your time is spent on factory-level systems versus individual production tasks?"

- **Governance should be formal, not informal.** Question 2 asks about formal governance. If pipeline changes go through ad-hoc review rather than defined approval workflows, if there are no audit trails, or if compliance is verified manually and inconsistently, the governance is not yet industrialized. Ask: "Walk me through what happens when someone wants to change an AI pipeline configuration. What approvals are required? Where is the audit trail?"

- **Portfolio scale is the differentiator from Zone 3.** Zone 3 teams may have excellent eval harnesses for their own codebase. Zone 4 requires these evaluations to operate across the portfolio. Ask: "Do your evals cover just your team's codebase, or do they run across multiple products? Who sees the aggregated results? What decisions are made at the portfolio level based on eval data?"

- **Drift management should be proactive.** Question 4 asks about detecting drift before it causes problems. If the organization only discovers pipeline degradation through production incidents or user complaints, drift management is reactive, not proactive. Ask: "How do you find out when a model provider update affects your pipelines? What happened the last time a provider changed something?"

### Common Traps

- **Confusing mature Zone 3 with Zone 4.** A team with excellent CAT, eval harnesses, and observability is a mature Zone 3 team. Zone 4 requires portfolio-scale operations, formal governance, and the factory orientation. The shift is from "we engineer our AI systems" to "we operate an AI software factory."

- **Treating Zone 4 as a tooling problem.** Zone 4 is primarily an organizational and governance challenge. Having sophisticated tooling does not mean the organization has industrialized. Look for governance processes, portfolio-level decision-making, and the engineering identity shift.

- **Overestimating competency based on ambition.** Organizations that are excited about AI and have strong executive sponsorship may rate themselves highly on Zone 4 questions based on what they plan to do rather than what they actually do habitually. Probe for evidence of current, regular practice: "When was the last time this happened? How often does it happen? What happens when you skip it?"

- **Confusing governance documentation with governance practice.** An organization may have written governance policies for AI pipelines without actually following them consistently. The questions ask about habitual behavior, not documented intent. Ask: "Walk me through the last pipeline change. Did it follow the governance process? What about the one before that?"

- **Assessing portfolio-scale behaviors in a single-team workshop.** Zone 4 questions ask about organizational-level behaviors that span multiple teams and products. A single team may not have visibility into whether portfolio-scale evaluation, drift management, or cross-functional rotation is actually happening organization-wide. Consider supplementing team workshops with cross-team validation of Zone 4 claims.

- **Misinterpreting "not part of my role" on organizational questions.** If a respondent selects "not part of my role" on an organizational-behavior question (Q2-5, Q8-10), this likely reflects a visibility gap rather than genuine role-inapplicability. Organizational behaviors are observable by anyone in the organization. Probe to distinguish "I cannot observe this" from "this does not apply to me." If multiple respondents lack visibility into organizational-level behaviors, that itself is a diagnostic finding --- it suggests the organization's governance and evaluation practices may not be as transparent or well-communicated as Zone 4 requires.

### Cross-Functional Probe Questions (Pilot)

The following questions are not yet scored items. They are facilitator probes to assess whether the Zone 4 transformation extends beyond engineering into portfolio-level product management, factory-integrated design, and factory-level quality governance. Use them during the discussion phase to gather data for future diagnostic refinement.

**These probes are required for valid cross-functional assessment**, not optional enrichment. Zone 4 scored questions address PM (Question 6), design (Question 8), and QA (Question 9) at the factory level, but each allocates only a single scored item. Without these probes, the facilitator's assessment of Zone 4 may overstate organizational maturity by reflecting primarily engineering and governance adoption.

- **PM as portfolio production manager:** "Beyond defining portfolio-level production targets (Question 6), how does the PM function navigate the tension between production volume and quality governance in practice? Can a PM describe a specific decision where they chose to constrain production output based on quality governance data? What organizational mechanisms exist for PMs to influence pipeline configuration based on product-level feedback?"
- **PM and quality governance integration:** "When quality governance data (Question 9) indicates a product is falling below thresholds, what role does the PM play in the escalation and remediation process? Is PM involvement systematic or ad-hoc?"
- **Designer as factory specification architect:** "Beyond encoding design standards as factory inputs (Question 8), how do designers validate that the factory's specification layer accurately reflects design intent at portfolio scale? Can a designer describe a case where automated design compliance verification caught a systematic design deviation across multiple products? What happens when the factory's design specification layer conflicts with a product-specific design need?"
- **Designer feedback into factory configuration:** "When AI pipelines produce output that passes automated design compliance but does not meet design quality standards, how does the design function feed that signal back into factory configuration? Is this feedback loop systematic or ad-hoc?"
- **QA as factory-level evaluation architect:** "Beyond operating standardized quality criteria across the portfolio (Question 9), how does QA influence which quality thresholds are set and how they evolve? Can QA describe a specific case where evaluation data led to a change in quality governance policy --- not just an escalation of an individual product, but a systematic change to how the factory assesses quality?"
- **Cross-functional governance participation:** "When the organization reviews ethical governance of AI production (Question 10), are PM, design, and QA functions represented in those reviews with defined roles, or is ethical governance primarily an engineering and leadership function?"

These probes address the concern that Zone 4's 10 scored questions, while explicitly multi-role in scope, allocate only a single scored item per non-engineering role. Data from these probes will inform whether future versions of the diagnostic should include additional scored cross-functional questions at the factory level.

---

## Related Documentation

- [Zone 3 Questions](/toolkit/zone-3-questions) -- The prerequisite zone questionnaire; Zone 3 competency must be established before Zone 4 assessment
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to interpret Zone 4 scores
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Full Zone 4 definition; provides context for interpreting responses
- [Technique Catalog](/toolkit/technique-catalog) -- Zone 4 techniques including portfolio-scale evals and factory governance
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script that administers these questions in the workshop context
- [Discussion Prompts](/toolkit/discussion-prompts) -- Zone 4-specific facilitation prompts for the discussion phase
- [Validation Study Plan](/research/validation-study-plan) -- The research plan for validating Zone 4 questions; facilitators with Zone 4 findings should contribute observations
