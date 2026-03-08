# Rebrand Changelog: ACE / Artium → AI Launchpad (AIL)

Date: 2026-03-08

## Summary

Renamed the project from **ACE (AI Competency Evaluation)** by **Artium** to **AIL (AI Launchpad)**. Removed all references to Artium, the Artium brand, and the ACE acronym. Replaced with generic or AIL-branded equivalents.

---

## Naming Changes

| Old | New |
|-----|-----|
| ACE | AIL |
| AI Competency Evaluation | AI Launchpad |
| Artium | _(removed or genericized)_ |
| Artium Academy | AIL Academy |
| Artium-certified | certified |
| Artisan(s) | Practitioner(s) |
| artium.ai (footer link) | GitHub repo link |
| ace.artium.ai (canonical URL) | cauri.github.io/ace |
| thisisartium.github.io (deploy URL) | cauri.github.io |

---

## Files Changed (93 files, 677 insertions, 754 deletions)

### Deleted Files
- `public/images/artium-logo.png` — Artium logo removed
- `public/favicon.ico` — Old favicon removed

### Renamed Files
- `src/content/toolkit/what-is-ace.md` → `src/content/toolkit/what-is-ail.md`

### New/Replaced Files
- `public/favicon.svg` — New placeholder favicon with "AIL" text on magenta background

### Assets Updated (SVGs)
Text references to "ACE" replaced with "AIL" in 12 SVG diagram files:
- `public/images/choose-your-stopping-point.svg`
- `public/images/competency-stage-reference.svg`
- `public/images/competency-vs-knowledge.svg`
- `public/images/content-architecture-map.svg`
- `public/images/diagnostic-questionnaire-p1.svg`
- `public/images/diagnostic-questionnaire-p2.svg`
- `public/images/diagnostic-questionnaire-p3.svg`
- `public/images/diagnostic-questionnaire-p4.svg`
- `public/images/engagement-lifecycle.svg`
- `public/images/metrics-tree-diagram.svg`
- `public/images/scoring-threshold-decision-tree.svg`
- `public/images/validation-study-flow.svg`

### Components & Layouts
- `src/components/Nav.astro` — Replaced Artium logo image with AIL text badge; changed nav title to "AI Launchpad"
- `src/components/Footer.astro` — Removed "by Artium", updated copyright to "AI Launchpad", replaced artium.ai link with GitHub link
- `src/components/SectionNav.astro` — Updated `what-ace-measures` anchor to `what-ail-measures`
- `src/layouts/BaseLayout.astro` — Updated canonical URL, page title suffix from "ACE" to "AIL", description text

### Pages
- `src/pages/index.astro` — Updated hero subtitle, description text, section anchors, removed Artium facilitator reference
- `src/pages/training/index.astro` — Renamed section ID from `artium-academy` to `ail-academy`, removed Notion link, updated all ACE/Artium references
- `src/pages/training/flashcards.astro` — Updated ACE references in UI
- `src/pages/toolkit/index.astro` — Updated ACE references
- `src/pages/research/index.astro` — Updated ACE references

### Training Content (src/content/training/)
- `program-overview.md` — Replaced all Artium/ACE references; "Artium consultants" → "consultants", "Artium Principals" → "Principals", "Artium's framework" → genericized
- `module-1-model-foundations.md` — ACE → AIL throughout
- `module-2-diagnostic-facilitation.md` — ACE → AIL throughout
- `module-5-coaching-engagement.md` — ACE → AIL throughout
- `module-6-embedded-delivery.md` — Heavy changes: all Artium references removed, "Artium's embedded model" → "the organization's embedded model", "Artium's Principles of Agentic Coding" → "the organization's Principles of Agentic Coding", Artisan → Practitioner throughout, academy anchor updated

### Toolkit Content (src/content/toolkit/) — 28 files
All files updated with ACE → AIL. Key changes:
- `what-is-ail.md` (renamed from what-is-ace.md) — Title and all content updated
- `engagement-model.md` — "ACE Consulting Engagement Model" → "AIL Consulting Engagement Model", "ACE Facilitator" role description updated
- `facilitator-guide.md` — Title updated, all ACE references replaced
- `glossary.md` — Title and all definitions updated
- `metrics-tree.md` — "ACE Metrics Tree" → "AIL Metrics Tree", "pre-ACE" → "pre-AIL"
- `quick-reference.md` — Title updated
- `scoring-thresholds.md` — "Artium engagements" → "AIL engagements"
- All zone files, report templates, interview guides — ACE → AIL

### Research Content (src/content/research/) — 5 files
- `validation-study-plan.md` — Title updated, "at Artium" → "internally", "Artium's consulting network" → genericized
- `literature-review.md` — Cross-references updated
- `practitioner-interview-guide.md` — ACE → AIL
- `leadership-interview-guide.md` — ACE → AIL
- `expert-interview-guide.md` — ACE → AIL

### Configuration & Project Files
- `.github/workflows/deploy.yml` — Deploy workflow name, SITE_URL updated to cauri.github.io
- `PROJECT.md` — Project description updated
- `CLAUDE.md` — Project context updated
- `AGENTS.md` — Team name updated
- `docs/glossary.md` — Terms updated
- `src/data/flashcards.ts` — All ACE references in flashcard content updated

### Team & Review Files (.team/) — 16 files
All team member profiles and coordinator instructions updated with ACE → AIL replacements.

---

## Anchors & Internal Links Updated
- `/#what-ace-measures` → `/#what-ail-measures`
- `/toolkit/what-is-ace` → `/toolkit/what-is-ail`
- `/training#artium-academy` → `/training#ail-academy`

## External Links Removed/Updated
- `https://artium.ai` → `https://github.com/cauri/ail`
- `https://ace.artium.ai` → `https://cauri.github.io/ail`
- `https://thisisartium.github.io` → `https://cauri.github.io`
- `https://www.notion.so/artium/Artium-Academy-Program-Details` → `#` (placeholder)
