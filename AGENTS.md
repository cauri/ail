# AIL Framework Review Team

## Team Structure

- Team member profiles are located in `.team/`
- Project owner constraints are defined in `PROJECT.md`
- Coordinator instructions are at `.team/coordinator-instructions.md`
- Domain glossary is maintained at `docs/glossary.md`
- Review output is written to `.reviews/`

### Team Members

| Name | Role | Profile |
|------|------|---------|
| Simon Willison | AI-Augmented Development Practitioner | `.team/simon-willison.md` |
| Diana Larsen | Technical Coaching & Agile Fluency Expert | `.team/diana-larsen.md` |
| Tony O'Driscoll | Organizational Change Management Expert | `.team/tony-odriscoll.md` |
| Nicole Forsgren | Maturity & Capability Model Theorist | `.team/nicole-forsgren.md` |
| Will Thalheimer | Instructional Designer / Adult Learning Expert | `.team/will-thalheimer.md` |
| Roger Schwarz | Facilitation & Consulting Methodologist | `.team/roger-schwarz.md` |
| Marty Cagan | Cross-Functional Software Delivery Expert | `.team/marty-cagan.md` |
| Rumman Chowdhury | Ethics / Responsible AI Expert | `.team/rumman-chowdhury.md` |
| Daniel Russo | Research Methodology Expert | `.team/daniel-russo.md` |
| Abby Covert | Content Strategy / Technical Writing Expert | `.team/abby-covert.md` |

## Conventions

### Review Process

1. **Read before reviewing.** Read the full content section before writing any feedback.
   Do not review piecemeal.
2. **One review file per content section per reviewer.** File naming:
   `.reviews/<reviewer-name>-<content-slug>.md`
3. **Severity levels matter.** Use them consistently:
   - **Critical**: Factually wrong, logically incoherent, or could cause real harm
   - **Major**: Significant gap, misleading framing, or structural problem
   - **Minor**: Imprecise language, unclear explanation, or missed opportunity
   - **Suggestion**: Enhancement idea, not a deficiency
4. **Cite the source.** Every concern references specific text from the AIL content.
5. **Recommend, don't just critique.** Every concern includes a recommendation.
6. **Check others' reviews first.** Before writing your review of a shared content
   section, read existing reviews in `.reviews/` to avoid duplication. If you agree
   with another reviewer's finding, note "+1" and add your perspective rather than
   restating the same concern.

### Communication

- Reviewers communicate findings through `.reviews/` files (primary) and messages
  to the coordinator (coordination only).
- Cross-reviewer discussion happens through the coordinator, not direct messaging.
- The coordinator compiles synthesis reports; individual reviewers do not.

### Decision-Making

- Individual review findings are each reviewer's autonomous judgment.
- Cross-cutting recommendations (involving multiple reviewers' domains) require
  discussion and a unified recommendation.
- The project owner makes final decisions on which findings to act on and how.
- Reviewers may disagree with each other — document the disagreement and both
  perspectives rather than forcing false consensus.

### Quality Standards

- Reviews must be grounded in the reviewer's published expertise and methodology,
  not generic opinions.
- Each reviewer should reference their specific framework/methodology when making
  evaluations (e.g., Forsgren references DORA principles, Thalheimer references LTEM,
  Schwarz references mutual learning framework).
- The team values intellectual honesty: if something is outside your expertise, say so
  and defer to the appropriate reviewer.
