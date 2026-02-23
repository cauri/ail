---
title: "Roadmap: Zone 1 (Augmenting) to Zone 2 (Integrating)"
description: "Roadmap template for progressing from Zone 1 (Augmenting) to Zone 2 (Integrating) with a workflow integration shift."
section: "roadmaps"
order: 2
---
**Transition type:** Workflow integration shift
**Typical duration:** 3-6 months
**Investment level:** Moderate

This roadmap guides teams from individual AI tool adoption (Zone 1) to systematic team-level AI integration (Zone 2). The fundamental shift is from "I use AI in my work" to "our team's processes incorporate AI." This requires changes to how the team collaborates, shares configuration, enforces quality, and continuously improves their AI practices.

> **For teams with embedded Artisans:** When an Artisan team is working alongside the client team during Collaborative Delivery, the activities below are performed collaboratively. Artisans introduce practices through pair programming and shared work rather than training sessions. Activity owners marked with "Tech Lead" or "Engineering Manager" may be jointly owned with the corresponding Artisan (e.g., "Artisan Engineer / Tech Lead"). The Artisan team's role is to demonstrate and mentor through the work; the client team owns the practices long-term.

---

## Prerequisites

Before beginning this roadmap, confirm:

- [ ] The team demonstrates Zone 1 competency: all members use AI tools habitually, including under pressure
- [ ] AI tool licenses are provisioned for all team members
- [ ] The organization has a clear AI usage policy
- [ ] There is leadership commitment to allocate protected time (10-20% of sprint capacity) for building shared AI practices
- [ ] The team has a regular retrospective practice (even if AI is not yet the topic)

**Critical prerequisite:** If Zone 1 habits are fragile -- if team members revert to pre-AI workflows under deadline pressure -- strengthen Zone 1 competency before beginning Zone 2 investment. Zone 2 practices built on a weak Zone 1 foundation will not be durable.

---

## Month 1-2: Establish Shared Foundation

**Theme:** Move from individual setups to a single shared team AI configuration.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **Create initial AGENTS.md / CLAUDE.md** | Artisan Engineer / Tech Lead + Team | Week 1-2 | The team collectively creates their shared AI configuration file and commits it to the repository. This file encodes: project context, coding standards, architectural constraints, workflow instructions, and team conventions. Start with what the team already knows -- this document evolves over time. |
| **Standardize AI tool stack** | Tech Lead / Engineering Manager | Week 1-2 | Reach team agreement on the primary AI tools: which coding assistant, which chat tool, which model, which IDE integration. Standardization does not mean banning alternatives -- it means establishing a shared default that everyone knows and uses. |
| **Introduce Plan/Code/Verify workflow** | Artisan Engineer / Tech Lead | Week 2-3 | Deliver hands-on training on the three-phase agentic coding workflow. Use a real feature or task from the team's backlog as the training exercise. Every team member should complete at least one full Plan/Code/Verify cycle during training. |
| **Set up mandatory feedback loops** | Tech Lead / DevOps | Week 3-4 | Configure pre-commit hooks or CI pipeline gates that require code to pass compiler checks, linter rules, and automated tests before commit. This is non-negotiable infrastructure. The goal is that agents cannot produce committed code that fails basic quality checks. |
| **Establish context engineering basics** | Artisan Engineer / Tech Lead | Week 4-6 | Train the team on context management: when to start fresh sessions, how to use /compact or summarization, when to use subagents, and how to structure externalized plans so agents can consume them. |
| **PM onboarding to shared workflow** | Product Manager + Tech Lead | Week 3-5 | PMs learn how Plan/Code/Verify applies to their specification artifacts. PMs begin writing user stories that include AI-relevant behavioral criteria, participate in discussions about the shared configuration, and learn how their specifications feed into the team's agentic workflow. Early PM integration prevents the common pattern of PM engagement lagging behind engineering. |
| **Designer integration with shared AI configuration** | Designer + Tech Lead | Week 4-6 | Designers begin using the shared AI configuration for design-adjacent tasks: generating design system documentation, creating accessibility check prompts, producing design-to-code specifications. Designers contribute design context to AGENTS.md so that AI-generated code aligns with design standards. |
| **First externalized plan exercise** | Artisan Engineer + Team (paired exercises) | Week 4-6 | Each team member completes a feature using an externalized plan: write the plan to a markdown file in the repo, use it to guide agent implementation, then verify the result. Review plans as a team to establish shared expectations for plan quality. |
| **Begin "One Team, One Setup" transition** | Tech Lead + Team | Week 5-8 | Migrate personal AI configurations, prompt libraries, and individual tool settings into the shared repository configuration. Team members who have developed effective personal setups contribute their best practices to the shared configuration. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| AGENTS.md / CLAUDE.md committed to repository | End of Week 2 | File exists in repo with meaningful content |
| All team members trained on Plan/Code/Verify | End of Week 3 | Training completed; each member has done at least one exercise |
| Mandatory feedback loops operational | End of Week 4 | Pre-commit hooks or CI gates are running; failing code is rejected automatically |
| Each team member has completed at least one externalized plan exercise | End of Week 6 | Plan files in repo, associated PRs completed |
| Personal AI configurations migrated to shared setup | End of Week 8 | Team members report using shared configuration as default |

### Common Obstacles

- **"My personal setup works better."** Some developers will resist shared configuration because their individual setup is effective. Acknowledge this -- their practices may indeed be better. The goal is to incorporate the best individual practices into the shared setup, not to impose mediocrity. Frame it as "contributing your expertise to the team" rather than "giving up your tools."
- **Plan/Code/Verify feels slow at first.** The structured workflow adds overhead compared to ad-hoc AI usage. This overhead decreases as the workflow becomes habitual. Remind the team that the goal is consistent quality, not maximum speed -- and that consistency ultimately produces faster delivery because there are fewer rework cycles.
- **Feedback loops catch too much / too little.** Initial feedback loop configuration needs tuning. If hooks are too strict, developers disable them. If too lenient, they provide no value. Plan for 2-3 iterations of feedback loop configuration in the first month.

---

## Month 2-4: Deepen Practices

**Theme:** Make the shared workflow habitual through repeated use and iterative improvement.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **Mandatory Plan/Code/Verify for all changes** | Tech Lead / Team Agreement | Ongoing | The team agrees that all non-trivial changes follow Plan/Code/Verify. Define "non-trivial" together (e.g., anything that changes more than a few lines of logic). This is a team commitment, not a management mandate. |
| **Weekly agentic setup retrospective** | Team | 30 min weekly | Add a standing agenda item to weekly retrospectives: "What should change in our AI setup?" Review AGENTS.md, feedback loops, tool configuration, and workflow practices. Make at least one improvement per retrospective. |
| **AI-aware code review practices** | Team | Week 8-10 | Establish team norms for reviewing AI-generated code: What patterns do agents characteristically get wrong? What should reviewers pay extra attention to? Should reviewers use fresh AI sessions for review? Document these norms in the shared configuration. |
| **Fresh-session PR review practice** | Team | Week 10-12 | Train and practice using fresh AI sessions for PR review. Start a new agent session with no context about the implementation, provide only the diff and project context, and get an independent assessment. Compare AI review with human review to calibrate. |
| **Introduce Vibe TDD (VTDD)** | Tech Lead / Senior Developer | Week 10-14 | Train the team on VTDD: agent stubs tests based on requirements, human reviews stubs for intent misunderstandings, then tests are collaboratively generated. Practice on 2-3 real features before expecting habitual use. |
| **Build first team skills/commands** | Tech Lead + Team | Week 12-14 | Identify 2-3 repetitive workflows and build reusable agent skills or commands for them. Examples: a /commit command that follows team conventions, a /review skill that applies team review criteria, a /plan command that generates plans in the team's preferred format. |
| **PM integration: AI behavioral criteria** | Product Manager | Week 10-16 | Train PMs to include AI-relevant criteria in user stories: verification requirements, documentation expectations, quality gates. PMs participate in retrospectives about the agentic workflow. |
| **QA adaptation for AI-generated code** | QA Lead / QA Engineers | Week 8-14 | QA engineers document the characteristic error patterns of AI-generated code (subtle logic errors, security oversights, convention mismatches, hallucinated APIs) and adapt test strategies to address these patterns. QA participates in retrospectives about the agentic workflow's quality impact and contributes to evolving the shared configuration with quality-focused context. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| Plan/Code/Verify is the default for all non-trivial changes | End of Month 3 | Observation: PRs consistently include externalized plans or plan references |
| At least 4 agentic setup retrospectives completed with documented changes | End of Month 4 | Retrospective notes show AI setup discussion; AGENTS.md commit history shows evolution |
| Team has documented code review norms for AI-generated code | End of Month 3 | Document exists in shared config or team wiki |
| VTDD used on at least 3 features | End of Month 4 | Evidence in PRs or team records |
| At least 2 reusable team skills or commands exist | End of Month 4 | Skills/commands in repository, team members report using them |

### Common Obstacles

- **Retrospectives become stale.** If the team runs out of things to discuss about their AI setup, it may signal either that the setup is mature (good) or that the team has stopped thinking critically about it (bad). Inject fresh perspectives by reviewing other teams' practices, reading about new techniques, or having team members try deliberately different approaches.
- **VTDD adoption resistance.** Developers accustomed to writing tests after implementation may find VTDD uncomfortable. Start with low-stakes features and demonstrate the value of catching specification errors early. Do not mandate VTDD for all testing -- position it as one tool in the testing toolkit.
- **PM engagement lags.** PMs may view the agentic workflow as "an engineering thing." Involve PMs from the start of this phase. Their participation in retrospectives and their ability to write AI-aware acceptance criteria are Zone 2 proficiencies, not nice-to-haves.

---

## Month 4-6: Consolidation and Competency

**Theme:** Verify that Zone 2 practices are habitual under pressure and the team is self-improving.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **Pressure test observation** | Artisan Engineer / Engineering Manager / Facilitator | Ongoing | During the next sprint with deadline pressure, production incident, or scope change, observe: Does the team maintain Plan/Code/Verify? Do they use the shared configuration? Do feedback loops stay active? Or do practices degrade under stress? Embedded Artisans observe these behaviors firsthand during pair programming and collaborative work, providing a richer picture than periodic observation alone. |
| **Cross-team knowledge sharing** | Engineering Manager | Week 16-20 | If multiple teams are progressing, hold a cross-team session to share AI practices. What is each team's AGENTS.md structure? What skills have they built? What feedback loop configurations work best? This prevents teams from reinventing solved problems. |
| **Measure impact** | Tech Lead / Engineering Manager | Week 18-22 | Begin tracking the impact of Zone 2 practices on delivery metrics: PR cycle time, defect rates, test coverage, deployment frequency. These measurements inform both the team's improvement efforts and the organization's investment case for continuing AI adoption. |
| **Competency check (formal or informal)** | Facilitator | Week 20-24 | Administer the Zone 2 diagnostic to assess competency stage. Compare results to the initial diagnostic baseline. Identify proficiencies that are strong (habitual) vs. those that are still developing (present on good days, absent under pressure). |
| **Zone 3 competency assessment** | Facilitator / CTO | Week 22-24 | If the team demonstrates strong Zone 2 competency and the organization's strategic context warrants it, assess competency for Zone 3 investment. If Zone 2 is the target zone, plan for deep competency investment rather than zone progression. |
| **Pairing modes exploration** | Team | Week 18-22 | Experiment with structured agentic pairing modes: Sync & Split (plan together, execute separately with agents, reconvene to integrate), Multi-Tabbed (one developer managing parallel agent sessions), and Dueling Pair (two developers solve the same problem independently, compare results). Identify which modes work for which types of tasks. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| Zone 2 practices maintained through at least one high-pressure period | End of Month 5 | Manager and team self-report; retrospective discussion |
| AGENTS.md has been iterated at least 8 times since creation | End of Month 5 | Git commit history |
| Delivery metrics show measurable improvement in at least one area | End of Month 6 | Metric comparison to pre-Zone 2 baseline |
| Zone 2 competency check shows Developing or Established stage | End of Month 6 | Diagnostic results |
| Decision made: pursue deep Zone 2 competency or begin Zone 3 planning | End of Month 6 | Decision documented and communicated |

### Common Obstacles

- **Metrics show no improvement (yet).** Zone 2 benefits often appear first as consistency improvements (less variance in quality, fewer surprise defects) before showing throughput improvements. If delivery speed has not increased but defect rates have decreased, that is real progress. Ensure metrics capture quality improvements, not just velocity.
- **Zone 2 practices feel like overhead.** During the consolidation phase, some team members may feel that the structured workflow, retrospectives, and configuration management add more process than value. This is usually a signal that the team is in the "conscious competence" stage -- practices are not yet automatic. Persist through this phase; automation of habit takes time.
- **Team treats Zone 2 as "done" once proficient.** Proficiency (can do it when thinking about it) is not competency (does it habitually under pressure). The transition from Developing to Established typically takes 1-2 additional months of deliberate practice and pressure-testing.

---

## Success Criteria for Zone 2 Competency

The team has achieved Zone 2 competency when:

- [ ] Plan/Code/Verify is the default workflow for all changes, maintained under deadline pressure
- [ ] The team has a shared AGENTS.md / CLAUDE.md that is regularly evolved through retrospectives
- [ ] Mandatory feedback loops (compiler, linter, tests) are enforced and never bypassed
- [ ] Engineers use externalized plans as standard practice
- [ ] Code review includes AI-specific review norms and fresh-session reviews
- [ ] The team has built and uses reusable skills/commands for common workflows
- [ ] PMs include AI behavioral criteria in user stories and participate in agentic workflow retrospectives
- [ ] Designers participate in the shared workflow for design-adjacent tasks and contribute design context to the shared configuration
- [ ] QA engineers have adapted test strategies for AI-generated code patterns and participate in workflow retrospectives
- [ ] The team can articulate what their AI setup does well and what needs improvement
- [ ] Delivery metrics show measurable improvement compared to pre-Zone 2 baseline

If all criteria are met and the organization has chosen Zone 3 as a target, proceed to the [Zone 2 to Zone 3 roadmap](/toolkit/zone-2-to-3).

---

## Leading Indicators

Track these during the roadmap to detect progress or stalls early:

| Indicator | What It Signals | How to Measure |
|---|---|---|
| AGENTS.md commit frequency | Team is actively evolving shared setup | Git log |
| Percentage of PRs with externalized plans | Plan/Code/Verify adoption | PR review or repo search |
| Feedback loop bypass rate | Whether quality gates are respected | CI/CD logs, pre-commit hook metrics |
| Retrospective AI discussion frequency | Team engagement with continuous improvement | Retrospective notes |
| PR review cycle time | Whether AI-assisted review is accelerating the process | Git/CI metrics |
| Team members who can explain the shared workflow | Depth of understanding vs. surface compliance | Informal conversation or team survey |
| QA test strategy updated for AI-generated code patterns | QA integration into shared workflow | Test strategy documentation review |
| Designer contributions to shared AI configuration | Design integration into shared workflow | AGENTS.md commit history, design context present |

---

## Related Documentation

- [Zone 2: Integrating](/toolkit/zone-2-integrating) -- Full zone reference
- [Baseline to Zone 1 Roadmap](/toolkit/baseline-to-zone-1) -- Previous roadmap in the progression
- [Zone 2 to Zone 3 Roadmap](/toolkit/zone-2-to-3) -- Next roadmap in the progression
- [Engagement Model](/toolkit/engagement-model) -- How this roadmap fits into the consulting engagement
