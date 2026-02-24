---
title: "Zone 4 (Industrializing) Diagnostic Questions"
description: "These questions assess whether an organization operates as an AI-first software factory where engineers design, govern, and maintain the factory itself rather than performing development work directly"
section: "diagnostic"
order: 4
---
## Purpose

These questions assess whether an organization operates as an AI-first software factory where a multi-role team -- engineers, PMs, designers, and QA engineers -- designs, governs, and maintains the factory itself rather than performing development work directly. Zone 4 competency means the organization has industrialized AI-driven development: multiple AI pipelines operate at portfolio scale with formal governance, drift management, production SLAs, and systematic evaluation. Engineers are factory designers and operators, PMs define portfolio-level production targets, designers own the factory's specification layer, and QA engineers operate the evaluation infrastructure; AI systems are the production workforce.

### Evidence Status

**These questions are theoretical and have not been validated against real organizational practice.** No organization has demonstrably achieved the fully industrialized AI development capability that Zone 4 describes. The questions are designed based on trajectory analysis from Zone 3 patterns, analogy to industrial manufacturing, and early reports from organizations pursuing elements of this level. Facilitators should treat Zone 4 assessment results as directional indicators, not validated competency measurements. The [Validation Study Plan](/research/validation-study-plan) includes Zone 4 question validation as a future phase, contingent on organizations reaching sufficient Zone 4 maturity to provide empirical data.

## Questions

All questions are answered on a 1-5 frequency scale (see Scale below). Each team member answers individually. Questions measure observable organizational behavior --- what the engineering organization actually does at scale, not what it is piloting or planning.

**Core Metric**

1. Engineers spend the majority of their time designing, tuning, and governing AI development pipelines and factory infrastructure rather than directly implementing features, fixing bugs, or reviewing individual AI outputs --- and this is the explicit, recognized purpose of the engineering role in the organization.

**Additional Questions**

2. The organization operates formal governance over its AI development pipelines --- including approval workflows for pipeline changes, audit trails for AI-generated output, compliance verification, and defined escalation paths when pipelines produce output outside acceptable bounds.

3. Eval suites operate at portfolio scale: standardized evaluations run automatically across multiple products, teams, or codebases, with results aggregated into dashboards that inform organizational decisions about AI pipeline investment and configuration.

4. The organization systematically detects and remediates drift in AI pipeline performance --- including model drift from provider updates, prompt drift from accumulated configuration changes, and specification drift from evolving requirements --- before degraded output reaches production.

5. AI-driven development pipelines operate under defined production SLAs (throughput targets, quality thresholds, failure rate bounds) that are monitored, reported on, and enforced with the same rigor as production system SLAs.

6. Product managers operate at the portfolio level --- defining what the AI production system should produce across multiple products or capability domains, specifying system-level acceptance criteria, and managing the tension between production volume and quality governance.

7. Engineers rotate between factory design, evaluation infrastructure, and production operations roles --- building cross-functional understanding of the full AI production system rather than specializing in a single aspect of pipeline management.

8. Design and UX functions are integrated into the factory system: design standards, component libraries, and interaction specifications are encoded as factory inputs that AI pipelines consume and validate against, with automated design compliance verification at portfolio scale.

9. Quality governance operates at the factory level: standardized quality criteria, acceptance thresholds, and risk assessment frameworks are applied uniformly across all products in the portfolio, with systematic escalation paths when any product falls below quality thresholds.

10. The organization maintains ethical governance of its AI production pipelines --- including systematic monitoring for bias in AI-generated outputs, accountability structures for AI-caused harm, workforce transition support for affected roles, and regular review of which software categories are appropriate for AI-driven production versus those requiring human authorship.

## Scale

1 = Never | 2 = Rarely | 3 = Sometimes | 4 = Often | 5 = Always

## Notes for Facilitator

**Important: Zone 4 assessment requires cross-team validation.** A single team may not have visibility into portfolio-scale behaviors. See the final Common Trap below for details on supplementing team workshops with cross-team validation.

### What to Watch For

- **Factory orientation is the defining identity.** The core metric tests whether engineers see themselves as factory designers and operators. This is a profound identity shift from Zone 3's "process designer." Probe: "How do you describe your role to someone outside the organization? What does a typical week look like for you? How much of your time is spent on pipeline infrastructure versus direct development work?"

- **Governance should be formal, not informal.** Question 2 asks about formal governance. If pipeline changes go through ad-hoc review rather than defined approval workflows, if there are no audit trails, or if compliance is verified manually and inconsistently, the governance is not yet industrialized. Ask: "Walk me through what happens when someone wants to change an AI pipeline configuration. What approvals are required? Where is the audit trail?"

- **Portfolio scale is the differentiator from Zone 3.** Zone 3 teams may have excellent eval harnesses for their own codebase. Zone 4 requires these evaluations to operate across the portfolio. Ask: "Do your evals cover just your team's codebase, or do they run across multiple products? Who sees the aggregated results? What decisions are made at the portfolio level based on eval data?"

- **Drift management should be proactive.** Question 4 asks about detecting drift before it causes problems. If the organization only discovers pipeline degradation through production incidents or user complaints, drift management is reactive, not proactive. Ask: "How do you find out when a model provider update affects your pipelines? What happened the last time a provider changed something?"

### Common Traps

- **Confusing mature Zone 3 with Zone 4.** A team with excellent CAT, eval harnesses, and observability is a mature Zone 3 team. Zone 4 requires portfolio-scale operations, formal governance, and the factory orientation. The shift is from "we engineer our AI systems" to "we operate an AI software factory."

- **Treating Zone 4 as a tooling problem.** Zone 4 is primarily an organizational and governance challenge. Having sophisticated tooling does not mean the organization has industrialized. Look for governance processes, portfolio-level decision-making, and the engineering identity shift.

- **Overestimating competency based on ambition.** Organizations that are excited about AI and have strong executive sponsorship may rate themselves highly on Zone 4 questions based on what they plan to do rather than what they actually do habitually. Probe for evidence of current, regular practice: "When was the last time this happened? How often does it happen? What happens when you skip it?"

- **Confusing governance documentation with governance practice.** An organization may have written governance policies for AI pipelines without actually following them consistently. The questions ask about habitual behavior, not documented intent. Ask: "Walk me through the last pipeline change. Did it follow the governance process? What about the one before that?"

- **Assessing portfolio-scale behaviors in a single-team workshop.** Zone 4 questions ask about organizational-level behaviors that span multiple teams and products. A single team may not have visibility into whether portfolio-scale evaluation, drift management, or cross-functional rotation is actually happening organization-wide. Consider supplementing team workshops with cross-team validation of Zone 4 claims.

---

## Related Documentation

- [Zone 3 Questions](/toolkit/zone-3-questions) -- The prerequisite zone questionnaire; Zone 3 competency must be established before Zone 4 assessment
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to interpret Zone 4 scores
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Full Zone 4 definition; provides context for interpreting responses
- [Technique Catalog](/toolkit/technique-catalog) -- Zone 4 techniques including portfolio-scale evals and factory governance
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script that administers these questions in the workshop context
- [Discussion Prompts](/toolkit/discussion-prompts) -- Zone 4-specific facilitation prompts for the discussion phase
- [Validation Study Plan](/research/validation-study-plan) -- The research plan for validating Zone 4 questions; facilitators with Zone 4 findings should contribute observations
