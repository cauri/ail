# AIL Framework Review Project

The AIL (AI Launchpad) framework is a diagnostic and training program
created by the AIL team to help software organizations understand their level of AI adoption,
determine strategic targets, and execute roadmaps. This review project assembles a panel
of domain experts to evaluate the framework's content from multiple perspectives.

> **This document contains project owner constraints.** The team must follow these rules.
> Changes to this document require project owner approval.

## Tech Stack

- **Content format**: Markdown/MDX files in an Astro static site
- **Content collections**: `src/content/training/`, `src/content/toolkit/`, `src/content/research/`
- **Build tool**: Astro (but the review team does not build the site)
- **Review output**: Structured markdown files in `.reviews/`

## Review Mandates

These are non-negotiable practices for the review:

- **Expert Perspective**: Each reviewer evaluates content strictly from their area of
expertise. Do not drift into other reviewers' domains unless there is genuine overlap.
- **Evidence-Based Critique**: Every concern must cite specific content from theAIL
framework. No vague "this feels off" feedback — point to the text.
- **Constructive Recommendations**: Every concern must include a recommendation for
improvement. Identifying problems without solutions is insufficient.
- **Severity Classification**: All concerns must be classified as Critical, Major,
Minor, or Suggestion. This enables prioritization.
- **Read-Only Content Access**: Reviewers read AIL content but do NOT modify it.
All feedback goes to `.reviews/` files. Content changes are made by the project
owner based on review findings.
- **Consensus on Cross-Cutting Issues**: When multiple reviewers identify the same
concern from different angles, the team should discuss and produce a unified
recommendation rather than N separate ones.

## Scope

### Must Review

- Zone definitions and progression model (Zones 0-4)
- Competency measurement approach ("habitual behavior under stress")
- Training modules 1-6 (facilitator certification program)
- Diagnostic instruments (questionnaires, scoring, thresholds)
- Facilitation guides and workshop scripts
- Cross-craft role inclusivity (PM, design, QA alongside engineering)
- Literature review and research grounding
- Validation study plan

### Should Review

- Toolkit reference documents (zone-specific proficiencies, investments)
- Engagement lifecycle model (Discovery through Collaborative Delivery)
- Interview guides (leadership, practitioner, expert)
- Report templates (team and management)
- Ethical framework and facilitator guidelines

### Could Review

- Site information architecture and content navigation
- Glossary completeness and terminology consistency
- Metrics and leading indicators
- Organizational investment catalogs

### Out of Scope

- Astro site implementation / code quality
- Visual design / CSS / styling
- Deployment and hosting
- Marketing or sales positioning of the framework