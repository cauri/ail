---
title: "Roadmap: Baseline (Zone 0) to Zone 1 (Augmenting)"
description: "Roadmap template for progressing from Baseline (no AI adoption) to Zone 1 (Augmenting) with tool adoption shift."
section: "roadmaps"
type: "zone-reference"
audience: "facilitator"
order: 1
---
**Transition type:** Tool adoption shift
**Typical duration:** 1-3 months
**Investment level:** Low

This roadmap guides organizations from no meaningful AI usage in software development to habitual individual AI tool adoption across all roles involved in software production. The goal is not that every team member knows about AI tools -- it is that every team member uses AI tools as a natural part of daily work, even under deadline pressure.

---

## Prerequisites

Before beginning this roadmap, confirm:

- [ ] Leadership has decided to invest in AI-augmented development
- [ ] Budget is approved for AI tool licenses (all team members, not just developers)
- [ ] Legal / security review of AI tool usage is complete or in progress
- [ ] There is an identified sponsor (typically CTO or VP Engineering) who will champion adoption

If legal or security review is pending, begin the review process in parallel with Month 1 activities. Do not wait for approval to start training and policy development -- use this time to prepare so that adoption can begin immediately when tools are approved.

---

## Month 1: Foundation

**Theme:** Remove barriers and provide the tools.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **Provision AI tool licenses** | IT / Engineering Manager | Week 1-2 | Purchase and distribute licenses for the selected AI coding assistant (GitHub Copilot, Cursor, Windsurf, or equivalent) to all developers. Also provision general-purpose AI assistant access (Claude, ChatGPT) for PMs, designers, and other team members. |
| **Establish AI usage policy** | CTO / Legal / Security | Week 1-3 | Create a clear, concise policy covering: approved tools, data handling (what can/cannot be shared with AI services), proprietary code guidelines, and acceptable use expectations. The policy should enable usage, not restrict it. Ambiguity kills adoption. |
| **Deliver introductory training** | Facilitator / Senior Developer | Week 2-3 | Conduct 2-3 hour hands-on training sessions covering: tool installation and configuration, basic prompting techniques, when to use inline completion vs. chat-based assistants, and how to review AI-generated code. Small groups (6-10 people) work better than large presentations. |
| **Address fear and stigma** | CTO / Engineering Leadership | Week 1-4 | Hold a leadership-led session explicitly addressing common concerns: "AI will replace my job," "using AI is cheating," "AI code is unreliable." Frame AI as a professional skill to develop, not a threat. Repeat this message in multiple forums -- all-hands, team meetings, 1:1s. |
| **Set up shared learning channel** | Engineering Manager | Week 2 | Create a Slack channel, Teams channel, or similar shared space specifically for AI tips, questions, and discoveries. Seed it with useful prompts, workflow examples, and links to resources. |
| **Identify AI champions** | Engineering Manager | Week 2-3 | Identify 1-2 people per team who are already enthusiastic about AI tools. Include non-engineering roles -- a PM or QA engineer who is enthusiastic about AI can champion adoption for their peers. Champions provide informal peer support, answer questions, and model effective AI usage. This is not a formal role -- just recognition and encouragement. |
| **Role-specific AI tool training for PM, design, and QA** | Facilitator / Role Leads | Week 2-4 | Conduct focused training sessions for non-engineering roles using real work artifacts from each role's software production tasks. PMs practice drafting user stories and synthesizing research with AI. Designers explore AI-assisted design alternatives and prototyping. QA engineers practice test case generation, bug triage, and test data creation with AI. Generic "AI for everyone" training is insufficient -- each role needs hands-on practice with their actual work. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| All team members have active AI tool licenses | End of Week 2 | License count matches team headcount (all roles) |
| AI usage policy published and communicated | End of Week 3 | Policy document exists, was presented in a team meeting, and is accessible to all |
| All team members have completed introductory training (role-specific for PM/design/QA) | End of Week 3 | Training attendance records; follow-up survey confirms tools are installed and configured |
| Shared learning channel is active | End of Week 3 | Channel exists with at least 10 messages in first week |

### Common Obstacles

- **Procurement delays.** Start the procurement process before Month 1 begins. If enterprise procurement takes weeks, use free tiers or trials to begin training while licenses are being processed.
- **Security review blocks.** Engage the security team early. Provide them with vendor security documentation proactively. Offer to run a limited pilot with a small group while the full review proceeds.
- **"I don't have time to learn a new tool."** Leaders must explicitly give permission to spend work time on AI tool learning. Frame it as an investment, not a distraction. Suggest dedicating 30 minutes per day in the first two weeks.
- **Resistance from senior developers.** Senior developers sometimes view AI tools as beneath them or as a threat to their expertise. Engage them as evaluators and critics rather than students -- ask them to assess which AI suggestions are good and which are wrong. This leverages their expertise and builds engagement.

---

## Month 2: Habit Building

**Theme:** Move from "I've tried it" to "I use it every day."

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **"AI Hour" pairing sessions** | AI Champions / Team Leads | Weekly, 1 hour | Weekly sessions where a champion works through a real task with AI tools while the team watches and asks questions. Use actual project work, not contrived examples. Rotate who leads these sessions. |
| **Individual experimentation goals** | Engineering Manager | Ongoing | Ask each developer to try using AI for at least one type of task they have not tried yet this week: writing tests, debugging, documentation, code explanation, refactoring. Track informally, not as a metric. |
| **Prompt library seeding** | AI Champions | Week 5-6 | Collect the 10-15 most useful prompts that team members have discovered. Share them in the learning channel and in a pinned document. This creates a shared knowledge base that lowers the barrier for less confident users. |
| **Mode awareness training** | Facilitator / Senior Developer | Week 5-6 | Conduct a short (1 hour) session on selecting the appropriate AI engagement mode: vibe-coding for prototypes and experiments, CHOP for interactive coding tasks, AI-assisted coding for production work. The goal is that developers choose their mode deliberately rather than defaulting to one approach for everything. |
| **PM/design/QA experimentation goals** | Role Leads | Ongoing | Set role-specific experimentation goals: PMs try AI for story writing, research synthesis, and stakeholder communication on real sprint work. Designers explore AI-assisted design alternatives, prototyping, and content generation. QA engineers experiment with AI-assisted test case generation, bug triage, and test data creation. Frame these as software-production-relevant tasks, not general AI exploration. |
| **Address persistent non-adoption** | Engineering Manager | Week 6-8 | Identify team members who have not adopted AI tools despite access and training. Have 1:1 conversations to understand barriers (fear, skepticism, technical difficulties, workflow mismatch). Address barriers individually rather than applying more group training. |
| **Continue emotional support for adoption** | Engineering Leadership / Managers | Ongoing | The fear and stigma addressed in Month 1 does not resolve in a single session. As team members gain experience with AI tools, new concerns emerge: anxiety about changing skill expectations, frustration with AI limitations, uncertainty about how performance will be evaluated during the transition. Engineering managers should check in individually with team members about how they are experiencing the transition -- not just whether they are using the tools, but how the change feels. In addition, create space for team-level processing: a brief team discussion (15-20 minutes at a retro or dedicated session) where the team collectively reflects on how the transition is going emotionally. Individual check-ins surface individual concerns; team-level processing surfaces shared concerns and normalizes the experience. Frame both as ongoing support, not compliance monitoring. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| 80%+ of team members report using AI tools at least several times per day | End of Month 2 | Anonymous survey or informal poll |
| At least 3 "AI Hour" sessions completed | End of Month 2 | Session log or calendar records |
| Prompt library exists with 10+ entries | End of Month 2 | Document or channel with collected prompts |
| Non-adopters have been individually engaged | End of Month 2 | Engineering manager confirms 1:1 conversations completed |

### Common Obstacles

- **Usage plateaus at "completion only."** Some developers use AI only for code completion and never explore chat-based assistance, debugging help, or documentation. The "AI Hour" sessions and experimentation goals push past this plateau.
- **Quality concerns become avoidance excuses.** "AI code isn't reliable" can become a reason to stop using AI rather than a reason to develop code review skills. Address this by acknowledging the valid concern and teaching effective review rather than accepting avoidance.
- **Champions burn out.** If adoption support falls entirely on 1-2 people, they burn out. Distribute the load. Rotate "AI Hour" leadership. Make it clear that champions are not sole-support for the whole team.

---

## Month 3: Consolidation

**Theme:** Verify that usage is habitual and identify next steps.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **First usage retrospective** | Team Lead / Facilitator | 2 hours | Facilitated team discussion: What is working well with AI tools? What is frustrating? What tasks are best suited for AI? What tasks are not? What would help you use AI more effectively? Capture findings and use them to inform ongoing improvement. |
| **Pressure test observation** | Engineering Manager | Ongoing | During the next deadline, production incident, or high-pressure period, observe whether AI tool usage persists. Do developers still use AI when things are stressful, or do they revert to pre-AI workflows? This is the real competency test. |
| **Competency check (informal diagnostic)** | Facilitator / Engineering Manager | Week 10-12 | Administer a lightweight version of the Zone 1 diagnostic questions. This is not a formal assessment -- it is a check to see whether the team is approaching Zone 1 competency or still developing. Use results to identify remaining gaps. |
| **Plan Zone 2 competency assessment** | Facilitator / CTO | Week 12 | If the competency check shows strong Zone 1 adoption, begin planning for Zone 2 investment. If significant gaps remain, extend the Zone 1 consolidation period by 1-2 months before proceeding. |
| **Update AI usage policy** | CTO / Engineering Leadership | Week 10-12 | Revise the AI usage policy based on 3 months of real experience. Remove restrictions that proved unnecessary. Add guidance where ambiguity caused problems. Make the policy a living document. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| Usage retrospective completed with documented findings | End of Week 10 | Retrospective notes exist and have been shared |
| AI tool usage persists during at least one high-pressure period | End of Month 3 | Manager observation and team self-report |
| Informal competency check shows 70%+ of Zone 1 proficiencies demonstrated | End of Month 3 | Competency check results |
| Decision made: proceed to Zone 2 planning or extend Zone 1 consolidation | End of Month 3 | Decision documented and communicated |

### Common Obstacles

- **"We're using AI, so we're done."** Usage is not the same as competency. The pressure test reveals whether usage is habitual or fragile. Leadership must understand this distinction and support continued investment even after initial adoption looks successful.
- **Regression during pressure.** If AI usage drops during a deadline or incident, do not treat this as a failure. It is a signal that competency is not yet established. Debrief after the pressure period and discuss what would have helped maintain AI usage.
- **Premature Zone 2 ambition.** Some teams will want to jump to Zone 2 before Zone 1 is solid. Resist this. Zone 2 practices depend on Zone 1 habits. Moving forward prematurely produces Zone 2 processes that nobody follows under pressure.

---

## Success Criteria for Zone 1 Competency

The team has achieved Zone 1 competency when:

- [ ] All team members use AI tools daily in their respective software production roles (developers for coding, PMs for specification and research, designers for exploration and prototyping, QA for test generation and analysis)
- [ ] Usage persists during deadline pressure, production incidents, and work in unfamiliar codebases
- [ ] Developers select appropriate modes of AI engagement (vibe-coding, CHOP, AI-assisted) based on task context
- [ ] AI-generated code is reviewed and understood before acceptance, not accepted blindly
- [ ] Product managers, designers, and QA engineers use AI tools for their software production work (not just engineering)
- [ ] The team has an AI usage policy that is understood and followed
- [ ] There is a shared practice of exchanging AI tips and techniques (learning channel, pairing sessions, retrospective discussions)

If all criteria are met, proceed to the [Zone 1 to Zone 2 roadmap](/toolkit/zone-1-to-2).

---

## Leading Indicators

Track these during the roadmap to detect progress or stalls early:

| Indicator | What It Signals | How to Measure |
|---|---|---|
| Daily active AI tool users | Adoption breadth | Tool usage dashboards (most AI tools report this) |
| Learning channel activity | Engagement and peer learning | Message count per week |
| Questions asked in AI pairing sessions | Active learning vs. passive attendance | Session notes |
| Developers who report AI as "essential" | Depth of adoption | Periodic survey |
| AI usage during sprints with deadline pressure | Competency vs. fragile adoption | Manager observation and retrospective discussion |

---

## Related Documentation

- [Zone 1: Augmenting](/toolkit/zone-1-augmenting) -- Full zone reference
- [Zone 1 to Zone 2 Roadmap](/toolkit/zone-1-to-2) -- Next roadmap in the progression
- [Engagement Model](/toolkit/engagement-model) -- How this roadmap fits into the consulting engagement
