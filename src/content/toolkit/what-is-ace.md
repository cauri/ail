---
title: "What Is ACE?"
description: "Overview of the ACE framework for organizational AI adoption."
section: "reference"
order: 10
---
The AI Competency Evaluation (ACE) framework helps software organizations understand where they are in AI adoption, decide where they want to go, and build a practical roadmap to get there.

ACE provides a structured approach to AI adoption that respects organizational context and treats competency as something deeper than knowledge or occasional best-day performance.

## The Problem ACE Solves

Most organizations pursuing AI adoption face three interrelated problems:

1. **They don't know where they are.** Leadership hears that "we're using AI" but has no way to assess whether that usage is habitual, effective, or integrated into delivery workflows. Individual enthusiasm is confused with organizational capability.

2. **They don't know where to go.** Traditional maturity models suggest that more is always better, pushing organizations toward the highest level regardless of strategic fit. ACE takes a different approach: it defines a staged progression where each stage builds on the previous one, but treats the choice of stopping point as a strategic decision, not a failure to progress. ACE is a staged progression model with a deliberate innovation -- every zone, including Zone 1, is a legitimate destination when chosen through informed strategic analysis.

3. **They don't know how to get there.** Even organizations with clear goals lack a structured approach to identifying the specific investments -- organizational, not just individual -- required to reach their target zone of AI integration.

ACE addresses all three problems through a facilitated diagnostic, contextual goal-setting, and investment-based roadmapping.

![VA-21: Content Architecture Map](/images/content-architecture-map.svg)

## The Four Zones

ACE defines four zones of AI-augmented software development, plus a pre-AI baseline:

- **Zone 0 (Baseline):** Traditional software development with no meaningful AI integration. Individual team members may have experimented with AI tools, but usage is sporadic and unsupported.

- **Zone 1 (Augmenting):** Individual team members -- developers, PMs, designers, QA engineers -- use AI tools habitually in their daily software production work. AI usage is personal, ad-hoc, and tool-focused. The shift is from "AI is unfamiliar" to "AI tools are a normal part of how I work."

- **Zone 2 (Integrating):** AI is embedded in team-level delivery workflows. The shift is from individual tool use to systematic team practices: shared AI conventions, automated pipelines, and collective standards for working with AI.

- **Zone 3 (Accelerating):** AI drives core development work. Humans specify, review, and orchestrate; AI implements. Engineers shift into an "AI Engineer" identity defined by The Prime Directive: *"You are no longer writing the code. You are designing the process by which code is produced."* This identity shift extends across the production pipeline: PMs become behavioral specifiers, designers become design systems architects, and QA engineers become evaluation pipeline specialists. Not every organization will progress this far, but for those that do, the investment builds directly on Zone 2 foundations.

- **Zone 4 (Industrializing):** The organization operates an AI-first software factory. Engineers maintain the factory, PMs define portfolio-level production targets, designers own the factory's specification layer, and QA engineers operate the evaluation infrastructure; AI produces the software. This is a fundamental cultural transformation — from software development as craft production to industrial production. This zone represents the deepest level of organizational commitment to AI-driven development and requires sustained investment at the executive level. *Note: Zone 4 is largely theoretical. No organization has demonstrably achieved this level of AI-driven development at the time of writing. The zone description is based on trajectory analysis from current trends and expert judgment about where AI-augmented development is heading, not on documented organizational practice.*

Each zone represents a distinct set of proficiencies, organizational investments, and expected benefits. See the zone reference documents ([Zone 1](/toolkit/zone-1-augmenting), [Zone 2](/toolkit/zone-2-integrating), [Zone 3](/toolkit/zone-3-accelerating), [Zone 4](/toolkit/zone-4-industrializing)) for detailed descriptions.

## A Progressive Path, Not a Mandate

ACE defines a single linear progression: Zone 1 → Zone 2 → Zone 3 → Zone 4. Each zone builds on the previous one. Organizations choose how far along this path to travel based on their strategic context, investment capacity, and risk appetite. Zone 2 is the typical near-term target for most organizations -- it represents the point at which AI adoption becomes a durable team-level capability. However, the decision to pursue Zone 2 should emerge from strategic analysis, not from a framework mandate. Zones 3 and 4 require progressively larger investments that are justified only in certain strategic contexts. A deeply competent Zone 2 organization that has chosen its stopping point through careful analysis is in a stronger position than a Zone 4 organization that overextended its investment capacity. See [Progressive Competency Model](/toolkit/progressive-competency-model) for a deeper explanation.

## Competency, Not Knowledge

The word "competency" in ACE is intentional and specific. Competency means habitual behavior under stress -- not knowledge about best practices, and not performance on a team's best day.

A team that knows how to integrate AI into their CI/CD pipeline but abandons that practice when a deadline tightens is not competent. A developer who uses AI tools impressively during a demo but reverts to manual coding under pressure is not competent. Competency is what you do reliably, even when conditions are unfavorable. See [Competency vs. Knowledge](/toolkit/competency-vs-knowledge) for a complete treatment.

## How ACE Is Used

A typical ACE engagement follows this sequence:

1. **Facilitated diagnostic.** A trained facilitator guides a team through a structured self-assessment to establish their current zone and competency stage. This is not an external audit; it is a collaborative process that builds shared understanding.

2. **Goal setting.** The team and organizational leadership review the diagnostic results and choose a target zone based on strategic context, risk appetite, and investment capacity. See [How to Choose a Target Zone](/toolkit/choose-target-zone).

3. **Roadmap creation.** The facilitator works with the team and leadership to map the specific organizational investments required to reach the target zone, with timelines, leading indicators, and reassessment cadences. See [How to Create a Progression Roadmap](/toolkit/create-progression-roadmap).

4. **Collaborative Delivery.** Embedded Artisans join the client team to deliver real software together while mentoring through the shared work. The Facilitator conducts ongoing check-ins, re-diagnostics, and roadmap refreshes to track progress and adjust course as conditions change. Collaborative Delivery can begin in parallel with the diagnostic phases -- Artisans embed early to assess the team's engineering discipline firsthand and start getting the team "AI-ready" by establishing the XP fundamentals (TDD, pair programming, continuous integration, small iterations) that Zone 2 requires.

5. **Reassessment.** Periodic re-administration of the diagnostic measures actual competency progression and informs roadmap adjustments.

The system is designed to be repeatable. Organizations run the diagnostic, invest in progression, reassess, and adjust -- creating a continuous improvement cycle for AI adoption that is grounded in observable behavior rather than aspirational planning.

## Related Documentation

- [Progressive Competency Model](/toolkit/progressive-competency-model) -- How zone progression works and why organizations choose their stopping point
- [Competency vs. Knowledge](/toolkit/competency-vs-knowledge) -- What competency means and why it matters for assessment
- [Organizational Investments](/toolkit/organizational-investments) -- Why individual training fails without systemic change
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Detailed description of Zone 1 proficiencies and investments
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Detailed description of Zone 2 proficiencies and investments
- [Zone 3 Reference](/toolkit/zone-3-accelerating) -- Detailed description of Zone 3 proficiencies and investments
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Detailed description of Zone 4 proficiencies and investments
- [Quick Reference](/toolkit/quick-reference) -- One-page summary for use during workshops
