---
title: "Expert Interview Guide"
description: "Semi-structured interview guide for AI-augmented software production practitioners, coaches, and leaders validating the ACE framework's content accuracy and completeness."
order: 3
---

## 1. Purpose and Usage

This guide is for interviews with practitioners who have deep, hands-on experience with AI-augmented software production. These interviews are part of Phase 1 of the ACE validation study. Their purpose is to assess content validity: do the framework's zone descriptions, proficiency lists, and investment recommendations accurately reflect the reality that experienced practitioners observe?

These are not interviews with organizational assessment experts or academic researchers. They are interviews with people who have *lived* in the territory the framework is trying to map. Their job is to tell us where the map is wrong.

**Before each interview:**
- Send the expert the framework materials 5-7 days in advance: zone definitions document, diagnostic questionnaire, scoring rubric
- Ask them to complete the structured feedback form before the interview; the interview will explore their feedback in depth, not replace it
- Confirm duration (60 minutes), recording consent, and confidentiality terms

**During the interview:**
- Work through the question themes below, but follow the expert's lead. If they want to spend 30 minutes on Zone 3, let them.
- Your job is to probe for genuine critique, not confirmation. Be suspicious of easy agreement.
- Take notes on the *substance* of the conversation, not just quotes. Note where the expert hesitates, qualifies, or contradicts themselves -- these are often the richest data points.

**After the interview:**
- Write up a synthesis memo within 48 hours while the conversation is fresh
- Log the expert's specific feedback against each validity dimension in the master tracking sheet

---

## 2. Expert Recruiting Criteria

Appropriate experts for this interview meet *at least two* of the following criteria:

- Currently working as a CTO, VP Engineering, VP Product, Staff/Principal engineer, senior design lead, or senior consultant at an organization that has meaningfully adopted AI-augmented software production (not just licensed tools)
- Has personally led or designed an AI tool adoption program for a software team or organization, covering engineering and/or other crafts
- Has published, spoken, or written substantively about AI's impact on software production workflows (conference talks, blog posts, papers, or books count; vendor marketing does not)
- Has 12+ months of direct, daily experience with agentic AI tools (Claude Code, Cursor agent mode, or equivalent) in production software work
- Has coached or consulted software teams through the transition to AI-augmented workflows

**Exclude:** AI tool vendors and their advocates (conflict of interest); practitioners whose AI experience is primarily with non-software domains; people whose experience is entirely theoretical or research-based without current practice.

**Target composition:** 3-4 AI-augmented software production practitioners (across crafts), 2-3 Agile or engineering coaches, 3-5 engineering and product leaders. Aim for variety in organization size (startup to enterprise), industry, and craft representation.

---

## 3. Interview Introduction

Use this script to open the interview. Adapt the language to match your conversational style, but cover every substantive point.

---

*"Thanks for making time for this. I want to spend a few minutes setting expectations before we get into it.*

*The ACE framework is a consulting tool for helping organizations understand and improve their AI-augmented software production practices -- across engineering, product, design, QA, and other crafts. We've developed it based on practice experience, but it has not been through formal empirical validation. That's what this interview is part of: we're trying to find out what's wrong with it before we use it with clients at scale.*

*I want to be direct about what I'm looking for. I'm not here for a thumbs-up. I'm looking for the places where the framework is inaccurate, incomplete, or misleading -- where the map doesn't match the territory you've lived in. Polite agreement is actually unhelpful to us. Specific critique is what we need.*

*A couple of process notes: I'll be recording this with your permission so I can focus on the conversation rather than notes. The recording is for our internal research use only -- it won't be shared externally. Any feedback you give will be attributed to 'an expert reviewer' in our research documents, not to you by name, unless you explicitly want to be credited.*

*Do you have any questions before we start? And do I have your consent to record?"*

---

## 4. Framework Overview

If the expert has already reviewed the materials thoroughly, skip this section and proceed to questions. If they haven't reviewed thoroughly or want a verbal orientation, use this summary:

---

*"The framework defines four zones of AI-augmented software production competency -- and it covers all crafts involved in producing software, not just engineering:*

*Zone 1, Augmenting: Individual practitioners across all crafts habitually use AI tools in their daily work -- engineers with code generation, product managers with requirements analysis, designers with design exploration, QA with test strategy, and so on. The key word is habitual: not occasional use, not knowing about AI tools, but actually reaching for them by default, even under pressure.*

*Zone 2, Integrating: The team, not just individuals, has adopted AI across crafts. Shared AI configuration in source control. Structured workflows with AI integration. Mandatory feedback loops -- quality checks that run on AI-generated output. One consistent approach across the team.*

*Zone 3, Accelerating: AI drives software production rather than assisting it. Practitioner roles across crafts start to shift -- team members spend most of their time specifying intent, reviewing output, and handling the pieces that require human judgment. Eval pipelines. Observability into AI behavior. This is contextual -- not every organization should pursue Zone 3.*

*Zone 4, Industrializing: AI-first software production at scale. Practices are less mature -- we're still learning what this looks like in established organizations.*

*The diagnostic instrument is a facilitated self-assessment: 9-10 questions per zone on a 1-5 frequency scale. Competency threshold: zone composite average of 4.7 or higher, standard deviation across all individual responses of 0.5 or lower, and no single question composite below 4.0. The idea is that competency is behavioral -- you don't 'achieve' a zone by knowing things, you achieve it by doing those things habitually, including when you're under pressure.*

*That's the structure. You've seen the materials. What jumped out at you?"*

---

## 5. Validation Questions

### Theme A: Zone Boundary Validity

**A1. When you read the four zone descriptions, did you recognize teams or organizations you've worked with at each zone?**

Probes:
- Were there teams that didn't fit neatly into any zone? Where did they fall?
- Were there zones that felt realistic and zones that felt aspirational or invented?
- Did any zone describe a situation you have genuinely never encountered in practice?

**A2. In your experience, does AI adoption follow the sequence Zone 1 through Zone 2 -- or do teams sometimes skip zones, develop capabilities out of order, or follow a different progression?**

Probes:
- Have you seen teams jump from individual tool use directly to role transformation without team integration?
- What would cause a team to regress from a higher zone to a lower one?
- The framework describes all four zones as a single linear progression. Does that match what you observe, or do organizations experience Zone 3 and 4 as qualitatively different decisions?

**A3. The framework uses "competency" to mean habitual behavior under pressure -- not knowledge, not best-day performance. Does that distinction match what you've observed?**

Probes:
- Have you seen teams that know how to use AI effectively but abandon those practices under deadline pressure?
- How would you distinguish a team that knows about Zone 2 practices from one that's actually competent in them?
- Is "competency" the right concept here, or is there a better frame for what the framework is trying to capture?

### Theme B: Proficiency Accuracy

**B1. For the zones you're most familiar with, were the proficiency descriptions accurate? What was missing, or what was described in a way that doesn't match how you've seen it in practice?**

Probes:
- Are the engineering proficiencies realistic?
- Are there proficiencies that sound compelling in theory but don't actually matter in practice?
- Are there observable behaviors that reliably indicate competency at a given zone that the framework doesn't capture?

**B2. Were any of the diagnostic questions ambiguous, misleading, or likely to produce inconsistent answers across different teams?**

Probes:
- Were there questions where two facilitators might interpret the same team's answer differently?
- Were there questions where the "right" answer is obvious -- making it easy for teams to say what they think they should?
- Were there questions that would be difficult for a team to answer honestly in a group setting, because they touch on a sensitive organizational topic?

### Theme C: Investment Accuracy

**C1. For each zone, the framework describes organizational investments required for competency. Are these the right investments? What's missing, and what listed here probably isn't necessary?**

Probes:
- Have you seen organizations reach zone-level competency without one of the listed investments? Which one?
- Have you seen organizations make all the listed investments and still fail to achieve competency? What was missing?
- Are there investments that are technically correct but practically infeasible for most organizations?

**C2. The framework claims that progression requires organizational investment -- it's not just a matter of team effort or individual skill. Does this match your experience?**

Probes:
- What happens when organizations provide tool licenses but no other organizational support?
- What's the most common organizational investment failure you've seen?
- How receptive are organizational leaders to the message that *they* need to change, not just the teams?

### Theme D: Competency Threshold

**D1. The competency threshold requires a zone composite average of 4.7 or higher, a standard deviation across all individual responses of 0.5 or lower, and no single question composite below 4.0. Does this threshold feel meaningful?**

Probes:
- Are the thresholds too high -- would a team that is clearly performing at a zone score below threshold?
- Are the thresholds too low -- could a team that hasn't really achieved competency game its way above threshold?
- Would you suggest different thresholds for any zone in particular?

### Theme E: Missing Elements

**E1. What is the most important thing missing from this framework? If you could add one element -- a zone, a proficiency, an investment, a metric -- what would it be?**

Probes:
- Is there an aspect of AI-augmented development that the framework doesn't address?
- Is there a category of organization or team for which this framework simply doesn't apply?
- Are there emerging practices or trends that the framework should anticipate?

### Theme F: Practical Feasibility

**F1. Would this diagnostic work in the organizations you work with? What would prevent it from working?**

Probes:
- Is the facilitated self-assessment format the right approach for surfacing honest data?
- Are there organizational contexts where teams couldn't answer these questions honestly -- due to fear of evaluation, management pressure, or cultural norms?
- What would need to change about the format or approach for this to work in those contexts?

**F2. If you were advising an organization on AI adoption, would you use this framework -- or a version of it? What would need to change before you'd use it with confidence?**

Probes:
- What are the framework's greatest strengths as a practical consulting tool?
- What are its greatest weaknesses?
- How does it compare to other frameworks or approaches you've seen for assessing AI adoption?

---

## 6. Probing Techniques

Polite, vague agreement from an expert is a signal that you haven't yet reached the genuine critique. Use these techniques to push past it:

**The counter-evidence probe:** "Can you think of a case where [the framework's claim] didn't hold? A team that was clearly Zone 2 but didn't have [listed investment]?"

**The specificity probe:** "You said that feels about right. Can you give me a specific example from your experience that supports that?"

**The strongest objection probe:** "If you were writing a critique of this framework for a practitioner publication, what would you say is its biggest flaw?"

**The devil's advocate probe:** "I'm going to push back on that for a second. Couldn't someone argue that [contrary position]? What would you say to that?"

**The silence technique:** After an answer that feels incomplete, pause and wait. People fill silence, and the additional content is often more candid than the first answer.

**The framework comparison probe:** "You've mentioned other frameworks you've used. Where does this one fall short by comparison?"

Do not use leading questions like "So you agree that Zone 2 is the right target for most organizations?" Neutral phrasing like "What do you think about the idea that Zone 2 should be a minimum target for most organizations?" invites genuine evaluation rather than confirmation.

---

## 7. Closing

*"We're coming up on time. Before I let you go -- is there anything about the framework or about your experience with AI-augmented development that I didn't ask about but should have?*

*[Let them answer.]*

*We'll be synthesizing feedback from several experts and revising the framework based on what we hear. If the changes are substantial -- especially in areas you flagged -- I'd like to send you the revised materials and ask for a 30-minute follow-up to make sure we addressed your concerns. Would you be open to that?*

*[Confirm.]*

*Thank you for your time and your candor. This is exactly the kind of feedback that makes the difference between a framework that's well-intentioned and one that actually works."*

---

## 8. Analysis Notes

When synthesizing expert feedback, look for the following:

**Convergent critique:** When multiple experts independently raise the same concern, it is a high-confidence signal that the framework needs revision. One expert's skepticism about Zone 3 may reflect their personal experience; three experts' skepticism is a pattern.

**Zone boundary disagreement:** Pay special attention to whether experts can cleanly distinguish adjacent zones. If experts consistently describe "Zone 1.5" organizations that fit between zones, the zone boundary may need adjustment.

**Investment necessity vs. sufficiency:** Distinguish between experts who say an investment is *unnecessary* (teams reach competency without it) versus *insufficient* (teams make the investment and still don't reach competency). Both are important but require different responses.

**Diagnostic question concerns:** Track every question flagged as ambiguous, leading, or difficult to answer honestly. If any single question is flagged by more than 2 experts, it requires revision before Phase 2.

**Absence of critique as a concern:** If an expert reviews all the materials and finds nothing significant to criticize, probe harder. Either the framework is remarkably accurate, or the expert is being polite. Ask directly: "If you had to pick something that felt slightly off, what would it be?"

**Disagreement intensity:** When recording expert critique, note the intensity of the disagreement as well as its content. Use a simple three-point scale: mild (the expert qualifies or hedges), moderate (the expert states a clear concern with specific evidence), strong (the expert expresses fundamental disagreement with the construct or its operationalization). Intensity ratings help prioritize revisions when multiple concerns compete for attention.

---

## Related Documentation

- [Validation Study Plan](/research/validation-study-plan) -- The complete study protocol; expert interviews are Phase 1 of this plan
- [Literature Review](/research/literature-review) -- The research base that informed the zone definitions experts are being asked to validate
- [Practitioner Interview Guide](/research/practitioner-interview-guide) -- The companion guide for interviews with development practitioners
