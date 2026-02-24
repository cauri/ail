---
title: "Practitioner Interview Guide"
description: "Semi-structured interview guide for software production practitioners across all crafts validating whether ACE zone descriptions match the reality of AI adoption on the ground."
order: 5
---

## 1. Purpose

This guide is for interviews with software production practitioners across all crafts: engineers, tech leads, product managers, designers, QA professionals, and engineering managers who are actively using AI tools in their daily work. These interviews validate the ACE zone definitions from the perspective of people living through AI adoption.

The expert interviews (see [Expert Interview Guide](/research/expert-interview-guide)) assess whether the framework's descriptions are theoretically accurate. These interviews assess whether the framework's descriptions are *recognizable* -- whether practitioners see their actual experience reflected in the zone definitions, or whether the framework describes something that sounds plausible but doesn't match what it's actually like to be on the ground.

The primary goal is zone recognition. When you read a practitioner a zone description, do they say "yes, that's us" or "that's not quite right" or "I've never seen anything like that"? The quality and specificity of their recognition -- or their confusion -- is the data.

---

## 2. Practitioner Recruiting Criteria

Appropriate practitioners meet the following criteria:

- Currently working as a software engineer, tech lead, product manager, designer, QA professional, or engineering manager at an organization that has made at least some investment in AI-augmented software production (even if adoption is uneven)
- Actively using at least one AI tool in their current craft (not just having heard about it) -- this includes coding tools, design tools, research and analysis tools, testing tools, or general-purpose AI applied to their craft
- Willing to discuss their actual practice honestly, including where AI adoption has struggled

**Target range:** Practitioners at different stages of AI adoption, from teams just beginning to experiment with AI tools to teams with well-established AI workflows. Include individual contributors across crafts (engineers, PMs, designers, QA) and people with team-level responsibility (tech leads, engineering managers, design leads). Aim for variety in organization size, industry, and craft representation.

**Exclude:** Practitioners who have never personally used AI tools in their software production work; practitioners whose AI usage is entirely outside software production (e.g., using AI only for email or administrative tasks).

**Estimated prior to interview:** Assess the practitioner's approximate zone level based on a brief pre-screening conversation. This allows you to prepare the appropriate zone description for the Zone Recognition questions. To reduce confirmation bias, interviewers should also read the zone description one level below and one level above their pre-estimate. If you estimate Zone 2, read Zone 1, Zone 2, and Zone 3 descriptions (in that order, spending most time on Zone 2). Record which zone the practitioner most strongly recognizes -- particularly if it differs from your pre-estimate. Disagreement between the interviewer's pre-estimate and the practitioner's self-recognition is a high-value data point that may indicate zone boundary ambiguity.

---

## 3. Interview Introduction

Use this script to open the interview. The key message is that you want their real experience, not a polished version of it.

---

*"Thanks for taking the time. I want to give you a quick sense of what we're doing before we get started.*

*We're developing a framework to help organizations understand where they are in AI adoption and what it takes to go further. Think of it as a map. Our concern is that we've been writing the map from the outside -- based on what we've observed and read -- and maps written from the outside have a way of getting things wrong in ways that only become obvious when you're actually navigating the terrain.*

*So we're interviewing people who are living it. Not experts giving opinions from a distance, but people who are actually using AI tools in their work day to day. We want to know whether what we've written matches what you experience.*

*There are no right or wrong answers here. We're genuinely interested in where the descriptions are off -- where they're too ambitious, too basic, or just don't sound like real life. We're also interested in what we've missed entirely.*

*I'll be recording the conversation with your permission -- it's for our internal research, won't be shared externally, and any quotes we use will be anonymous. Does that work for you?"*

---

## 4. Current Practice Questions

These questions establish the practitioner's actual AI usage before any framework framing. Ask them before any zone descriptions or framework language.

**1. Can you walk me through how you use AI tools in a typical day or a typical task? Be specific -- I want to understand the actual mechanics.**

Probes:
- Which specific tools do you use most? What do you use them for?
- How consistent is that usage -- do you do this every day, or does it depend on the task?
- Are there types of work where you always reach for AI, and types where you never do?
- How does your AI usage change when you're under deadline pressure or in a crunch?

**2. Is AI usage something you do individually, or does your team have shared practices around it?**

Probes:
- Does your team have a shared AI configuration -- something like an AGENTS.md or CLAUDE.md file that's checked into source control?
- Does your team discuss AI practices in retrospectives or planning?
- Is usage consistent across your team, or are some people using AI much more than others?
- Do you have any team agreements about how AI-generated code gets reviewed or tested before it's merged?

**3. What does "habitual" AI use look like in your context? What's the difference between someone on your team who's really using AI well and someone who knows about it but doesn't use it consistently?**

Probes:
- Is there something that separates the people who use AI effectively from those who don't on your team?
- How long did it take you personally to reach the point where reaching for AI felt automatic rather than effortful?
- Are there circumstances where even people who usually use AI well revert to not using it?

**4. What gets in the way of more consistent or more effective AI use on your team?**

Probes:
- Is it a tooling issue, a skill issue, a cultural issue, or an organizational policy issue?
- Are there things your organization does that make AI adoption harder?
- Are there things it does (or could do) that would make it easier?

---

## 5. Zone Recognition Questions

Before this section, briefly describe the zone you estimated for this practitioner based on pre-screening. Read the description in plain language -- no framework jargon, just what the zone says about what a team actually does.

**5. I'm going to read you a short description of a type of team. Tell me whether this sounds like your team, and where it matches or doesn't.**

*[Read the zone summary and core metric for the estimated zone. Keep it to 4-6 sentences -- the summary of behavior, not a full inventory of proficiencies.]*

Probes:
- What resonated most in that description?
- What felt inaccurate or aspirational rather than real?
- Are there aspects of how your team actually works with AI that the description doesn't capture at all?

**6. Now I'm going to read you a description of what a more advanced version of that looks like.**

*[Read the zone summary for Zone N+1.]*

Probes:
- Does any of this describe things your team already does sometimes, even if not consistently?
- What would need to change for your team to reach this level? What's the biggest gap?
- What would the organization need to provide -- not just the team -- for you to get there?

---

## 6. Investment and Obstacle Questions

**7. For the practices your team does practice consistently, which ones are hardest to maintain when things get stressful -- when there's a critical incident, a hard deadline, or a lot of pressure?**

Probes:
- What causes AI practices to get dropped under pressure?
- Are there practices that your team has intentionally maintained as non-negotiable even under pressure? How did they become non-negotiable?
- What's the organizational environment like when AI practices get abandoned versus when they hold?

**8. What has your organization done to support your team's AI adoption? What do you wish they'd done differently?**

Probes:
- Were tool licenses easy to get, or was there friction?
- Was training provided? Was it useful?
- Are there organizational policies that actively help -- or actively hinder -- your AI usage?
- Is there pressure to use AI, or is it left entirely to individual choice? What effect has that had?

---

## 7. Validation-Specific Questions

**9. If a new engineer joined your team tomorrow, how would they learn your team's AI practices? Would it be explicit, or would they mostly pick it up by watching?**

Probes:
- Is there documentation of the team's AI approach, or does it live in people's heads?
- How long does it take someone new to reach the team's normal level of AI competency?
- Has having a shared AI setup (or not having one) affected onboarding in a noticeable way?

**10. Of the practices we've described in those zone summaries, which ring most true -- which felt like an accurate description of what teams actually do? And which felt like they were written by someone who hadn't spent much time in a real engineering team?**

Probes:
- What specifically rang true?
- What felt off? What would a more accurate description look like?
- Are there things that matter in your day-to-day AI usage that didn't show up in either description?

---

## 8. Aspirational Questions

**11. Where do you want to go with AI adoption -- personally and as a team? What would better look like?**

Probes:
- Is there a specific capability or practice you want to develop that you haven't been able to yet?
- What's the one change that would most improve how your team uses AI?
- Is "more AI" the direction, or is the direction "better AI" -- more intentional, more consistent, more effective?

**12. What would need to change -- in your team, in your organization, or in the tools themselves -- for AI to become a more substantial part of how software gets built here?**

Probes:
- Is this a skill problem, a tooling problem, a culture problem, or a leadership problem?
- If you had organizational authority to make one change to accelerate AI adoption on your team, what would it be?
- Are there things that other organizations you know of are doing with AI that you wish your organization was doing?

---

## Closing

*"We're coming up on time. Is there anything about how your team works with AI that we didn't get to -- anything you think would be important for someone building a framework like this to understand?*

*[Let them respond.]*

*Thank you. This is the kind of ground-level perspective that's hard to get from the outside."*

---

## Interviewer Notes

**Focus on recognition, not evaluation.** The practitioner is not evaluating the framework abstractly -- they're recognizing or not recognizing their own experience in it. Watch for the quality of that recognition: a strong "yes, that's exactly it" is different from a polite "I suppose that's somewhat accurate." The former validates the description; the latter is a signal to probe further.

**Don't defend the framework.** If the practitioner says a description doesn't match their experience, your job is to probe for specifics -- not to explain what the framework *really means*. "What would an accurate description look like?" is more useful than "Let me clarify what we meant by that."

**Note organizational context.** Record the practitioner's role, team size, industry, approximate AI adoption level, and any specific constraints they mention (regulatory environment, security requirements, distributed vs. co-located team). These contextual factors help interpret their feedback and may reveal populations for which the framework needs refinement.

**Flag unexpected descriptions.** If the practitioner describes practices that don't fit any zone -- things that seem more or less advanced than the zones they recognized themselves in -- note these carefully. They may represent gaps in the framework or evidence that the zone boundaries need adjustment.

---

## Related Documentation

- [Validation Study Plan](/research/validation-study-plan) -- The complete study protocol; practitioner interviews are Phase 2 of this plan
- [Expert Interview Guide](/research/expert-interview-guide) -- The companion guide for expert researcher interviews
- [Leadership Interview Guide](/research/leadership-interview-guide) -- The companion guide for leadership stakeholder interviews
