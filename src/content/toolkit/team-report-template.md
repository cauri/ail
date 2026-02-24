---
title: "ACE Diagnostic: Team Report"
description: "Template for producing a team-level diagnostic report after an ACE workshop."
section: "reports"
type: "report"
audience: "facilitator"
order: 1
---
**Team:** {{TEAM_NAME}}
**Date:** {{DATE}}
**Facilitator:** {{FACILITATOR_NAME}}
**Participants:** {{PARTICIPANT_COUNT}} team members ({{PARTICIPANT_ROLES}})
**Zones Assessed:** {{ZONES_ASSESSED}}

---

## How to Read This Report

This report is the product of a facilitated self-assessment workshop in which your team scored its own practices against the ACE framework's behavioral criteria. Scores reflect the team's collective judgment about how frequently specific behaviors occur in daily work -- not an external audit or a performance evaluation. No individual scores are recorded; every number in this report is a team-level composite.

The report is structured in four parts. The **Executive Summary** gives the overall zone and competency stage assessment with key strengths and opportunities. **Zone-by-Zone Results** presents composite scores for each diagnostic question along with discussion highlights and high-variance items -- areas where team members' experiences diverged significantly. The **Proficiency Analysis** maps scores to specific observable behaviors, distinguishing between strong, developing, and gap proficiencies. Finally, **Recommended Investments** translates the findings into sequenced, actionable next steps with expected effort, timeline, and benefit.

Scores use a 1-5 frequency scale (1 = Never, 5 = Always). A composite score is the most frequent response across all team members for a given question; ties resolve to the lower value. Competency stages (Emerging, Developing, Established, Exemplary) describe how habitual the zone's behaviors are under real working conditions, including pressure. For full scoring methodology, see the Appendix at the end of this report or the [Scoring Thresholds](/toolkit/scoring-thresholds) reference.

This report is confidential to your team. A separate management report with aggregated, anonymized patterns has been provided to organizational leadership. That report does not contain your scores, discussion content, or identified blockers.

---

## Executive Summary

### Current Assessment

{{TEAM_NAME}} was assessed on {{ZONES_ASSESSED}} on {{DATE}}. The assessment was a facilitated self-assessment with {{PARTICIPANT_COUNT}} team members participating.

**Zone 1 (Augmenting):** {{ZONE_1_SUMMARY}}
**Zone 2 (Integrating):** {{ZONE_2_SUMMARY}}
{{#if ZONE_3_ASSESSED}}**Zone 3 (Accelerating):** {{ZONE_3_SUMMARY}}{{/if}}

### Current Competency Stage

Based on the diagnostic results and facilitated discussion, the team is currently operating at **{{CURRENT_ZONE}}** with a competency stage of **{{COMPETENCY_STAGE}}** (Emerging / Developing / Established / Exemplary).

{{COMPETENCY_STAGE_EXPLANATION}}

### Key Strengths

1. {{STRENGTH_1}}
2. {{STRENGTH_2}}
3. {{STRENGTH_3}}

### Key Opportunities

1. {{OPPORTUNITY_1}}
2. {{OPPORTUNITY_2}}
3. {{OPPORTUNITY_3}}

---

## Zone-by-Zone Results

### Zone 1: Augmenting

**Core Metric (Q1):** {{ZONE_1_CORE_METRIC_DISTRIBUTION}}
*"When working under deadline pressure or in an unfamiliar codebase, team members use AI coding tools as part of their workflow rather than reverting to fully manual approaches."*

**Core metric assessment:** {{ZONE_1_CORE_METRIC_NARRATIVE}}

#### Score Distribution

| Question | 1 | 2 | 3 | 4 | 5 | Composite |
|---|---|---|---|---|---|---|
| Q1 (Core): Pressure-resilient AI usage | {{Z1_Q1_1}} | {{Z1_Q1_2}} | {{Z1_Q1_3}} | {{Z1_Q1_4}} | {{Z1_Q1_5}} | {{Z1_Q1_COMPOSITE}} |
| Q2: Daily AI code completion/generation | {{Z1_Q2_1}} | {{Z1_Q2_2}} | {{Z1_Q2_3}} | {{Z1_Q2_4}} | {{Z1_Q2_5}} | {{Z1_Q2_COMPOSITE}} |
| Q3: AI for diagnostics and debugging | {{Z1_Q3_1}} | {{Z1_Q3_2}} | {{Z1_Q3_3}} | {{Z1_Q3_4}} | {{Z1_Q3_5}} | {{Z1_Q3_COMPOSITE}} |
| Q4: Mode selection (vibe/CHOP/rigorous) | {{Z1_Q4_1}} | {{Z1_Q4_2}} | {{Z1_Q4_3}} | {{Z1_Q4_4}} | {{Z1_Q4_5}} | {{Z1_Q4_COMPOSITE}} |
| Q5: Reviewing AI output before accepting | {{Z1_Q5_1}} | {{Z1_Q5_2}} | {{Z1_Q5_3}} | {{Z1_Q5_4}} | {{Z1_Q5_5}} | {{Z1_Q5_COMPOSITE}} |
| Q6: PM/non-engineering AI usage | {{Z1_Q6_1}} | {{Z1_Q6_2}} | {{Z1_Q6_3}} | {{Z1_Q6_4}} | {{Z1_Q6_5}} | {{Z1_Q6_COMPOSITE}} |
| Q7: AI for tests/docs/artifacts | {{Z1_Q7_1}} | {{Z1_Q7_2}} | {{Z1_Q7_3}} | {{Z1_Q7_4}} | {{Z1_Q7_5}} | {{Z1_Q7_COMPOSITE}} |
| Q8: Design/UX AI tool usage | {{Z1_Q8_1}} | {{Z1_Q8_2}} | {{Z1_Q8_3}} | {{Z1_Q8_4}} | {{Z1_Q8_5}} | {{Z1_Q8_COMPOSITE}} |
| Q9: QA AI tool usage | {{Z1_Q9_1}} | {{Z1_Q9_2}} | {{Z1_Q9_3}} | {{Z1_Q9_4}} | {{Z1_Q9_5}} | {{Z1_Q9_COMPOSITE}} |
| Q10: PM discovery activities | {{Z1_Q10_1}} | {{Z1_Q10_2}} | {{Z1_Q10_3}} | {{Z1_Q10_4}} | {{Z1_Q10_5}} | {{Z1_Q10_COMPOSITE}} |
| Q11: Design analysis and evaluation | {{Z1_Q11_1}} | {{Z1_Q11_2}} | {{Z1_Q11_3}} | {{Z1_Q11_4}} | {{Z1_Q11_5}} | {{Z1_Q11_COMPOSITE}} |
| Q12: AI-assisted onboarding | {{Z1_Q12_1}} | {{Z1_Q12_2}} | {{Z1_Q12_3}} | {{Z1_Q12_4}} | {{Z1_Q12_5}} | {{Z1_Q12_COMPOSITE}} |

**Competency threshold met:** {{ZONE_1_THRESHOLD_MET}} (Yes / No)

#### Discussion Highlights

*Facilitator guidance: Capture both technical/behavioral themes and emotional/cultural themes from the discussion. Emotional themes -- adoption anxiety, excitement, frustration, identity concerns, fear about performance evaluation changes -- are diagnostically important and should inform the Investment Recommendations section. Teams that surface emotional themes openly tend to navigate zone transitions more effectively; recording these themes validates that openness and creates a reference point for future re-assessments.*

{{ZONE_1_DISCUSSION_THEMES}}

#### High-Variance Items

{{ZONE_1_HIGH_VARIANCE_ITEMS}}

---

### Zone 2: Integrating

**Core Metric (Q1):** {{ZONE_2_CORE_METRIC_DISTRIBUTION}}
*"The team follows its shared agentic workflow (Plan/Code/Verify) for all code changes, using the team's committed AI configuration, even under deadline pressure."*

**Core metric assessment:** {{ZONE_2_CORE_METRIC_NARRATIVE}}

#### Score Distribution

| Question | 1 | 2 | 3 | 4 | 5 | Composite |
|---|---|---|---|---|---|---|
| Q1 (Core): Shared workflow under pressure | {{Z2_Q1_1}} | {{Z2_Q1_2}} | {{Z2_Q1_3}} | {{Z2_Q1_4}} | {{Z2_Q1_5}} | {{Z2_Q1_COMPOSITE}} |
| Q2: Shared AI configuration in source control | {{Z2_Q2_1}} | {{Z2_Q2_2}} | {{Z2_Q2_3}} | {{Z2_Q2_4}} | {{Z2_Q2_5}} | {{Z2_Q2_COMPOSITE}} |
| Q3: Mandatory feedback loops enforced | {{Z2_Q3_1}} | {{Z2_Q3_2}} | {{Z2_Q3_3}} | {{Z2_Q3_4}} | {{Z2_Q3_5}} | {{Z2_Q3_COMPOSITE}} |
| Q4: Externalized plans in repository | {{Z2_Q4_1}} | {{Z2_Q4_2}} | {{Z2_Q4_3}} | {{Z2_Q4_4}} | {{Z2_Q4_5}} | {{Z2_Q4_COMPOSITE}} |
| Q5: PR-level review of AI-generated code | {{Z2_Q5_1}} | {{Z2_Q5_2}} | {{Z2_Q5_3}} | {{Z2_Q5_4}} | {{Z2_Q5_5}} | {{Z2_Q5_COMPOSITE}} |
| Q6: Agentic setup discussed in retros | {{Z2_Q6_1}} | {{Z2_Q6_2}} | {{Z2_Q6_3}} | {{Z2_Q6_4}} | {{Z2_Q6_5}} | {{Z2_Q6_COMPOSITE}} |
| Q7: PM writes AI-relevant criteria | {{Z2_Q7_1}} | {{Z2_Q7_2}} | {{Z2_Q7_3}} | {{Z2_Q7_4}} | {{Z2_Q7_5}} | {{Z2_Q7_COMPOSITE}} |
| Q8: Design integration with agentic workflow | {{Z2_Q8_1}} | {{Z2_Q8_2}} | {{Z2_Q8_3}} | {{Z2_Q8_4}} | {{Z2_Q8_5}} | {{Z2_Q8_COMPOSITE}} |
| Q9: QA practices for AI-generated code | {{Z2_Q9_1}} | {{Z2_Q9_2}} | {{Z2_Q9_3}} | {{Z2_Q9_4}} | {{Z2_Q9_5}} | {{Z2_Q9_COMPOSITE}} |
| Q10: Onboarding effectiveness | {{Z2_Q10_1}} | {{Z2_Q10_2}} | {{Z2_Q10_3}} | {{Z2_Q10_4}} | {{Z2_Q10_5}} | {{Z2_Q10_COMPOSITE}} |

**Competency threshold met:** {{ZONE_2_THRESHOLD_MET}} (Yes / No)

#### Discussion Highlights

{{ZONE_2_DISCUSSION_THEMES}}

#### High-Variance Items

{{ZONE_2_HIGH_VARIANCE_ITEMS}}

---

{{#if ZONE_3_ASSESSED}}
### Zone 3: Accelerating

**Core Metric (Q1):** {{ZONE_3_CORE_METRIC_DISTRIBUTION}}
*"Engineers operate as process designers -- they define specifications, constraints, and verification criteria, and the AI pipeline produces working software."*

**Core metric assessment:** {{ZONE_3_CORE_METRIC_NARRATIVE}}

#### Score Distribution

| Question | 1 | 2 | 3 | 4 | 5 | Composite |
|---|---|---|---|---|---|---|
| Q1 (Core): Engineers as process designers | {{Z3_Q1_1}} | {{Z3_Q1_2}} | {{Z3_Q1_3}} | {{Z3_Q1_4}} | {{Z3_Q1_5}} | {{Z3_Q1_COMPOSITE}} |
| Q2: CAT pipeline runs automatically | {{Z3_Q2_1}} | {{Z3_Q2_2}} | {{Z3_Q2_3}} | {{Z3_Q2_4}} | {{Z3_Q2_5}} | {{Z3_Q2_COMPOSITE}} |
| Q3: AI process observability and monitoring | {{Z3_Q3_1}} | {{Z3_Q3_2}} | {{Z3_Q3_3}} | {{Z3_Q3_4}} | {{Z3_Q3_5}} | {{Z3_Q3_COMPOSITE}} |
| Q4: Eval harness for AI agent performance | {{Z3_Q4_1}} | {{Z3_Q4_2}} | {{Z3_Q4_3}} | {{Z3_Q4_4}} | {{Z3_Q4_5}} | {{Z3_Q4_COMPOSITE}} |
| Q5: Prompt/config versioning with rollback | {{Z3_Q5_1}} | {{Z3_Q5_2}} | {{Z3_Q5_3}} | {{Z3_Q5_4}} | {{Z3_Q5_5}} | {{Z3_Q5_COMPOSITE}} |
| Q6: Systematic pipeline failure diagnosis | {{Z3_Q6_1}} | {{Z3_Q6_2}} | {{Z3_Q6_3}} | {{Z3_Q6_4}} | {{Z3_Q6_5}} | {{Z3_Q6_COMPOSITE}} |
| Q7: PM includes AI-specific criteria | {{Z3_Q7_1}} | {{Z3_Q7_2}} | {{Z3_Q7_3}} | {{Z3_Q7_4}} | {{Z3_Q7_5}} | {{Z3_Q7_COMPOSITE}} |
| Q8: Design specifications in AI pipeline | {{Z3_Q8_1}} | {{Z3_Q8_2}} | {{Z3_Q8_3}} | {{Z3_Q8_4}} | {{Z3_Q8_5}} | {{Z3_Q8_COMPOSITE}} |
| Q9: QA as evaluation pipeline specialists | {{Z3_Q9_1}} | {{Z3_Q9_2}} | {{Z3_Q9_3}} | {{Z3_Q9_4}} | {{Z3_Q9_5}} | {{Z3_Q9_COMPOSITE}} |
| Q10: Specification approach over direct coding | {{Z3_Q10_1}} | {{Z3_Q10_2}} | {{Z3_Q10_3}} | {{Z3_Q10_4}} | {{Z3_Q10_5}} | {{Z3_Q10_COMPOSITE}} |

**Competency threshold met:** {{ZONE_3_THRESHOLD_MET}} (Yes / No)

#### Discussion Highlights

{{ZONE_3_DISCUSSION_THEMES}}

#### High-Variance Items

{{ZONE_3_HIGH_VARIANCE_ITEMS}}
{{/if}}

{{#if ZONE_4_ASSESSED}}
### Zone 4: Industrializing

**Core Metric (Q1):** {{ZONE_4_CORE_METRIC_DISTRIBUTION}}
*"Engineers spend the majority of their time designing, tuning, and governing AI development pipelines and factory infrastructure rather than directly implementing features."*

**Core metric assessment:** {{ZONE_4_CORE_METRIC_NARRATIVE}}

#### Score Distribution

| Question | 1 | 2 | 3 | 4 | 5 | Composite |
|---|---|---|---|---|---|---|
| Q1 (Core): Engineers as factory designers | {{Z4_Q1_1}} | {{Z4_Q1_2}} | {{Z4_Q1_3}} | {{Z4_Q1_4}} | {{Z4_Q1_5}} | {{Z4_Q1_COMPOSITE}} |
| Q2: Formal AI pipeline governance | {{Z4_Q2_1}} | {{Z4_Q2_2}} | {{Z4_Q2_3}} | {{Z4_Q2_4}} | {{Z4_Q2_5}} | {{Z4_Q2_COMPOSITE}} |
| Q3: Portfolio-scale evaluations | {{Z4_Q3_1}} | {{Z4_Q3_2}} | {{Z4_Q3_3}} | {{Z4_Q3_4}} | {{Z4_Q3_5}} | {{Z4_Q3_COMPOSITE}} |
| Q4: Systematic drift management | {{Z4_Q4_1}} | {{Z4_Q4_2}} | {{Z4_Q4_3}} | {{Z4_Q4_4}} | {{Z4_Q4_5}} | {{Z4_Q4_COMPOSITE}} |
| Q5: Production SLAs for AI pipelines | {{Z4_Q5_1}} | {{Z4_Q5_2}} | {{Z4_Q5_3}} | {{Z4_Q5_4}} | {{Z4_Q5_5}} | {{Z4_Q5_COMPOSITE}} |
| Q6: Portfolio-level PM practice | {{Z4_Q6_1}} | {{Z4_Q6_2}} | {{Z4_Q6_3}} | {{Z4_Q6_4}} | {{Z4_Q6_5}} | {{Z4_Q6_COMPOSITE}} |
| Q7: Cross-functional rotation | {{Z4_Q7_1}} | {{Z4_Q7_2}} | {{Z4_Q7_3}} | {{Z4_Q7_4}} | {{Z4_Q7_5}} | {{Z4_Q7_COMPOSITE}} |
| Q8: Design standards in factory system | {{Z4_Q8_1}} | {{Z4_Q8_2}} | {{Z4_Q8_3}} | {{Z4_Q8_4}} | {{Z4_Q8_5}} | {{Z4_Q8_COMPOSITE}} |
| Q9: Factory-level quality governance | {{Z4_Q9_1}} | {{Z4_Q9_2}} | {{Z4_Q9_3}} | {{Z4_Q9_4}} | {{Z4_Q9_5}} | {{Z4_Q9_COMPOSITE}} |
| Q10: Ethical governance of AI pipelines | {{Z4_Q10_1}} | {{Z4_Q10_2}} | {{Z4_Q10_3}} | {{Z4_Q10_4}} | {{Z4_Q10_5}} | {{Z4_Q10_COMPOSITE}} |

**Competency threshold met:** {{ZONE_4_THRESHOLD_MET}} (Yes / No)

#### Discussion Highlights

{{ZONE_4_DISCUSSION_THEMES}}

#### High-Variance Items

{{ZONE_4_HIGH_VARIANCE_ITEMS}}
{{/if}}

---

## Proficiency Analysis

### Strong Proficiencies

These are areas where the team demonstrated consistent, habitual practice:

{{STRONG_PROFICIENCIES_LIST}}

### Developing Proficiencies

These are areas where the team shows emerging practice but has not yet reached consistency:

{{DEVELOPING_PROFICIENCIES_LIST}}

### Gap Proficiencies

These are areas where the team has little or no habitual practice and represents the greatest opportunity for growth:

{{GAP_PROFICIENCIES_LIST}}

---

## Recommended Investments

Based on the diagnostic scores, facilitated discussion, and identified blockers, the following investments are recommended. They are listed in suggested priority order.

### Investment 1: {{INVESTMENT_1_TITLE}}

**Category:** {{INVESTMENT_1_CATEGORY}} (Team Practice / Tooling / Training / Organizational Ask)
**Effort:** {{INVESTMENT_1_EFFORT}} (Low / Medium / High)
**Expected Timeline:** {{INVESTMENT_1_TIMELINE}}

**Rationale:** {{INVESTMENT_1_RATIONALE}}

**What this looks like in practice:** {{INVESTMENT_1_DESCRIPTION}}

**Expected benefit:** {{INVESTMENT_1_BENEFIT}}

---

### Investment 2: {{INVESTMENT_2_TITLE}}

**Category:** {{INVESTMENT_2_CATEGORY}}
**Effort:** {{INVESTMENT_2_EFFORT}}
**Expected Timeline:** {{INVESTMENT_2_TIMELINE}}

**Rationale:** {{INVESTMENT_2_RATIONALE}}

**What this looks like in practice:** {{INVESTMENT_2_DESCRIPTION}}

**Expected benefit:** {{INVESTMENT_2_BENEFIT}}

---

### Investment 3: {{INVESTMENT_3_TITLE}}

**Category:** {{INVESTMENT_3_CATEGORY}}
**Effort:** {{INVESTMENT_3_EFFORT}}
**Expected Timeline:** {{INVESTMENT_3_TIMELINE}}

**Rationale:** {{INVESTMENT_3_RATIONALE}}

**What this looks like in practice:** {{INVESTMENT_3_DESCRIPTION}}

**Expected benefit:** {{INVESTMENT_3_BENEFIT}}

---

### Investment 4: {{INVESTMENT_4_TITLE}}

**Category:** {{INVESTMENT_4_CATEGORY}}
**Effort:** {{INVESTMENT_4_EFFORT}}
**Expected Timeline:** {{INVESTMENT_4_TIMELINE}}

**Rationale:** {{INVESTMENT_4_RATIONALE}}

**What this looks like in practice:** {{INVESTMENT_4_DESCRIPTION}}

**Expected benefit:** {{INVESTMENT_4_BENEFIT}}

---

### Investment 5: {{INVESTMENT_5_TITLE}}

**Category:** {{INVESTMENT_5_CATEGORY}}
**Effort:** {{INVESTMENT_5_EFFORT}}
**Expected Timeline:** {{INVESTMENT_5_TIMELINE}}

**Rationale:** {{INVESTMENT_5_RATIONALE}}

**What this looks like in practice:** {{INVESTMENT_5_DESCRIPTION}}

**Expected benefit:** {{INVESTMENT_5_BENEFIT}}

---

## Next Steps

### Suggested Roadmap Toward {{TARGET_ZONE}}

**Current state:** {{CURRENT_ZONE}}, {{COMPETENCY_STAGE}}
**Target state:** {{TARGET_ZONE}}, Established

#### Months 1-2: Foundation

{{ROADMAP_MONTHS_1_2}}

#### Months 3-4: Building Habits

{{ROADMAP_MONTHS_3_4}}

#### Months 5-6: Deepening Competency

{{ROADMAP_MONTHS_5_6}}

### Leading Indicators to Track

These observable behaviors will indicate progress before the next formal diagnostic:

1. {{LEADING_INDICATOR_1}}
2. {{LEADING_INDICATOR_2}}
3. {{LEADING_INDICATOR_3}}
4. {{LEADING_INDICATOR_4}}
5. {{LEADING_INDICATOR_5}}

---

## Re-Assessment Recommendation

**Recommended re-assessment date:** {{REASSESSMENT_DATE}}

**Rationale:** {{REASSESSMENT_RATIONALE}}

**What to expect at re-assessment:** If the recommended investments are made, the team should expect to see {{REASSESSMENT_EXPECTATION}}. If investments are delayed or blocked, the team should expect scores to remain similar or decline as initial enthusiasm fades without structural support.

---

## Appendix: Scoring Methodology

- **Scale:** 1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always
- **Composite score:** The most frequent response across all team members for a given question. Ties are resolved by taking the lower value.
- **Competency threshold (Exemplary):** Zone composite average ≥ 4.7, standard deviation across all individual responses ≤ 0.5, and no single question composite below 4.0.
- **High-variance item:** Any question where the range between the lowest and highest individual score is 3 or more points.

---

*This report was prepared by {{FACILITATOR_NAME}} following a facilitated ACE diagnostic workshop on {{DATE}}. The report is confidential to the {{TEAM_NAME}} team and should not be shared with organizational management without the team's consent. A separate management report with aggregated, anonymized patterns is provided to organizational leadership.*

---

## Related Documentation

- [Management Report Template](/toolkit/management-report-template) -- The companion report delivered to organizational leadership; produced alongside this report
- [Sample Team Report](/toolkit/sample-team-report) -- A completed example showing how this template is filled in for a real engagement
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script used to produce the data this report is based on
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- Reference for interpreting composite scores and competency stages when completing this template
- [Investment Catalog](/toolkit/investment-catalog) -- Reference for formulating the Recommended Investments section
- [Proficiency Catalog](/toolkit/proficiency-catalog) -- Reference for describing Proficiency Analysis section
- [Interpreting Results](/toolkit/interpreting-results) -- Guidance on how to read and translate diagnostic findings into report narrative
