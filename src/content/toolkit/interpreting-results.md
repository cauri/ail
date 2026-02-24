---
title: "Interpreting Diagnostic Results: A Tutorial for New Facilitators"
description: "You have just facilitated your first ACE diagnostic workshop."
section: "guides"
order: 3
---
You have just facilitated your first ACE diagnostic workshop. The team filled out the questionnaire, you collected the scores, and now you are staring at a spreadsheet of numbers. The next step is interpretation: turning those numbers into a zone stage assessment, a set of observations, and a narrative the team can act on.

This tutorial walks through that process using a realistic example. By the end, you will be able to look at a raw score table, identify the zone and stage, spot meaningful patterns, and formulate a narrative that is accurate, useful, and honest. You will also practice with a second dataset on your own.

A word on judgment before we begin: interpretation is not purely mechanical. The thresholds in the [scoring thresholds reference](/toolkit/scoring-thresholds) give you a framework, but numbers do not interpret themselves. A team average of 3.8 means something different depending on whether all five members are at 4 or whether one person is at 5 and another is at 1. The goal of this tutorial is to develop the judgment that knows the difference.

---

## The Sample Data

You have just run a Zone 1 diagnostic with a five-person team: four engineers (Alex, Blair, Casey, and Dana) and a product manager (Morgan).

The Zone 1 core metric is Question 1:

> *When working under deadline pressure or in an unfamiliar codebase, team members use AI coding tools as part of their workflow rather than reverting to fully manual approaches.*

Here are the raw scores for all twelve Zone 1 questions:

| Team Member | Q1 (Core) | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Q12 |
|-------------|-----------|----|----|----|----|----|----|----|----|-----|-----|-----|
| Alex        | 5         | 5  | 5  | 4  | 5  | 5  | 5  | 4  | 5  | 5   | 4   | 5   |
| Blair       | 4         | 5  | 4  | 4  | 4  | 5  | 4  | 4  | 4  | 4   | 4   | 4   |
| Casey       | 5         | 4  | 5  | 5  | 4  | 5  | 5  | 5  | 4  | 5   | 5   | 5   |
| Dana        | 3         | 4  | 3  | 3  | 3  | 4  | 3  | 3  | 3  | 3   | 3   | 4   |
| Morgan      | 4         | 4  | 4  | 3  | 5  | 4  | 4  | 4  | 3  | 4   | 4   | 4   |
| **Average** | **4.2**   | **4.4** | **4.2** | **3.8** | **4.2** | **4.6** | **4.2** | **4.0** | **3.8** | **4.2** | **4.0** | **4.4** |

**Notes on this dataset:** Alex and Casey are senior engineers who have been using AI tools for over a year. Blair is mid-level, roughly eight months in. Dana joined the team three months ago from a shop with no AI tool usage. Morgan is the PM who started using ChatGPT for user story writing about six months ago.

---

## Step 1: Identify the Core Metric Score

The first thing to check is always the core metric. In Zone 1, that is Question 1.

**Why the core metric comes first:** Each zone has one question that represents its defining behavior. For Zone 1, that is pressure-resilient AI usage -- not "do you use AI tools" but "do you still use AI tools when things get hard." The core metric is the single most important behavior to examine. If the core metric composite is low, the team is not yet approaching Exemplary regardless of other scores.

**Looking at the data:** The Q1 scores are 5, 4, 5, 3, 4.

What do you see? Alex and Casey are at 5. Blair and Morgan are at 4 -- they use AI tools under pressure often, but not always. Dana is at 3 -- sometimes, but inconsistently.

**Applying the threshold:** For Exemplary, we need all three criteria met: zone composite average ≥ 4.7, standard deviation ≤ 0.5, and no question composite below 4.0. The Q1 composite of 4.2 already shows significant variation (individual scores range from 3 to 5), which will drive up the overall standard deviation. This is a signal worth noting early.

Already, the core metric has told you something important: the team has significant variation in its most critical behavior. Keep reading to see the full picture.

---

## Step 2: Calculate Composite Scores

Now calculate the question-level composites and the overall average.

From the table above, the per-question averages are:

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Q12 | Overall Average |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----------------|
| 4.2 | 4.4 | 4.2 | 3.8 | 4.2 | 4.6 | 4.2 | 4.0 | 3.8 | 4.2 | 4.0 | 4.4 | **4.17** |

The overall average is the mean of all individual responses: sum all 60 scores (5 people × 12 questions), divide by 60.

Let's verify:
- Alex: 5+5+5+4+5+5+5+4+5+5+4+5 = 57
- Blair: 4+5+4+4+4+5+4+4+4+4+4+4 = 50
- Casey: 5+4+5+5+4+5+5+5+4+5+5+5 = 57
- Dana: 3+4+3+3+3+4+3+3+3+3+3+4 = 39
- Morgan: 4+4+4+3+5+4+4+4+3+4+4+4 = 47

Total: 57+50+57+39+47 = 250. Divide by 60 = **4.17**.

An overall average of 4.17 places us in the Established range (4.0--4.9), not Emerging or Developing. The overall average is used to anchor the stage, but remember: we still need to check whether the three Exemplary criteria are met.

---

## Step 3: Identify the Zone Stage

With an overall average of 4.17, the team is in the Established band. Now check whether they meet all three criteria for Exemplary:

**Criterion 1 -- High Composite Average:** The zone composite average must be ≥ 4.7. The average of all question composites is (4.2 + 4.4 + 4.2 + 3.8 + 4.2 + 4.6 + 4.2 + 4.0 + 3.8 + 4.2 + 4.0 + 4.4) / 12 = 4.17. Threshold is 4.7. Criterion 1 is **not met**.

**Criterion 2 -- Response Consistency:** The standard deviation across all individual responses must be ≤ 0.5. With scores ranging from 3 to 5 across team members (Dana's 3s pull the range wide), the SD across all 60 responses is approximately 0.72. Criterion 2 is **not met**.

**Criterion 3 -- No Weak Links:** Every question composite must be ≥ 4.0. Looking at the composites: 4.2, 4.4, 4.2, 3.8, 4.2, 4.6, 4.2, 4.0, 3.8, 4.2, 4.0, 4.4. Q4 and Q9 both have composites of 3.8, which is below 4.0. Criterion 3 is **not met**.

**Stage determination:** Overall average 4.17, none of the three Exemplary criteria met.

The team is **Zone 1, Established**.

*Note: These threshold values are expert-judgment starting points, not empirically validated cutoffs. See the [Evidence Basis](/toolkit/scoring-thresholds#evidence-basis) section of the scoring thresholds document. For scores within +/-0.2 of any threshold boundary, rely more heavily on behavioral evidence from the workshop discussion than on the numeric classification (see the [sensitivity guidance](/toolkit/scoring-thresholds#evidence-basis) in the scoring thresholds document). Your facilitated judgment about the team's actual behavior should take precedence over the numeric classification.*

Not Emerging (average is above 2.9). Not Developing (average is above 3.9). Not Exemplary (criteria not met). Established is the correct call.

---

## Step 4: Look for Patterns

A stage label tells you where the team is. Patterns tell you why and what to do about it. This is where interpretation shifts from calculation to judgment.

**Who is dragging and who is driving?**

Look at Dana's row: 3, 4, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4. Nearly every question is a 3 -- "sometimes." Dana is a Zone 1 team member who is in a different place from the rest of the team. Alex and Casey are at or near competency. Blair and Morgan are solid in the 4-range. Dana is the outlier.

**What does an outlier mean?**

This is important: a single outlier on a team of five tells a very different story than a team where everyone is at 3. If all five members scored 3s, you would have a team with consistent, moderate adoption -- they are practicing the Zone 1 behaviors but not yet habitually. That would be a uniform Developing team.

What you have here is different. Four team members are clearly in the Established range. One member -- Dana -- joined three months ago from a team with no AI tool usage. This pattern almost always has an explanation rooted in onboarding and access, not in resistance or capability. Dana has not had the time or support to build the habits the rest of the team has.

The intervention is targeted: help Dana reach parity, not drag the whole team back to basics. This also means the team's overall stage will improve quickly once Dana does -- the majority of the team is already close to competency.

**Q4 and Q9 are the weakest questions across the team.**

Q4 asks: *"Developers select the appropriate mode of AI engagement for the task at hand -- distinguishing between vibe-coding, CHOP, and AI-assisted coding."* The composite is 3.8, tied for the lowest in the set. Even Alex, who is competent elsewhere, scores a 4 on Q4.

This is a signal that the team uses AI tools habitually but may not be making deliberate mode distinctions. They reach for chat assistants or inline completion, but the explicit framework of "vibe-coding vs. CHOP vs. AI-assisted coding" may not be something the team has internalized.

Q9 (QA AI usage) is also at 3.8. Morgan scores a 3 here -- as a PM, QA-focused AI tools may not be part of their workflow. This is a common pattern on teams without dedicated QA: AI-assisted testing practices develop more slowly than AI-assisted coding. Both Q4 and Q9 are coaching opportunities, not crises -- but they are worth naming in your narrative.

**Q6 is the strongest question across the team.**

Q6 asks about PM and non-engineering AI usage. The composite is 4.6, and Morgan (the PM) scores a 4 on it. The team's Q6 strength is partly because the engineers are scoring 4-5 on a question that is primarily about non-engineering roles. Morgan at 4 means she uses AI for PM work often but not always. That is solid for a PM on a team at this stage.

**Bimodal risk.**

Whenever one member is significantly below the rest, check whether the distribution is bimodal. Here: Alex (57 total), Blair (50), Casey (57), Morgan (47), Dana (39). Dana is notably lower, but it is not a split -- it is a single outlier on a skewed-high team. A true bimodal distribution would look like half the team at 3--4 and half at 1--2. That is not what you have here. What you have is a high-performing team with one member in an earlier stage of adoption.

---

## Step 5: Formulate the Narrative

The numbers tell you where. The narrative tells you why and what to do next. A good facilitator narrative does four things: states the finding accurately, explains the pattern in human terms, points toward a specific next action, and has been tested with the team before being finalized. Before the narrative enters the final report, share it with the team during the report review session. Ask: "Does this accurately describe your situation? Is there anything I have gotten wrong or missed?" A narrative that the team recognizes as accurate is a stronger foundation for action than one the facilitator is confident about but the team has not validated.

Here is a draft narrative for this team:

---

*The team is operating at Zone 1 (Augmenting), Established stage. AI tool adoption is strong across four of five team members, with Alex and Casey demonstrating near-competent behavior and Blair and Morgan showing consistent usage with occasional lapses. The overall pattern is that of a team that has built good habits and is approaching the final stretch of Zone 1.*

*The primary gap is Dana, who joined three months ago and has not yet had the time or structured support to develop the habitual AI tool usage the rest of the team exhibits. Dana's 3-range scores across all Zone 1 questions are consistent with someone building familiarity, not someone resistant to adoption. Targeted onboarding -- pairing sessions with Alex or Casey, explicit permission and encouragement to use AI tools under pressure -- will likely bring Dana up quickly.*

*Across the whole team, Question 4 (mode selection: vibe-coding vs. CHOP vs. AI-assisted coding) and Question 9 (QA AI usage) are the weakest areas, both at 3.8 composite. The team uses AI tools well but may benefit from a brief discussion on deliberate mode selection and on extending AI-assisted practices to testing workflows. These are refinements, not foundational gaps.*

*The team is well-positioned to reach Exemplary within 1--3 months with targeted support for Dana and a light team conversation on mode selection.*

---

Notice what this narrative does not do. It does not say "Dana is behind." It says the team has not had time to onboard Dana into their practices. It does not say "the team fails at Q4." It says that is the weakest area and names it as a coaching opportunity. Language matters. Low scores are not failures; they are information.

---

## Common Interpretation Pitfalls

**Averaging away the outlier.** A team average of 4.2 looks strong. But if that average is 5+5+5+5+1, you do not have a competent team -- you have four competent individuals and one person who has never used an AI tool. Always look at the individual distribution before trusting the average.

**Over-weighting the highest scorer.** Conversely, one enthusiastic AI adopter who rates everything a 5 can inflate the team's average and obscure the reality that most team members are at 3. A single person's competency does not constitute team competency.

**Confusing Zone 1 proficiency with Zone 2 proficiency.** A team with strong Zone 1 scores has not necessarily done any Zone 2 work. Individual AI tool usage and team-level AI integration are genuinely different capabilities. A team of excellent individual AI users with no shared AGENTS.md and no mandatory feedback loops is Zone 1 Exemplary, not Zone 2 anything.

**Assuming high scores mean competency.** Self-reported scores can reflect aspiration as much as behavior. A team that enthusiastically believes they should be using AI tools may rate themselves higher than their actual behavior warrants. When scores seem surprisingly high, probe in discussion: "Can you describe what happened when you had that deployment incident last month -- did you reach for AI tools during that?" Behavioral specificity reveals whether scores reflect habit or intention.

**Treating stage boundaries as precise.** The difference between an average of 3.9 (Developing) and 4.0 (Established) is not meaningful. These are bands, not bright lines. A team at 3.95 average is not categorically different from one at 4.05. Report the stage, but do not suggest that one decimal point of progress is a transformation. Focus on the patterns and the narrative, not the boundary. For near-boundary cases, see the sensitivity guidance in the [Scoring Thresholds](/toolkit/scoring-thresholds#evidence-basis) document, which recommends treating scores within +/-0.2 of any threshold as ambiguous and relying more heavily on behavioral evidence from the workshop discussion.

---

## Practice Exercise

Here is a second Zone 1 dataset for you to interpret. Work through the five steps, then check your answers below.

**Team:** Four engineers (Priya, Sam, Teo, and Wen) and no PM (they are a backend platform team with no dedicated product manager).

| Team Member | Q1 (Core) | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Q12 |
|-------------|-----------|----|----|----|----|----|----|----|----|-----|-----|-----|
| Priya       | 3         | 4  | 3  | 2  | 3  | 2  | 3  | 2  | 3  | 3   | 2   | 3   |
| Sam         | 3         | 3  | 3  | 3  | 3  | 2  | 3  | 2  | 3  | 2   | 2   | 3   |
| Teo         | 4         | 4  | 4  | 3  | 4  | 3  | 4  | 3  | 4  | 3   | 3   | 3   |
| Wen         | 2         | 2  | 2  | 2  | 2  | 1  | 2  | 1  | 2  | 2   | 1   | 2   |
| **Average** | **3.0**   | **3.25** | **3.0** | **2.5** | **3.0** | **2.0** | **3.0** | **2.0** | **3.0** | **2.5** | **2.0** | **2.75** |

*Work through the steps before reading the answers.*

---

**Answers:**

**Step 1 -- Core metric:** Q1 scores are 3, 3, 4, 2. No one is at 5. The composite is 3.0. The team clearly does not meet Exemplary or Established criteria on the core metric.

**Step 2 -- Overall average:** Total all scores: Priya (33) + Sam (32) + Teo (42) + Wen (21) = 128. Divide by 48 responses (4 × 12) = **2.67**.

**Step 3 -- Stage:** Overall average 2.67 places the team in the Emerging band (2.0--2.9). Stage: **Zone 1, Emerging**.

**Step 4 -- Patterns:**
- Q6, Q8, and Q11 are the weakest questions overall (all composite 2.0). Q6 covers PM and non-engineering AI usage; Q8 covers design/UX AI usage; Q11 covers design analysis and evaluation. This team has no PM and no dedicated designer, so low scores on cross-craft questions may reflect role composition rather than resistance. However, AI usage for documentation, commit messages, and other non-code artifacts is worth encouraging.
- Q4 (mode selection) and Q10 (PM product discovery) are also weak: composites of 2.5. The team has not developed deliberate mode distinctions, and PM-focused AI usage is absent (this team has no dedicated PM).
- Wen's scores are the standout: mostly 2s with three 1s (Q6, Q8, and Q11). This is a different pattern from Dana in the first example. Wen is not a newcomer catching up -- with four engineers showing this pattern, it suggests Wen may have significantly less comfort or access than the others. Teo is the relative high performer at 3--4 range.
- This is not a bimodal split: it is a team where everyone is in the 2--4 range, with no one clearly competent. The team is uniformly early-stage.

**Step 5 -- Narrative:** This team is in the early stages of Zone 1 adoption. AI tool usage is present but inconsistent and fragile. Teo is the most advanced adopter; Wen has the most ground to cover. The team does not yet have habitual AI usage under pressure (all Q1 scores are 3 or below). The recommended focus is on building consistent daily habits through reduced barriers, clearer permission to use AI tools in all contexts (including production pressure), and structured practice rather than ad-hoc experimentation. Address Wen's low scores specifically -- there may be an access or confidence barrier worth surfacing directly. The low Q6/Q8/Q11 scores may simply reflect lack of PM and design presence on the team rather than a gap, but AI usage for documentation and commit messages (also covered by Q6--Q7) is worth encouraging. Q12 (onboarding) scores suggest the team has no structured process for bringing new members into AI-assisted workflows.

**Facilitator note on role composition:** This practice exercise features an engineering-only team with no PM or designer. Facilitators should consider how the interpretation would differ if the team had a different role composition. For example: a full cross-functional team (engineers, PM, designer, QA) with these same score patterns would warrant a different narrative -- the low Q6/Q8/Q11 scores would be a genuine gap rather than an artifact of role composition. Conversely, an engineering-only team may show artificially high averages on engineering-focused questions because every respondent works in that domain. When interpreting real diagnostic results, always account for who is on the team and how role composition shapes which questions are most meaningful. A team's role composition does not invalidate the diagnostic, but it does change which patterns are diagnostic signals and which are compositional artifacts.

---

## Related Documentation

- [Facilitator Guide](/toolkit/facilitator-guide) -- Your role and the engagement lifecycle
- [Running Your First Diagnostic](/toolkit/running-your-first-diagnostic) -- Step-by-step workshop tutorial
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- Full threshold definitions and aggregation method
- [Zone 1: Augmenting](/toolkit/zone-1-augmenting) -- Full Zone 1 reference including what each proficiency means
- [Zone 1 Questions](/toolkit/zone-1-questions) -- The question text and facilitator notes
- [Sample Team Report](/toolkit/sample-team-report) -- An example of a completed diagnostic report
