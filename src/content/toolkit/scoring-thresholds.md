---
title: "Scoring and Threshold Definitions"
description: "This document defines how to score diagnostic responses, interpret results, and determine a team's competency stage within each zone."
section: "diagnostic"
type: "diagnostic"
audience: "facilitator"
order: 6
---
## Purpose

This document defines how to score diagnostic responses, interpret results, and determine a team's competency stage within each zone. It provides the quantitative framework that facilitators use to translate individual survey responses into actionable competency assessments.

---

## Evidence Basis

The scoring methodology in this document --- including the frequency scale, competency stage boundaries, the three quantitative threshold criteria for Consistent status, and the qualitative Exemplary assessment --- was designed through expert judgment informed by:

- The Agile Fluency Model's approach to facilitated competency assessment (Larsen & Shore, 2012), which demonstrated that habitual behavior under stress is the appropriate competency construct for team capability
- The DORA research program's measurement principles (Forsgren, Humble, & Kim, 2018), which established that organizational capability classification should be grounded in observable behavior and that classification criteria should disclose their evidence basis
- Practitioner experience from Artium engagements with software teams adopting AI-augmented practices

**These thresholds have not yet been validated against empirical data.** The specific numeric values for Consistent status (composite >= 4.7, SD <= 0.5, no question composite below 4.0) are expert-judgment starting points, not empirically derived cutoffs. The qualitative Exemplary criteria (coaching capability, contextual adaptation, practice innovation) are similarly expert-informed. The [Validation Study Plan](/research/validation-study-plan) includes ROC analysis (Phase 3) to empirically calibrate these thresholds against independently observed competent behavior.

**What this means for facilitators:** The thresholds are well-considered starting points designed to identify genuinely high-performing, consistent teams. Use them as a structured framework for your assessment. However, when results fall near a threshold boundary (e.g., composite of 4.5-4.8, or SD of 0.4-0.6), rely on your facilitated judgment about the team's actual behavior rather than treating the threshold as a bright line. The behavioral evidence from the workshop discussion is the authoritative basis for your assessment; the thresholds are a consistency check, not an override.

**These thresholds may be revised** as validation data accumulates. Facilitators should expect periodic updates to threshold values as the framework moves through its validation phases.

**Sensitivity note:** The Consistent threshold criteria interact. Small changes in any single criterion (e.g., shifting the composite threshold from 4.7 to 4.5, or the SD threshold from 0.5 to 0.6) would meaningfully change the proportion of teams that qualify. Until empirical validation data is available, facilitators should treat scores near a boundary (within ±0.2 of any threshold) as ambiguous and rely more heavily on behavioral evidence from the workshop discussion than on the numeric result alone.

---

## The Frequency Scale

All diagnostic questions use a 5-point frequency scale:

| Score | Label | Meaning |
|-------|-------|---------|
| 1 | Never | The behavior does not occur. |
| 2 | Rarely | The behavior occurs occasionally but is not part of regular practice. |
| 3 | Sometimes | The behavior occurs with moderate frequency but is inconsistent. |
| 4 | Often | The behavior occurs regularly and is part of established practice, with occasional lapses. |
| 5 | Always | The behavior is habitual and persists even under pressure, time constraints, or unfavorable conditions. |

A score of 5 ("Always") is the target for competency. It does not mean literally 100% of the time with zero exceptions --- it means the behavior is the default, and departures from it are rare and recognized as departures.

---

![VA-10: Score Distribution Archetypes](/images/score-distribution-archetypes.svg)

## Competency Stages

Each zone has four competency stages. These stages describe the team's progression toward competency within that zone, based on the composite scores across all diagnostic questions.

### Emerging (Average Score 2.0 - 2.9)

The team is practicing the behaviors described by the zone's questions, but practice is inconsistent and fragile. Behaviors tend to appear when conditions are favorable (low pressure, familiar work, ample time) and disappear when conditions deteriorate (deadlines, incidents, unfamiliar territory).

**Characteristics:**
- Some team members exhibit the behaviors; others do not.
- Behaviors are present in calm periods but drop off under pressure.
- The team is aware of the target behaviors and is actively working toward them.
- Progress is visible week-over-week but not yet reliable.

**Recommended action:** Continue investing in the current zone. Focus on consistency and pressure resilience rather than expanding scope. Identify specific behaviors that drop off under pressure and address the root causes.

### Developing (Average Score 3.0 - 3.9)

The team is mostly consistent in exhibiting the zone's behaviors. Occasional lapses occur, but the team self-corrects. Behaviors are part of established practice, though they may require reminders or deliberate effort rather than being fully automatic.

**Characteristics:**
- Most team members exhibit most behaviors most of the time.
- Lapses are recognized and corrected without external intervention.
- The team has infrastructure and processes supporting the behaviors.
- Performance under pressure is improved but not yet fully resilient.

**Recommended action:** Continue building consistency. Focus on the specific questions where scores lag. Begin exploring whether the team is ready to invest in the next zone's practices alongside current zone maintenance.

### Established (Average Score 4.0 - 4.9, Not Meeting Full Threshold)

The team consistently exhibits the zone's behaviors. The practices are well-established and largely habitual. Behaviors are habitual for most team members in most situations, though some individual variation remains. The team demonstrates reliable competency but does not yet meet all three quantitative threshold criteria for Consistent.

**Characteristics:**
- Behaviors are habitual for most team members in most situations.
- The team maintains practices under moderate pressure.
- Infrastructure and processes are mature and actively maintained.
- Some individual variation remains --- not all members are at the same level.

**Recommended action:** Identify which specific threshold criteria are not yet met and focus effort there. This is often the "last mile" --- the gap between mostly consistent and fully habitual. Begin parallel investment in the next zone if organizational competency exists.

### Consistent (Meets All Quantitative Threshold Criteria)

The team exhibits the zone's behaviors habitually and uniformly, even under stress. Behaviors persist through personnel changes, deadline pressure, production incidents, and other disruptions. The team has achieved the quantitative standard for the zone's highest competency level.

**Characteristics:**
- All three quantitative threshold criteria are met (see Competency Threshold below).
- Behaviors are automatic --- they persist without reminders or enforcement.
- The team self-corrects quickly when disruptions occur.
- New team members are onboarded into the practices efficiently.

**Recommended action:** Maintain current practices. Consider investing in the next zone. Consider whether the team is ready for the qualitative Exemplary assessment (see below). Periodically re-assess (every 6-12 months) to verify competency is maintained.

**Consistent is a legitimate, positive classification.** It means the team performs the zone's behaviors habitually and uniformly. Most teams that reach this stage will remain here, and that represents genuine organizational capability. Consistent teams are the backbone of sustained competency within each zone.

### Exemplary (Consistent + Qualitative Assessment)

The team meets all quantitative threshold criteria for Consistent AND demonstrates qualitative capabilities that extend beyond habitual behavior: coaching other teams, adapting practices to novel contexts, and innovating within the zone's framework. This is the highest stage within each zone.

**Characteristics:**
- All quantitative threshold criteria are met (Consistent status achieved).
- The team has been assessed on three qualitative dimensions (see Qualitative Exemplary Assessment below) and meets the qualitative standard.
- Team members can explain, teach, and adapt the practices for other teams and contexts.
- The team has developed practices beyond what the zone describes.

**Recommended action:** Maintain current practices. Share learnings with other teams. Consider investing in the next zone. Periodically re-assess (every 6-12 months) to verify both quantitative and qualitative competency is maintained.

---

![VA-14: Threshold Sensitivity](/images/threshold-sensitivity.svg)

![VA-17: Variance Decomposition Diagnostic](/images/variance-decomposition-diagnostic.svg)

## Competency Threshold

A team achieves **Consistent** status within a zone when ALL THREE of the following quantitative criteria are met simultaneously. This model measures both high performance AND consistency across the team. A team that meets all three quantitative criteria and also passes the qualitative Exemplary assessment achieves **Exemplary** status (see Qualitative Exemplary Assessment below).

### Criterion 1: High Composite Average

**The zone composite average (mean of all question composites) is ≥ 4.7.**

This criterion ensures the team's overall performance is at a high level across all assessed behaviors. Calculate the composite for each question (average across all team members), then average those composites to get the zone composite.

*Rationale: 4.7 was selected because it represents the midpoint between "Often" (4.0) and "Always" (5.0), reflecting the judgment that Consistent teams should be closer to habitual than to merely regular practice. This value is an expert-judgment starting point subject to empirical calibration through ROC analysis in the validation study.*

### Criterion 2: Response Consistency

**The standard deviation across ALL individual responses is ≤ 0.5.**

This criterion measures consistency --- both across team members and across questions. A low standard deviation means the team is performing uniformly, without significant gaps in any area or for any individual. Calculate the standard deviation of every individual response in the zone (team members × questions).

*Example: A team of 5 members answering 10 questions produces 50 individual responses. Calculate the standard deviation of all 50 scores. If the SD is ≤ 0.5, the team demonstrates the consistency required for Consistent status.*

*Methodological note:* The 0.5 SD threshold is an expert-judgment-based starting point, not an empirically derived cutoff. It was selected as a reasonable boundary for distinguishing "consistently high-performing" teams from those with meaningful internal variance, but it has not been tested against independently observed competency. The use of a single global SD rather than separate between-person and between-question thresholds is a simplicity-first design choice for the initial framework version. The [Validation Study Plan](/research/validation-study-plan) includes both ROC analysis (Phase 3) to empirically calibrate this threshold and variance decomposition analysis to evaluate whether decomposed thresholds would provide better diagnostic accuracy. Facilitators should expect this threshold to be revised as validation data becomes available.

*Recommendation:* Facilitators should always compute the decomposed SDs (between-person and between-question) alongside the global SD, not just when Criterion 2 fails. The decomposed values provide richer diagnostic information regardless of whether the threshold is met.

#### When Criterion 2 Is Not Met: Diagnosing the Source of Variance

A global SD above 0.5 indicates inconsistency, but it does not reveal the source. Two distinct variance patterns produce different diagnostic signals and require different interventions. When Criterion 2 is not met, facilitators should decompose the variance using the following procedure:

**Step 1: Calculate between-person consistency.** For each team member, calculate their mean score across all questions. Then calculate the standard deviation of these person means. This measures how much team members differ from each other overall.

**Step 2: Calculate between-question consistency.** The question composites (averages) are already calculated in Step 2 of the scoring procedure. Calculate the standard deviation of these question composites. This measures how much the team's performance varies across different behavioral areas.

**Interpreting the results:**

| Between-Person SD | Between-Question SD | Pattern | Likely Cause | Intervention |
|--------------------|---------------------|---------|--------------|--------------|
| High (> 0.5) | Low (< 0.3) | One or more team members are significantly behind the rest | Onboarding gap, access barrier, individual resistance, or role-based adoption difference | Targeted support for specific individuals; pairing with high performers; investigate barriers |
| Low (< 0.3) | High (> 0.5) | The team is uniform but specific behavioral areas lag | Practice gap in specific proficiencies; the team has not yet adopted certain behaviors | Focused coaching on the specific questions/behaviors that lag |
| High (> 0.5) | High (> 0.5) | Both team members and behavioral areas vary widely | Multiple issues: uneven adoption across both people and practices | Broader investment needed; revisit whether the team has the organizational support for this zone |

*Note: The thresholds in this table (0.5 and 0.3) are interpretive guidelines, not validated cutoffs. Use them as anchors for your judgment, not as decision rules.*

This decomposition is methodologically standard in psychometric assessment of multi-facet instruments (Crocker & Algina, 1986; Nunnally & Bernstein, 1994). The [interpreting-results tutorial](/toolkit/interpreting-results) demonstrates this analysis informally with worked examples.

### Criterion 3: No Weak Links

**No single question composite falls below 4.0.**

This criterion ensures competency is broad, not concentrated in a few areas while others lag. Even if the overall average is high, a question composite below 4.0 reveals a significant gap in one behavioral area that must be addressed before the team can be considered Consistent.

In practice, teams that meet Criteria 1 and 2 will nearly always also meet Criterion 3. Criterion 3 serves as a safety check against the uncommon but important case where strong overall performance and consistency mask a significant gap in a specific behavioral area.

### All Three Required

A team that meets two of three criteria is Established but not Consistent. Common patterns:

- **High average but high variance (fails Criterion 2):** The team performs well on average, but some members or some behaviors are significantly weaker. Focus on the specific individuals or questions that drive the variance.
- **High average and consistency but a weak question (fails Criterion 3):** The team is broadly strong and uniform, but one behavioral area lags behind. Focus coaching on the specific practice represented by the lagging question.
- **Uniform and no weak links but average too low (fails Criterion 1):** The team is uniform and has no major gaps, but overall performance needs to rise. This is a "good but not yet great" pattern --- continue building depth across all behaviors.

---

## How to Score and Aggregate Responses

### Handling Missing or "Not Applicable" Responses

Occasionally a team member may leave a question blank or mark it "not applicable" (e.g., a QA engineer on a question about code generation practices). Handle these cases as follows:

- **Role-based non-applicability:** If a question genuinely does not apply to a team member's role, exclude that response from the question composite calculation. Adjust the denominator accordingly. Note the exclusion in your facilitator notes.
- **Unanswered questions (no explanation):** Treat as missing data. During the discussion phase, ask the team member why they did not answer. If the question is applicable, encourage them to provide a score. If they cannot, exclude the response and note it.
- **Small teams (fewer than 5 members):** Missing responses have a disproportionate effect on composites. When more than 20% of responses for a single question are missing, flag the question composite as having reduced reliability in your report.

Do not impute missing values (e.g., by substituting the team average). Missing data should reduce the denominator, not be replaced by an estimate.

**Proactive role-composition review:** Before scoring, review the team's role composition against the zone questions. Questions that address behaviors specific to roles not represented on the team (e.g., PM questions when the team has no PM) should be flagged proactively. Ensure that low scores on these questions are interpreted as role composition effects rather than competency gaps. If team members rated role-irrelevant questions numerically rather than marking N/A, the facilitator may exclude them from the composite with a note in the report. If a question consistently triggers the reduced-reliability flag across multiple teams (e.g., because the question addresses a role not present on many teams), this pattern should be reported in the validation study as it may indicate that the question should be administered conditionally or excluded from composites for teams where the role is absent.

### Step 1: Collect Individual Responses

Each team member completes the zone's questions independently, rating each question on the 1-5 scale. Responses should be collected before any group discussion to avoid anchoring effects.

### Step 2: Calculate Question-Level Composites

For each question, calculate the average (mean) score across all team members. Round to one decimal place.

*Example for a team of 5 on a 10-question zone assessment:*
| Team Member | Q1 (Core) | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|-------------|-----------|----|----|----|----|----|----|----|----|-----|
| A           | 5         | 5  | 4  | 5  | 5  | 4  | 5  | 5  | 4  | 5   |
| B           | 5         | 5  | 5  | 5  | 4  | 5  | 5  | 5  | 5  | 4   |
| C           | 5         | 4  | 5  | 5  | 5  | 5  | 5  | 4  | 5  | 5   |
| D           | 5         | 5  | 5  | 4  | 5  | 5  | 4  | 5  | 5  | 5   |
| E           | 5         | 5  | 5  | 5  | 5  | 4  | 5  | 5  | 5  | 5   |
| **Composite** | **5.0** | **4.8** | **4.8** | **4.8** | **4.8** | **4.6** | **4.8** | **4.8** | **4.8** | **4.8** |

### Step 3: Check Threshold Criteria

1. **Zone Composite Average:** Average of all question composites = (5.0 + 4.8 + 4.8 + 4.8 + 4.8 + 4.6 + 4.8 + 4.8 + 4.8 + 4.8) / 10 = 4.82. Threshold met (≥ 4.7).
2. **Response Consistency:** Calculate the standard deviation of all 50 individual responses. In this example, most scores are 4 or 5 with SD ≈ 0.41. Threshold met (≤ 0.5).
3. **No Weak Links:** Lowest question composite is 4.6 (Q6). Threshold met (all ≥ 4.0).

**Result:** This team meets all three quantitative criteria. They are **Consistent**. If the team also passes the Qualitative Exemplary Assessment (see below), they achieve **Exemplary** status.

*Contrast: If Q6 composite were 3.8, the team would fail Criterion 3 (No Weak Links) despite strong overall performance. They would be **Established** --- focus coaching on the behavior Q6 represents.*

### Step 4: Determine Competency Stage

Calculate the overall average score (mean of all individual responses) and use it alongside the threshold criteria:

| Overall Average | Threshold Criteria Met? | Qualitative Assessment? | Competency Stage |
|-----------------|------------------------|------------------------|----------------|
| 2.0 - 2.9      | N/A                    | N/A                    | Emerging |
| 3.0 - 3.9      | N/A                    | N/A                    | Developing |
| 4.0 - 4.9      | Not all three met      | N/A                    | Established |
| 4.0+            | All three met          | Not conducted or not met | Consistent |
| 4.0+            | All three met          | Met                    | Exemplary |

---

## Qualitative Exemplary Assessment

A team that meets all three quantitative threshold criteria achieves **Consistent** status. To achieve **Exemplary** status, the team must also demonstrate qualitative capabilities that extend beyond habitual behavior. The facilitator conducts a brief structured interview (15--20 minutes, conducted in the same workshop session or as a follow-up) covering three dimensions.

This additional assessment step exists because the quantitative thresholds measure behavioral frequency and consistency but do not capture the coaching, adaptation, and innovation capabilities that distinguish a team that follows practices well from a team that has internalized the practices deeply enough to extend and teach them.

### Dimension A: Coaching Capability

**Probe:** "Has your team helped another team adopt or improve any of the practices in this zone? Describe what happened."

**Evidence standard:** The team can describe a specific instance where they helped another team, including what advice they gave, what the other team did with it, and what the result was. General statements ("we share knowledge") do not satisfy this criterion. A specific episode with a specific other team does.

**Alternative for single-team organizations:** "Could a new member of your team learn your zone practices from your documentation and configuration alone, without oral guidance from existing members? Have you tested this?" This tests the externalization capability that underlies coaching --- the ability to articulate practices in a form that others can learn from independently.

### Dimension B: Contextual Adaptation

**Probe:** "Describe a situation where your standard practices did not work well and you adapted them. What was the context, what did you change, and why?"

**Evidence standard:** The team can describe a specific instance where they recognized that a zone practice was not appropriate for a particular context (different technology, different constraints, different risk profile) and deliberately modified it. The key word is "deliberately" --- accidental deviation is not adaptation. The team should be able to articulate why the standard practice did not fit and why their adaptation was appropriate.

### Dimension C: Practice Innovation

**Probe:** "Has your team developed any practices beyond what the zone describes that have improved your effectiveness? What are they?"

**Evidence standard:** The team can describe at least one practice that goes beyond the zone's proficiency descriptions. This does not need to be groundbreaking --- it can be a small refinement, an integration of two practices, or an extension of an existing practice to a new context. The point is that the team has moved beyond implementing prescribed practices to generating their own.

### Qualitative Scoring

The facilitator rates each dimension as **Present** (clear, specific evidence), **Partial** (some evidence but incomplete or vague), or **Absent** (no specific evidence).

**Exemplary qualification rule:** A team must receive **Present** on at least two of three dimensions to qualify as Exemplary. **Partial** on all three also qualifies. **Absent** on two or more dimensions does not qualify --- the team is classified as **Consistent**.

| Dimension A | Dimension B | Dimension C | Classification |
|-------------|-------------|-------------|----------------|
| Present     | Present     | Any         | Exemplary |
| Present     | Any         | Present     | Exemplary |
| Any         | Present     | Present     | Exemplary |
| Partial     | Partial     | Partial     | Exemplary |
| Present     | Partial     | Absent      | Consistent |
| Partial     | Absent      | Partial     | Consistent |
| Absent      | Absent      | Any         | Consistent |
| Any         | Absent      | Absent      | Consistent |

*Note: The qualitative assessment is conducted only when the team has met all three quantitative criteria for Consistent. It is not a substitute for quantitative performance --- it is an additional assessment of depth beyond the quantitative standard.*

*Note: The qualitative Exemplary criteria, like the quantitative thresholds, are expert-judgment starting points. The validation study will track how often the quantitative-qualitative gap occurs (teams that meet quantitative criteria but do not demonstrate qualitative capabilities) and whether this gap predicts different outcomes.*

---

## Interpreting Bimodal Score Distributions

Bimodal distributions occur when scores cluster at two distinct levels rather than forming a single cluster. This is a common and important pattern that facilitators should watch for.

### What Bimodal Looks Like

Instead of most scores clustering around 3-4, some team members score 4-5 while others score 1-2 on the same questions. The average may look reasonable (e.g., 3.5) but the average obscures a fundamental split in the team's experience.

### Common Causes

- **Role-based splits:** Engineers score high on coding-related questions while PMs score low (or vice versa). This suggests the zone's practices have been adopted in some roles but not others.
- **Tenure-based splits:** Experienced team members who helped establish the practices score high; newer members who joined after the practices were established score low. This suggests onboarding gaps.
- **Adoption-based splits:** Early adopters score high; skeptics or late adopters score low. This suggests unresolved resistance or insufficient organizational investment.
- **Context-based splits:** Scores are high for routine work but low for production incidents, unfamiliar codebases, or deadline pressure. This suggests the practices are not yet pressure-resilient.

### Confidentiality Note

Bimodal distributions can effectively identify specific individuals, especially on small teams. When discussing bimodal patterns with the team, focus on the pattern (e.g., "there is a gap between two groups") rather than naming individuals. In reports to leadership, present aggregate patterns without individual-level data. See the [Facilitator Guide](/toolkit/facilitator-guide) for detailed data handling guidance.

### What to Do

1. **Do not average away the bimodality.** A composite score of 3.5 that is actually 5+5+5+2+1 tells a very different story from 4+4+3+3+4. Always examine the distribution, not just the average.
2. **Identify the split.** Determine which team members are scoring high and which are scoring low. Look for patterns by role, tenure, or context.
3. **Address the root cause.** Bimodal distributions are a coaching opportunity. The high-scoring group has achieved the behavior; the low-scoring group has not. The intervention should be targeted at the specific barrier the low-scoring group faces.
4. **Do not declare competency.** A team with a bimodal distribution is not competent regardless of the average score. Competency requires consistency across the team.

---

## Interpreting Score Distributions for Facilitators

### Uniform High Scores (4.5+ average, low variance)

The team is consistently practicing the zone's behaviors. Check whether the threshold criteria are met. If yes, the team has achieved Consistent status. If the team also passes the qualitative Exemplary assessment, they achieve Exemplary. If the quantitative criteria are not met, identify the specific gaps preventing Consistent.

**Caution:** Very uniform high scores with no variation can indicate social desirability bias. Probe with specific examples: "Can you describe a time this week when you did this? Can you describe a time when you didn't?"

### Uniform Low Scores (2.0-3.0 average, low variance)

The team is consistently not yet practicing the zone's behaviors. This is a clear signal that additional investment is needed. Focus on the specific organizational investments and training for the zone.

**This is not failure.** Honest low scores are more valuable than inflated high scores. Praise the team for honest self-assessment and use the results to plan targeted investment.

### High Average, High Variance

Some questions or some team members score much higher than others. Identify the specific gaps. This often indicates that some aspects of the zone's practices have been adopted while others have not, or that adoption varies by role or individual.

### Gradually Increasing Scores Across Questions

If early questions (which tend to be more fundamental) score higher than later questions (which tend to be more advanced), this is a natural progression pattern. The team is building from foundational behaviors toward more sophisticated ones.

### Scores That Decline Under Probing

If initial scores are high but decrease when the facilitator asks for specific examples, the original scores may reflect aspiration rather than behavior. This is common and is not cause for concern --- it is cause for honest recalibration. Guide the team to re-rate based on actual behavior, not intended behavior.

**Facilitation guidance:** Score decline under probing is diagnostically valuable information, not a facilitation failure. When initial self-assessment scores drop during facilitated discussion, this typically indicates that the initial scores were inflated by social desirability bias --- team members reported what they aspire to rather than what they actually do. Facilitators should:

- **Normalize the decline.** Explain to the team that score adjustment during discussion is expected and healthy. It means the team is moving from aspiration to honest self-assessment.
- **Record both scores.** Note the pre-discussion and post-discussion scores. The magnitude of the decline is itself a useful data point --- large declines may indicate that the team's self-perception is significantly out of alignment with actual behavior, which is worth surfacing in the team report.
- **Do not attempt to "recover" the higher scores.** The post-probing scores are more diagnostically accurate than the initial scores. Facilitators who try to preserve higher scores are undermining the assessment's value.
- **Use the decline as a coaching moment.** The gap between initial and probed scores reveals exactly where the team's aspirational self-image diverges from habitual behavior. This gap is a productive starting point for identifying investment priorities.

---

## Reassessment Cadence

- **Teams in Emerging or Developing stages:** Reassess every 2-3 months to track progress.
- **Teams in Established stage:** Reassess every 3-4 months to verify continued progress toward Consistent.
- **Teams at Consistent or Exemplary:** Reassess every 6-12 months to verify competency is maintained, especially after significant team composition changes or organizational disruptions.
- **After major changes:** Reassess within 1-2 months of significant events such as team reorganizations, major personnel changes (more than 25% of the team), tool migrations, or process overhauls.

---

## Methodological Assumptions

The scoring methodology rests on several assumptions that are disclosed here for transparency. These assumptions are testable and will be evaluated through the [Validation Study Plan](/research/validation-study-plan).

- **Aggregation assumption:** Aggregating individual responses to team composites assumes sufficient within-team agreement. If team members answer the same question very differently, the composite average may not represent a meaningful team-level construct. This assumption is tested in the validation study using r_wg (within-team agreement) analysis but has not yet been empirically confirmed. Facilitators should note when within-team agreement is low on specific questions (individual responses spanning a range of 3 or more points), as the composite for that question obscures a split that should be reported as a finding in its own right.

- **Self-report validity assumption:** The scoring thresholds assume that self-reported behavioral frequency is a valid proxy for actual habitual behavior. Self-report data is subject to social desirability bias, aspiration bias, and conformity effects. The facilitation methodology (behavioral probing, discussion-based recalibration) partially mitigates these biases, but residual bias likely inflates scores modestly even under ideal conditions. This assumption will be tested in Phase 2 through behavioral observation comparing self-reported scores to independently observed behavior.

- **Threshold provisionality:** These thresholds are expert-judgment starting points, subject to empirical revision based on ROC analysis in Phase 3 of the validation study. Facilitators should expect periodic updates to threshold values as the framework moves through its validation phases.

---

## Related Documentation

- [Zone 1 Questions](/toolkit/zone-1-questions) -- The diagnostic questionnaire for Zone 1
- [Zone 2 Questions](/toolkit/zone-2-questions) -- The diagnostic questionnaire for Zone 2
- [Zone 3 Questions](/toolkit/zone-3-questions) -- The diagnostic questionnaire for Zone 3
- [Zone 4 Questions](/toolkit/zone-4-questions) -- The diagnostic questionnaire for Zone 4
- [Baseline Screening](/toolkit/baseline-screening) -- Zone 0 screening questions administered before zone-specific assessment
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Full zone definition; the behavioral foundation for Zone 1 scoring
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Full zone definition for Zone 2 scoring
- [Zone 3 Reference](/toolkit/zone-3-accelerating) -- Full zone definition for Zone 3 scoring
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Full zone definition for Zone 4 scoring
- [Quick Reference](/toolkit/quick-reference) -- One-page workshop reference including the competency stages and threshold criteria in summary form
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script that uses these scoring thresholds during the workshop discussion phase
- [Interpreting Results](/toolkit/interpreting-results) -- How to read and communicate scoring results to teams and leadership
