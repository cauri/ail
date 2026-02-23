---
title: "Context Analysis Template — ACE Discovery Phase"
description: "Complete this template during Phase 1 (Discovery) to produce the Context Analysis Report."
section: "consulting"
order: 4
---
## How to Use This Template

Complete this template during Phase 1 (Discovery) to produce the Context Analysis Report. Fill it in progressively as interviews and desk research proceed — do not wait until all interviews are complete before starting. Sections 1-4 can often be populated from desk research and initial engineering leadership interviews. Sections 5-8 require synthesis across all three interview tiers.

**Sources for this document:** Stakeholder interviews, publicly available company information, any internal documents shared by the client (architecture diagrams, engineering handbooks, tool inventories, policy documents), and direct observation during site visits or screen-share sessions.

**Who sees this document:** The Context Analysis is primarily a facilitator working document. A summary (not the full document) is shared with the engagement sponsor. The Initial Zone Hypothesis (Section 7) is never shared with the client before the diagnostic — sharing it would anchor team self-assessment.

---

## 1. Organization Profile

*Sources: Engagement kickoff, company website, LinkedIn, engineering leadership interviews.*

| Field | Value |
|---|---|
| Organization name | |
| Industry / sector | |
| Total headcount | |
| Engineering headcount | |
| Number of development teams | |
| Team sizes (range) | |
| Primary geographic locations | |
| Remote / hybrid / co-located | |
| Funding stage / ownership (startup, PE-backed, public, etc.) | |
| Primary product(s) or platform(s) | |
| Approximate age of primary codebase(s) | |

**Team composition notes** (narrative — describe team structure, how teams are organized, any relevant structural features such as platform teams, embedded QA, separate DevOps, etc.):

> _[Facilitator: complete after kickoff and initial interviews]_

**Tech stack snapshot** (languages, frameworks, cloud provider, primary tooling — enough to understand the engineering environment, not a full inventory):

> _[Facilitator: complete after engineering leadership interviews]_

---

## 2. AI Tool Inventory

*Sources: Engineering leadership interviews, IC interviews, IT/procurement records if available.*

**Purpose of this section:** Distinguish between tools that are officially deployed and actively used vs. tools that are theoretically available but rarely touched vs. tools in use outside of official policy (shadow IT). These three categories produce very different diagnostic contexts.

### 2a. Officially Sanctioned AI Tools

| Tool | Use Case | Deployed to Whom | Estimated Actual Usage | License / Procurement Status |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

*Usage scale: Widespread (majority of eligible users use it habitually) / Moderate (regular use by a significant minority) / Sparse (occasional use by a few) / Unknown*

### 2b. Shadow IT / Unofficial AI Usage

Describe any AI tools observed or reported that are in use outside of official policy:

> _[Facilitator: note specific tools, which teams or individuals, whether this is tolerated informally or unknown to leadership]_

### 2c. AI Tool Assessment Notes

Key observations about the gap between officially sanctioned tools and actual usage patterns, any significant variation across teams, and any relevant procurement or approval processes that affect future adoption:

> _[Facilitator: complete after IC interviews — this is where policy-reality divergence becomes visible]_

---

## 3. Development Maturity Baseline

*Sources: Engineering leadership interviews, IC interviews, any available engineering metrics (deployment frequency, lead time, DORA metrics if tracked).*

**Purpose of this section:** Zone 2 and above require strong engineering foundations — specifically, automated feedback loops (build, lint, test) that make it safe and efficient to integrate AI-generated code into team workflows. Teams with fragile or slow pipelines will face structural barriers to Zone 2 that are not primarily about AI adoption.

### 3a. CI/CD Practices

| Practice | Status | Notes |
|---|---|---|
| Automated build on every commit | Yes / Partial / No | |
| Automated linting / static analysis | Yes / Partial / No | |
| Automated test suite in CI | Yes / Partial / No | |
| Test coverage meaningful (not just present) | Yes / Partial / No | |
| Deployment automated to at least staging | Yes / Partial / No | |
| Deployment automated to production | Yes / Partial / No | |
| Feature flags or trunk-based development | Yes / Partial / No | |

### 3b. Development Metrics (if available)

| Metric | Value / Range | Source |
|---|---|---|
| Deployment frequency | | |
| Lead time for changes | | |
| Change failure rate | | |
| Mean time to restore | | |

*If metrics are not tracked, note that explicitly — it is itself a maturity signal.*

### 3c. Delivery Practices

Describe the organization's actual development process — sprints vs. flow, how work is defined, how reviews happen, how done is defined:

> _[Facilitator: focus on actual practice, not stated methodology. "We do Scrum" is not useful; "we have two-week sprints, consistent demos, and working code at sprint end" is.]_

### 3d. Development Maturity Summary

**Overall assessment** (Strong / Adequate / Fragile — and brief rationale):

> _[Facilitator: this is your judgment, not a score. A one-paragraph summary of whether the engineering foundations are strong enough to support Zone 2+ investment, and where the key gaps are.]_

---

## 4. AI-Relevant Organizational Context

*Sources: Engineering leadership interviews, CISO/legal if accessible, any publicly available compliance documentation.*

**Purpose of this section:** Identify constraints that will limit AI tool selection and adoption pace. These constraints are real and must be treated as inputs to zone target recommendations, not obstacles to be argued around.

### 4a. Compliance and Regulatory Environment

| Requirement | Applicable? | How It Affects AI Adoption |
|---|---|---|
| HIPAA (healthcare data) | Yes / No / Partial | |
| SOC 2 / ISO 27001 | Yes / No / In progress | |
| FedRAMP / government contracts | Yes / No | |
| GDPR / data residency requirements | Yes / No | |
| Financial services regulations (PCI, SOX, etc.) | Yes / No | |
| Export controls (ITAR, EAR) | Yes / No | |
| Other (specify): | | |

### 4b. Security and Data Policies

Describe any formal policies that specifically address AI tool usage, code being sent to third-party AI services, or data handling that would affect how AI tools can be used:

> _[Facilitator: distinguish between policies that have been formally reviewed and applied to AI-specific scenarios vs. general data policies that have not been reviewed for AI applicability. The latter are common and often create ambiguity that slows adoption.]_

**Are policies formally documented and reviewed for AI tool applicability?**

> Yes / No / In progress / Unknown — _[notes]_

### 4c. Procurement Process

How does the organization procure and approve new software tools? What is the typical timeline and approval chain for a new AI coding tool?

> _[Facilitator: slow or opaque procurement processes are a real adoption constraint, especially for teams eager to move quickly. Note whether there is a fast-track path for tools that handle only non-sensitive data.]_

---

## 5. Competitive Landscape

*Sources: Business leadership interviews, public information, industry reports.*

**Purpose of this section:** Understand the competitive urgency driving this engagement. A company under acute competitive pressure from AI-native competitors needs a different kind of engagement than one exploring AI as a long-term capability investment.

### 5a. Competitive AI Signals

What are peers and direct competitors visibly doing with AI-augmented development? (Note sources — public blog posts, job postings, conference talks, customer reports.)

> _[Facilitator: even rough observations are useful here. "Three of their five main competitors have published engineering blog posts about AI coding tools" is a meaningful data point about industry pressure.]_

### 5b. Urgency Assessment

Based on business leadership interviews and competitive landscape: how urgent is AI adoption for this organization?

| Urgency Level | Description | Indicators Observed |
|---|---|---|
| Critical | Competitive survival depends on accelerating AI adoption in the next 6-12 months | |
| High | Meaningful competitive disadvantage if not at parity within 12-18 months | |
| Moderate | Efficiency and quality gains are strategically valuable but timeline is not acute | |
| Exploratory | Leadership wants to understand the landscape; no competitive urgency yet | |

**Assessed urgency level and rationale:**

> _[Facilitator: your judgment, with supporting observations]_

---

## 6. Stakeholder Landscape

*Sources: All interviews.*

**Purpose of this section:** Map who matters, what they believe, and where alignment and tension exist. This directly informs how you design the diagnostic and how you frame findings.

### 6a. Key Stakeholder Map

| Name / Role | Tier | AI Adoption Stance | Primary Concern | Influence on Engagement |
|---|---|---|---|---|
| | Business Leadership | Enthusiastic / Neutral / Skeptical / Unknown | | High / Medium / Low |
| | Engineering Leadership | Enthusiastic / Neutral / Skeptical / Unknown | | High / Medium / Low |
| | IC / Tech Lead | Enthusiastic / Neutral / Skeptical / Unknown | | High / Medium / Low |

*Add rows as needed. Do not include more names than necessary — focus on people whose perspectives will materially affect the diagnostic or whose buy-in is required for the roadmap.*

### 6b. Alignment and Tensions

**Where is there strong alignment across stakeholder tiers?**

> _[Facilitator: areas where business leadership, engineering leadership, and ICs are telling a consistent story. These are the engagement's natural momentum points.]_

**Where are there significant tensions or contradictions?**

> _[Facilitator: gaps between what leaders say and what ICs experience; disagreements between engineering and business leadership about pace or priorities; specific teams or individuals likely to resist. These require active facilitation strategy.]_

### 6c. Psychological Safety Assessment

Based on IC interviews: will teams be honest in the group diagnostic sessions?

> **Assessment:** High / Moderate / Low confidence in honest self-assessment
>
> **Key factors:** _[What specific dynamics will support or undermine honest self-assessment? Note any specific teams where this is a concern.]_
>
> **Mitigation required:** _[What needs to happen before the diagnostic to improve psychological safety — e.g., explicit sponsor statement about how results will not be used in performance reviews, leadership agreeing not to attend workshops, specific framing in the pre-diagnostic brief]_

---

## 7. Initial Zone Hypothesis

**FACILITATOR NOTE: Do not share this section with the client before or during the diagnostic. Sharing pre-diagnostic zone estimates anchors team self-assessment and degrades result quality.**

*Sources: All interviews, development maturity assessment.*

**Purpose of this section:** Record your pre-diagnostic estimate of where each team likely falls. After the diagnostic, compare against actual findings. Persistent gaps between hypothesis and findings are often the most important analytical signal — they reveal either organizational dynamics you missed or areas where self-assessment is systematically distorted.

### Per-Team Hypothesis

| Team Name | Estimated Zone | Estimated Competency Stage | Confidence | Key Evidence | Key Uncertainties |
|---|---|---|---|---|---|
| | Zone 0 / 1 / 2 / 3 | Early / Developing / Established | High / Medium / Low | | |
| | Zone 0 / 1 / 2 / 3 | Early / Developing / Established | High / Medium / Low | | |

*Add rows for each team in scope.*

### Hypothesis Rationale

For teams where your confidence is medium or low, describe what additional information would clarify the estimate:

> _[Facilitator: note specific things to probe in the diagnostic workshop that your interviews left ambiguous]_

### Organization-Level Zone Hypothesis

If the organization were to be characterized by a single zone (recognizing that teams vary):

> **Dominant zone:** Zone ___
>
> **Rationale:** _[Brief summary — what is the central tendency? What is the spread? What is the most common limiting factor?]_

---

## 8. Key Risks and Constraints

*Sources: All interviews and desk research.*

**Purpose of this section:** Identify factors that could undermine the quality of the diagnostic, the usefulness of findings, or the organization's ability to act on recommendations. Address these proactively before the diagnostic phase begins.

| Risk / Constraint | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Leadership attendance in diagnostic workshops | | High | Explicit agreement before diagnostic: managers do not attend their team's workshop |
| Teams believe scores affect performance reviews | | High | Pre-diagnostic brief must address explicitly; ideally with sponsor reinforcement |
| AI policy-reality gap creates IC reluctance to self-report | | High | Clarify whether shadow IT is tolerated; may require amnesty framing |
| Key stakeholder unavailable during diagnostic phase | | Medium | Confirm availability and alternatives before scheduling |
| Active reorganization affecting team stability | | High | Consider deferring affected teams |
| Procurement/legal blocks new AI tool adoption | | Medium | Factor into target zone recommendations; do not recommend tools that cannot be procured |
| Budget is aspiration, not commitment | | High | Escalate to engagement sponsor before proceeding to roadmap phase |

*Add rows for any additional risks identified.*

**Top three risks requiring active mitigation before the diagnostic begins:**

1. _[Most critical risk and specific mitigation plan]_
2. _[Second risk and mitigation]_
3. _[Third risk and mitigation]_

---

## 9. Recommended Diagnostic Scope

*Sources: Engineering leadership interviews, stakeholder map, zone hypothesis.*

**Purpose of this section:** Define which teams to assess, in what order, and any teams to defer. Not every team needs to be assessed in the initial diagnostic. A well-scoped diagnostic is more useful than an exhaustive one.

### Teams Recommended for Initial Diagnostic

| Team | Priority | Rationale |
|---|---|---|
| | 1 (first) | |
| | 2 | |
| | 3 | |

**Rationale for sequencing** (which teams go first and why — e.g., pilot team to refine the facilitation approach, highest urgency team, most representative team):

> _[Facilitator: first team is often a "safe" team where you can calibrate facilitation before assessing more politically sensitive teams. Note if a specific team is being assessed first for diagnostic calibration purposes.]_

### Teams Recommended for Deferral

| Team | Reason for Deferral | Recommended Timing |
|---|---|---|
| | | |

### Total Diagnostic Scope

| Item | Count / Value |
|---|---|
| Teams to assess in initial diagnostic | |
| Estimated total workshop time | |
| Estimated report generation time | |
| Recommended diagnostic phase duration | |
| Facilitator(s) required | |

### Pre-Diagnostic Requirements

List any conditions that must be met before the diagnostic phase begins:

- [ ] Pre-diagnostic brief session scheduled and confirmed
- [ ] Manager exclusion from workshops agreed with engineering leadership
- [ ] Performance-review non-attribution confirmed with sponsor
- [ ] _[Any additional requirements specific to this engagement]_

---

## Related Documentation

- [Stakeholder Interview Guide](/toolkit/stakeholder-interview-guide) -- Interview questions for the three stakeholder tiers used to populate this template
- [Engagement Model](/toolkit/engagement-model) -- How Discovery fits into the four-phase engagement structure
- [Goal-Setting Framework](/toolkit/goal-setting-framework) -- How context analysis informs target zone selection
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Zone definition; informs Initial Zone Hypothesis for Zone 1 teams
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Zone definition; informs Initial Zone Hypothesis for Zone 2 teams
- [Zone 3 Reference](/toolkit/zone-3-accelerating) -- Zone definition; informs Initial Zone Hypothesis for Zone 3 teams
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Zone definition; informs Initial Zone Hypothesis for Zone 4 teams
- [Baseline Screening](/toolkit/baseline-screening) -- Zone 0 screener; used when context analysis suggests no meaningful AI usage
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script for the diagnostic workshops that follow Discovery
