---
title: "Investment Catalog"
description: "A comprehensive catalog of all organizational investments required across all zones of the AI Competency Evaluation (ACE) model."
section: "reference"
order: 7
type: "catalog"
audience: "facilitator"
---
A comprehensive catalog of all organizational investments required across all zones of the AI Competency Evaluation (ACE) model. Investments are changes the organization must make -- not training individuals complete on their own. Each zone requires its own set of investments in addition to sustaining investments from prior zones.

This catalog synthesizes investments from the individual zone reference documents. For full context on any zone, see:
- [Zone 1: Augmenting](/toolkit/zone-1-augmenting)
- [Zone 2: Integrating](/toolkit/zone-2-integrating)
- [Zone 3: Accelerating](/toolkit/zone-3-accelerating)
- [Zone 4: Industrializing](/toolkit/zone-4-industrializing)

---

![VA-18: Investment Dependency Chain](/images/investment-dependency-chain.svg)

## Zone 1: Augmenting Investments

Zone 1 competency requires organizational investment beyond individual motivation. The goal is to remove barriers to adoption and establish habitual individual AI tool use. See [Zone 1: Augmenting](/toolkit/zone-1-augmenting) for full context.

1. **Provide AI tool licenses to all team members, not just developers.** Product managers, designers, QA engineers, and other contributors benefit from AI tools. Restricting licenses to developers alone limits the breadth of adoption and signals that AI is "only for coding."

2. **Establish organizational policy on approved AI tools and data handling.** Teams need clear guidance on which AI tools are approved, what data can and cannot be shared with AI services, and how to handle proprietary code and sensitive information. Ambiguity about policy suppresses adoption -- people avoid tools when they are unsure whether using them is permitted.

3. **Provide structured training on AI tool usage.** Basic training covers tool installation, configuration, effective prompting, and workflow integration. This is not a one-time workshop; it includes ongoing support, office hours, and shared learning channels where team members exchange tips and techniques.

4. **Address workforce concerns about AI adoption honestly.** Many practitioners carry anxiety that AI tools will change or eliminate their roles. This anxiety is not irrational -- the role of software engineering and other software production disciplines is genuinely changing, and the ACE framework's own zone progression describes that change. Leadership must address these concerns honestly rather than with reassurance that may later feel dishonest. Effective approaches include: acknowledge the concern as legitimate; make concrete, time-bounded commitments about what AI adoption will and will not mean for employment decisions during the current zone transition; connect current adoption to the organization's chosen stopping point and its workforce implications; and do not promise that no roles will change -- promise instead that the organization will invest in helping people navigate the change.

5. **Ensure developers have appropriate API keys and accounts.** Practical blockers kill adoption. If developers cannot sign up for tools without procurement approval, if API keys require weeks of security review, or if corporate firewalls block AI services, adoption stalls regardless of interest. Remove these friction points proactively.

6. **Establish basic guidelines on when AI-generated code needs extra review.** Not all AI-generated code carries equal risk. Code touching security-sensitive areas, authentication, authorization, financial calculations, or regulated domains warrants additional scrutiny. Provide clear, lightweight guidelines rather than blanket prohibitions.

7. **Management behaviors that normalize adoption and protect learning space.** Engineering managers at Zone 1 set the tone for whether AI tool adoption feels safe or risky. The following observable behaviors distinguish managers who enable Zone 1 competency from those who inadvertently suppress it:

   - **Use AI tools visibly in their own work.** Managers who use AI tools for their own tasks -- drafting communications, summarizing meeting notes, preparing reports -- signal that adoption is normal, not exceptional.
     - *Do say:* "I used Claude to draft the sprint retrospective summary -- it saved me 30 minutes. Here's what I changed from the draft."
     - *Don't say:* "I don't really use those tools myself, but you all should."

   - **Ask about AI tool usage in one-on-ones without evaluating it.** Managers create space for adoption conversations by asking with genuine curiosity, not by auditing compliance.
     - *Do say:* "Have you found any good uses for the AI tools this week? Anything frustrating about them?"
     - *Don't say:* "Are you using Copilot yet? The team needs to get adoption numbers up."

   - **Celebrate learning publicly, including failed experiments.** When someone shares a prompting technique that did not work, the manager treats it as useful information, not wasted time.
     - *Do say:* "That's useful to know -- the rest of the team should hear that so they don't hit the same wall. Can you share it in our channel?"
     - *Don't say:* "Let's focus on what actually works."

   - **Protect time for AI tool exploration.** Managers ensure that learning AI tools is treated as legitimate work, not something squeezed into margins.
     - *Do say:* "Take a couple of hours this week to try using it for that refactoring task. No pressure to ship anything from it."
     - *Don't say:* "We're behind on the sprint, so AI exploration will have to wait."

   - **Name the discomfort honestly.** When team members express anxiety about AI tools, managers acknowledge the feeling rather than dismissing it.
     - *Do say:* "It makes sense to feel uncertain about this. The way we work is changing, and it's okay to have mixed feelings. What would help you feel more comfortable experimenting?"
     - *Don't say:* "There's nothing to worry about -- these tools just make you more productive."

   **Identity and emotional context for Zone 1.** Zone 1 adoption is often framed as a simple tooling change, but for many practitioners it carries emotional weight. Picking up AI tools means confronting unfamiliarity with a technology that seems to do part of your job, which can trigger a threat response -- especially for experienced engineers whose professional identity is deeply tied to their craft. Managers who recognize this dynamic and create space for practitioners to move through it at their own pace will see more durable adoption than those who treat Zone 1 as a straightforward training exercise.

---

## Zone 2: Integrating Investments

Zone 2 competency requires organizational support beyond team-level effort. These investments enable and sustain team-level AI integration. See [Zone 2: Integrating](/toolkit/zone-2-integrating) for full context.

1. **One Team, One Setup.** The organization mandates that all AI configuration goes into source control. Personal AI setups, private prompt libraries, and individual tool configurations are replaced by a shared, committed, versioned team configuration. This is the foundational investment: without it, the team cannot achieve consistent, team-level competency.

2. **Time for Infrastructure.** Teams must be given time to establish and iterate on their agentic setup alongside feature delivery. Building shared AGENTS.md/CLAUDE.md files, establishing feedback loops, creating skills and commands, and refining the workflow all require dedicated effort. Organizations that expect teams to build this infrastructure "on the side" while maintaining full feature velocity will not achieve Zone 2 competency.

3. **Tool Standardization.** The organization establishes team agreement on preferred AI tools and providers. This does not mean banning alternatives, but it means the team has a standard stack that everyone knows, everyone uses, and everyone can support. The shared setup depends on shared tools.

4. **Quality Gate Policy.** The organization creates policy on AI-generated code quality gates. This includes expectations about mandatory feedback loops (compiler, linter, tests), code review standards for AI-generated code, and acceptable use guidelines. These policies should be collaboratively developed with teams, not imposed top-down.

5. **Budget Integration.** AI tool costs are integrated into project budgets as a team expense, not treated as personal expenses or departmental overhead. When AI tools are essential to the team's workflow, their cost must be visible and funded like any other infrastructure.

6. **Workflow Training.** The organization invests in training teams in the Plan/Code/Verify workflow specifically -- not just generic "use AI" training. This includes context engineering, externalized planning, feedback loop setup, and the specific skills required to work effectively with agentic tools at the team level.

7. **Cross-Team Knowledge Sharing.** The organization enables cross-team sharing of AI configuration patterns. AGENTS.md templates, skill libraries, workflow patterns, and lessons learned should flow between teams. This prevents each team from reinventing the wheel and accelerates organization-wide adoption.

8. **Retrospective Culture.** The organization supports a retrospective culture around continuous improvement of the agentic setup. This means allocating time for retrospectives, valuing process improvement alongside feature delivery, and treating the team's AI workflow as a first-class subject of continuous improvement.

9. **Manager enablement for AI-integrated workflows.** Engineering managers need training and support to manage teams that are integrating AI into their workflows. This includes: understanding the practices well enough to evaluate whether they are working, knowing how to coach team members who are struggling with adoption, having language for conversations about how performance is measured during the transition, and knowing when to escalate concerns about the transition's impact on team health. Managers who are not enabled become unintentional bottlenecks or, worse, quietly undermine the transition because they do not understand it.

10. **Management behaviors that champion shared workflow and protect standardization.** Zone 2 is a team-level transition: individual tools become shared infrastructure, and personal preferences yield to team agreements. Engineering managers must actively champion this shift through observable behaviors:

    - **Enforce "One Team, One Setup" consistently.** When individuals resist moving their personal AI configuration into the shared team setup, managers hold the line on the team agreement rather than quietly allowing exceptions.
      - *Do say:* "I know your personal setup works well for you, but the team agreed to a shared configuration. Let's bring your best patterns into the shared setup so everyone benefits."
      - *Don't say:* "Just use whatever works for you -- the team setup is more of a guideline."

    - **Redirect individual heroics toward team patterns.** When someone builds an impressive personal workflow, the manager redirects the energy toward making it a team capability, not an individual advantage.
      - *Do say:* "That's a great workflow. Can you pair with Alex this week to generalize it into a team skill so everyone can use it?"
      - *Don't say:* "Nice work -- keep doing what you're doing."

    - **Protect time for infrastructure work against delivery pressure.** When sprint pressure mounts, managers resist the temptation to reclaim time allocated for AI workflow infrastructure.
      - *Do say:* "We committed two days this sprint to improving our shared AI setup. That commitment stands -- it's how we get faster over the next quarter."
      - *Don't say:* "We'll get to the AI workflow stuff next sprint -- right now we need to focus on the feature deadline."

    - **Make workflow improvement visible in team ceremonies.** Managers ensure that AI workflow improvements are reviewed and celebrated in retrospectives and demos, not treated as invisible plumbing.
      - *Do say:* "In the demo today, I'd like the team to show the new feedback loop we set up -- it's reduced our review cycle by a day."
      - *Don't say:* "Let's keep the demo focused on features -- the process stuff is internal."

    - **Name the loss of autonomy as a real cost.** Zone 2 requires giving up personal tool preferences and individual workflows for shared team practices. Managers who acknowledge this as a genuine sacrifice -- not just a minor inconvenience -- build more trust during the transition.
      - *Do say:* "I know standardizing on one setup means giving up configurations you've spent time perfecting. That's a real trade-off, and the team benefit has to be worth it. If it's not, let's talk about what's not working."
      - *Don't say:* "Everyone just needs to get on board with the team setup."

    **Identity and emotional context for Zone 2.** Zone 2 asks practitioners to surrender personal autonomy for shared practices -- a transition that touches professional identity more deeply than it appears. Engineers who have invested significant effort in crafting personal AI workflows may experience the move to "One Team, One Setup" as a loss of individual distinction. The emotional dynamic is not resistance to collaboration; it is grief over giving up something personally meaningful. Managers who recognize this distinction -- and who frame standardization as building on individual contributions rather than replacing them -- will navigate the transition with less friction and more durable adoption.

---

## Zone 3: Accelerating Investments

Zone 3 competency requires significant structural changes. These are not incremental additions to existing processes -- they represent a reorganization of how engineering work is defined, staffed, and evaluated. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating) for full context.

1. **Create the AI Engineer role or retrain existing engineers into it.** This is a new role identity, not merely a new skill set. AI Engineers define specifications, design pipelines, build eval harnesses, and operate AI systems. They do not primarily write implementation code. This requires rethinking job descriptions, career ladders, hiring criteria, and performance evaluation. Some existing engineers will thrive in this role; others will prefer to remain in traditional engineering roles, and the organization must accommodate both paths.

2. **Give teams budget authority for AI experimentation.** AI pipelines require experimentation -- trying different models, context strategies, retrieval approaches, and prompt structures. Teams need discretionary budget for API costs, tooling, and experimentation time that is separate from feature delivery commitments. Without this, teams optimize for cost avoidance rather than capability building.

3. **Integrate Continuous Alignment Testing into the definition of done.** No AI-produced feature ships without passing its eval criteria. This means CAT pipeline results are visible in pull requests, deployment gates include eval checks, and the team treats eval failures with the same urgency as test failures. This requires tooling, infrastructure, and cultural change.

4. **Create infrastructure for AI observability.** Dashboards, trace storage, cost monitoring, and drift detection require dedicated infrastructure investment. Teams need to see what their AI pipelines are doing -- what inputs they receive, what decisions they make, what outputs they produce, and how those outputs change over time.

5. **Establish prompt versioning and experiment management practices.** Prompts and pipeline configurations need the same version control, review, and deployment rigor as application code. Experiment management practices -- hypothesis, test, result, iterate -- need tooling and process support to be sustainable.

6. **Dedicate time for engineers to improve AI pipelines, not just use them.** Engineers need protected time to analyze pipeline performance, improve eval coverage, experiment with new approaches, and address drift. If all engineering time is allocated to feature delivery, pipeline quality degrades. This is the AI equivalent of allocating time for technical debt reduction.

7. **Cross-functional training: PMs and designers learn to specify AI behavioral expectations.** Product managers and designers need to understand enough about AI pipeline behavior to write meaningful specifications, define realistic acceptance criteria, and participate in eval design. This requires structured training, not just exposure.

8. **Create organizational tolerance for AI non-determinism.** Management must understand that AI systems produce variable outputs by nature. Leadership training on AI system characteristics is essential to avoid creating a culture of blame that discourages AI pipeline adoption.

9. **Invest in workforce transition planning.** Zone 3's role transformations -- from code writer to AI Engineer, from artifact producer to design systems architect, from tester to evaluation pipeline specialist -- will not suit every current practitioner equally. The organization must plan for workforce implications: retraining programs for practitioners transitioning into new roles, honest career path analysis for practitioners who prefer traditional roles, and support structures for people navigating the identity transition. This investment should be scoped during goal-setting, not discovered mid-transition. See Zone 3 reference: Accountability for AI-Generated Output for the ethical obligations involved.

10. **Manager enablement for identity-level role transitions.** Zone 3 transitions are fundamentally different from Zone 1-2 transitions because they involve changes to professional identity, not just workflow. Engineering managers need specific preparation: how to have individual conversations about role transitions that are supportive rather than directive, how to recognize and respond to identity-based resistance (which presents differently from skill-based resistance), how to manage team performance during a transition period when productivity will temporarily decline, and when to involve the ACE Facilitator or external support. See Heifetz et al. (2009) on the distinction between technical problems and adaptive challenges -- Zone 3 transition management is an adaptive challenge for managers as well as for their teams.

---

## Zone 4: Industrializing Investments

Zone 4 requires organizational investments that go far beyond tooling, training, or process changes. These are fundamental cultural and structural changes. Zone 4 investments represent the deepest level of organizational commitment. See [Zone 4: Industrializing](/toolkit/zone-4-industrializing) for full context.

1. **Fundamental reorganization around AI production.** The organizational structure shifts from feature teams or component teams to a model built around the AI production system. Some engineers work on factory design and improvement. Others work on evaluation and governance. Others work on factory operations and reliability. This is not a rebranding of existing roles; it is a genuine restructuring of how work is organized.

2. **Investment in AI factory infrastructure.** The AI production system requires its own infrastructure: compute for running production pipelines, storage for artifacts and evaluation results, monitoring and alerting for factory health, and tooling for factory specification and governance. This is infrastructure investment above and beyond what Zone 3 requires.

3. **Governance and compliance frameworks for AI production.** Existing governance frameworks (code review, security review, compliance checks) were designed for human-produced code. AI factory production requires new governance frameworks that can operate at factory speed and scale. Organizations in regulated industries especially must invest here before pursuing Zone 4.

4. **Organizational "factory floor" metrics and reporting.** Leadership needs visibility into factory performance: production throughput, defect rates, evaluation coverage, governance compliance, factory uptime, mean time to recovery. These are operational metrics, not software development metrics. They require new dashboards, new reporting cadences, and new organizational habits.

5. **Risk management for AI production at scale.** The failure modes of an AI factory are different from the failure modes of traditional software development. A model regression can affect all factory output simultaneously. A specification error can propagate through hundreds of artifacts. The organization needs risk management processes designed for these failure modes.

6. **Cross-functional rotation between factory design and production oversight.** To prevent knowledge silos, the organization invests in rotation programs that give engineers experience across both factory design and production operations. This is expensive and disruptive in the short term but essential for long-term factory health.

7. **External audit and governance mechanisms for AI production quality.** Internal governance alone is insufficient at factory scale. The organization invests in external audits, third-party evaluations, and independent governance mechanisms that provide an outside perspective on factory quality.

---

## Investment Types Classification

Every investment is classified into one or more of the following categories. An investment may span multiple categories.

### Policy/Governance
Rules, approvals, procurement decisions, and organizational mandates.

| Investment | Zone |
|---|---|
| Establish organizational policy on approved AI tools and data handling | 1 |
| Establish basic guidelines on when AI-generated code needs extra review | 1 |
| One Team, One Setup (mandate AI config in source control) | 2 |
| Quality Gate Policy | 2 |
| Integrate CAT into the definition of done | 3 |
| Establish prompt versioning and experiment management practices | 3 |
| Create organizational tolerance for AI non-determinism | 3 |
| Governance and compliance frameworks for AI production | 4 |
| Risk management for AI production at scale | 4 |
| External audit and governance mechanisms | 4 |
| Organizational "factory floor" metrics and reporting | 4 |

### Tooling/Infrastructure
Licenses, access, tooling purchases, and infrastructure builds.

| Investment | Zone |
|---|---|
| Provide AI tool licenses to all team members | 1 |
| Ensure developers have appropriate API keys and accounts | 1 |
| Tool Standardization | 2 |
| Budget Integration (AI tool costs in project budgets) | 2 |
| Give teams budget authority for AI experimentation | 3 |
| Create infrastructure for AI observability | 3 |
| Investment in AI factory infrastructure | 4 |

### Culture/People
Role changes, performance criteria, behaviors, and organizational identity.

| Investment | Zone |
|---|---|
| Actively remove fear and stigma about AI usage | 1 |
| Management behaviors that normalize adoption and protect learning space | 1 |
| Manager enablement: equip engineering managers to support AI adoption, model AI-positive behaviors, and coach teams through zone transitions | 1-2 |
| Management behaviors that champion shared workflow and protect standardization | 2 |
| Retrospective Culture | 2 |
| Create the AI Engineer role or retrain existing engineers | 3 |
| Create organizational tolerance for AI non-determinism | 3 |
| Fundamental reorganization around AI production | 4 |
| Cross-functional rotation between factory design and production oversight | 4 |

### Process/Workflow
How teams work, including delivery processes and workflow changes.

| Investment | Zone |
|---|---|
| One Team, One Setup | 2 |
| Time for Infrastructure | 2 |
| Quality Gate Policy | 2 |
| Integrate CAT into the definition of done | 3 |
| Dedicate time for engineers to improve AI pipelines | 3 |
| Fundamental reorganization around AI production | 4 |
| Organizational "factory floor" metrics and reporting | 4 |

### Training/Knowledge
Skills development, structured learning, and knowledge sharing.

| Investment | Zone |
|---|---|
| Provide structured training on AI tool usage | 1 |
| Workflow Training (Plan/Code/Verify, context engineering) | 2 |
| Cross-Team Knowledge Sharing | 2 |
| Cross-functional training: PMs and designers learn AI behavioral expectations | 3 |

### Ethical Infrastructure
Investments that ensure AI adoption addresses bias, accountability, and responsible use.

| Investment | Zone |
|---|---|
| Establish basic guidelines on when AI-generated code needs extra review | 1 |
| Address workforce concerns about AI adoption honestly | 1 |
| Quality Gate Policy (includes bias awareness in review) | 2 |
| Draft organizational non-determinism policy (includes accountability structures) | 3 |
| Invest in workforce transition planning | 3 |
| Governance and compliance frameworks for AI production | 4 |
| External audit and governance mechanisms | 4 |

Ethical infrastructure is not a separate workstream -- it is woven into investments across all categories. This classification highlights the investments that specifically address ethical considerations: who is accountable for AI-generated output, how bias in AI-generated code is detected and mitigated, how workforce impacts are managed honestly, and how governance scales with AI production volume. Organizations should verify that their investment plans include adequate coverage across this category at every zone.

---

## Investment Prioritization Table

The following table shows dependencies between investments. An investment listed in the "Depends On" column must be in place before the investment in the "Investment" column can be pursued effectively. Within each zone, investments are listed in recommended priority order.

| Priority | Investment | Zone | Depends On |
|---|---|---|---|
| 1 | Establish organizational policy on approved AI tools and data handling | 1 | -- |
| 2 | Provide AI tool licenses to all team members | 1 | Policy on approved tools (Z1) |
| 3 | Ensure developers have appropriate API keys and accounts | 1 | Licenses provided (Z1) |
| 4 | Actively remove fear and stigma about AI usage | 1 | -- |
| 5 | Management behaviors that normalize adoption and protect learning space | 1 | Actively remove fear and stigma (Z1) |
| 6 | Provide structured training on AI tool usage | 1 | Licenses and access (Z1) |
| 7 | Establish basic guidelines on when AI-generated code needs extra review | 1 | Policy on approved tools (Z1) |
| 8 | One Team, One Setup | 2 | Zone 1 competency achieved |
| 9 | Tool Standardization | 2 | Zone 1 competency achieved |
| 10 | Management behaviors that champion shared workflow and protect standardization | 2 | One Team, One Setup (Z2), Manager enablement (Z2) |
| 11 | Time for Infrastructure | 2 | One Team, One Setup (Z2) |
| 12 | Quality Gate Policy | 2 | One Team, One Setup (Z2), Tool Standardization (Z2) |
| 13 | Budget Integration | 2 | Tool Standardization (Z2) |
| 14 | Workflow Training (Plan/Code/Verify) | 2 | One Team, One Setup (Z2), Tool Standardization (Z2) |
| 15 | Cross-Team Knowledge Sharing | 2 | Multiple teams practicing Zone 2 |
| 16 | Retrospective Culture | 2 | Time for Infrastructure (Z2) |
| 17 | Create the AI Engineer role | 3 | Zone 2 competency achieved |
| 18 | Give teams budget authority for AI experimentation | 3 | Budget Integration (Z2) |
| 19 | Create infrastructure for AI observability | 3 | Quality Gate Policy (Z2) |
| 20 | Integrate CAT into the definition of done | 3 | AI observability infrastructure (Z3), AI Engineer role (Z3) |
| 21 | Establish prompt versioning and experiment management | 3 | AI observability infrastructure (Z3) |
| 22 | Dedicate time for engineers to improve AI pipelines | 3 | AI Engineer role (Z3), budget authority (Z3) |
| 23 | Cross-functional training for PMs and designers | 3 | AI Engineer role (Z3), CAT integration (Z3) |
| 24 | Create organizational tolerance for AI non-determinism | 3 | Cross-functional training (Z3) |
| 25 | Fundamental reorganization around AI production | 4 | Zone 3 competency achieved |
| 26 | Investment in AI factory infrastructure | 4 | Reorganization (Z4) |
| 27 | Governance and compliance frameworks for AI production | 4 | Reorganization (Z4), factory infrastructure (Z4) |
| 28 | Organizational "factory floor" metrics and reporting | 4 | Factory infrastructure (Z4), governance frameworks (Z4) |
| 29 | Risk management for AI production at scale | 4 | Governance frameworks (Z4), metrics and reporting (Z4) |
| 30 | Cross-functional rotation | 4 | Reorganization (Z4), factory infrastructure (Z4) |
| 31 | External audit and governance mechanisms | 4 | Governance frameworks (Z4), metrics and reporting (Z4) |

---

## Notes

- **Zones are cumulative.** Investments from prior zones must be sustained while pursuing new zones. Zone 2 investments do not replace Zone 1 investments; they build on them.
- **All zones form a single progression.** Each zone builds on the previous. Zone 2 is the typical near-term target for most organizations. Zones 3 and 4 require progressively larger investments justified by strategic context.
- **Every zone transition deserves strategic analysis.** The required investment grows at each step. Organizations choose their stopping point based on strategy, investment capacity, and risk appetite.

---

## Related Documentation

- [Zone 1: Augmenting](/toolkit/zone-1-augmenting) -- Zone 1 organizational investments in full context
- [Zone 2: Integrating](/toolkit/zone-2-integrating) -- Zone 2 organizational investments in full context
- [Zone 3: Accelerating](/toolkit/zone-3-accelerating) -- Zone 3 organizational investments in full context
- [Zone 4: Industrializing](/toolkit/zone-4-industrializing) -- Zone 4 organizational investments in full context
- [Proficiency Catalog](/toolkit/proficiency-catalog) -- The proficiencies that organizational investments are designed to enable
- [Organizational Investments](/toolkit/organizational-investments) -- Why systemic organizational investment is required for competency progression
- [Goal-Setting Framework](/toolkit/goal-setting-framework) -- How target zone selection informs which investments to prioritize
- [How to Create a Progression Roadmap](/toolkit/create-progression-roadmap) -- How to sequence investments into a phased roadmap
