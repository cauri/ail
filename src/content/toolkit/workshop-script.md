---
title: "Diagnostic Workshop Facilitation Script"
description: "This is a detailed, ready-to-use script for running an ACE diagnostic workshop."
type: "diagnostic"
audience: "facilitator"
section: "diagnostic"
order: 7
---
This is a detailed, ready-to-use script for running an ACE diagnostic workshop. It is used during both training (as a practice tool in Module 2) and live engagements (as a facilitation reference). Mastering this script during training directly prepares you for practice.

Text in plain format is what the facilitator says or does. *Text in italics is facilitator notes -- internal guidance, not spoken aloud.*

**Duration:** 90-120 minutes depending on number of zones assessed
**Participants:** Full delivery team (developers, PM, designer, QA)
**Materials:** Scoring forms, timer, flip chart or digital display, discussion prompts

---

![VA-7: Diagnosis-Intervention Cycle](/images/diagnosis-intervention-cycle.svg)

## The Facilitator's Core Reasoning Model

Throughout this script, you will see specific facilitation moves for specific situations. These are not a checklist to follow mechanically. They are examples of the **diagnosis-intervention cycle** in action: you observe what is happening, form a hypothesis about what is driving it, choose an intervention, deliver it, and assess whether it shifted the dynamic. When a situation arises that the script does not cover, apply the same cycle. The script teaches you specific moves; the diagnosis-intervention cycle teaches you how to generate new moves when you need them.

Every facilitation decision in this workshop -- how to introduce the zone, how to probe a high-variance item, how to respond to defensiveness, how to frame findings for the team -- is a product of diagnostic reasoning. The troubleshooting section at the end makes this cycle explicit for common problems, but the cycle is operating in every section of the script. As you gain experience, you will spend less time following the script and more time reasoning through the cycle in real time.

---

## Opening (10 minutes)

### Welcome and Framing (5 minutes)

*Set a warm, relaxed tone. This is not a test. Smile. Make eye contact. If remote, turn your camera on and ask others to do the same.*

"Thank you all for making time for this. I know your calendars are full, so I appreciate being here.

Let me start by telling you what this is and what this is not.

**This is a facilitated self-assessment.** You are going to assess your own team's practices around AI-augmented software development. I am here to facilitate the conversation, not to evaluate you. Later in the engagement, when I shift to an interpretive or advisory role, I will name that transition explicitly so you always know what role I am in. There are no right or wrong answers. The only wrong answer is an answer that does not reflect what you actually do.

**This is not an audit.** I am not here to grade you or report back to management on how well you are doing. The results of today's session will produce two reports: a team report that goes to you -- this team -- and a management report that describes organizational patterns across multiple teams without identifying any specific team's scores. Your honest answers stay in this room.

**The goal is shared understanding.** By the end of this session, you will have a clear picture of where your team stands in AI adoption -- not where you think you should be, not where you were on your best day, but where you actually are in your habitual, everyday practices. That shared understanding is the foundation for deciding what to invest in next."

### Ground Rules (3 minutes)

"A few ground rules to make this work:

1. **Honesty over optimism.** When you score yourself, think about the past 2-4 weeks of actual work. Not the training you attended, not the demo you gave, not what you plan to do next sprint. What do you actually do, day in and day out?

2. **No judgment.** There is no shame in low scores. Every team starts somewhere. A low score is not a failure -- it is information that helps you decide where to invest.

3. **The discussion matters more than the scores.** The numbers give us a starting point, but the conversation about why those numbers look the way they do is where the real insights come from. When we discuss, please share your thinking openly.

4. **Speak from your own experience.** When we discuss, use 'I' statements. 'I find that I drop AI tools when...' is more useful than 'the team does not...'

5. **Confidentiality.** Individual scores are not shared outside this room. The team report shows aggregated results. If you have concerns about confidentiality, please raise them now.

Let me be specific about confidentiality. I collect your individual scores before we discuss. Those individual scores are used to calculate the composite scores you will see in the team report. Individual scores are not shared with management -- not in the management report, not in any conversation, not if they ask. The management report describes patterns across the organization without identifying any specific team's results. If you want to see exactly what will be in the management report before it is delivered, I am happy to share a draft. Are there any questions about how your data is handled?"

*Pause. Look around the room. If anyone looks uncomfortable, address it: "Does anyone have questions or concerns before we begin?"*

### Quick Orientation (2 minutes)

"Here is how the next 90 minutes will work:

For each zone we assess, we will follow this pattern:
- I will introduce the zone briefly -- what it is about, what it measures
- You will score yourself individually and silently on a set of questions using a 1 to 5 scale
- We will reveal the scores as a group so we can see the distribution
- We will discuss the results, especially where scores vary a lot

After we finish the zone assessments, we will do a retrospective discussion about what the scores tell us and what the team wants to do about it.

The scale for every question is:
- 1 = Never
- 2 = Rarely
- 3 = Sometimes
- 4 = Often
- 5 = Always

When you see the question, think: 'In the past 2-4 weeks, how often did I or my team actually do this?' Not how often should we, or how often could we. How often did we."

---

## Baseline Screening (5 minutes, if needed)

*Only run this section if the discovery interviews left uncertainty about whether the team has any meaningful AI usage. If discovery clearly established that the team is using AI tools, skip to the zone assessment.*

"Before we dive into the detailed assessment, I want to run three quick screening questions to confirm we are assessing the right zones. These are simple yes/no questions. Just raise your hand or give me a thumbs up if the answer is yes for you."

Read each screening question from the baseline screening document. Tally responses.

*If all three answers are "No" from all participants, stop the assessment. The team is at Zone 0. Transition to a conversation about what organizational investments would enable AI adoption. Do not proceed with zone-specific questions -- they will produce meaningless scores.*

*If at least one answer is "Yes" from at least some participants, proceed with Zone 1 assessment.*

"Great. Based on those responses, we have enough AI usage to make the detailed assessment meaningful. Let us proceed."

---

## Zone Assessment (20-25 minutes per zone)

*Repeat this entire section for each zone being assessed. Most teams assess 2-3 zones. Budget 20-25 minutes per zone.*

### Introduce the Zone (2 minutes)

*Read the zone introduction appropriate to the zone being assessed. Keep it brief -- the goal is to orient the team, not to teach the framework.*

**For Zone 1 (Augmenting):**

"Zone 1 is about individual AI tool adoption across all roles involved in software production -- developers, PMs, designers, QA engineers. The question is simple: do the individuals on this team use AI tools as a habitual part of their daily work? Not occasionally, not experimentally, but habitually. The key test is whether AI tool usage persists when things get hard -- tight deadlines, production issues, unfamiliar code."

**For Zone 2 (Integrating):**

"Zone 2 is about team-level integration. The question shifts from 'do individuals use AI tools' to 'does the team have a shared, systematic way of working with AI.' This means shared AI configuration committed to source control, mandatory quality gates for AI-generated code, externalized plans, and collective ownership of the team's AI workflow. It also means PMs contributing specifications to the shared workflow, designers integrating with the shared AI configuration, and QA adapting testing strategies for AI-generated code patterns. The phrase to remember is 'One Team, One Setup.'"

![VA-19: Role Transition Map](/images/role-transition-map.svg)

**For Zone 3 (Accelerating):**

"Zone 3 is about a fundamental shift across all roles in the production pipeline. Engineers operate as process designers, PMs become behavioral specifiers who define what accuracy and reliability the business can tolerate, designers become design systems architects whose standards are machine-verifiable factory inputs, and QA engineers become evaluation pipeline specialists who design the infrastructure that validates AI output at scale. AI drives the core implementation work, and all roles define their respective inputs to the production pipeline."

**For Zone 4 (Industrializing):**

"Zone 4 describes an AI-first software factory where the organization's core competency is operating the system that produces software, not producing software directly. Engineers maintain the factory, PMs define portfolio-level production targets, designers own the factory's specification layer, and QA operates the evaluation infrastructure. This zone requires sustained executive commitment and represents the deepest level of organizational transformation in the model."

### Individual Scoring (5 minutes, silent)

"Please take 5-7 minutes to score yourself on each of the questions for this zone. Work silently and independently. Do not discuss your answers with your neighbors.

For each question, circle a number from 1 to 5:
- 1 = Never -- this does not happen
- 2 = Rarely -- this happens occasionally but is not a regular practice
- 3 = Sometimes -- this happens about half the time
- 4 = Often -- this is the usual practice but with exceptions
- 5 = Always -- this happens consistently, even under pressure

Remember: think about the past 2-4 weeks. What actually happened, not what you wish had happened."

*Start the timer. Walk around the room (or stay quiet on the call). Do not answer questions about the questions during this phase -- if someone is confused, tell them to answer based on their best understanding and you will clarify during discussion. Interrupting silent scoring breaks concentration and introduces bias.*

*At 4 minutes, give a one-minute warning: "About one minute left."*

*At 5 minutes: "Please finish up your last answer. We are going to move to the group reveal."*

### Group Reveal (3 minutes)

*The goal is to make the distribution visible without putting anyone on the spot.*

**In-person method:** "For each question, I am going to read the question number, and I would like you to hold up your hand showing your score -- 1 through 5 fingers. Ready?"

*Read each question number. Scan the room quickly and record the distribution on your tally sheet. Move briskly. Do not comment on individual scores.*

**Remote method:** "I am going to read each question number, and I would like you to type your score in the chat. Type just the number. Ready?"

*Alternatively, use a polling tool if set up in advance. Record results.*

**Digital tool method:** If using a shared scoring tool, display the aggregated results on screen once all scores are submitted.

*After revealing all questions, display or describe the distribution:*

"Here is what the scores look like for this zone. Let me highlight a few things I notice..."

*Call out:*
- *The core metric score (Question 1) -- what is the distribution?*
- *Any questions with high variance (e.g., some 5s and some 1s)*
- *Any questions where the entire team scored low*
- *Any questions where scores cluster tightly*

*Diagnostic reasoning pause. Before you open the discussion, stop and diagnose. You now have the score distribution in front of you. Ask yourself three questions:*

*1. What is the most important pattern in this data? (High variance on a specific item? Uniform highs that may indicate social desirability? A core metric that is lower than surrounding questions? A role-based split?)*

*2. What hypothesis do I have about what is driving that pattern? (Is the variance because of role differences, access differences, interpretation differences, or genuine behavioral differences?)*

*3. What intervention will test that hypothesis? (Which discussion question will produce the behavioral evidence that confirms or disconfirms my hypothesis?)*

*The sequence below -- high-variance items first, then core metric, then universally low items -- is a default order. If your diagnosis suggests a different starting point, follow your diagnosis. For example, if the core metric is the most striking pattern, start there. If you suspect social desirability bias because all scores are uniformly high, start with a pressure-resilience probe rather than a variance probe.*

### Facilitated Discussion (10-15 minutes)

*This is where the value is. The scores are the conversation starter; the discussion is the insight generator. Use discussion prompts from [Discussion Prompts](/toolkit/discussion-prompts), but also follow the energy in the room.*

*Transparency about scoring observations. When your probing is informed by something you observed during the silent scoring phase -- a hesitation, a glance, someone who finished very quickly or very slowly -- name the pattern when you use it. Example: "I noticed during the scoring that a few people paused on this question for a while before answering. That sometimes means the question was hard to answer clearly. Can anyone who found this question ambiguous share what made it difficult?" This is more transparent than probing without explaining why you chose that question. Name the pattern you observed, not the individual person.*

"Let us talk about what these scores tell us. I want to focus on a few things I noticed."

**Start with high-variance items:**

"On Question [X], some of you scored a 5 and some scored a 1. That is a big spread. Can someone who scored high share what that practice looks like in their daily work? And can someone who scored low share what is getting in the way?"

*Let the conversation develop. Listen for:*
- *Is the variance because of role differences? (PMs vs. developers)*
- *Is it because of tooling access? (some people have licenses, others do not)*
- *Is it because of habit formation? (some people adopted early, others have not started)*
- *Is it because of different interpretations of the question?*

**Then address the core metric:**

"Question 1 is the core metric for this zone -- the single most important indicator of competency. Let us talk about that score. [Read the core metric aloud.] When was the last time you were under real pressure -- a tight deadline, a production incident, an unfamiliar codebase? What happened to your AI tool usage in that moment?"

*Listen for the pressure-resilience signal. If people say "I dropped AI tools and just coded manually," that is a competency gap even if their calm-conditions score was high.*

**Address any universally low items:**

"Question [X] scored low across the board. Let us talk about why. Is this something the team has not tried? Is there a blocker? Is it a policy issue, a tooling issue, or something else?"

*Listen for organizational blockers vs. team-level blockers. Organizational blockers go in the management report. Team-level blockers go in the team report.*

**Wrap the zone discussion:**

"Thank you. Before we move to the next zone, does anyone have a final thought about what these scores are telling us?"

*Capture key themes in your notes. You will need these for the report.*

*Between-zone diagnostic check. Before introducing the next zone, take 30 seconds to update your working diagnosis. Ask yourself:*

*- What did I learn about this team's dynamics during the discussion? (Who speaks freely? Who defers? Who gave evidence easily and who struggled? Did anyone's body language suggest they were withholding?)*

*- How should this inform my facilitation of the next zone? (If one person dominated Zone 1 discussion, I need to actively solicit other voices in Zone 2. If the team produced rich behavioral evidence easily, I can push harder on specificity. If the team was defensive about low scores, I need to re-establish safety before Zone 2 scoring.)*

*- Did anything in the discussion change my hypothesis about where this team likely falls on the next zone? (Discovery suggested they might be Zone 2 Developing, but the discussion revealed they do not have shared AI configuration -- should I adjust my probing strategy?)*

---

## Break (5 minutes, optional)

*If assessing 3 or more zones, or if the workshop is running longer than 60 minutes, take a 5-minute break here.*

"Let us take 5 minutes. Grab coffee, stretch, check your messages. We will start the next zone at [time]."

---

![VA-10a: Uniform High Scores](/images/score-archetype-uniform-high.svg)

![VA-10b: Uniform Low Scores](/images/score-archetype-uniform-low.svg)

![VA-10c: High Average, High Variance](/images/score-archetype-high-variance.svg)

![VA-10d: Bimodal Split](/images/score-archetype-bimodal.svg)

![VA-10e: Single Outlier](/images/score-archetype-single-outlier.svg)

![VA-10f: Gradually Decreasing](/images/score-archetype-decreasing.svg)

## Score Aggregation (5 minutes)

*After all zones have been assessed, do a quick aggregation visible to the team.*

"Let me take a moment to tally the scores so we can see the big picture."

*Calculate and display for each zone:*
- *Core metric: distribution of scores for Question 1*
- *For each question: the composite score (most common response across the team)*
- *Overall zone pattern: does the team meet the competency threshold?*

*Competency threshold reminder (for your reference, do not read this verbatim to the team):*
- *Zone composite average (mean of all question composites) ≥ 4.7*
- *Standard deviation across all individual responses ≤ 0.5*
- *No single question composite below 4.0*

"Here is the summary. For Zone [X], your scores cluster around [describe]. The core metric -- [read it] -- shows [describe distribution]. For Zone [Y], your scores show [describe]."

*Do not declare "you are at Zone X" in harsh terms. Frame it constructively:*

"Based on these scores, your team shows strong habitual practices in [areas] and has clear opportunities to develop in [areas]. This puts you solidly in [zone] with elements of [next zone] emerging."

### Sharing the Pre-Workshop Hypothesis

*Transparency about facilitator expectations. You formed an initial zone hypothesis during Discovery. You withheld it before scoring to avoid anchoring the team's self-assessment. Now that scoring is complete, share it -- the anchoring risk is gone and the divergence between your hypothesis and their scores is diagnostically valuable.*

"Before we move to the retrospective, I want to share something with you. Based on my Discovery interviews and preparation for this workshop, I formed a working hypothesis about where your team might fall. I did not share it before scoring because I did not want it to influence your self-assessment. Now that you have scored independently, here is what I expected: [state hypothesis]. In some areas, your scores match what I expected. In others, they differ -- particularly [name the divergence]. I want to explore those differences together, because the places where my hypothesis and your self-assessment diverge are often where the most important insights are."

### Facilitator Independent Rating

*Complete your own independent rating for each zone question based on the behavioral evidence that surfaced during the facilitated discussion. Use the same 1-5 scale. Record these scores separately from the team's self-assessment scores -- do not adjust the team's scores. Both score sets will appear in the team report: the team's self-assessment scores and the facilitator's evidence-based assessment, with transparent reasoning for any discrepancies. Complete this rating after the workshop concludes, not during it, so that you can focus fully on facilitation during the session.*

---

## Retrospective Discussion (20-30 minutes)

*This is the most important part of the workshop. The scores established the baseline; the retrospective generates the insights that drive action.*

*Retrospective diagnosis. You have now spent 60-90 minutes observing this team discuss their AI practices. You have score data, behavioral evidence from discussion, and observations about team dynamics. Before opening the retrospective, form your overall diagnostic hypothesis:*

*- What is the single most important finding from this workshop? (Not the most interesting score pattern -- the most important thing this team needs to understand about their current state.)*

*- Is that finding something the team has already surfaced, or something they have not yet seen? (If they have surfaced it, the retrospective should deepen it. If they have not, the retrospective should surface it.)*

*- Which of the four retrospective questions below will be most productive for this team, and which can be shortened or skipped? (A team that has already discussed their variance extensively during zone discussions does not need 7 more minutes on "where is the variance and why." A team that has been defensive throughout may need more time on "what surprised us" to build toward honesty before tackling blockers.)*

*The four questions below are the standard retrospective structure. Use all four if the discussion warrants it. But if your diagnosis suggests that one question is the critical one for this team, give it more time and compress the others. The retrospective should be responsive to what happened in the room, not a separate set piece.*

"Now that we have seen the scores, let us step back and talk about what this means for the team. I have four questions I would like us to discuss."

### What Surprised Us? (5-7 minutes)

"Looking at the scores across all the zones we assessed -- was there anything that surprised you? A score higher or lower than you expected? A gap between how you thought the team was doing and what the numbers show?"

*This question surfaces the gap between perception and reality. Common surprises:*
- *"I did not realize the PM was not using AI tools at all"*
- *"I thought everyone was using our AGENTS.md but half the team did not know it existed"*
- *"I expected our scores to be lower -- we are actually doing better than I thought"*

### Where Is the Variance and Why? (5-7 minutes)

"Where did we see the biggest differences in scores between team members? What do you think is driving those differences?"

*This question surfaces structural issues:*
- *Role-based gaps (developers high, PMs low)*
- *Experience-based gaps (senior developers high, juniors low)*
- *Access-based gaps (people with licenses high, people without low)*
- *Interpretation differences (people understood the question differently)*

### What Is Preventing Competency? (5-7 minutes)

"For the areas where scores were low or inconsistent, what is getting in the way? Think about both things the team controls and things the team does not control."

*Capture two categories:*
- *Team-level blockers: things the team can address on its own (e.g., "we have not set up a shared AGENTS.md," "we do not discuss AI practices in retros")*
- *Organizational blockers: things that require organizational investment (e.g., "we do not have enough AI tool licenses," "there is no policy on what data we can share with AI tools," "procurement takes too long")*

*The team-level blockers go in the team report. The organizational blockers go in the management report.*

### What Investments Would Help Most? (5-10 minutes)

"If you could make one or two changes -- at the team level or the organizational level -- that would have the biggest impact on your AI practices, what would they be?"

*This question generates the investment recommendations. Listen for:*
- *Quick wins: low-effort, high-impact changes*
- *Foundational investments: things that enable other improvements*
- *Organizational asks: things the team needs from leadership*

*Write down every suggestion on the board or shared screen so the team can see the full list. Then facilitate a brief prioritization:*

"We have [N] ideas on the board. I want to do a quick prioritization together. Looking at this list, which one or two changes would have the biggest impact on your daily practices? Not the easiest to do -- the most impactful."

*Let the team discuss for 2-3 minutes. Then share your own perspective:*

"Based on what I have heard today and what I learned during Discovery, here is what I think the highest-leverage investments are: [name 2-3]. My reasoning is [explain]. Does that match what you are seeing, or am I missing something?"

*This transparent prioritization produces a report whose recommendations the team has already validated. If your assessment differs from the team's, name the difference and include both perspectives in the report: "The team prioritized X and Y. The facilitator also recommends Z based on [reasoning], which the team [agreed with / had a different view on]."*

---

## Closing (5 minutes)

### What Happens Next (3 minutes)

"Thank you for your honesty and engagement today. Here is what happens next.

Within the next few days, I will prepare two reports based on today's session:

1. **A team report** that comes back to this team. It will include your scores, the themes from our discussion, and specific investment recommendations. This report is yours. It is meant to help you decide what to work on.

2. **A management report** that goes to organizational leadership. That report will describe patterns across teams -- not your specific scores. It will identify organizational investments that would help teams across the organization. Your individual team results are not shared in that report.

After you receive the team report, I recommend scheduling a goal-setting session where the team decides: what zone are we targeting, and what are the first investments we want to make? I can facilitate that session or you can run it yourselves."

### Thank the Team (2 minutes)

"One last thing. The fact that you took time to do this honestly says something important about your team. Self-assessment is not easy. Admitting gaps is not comfortable. But it is the starting point for real improvement. Thank you for your candor."

*If there is a team lead or manager present:*

"And [name], thank you for creating the space for your team to do this."

---

## Facilitator Troubleshooting Guide

*The troubleshooting responses below are all interventions within the diagnosis-intervention cycle: observe a pattern, form a hypothesis about what is driving it, choose a specific intervention, and assess whether it shifts the dynamic. When using these responses, be explicit with yourself about what you are diagnosing and why you chose this particular intervention. If the intervention does not produce the expected shift, update your diagnosis and try a different approach.*

### The team is giving uniformly high scores

*This may indicate social desirability bias -- people scoring what they think they should score rather than what they actually do.*

**Try:** "I notice the scores are quite high across the board. Let me push on this a little. Think about a specific day last week -- maybe a day when you were under pressure or working on something unfamiliar. On that specific day, did you use AI tools for [specific behavior from the question]? If not, what did you do instead?"

**Try:** "A score of 5 means 'Always -- even under deadline pressure, even in unfamiliar code, even when things are going wrong.' Is that really true for everyone here? It is completely fine if it is not."

**Transparency principle:** When you observe a pattern of high scores without corresponding behavioral evidence, name the pattern openly to the group rather than privately noting it for later score adjustment. 'I want to share an observation and check it with you. Several scores on this section are 4 or 5, which would mean this practice happens consistently even under pressure. But when I asked for specific examples, the examples were harder to produce than I would expect for scores at that level. I am not saying the scores are wrong -- I am noticing a gap between the scores and the evidence, and I want to understand it together.' This transparent approach produces better data than private adjustment because the team may offer information that resolves the discrepancy in either direction.

### The team is giving uniformly low scores

*This may indicate a team that is demoralized, that does not value AI adoption, or that has significant organizational blockers.*

**Try:** "I am seeing a lot of 1s and 2s. Help me understand -- is this because the team has not had the opportunity to develop these practices, or because the team has tried and found it difficult?"

**Try:** "Are there specific barriers that are preventing you from doing these things even if you wanted to?"

### Discussion has stalled

*People are not talking. This is common, especially in remote workshops or with teams that have conflict.*

**Try direct invitation:** "[Name], you scored [high/low] on this question. Would you be willing to share what that looks like for you?"

**Try pair discussion:** "Take 2 minutes and turn to the person next to you. Discuss: what is the single biggest thing preventing you from doing [practice] consistently? Then we will share back with the group."

**Try writing first:** "Take 60 seconds to write down one thing that surprised you about the scores. Then we will go around the room and each share what we wrote."

### One person is dominating the conversation

**Try:** "Thank you, [name]. I want to make sure we hear from everyone. [Other name], what is your perspective on this?"

**Try:** "Let us do a quick round-robin. Starting with [name], give me one sentence on where you see the biggest gap."

### The team is defensive or resistant

*Some teams feel like the diagnostic is a judgment on their competence, especially if leadership pushed for it.*

**Acknowledge it:** "I sense some discomfort with this process, and that is completely understandable. Let me be clear: this is not about judging you. Every team starts somewhere. The most successful teams I work with are the ones that are honest about their gaps, because that is the only way to close them."

**Reframe:** "Think of this like a health check-up. The doctor is not judging you for having high blood pressure -- they are giving you information so you can decide what to do about it."

### Someone disagrees with the framework

*A team member may push back on the questions, the scale, or the premise of the diagnostic.*

**Validate and redirect:** "That is a fair point, and I appreciate you raising it. The framework is not perfect -- it is a tool to structure conversation. Even if you disagree with how a question is framed, the conversation it generates is valuable. What about the underlying behavior -- is that something the team does?"

### The team wants to skip straight to solutions

*Some teams want to jump to "what should we do" before understanding where they are.*

**Hold the space:** "I love the energy to improve. We will get to solutions in the retrospective discussion. For now, let us make sure we have an accurate picture of where we are, because the right solution depends on an honest diagnosis."

---

## Time Guide Summary

| Phase | Duration | Notes |
|---|---|---|
| Opening | 10 min | Welcome, ground rules, orientation |
| Baseline Screening | 5 min | Only if needed |
| Zone Assessment (per zone) | 20-25 min | Intro (2), Scoring (5), Reveal (3), Discussion (10-15) |
| Break | 5 min | Optional, recommended after 60 min |
| Score Aggregation | 5 min | Tally and display |
| Retrospective Discussion | 20-30 min | Four key questions |
| Closing | 5 min | Next steps, thanks |

**2 zones assessed:** ~90 minutes total
**3 zones assessed:** ~110-120 minutes total

---

## Related Documentation

Before running this script, complete all items on the [Pre-Workshop Checklist](/toolkit/pre-workshop-checklist), including the Accessibility and Inclusion section. Accessibility accommodations (captioning, extended question review time, written response options) must be arranged before the workshop, not during it.

- [Pre-Workshop Checklist](/toolkit/pre-workshop-checklist) -- Everything to prepare before running this script
- [Discussion Prompts](/toolkit/discussion-prompts) -- Additional probes and facilitation moves for the discussion phases
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to interpret score distributions during aggregation
- [Quick Reference](/toolkit/quick-reference) -- One-page zone and scale reference to keep visible during the workshop
- [Zone 1 Questions](/toolkit/zone-1-questions) -- The Zone 1 diagnostic questions administered during the scoring phase
- [Zone 2 Questions](/toolkit/zone-2-questions) -- The Zone 2 diagnostic questions
- [Zone 3 Questions](/toolkit/zone-3-questions) -- The Zone 3 diagnostic questions
- [Zone 4 Questions](/toolkit/zone-4-questions) -- The Zone 4 diagnostic questions
- [Team Report Template](/toolkit/team-report-template) -- The template used to write the team report after this workshop
- [Management Report Template](/toolkit/management-report-template) -- The template used to write the management report
- [Baseline Screening](/toolkit/baseline-screening) -- The baseline screening questions referenced in Session 2
- [Engagement Model](/toolkit/engagement-model) -- How this workshop fits into the two-track engagement structure
