---
title: "How to Create a Progression Roadmap"
description: "This guide walks through the process of building a practical roadmap for progressing from your current ACE zone to your target zone."
section: "guides"
order: 5
---
This guide walks through the process of building a practical roadmap for progressing from your current ACE zone to your target zone. A well-constructed roadmap maps specific organizational investments to a timeline, identifies leading indicators that signal progress, and establishes a cadence for reassessment.

## Prerequisites

Before creating a roadmap, you need:

- Completed ACE diagnostic results (current zone and competency stage)
- A chosen target zone based on strategic analysis. See [How to Choose a Target Zone](/toolkit/choose-target-zone).
- Leadership buy-in for the target zone and a willingness to invest. See [How to Present to Leadership](/toolkit/present-to-leadership).

## Step 1: Map Your Current State

Start with the diagnostic results. Document:

- **Current zone and competency stage.** For example: "Zone 1, Proficient stage" or "Zone 2, Learning stage."
- **Specific proficiency gaps.** Which proficiencies within the current zone are not yet habitual? These must be addressed before or concurrently with advancing to the next zone.
- **Existing organizational investments.** What has the organization already committed in terms of tools, policies, training, and structural changes? Build on what exists rather than starting from scratch.
- **Known blockers.** What organizational friction is currently preventing progress? Policy restrictions, procurement delays, management resistance, tool limitations, cultural resistance.

## Step 2: Identify Required Investments for the Target Zone

Consult the zone reference documentation for the target zone to compile the full list of organizational investments required. For each investment, document:

- **What needs to change.** Be specific: "Update security policy to allow AI tool integration with CI/CD pipelines," not "improve security posture."
- **Who owns the change.** Identify the specific person or team responsible for each investment.
- **What blocks it.** Dependencies, approvals, budget requirements, or prerequisite changes.
- **How you will know it is done.** Observable criteria for completion, not aspirational goals.
- **Whether the investment is Artisan-led, jointly owned, or client-owned.** In engagements with an embedded Artisan team, some investments are led by Artisans (introducing new practices through collaborative work), some are jointly owned (Artisans and client team members working together), and some are client-owned (organizational changes that only the client can make). Clarify ownership to avoid ambiguity about who drives each investment.

## Step 3: Sequence Investments into Phases

Not all investments can or should happen simultaneously. Sequence them into phases based on dependencies, risk, and impact.

### Phase 1: Remove Blockers (Months 1-2)

Address the organizational friction that is preventing current-zone competency. This typically includes:

- Policy clarifications and updates
- Tool procurement and provisioning
- Management alignment and communication
- Resolving security and legal concerns

Blocker removal has the highest return on investment because it unlocks capability that already exists but is suppressed by organizational friction.

### Phase 2: Establish Foundation Practices (Months 2-4)

Introduce the new zone's core practices in a structured way:

- In engagements with embedded Artisans: Artisans introduce new practices through joint work on real stories from the team's backlog -- pair programming, collaborative design, shared PR reviews -- rather than classroom training
- In self-directed engagements: pilot teams adopt new workflows through structured practice
- Shared standards and conventions are drafted
- Feedback loops are established

This phase is where the "learning" competency stage begins. Expect inconsistency. The goal is exposure and practice, not competency.

### Phase 3: Broaden and Deepen (Months 4-8)

Expand adoption beyond pilot teams and deepen practice:

- Roll out practices to additional teams
- Refine standards based on pilot team feedback
- Address structural changes (role definitions, team topology, process updates)
- Begin measuring leading indicators consistently

This phase is where proficiency emerges. Practices should be mostly consistent, though occasional reminders and support are still needed.

### Phase 4: Sustain and Assess (Months 8-12)

Focus on durability and competency:

- Test whether practices persist under pressure (deadlines, incidents, team changes)
- Conduct formal reassessment using the ACE diagnostic
- Adjust the roadmap based on reassessment results
- Document lessons learned for organizational knowledge

This phase is where competency is tested. If practices survive real-world pressure, the zone transition is succeeding.

## Step 4: Define Leading Indicators

Leading indicators signal progress before the formal reassessment. Define indicators for each phase that are:

- **Observable.** Based on what teams do, not what they report.
- **Measurable.** Can be tracked over time with reasonable effort.
- **Timely.** Provide signal within weeks, not months.

Examples of leading indicators by zone transition:

**Zone 0 to 1:**
- Percentage of developers with active AI tool licenses
- Daily active users of AI coding assistants
- Number of AI-related questions in team communication channels

**Zone 1 to 2:**
- Number of teams with documented AI-assisted development conventions
- Percentage of CI/CD pipelines with AI integration
- Frequency of AI-related topics in retrospectives

**Zone 2 to 3:**
- Number of engineering roles with AI-specific competency requirements
- Percentage of new hires evaluated on AI engineering skills
- Number of teams operating with AI-native development patterns

**Zone 3 to 4:**
- Existence of dedicated AI platform team
- Capital allocation for proprietary AI infrastructure
- Cross-functional AI strategy documentation

## Step 5: Establish a Reassessment Cadence

Plan for periodic reassessment using the ACE diagnostic. The cadence depends on the scope of the transition:

- **Zone 0 to 1:** Reassess every 2-3 months. This transition is relatively fast, and early reassessment catches adoption stalls before they become entrenched.
- **Zone 1 to 2:** Reassess every 3-4 months. Team-level practice changes take longer to stabilize than individual tool adoption.
- **Zone 2 to 3:** Reassess every 4-6 months. Structural changes require time to settle before their effects on behavior can be assessed.
- **Zone 3 to 4:** Reassess every 6 months. Strategic capability development operates on longer timelines.

Each reassessment should produce:

- Updated zone and competency stage assessment
- Comparison to previous assessment and roadmap predictions
- Identification of new blockers or investments needed
- Adjusted roadmap for the next period

## Step 6: Plan for Setbacks

Zone transitions are not linear. Expect setbacks and plan for them:

- **Regression under pressure.** Teams may revert to pre-zone behaviors during crises. This is normal during the Learning and Proficient stages. Note it, address it, but do not treat it as failure.
- **Organizational priority shifts.** If leadership attention moves elsewhere, investment may slow. Build in checkpoints where you explicitly re-confirm organizational commitment.
- **Team turnover.** New team members may not share the competency of the existing team. Build onboarding practices that bring new members up to the team's current competency level.
- **Tool or vendor changes.** AI tools evolve rapidly. Practices built around specific tools may need adaptation. Build practices around capabilities, not products.

When setbacks occur, adjust the roadmap rather than abandoning it. Move timelines out, add support investments, or narrow scope. A slower progression is better than a stalled one.

## Roadmap Template

Use this structure for a 6-12 month progression roadmap:

```
ACE Progression Roadmap
============================

Current State
- Zone: [X], Stage: [Learning/Proficient/Competent/Independently Competent]
- Key proficiency gaps: [list]
- Known blockers: [list]

Target State
- Zone: [Y], Stage: [target competency stage]
- Rationale: [brief strategic justification]

Phase 1: Remove Blockers (Months 1-2)
- Investment: [specific change]
  - Owner: [person/team]
  - Ownership: [Artisan-led / Joint / Client-owned]
  - Completion criteria: [observable outcome]
- Investment: [specific change]
  - Owner: [person/team]
  - Ownership: [Artisan-led / Joint / Client-owned]
  - Completion criteria: [observable outcome]
- Leading indicators: [list]

Phase 2: Establish Foundation (Months 2-4)
- Investment: [specific change]
  - Owner: [person/team]
  - Ownership: [Artisan-led / Joint / Client-owned]
  - Completion criteria: [observable outcome]

Phase 3: Broaden and Deepen (Months 4-8)
- Investment: [specific change]
  - Owner: [person/team]
  - Ownership: [Artisan-led / Joint / Client-owned]
  - Completion criteria: [observable outcome]

Phase 4: Sustain and Assess (Months 8-12)
- Investment: [specific change]
  - Owner: [person/team]
  - Ownership: [Artisan-led / Joint / Client-owned]
  - Completion criteria: [observable outcome]

Reassessment Schedule
- Reassessment 1: Month [X]
- Reassessment 2: Month [Y]
- Final assessment: Month [Z]

Risks and Mitigations
- Risk: [description]
  Mitigation: [plan]
```

## Related Documentation

- [How to Choose a Target Zone](/toolkit/choose-target-zone) -- Selecting the right target
- [How to Present to Leadership](/toolkit/present-to-leadership) -- Securing organizational commitment
- [Organizational Investments](/toolkit/organizational-investments) -- What each zone requires
- [Competency vs. Knowledge](/toolkit/competency-vs-knowledge) -- Why habitual behavior is the measure of progress
- [Baseline to Zone 1 Roadmap](/toolkit/roadmap-templates/baseline-to-zone-1) -- Zone-specific template with monthly activities and milestones
- [Zone 1 to Zone 2 Roadmap](/toolkit/roadmap-templates/zone-1-to-2) -- Zone-specific template
- [Zone 2 to Zone 3 Roadmap](/toolkit/roadmap-templates/zone-2-to-3) -- Zone-specific template including mid-roadmap review guidance for 12-24 month transitions
- [Zone 3 to Zone 4 Roadmap](/toolkit/roadmap-templates/zone-3-to-4) -- Zone-specific template
- [Metrics Tree](/toolkit/metrics-tree) -- The leading indicator framework used to populate roadmap success metrics
