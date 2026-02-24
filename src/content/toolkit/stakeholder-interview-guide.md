---
title: "Stakeholder Interview Guide — ACE Discovery Phase"
description: "This guide supports the facilitated interviews conducted during Phase 1 (Discovery) of an ACE engagement."
section: "consulting"
order: 3
---
## 1. Purpose and Usage

This guide supports the facilitated interviews conducted during Phase 1 (Discovery) of an ACE engagement. Its purpose is to help you build an accurate, nuanced picture of the organization's context — its current AI usage, development maturity, organizational dynamics, and constraints — before designing the diagnostic approach.

**When to use this guide:** Conduct these interviews during the first 1-2 weeks of Discovery, before completing the Context Analysis Template. Allow 1-3 business days after all interviews conclude before writing the analysis, so patterns can surface.

**How to adapt questions:** The questions below are starting points, not scripts. Adapt language to the organization's size, industry, and technical culture. Skip questions where the answer is already clear. Add follow-ups wherever you hear something unexpected. The goal is understanding, not questionnaire completion.

**Interview logistics:**
- Conduct interviews individually, not in groups. Group settings suppress honest responses, especially when AI usage or policy compliance is involved.
- Record with permission, or take notes immediately after if recording is declined.
- Do not share individual interview responses with the engagement sponsor or other interviewees. Aggregate and anonymize in your synthesis.
- Aim for 3-6 interviews per tier. More is better for larger organizations.

---

## 2. General Interview Principles

**Create psychological safety first.** Before asking anything substantive, explain your role, how the information will be used, and what it will not be used for. Specifically state: "Nothing you tell me will be attributed to you by name in any deliverable. I'm trying to understand the organization's context, not evaluate individual performance."

**Probe for behavior, not aspiration.** People describe the world as they wish it were. When someone says "we use AI a lot," follow up with "can you walk me through what that looked like in the last sprint?" Behavior under normal conditions, and especially behavior under pressure, reveals actual competency — not stated policy or intent.

**Active listening signals:** Pause after answers. Let silence do work. Nod and paraphrase rather than jumping to the next question. Follow the thread when something surprising comes up — unexpected answers are often the most diagnostic.

**Managing defensive reactions about AI:** Some interviewees will be defensive about their current AI usage (or lack of it). Others will over-inflate usage to appear current. Watch for both. Useful responses to defensiveness: "There's no right or wrong answer here — I'm trying to understand where you actually are, not where you should be." If someone is inflating: "That's helpful — can you give me a specific recent example?"

**When you hear contradictions:** Make a note, and probe gently in the same interview or cross-reference with other interviewees. Contradictions between what leaders say and what individual contributors describe are among the most valuable findings in Discovery.

---

## 3. Business Leadership Interview Guide

**Duration:** 45-60 minutes
**Typical interviewees:** CEO, COO, VP Product, VP Engineering (if also business-facing), General Counsel, CISO (if AI policy is a constraint)

**Opening framing:** "I'm trying to understand your business context and what success looks like for you — before we start any assessment. I want to make sure the diagnostic we run is actually useful to your strategy, not just technically accurate."

### Questions

**1. What are the two or three things most likely to determine whether this company succeeds or struggles over the next two years?**

*Listen for:* Whether AI-augmented development appears at all, and how it relates to competitive pressure. Also: what actually matters to this leader, so you can frame the entire engagement in those terms.

**2. How do you currently think about AI in your engineering organization — is it a competitive necessity, an efficiency play, a risk, or something you haven't fully formed a view on yet?**

*Listen for:* The mental model. Leaders who see AI as purely a cost reduction tool will fund different things than those who see it as a competitive differentiator. Also: genuine uncertainty vs. performed confidence.

**3. What have you heard from customers, partners, or board members about AI — either in your product or in how you build software?**

*Listen for:* External pressure signals. Board-level pressure about AI often forces faster adoption timelines. Customer-driven demand for AI features is different from internal efficiency motivation. Both affect the engagement's urgency and scope.

**4. What is your honest assessment of how your engineering teams compare to competitors in terms of how they work — speed, quality, ability to change direction quickly?**

*Listen for:* Whether the leader has genuine visibility into engineering performance, or is working from impressions. Leaders without real data will be harder to anchor with diagnostic findings later. Also: competitive anxiety vs. complacency.

**5. If we found that your teams were significantly behind where they could be with AI-augmented development, what would you be willing to invest to change that — in terms of budget, time, and organizational disruption?**

*Listen for:* Investment appetite. Probe further: "Is that a 'yes in principle' or a 'yes with budget already identified'?" The gap between aspiration and committed budget is one of the most important things to surface in Discovery.

**6. What constraints would make AI adoption harder here than at other companies — things like security requirements, regulatory environment, talent, or culture?**

*Listen for:* Real constraints vs. perceived constraints. Some leaders overestimate constraints as a hedge against being asked to move faster. Others are genuinely operating in regulated environments where constraints are binding.

**7. Is there anything about this organization or this moment that makes the timing of this assessment particularly sensitive?**

*Listen for:* Reorganizations, layoffs, leadership changes, pending acquisitions, or cultural conflicts that would affect how teams engage with the diagnostic. This is a question you may need to ask directly and specifically, because interviewees will not always volunteer it.

**8. What does success look like for you at the end of this engagement?**

*Listen for:* Specific vs. vague success criteria. "We understand where we are" is different from "we have a roadmap with budget attached." Understanding what the sponsor actually wants helps you calibrate the rest of the engagement.

---

## 4. Engineering Leadership Interview Guide

**Duration:** 60-90 minutes
**Typical interviewees:** CTO, VP Engineering, Engineering Directors, Senior Engineering Managers

**Opening framing:** "I want to understand how engineering actually works here — the real picture, not the slides version. The more honest you can be about where things are rough, the more useful the diagnostic will be."

### Questions

**1. Walk me through a recent feature or project — from idea to production. What did that process actually look like?**

*Listen for:* Where friction is, what's manual vs. automated, who is involved at each stage, how long it takes. This gives you a development maturity baseline and surfaces bottlenecks that will affect AI integration. Follow up on anything that sounds unusually smooth or unusually painful.

**2. What AI tools are your teams currently using — officially sanctioned and otherwise?**

*Listen for:* The gap between policy and practice. If the answer is "none officially, but I know people are using Copilot on their personal machines," that is a Zone 1 fragmented signal. Probe: "How do you know? Have you seen it in PRs? Do people talk about it in standups?"

**3. If I asked your engineers directly about their AI usage, what do you think they would tell me — and how confident are you that matches what's actually happening?**

*Listen for:* Self-awareness about visibility gaps. Leaders who say "they'd tell you exactly what I'm telling you" may be overconfident. Leaders who say "honestly, I'm not sure" are being accurate about a real information gap. Both are useful signals.

**4. Do you have team-level standards for AI usage — shared prompts, workflow conventions, AI-specific review practices?**

*Listen for:* Zone 2 indicators. The presence of AGENTS.md, CLAUDE.md, or equivalent shared configuration documents is a strong Zone 2 signal. Shared linting, test requirements on AI-generated code, and peer review practices that explicitly address AI output are also relevant. Absence of these does not mean Zone 1 — it needs further probing.

**5. How mature is your CI/CD pipeline — what typically happens between a developer committing code and that code being in production?**

*Listen for:* Engineering foundations that Zone 2+ requires. Automated testing, linting, and fast feedback loops are prerequisites for integrating AI into the team workflow meaningfully. Teams with fragile or slow pipelines will struggle to move past Zone 1 regardless of AI adoption.

**6. What is your biggest concern about AI in your engineering organization — not the AI industry broadly, but here, with your teams?**

*Listen for:* Real anxieties: code quality degradation, skill atrophy, security vulnerabilities from AI-generated code, team members who feel threatened, compliance issues. These concerns will shape what the diagnostic needs to address and how you frame findings.

**7. Are there regulatory, security, or data-handling requirements that limit which AI tools your teams can use or how they can use them?**

*Listen for:* Binding constraints that will bound the realistic adoption ceiling. HIPAA, SOC 2, FedRAMP, financial services regulations, and export controls all create different constraint profiles. Probe: "Are those requirements formally documented? Have they been reviewed for how they apply to coding-focused AI tools specifically?"

**8. How do your teams generally respond to new tool or process mandates — do they adopt quickly, adapt slowly, or find workarounds?**

*Listen for:* Change absorption capacity. This predicts how quickly Zone 2 interventions (shared tooling, mandated feedback loops) will take hold. Also listen for past adoption failures — if a previous tool rollout went badly, that history will affect this one.

**9. Are there specific teams you're most interested in assessing, or any teams you'd prefer to defer or exclude from the diagnostic?**

*Listen for:* Implicit organizational politics. Leaders sometimes want to protect a struggling team from scrutiny, or showcase a high-performing team. Understanding which teams are sensitive — and why — is critical for designing the diagnostic scope.

**10. What would make this engagement fail from your perspective?**

*Listen for:* Fears about how findings will be used, concerns about disrupting team morale, or skepticism that the diagnostic will produce actionable outputs rather than just observations. These surface constraints you need to address before the diagnostic begins.

**11. Has the organization thought about who is accountable when AI-generated code causes a problem -- a security vulnerability, a bug that affects customers, a compliance issue?**

*Listen for:* Whether accountability for AI-generated output has been considered at all. Most organizations have not thought about this, and surfacing it early establishes the facilitator's credibility and prepares leadership for the accountability discussions that Zone 3+ transitions require.

**12. Have any team members expressed concerns about AI affecting their roles or job security? How has leadership responded to those concerns?**

*Listen for:* Whether leadership is aware of workforce anxiety and how they have handled it. Leadership that is unaware is less concerning than leadership that is aware and has responded with dismissive reassurance ("nobody is losing their job") -- the latter creates trust debt that will surface during the diagnostic.

---

## 4b. Engineering Manager Interview Guide

**Duration:** 45-60 minutes
**Typical interviewees:** Engineering managers, team leads, senior tech leads who manage people -- anyone who is responsible for a team's day-to-day delivery and development, as distinct from directors/VPs who set organizational strategy.

**Opening framing:** "I want to understand what managing a team looks like for you right now, and how you think AI adoption might affect that. You are the person who will be supporting your team through whatever changes come out of this engagement, so your perspective on what that requires is essential."

### Questions

**1. How do you think your role changes if your team adopts more advanced AI development practices -- not just individual tool use, but team-level workflow changes?**

*Listen for:* Whether the manager has thought about how AI adoption affects their management role, not just their team's technical work. Managers who have not considered this are likely to be surprised and potentially resistant when the roadmap affects their responsibilities.

**2. What concerns do you have about managing your team through an AI adoption transition?**

*Listen for:* Concerns about team morale, performance measurement, skill gaps, and their own competence in the new model. These are the concerns that, if unaddressed, will cause managers to unconsciously slow or sabotage the transition.

**3. How does your team respond to significant changes in how they work -- have they been through a major process or tool change recently? What happened?**

*Listen for:* The team's change absorption history from the manager's perspective. Compare this to IC responses and engineering leadership responses for triangulation.

**4. What support would help you succeed in guiding your team through this kind of transition?**

*Listen for:* Concrete needs -- training on the new practices, coaching on having difficult conversations, time allocated for transition support, clarity on how performance will be measured during the transition. These feed directly into the Manager Enablement investment.

**5. How do you currently handle situations where a team member is struggling with a significant change in their role or work expectations?**

*Listen for:* Whether the manager has experience with identity-level change, not just process change. The answer reveals whether this manager will be able to support their team through Zone 2+ transitions or will need significant support themselves.

---

## 5. Individual Contributor Interview Guide

**Duration:** 45-60 minutes
**Typical interviewees:** Senior developers, tech leads, PMs, designers — 3-5 per team being assessed

**Opening framing:** "I want to understand what your actual day-to-day work is like — especially around AI tools. This is not an evaluation. Nothing you tell me gets attributed to you. I'm trying to understand the real picture so that whatever recommendations come out of this are actually useful to people doing the work."

### Questions

**1. Describe a typical day of work for you — what does it look like from morning until you sign off?**

*Listen for:* Where AI tools appear naturally in the description (or don't). If they don't appear at all, that is a data point. Follow up: "At any point in what you just described, are there AI tools involved?"

**2. Which AI tools do you personally use in your work, and how often?**

*Listen for:* Breadth and depth of personal use. "I use Copilot when I remember to turn it on" is different from "I have Copilot running constantly and it's part of how I code." Also: tools people use outside of officially sanctioned ones (personal API keys, ChatGPT in a browser tab, etc.).

**3. Walk me through a recent task where you used an AI tool. What did you actually do — not the general idea, but the specific steps?**

*Listen for:* Actual workflow integration vs. one-off experimentation. Zone 1 individual competency looks like habitual, reflexive AI use integrated into the normal coding loop. Zone 0/1 boundary looks like someone who has tried it and occasionally uses it. Probe for: what happened when the AI output was wrong or incomplete? That response reveals genuine competency.

**4. Does your team talk about AI usage together — in standups, retros, code review, or anywhere else?**

*Listen for:* Team-level integration signals. Absence of shared conversation about AI is a strong Zone 1 (not Zone 2) indicator. Presence of shared conversation — "we debated whether to use Copilot for this kind of code" — suggests Zone 2 movement.

**5. Are there any written guidelines or standards on your team about how to use AI tools?**

*Listen for:* Zone 2 documentation signals. AGENTS.md, CLAUDE.md, or equivalent. If yes, probe: "Do people actually follow them? Did you refer to them recently?" Written standards that no one follows are not Zone 2 indicators.

**6. What do you wish was easier or different about how AI fits into your workflow right now?**

*Listen for:* Where genuine friction is. This often surfaces the most honest picture of current state — people describe the gap between where they are and where they want to be. Also: lack of any answer ("it's fine") sometimes signals low engagement with the question, worth probing.

**7. Is there anything that would make you reluctant to be completely honest in the group diagnostic session — anything about how results will be used, or team dynamics, or anything else?**

*Listen for:* Psychological safety signals. This is the most direct way to surface whether the diagnostic workshops will produce honest self-assessment. Common answers: concern that scores will affect performance reviews, worry that leadership will see individual responses, team dynamics where some members dominate discussions. These must be addressed before the diagnostic.

**8. What is the team's general attitude toward AI tools — enthusiastic, skeptical, divided?**

*Listen for:* Team-level climate. A team divided between AI enthusiasts and skeptics will self-assess differently depending on who speaks up. Probe: "Has that caused any friction? Are there specific people who feel strongly one way or the other?"

**9. How do you feel about the direction AI is taking your profession -- not what you think about it strategically, but how you feel about it personally?**

*Listen for:* Emotional data that attitudinal questions miss. Fear, grief, excitement, and anxiety drive behavior more than strategic assessments. A developer who says "I think AI is great for productivity" but whose voice tightens is telling you something different from their words. This question surfaces the emotional climate that will shape how honestly the team self-assesses.

**10. Is there anything about the shift toward AI-augmented development that feels like a loss to you -- something you value about your current work that might change?**

*Listen for:* Loss signals. Engineers who have spent years building mastery in writing excellent code may experience the shift to "designing the process by which code is produced" as a loss of something that gave their work meaning. This data is critical for understanding resistance patterns and for designing transition support. If multiple ICs describe similar losses, that is diagnostic data for the goal-setting phase.

**11. Does this organization have any policies or guidelines specifically about responsible use of AI -- not just data handling, but things like bias, fairness, or who is accountable for AI-generated output?**

*Listen for:* Whether the organization has thought about responsible AI at all. Absence of policies is a data point for the context analysis. Presence of policies that ICs are unaware of is also a data point (policy-reality gap). If no policies exist, note this for the context analysis as a gap that should be addressed as part of organizational investments.

---

## 6. Synthesis Questions

Use these questions across multiple tiers to triangulate findings and identify contradictions.

| Question | Ask of: | What you are triangulating |
|---|---|---|
| "Is AI usage here widespread and habitual, or more isolated and experimental?" | All three tiers | Actual Zone 1 breadth vs. isolated pockets |
| "Are current AI policies generally followed, or do people work around them?" | Engineering leadership + ICs | Policy compliance gap |
| "How honest do you think teams will be in a group self-assessment?" | Engineering leadership + ICs | Psychological safety |
| "Does leadership have budget committed for AI investment, or is this more aspirational?" | Business leadership + engineering leadership | Investment reality |
| "What happened the last time the organization tried to roll out a new tool or practice?" | Engineering leadership + ICs | Change absorption history |

When answers to the same question diverge significantly across tiers — especially between leadership and ICs — note the divergence explicitly in your Context Analysis. Divergences are often where the most important findings live.

**Documenting conflicting narratives without privileging any tier.** When stakeholder tiers give contradictory accounts of the same situation — for example, leadership describes AI adoption as "well-supported" while ICs describe it as "tolerated but not resourced" — document both narratives with equal weight rather than treating any single tier's account as the authoritative version. Each tier has a legitimate but partial perspective shaped by its position in the organization. Leadership may not see daily friction that ICs experience; ICs may not see strategic constraints that shape leadership decisions. The facilitator's job is to surface the gap between narratives as a finding, not to adjudicate which tier is "right." Present conflicting accounts in the Context Analysis as "Leadership reports X; ICs report Y; the divergence suggests Z" rather than defaulting to one tier's version. This practice is especially important when power dynamics could lead the facilitator to unconsciously privilege the sponsor's or leadership's narrative because they are the engagement's paying client.

---

## 7. Red Flags to Watch For

The following patterns, if observed during Discovery, indicate conditions that will degrade the quality of the diagnostic and must be addressed before the diagnostic phase begins:

**Leadership in the room means teams self-censor.** If engineering managers plan to attend their team's diagnostic workshop, results will skew optimistic. This must be addressed explicitly before the diagnostic.

**"AI theater" — performance of AI adoption without actual usage.** Watch for leadership who speak competently about AI tools but whose ICs have no corresponding experience. This is common where AI has been announced as a priority but implementation support has not followed.

**Policy-reality divergence.** If the organization has an official "no external AI tools" policy but ICs are using Copilot or ChatGPT in shadow IT, this will create a distorted diagnostic unless addressed. ICs will not be honest about actual usage if they believe they could be disciplined for it.

**Engagement sponsor with no engineering authority.** If the person who hired you has business authority but cannot direct engineering decisions, you will produce findings that cannot be acted on. Clarify the decision chain before proceeding.

**Active reorganization or leadership change.** Diagnostic results from a team in the middle of a reorg will not reflect stable behavior. Consider deferring that team's assessment.

**Significant fear about job displacement from AI.** When ICs believe AI assessment is a precursor to layoffs, self-assessment becomes strategic self-defense rather than honest reflection. This requires direct conversation with engineering leadership about how findings will and will not be used — and potentially a public statement before the diagnostic begins.

**Budget is aspiration, not commitment.** Discoveries where business leadership describes investment appetite but cannot name a budget line or decision process are a warning sign. A diagnostic without downstream investment commitment will produce a report that collects dust.

---

## Related Documentation

- [Context Analysis Template](/toolkit/context-analysis-template) -- The working document populated using findings from these interviews
- [Engagement Model](/toolkit/engagement-model) -- How Discovery interviews fit into the overall engagement structure
- [Goal-Setting Framework](/toolkit/goal-setting-framework) -- How discovery findings inform target zone selection in Phase 3
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script for diagnostic workshops conducted after Discovery
- [Module 2: Diagnostic Facilitation](/training/module-2-diagnostic-facilitation) -- Facilitator training that covers interview technique and discovery skills
