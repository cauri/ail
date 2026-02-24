---
title: "ACE Diagnostic: Management Report"
description: "A sample completed management report summarizing diagnostic results across multiple teams at FinServ Corp."
section: "reports"
type: "report"
audience: "leadership"
order: 4
---
## FinServ Corp Engineering — January 2026

**Organization:** FinServ Corp
**Date:** February 6, 2026
**Prepared by:** Maya Okafor
**Assessment Period:** January 12 – January 30, 2026
**Teams Assessed:** 5 teams (32 total participants)
**Zones Assessed:** Zone 1 (Augmenting), Zone 2 (Integrating)

---

> **Confidentiality:** This report presents systemic patterns and organizational investment opportunities observed across assessed teams. It does not identify individual team scores, team-specific discussion content, or team-identified blockers. Each participating team has received a separate, confidential team report. The separation between team reports and this management report is not a formality — it is the mechanism by which teams can self-assess honestly. Teams agreed to participate on the understanding that their specific results would not be visible to leadership.

---

## Executive Summary

FinServ Corp's engineering organization has meaningful AI tool adoption underway. Across five delivery teams, individual engineers are using AI coding tools regularly, and in several cases this usage is becoming habitual. The organization is not, however, operating at the team-level AI integration that characterizes Zone 2 competency, and the gap between where teams are and where the industry baseline is heading is widening faster than individual adoption can close it on its own.

Four of the five teams assessed are operating at Zone 1 — two at the Established stage and two at the Developing stage. One team has crossed into Zone 2 Emerging, with a committed shared workflow in its early stages. No team has achieved Zone 2 Established or beyond. This distribution is consistent with an organization where individual AI adoption has been left largely to individual initiative: engineers who care about it have made progress, but that progress has not yet become a team capability. The practical consequence is high variance — both within teams and across teams — and fragility under pressure.

The five assessments revealed a set of systemic conditions that are not within individual teams' power to fix. Inconsistent tool access across teams, the absence of an organizational AI usage policy, compliance-related friction that suppresses adoption in the most regulated workstreams, and no shared templates or configuration standards are all organizational-level problems. These conditions are not obstacles to Zone 1 progress, but they are direct blockers to Zone 2. Without organizational action on these items, the teams that are currently at Zone 1 Established will stall — not because the teams lack motivation or capability, but because the infrastructure for Zone 2 does not exist.

The recommended path forward is a focused 18-month Zone 2 adoption program for all five teams, with the Developer Experience team evaluated for Zone 3 consideration at the 12-month mark. The investments required are not large in absolute terms: a clear AI usage policy, tool standardization, shared configuration templates, and PM training. What they require is organizational prioritization and a sponsor with the authority to make them happen.

---

## Organization Context

FinServ Corp is a financial services company of approximately 1,800 employees, with a software engineering organization of roughly 220 engineers across product delivery, platform, data, and mobile workstreams. Engineering teams operate under significant compliance requirements imposed by relevant financial services regulations. Production deployments go through a multi-stage release process, and code that touches customer financial data requires security review before shipping.

The organization initiated this ACE diagnostic as part of a broader AI-augmented engineering initiative approved by the CTO in Q3 2025. The stated goal of that initiative is for FinServ Corp engineering teams to reach Zone 2 competency across all delivery teams within 18 months. Five teams were selected for the initial diagnostic cohort: Payments Platform, Core Banking, Developer Experience, Data Science, and Mobile.

---

## Assessment Overview

Five teams participated in facilitated ACE diagnostic workshops between January 12 and January 30, 2026. All workshops were conducted with intact delivery teams; no team was split for the assessment. Total participants: 32 across the five teams, representing software engineers, tech leads, product managers, designers, QA engineers, and in one case a data scientist.

### Zone Distribution

```
Zone / Stage         | Emerging | Developing | Established | Exemplary | Total
---------------------|----------|------------|--------|-------------|------
Zone 0 (Baseline)    |    0     |     0      |   0    |      0      |   0
Zone 1 (Augmenting)  |    0     |     2      |   2    |      0      |   4
Zone 2 (Integrating) |    1     |     0      |   0    |      0      |   1
Zone 3 (Accelerating)|    0     |     0      |   0    |      0      |   0
---------------------|----------|------------|--------|-------------|------
Total                |    1     |     2      |   2    |      0      |   5
```

All five teams have meaningful AI adoption underway. The distribution clusters at Zone 1 Developing and Established, with one team beginning the Zone 2 transition. No teams are at Zone 0, and no teams are at Zone 3 or beyond. The Zone 2 Emerging team is the most advanced and represents the current ceiling for the organization.

---

## Systemic Findings

### Finding 1: Inconsistent AI Tool Licensing Across Teams

Some teams have full AI tool coverage for all engineers; others have partial coverage, with some engineers on AI tool waitlists or using personal accounts. This inconsistency is not related to team performance or seniority — it reflects the order in which license requests were submitted and approved.

**Evidence:** Raised in workshops conducted with 4 of 5 assessed teams. In multiple cases, engineers described delaying AI-assisted tasks to wait for a colleague's turn on a shared license, or defaulting to a free-tier tool that they knew was less capable than the organizational standard.

**Implication:** Uneven tool access creates within-team skill variance that teams cannot resolve on their own. It also slows Zone 2 adoption specifically: One Team One Setup requires that all team members use the same tooling and configuration, which is impossible if some members do not have access to the tools.

---

### Finding 2: Absence of an Organizational AI Usage Policy

FinServ Corp does not have a published policy governing AI tool usage in software development. Teams are operating without clear guidance on which tools are approved, what types of data (proprietary source code, customer financial data, internal documentation) can be shared with AI services, and what review standards apply to AI-generated code that touches regulated systems.

**Evidence:** Raised as a concern in all 5 workshop discussions. Engineers and tech leads described making individual judgment calls about what to share with AI tools, with some taking a conservative approach that significantly limits utility (not pasting any code into AI tools) and others taking a permissive approach that may exceed appropriate data handling boundaries. Neither group has organizational backing for their position.

**Implication:** Policy ambiguity suppresses adoption in a compliance-sensitive environment. The engineers who are most careful about regulatory requirements are also the ones most likely to restrict AI tool usage out of uncertainty. Paradoxically, the absence of a policy disproportionately affects the teams operating in the most sensitive workstreams. A clear, permissive-within-bounds policy would enable adoption in those teams rather than suppress it.

---

### Finding 3: Compliance and Security Friction Creates Uneven AI Access

Teams working in workstreams subject to tighter compliance requirements — financial transaction processing, customer data management — experience meaningfully more friction when attempting to use AI tools for their core work. This friction arises both from the absence of a policy (Finding 2) and from additional process overhead that applies to changes in sensitive systems.

**Evidence:** Observed as a distinct pattern in 3 of 5 assessed teams. Teams in these workstreams reported longer feedback cycles that reduce the immediate feedback loop AI tools depend on, uncertainty about whether AI-generated code meets security review requirements, and hesitation to use agentic AI workflows in contexts where auditability of code origin may matter.

**Implication:** If left unaddressed, compliance friction will result in a persistent gap between teams in regulated workstreams and teams in less regulated ones. Teams that cannot use AI tools freely in their core work will remain at lower zone levels indefinitely, not because of capability gaps but because organizational process does not accommodate AI-assisted development. This is a structural inequity that the organization should address explicitly.

---

### Finding 4: Individual AI Champions Exist Without Organizational Support

Across all five teams, there are individual engineers — typically senior engineers or tech leads — who are significantly more AI-competent than their teammates, have developed effective personal configurations and workflows, and are informally serving as AI resources for the people around them. These individuals have reached their current level through personal initiative. Their knowledge is not externalized, not shared across teams, and at risk of being lost if they change roles or leave.

**Evidence:** Identified in every assessed team. In multiple workshops, teammates described a specific person who "knows this stuff" and who they go to with AI questions. In no case had that person's knowledge been formalized into team documentation, shared configuration, or structured training.

**Implication:** The organization currently benefits from individual AI champions but does not benefit from what they know in any systematic way. As those individuals' contexts change, the AI capability that depends on them will degrade. More immediately, the absence of organizational support means these individuals are doing work that should be supported — creating templates, advising colleagues, developing configurations — without time, recognition, or mandate to do it well.

---

### Finding 5: No Shared Configuration Standards or Templates Across Teams

No organizational templates exist for team-level AI configuration (AGENTS.md or equivalent). Each team that has begun Zone 2 practices has created its own configuration from scratch. Teams that have not yet begun Zone 2 practices have no starting point to work from.

**Evidence:** Confirmed across all 5 assessed teams. The one team operating at Zone 2 Emerging developed its configuration independently. Other teams described uncertainty about "what a shared AI configuration should even look like" as a reason they had not started.

**Implication:** Without shared templates and examples, every team must independently solve the same problems: what context to include in an AGENTS.md, how to structure mandatory feedback loops, how to express PM criteria in AI-verifiable form. This duplication of discovery work slows adoption and produces inconsistent results. Shared templates would allow teams to start from a tested baseline rather than from a blank page.

---

### Finding 6: Adoption Anxiety and Role Identity Concerns Are Present but Unaddressed

Across multiple teams, workshop discussions surfaced emotional and identity-level concerns about AI adoption that go beyond tooling and process. Team members expressed uncertainty about how their roles will change as AI-assisted workflows become standard — particularly in non-engineering roles where the shift from manual to AI-augmented work feels like a redefinition of professional identity rather than just a tool upgrade.

**Evidence:** Observed in workshop discussions with 4 of 5 assessed teams. Non-engineering participants (PMs, designers, QA engineers) were more likely to express these concerns explicitly, but engineers also described discomfort with the pace of change and uncertainty about what "senior" means when AI handles tasks that previously required years of experience.

**Implication:** Adoption anxiety that is not acknowledged tends to manifest as passive resistance — delayed adoption, skepticism framed as quality concerns, or quiet reversion to manual practices when not observed. Organizations that treat AI adoption as a purely technical initiative and ignore the emotional dimension tend to see slower and more uneven adoption. Acknowledging these concerns explicitly — in team retrospectives, in leadership communication, and in training design — does not slow adoption; it removes a hidden drag on it.

---

## Investment Themes

### Theme 1: AI Tooling Standardization and Access

**Addresses findings:** 1, 3
**Benefits:** All 5 assessed teams; effect is largest for teams currently at Zone 1 Developing where uneven access is blocking team-level adoption
**Priority:** High
**Estimated effort:** Medium — requires procurement process changes and budget allocation; deliverable is a decision and a standard, not an infrastructure build

Establish a standardized set of approved AI tools for software development at FinServ Corp and ensure all engineering team members — engineers, tech leads, and product managers — have access. The standard should include at minimum an AI coding assistant and an AI assistant suitable for non-engineering roles. Procurement should be streamlined to allow same-week provisioning rather than multi-week approval cycles. Budget should be allocated at the team level, not as individual expense requests.

---

### Theme 2: AI Usage Policy for Financial Services Contexts

**Addresses findings:** 2, 3
**Benefits:** All 5 assessed teams; effect is largest for teams in compliance-sensitive workstreams
**Priority:** High
**Estimated effort:** Medium — requires collaboration between engineering, security, legal, and compliance; deliverable is a policy document and accompanying guidance, not a system build

Develop and publish a clear AI usage policy tailored to FinServ Corp's regulatory context. The policy should specify: approved AI tools and their acceptable use cases, data classification guidelines for AI input (what source code, data types, and documentation can be shared with which services), expectations for reviewing AI-generated code in regulated workstreams, and the relationship between AI-generated code and existing security review requirements. A policy that is clear about what is allowed is more valuable than a policy that is exhaustive about what is prohibited. The goal is to remove the uncertainty that suppresses adoption, not to add new compliance burdens.

---

### Theme 3: Shared AI Configuration Templates and Zone 2 Enablement

**Addresses findings:** 4, 5
**Benefits:** All 5 teams preparing for Zone 2; most immediate benefit to teams currently at Zone 1 Established
**Priority:** High
**Estimated effort:** Low-Medium — leverages knowledge already present in the AI champions identified in Finding 4; primary investment is facilitating knowledge extraction and documentation

Develop a library of shared AI configuration templates that teams can use as Zone 2 starting points: an AGENTS.md template for the FinServ Corp codebase context, a Plan/Code/Verify workflow guide, mandatory feedback loop configuration examples, and PM acceptance criteria format guidance. The team currently at Zone 2 Emerging is the natural source of this content — their configuration should be documented, reviewed, and made available as an organizational starting point. The individual AI champions identified across teams should be given explicit time and mandate to contribute.

---

### Theme 4: PM and Non-Engineering Role AI Training

**Addresses findings:** 1, 4
**Benefits:** All 5 assessed teams; effect is largest for teams where PM AI adoption is currently low
**Priority:** Medium
**Estimated effort:** Low-Medium — training development and delivery; can leverage existing examples from PM participants who are already using AI tools effectively

Zone 2 requires that product managers write acceptance criteria in AI-verifiable form and participate in the team's agentic workflow. Most PMs assessed have begun using AI tools but are not yet writing criteria in a form that AI agents can consume directly. Designers need to integrate their design context and standards into the team's shared AI configuration. QA engineers need to adapt testing strategies for AI-generated code patterns. Training that is specific to each non-engineering role — not generic AI training — is required. For PMs: writing structured acceptance criteria, using AI for user research synthesis and synthesis-to-spec conversion, and what Zone 2 agentic workflows need from PM-authored artifacts. For designers: contributing design context to the shared AI configuration, using AI to maintain design system documentation, and integrating design review into the agentic workflow. For QA: adapting test strategies for AI-generated code, using AI for test case generation and coverage analysis, and designing quality gates for AI output. Delivery format should be hands-on, not lecture: non-engineering roles learn AI practices best by doing them with real examples from their own work.

---

## Target Zone Recommendations

| Team | Current Zone/Stage | Recommended Target | Timeline | Rationale |
|---|---|---|---|---|
| Payments Platform | Zone 1 Established | Zone 2 Established | 18 months | Strong Zone 1 foundation and PM AI adoption create near-term Zone 2 competency; primary needs are shared configuration and Plan/Code/Verify discipline. |
| Core Banking | Zone 1 Developing | Zone 2 Established | 18 months | Compliance friction is the primary barrier; policy investment (Theme 2) is prerequisite to progress. |
| Developer Experience | Zone 2 Emerging | Zone 2 Established | 12 months | Already in Zone 2; with organizational support on templates and tooling, Competency is achievable in 12 months. Evaluate for Zone 3 competency at 12-month re-assessment. |
| Data Science | Zone 1 Developing | Zone 2 Established | 18 months | Role composition (data scientists, not primarily software engineers) requires adapted Zone 2 content; standard Zone 2 templates will need adjustment for this team's workflow. |
| Mobile | Zone 1 Established | Zone 2 Established | 18 months | Similar profile to Payments Platform; benefits most from organizational investments in tooling standardization and shared templates. |

These targets are conditional on the organizational investments in Themes 1-3 being made. Without the AI usage policy (Theme 2) in particular, Core Banking and Data Science teams face structural blockers that cannot be resolved at the team level.

---

## Recommended Next Steps for Leadership

The following actions are recommended for CTO, VP Engineering, and organizational sponsors — not for individual teams. Individual teams have received their own next steps in their team reports.

1. **Assign a sponsor for the AI usage policy.** This is the highest-leverage action available at the organizational level. Assign a named individual — ideally from the intersection of engineering and legal/compliance — to own the policy deliverable with a 6-week deadline. The policy does not need to be perfect on first publication; it needs to be clear, published, and iterable.

2. **Approve team-level AI tool budget.** Move AI tool licensing from individual expense approval to a team-level budget line. Set a standard that includes both coding tools and general AI assistants, for all engineering team members including PMs. Provision for all current members as the first action.

3. **Give the Developer Experience team a formal mandate as an internal AI practices resource.** The DevEx team is the most advanced and is already doing the work of developing shared patterns informally. Making this mandate explicit — with time allocation and organizational visibility — accelerates the benefit to other teams and recognizes work that is already happening.

4. **Commission Zone 2 shared template development.** Use the DevEx team's existing configuration as a starting point. Engage the individual AI champions identified across teams to contribute. Target: a library of FinServ Corp-specific Zone 2 starting materials available to all teams within 60 days.

5. **Schedule a 6-month re-assessment.** The next formal diagnostic should be conducted in July-August 2026. This provides enough time for the organizational investments to take effect and for teams to act on their individual recommendations. A re-assessment at 3 months is too early to see habit formation; 12 months is too long to wait to course-correct if investments stall.

6. **Consider embedded Artisan support for the Zone 2 transition.** The organizational investments described above create the conditions for Zone 2 adoption. For teams that would benefit from hands-on support in building Zone 2 practices, an embedded Artisan team — experienced engineers, product managers, and designers who join the team to deliver software together while mentoring through the shared work — can accelerate the transition. The Artisan team works the same backlog, demonstrates practices like Plan/Code/Verify and shared AGENTS.md through daily collaboration, and ramps down as the client team builds competency. This approach is particularly valuable for the first team to adopt Zone 2 practices, as their experience can then be leveraged to support other teams.

---

## Methodology Note

The ACE (AI Competency Evaluation) framework diagnostic is a facilitated self-assessment for measuring how deeply AI-assisted practices have become habitual within software delivery teams. The diagnostic does not measure knowledge, intent, or best-day performance. It measures observable behavior — specifically, what teams actually do under normal conditions and under pressure.

Each team workshop ran 90-120 minutes. Team members individually scored 10-12 questions per zone on a 1-5 frequency scale (1 = Never, 5 = Always) and then participated in facilitated discussion about scores, variance, and blockers. Zone competency requires a composite average of 4.7 or higher, a standard deviation across all individual responses of 0.5 or lower, and no single question composite below 4.0.

Results are reported through a dual-report model. Each team received a confidential team report with their specific scores, discussion themes, and investment recommendations. This management report aggregates systemic patterns across all five teams without disclosing team-specific data. The separation is non-negotiable: the validity of the self-assessment depends on teams being confident that their candid responses will not be reported upward in identifiable form.

The scoring thresholds are expert-judgment-based starting points informed by the Agile Fluency Model and DORA measurement principles. They have not yet been validated against empirical data. Zone classifications should be interpreted in conjunction with the behavioral evidence from workshop discussions, not as standalone numeric determinations.

---

*This report was prepared by Maya Okafor following ACE diagnostic workshops conducted January 12-30, 2026 with 5 teams at FinServ Corp. Individual team results are confidential to each team and are not disclosed in this report. Questions about this report or the ACE methodology may be directed to Maya Okafor.*

---

*[Framework reference: This is a sample report for facilitator training. See the related materials below.]*

## Related Documentation

- [Management Report Template](/toolkit/management-report-template) -- The blank template used to produce reports like this one
- [Sample Team Report](/toolkit/sample-team-report) -- The companion team report for the Payments Platform team in this same engagement
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- Reference for the competency stage determinations and zone distributions cited in this report
- [Engagement Model](/toolkit/engagement-model) -- How management reports fit into the Phase 2 Reporting deliverables
- [Interpreting Results](/toolkit/interpreting-results) -- How to read and communicate results like those shown in this sample
