---
title: "ACE Validation Study Plan"
description: "Design for a mixed-methods validation study to establish the reliability and validity of the ACE framework through expert review, pilot diagnostics, and longitudinal outcome tracking."
order: 2
---

## 1. Purpose and Scope

The ACE framework has been developed through theory and internal practice experience at Artium. It is informed by observation of software teams adopting AI-augmented practices across all crafts involved in software production. It has not yet been validated through formal empirical research.

This study plan describes the work required to move the framework from practitioner-informed theory to an instrument with demonstrated reliability and validity. "Validation" in this context does not mean proof of perfection. It means establishing enough evidence to justify recommending the framework to client organizations with confidence -- confidence that the zone descriptions reflect real organizational states, that the diagnostic questions reliably distinguish those states, and that following the framework's investment recommendations actually produces the promised benefits.

This is a consulting-grade validation effort, not a clinical or educational psychometric study. The standard of evidence appropriate here is: sufficient rigor that a client organization can trust the results and act on them; sufficient rigor that we can identify and correct significant errors in the framework; and sufficient transparency that clients understand what has and has not been validated.

The scope of this study plan covers three phases conducted over approximately 24 months. Phase 1 establishes content and face validity through expert review. Phase 2 tests the instrument in pilot facilitations and measures inter-rater reliability. Phase 3 tracks longitudinal outcomes to assess predictive validity.

---

## 2. Research Questions

The validation study will seek to answer the following questions:

**RQ1: Do the four zones represent meaningfully distinct organizational states?**
Can experienced practitioners, coaches, and researchers reliably distinguish Zone 1 organizations from Zone 2, Zone 2 from Zone 3? Or do the zone descriptions blur together in ways that make consistent classification difficult?

**RQ2: Do the diagnostic questions reliably distinguish zone levels?**
Does the diagnostic instrument produce consistent results when administered by different facilitators to the same team? Are the questions interpreted consistently by participants across different organizations and contexts?

**RQ3: Is the competency threshold predictive of organizational behavior under pressure?**
Do teams that meet the competency threshold (zone composite average ≥ 4.7, standard deviation ≤ 0.5, no question composite below 4.0) actually exhibit competent behavior when observed directly -- particularly under deadline stress or organizational disruption?

**RQ4: Do the organizational investment recommendations predict successful zone progression?**
Do teams and organizations that make the investments described for a given zone actually progress to the next zone? Do organizations that skip those investments stall or regress?

**RQ5: Are the proficiency descriptions complete and accurate?**
Are there important AI-augmented development practices that the framework misses or misdescribes? Are there described proficiencies that turn out not to matter in practice?

**RQ6: Are the zone progression timelines realistic?**
The framework estimates timelines for progression between zones. Do organizations actually progress in those timeframes, or are the estimates systematically optimistic or pessimistic?

---

## 3. Study Design

This validation study uses a mixed-methods design combining:

- **Qualitative expert interviews** to assess content validity: do the zone descriptions, proficiency lists, and investment recommendations match the reality that experienced practitioners observe?
- **Facilitated pilot diagnostics** to assess construct validity and practical utility: does the instrument produce consistent, actionable results when administered in the field?
- **Quantitative reliability analysis** to assess inter-rater reliability and internal consistency using available pilot data.
- **Longitudinal outcome tracking** to assess predictive validity: does the framework's guidance actually produce the promised results over time?

The three phases are sequential and iterative. Each phase may produce revisions to the framework that inform the next phase. Phase 1 expert feedback will be incorporated before Phase 2 pilot facilitations begin. Phase 2 pilot learnings will be incorporated before Phase 3 longitudinal tracking is locked in.

**Pre-registration.** Before Phase 2 data collection begins, the study hypotheses, primary analyses, and decision criteria should be pre-registered in a public or semi-public repository (e.g., OSF or an internal research registry). Pre-registration commits the research team to its analytical plan before seeing the data, reducing the risk of post-hoc rationalization. This does not preclude exploratory analyses -- it distinguishes confirmatory from exploratory findings in reporting.

---

## 4. Phase 1: Expert Validation (Months 1-6)

### Objective

Establish content validity: do the zone definitions, diagnostic questions, proficiency descriptions, and investment recommendations accurately reflect the reality of AI-augmented software development as understood by experienced practitioners?

### Expert Selection Criteria

Target 8-12 experts across three categories:

**Category A: AI Engineering Practitioners (3-4 participants)**
- Personally integrated AI tools into production workflows, including agentic tools (Claude Code, Cursor, or equivalent)
- At least 12 months of consistent AI tool usage in professional contexts
- Direct experience with team-level AI adoption, not only individual use

**Category B: Agile and Engineering Coaches (2-3 participants)**
- Coaches or consultants who work with software teams on process improvement
- Familiarity with organizational competency or maturity frameworks
- Experience coaching teams through tool or process adoption

**Category C: Engineering Leadership (3-5 participants)**
- Engineering managers, directors, or VPs who have led AI adoption initiatives
- Responsibility for investment decisions related to AI tooling and infrastructure
- Experience with the organizational change dimension of AI adoption, not only the technical

### Validity Dimensions to Assess

Each expert evaluates the framework across the following dimensions using a structured feedback form:

| Dimension | Assessment Question | Format |
|-----------|---------------------|--------|
| Accuracy | Do the proficiency descriptions match what you observe in practice? | 1-5 Likert + open comments |
| Completeness | Are important proficiencies, investments, or techniques missing? | Open-ended |
| Sequencing | Is the zone ordering correct? Do teams develop these capabilities in this sequence? | 1-5 Likert + open comments |
| Boundary clarity | Are zone boundaries clear enough to reliably classify a team? | 1-5 Likert + open comments |
| Question clarity | Are the diagnostic questions unambiguous? | Per-question: clear / ambiguous / needs revision |
| Threshold meaningfulness | Do the scoring thresholds correspond to meaningful capability differences? | 1-5 Likert + open comments |
| Investment accuracy | Are the organizational investments for each zone the right investments? | 1-5 Likert + open comments |
| Timeline realism | Are the progression timelines realistic? | 1-5 Likert + suggested adjustments |

### Protocol

1. **Initial briefing (30 minutes).** Explain the ACE framework, validation goals, and the expert's role. Provide all materials: zone definitions document, diagnostic questionnaire, scoring rubric.
2. **Independent review (1-2 weeks).** Expert reviews materials at their own pace and completes the structured feedback form.
3. **Structured interview (60 minutes).** Semi-structured interview to explore feedback in depth. See [Expert Interview Guide](/research/expert-interview-guide).
4. **Synthesis and iteration.** Research team synthesizes feedback, identifies patterns, and revises framework materials.
5. **Second-round review (optional, 30 minutes).** For experts whose feedback prompted significant changes, a follow-up review of revised materials.

### Synthesizing Findings

Following Lawshe's (1975) content validity ratio (CVR) method: each expert rates each zone element (proficiency, investment, technique) as "essential," "useful but not essential," or "not necessary." CVR = (n_essential - N/2) / (N/2). For N = 10 experts, elements with CVR below 0.62 are flagged for revision or removal.

For qualitative open-ended comments: thematic analysis to identify consistent themes across experts. Themes appearing in 3 or more expert responses are treated as actionable findings requiring framework revision or explicit justification for non-revision.

**Phase 1 success criteria:**
- Mean accuracy rating of 3.5 or higher across all zones
- No zone with mean accuracy below 3.0
- No diagnostic question rated "ambiguous" by more than 30% of experts
- Clear convergence on zone sequencing: 80%+ of experts agree the order is correct

---

## 5. Phase 2: Pilot Diagnostics (Months 6-12)

### Objective

Establish construct validity and practical utility: does the diagnostic instrument produce results that are actionable for organizations, correlate with observable team behavior, and are consistent across facilitators?

### Protocol

1. **Pre-diagnostic baseline (Week 1).** Collect baseline metrics per team: AI tool usage rates, delivery metrics (cycle time, defect escape rate), team satisfaction.
2. **Diagnostic administration (Weeks 2-3).** Trained facilitators administer the diagnostic to each team. Record the session with participant consent.
3. **Behavioral observation session (Week 3).** For a subset of pilot teams (at least 2 per organization), conduct a structured behavioral observation: observe the team working under real conditions for a half-day, using a standardized observation protocol that maps observable behaviors to zone proficiencies. This provides convergent validity evidence -- a check on whether the self-reported diagnostic scores align with independently observed behavior. The observation protocol should specify: which behaviors to observe (mapped to each zone's core proficiencies), a time-sampling method (e.g., 5-minute observation intervals), and behavioral anchors corresponding to each scoring level. Observations should be conducted by a researcher who did not facilitate the team's diagnostic to reduce confirmation bias.

**Measurement bias mitigation protocol.** The ACE diagnostic relies on self-reported frequency ratings, which are subject to several known biases that the facilitator and research team should actively mitigate:

- **Social desirability bias** (tendency to report behavior that appears favorable). Mitigation: the facilitator explicitly normalizes low scores during the workshop opening; individual scoring occurs before group discussion to prevent anchoring; the confidentiality structure (team-level reporting only, no individual attribution) reduces the perceived cost of honest low scores. In the validation study, compare self-report scores against behavioral observation and objective artifact data to estimate the magnitude of social desirability effects.
- **Acquiescence bias** (tendency to agree with positively-worded statements). Mitigation: the ACE diagnostic questions are framed as frequency statements (1=Never to 5=Always), not agree/disagree items, which reduces but does not eliminate acquiescence. In the validation study, examine whether any questions show ceiling effects or unusually low variance, which may indicate acquiescence.
- **Common method variance** (inflated correlations because all questions use the same response format and are administered in the same session). Mitigation: the facilitated discussion phase provides a qualitative check on quantitative scores — facilitators probe for behavioral evidence behind high scores. In the validation study, the behavioral observation and artifact audit provide a second method that does not share the self-report format, allowing assessment of common method variance through multi-trait multi-method comparison.
- **Conformity pressure** (tendency for individual scores to converge toward the group norm after discussion). Mitigation: individual scores are collected and locked before group discussion. The diagnostic design deliberately separates individual scoring from group discussion to preserve score independence. In the validation study, analyze whether post-discussion score adjustments (if permitted in re-scoring protocols) systematically reduce variance.
4. **Post-diagnostic debrief (Week 3-4).** Interview team members and leadership about the diagnostic experience. See [Practitioner Interview Guide](/research/practitioner-interview-guide) and [Leadership Interview Guide](/research/leadership-interview-guide).
5. **Roadmap creation (Weeks 4-6).** Develop progression roadmaps based on diagnostic results. Track whether recommendations are perceived as actionable.
6. **6-month follow-up (Month 12).** Re-administer the diagnostic and collect follow-up metrics to assess change.

### Inter-Rater Reliability Study

For at least 4 teams across pilot organizations (expanding to 15-20 teams in Phase 3): two trained facilitators independently administer the diagnostic to the same team within two weeks of each other. Counterbalance the administration order: for half the teams, Facilitator A goes first; for the other half, Facilitator B goes first. This allows the analysis to separate facilitator effects from order effects (carryover/practice effects). Report order effects in the reliability analysis. Compare zone classifications, proficiency ratings, and investment recommendations. Calculate Cohen's kappa for zone classification and intraclass correlation coefficient (ICC) for proficiency ratings.

**Reliability targets:**

| Measure | Target | Acceptable | Unacceptable |
|---------|--------|------------|-------------|
| Zone classification (Cohen's kappa) | >= 0.7 | 0.6-0.7 | < 0.6 |
| Proficiency ratings (ICC) | >= 0.7 | 0.6-0.7 | < 0.6 |
| Investment recommendations (% agreement) | >= 80% | 70-80% | < 70% |

### Revision Triggers

The following findings will trigger revision of the instrument before Phase 3:
- Zone misclassification rate above 20% (diagnostic classification contradicted by independent behavioral observation)
- Inter-rater kappa below 0.6
- Actionability rating below 60% (organizations do not find results actionable)
- Systematic misunderstanding of the same diagnostic questions across multiple sessions

---

## 6. Phase 3: Quantitative Reliability and Longitudinal Outcomes (Months 12-24)

### Objective

Establish predictive validity: do zone classifications, investment recommendations, and progression predictions hold up over time?

### What to Track

For each team at 6-month intervals:
- Zone classification via re-administration of the diagnostic
- Investment completion (which investments were actually made vs. planned)
- Metric changes: AI-augmented development throughput and zone-specific metrics from the Metrics Tree
- Qualitative outcomes via interviews with team leads and organizational sponsors

### Key Analyses

- **Zone stability:** Test-retest reliability at 6-month intervals. Target ICC >= 0.8. A team classified as Zone 2 at baseline should remain Zone 2 at follow-up absent significant organizational change.
- **Investment-outcome correlation:** Spearman's rho between investment completion rate and zone progression.
- **Metric change analysis:** Paired Wilcoxon signed-rank tests comparing baseline to follow-up metrics for each team.
- **Competency prediction accuracy:** Percentage of teams classified as "competent" that demonstrate competent behaviors in direct observation (observing the team work under real deadline pressure).
- **Threshold refinement via ROC analysis:** Identify empirical diagnostic score cutoffs that best predict competent behavior as observed independently. Compare against current thresholds and adjust where they diverge.
- **Variance decomposition analysis:** Evaluate whether the single global SD criterion (Criterion 2) should be replaced with separate between-person and between-question consistency thresholds. Analyze pilot data to determine whether decomposed thresholds provide better diagnostic accuracy than the global SD, using facilitator behavioral observations as the criterion variable.
- **Cluster analysis for zone validation:** Apply clustering methods (k-means, hierarchical, or latent profile analysis) to diagnostic score data to test whether natural groupings correspond to the four-zone model. If the data suggests three or five clusters rather than four, or if cluster boundaries differ from current zone definitions, this informs zone structure revision. This analysis directly addresses RQ1 ("Do the four zones represent meaningfully distinct organizational states?") and follows the approach used by DORA to validate that software delivery performance naturally clusters into distinct groups (Forsgren, Humble, & Kim, 2018).

---

## 7. Sampling Strategy

### Expert Participants (Phase 1)

Recruit through: AI engineering communities, conference speakers in AI development, consulting firm networks, engineering leadership communities.

**Inclusion criteria:** Direct professional experience with AI-augmented software development; willingness to provide critical feedback; no financial stake in the success or failure of this framework.

**Exclusion criteria:** Experts whose work is primarily theoretical rather than practice-based; AI tool vendors with commercial interest in outcomes.

### Pilot Organizations (Phase 2-3)

Target 3-5 pilot organizations selected for diversity:

| Dimension | Target |
|-----------|--------|
| Organization size | 1 small (under 100 engineers), 1 medium (100-500), 1 large (500+) |
| Industry | At least 2 different industries |
| Current AI maturity | At least 1 organization minimal, 1 moderate, 1 advanced |

Within each organization: 2-4 teams for diagnostic assessment. Phase 3 expands to 8-15 organizations, 20-40 teams, drawn from both Phase 2 participants and subsequent consulting engagements.

**Inclusion criteria:** Active software production teams (cross-functional preferred); at least some exposure to AI tools across one or more crafts; organizational leadership willing to participate and share outcome data.

**Exclusion criteria:** Organizations under active acquisition or major reorganization; organizations where AI adoption decisions are frozen due to litigation or regulatory review.

### 7.1 Statistical Power Considerations

The following power considerations inform the sampling targets for each phase. These calculations use conventional parameters: alpha = 0.05, power = 0.80, and the effect sizes specified below.

**Phase 2 Inter-Rater Reliability (Cohen's Kappa):**
To estimate kappa with a usefully narrow 95% confidence interval for a 4-category classification scheme (four zones), standard guidance (Sim & Wright, 2005; Gwet, 2014) recommends a minimum of 30-50 classification units. The planned sample of 4 teams is substantially below this threshold. With 4 teams, the confidence interval around kappa will be very wide (approximately +/- 0.3-0.4), making it impossible to distinguish moderate from excellent agreement.

*Implication:* The Phase 2 inter-rater study with 4 teams should be treated as a preliminary feasibility assessment, not a definitive reliability estimate. Report the point estimate with its confidence interval and interpret cautiously. Phase 3 should expand the inter-rater sample to at least 15-20 teams for a meaningful reliability estimate.

**Phase 3 Longitudinal Correlations (Spearman's rho):**
To detect a moderate correlation (rho = 0.3) between investment completion and zone progression at alpha = 0.05 with 0.80 power, a minimum sample of approximately 85 teams is required (calculated using standard power formulas for correlation tests; see Cohen, 1988, Chapter 3). The planned Phase 3 sample of 20-40 teams is underpowered for detecting moderate correlations.

*Implication:* With 20-40 teams, Phase 3 can detect large correlations (rho >= 0.5) but not moderate ones. This limitation should be stated explicitly in reporting. Organizations should not conclude that investment-outcome relationships are absent if the study fails to find significance; the study may lack the power to detect real but moderate effects.

**Phase 2-3 Internal Consistency (Cronbach's Alpha):**
Alpha estimates are generally stable with samples of 30+ respondents per zone assessment (Ponterotto & Ruckdeschel, 2007). With 2-4 teams of 4-8 members each in Phase 2 (8-32 respondents per zone), alpha estimates will have moderate precision. Phase 3 with 20-40 teams should provide adequate samples for stable alpha estimates.

These power limitations do not invalidate the study design. They constrain what the study can conclude. An underpowered study with honestly reported limitations is far more credible than an underpowered study that does not acknowledge the problem.

### 7.2 Feasibility Assessment

The following feasibility matrix evaluates each planned analysis against the realistic constraints of a consulting-practice validation effort. Analyses that are infeasible at planned sample sizes are flagged with recommended alternatives.

| Analysis | Minimum Sample | Planned Sample | Feasible? | If Not: Alternative |
|----------|---------------|---------------|-----------|---------------------|
| Cohen's kappa (4-zone) | 30-50 teams | Phase 2: 4 teams | No | Treat as preliminary; expand in Phase 3 to 15-20 teams |
| ICC for proficiency ratings | 30+ respondents/zone | Phase 2: 8-32 | Marginal | Combine with Phase 3 for stable estimates |
| Cronbach's alpha per zone | 30+ respondents | Phase 2: 8-32 | Marginal | Report with confidence intervals; stabilize in Phase 3 |
| EFA (4-factor structure) | 5-10 per item (60-150) | Phase 2: 8-32 | No | Defer to Phase 3; use item-total correlations in Phase 2 |
| CFA (confirmatory) | 200+ respondents | Phase 3: 80-320 | Marginal | May require pooling across multiple Phase 3 waves |
| Spearman's rho (moderate r=0.3) | 85 teams | Phase 3: 20-40 | No | Can detect large effects (r>=0.5); report power limitation |
| ROC analysis (threshold) | 50+ classified teams | Phase 3: 20-40 | Marginal | Report preliminary thresholds with wide confidence intervals |
| Cluster analysis (zone validation) | 50-100 cases | Phase 3: 20-40 | Marginal | Use as exploratory; validate with larger sample in follow-up |

**Key feasibility risks and mitigations:**

1. **Organization recruitment is the primary bottleneck.** Consulting-practice validation depends on client willingness to participate. Mitigation: build validation into standard engagement contracts as an opt-in component; offer organizations a validation report as an incentive.

2. **Facilitator availability for inter-rater study.** The inter-rater protocol requires two facilitators per team, doubling facilitation labor. Mitigation: schedule inter-rater pairs strategically during periods of high engagement volume; consider video-based reliability coding as a supplement (where a second rater scores from recorded sessions rather than conducting a separate live session).

3. **Longitudinal attrition.** Organizations that participate in Phase 2 may not be available for Phase 3 follow-up due to leadership changes, budget shifts, or engagement completion. Mitigation: over-recruit by 30% for Phase 2; establish data-sharing agreements early; maintain relationship with organizational sponsors through quarterly check-ins.

4. **Phase 3 sample accumulation timeline.** Reaching 20-40 teams requires sustained engagement volume over 12+ months. If Artium's ACE engagement pipeline produces fewer than 3-4 engagements per quarter, Phase 3 may need to extend beyond 24 months. This should be treated as a realistic possibility, not a failure of the research design.

---

## 8. Data Collection

### What to Collect

- Structured feedback forms from expert reviewers (Phase 1)
- Interview recordings and transcripts, with participant consent (all phases)
- Diagnostic session recordings and facilitator notes (Phase 2-3)
- Pre- and post-diagnostic metric data: cycle time, defect rates, AI tool usage metrics (Phase 2-3)
- Post-diagnostic participant surveys on actionability and experience (Phase 2-3)
- Facilitator logs: time required, clarifications needed, observed participant confusion (Phase 2-3)
- Organizational investment tracking: which investments were committed and which were completed (Phase 3)

### Storage and Confidentiality

All data stored in a secure, access-controlled repository available only to the research team. Individual-level data anonymized before analysis. Organizational data reported in aggregate unless the organization explicitly consents to identification.

Participants are assigned codes (Expert-01, Org-A, Team-A3) used in all analysis documents. The mapping between codes and identities is stored separately from analysis data and accessible only to the principal researcher.

Interview recordings are retained for 24 months after the study concludes, then deleted unless participants consent to extended retention. Transcripts are retained for the period of the research program.

---

## 9. Analysis Plan

### Qualitative Data (Interviews)

Transcripts from all interviews are analyzed using thematic analysis following Braun and Clarke (2006):
1. Familiarization: read all transcripts; note initial observations
2. Initial coding: identify discrete units of meaning
3. Theme development: cluster codes into themes; identify patterns across participants
4. Theme review: test themes against raw data; refine or collapse
5. Theme definition and naming
6. Report writing

For expert interviews specifically: map themes to validity dimensions (accuracy, completeness, sequencing, boundary clarity, threshold meaningfulness, investment accuracy). Where themes contradict current framework content, generate specific revision proposals.

### Quantitative Data (Reliability Statistics)

- Cohen's kappa for zone classification inter-rater agreement (Phase 2)
- Intraclass correlation coefficient (two-way mixed, absolute agreement) for proficiency ratings (Phase 2-3)
- Cronbach's alpha for internal consistency within each zone's diagnostic items (Phase 2-3)
- Exploratory factor analysis (EFA) to test whether diagnostic items within each zone load on a single factor and whether items across zones load on distinct factors (Phase 2-3). Administer all zone questions to all pilot teams (not just the zone-appropriate subset) where feasible. Key questions: (a) How many factors emerge? (b) Do items cluster by zone as expected? (c) Are there cross-loading items suggesting zone boundary problems? Note: Phase 2 sample sizes (8-32 respondents) are marginal for stable factor solutions; treat Phase 2 EFA as exploratory and plan for confirmatory factor analysis (CFA) in Phase 3 when the sample is larger.
- Spearman's rho for investment-outcome correlation (Phase 3)
- Wilcoxon signed-rank test for pre-post metric changes (Phase 3)
- ROC analysis for threshold refinement (Phase 3)

### Mixed-Methods Integration

This study uses a sequential explanatory mixed-methods design (Creswell & Plano Clark, 2018): quantitative results identify patterns and outliers; qualitative data explains them.

**Integration points:**

1. **Phase 1 -> Phase 2 (qualitative informs quantitative):** Expert interview themes (Phase 1) drive instrument revisions before Phase 2 pilot administration. Specific integration: expert feedback on question clarity and zone boundary definitions produces revised diagnostic items.

2. **Phase 2 quantitative -> Phase 2 qualitative:** Quantitative outliers in Phase 2 pilot data (e.g., teams with unexpected zone classifications, questions with low inter-rater agreement) trigger targeted qualitative investigation in post-diagnostic interviews. Specific integration: when a team's facilitator-assigned zone differs from the diagnostic-score-predicted zone, the post-diagnostic interview explores why.

3. **Phase 2 qualitative -> Phase 3 design:** Qualitative themes from practitioner and leadership interviews inform Phase 3 metric selection and longitudinal tracking priorities. Specific integration: if practitioners report that certain investments are more consequential than the framework predicts, Phase 3 tracking is adjusted.

4. **Conflicting findings protocol:** When quantitative and qualitative findings conflict (e.g., a team scores high on the diagnostic but qualitative observation suggests lower capability), both findings are reported with the discrepancy noted. Resolution is sought through additional data collection (follow-up observation or interview) rather than privileging one data type over the other.

### Decision Criteria for Revising the Instrument

| Finding | Response |
|---------|----------|
| CVR below threshold for a proficiency | Remove or substantially revise that proficiency |
| 30%+ of experts flag a question as ambiguous | Rewrite the question; re-review with subset of experts |
| Inter-rater kappa below 0.6 | Identify divergent questions; revise and retest before proceeding to Phase 3 |
| Cronbach's alpha below 0.7 for a zone | Review item-total correlations; remove or revise low-correlating items |
| Zone stability ICC below 0.7 | Investigate causes; revise scoring rubric or zone boundary definitions |
| Actionability rating below 60% | Revise output format and recommendation structure |

---

## 10. Timeline

| Phase | Months | Key Activities | Key Deliverables |
|-------|--------|----------------|-----------------|
| Phase 1 | 1-6 | Expert recruitment, material preparation, independent review, interviews, synthesis | Revised zone definitions, revised diagnostic questionnaire, expert validation report |
| Phase 2 | 6-12 | Pilot organization recruitment, diagnostic facilitations, inter-rater study, post-diagnostic interviews, 6-month follow-up | Pilot results, reliability analysis, revised instrument, pilot study report |
| Phase 3 | 12-24 | Longitudinal metric tracking, 6-month re-diagnostics, threshold refinement, case study development | Longitudinal analysis report, refined scoring thresholds, validated timelines, case studies, final validation report |

The 24-month timeline assumes that expert recruitment (Phase 1) and pilot organization identification (Phase 2) proceed in parallel where possible. Delays in organization recruitment are the most likely source of schedule slippage; build in 4-6 weeks of contingency in Phase 2.

---

## 11. Known Limitations

**This study will not establish the following:**

- **Large-sample statistical validation.** The consulting-grade sample sizes in this study (8-15 organizations, 20-40 teams) are sufficient for inter-rater reliability and moderate effect size detection, but they are not sufficient to claim clinical or educational psychometric standards of validity. ACE is not a clinical instrument; a larger-scale academic validation study would be required to reach that standard.

- **Causal attribution.** Because pilot organizations are not randomly assigned to treatment and control conditions, we cannot establish that following the ACE framework *caused* improved outcomes rather than being correlated with organizational characteristics (like a culture of deliberate practice) that independently predict success. Honest communication about this limitation is required when presenting validation findings.

- **Generalizability across all organization types.** Pilot organizations will be selected from contexts accessible to Artium's consulting network. Organizations in regulated industries with severe AI restrictions, fully remote organizations with distributed team structures, or organizations outside North America and Western Europe may not be well-represented. Framework applicability in those contexts requires additional validation.

- **Zone 4 validity.** Zone 4 (Industrializing) practices are less mature than those in earlier zones. This validation study will not attempt to validate Zone 4 zone descriptions, proficiencies, or investments. A separate validation effort would be required once Zone 4 practices become more widespread.

- **Long-term stability beyond 24 months.** This study tracks outcomes to 24 months. Whether ACE zone classifications remain predictive over longer timeframes, and whether the zone definitions remain relevant as AI tools continue to evolve, is beyond the scope of this study.

### 11.1 Framework Disconfirmation Criteria (Recommended for Phase 3)

A validation plan that can produce revisions but never rejection is not a genuine test of the framework. Before Phase 3 data collection begins, the research team should specify what evidence would indicate fundamental problems with the framework's structure:

- **What would indicate the wrong number of zones?** If cluster analysis consistently produces 3 or 5 natural groupings rather than 4, or if factor analysis shows that items do not load on 4 distinct factors, the four-zone structure should be questioned.

- **What would indicate the sequential ordering is incorrect?** If longitudinal data shows organizations successfully developing Zone 3 capabilities without first establishing Zone 2, the mandatory sequential progression claim should be revised.

- **What would indicate the competency construct is not predictive?** If teams classified as "Exemplary" on the diagnostic do not demonstrate competent behavior under direct observation, the diagnostic instrument's validity is in question.

- **What would the researchers do with disconfirming evidence?** Disconfirming evidence should be published alongside confirming evidence. Framework revision or restructuring based on disconfirming evidence strengthens rather than weakens the framework's credibility.

---

## Related Documentation

- [Literature Review](/research/literature-review) -- Current state of research on AI in software development
- [Expert Interview Guide](/research/expert-interview-guide) -- Questions for expert validation interviews
- [Practitioner Interview Guide](/research/practitioner-interview-guide) -- Questions for software production practitioner interviews
- [Leadership Interview Guide](/research/leadership-interview-guide) -- Questions for engineering leader interviews
