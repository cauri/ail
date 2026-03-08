---
title: "Organizational Health Metrics"
description: "Metrics for the management report covering systemic organizational health indicators for AI adoption success."
section: "metrics"
type: "catalog"
audience: "facilitator"
order: 3
---
This document defines metrics for the **management report** -- systemic organizational health indicators that measure whether the organization is creating the conditions for AI adoption success. These metrics are distinct from the team-level metrics in the [Metrics Tree](/toolkit/metrics-tree) and [Zone-Specific Metrics](/toolkit/zone-specific-metrics). They belong in leadership dashboards and organizational reviews, not team retrospectives.

The purpose of organizational health metrics is to ensure that leadership has visibility into the systemic factors that enable or block AI adoption across the organization.

---

![VA-16: Metrics Tree Diagram](/images/metrics-tree-diagram.svg)

## 1. AI Adoption Rate Across Teams

### 1.1 Team-Level Zone Distribution

- **What it measures:** The distribution of teams across AIL zones. How many teams are at Zone 0, Zone 1, Zone 2, Zone 3, or Zone 4?
- **Why it matters:** Gives leadership a snapshot of where the organization stands overall. A healthy organization should see teams progressing toward their chosen target zones over time — not necessarily toward higher zones. An organization that has deliberately chosen Zone 2 as its target should see consolidation at Zone 2, not pressure to reach Zone 3.
- **How to measure:** Aggregate results from facilitated diagnostic assessments. Each team receives a zone classification; report the distribution.
- **Reporting frequency:** Quarterly or after each round of diagnostic assessments.
- **What "good" looks like:** [Expert judgment] Targets depend on the organization's chosen stopping point. The examples below illustrate two common scenarios. See [How to Choose a Target Zone](/toolkit/choose-target-zone) for guidance on stopping-point decisions.

  **Example A: Organization targeting Zone 3**
  - Within 6 months: 0% Zone 0, 60%+ Zone 1, 20%+ Zone 2
  - Within 12 months: 0% Zone 0, 30% Zone 1, 50%+ Zone 2, 10%+ Zone 3
  - Within 24 months: 0% Zone 0, 10% Zone 1, 50%+ Zone 2, 25%+ Zone 3

  **Example B: Organization targeting Zone 2 (chosen stopping point)**
  - Within 6 months: 0% Zone 0, 60%+ Zone 1, 20%+ Zone 2
  - Within 12 months: 0% Zone 0, 20% Zone 1, 70%+ Zone 2
  - Within 24 months: 0% Zone 0, 10% Zone 1, 80%+ Zone 2 (consolidating at Established or Exemplary)

### 1.2 Individual AI Tool Adoption Rate

- **What it measures:** Percentage of all licensed team members who are active, daily users of AI tools across the organization.
- **Why it matters:** Broad individual adoption is the foundation for team-level integration. Low adoption rates indicate systemic barriers.
- **How to measure:** Tool telemetry aggregated across the organization, or quarterly survey.
- **Reporting frequency:** Monthly.
- **What "good" looks like:** [Expert judgment] 85%+ of licensed team members are daily active users within 6 months of license provisioning.

### 1.3 Non-Developer AI Adoption Rate

- **What it measures:** Percentage of non-developer roles (product managers, designers, QA, technical writers) who actively use AI tools in their work.
- **Why it matters:** AI adoption confined to developers limits organizational benefit. Zone 2+ competency requires adoption across roles.
- **How to measure:** Role-segmented survey or tool telemetry.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] 60%+ of non-developer team members report regular AI tool usage within 6 months.

---

## 2. Consistency of Adoption (Variance Between Teams)

### 2.1 Inter-Team Zone Variance

- **What it measures:** Standard deviation of zone scores across all assessed teams.
- **Why it matters:** High variance means some teams are far ahead while others are left behind. This creates organizational friction, inconsistent quality, and inequitable investment returns.
- **How to measure:** Calculate standard deviation of zone scores from diagnostic assessments.
- **Reporting frequency:** After each round of diagnostic assessments.
- **What "good" looks like:** [Expert judgment] Standard deviation of 0.5 zones or less. Teams should be within one zone of each other for the majority of the organization.

### 2.2 Adoption Pace Variance

- **What it measures:** Difference in time-to-competency between the fastest and slowest adopting teams.
- **Why it matters:** If some teams achieve Zone 2 in 4 months and others take 18 months, the organization needs to understand why. The gap usually reflects differences in organizational investment, not team capability.
- **How to measure:** Track time from AI tool provisioning to confirmed zone competency for each team.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] Slowest teams are within 2x the pace of fastest teams. Larger gaps indicate systemic barriers affecting specific teams.

### 2.3 Practice Consistency Score

- **What it measures:** How consistently core AI practices (shared configuration, feedback loops, Plan/Code/Verify) are implemented across teams that are at the same zone.
- **Why it matters:** Two teams both classified as "Zone 2" should exhibit similar practices. If practices vary widely within the same zone classification, the diagnostic or the training may need refinement.
- **How to measure:** Audit a sample of teams at each zone for adherence to zone-defining practices. For each zone, define a checklist of observable zone-defining practices (e.g., for Zone 2: shared AI configuration file exists and was updated within the past 2 weeks; mandatory CI feedback loops are enforced on all repositories; Plan/Code/Verify workflow is evident in 80%+ of PRs; AI practices are discussed in retrospectives). Audit a representative sample of teams at each zone (minimum 3 teams per zone, or all teams if fewer than 3 exist at a zone level). For each team, score the percentage of checklist items that are present. The Practice Consistency Score is the average of these percentages across all audited teams at the same zone level. A score of 80% means that, on average, teams at the same zone exhibit 80% of the expected zone-defining practices.
- **Reporting frequency:** Semi-annually.
- **What "good" looks like:** [Expert judgment] 80%+ practice consistency among teams at the same zone level. Scores below 60% indicate that the zone classification may not be reliably predicting actual practice, and the diagnostic instrument or training materials may need refinement.

---

## 3. Organizational Investment Follow-Through

### 3.1 Committed vs. Actual Investment Completion Rate

- **What it measures:** Percentage of organizational investments identified in AIL roadmaps that were actually completed within the committed timeframe.
- **Why it matters:** This is the single most important organizational health metric. Teams cannot progress if the organization fails to make the investments it committed to. Common failures include: promised training not delivered, tool licenses delayed, policy decisions deferred, time for infrastructure not allocated.
- **How to measure:** Quarterly audit comparing roadmap investment commitments to actual completion status.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] 80%+ of committed investments completed on time. Below 60% indicates systemic organizational follow-through problems.

### 3.2 Investment Blockers by Category

- **What it measures:** Categorization of incomplete or delayed investments by root cause (budget, policy, procurement, staffing, prioritization, technical).
- **Why it matters:** Identifies the organizational system that is most frequently blocking AI adoption progress.
- **How to measure:** Root cause analysis of each incomplete investment commitment.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] No single category accounts for more than 30% of blockers. Concentration in one category indicates a systemic organizational bottleneck.

### 3.3 Time from Investment Decision to Implementation

- **What it measures:** Average elapsed time from an investment being approved in a roadmap to being fully implemented and available to teams.
- **Why it matters:** Even when investments are eventually completed, long delays erode team trust and slow progression. If policy approval takes 6 months, teams stall regardless of their own effort.
- **How to measure:** Track timestamps from roadmap approval to implementation completion for each investment.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment]
  - Tool provisioning: < 2 weeks
  - Policy decisions: < 4 weeks
  - Training programs: < 6 weeks
  - Infrastructure changes: < 8 weeks

---

**A note on survey instrument validation.** The survey instruments described in Sections 4.1-4.4 are operational tools designed for organizational health monitoring. They have not been validated as psychometric instruments; their reliability and construct validity have not been established. Targets should be interpreted as directional benchmarks, not clinical or research-grade thresholds. The validation study plan includes Phase 2 pilot administration of these instruments to assess face validity and response distributions. Formal psychometric validation of organizational health instruments is identified as future work.

## 4. Team Satisfaction with AI Tools and Workflow

### 4.1 AI Tool Satisfaction Score

- **What it measures:** Team member satisfaction with the AI tools provided by the organization.
- **Why it matters:** Dissatisfaction with tools suppresses adoption. If the organization provides tools that developers find unhelpful, clunky, or restrictive, adoption will stall regardless of training or mandate.
- **How to measure:** Quarterly survey (5-point Likert scale) covering: tool effectiveness, tool reliability, tool integration with existing workflow, and overall satisfaction.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] Average score of 3.8+ on a 5-point scale across all dimensions.

### 4.2 AI Workflow Friction Score

- **What it measures:** Team-reported friction points in integrating AI tools into their daily workflow.
- **Why it matters:** Identifies practical barriers that prevent teams from reaching or sustaining competency. These are often organizational issues (policy, procurement, infrastructure) rather than team-level issues.
- **How to measure:** Quarterly survey with open-ended friction point identification, categorized into themes.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] Declining number of unique friction points over time. Zero "critical" friction points (blockers that prevent AI usage entirely).

### 4.3 AI Adoption Emotional Climate

- **What it measures:** Team members' emotional experience of AI adoption — including excitement, anxiety, identity threat, change fatigue, and confidence in their evolving role.
- **Why it matters:** Adoption anxiety and identity threat are significant predictors of resistance and regression. Teams may adopt tools behaviorally while experiencing emotional distress that undermines sustained competency. Burnout indicators (C2 in the counter-metrics) capture sustained overload, but emotional climate captures the specific psychological dynamics of role transition — which can be present even without overwork.
- **How to measure:** Quarterly survey with items such as: "I feel confident about my evolving role as AI tools change how we work" (5-point scale); "I feel anxious about how AI will affect my career" (reverse-scored); "The pace of AI-related change feels manageable" (5-point scale). Report at the organizational level to preserve confidentiality.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] Average confidence score of 3.5+ and average anxiety score below 2.5 (reverse-scored). Rising anxiety scores — even when adoption metrics are improving — warrant investigation and may indicate the need for explicit emotional support interventions (see [Baseline to Zone 1 Roadmap](/toolkit/baseline-to-zone-1) and [Zone 1 to Zone 2 Roadmap](/toolkit/zone-1-to-2) for emotional support activities).

### 4.4 AI Investment Value Perception

- **What it measures:** Whether team members believe the organization's AI investments are producing meaningful value for their work.
- **Why it matters:** Perception drives engagement. If teams do not perceive value from AI investments, adoption becomes compliance rather than competency.
- **How to measure:** Quarterly survey: "The organization's investment in AI tools and training has meaningfully improved my ability to do my job" (5-point Likert scale).
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] Average score of 3.5+ within 6 months, trending upward.

---

## 5. Key Organizational Blockers

### 5.1 Policy Blocker Index

- **What it measures:** Number and severity of organizational policies that actively impede AI adoption (data handling restrictions that prevent AI tool usage, procurement processes that delay tool access, security policies that block AI services).
- **Why it matters:** Policy blockers are the most common organizational-level impediment to AI adoption. They are invisible to leadership unless actively tracked.
- **How to measure:** Maintain a blocker registry. Teams report policy blockers through a standardized intake process. Each blocker is classified by severity (critical: prevents AI usage; major: significantly impedes usage; minor: causes friction).
- **Reporting frequency:** Monthly.
- **What "good" looks like:** [Expert judgment] Zero critical blockers. Major blockers addressed within 30 days. Minor blockers addressed within 90 days.

### 5.2 Tooling Gap Assessment

- **What it measures:** Whether the organization's AI tool portfolio meets the needs identified by teams across all zones.
- **Why it matters:** Tool gaps prevent zone progression. If teams need CI/CD-integrated AI review tools for Zone 2 but the organization has not procured them, progression stalls.
- **How to measure:** Annual tool gap analysis: compare team-reported needs against available tools.
- **Reporting frequency:** Semi-annually.
- **What "good" looks like:** [Expert judgment] 90%+ of identified tool needs are met within 6 months of identification.

### 5.3 Training Gap Assessment

- **What it measures:** Gap between training available and training needed for the organization's target zone distribution.
- **Why it matters:** Training is a required organizational investment for every zone. Gaps in training prevent teams from developing the proficiencies needed for progression.
- **How to measure:** Compare available training programs against zone-specific training requirements from the AIL framework.
- **Reporting frequency:** Semi-annually.
- **What "good" looks like:** [Expert judgment] Training programs exist for all proficiencies in the organization's target zone. 80%+ of team members have completed training relevant to their team's current or target zone.

---

## 6. Leading Indicators for Zone 2 Progression at Organizational Level

![VA-24: Leading Indicators Dashboard](/images/leading-indicators-dashboard.svg)

These metrics specifically predict whether the organization is on track to achieve widespread Zone 2 competency -- the typical near-term target for most organizations adopting AI-augmented development. Organizations that have chosen Zone 1 as their stopping point (see [How to Choose a Target Zone](/toolkit/choose-target-zone)) may still find these indicators useful for monitoring readiness, but should not treat Zone 2 progression as an obligation.

### 6.1 Shared Configuration Adoption Rate

- **What it measures:** Percentage of teams that have created and are actively maintaining shared AI configuration files (AGENTS.md/CLAUDE.md or equivalent).
- **Why it matters:** The shared configuration is the single most important artifact for Zone 2 competency. Its existence predicts team-level integration.
- **How to measure:** Repository audit across all teams.
- **Reporting frequency:** Monthly.
- **What "good" looks like:** [Expert judgment] 80%+ of teams have active shared configurations within 6 months of Zone 2 initiative launch.

### 6.2 Mandatory Feedback Loop Adoption Rate

- **What it measures:** Percentage of repositories across the organization with enforced pre-commit or CI quality gates for AI-generated code.
- **Why it matters:** Feedback loops are non-negotiable Zone 2 infrastructure. Low adoption rates predict that teams will not achieve Zone 2 competency.
- **How to measure:** CI/CD configuration audit across all repositories.
- **Reporting frequency:** Monthly.
- **What "good" looks like:** [Expert judgment] 90%+ of active repositories have enforced feedback loops within 6 months.

### 6.3 Cross-Team Knowledge Sharing Activity

- **What it measures:** Frequency and quality of cross-team sharing of AI practices, configurations, and lessons learned.
- **Why it matters:** Cross-team sharing accelerates organization-wide adoption and prevents redundant effort. Active sharing predicts faster zone progression.
- **How to measure:** Count of cross-team sharing events (presentations, shared documents, config pattern exchanges) per quarter.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] At least 2 cross-team sharing events per quarter per 10 teams, with documented outcomes.

### 6.4 Management Engagement in AI Workflow Discussions

- **What it measures:** Whether engineering managers and directors actively participate in discussions about AI workflow improvement, or whether AI adoption is treated as a purely technical team-level concern.
- **Why it matters:** Zone 2 requires organizational investment. Managers who are disengaged from AI workflow discussions cannot identify or remove organizational blockers.
- **How to measure:** Survey of team leads: "Does your manager actively support and engage with your team's AI workflow improvement efforts?" (5-point scale).
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] Average score of 4.0+ on a 5-point scale.

### 6.5 Budget Allocation for AI Infrastructure Time

- **What it measures:** Whether teams are given explicit time allocation for AI workflow infrastructure work (setting up shared configs, building feedback loops, creating skills and commands) as part of their sprint capacity.
- **Why it matters:** Teams that are expected to build Zone 2 infrastructure "on the side" while maintaining full feature velocity will not achieve competency. Explicit time allocation predicts successful Zone 2 transition.
- **How to measure:** Sprint planning audit: percentage of teams with allocated AI infrastructure capacity.
- **Reporting frequency:** Quarterly.
- **What "good" looks like:** [Expert judgment] 80%+ of teams have 10-20% of sprint capacity allocated to AI infrastructure during Zone 2 transition.

---

## Reporting Structure

### Management Dashboard (Monthly)

The management dashboard should present a concise view of organizational AI health:

1. **AI Adoption Snapshot:** Team zone distribution chart (how many teams at each zone).
2. **Adoption Rate:** Organization-wide daily active AI user percentage.
3. **Investment Follow-Through:** Committed vs. completed investment percentage.
4. **Top Blockers:** Top 3 organizational blockers by severity.
5. **Satisfaction Trend:** AI tool satisfaction score trend over time.

### Quarterly Organizational Review

The quarterly review adds depth to the monthly dashboard:

1. All monthly dashboard metrics with trend analysis.
2. Inter-team variance analysis.
3. Investment blocker root cause analysis.
4. Training and tooling gap assessments.
5. Zone 2 progression leading indicators.
6. Recommendations for organizational investment adjustments.

### Semi-Annual Strategic Review

The semi-annual review informs strategic decisions:

1. Zone progression trajectory analysis (are we on track for organizational targets?).
2. ROI analysis of AI investments.
3. Comparison against industry benchmarks (where available).
4. Strategic recommendations for the next 6-12 months.

---

## Relationship to Team-Level Metrics

Organizational health metrics and team-level metrics serve different audiences and purposes:

| Dimension | Team-Level Metrics | Organizational Health Metrics |
|-----------|-------------------|-------------------------------|
| **Audience** | Team leads, individual contributors | Engineering directors, VPs, C-suite |
| **Purpose** | Track team competency progression | Track systemic health and investment effectiveness |
| **Accountability** | Teams are accountable for their practices | Organization is accountable for its investments |
| **Frequency** | Sprint-level or monthly | Monthly or quarterly |
| **Action** | Team retrospectives and workflow changes | Organizational investment and policy decisions |

Leadership should resist the temptation to use organizational health metrics to compare teams against each other. These metrics exist to hold the organization accountable for creating the conditions that enable teams to succeed, not to rank teams.

## Related Documentation

- [Metrics Tree](/toolkit/metrics-tree) -- North Star metric decomposition with zone-level leading and lagging indicators
- [Zone-Specific Metrics](/toolkit/zone-specific-metrics) -- Detailed team-level metrics for each zone
- [What Is AIL](/toolkit/what-is-ail) -- Framework overview
