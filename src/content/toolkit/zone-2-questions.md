---
title: "Zone 2 (Integrating) Diagnostic Questions"
description: "These questions assess whether a team has moved from individual AI tool usage to systematic, team-level AI integration."
type: "diagnostic"
audience: "facilitator"
section: "diagnostic"
order: 2
---
## Purpose

These questions assess whether a team has moved from individual AI tool usage to systematic, team-level AI integration. Zone 2 competency means the team has a shared agentic workflow --- committed to source control, understood by all members, and improved through regular retrospectives. AI is embedded in how the team delivers software, not left to individual initiative. The questions measure team-level behaviors across all roles involved in software production --- engineering, product management, design, and QA --- including shared setup, mandatory quality gates, consistent workflow execution, and collective ownership of the agentic configuration.

## Questions

All questions are answered on a 1-5 frequency scale (see Scale below). Each team member answers individually. Questions measure observable team behavior --- what the team actually does together, not what individuals do alone or what the team aspires to do.

**Core Metric**

1. The team follows its shared agentic workflow (Plan/Code/Verify) for all code changes, using the team's committed AI configuration (AGENTS.md/CLAUDE.md or equivalent), even under deadline pressure or when working on urgent fixes.

**Additional Questions**

2. The team maintains a shared AI configuration that all members co-own. *This question is scored as a composite of two sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **2a.** The team maintains a shared AI configuration (AGENTS.md, CLAUDE.md, or equivalent) committed to source control that encodes project context, coding standards, and workflow instructions.
    - **2b.** All team members contribute to the evolution of the shared AI configuration --- it is not maintained by one person while others consume it.

3. Mandatory feedback loops are enforced: AI-generated code must pass compiler checks, linters, and automated tests before being committed, with no exceptions or workarounds in regular practice.

4. Engineers guide agents through multi-step implementations using externalized plans (markdown files, ADRs, task breakdowns) checked into the repository, rather than relying solely on interactive chat sessions.

5. Code review of AI-generated code occurs at the pull request level with the same rigor applied to human-written code, including attention to the characteristic errors that agents produce.

6. The team discusses and iterates on its agentic setup (AI configuration, feedback loops, workflow practices) in retrospectives, treating the setup as a living system that requires continuous improvement.

7. Product managers write user stories that include AI-relevant behavioral criteria or verification requirements, and participate in retrospectives about the team's agentic workflow alongside engineers.

8. Designers participate in the team's agentic workflow by using the shared AI configuration for design-related tasks --- generating design system documentation, creating accessibility checks, or producing design-to-code specifications --- rather than working with AI tools in isolation from the team's shared setup.

9. The team's quality assurance practices explicitly address AI-generated code. *This question is scored as a composite of three sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **9a.** The team's test strategies explicitly account for characteristic AI error patterns --- e.g., plausible-looking but incorrect logic, hallucinated APIs, inconsistent error handling.
    - **9b.** Regression test suites include coverage for AI-introduced risks that traditional testing might miss.
    - **9c.** QA team members can identify and articulate the specific failure modes that AI-generated code produces, distinct from typical human-authored bugs.

10. When new team members join, they can become productive with the team's agentic workflow within their first week by following the committed AI configuration, documented workflow practices, and onboarding materials --- without requiring extensive oral tradition or tribal knowledge transfer.

## Scale

1 = Never | 2 = Rarely | 3 = Sometimes | 4 = Often | 5 = Always

## Notes for Facilitator

### What to Watch For

- **"One Team, One Setup" is the litmus test.** If different team members use different AI configurations, different prompts, or different workflows, the team has not yet achieved Zone 2 integration. Probe: "If I pulled the repo right now, would I find the team's AI configuration committed? Could a new team member start using the team's AI workflow from what is checked in?"

- **Mandatory means mandatory.** Question 3 asks about enforced feedback loops. If the team has pre-commit hooks but individuals routinely bypass them with `--no-verify` or equivalent, the behavior is not truly mandatory. Ask: "When was the last time someone committed without running the feedback loops? What happened?"

- **Watch for the "hero developer" pattern.** If one engineer maintains the AGENTS.md while others merely consume it, the team has not achieved shared ownership. All members should contribute to evolving the shared configuration.

- **Plan/Code/Verify should be visible in artifacts.** If the team claims to follow Plan/Code/Verify, there should be externalized plans in the repository. Ask to see recent examples. If plans exist only in chat history or in someone's head, the practice is not yet systematic.

### Common Traps

- **Confusing individual excellence with team integration.** A team of individually skilled AI users who each have their own setup is Zone 1, not Zone 2. The defining shift is from "I use AI well" to "we have a shared way of using AI."

- **Treating AGENTS.md as a one-time setup.** If the team's AI configuration was written once and never updated, it is not a living part of the workflow. Look for recent commit history on these files.

- **Excluding PMs from the assessment.** Zone 2 includes product management integration. If PMs are not present or their questions are treated as optional, the assessment is incomplete. PM participation in the agentic workflow is a Zone 2 requirement, not a nice-to-have.

- **Superficial designer integration.** Design integration can be superficial. A designer who has reviewed the AGENTS.md but not contributed design-specific constraints is not yet integrated at Zone 2. Probe whether designers are co-owners of the shared configuration or downstream consumers. Look for design system rules, accessibility requirements, and component specifications encoded in the team's AI configuration as evidence of genuine integration.

- **Overweighting tooling, underweighting practice.** Having sophisticated CI/CD pipelines and automated review tools does not mean the team follows Plan/Code/Verify or reviews AI output rigorously. Tools enable practices; they do not replace them.

- **Confusing context engineering with prompt engineering.** Question 4 asks about externalized plans and context management at the project level. If the team equates "good prompting" with "good context engineering," probe deeper. Context engineering involves managing project-level configuration, session-level context, and repository-level documentation --- not just writing better prompts.

- **Context engineering is not directly probed by a standalone question.** Context engineering (Zone 2 proficiency) is assessed indirectly through Questions 2 (shared configuration), 4 (externalized plans), and 6 (retrospective iteration on the setup). If the facilitator suspects the team has strong prompting skills but weak context engineering practices, probe explicitly: "How do you decide what goes into the agent's context window for a given task? Do you manage session length, use summarization, or start fresh sessions deliberately? Is this a team practice or individual habit?"

- **VTDD / test-first discipline is not directly probed by a standalone question but is a critical Zone 2 practice.** VTDD (Vibe Test-Driven Development) is a key Zone 2 technique, but the diagnostic questions assess it indirectly through Question 3 (mandatory feedback loops including automated tests) and Question 9 (QA practices addressing AI-generated code patterns). **Facilitators should always probe test-first discipline explicitly** during the discussion phase: "Does the team write or stub tests before implementation when working with agents? Do you use VTDD or a similar pattern to catch specification errors before code is generated? When was the last time a test-first approach caught a specification error that would have been missed otherwise?" Evidence of test-first practice is a strong signal of Zone 2 maturity; its absence may indicate the team's verification practices are reactive rather than proactive. Teams that pass mandatory feedback loops (Question 3) but lack test-first discipline have a verification gap that should be noted in the team report and addressed in the progression roadmap.

### Cross-Functional Probe Questions (Pilot)

The scored instrument allocates one question per non-engineering role at Zone 2. This reflects the engineering-weighted evidence base at the framework's current validation stage. Facilitators should supplement scored questions with these probes during the discussion phase and record the quality of evidence produced. Data from these probes will inform whether additional scored questions should be added in future instrument versions.

**These probes are required for valid cross-functional assessment**, not optional enrichment. Without them, the facilitator's assessment of Zone 2 competency reflects primarily engineering adoption and may overstate the team's overall integration maturity.

- **PM as workflow co-owner:** "Beyond writing AI-relevant acceptance criteria (Question 7), how does the PM participate in shaping the team's agentic workflow? Can the PM describe a specific instance where they contributed to or changed the team's AI configuration or workflow practice? If the PM's participation is limited to story writing, what would need to change for them to be a co-owner of the agentic setup?"
- **PM retrospective engagement:** "When the team discusses its agentic setup in retrospectives, does the PM contribute observations from a product perspective — e.g., how AI-generated output quality affects user-facing outcomes, or where specification gaps led to rework? Can you give a recent example?"
- **Designer as configuration co-owner:** "Beyond using the shared AI configuration (Question 8), has the designer contributed design-specific constraints, component specifications, or accessibility requirements to the team's AI configuration? Can you show me where design standards are encoded in the shared setup? If they are not, what prevents it?"
- **Designer integration depth:** "When AI-generated code fails to meet design standards, how does the team find out? Is this discovered during design review, during automated checking, or after deployment? What would a more integrated approach look like?"
- **QA as AI-error specialist:** "Beyond identifying AI error patterns (Question 9), how does QA influence the team's feedback loops? Has QA contributed specific test strategies or regression coverage based on observed AI failure modes? Can you describe a case where QA insight about AI-generated code changed how the team configures or reviews AI output?"

These probes address the concern that Zone 2's 10 scored questions are ~60% engineering-weighted. Questions 7, 8, and 9 assess PM, designer, and QA participation respectively, but each allocates only a single scored item to roles that may require deeper assessment. Data from these probes will inform whether future versions of the diagnostic should include additional scored cross-functional questions.

---

## Related Documentation

- [Zone 1 Questions](/toolkit/zone-1-questions) -- The prerequisite zone questionnaire; Zone 1 competency should be established before Zone 2 assessment
- [Zone 3 Questions](/toolkit/zone-3-questions) -- The next zone questionnaire; administer when Zone 2 scores suggest Zone 3 competency
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to calculate composite scores and determine competency stage from these responses
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Full Zone 2 definition; provides context for interpreting responses and scoring
- [Technique Catalog](/toolkit/technique-catalog) -- Detailed descriptions of Plan/Code/Verify and other Zone 2 techniques referenced in the questions
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script that administers these questions in the workshop context
- [Discussion Prompts](/toolkit/discussion-prompts) -- Zone 2-specific facilitation prompts for the discussion phase
