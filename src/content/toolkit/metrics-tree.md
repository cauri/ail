---
title: "ACE Metrics Tree"
description: "This document defines the metrics tree for the AI Competency Evaluation framework."
section: "metrics"
order: 1
---
This document defines the metrics tree for the AI Competency Evaluation framework. The tree decomposes a single North Star Metric into leading indicators, lagging indicators, and counter-metrics across the four ACE zones, providing organizations with a structured approach to measuring AI adoption progress.

### Evidence Level Key

Quantitative targets throughout this document are tagged with their evidence basis:

- **[Validated]** --- Derived from published empirical research with adequate methodology. The cited study directly supports the target.
- **[Emerging evidence]** --- Supported by preliminary studies, practitioner surveys, or extrapolation from related validated findings. The derivation involves assumptions that have not been independently tested.
- **[Expert judgment]** --- Based on practitioner experience and professional judgment. These targets are reasonable planning heuristics but have not been empirically tested. They will be refined through the [Validation Study Plan](/research/validation-study-plan).

Most targets in this document are tagged [Expert judgment] or [Emerging evidence]. This is expected for a framework at ACE's current validation stage. The tags are provided so that organizations can calibrate their expectations appropriately and avoid treating unvalidated estimates as empirical benchmarks.

## North Star Metric

**AI-Augmented Development Throughput**

*The rate at which teams deliver validated, production-ready software per unit of human effort, enabled by AI augmentation.*

This metric captures the fundamental value proposition of AI-augmented development: teams should ship more validated software with less human toil. "Validated" is critical -- raw output volume without quality is not throughput. "Per unit of human effort" ensures we measure efficiency gains, not just raw output driven by longer hours.

**How to measure:** Track as a within-organization trend from a pre-AI baseline rather than an absolute metric. Recommended approach: measure a basket of concrete delivery indicators --- deployment frequency, PR cycle time (open to merged), and feature lead time (requirement to production) --- and report the percentage change from the organization's pre-adoption baseline. Organizations should establish this baseline during the initial diagnostic engagement (Phase 2 of the engagement model) before significant AI adoption begins.

Avoid using story points as the throughput unit. Story points are a planning tool whose values are team-specific, non-comparable across teams, and subject to inflation over time (Forsgren, Humble, & Kim, 2018). Concrete units --- deployments, PRs merged, features shipped to production --- are more reliable for tracking throughput trends.

**What "good" looks like:** [Emerging evidence] A sustained improvement in the delivery indicator basket within 6-12 months of reaching Zone 2 competency. Preliminary studies (Peng et al., 2023) and early practitioner data suggest individual task-level improvements of 20-55%, but organizational throughput gains are expected to be more modest due to the overhead of coordination, review, and integration. Expect 15-40% improvement in aggregate delivery metrics. The wide range (15-40%) reflects genuine uncertainty: gains depend heavily on organizational context, team size, task mix, the maturity of existing development practices, and the degree to which AI tools are applied to bottleneck activities versus already-efficient processes. Organizations may use 25% as a rough planning midpoint, but should track their own baseline-relative trend rather than anchoring to any single estimate. These estimates will be refined through the [Validation Study Plan](/research/validation-study-plan) Phase 3 longitudinal tracking.

---

## Zone 1 Leading Indicators (Individual AI Adoption Signals)

These metrics predict whether individuals are on the path to habitual AI tool use.

### 1.1 AI Tool Activation Rate

- **What it measures:** Percentage of licensed team members who have activated and configured their AI coding tools (Copilot, Cursor, Claude Code, etc.).
- **Why it matters:** You cannot adopt what you have not installed. This is the most basic prerequisite signal.
- **How to measure:** License management dashboard or self-report survey. Count active users with at least one session in the past 7 days.
- **What "good" looks like:** [Expert judgment] 90%+ activation within 4 weeks of license provisioning.

### 1.2 Daily AI Tool Engagement

- **What it measures:** Percentage of developers who interact with AI tools on a typical workday.
- **Why it matters:** Habitual use requires daily engagement. Sporadic use indicates curiosity, not competency.
- **How to measure:** Tool telemetry (acceptance rates, chat sessions per day) or weekly self-report surveys.
- **What "good" looks like:** [Expert judgment] 80%+ of developers engaging daily within 2 months.

### 1.3 AI Suggestion Acceptance Rate

- **What it measures:** The ratio of accepted to offered AI code suggestions (inline completions).
- **Why it matters:** Low acceptance rates may indicate poor tool configuration, low trust, or mismatched coding context. Very high acceptance rates may indicate insufficient review.
- **How to measure:** IDE telemetry from Copilot, Cursor, or equivalent tools.
- **What "good" looks like:** [Emerging evidence] 25-40% acceptance rate (indicates selective, thoughtful use --- not rubber-stamping). Range informed by GitHub Copilot telemetry data (GitHub, 2024; Ziegler et al., 2024).

### 1.4 AI Mode Selection Diversity

- **What it measures:** Whether developers use multiple AI interaction modes (inline completion, chat, CHOP, vibe-coding) or rely on a single mode.
- **Why it matters:** Competent developers match the AI interaction mode to the task. Overreliance on a single mode indicates shallow adoption.
- **How to measure:** Quarterly self-assessment survey asking which modes developers use regularly.
- **What "good" looks like:** [Expert judgment] 70%+ of developers report using at least 3 distinct modes weekly.

### 1.5 AI Usage Under Pressure

- **What it measures:** Whether developers continue using AI tools during high-pressure situations (tight deadlines, production incidents, unfamiliar code).
- **Why it matters:** This is the defining test of Zone 1 competency. Tools that are abandoned under pressure are not habitual.
- **How to measure:** Retrospective self-report or facilitated diagnostic interview.
- **What "good" looks like:** [Expert judgment] 75%+ of developers report maintaining AI tool usage during their most recent high-pressure episode.

## Zone 1 Lagging Indicators

### 1.6 Individual Task Completion Time

- **What it measures:** Average time from task start to first working implementation for individual contributors.
- **Why it matters:** A reduction in individual task completion time is expected to accompany habitual AI tool adoption, though the relationship is correlational — teams that adopt AI tools may also be adopting other productivity practices simultaneously.
- **How to measure:** Issue tracker timestamps (task assigned to first PR opened).
- **What "good" looks like:** [Emerging evidence] 15-30% reduction from pre-AI baseline within 3 months. Extrapolated from Peng et al. (2023) finding of 55% improvement on controlled coding tasks, adjusted downward for the broader range of real-world development activities.

### 1.7 Boilerplate Code Generation Time

- **What it measures:** Time spent on repetitive coding tasks (test scaffolding, CRUD operations, configuration files).
- **Why it matters:** These are the tasks where AI provides the most immediate, measurable time savings.
- **How to measure:** Developer time-tracking or sprint retrospective estimates.
- **What "good" looks like:** [Emerging evidence] 40-60% reduction in time spent on boilerplate tasks. This range represents the task category where AI tools show the strongest documented gains (Tabachnyk & Nikolov, 2022; Peng et al., 2023).

### 1.8 Developer Confidence with AI Tools

- **What it measures:** Self-reported confidence in using AI tools effectively for daily work.
- **Why it matters:** Confidence predicts sustained adoption. Developers who feel ineffective with AI tools will revert to manual workflows.
- **How to measure:** Quarterly survey (Likert scale: "I am confident that AI tools make me more productive").
- **What "good" looks like:** [Expert judgment] 80%+ of developers rate 4 or 5 on a 5-point scale.

---

## Zone 2 Leading Indicators (Team-Level Integration Signals)

These metrics predict whether teams are successfully integrating AI into shared workflows.

### 2.1 Shared AI Configuration Existence and Currency

- **What it measures:** Whether the team has an AGENTS.md/CLAUDE.md (or equivalent) committed to source control, and how recently it was updated.
- **Why it matters:** The shared configuration is the foundation of Zone 2. Without it, AI usage remains individual and inconsistent.
- **How to measure:** Repository audit: does the file exist? When was it last modified? How many contributors have edited it?
- **What "good" looks like:** [Expert judgment] Configuration file exists, updated within the past 2 weeks, with commits from 3+ team members.

### 2.2 Mandatory Feedback Loop Coverage

- **What it measures:** Percentage of repositories with enforced pre-commit or CI gates that require AI-generated code to pass compiler, linter, and test checks.
- **Why it matters:** Feedback loops are non-negotiable Zone 2 infrastructure. Their absence means quality is not systematically enforced.
- **How to measure:** CI/CD configuration audit.
- **What "good" looks like:** [Expert judgment] 100% of active repositories have enforced feedback loops.

### 2.3 Plan/Code/Verify Workflow Adherence

- **What it measures:** Percentage of PRs where evidence of the Plan/Code/Verify workflow is observable (externalized plan artifact, test verification, structured review).
- **Why it matters:** The Plan/Code/Verify workflow is the core Zone 2 practice. Adherence indicates team-level discipline.
- **How to measure:** PR review audit: look for linked plan documents, test results, and structured review comments.
- **What "good" looks like:** [Expert judgment] 80%+ of PRs show evidence of Plan/Code/Verify within 3 months.

### 2.4 Agentic Setup Retrospective Frequency

- **What it measures:** How often the team explicitly discusses and iterates on their AI workflow in retrospectives.
- **Why it matters:** Teams that do not reflect on their AI practices do not improve them. Retrospective attention is a leading indicator of sustained Zone 2 competency.
- **How to measure:** Retrospective notes audit or facilitator tracking.
- **What "good" looks like:** [Expert judgment] AI workflow is discussed in at least 75% of retrospectives.

### 2.5 Cross-Member AI Configuration Contribution

- **What it measures:** Number of distinct team members who have committed changes to the shared AI configuration in the past month.
- **Why it matters:** If only one person maintains the AI configuration, it is not truly shared. Broad contribution indicates collective ownership.
- **How to measure:** Git log analysis on AGENTS.md/CLAUDE.md files.
- **What "good" looks like:** [Expert judgment] 50%+ of team members have contributed in the past month.

## Zone 2 Lagging Indicators

### 2.6 Code Quality Variance Across Team Members

- **What it measures:** Standard deviation in defect rates, PR review feedback density, and lint/test failures across team members.
- **Why it matters:** Zone 2 should reduce the gap between the most and least effective AI users. Lower variance means the shared workflow is leveling up the whole team.
- **How to measure:** Per-developer defect escape rate and PR review metrics over a rolling quarter.
- **What "good" looks like:** [Expert judgment] 30-50% reduction in cross-member quality variance from pre-Zone-2 baseline. To be validated through Phase 3 longitudinal tracking.

### 2.7 New Member Onboarding Time

- **What it measures:** Time from a new team member's first day to their first independently-delivered, production-merged PR.
- **Why it matters:** A strong shared AI configuration should accelerate onboarding by encoding project context, standards, and workflows.
- **How to measure:** Issue tracker and HR onboarding records.
- **What "good" looks like:** [Expert judgment] 25-40% reduction in onboarding time from pre-Zone-2 baseline.

### 2.8 PR Cycle Time

- **What it measures:** Average time from PR opened to PR merged, including review cycles.
- **Why it matters:** Systematic AI-assisted review and consistent code quality should reduce review friction.
- **How to measure:** Git/PR platform analytics.
- **What "good" looks like:** [Expert judgment] 20-35% reduction in PR cycle time.

---

## Zone 3 Leading Indicators (Organizational Acceleration Signals)

These metrics predict whether teams are achieving the role transformation and architectural shifts that characterize Zone 3.

### 3.1 CAT Suite Pass Rate on First Submission

- **What it measures:** Percentage of code changes that pass the Comprehensive Automated Testing (CAT) suite -- including compiler, linter, unit tests, integration tests, and security scans -- on first submission without manual intervention.
- **Why it matters:** High first-pass rates indicate that the AI-augmented workflow is producing production-quality output reliably, which is the prerequisite for accelerated delivery.
- **How to measure:** CI/CD pipeline analytics.
- **What "good" looks like:** [Expert judgment] 85%+ first-pass rate.

### 3.2 Ratio of Specification to Implementation Time

- **What it measures:** Time spent defining what to build (specifications, acceptance criteria, architectural decisions) versus time spent building it.
- **Why it matters:** In Zone 3, the developer role shifts from "writing code" to "specifying and verifying solutions." This ratio tracks that shift.
- **How to measure:** Developer time-tracking or task categorization in sprint planning.
- **What "good" looks like:** [Expert judgment] Specification time represents 40-60% of total development time (up from a typical 10-20% in traditional workflows).

### 3.3 Cross-Functional Task Completion

- **What it measures:** Percentage of tasks completed by individuals working outside their traditional specialization (e.g., backend developers completing frontend tasks, developers writing infrastructure code).
- **Why it matters:** Zone 3 role transformation enables individuals to work across traditional boundaries. This metric tracks that capability expansion.
- **How to measure:** Task tracking data correlated with team member specialization profiles.
- **What "good" looks like:** [Expert judgment] 20-30% of tasks completed cross-functionally.

### 3.4 Eval Pipeline Coverage

- **What it measures:** Percentage of AI-augmented workflows with defined evaluation criteria (evals) that automatically assess output quality.
- **Why it matters:** Eval pipelines are a Zone 3 technique that enables teams to systematically measure and improve AI output quality.
- **How to measure:** Repository audit for eval configurations and pipeline definitions.
- **What "good" looks like:** [Expert judgment] 60%+ of AI-augmented workflows have eval pipelines.

## Zone 3 Lagging Indicators

### 3.5 Feature Delivery Velocity

- **What it measures:** Number of production-shipped features per team per sprint, normalized for feature complexity.
- **Why it matters:** Zone 3 is expected to be associated with measurable acceleration in delivery throughput as role transformation and AI-native practices take effect. **Important: the relationship between Zone 3 practices and delivery outcomes is correlational, not causal.** Many organizational factors affect velocity simultaneously --- teams that reach Zone 3 may also have stronger engineering cultures, more organizational support, or more favorable market conditions. Isolating the specific contribution of Zone 3 practices to throughput improvement requires controlled comparison that does not yet exist in the literature. Organizations should not assume that adopting Zone 3 practices will cause the throughput improvements described here; rather, teams exhibiting Zone 3 competency are expected to also exhibit these throughput characteristics.
- **How to measure:** Sprint delivery metrics from issue tracker. "Normalized for feature complexity" means the organization should use a consistent sizing method (e.g., T-shirt sizing by the same estimation group, or counting only features that pass a defined minimum scope threshold) to reduce noise from feature-size variation across sprints. Avoid using story points for this purpose — they are team-specific, non-comparable, and subject to inflation (Forsgren, Humble, & Kim, 2018). The normalization method should be documented and held constant across measurement periods. *Note on T-shirt sizing:* The T-shirt sizing normalization method (S/M/L) has not been validated for this purpose. It is a practical approximation intended to reduce noise from feature-size variation, but there is no empirical calibration data establishing that T-shirt size categories correspond to consistent effort ratios across teams or over time. Treat T-shirt-normalized throughput comparisons as directional indicators, not precise measurements, until empirical calibration data is available.
- **What "good" looks like:** [Expert judgment] 2-3x throughput improvement from Zone 2 baseline. No empirical basis exists for this specific range; it is a planning heuristic extrapolated from the productivity gains reported in individual AI-assisted development studies (e.g., Peng et al., 2023) combined with the assumption that organizational-level gains compound individual-level effects. Treat as directional, not predictive.

### 3.6 Team Size to Output Ratio

- **What it measures:** Volume of validated software output relative to team headcount.
- **Why it matters:** Zone 3 promises that smaller teams can produce the output previously requiring larger teams. This metric validates that promise.
- **How to measure:** Compare output metrics (PRs merged, features shipped, lines of validated code) to team size.
- **What "good" looks like:** [Expert judgment] Output equivalent to a team 50-100% larger at pre-Zone-3 levels.

---

## Zone 4 Leading Indicators (Organizational Industrialization Signals)

These metrics predict whether the organization is successfully industrializing AI as a strategic capability.

### 4.1 Custom AI Infrastructure Investment

- **What it measures:** Organization's investment in proprietary AI tooling, custom models, fine-tuned systems, or internal AI platforms -- as a percentage of total engineering investment.
- **Why it matters:** Zone 4 requires the organization to treat AI infrastructure as a first-class strategic asset, not just a vendor subscription.
- **How to measure:** Engineering budget allocation analysis.
- **What "good" looks like:** [Expert judgment — speculative] 10-20% of engineering investment directed toward AI infrastructure. No organization has demonstrably achieved the fully industrialized AI development capability described here.

### 4.2 AI Workflow Reuse Across Teams

- **What it measures:** Percentage of teams using shared, organization-wide AI workflows, skill libraries, and configuration patterns (versus team-specific setups).
- **Why it matters:** Industrialization requires organizational standardization and knowledge sharing beyond individual teams.
- **How to measure:** Configuration audit across repositories.
- **What "good" looks like:** [Expert judgment — speculative] 70%+ of teams use organization-wide AI workflow components.

### 4.3 Agentic System Autonomy Level

- **What it measures:** Percentage of development tasks that can be completed by AI agents with minimal human intervention (specification-in, validated-code-out).
- **Why it matters:** Zone 4 envisions AI agents as semi-autonomous contributors. This metric tracks the progression toward that capability.
- **How to measure:** Task classification and analysis of human touchpoints in the AI-augmented workflow.
- **What "good" looks like:** [Expert judgment — speculative] 30-50% of routine tasks completable with specification-level human input only.

## Zone 4 Lagging Indicators

### 4.4 Time-to-Market for New Capabilities

- **What it measures:** Elapsed time from business requirement identification to production deployment.
- **Why it matters:** The ultimate business value of Zone 4 is dramatic acceleration of the organization's ability to ship new capabilities.
- **How to measure:** Portfolio-level tracking from intake to deployment.
- **What "good" looks like:** [Expert judgment — speculative] 3-5x improvement from pre-ACE baseline.

### 4.5 AI Capability as Competitive Differentiator

- **What it measures:** Whether the organization's AI development capability is recognized as a competitive advantage by customers, recruits, or industry analysts.
- **Why it matters:** Zone 4 positions AI capability as a strategic asset. This metric captures whether that positioning is producing business value.
- **How to measure:** Qualitative assessment: customer surveys, recruiting pipeline analysis, industry recognition.
- **What "good" looks like:** [Expert judgment — speculative] AI capability is cited as a differentiator in customer win/loss analysis and recruiting conversations.

---

## Counter-Metrics (Gaming Prevention)

Counter-metrics ensure that improvements in the North Star metric and zone indicators are genuine, not artifacts of gaming or perverse incentives. All counter-metric thresholds below are tagged [Expert judgment] unless otherwise noted — these are monitoring heuristics based on practitioner experience, not empirically validated thresholds.

### C1. Defect Escape Rate

- **What it measures:** Number of defects found in production per unit of software shipped.
- **Why it matters:** If throughput increases but quality decreases, the North Star metric is being gamed. More output with more bugs is not improvement.
- **Threshold:** [Emerging evidence] Should remain stable or decrease as throughput increases. The relationship between AI-generated code volume and defect rates has preliminary support from Peng et al. (2023) and Perry et al. (2022), though neither study measured this at the organizational level over multi-month timeframes.

### C2. Developer Burnout Indicators

- **What it measures:** Self-reported stress, work-life satisfaction, and sustainable pace indicators.
- **Why it matters:** Productivity gains driven by longer hours or increased pressure are not sustainable. AI augmentation should reduce toil, not increase it.
- **Threshold:** [Expert judgment] Burnout indicators should remain stable or improve. Any increase warrants immediate investigation.

### C3. Code Maintainability

- **What it measures:** Codebase complexity metrics (cyclomatic complexity, coupling, cognitive complexity) and time required for subsequent modifications.
- **Why it matters:** AI can generate code quickly that is difficult to maintain. If the codebase becomes harder to work with over time, short-term throughput gains will reverse.
- **Threshold:** [Expert judgment] Complexity metrics should remain stable or improve. Time to modify existing code should not increase.

### C4. AI Tool Over-Reliance

- **What it measures:** Whether developers can still complete work effectively when AI tools are unavailable (outages, policy changes, tool transitions).
- **Why it matters:** Healthy AI adoption augments human capability; unhealthy adoption replaces it. Teams should remain capable without AI, even if slower.
- **Threshold:** [Expert judgment] Teams can deliver at 60-70% of AI-augmented velocity when AI tools are unavailable.

### C5. Security Vulnerability Introduction Rate

- **What it measures:** Number of security vulnerabilities introduced per unit of code shipped, particularly in AI-generated code.
- **Why it matters:** AI-generated code can introduce subtle security issues that pass functional tests. Increased throughput must not come at the expense of security. See Perry et al. (2022) for evidence that AI-assisted code can be associated with increased security vulnerability rates.
- **Threshold:** [Emerging evidence] Vulnerability introduction rate should remain stable or decrease. Any increase requires immediate remediation.

### C6. Documentation Currency

- **What it measures:** Whether documentation (architecture docs, API docs, onboarding guides) keeps pace with code changes.
- **Why it matters:** Faster code delivery can outpace documentation, creating a growing knowledge gap. AI should help documentation keep pace, not widen the gap.
- **Threshold:** [Expert judgment] Documentation update frequency should scale proportionally with code change frequency.

---

## Aggregation Note

When aggregating team-level metrics to organizational dashboards (as described in [Organizational Health Metrics](/toolkit/organizational-health-metrics)), report distributions rather than averages. An organizational average of "Zone 2" obscures whether most teams are at Zone 2 or whether a few Zone 3 teams are pulling up a majority at Zone 1. For percentage-based metrics (activation rate, daily engagement), report both the organization-wide figure and the inter-team range to surface variance that averages would hide. For "What good looks like" thresholds, apply them at the team level, not the organizational average — a team that meets the threshold has met it regardless of other teams' performance.

---

## Metrics Tree Summary

```
North Star: AI-Augmented Development Throughput
|
+-- Zone 1 (Individual)
|   +-- Leading: Tool Activation, Daily Engagement, Acceptance Rate,
|   |            Mode Selection Diversity, Usage Under Pressure
|   +-- Lagging: Task Completion Time, Boilerplate Reduction, Developer Confidence
|
+-- Zone 2 (Team)
|   +-- Leading: Shared Config Existence, Feedback Loop Coverage,
|   |            Plan/Code/Verify Adherence, Retrospective Frequency,
|   |            Cross-Member Config Contribution
|   +-- Lagging: Quality Variance Reduction, Onboarding Time, PR Cycle Time
|
+-- Zone 3 (Role Transformation)
|   +-- Leading: CAT First-Pass Rate, Spec-to-Implementation Ratio,
|   |            Cross-Functional Task Completion, Eval Pipeline Coverage
|   +-- Lagging: Feature Delivery Velocity, Team Size to Output Ratio
|
+-- Zone 4 (Organizational)
|   +-- Leading: Custom AI Infrastructure Investment, Workflow Reuse,
|   |            Agentic System Autonomy Level
|   +-- Lagging: Time-to-Market, AI as Competitive Differentiator
|
+-- Counter-Metrics (all zones)
    +-- Defect Escape Rate
    +-- Developer Burnout Indicators
    +-- Code Maintainability
    +-- AI Tool Over-Reliance
    +-- Security Vulnerability Introduction Rate
    +-- Documentation Currency
```

## Related Documentation

- [Zone-Specific Metrics](/toolkit/zone-specific-metrics) -- Detailed metrics for each zone with anti-metrics and progression indicators
- [Organizational Health Metrics](/toolkit/organizational-health-metrics) -- Management-level metrics for systemic organizational health
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Zone 1 proficiencies and investments
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Zone 2 proficiencies and investments
