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
- Practitioner experience from AIL engagements with software teams adopting AI-augmented practices

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

### "Not Part of My Role" Option

In addition to the 1-5 frequency scale, each question includes the response option: **"This behavior is not part of my role on this team."** This option is visually separated from the frequency scale (it is not a 6th point or a zero) and is selected when the behavior described by the question does not apply to the respondent's role on their team.

This option replaces the previous approach where the facilitator directed team members to skip role-inapplicable questions. Respondents determine for themselves whether each question applies to their work. This respects the fluid role boundaries common on modern software teams, where individuals often span multiple roles and are the best judges of which behaviors are part of their practice.

**"Not part of my role" is a response, not missing data.** It generates useful diagnostic information: the pattern of which team members select this option on which questions reveals the team's role structure as perceived by its members. See Handling "Not Part of My Role" Responses below for scoring implications.

---

![VA-10a: Uniform High Scores](/images/score-archetype-uniform-high.svg)

![VA-10b: Uniform Low Scores](/images/score-archetype-uniform-low.svg)

![VA-10c: High Average, High Variance](/images/score-archetype-high-variance.svg)

![VA-10d: Bimodal Split](/images/score-archetype-bimodal.svg)

![VA-10e: Single Outlier](/images/score-archetype-single-outlier.svg)

![VA-10f: Gradually Decreasing](/images/score-archetype-decreasing.svg)

## Competency Stages

Each zone has five competency stages. These stages describe the team's progression toward competency within that zone, based on the composite scores across all diagnostic questions.

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

**The standard deviation across ALL numeric individual responses (excluding "not part of my role" selections) is ≤ 0.5.**

This criterion measures consistency --- both across team members and across questions. A low standard deviation means the team is performing uniformly, without significant gaps in any area or for any individual. Calculate the standard deviation of every numeric (1-5) individual response in the zone, excluding any "not part of my role" responses and excluding responses from questions with n <= 1 (see minimum-n rules above).

*Example: A team of 5 members answering 10 questions where all questions have n >= 2 and 3 responses are "not part of my role" produces 47 numeric responses. Calculate the standard deviation of those 47 scores. If the SD is ≤ 0.5, the team demonstrates the consistency required for Consistent status. Note the effective response count in your scoring worksheet.*

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

### Handling "Not Part of My Role" and Missing Responses

Each question includes a "This behavior is not part of my role on this team" option alongside the 1-5 frequency scale. This option is the primary mechanism for handling role-inapplicable questions --- respondents determine for themselves whether each question applies to their work.

**"Not part of my role" responses** are excluded from the question composite calculation. They reduce the effective sample size (n) for that question but are not treated as zeros, missing data, or low scores. They are legitimate exclusions that reflect the team's role composition.

**Unanswered questions (no explanation):** Treat as missing data, distinct from "not part of my role." During the discussion phase, ask the team member why they did not answer. If the question is applicable, encourage them to provide a score or select "not part of my role." If they cannot, exclude the response and note it.

Do not impute missing values (e.g., by substituting the team average). Missing data and "not part of my role" responses should reduce the denominator, not be replaced by an estimate.

#### Minimum-n Rules for Question Composites

"Not part of my role" responses reduce the number of numeric scores (n) available for each question composite. The reliability of a question composite depends on n. Apply the following rules:

| Effective n | Reporting Rule |
|-------------|----------------|
| n >= 3 | Report question composite normally. The composite is based on sufficient responses to represent team-level behavior. |
| n = 2 | Report question composite with a **reliability caveat** in the facilitator notes and team report. Two responses provide limited evidence; the composite is directional but should not be treated as definitive. Give additional weight to behavioral evidence from the discussion phase for this question. |
| n = 1 | Report as an **individual response**, not a team composite. Flag in the report: "This question was answered by one team member; the score reflects individual rather than team behavior." Do not include this question composite in the zone composite average or global SD calculation. |
| n = 0 | Question is **not scorable** for this team. Note in the report: "No team members indicated this behavior applies to their role." Exclude from all composite calculations. If n = 0 occurs on a question that should have broad applicability, investigate whether the question wording is unclear or whether the team genuinely lacks the relevant role. |

**Zone composite adjustment for excluded questions:** When a question is excluded from the zone composite (n = 0 or n = 1), calculate the zone composite average over the remaining questions only. Note the reduced question count in the report. If more than two questions are excluded from a zone assessment, flag the entire zone assessment as having reduced coverage and rely more heavily on the discussion phase and cross-functional probes for the competency determination.

**Proactive role-composition review:** Before scoring, scan the "not part of my role" response patterns across the team. Flag any patterns that appear implausible given the respondent's role --- for example, an engineer selecting "not part of my role" on a code review question. These should be probed during the discussion phase. Also flag organizational-behavior questions (phrased as "The team..." or "The organization...") where respondents selected "not part of my role" --- organizational behaviors should be observable by all team members, and this response may indicate a visibility gap rather than genuine role-inapplicability.

**Validation study tracking:** Track "not part of my role" rates per question across administrations. If a question consistently generates high "not part of my role" rates beyond what role composition would predict, this is a signal that the question may be poorly worded, overly role-specific, or ambiguous in its applicability. Report these patterns in the validation study.

### Step 1: Collect Individual Responses

Each team member completes the zone's questions independently, rating each question on the 1-5 frequency scale or selecting "This behavior is not part of my role on this team." Responses should be collected before any group discussion to avoid anchoring effects.

### Step 2: Calculate Question-Level Composites

For each question, calculate the average (mean) score across all team members who provided a numeric response (1-5). Exclude "not part of my role" selections from the calculation and reduce the denominator accordingly. Record the effective n for each question. Apply the minimum-n rules (see above) to determine whether the question composite is reportable. Round to one decimal place.

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
2. **Response Consistency:** Calculate the standard deviation of all numeric individual responses (excluding any "not part of my role" selections). In this example, all 50 responses are numeric, most scores are 4 or 5 with SD ≈ 0.41. Threshold met (≤ 0.5).
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

## Sentinel Battery Scoring

### Purpose

The sentinel battery is a set of 3-4 scored questions from one zone above the team's target zone, administered to detect emergent capability. Sentinel scores are reported separately from the target zone assessment and are not included in the target zone's composite calculations.

### Administration

Administer the sentinel battery after the target zone assessment. Use the sentinel sets defined in the [Workshop Script](/toolkit/workshop-script). The Zone 1 Foundation Check (Q1, Q4, Q5, Q6) is used when Zone 1 is administered as a health check alongside higher zones.

### Scoring Sentinel Responses

Score sentinel responses using the same 1-5 scale and N/A handling as target zone questions. Calculate a composite for each sentinel question using the standard procedure. However, do **not**:

- Include sentinel composites in the target zone composite average
- Include sentinel responses in the target zone's global SD calculation
- Use sentinel scores in the target zone's threshold determination

### Interpreting Sentinel Scores

Sentinel scores produce a binary diagnostic signal: **is there emergent capability in the next zone?**

- **All sentinel composites below 2.0:** No emergent capability detected. The team has not begun practicing the next zone's behaviors. This is the expected result for most teams and is not a gap --- it simply means the team's growth is concentrated in their current zone.
- **Any sentinel composite at 2.0 or above:** Emergent capability detected. One or more team members are beginning to practice next-zone behaviors. Report this in the team report as an "emergent capability indicator" with the specific questions and scores. During the discussion phase, explore which individuals are exhibiting these behaviors and what is driving it.
- **Any sentinel composite at 3.0 or above:** Strong emergent signal. The facilitator should consider administering the remaining questions from that zone, either in the current session or a follow-up, to determine the scope and depth of the emergent capability.

### Reporting Sentinel Results

Report sentinel scores in a separate section of the team report titled "Emergent Capability Scan." Frame the results as forward-looking diagnostic data:

- "The team was assessed on [N] sentinel questions from [next zone description]. These questions detect whether the team has begun developing practices beyond their current target."
- If no signal: "All sentinel scores were below 2.0, indicating the team's current growth is concentrated in [target zone description]. This is expected and not a concern."
- If signal detected: "Sentinel scores above 2.0 were observed on [specific questions], suggesting emergent capability in [describe the behaviors]. The individuals exhibiting these behaviors are potential change agents for the team's future progression."

### Zone-Unlabeled Instrument Design

Participant-facing questionnaire materials do not include zone labels. Sections are labeled neutrally (Section A, Section B, etc.) or presented as a continuous instrument with sequential question numbering. Zone classification is a facilitator-side analytical concept introduced to participants during the Score Aggregation phase after honest scoring is complete. This design reduces anchoring bias and normalizes low scores on sentinel items.

---

## Reassessment Cadence

- **Teams in Emerging or Developing stages:** Reassess every 2-3 months to track progress.
- **Teams in Established stage:** Reassess every 3-4 months to verify continued progress toward Consistent.
- **Teams at Consistent or Exemplary:** Reassess every 6-12 months to verify competency is maintained, especially after significant team composition changes or organizational disruptions.
- **After major changes:** Reassess within 1-2 months of significant events such as team reorganizations, major personnel changes (more than 25% of the team), tool migrations, or process overhauls.

---

## Methodological Assumptions

The scoring methodology rests on several assumptions that are disclosed here for transparency. These assumptions are testable and will be evaluated through the [Validation Study Plan](/research/validation-study-plan).

- **Aggregation assumption:** Aggregating individual responses to team composites assumes sufficient within-team agreement. If team members answer the same question very differently, the composite average may not represent a meaningful team-level construct. This assumption is tested in the validation study using r_wg (within-team agreement) analysis but has not yet been empirically confirmed. Facilitators should note when within-team agreement is low on specific questions (individual responses spanning a range of 3 or more points), as the composite for that question obscures a split that should be reported as a finding in its own right. Note that r_wg has different interpretive meaning depending on the question's referent type: for individual-behavior questions ("I do X"), low r_wg indicates genuine behavioral variance across team members; for team/organizational-behavior questions ("The team/organization does X"), low r_wg may indicate either genuine inconsistency in the team/organizational practice or differences in respondent visibility into the behavior being assessed. The validation study should analyze r_wg values separately for each referent type.

- **Engineering-weighted composite assumption:** The composite scores primarily reflect engineering competency. Across all four zones, approximately 70% of scored questions assess engineering behaviors, with one scored question per zone for each non-engineering role (PM, design, QA). This means a team's composite score and competency stage classification are driven predominantly by engineering adoption. A team classified as Consistent or Exemplary may have strong engineering practices but uneven adoption across PM, design, and QA roles. Facilitators should interpret composite scores alongside their cross-functional probe findings (see the [Facilitator Guide](/toolkit/facilitator-guide) section on Assessing Non-Engineering Roles) and note cross-functional adoption patterns in the narrative sections of team and management reports. The cross-functional probes included in each zone's question document are designated as pilot items; data from these probes will inform whether future instrument versions should include additional scored cross-functional questions.

- **Self-report validity assumption:** The scoring thresholds assume that self-reported behavioral frequency is a valid proxy for actual habitual behavior. Self-report data is subject to social desirability bias, aspiration bias, and conformity effects. The facilitation methodology (behavioral probing, discussion-based recalibration) partially mitigates these biases, but residual bias likely inflates scores modestly even under ideal conditions. This assumption will be tested in Phase 2 through behavioral observation comparing self-reported scores to independently observed behavior.

- **Threshold provisionality:** These thresholds are expert-judgment starting points, subject to empirical revision based on ROC analysis in Phase 3 of the validation study. Facilitators should expect periodic updates to threshold values as the framework moves through its validation phases.

- **Zone-unlabeled administration:** Participant-facing materials do not include zone labels. This design choice reduces anchoring bias (participants do not adjust self-assessment based on zone expectations) and normalizes low scores on sentinel items (participants do not know which questions are "above their level"). Zone classification is introduced by the facilitator during the Score Aggregation phase, after honest scoring is complete. The validation study should compare response distributions between early pilot administrations that used zone-labeled materials and current zone-unlabeled administrations to quantify any anchoring effect.

- **Sentinel battery assumption:** The sentinel battery assumes that emergent capability in the next zone manifests first in specific leading-indicator behaviors (core metric, specification-first orientation, systematic diagnosis) before it appears in infrastructure-dependent behaviors (CAT pipelines, eval harnesses, governance structures). This assumption determines which questions are selected as sentinels. The validation study should track all next-zone questions in early administrations to empirically validate sentinel selection by analyzing which questions show variance below the target zone.

- **Question phrasing change:** The diagnostic questions have been revised to use principled referent framing: first-person "I" for individual-behavior questions and "The team" or "The organization" for team/organizational-behavior questions. The previous phrasing used third-person role-specific language (e.g., "Developers use..." or "QA team members use..."). This change improves construct validity and aggregation justifiability but may affect response distributions. Any pilot data collected under the previous phrasing should not be directly compared to data collected under the current phrasing without accounting for the potential phrasing effect. Threshold calibration should be conducted on data collected under the current phrasing. Additionally, the introduction of an explicit "This behavior is not part of my role on this team" response option changes the effective sample size for role-specific questions. The minimum-n rules above address the scoring implications; the validation study should analyze whether response distributions and threshold performance differ meaningfully between the two phrasing versions if any pre-change data exists.

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
