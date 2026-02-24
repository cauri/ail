---
title: "Discussion Prompts for Diagnostic Workshop"
description: "These prompts are organized by zone and by situation."
section: "diagnostic"
order: 9
---
These prompts are organized by zone and by situation. Use them during the facilitated discussion phase of the diagnostic workshop to dig beneath the scores and surface actionable insights.

Each prompt is designed to generate a specific type of insight: understanding variance, identifying blockers, surfacing organizational issues, or generating investment ideas. Select prompts based on what the scores reveal -- you will not use all of them in a single workshop.

---

## Zone 1 (Augmenting) Discussion Prompts

### Exploring High Variance

1. "Some of you scored a 5 on daily AI tool usage and some scored a 1 or 2. For those who scored high: describe a specific moment last week where AI helped you get something done faster. For those who scored low: what would need to change for you to use these tools regularly?"

2. "Question 4 asks about selecting the right mode of AI engagement -- vibe-coding vs. CHOP vs. rigorous AI-assisted coding. Where do we see the biggest spread? What do you think explains the difference?" *(Follow-up if needed: "Is it about awareness of the modes, access to tools, or something else?")*

3. "Question 6 asks about PM and non-engineering usage. Product managers and designers -- what has your experience been with AI tools for your role-specific work? What is working? What is frustrating? Engineers -- were you surprised by the PM/designer scores?"

### Surfacing the "Why" Behind Low Scores

4. "For those who scored low on the pressure-resilience question (Question 1): think about the last time you were under real deadline pressure. Did your AI tool usage go up, go down, or stay the same? What happened?"

5. "Question 5 asks about reviewing AI-generated code before accepting it. If that scored low, what is happening instead? Are people accepting output without review? Rejecting it without examination? Or not using AI code generation at all?"

6. "Several of you scored low on using AI for tests and documentation (Question 7). What is getting in the way?" *(Follow-up if needed: "Is it about the tools not being helpful for these tasks, time, or something else?")*

### Identifying Blockers

7. "If I could wave a magic wand and remove one barrier to AI tool adoption on this team, what would it be? Think about both practical barriers (licenses, tools, access) and cultural barriers (fear, stigma, uncertainty about what is allowed)."

---

## Zone 2 (Integrating) Discussion Prompts

### Exploring High Variance

1. "Question 2 asks about a shared AI configuration committed to source control. Some of you scored high and some low. Do we actually have an AGENTS.md or CLAUDE.md in our repo? If yes, does everyone know about it? If no, what would it take to create one?"

2. "Question 3 asks about mandatory feedback loops -- AI-generated code must pass compiler, linter, and tests before committing. Some of you scored 5, some lower. What is happening when these checks are not enforced?" *(Follow-up if needed: "What do you think is behind the difference?")*

3. "I see a split on Question 4 about externalized plans. Some engineers guide agents with markdown plans checked into the repo; others work entirely through interactive chat. For those using externalized plans: what difference does it make? For those not using them: what would make you start?"

### Surfacing Team-Level Gaps

4. "The phrase 'One Team, One Setup' means everyone on the team uses the same AI configuration, the same workflow, and the same quality gates. On a scale of 1 to 10, how close is this team to that ideal? What is the biggest gap?"

5. "Question 6 asks whether the team discusses its agentic setup in retrospectives. When was the last time you talked about your AI workflow in a retro? What came out of that conversation? If you have not done this, what has the retro been focused on instead?"

6. "Question 7 asks about PM participation -- product requirements with AI-relevant criteria, PMs in agentic workflow retros. Product managers, do you feel included in the team's AI practices? Engineers, what has your experience been with PM involvement in the team's AI practices?"

### Identifying Organizational vs. Team Blockers

7. "For the items where you scored low: is this something the team could fix on its own in the next two weeks, or does it require something from the organization -- policy, tooling, budget, time allocation? Let us sort the blockers into two buckets: 'team can fix' and 'organization needs to provide.'"

---

## Zone 3 (Accelerating) Discussion Prompts

### Exploring High Variance

1. "Question 1 asks whether engineers operate as process designers -- defining specs and verification criteria while AI implements. Some of you scored high, some low. For those scoring high: what does a typical day look like for you? How much time do you spend writing code vs. writing specifications? For those scoring low: what is holding you back from working this way?"

2. "I see variance on the CAT pipeline question (Question 2). Does the team have any form of automated alignment testing for AI outputs today? If yes, how extensive is it? If no, what would be the first thing you would want to evaluate?"

3. "Question 3 asks about observability -- instrumenting AI interactions with traces, timing, and costs. Some scored high, some low. What is behind the difference?" *(Follow-up if needed: "Is it about tooling, practice, knowledge, or something else?")*

### Surfacing Role Transformation Issues

4. "The Zone 3 'Prime Directive' says: you are no longer writing the code -- you are designing the process by which code is produced. How does that statement land with you? Exciting? Threatening? Irrelevant? Be honest."

5. "For PMs: Question about writing AI behavioral criteria and measurable acceptance criteria. What would user stories look like if they included specifications for AI pipeline behavior? Can you give an example? If this feels abstract, what would help make it concrete?"

6. "Question 6 asks about treating every AI failure as a pipeline design signal. When AI produces bad output today, what happens? Do you fix the output, fix the prompt, or diagnose the failure at a deeper level? What would need to change?"

### Investment Identification

7. "Zone 3 requires significant organizational investment -- new roles, new infrastructure, experimentation budgets. Which of these investments feels most urgent for this team? Which feels furthest away from current reality?"

---

## Zone 4 (Industrializing) Discussion Prompts

### Exploring the Factory Concept

1. "Zone 4 describes an 'AI-first software factory' where engineers maintain the factory and AI produces the software. What is your initial reaction to that concept? Where does it feel achievable, and where does it feel furthest from current reality?"

2. "Question 1 asks about engineers designing and maintaining the AI production pipeline as their primary job function. What percentage of your time today is spent on production pipeline vs. writing application code? What would need to change to shift that ratio?"

3. "Does the organization have any governance processes specifically designed for AI system changes -- as opposed to traditional code review and deployment processes? What would AI-specific governance look like?"

### Assessing Competency

4. "Zone 4 requires factory-scale evaluation -- automated quality gates for every artifact produced by AI. How far is the organization from being able to do this? What are the biggest gaps?"

5. "Given where this team is today, does Zone 4 feel like a relevant strategic target, or does it feel premature? What organizational conditions would need to be in place for Zone 4 to make sense as a destination?"

---

## Generic Prompts (Any Zone)

These prompts work regardless of which zone is being discussed.

### Opening the Discussion

1. "What is the one score on this zone that surprised you the most? Why?"

2. "If a new team member joined tomorrow and observed your team for a week, what would they say about your AI practices? Would their observation match these scores?"

3. "Where is the biggest gap between what the team aspires to do and what the team actually does?"

### Probing Pressure Resilience

4. "Think about the last time things got hard -- a production incident, a missed deadline, a big crunch. What happened to your AI practices in that moment? Did they hold up, or were they the first thing dropped?"

5. "The word 'competency' means behavior that persists under stress. Looking at these scores, which practices are truly competent for this team, and which are 'fair weather' practices that disappear when pressure increases?"

### Understanding Differences

6. "I notice that [role/group] scored differently from [other role/group]. What do you think explains that difference? Is it about access, training, relevance to their work, or something else?"

7. "For the questions where you scored yourself low: is that because you tried it and it did not work, because you have not had the chance to try, or because you do not see the value?"

---

## Prompts for Surfacing Organizational Investments

Use these when you need to identify issues that the team cannot solve on its own -- issues that require organizational action and belong in the management report.

1. "Which of the blockers we have discussed today are within the team's control to fix, and which require action from the organization -- changes to policy, budget, tooling, or structure?"

2. "If leadership asked you: 'What one thing could the organization do to accelerate your AI adoption?' -- what would you say?"

3. "Are there AI practices that other teams in the organization do well that you wish your team could adopt? What prevents you from doing so?"

4. "Is there a policy, approval process, or organizational constraint that slows down your AI tool adoption? What is it, and how does it affect you?"

5. "If the organization invested in shared infrastructure -- AI configuration templates, shared tool licenses, cross-team training -- which of those would make the biggest difference for your team?"

6. "Does the current procurement process for AI tools work for your team, or is it a source of friction? How long does it take to get a new tool approved or a license added?"

---

## Prompts for Defensive or Resistant Teams

Sometimes teams feel the diagnostic is an imposition, a judgment, or a waste of time. These prompts help reframe the conversation.

### When the Team Feels Judged

1. "I want to be clear: there is no expectation for where your scores 'should' be. Every team starts somewhere. The purpose of this is to help you decide where you want to go and what you need to get there. Low scores are not failures -- they are starting points."

2. "Let me ask this differently: forget the scores for a moment. What are you most proud of about how your team works with AI today? What is working well?"

### When the Team Resists the Framework

3. "I hear the skepticism, and it is fair. Let me put the framework aside for a moment. In your experience, what are the biggest challenges your team faces with AI tools right now? Let us start there and see if the framework helps us structure those challenges."

4. "You know your team better than any framework does. If you were designing your own assessment of AI practices, what questions would you ask? Let us compare those to what the framework asks and see where they overlap."

### When the Team Blames External Factors

5. "I hear that a lot of the blockers are organizational -- and many of them probably are. But let us also look at what the team could change on its own, without waiting for organizational action. Is there anything within your control that you have not tried yet?"

6. "Organizational blockers are real, and they will go in the management report. At the same time, I want to make sure we capture what the team can act on independently. Even small changes can build momentum."

### When the Team Wants to Appear Better Than They Are

7. "I appreciate the positive energy. Let me push a little: you have all scored quite high on this zone. If I watched your team work for a full week -- including the stressful days, the days when things break, the days when you are behind -- would I see these scores reflected in what you actually do?"

8. "Think about the newest person on your team. If they followed your team's documented practices exactly -- not the practices of your best engineer, but the documented, shared practices -- would they achieve these scores? Or would they need to figure things out on their own?"

---

## Using These Prompts Effectively

### Selection

Do not use all prompts for a zone. Select 2-3 based on what the scores reveal:
- **High variance on a specific question:** Use the variance prompt for that zone and question
- **Uniformly low scores:** Use the "why" prompts
- **Uniformly high scores (suspicious):** Use the pressure-resilience probes
- **Organizational blockers surfacing:** Switch to the organizational investment prompts

### Timing

- Spend no more than 10-15 minutes on discussion per zone
- If a discussion is generating rich insights, let it run a little longer
- If discussion stalls, switch to a different prompt or move on
- Save the deepest discussion for the retrospective phase

### Capturing Insights

As the facilitator, you must capture:
- Key themes (what patterns emerge across responses?)
- Specific blockers (team-level and organizational, with enough detail to be actionable)
- Investment ideas (what changes does the team suggest?)
- Surprising moments (where did perception differ from reality?)

These notes become the raw material for both the team report and the management report.

---

## Related Documentation

- [Workshop Script](/toolkit/workshop-script) -- The full facilitation script that uses these prompts in context during the discussion phases
- [Pre-Workshop Checklist](/toolkit/pre-workshop-checklist) -- Preparation steps that ensure the discussion phase runs smoothly
- [Zone 1 Questions](/toolkit/zone-1-questions) -- The Zone 1 questions these prompts are designed to probe
- [Zone 2 Questions](/toolkit/zone-2-questions) -- The Zone 2 questions these prompts are designed to probe
- [Zone 3 Questions](/toolkit/zone-3-questions) -- The Zone 3 questions these prompts are designed to probe
- [Zone 4 Questions](/toolkit/zone-4-questions) -- The Zone 4 questions these prompts are designed to probe
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to interpret the score distributions the discussion prompts are responding to
