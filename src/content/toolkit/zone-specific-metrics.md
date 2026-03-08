---
title: "Zone-Specific Metrics"
description: "This document defines primary, secondary, anti-metrics, leading indicators, and lagging indicators for each AIL zone."
section: "metrics"
type: "catalog"
audience: "facilitator"
order: 2
---
This document defines primary, secondary, anti-metrics, leading indicators, and lagging indicators for each AIL zone. These metrics complement the [Metrics Tree](/toolkit/metrics-tree) with zone-level detail and provide the measurement foundation for diagnostic assessments and progression roadmaps.

---

![VA-16: Metrics Tree Diagram](/images/metrics-tree-diagram.svg)

## Zone 1: Augmenting

**Zone summary:** Individual team members -- developers, PMs, designers, QA engineers -- use AI tools habitually in their daily software production work.

### Primary Metric

**Percentage of team members (across all software production roles) who use AI tools daily as part of their standard workflow.**

- **How to measure:** Weekly self-report survey or tool telemetry (active sessions per day per team member). A team member counts as "daily user" if they interact with AI tools on 4+ of 5 workdays. Track across engineering, PM, design, and QA roles separately to identify role-specific adoption gaps.
- **Target:** [Expert judgment] 85%+ of team members are daily AI users within 3 months of tool provisioning.

### Secondary Metrics

| Metric | What It Measures | How to Measure | Target |
|--------|-----------------|----------------|--------|
| AI suggestion acceptance rate | Selective, thoughtful engagement with AI suggestions | IDE telemetry | [Emerging evidence] 25-40% |
| Modes of AI engagement used per developer | Breadth of AI interaction (inline, chat, CHOP, vibe-coding) | Quarterly self-assessment | [Expert judgment] 3+ modes used weekly |
| Time from tool provisioning to first habitual use | Speed of adoption | Telemetry: days until 4+/5 daily usage pattern | [Expert judgment] < 4 weeks |
| AI usage in non-code tasks | Adoption beyond pure coding (docs, research, communication) | Self-report survey | [Expert judgment] 60%+ of team uses AI for non-code tasks |
| Developer satisfaction with AI tools | Whether tools are perceived as helpful vs. burdensome | Quarterly satisfaction survey (1-5 scale) | [Expert judgment] Average 3.8+ |
| PM AI usage in discovery vs. delivery | Whether PMs use AI for strategic thinking, not just delivery artifacts | Self-report: frequency of AI use in research synthesis, hypothesis generation, market analysis | [Expert judgment] 4+/5 days weekly |
| Designer AI usage in analysis vs. production | Whether designers use AI for evaluative work, not just artifact generation | Self-report: frequency of AI use in accessibility auditing, IA analysis, design pattern evaluation | [Expert judgment] 4+/5 days weekly |
| QA AI-assisted test coverage expansion | Whether QA uses AI to increase test coverage breadth | Test coverage delta pre/post AI adoption; self-report on AI-assisted test strategies | [Expert judgment] Measurable coverage increase within 3 months |

### Anti-Metrics (Warning Signs)

| Anti-Metric | What It Signals | Threshold for Concern |
|------------|----------------|----------------------|
| Blind acceptance rate | Developers accepting AI suggestions without review | Acceptance rate > 60% with no corresponding quality check |
| AI tool abandonment during deadlines | Tools are not habitual; they are optional | > 25% of developers report dropping AI tools under pressure |
| Over-reliance on single AI mode | Shallow adoption; developer has not explored tool capabilities | > 50% of developers use only inline completion |
| Increased defect introduction rate | AI-generated code is not being reviewed adequately | Defect rate increases > 10% post-adoption |
| AI tool usage concentrated in few individuals | Adoption is enthusiast-driven, not team-wide | > 50% of AI tool usage from < 20% of team members |

### Leading Indicators (Predict Zone 1 Competency)

- **Tool activation rate:** Rising activation predicts upcoming habitual use.
- **Training completion rate:** Team members who complete structured AI tool training (including role-specific training for PM, design, and QA) adopt faster.
- **Peer sharing frequency:** Team members sharing AI tips with colleagues signals growing comfort and enthusiasm.
- **Prompt sophistication growth:** Team members progressing from simple to multi-step, context-rich prompts.
- **QA test strategy adaptation rate:** QA engineers beginning to use AI for test case generation and bug analysis.

### Lagging Indicators (Confirm Zone 1 Competency Achieved)

- **Sustained daily usage over 3+ months:** Habitual behavior persists beyond the novelty period across all roles.
- **AI usage maintained during high-pressure periods:** The competency test -- team members use AI tools during production incidents, tight deadlines, and unfamiliar codebases.
- **Individual task completion time reduction:** 15-30% improvement from pre-AI baseline.
- **Reduced "blank page" time:** Developers report faster starts on new tasks.
- **Junior developer independence improvement:** Junior developers resolve more issues independently using AI assistance.

---

## Zone 2: Integrating

**Zone summary:** AI is embedded in team-level delivery workflows with shared configuration and systematic practices.

### Primary Metric

**Percentage of PRs where the team's shared AI workflow (Plan/Code/Verify with shared configuration) was used.**

- **How to measure:** PR audit: check for linked plan artifacts, evidence of shared AI configuration usage, and verification step documentation. Sample 20% of PRs monthly.
- **Target:** [Expert judgment] 80%+ of PRs follow the shared workflow within 6 months.

### Secondary Metrics

| Metric | What It Measures | How to Measure | Target |
|--------|-----------------|----------------|--------|
| Shared AI config commit frequency | Active maintenance of AGENTS.md/CLAUDE.md | Git log analysis | [Expert judgment] Updated at least biweekly |
| Number of distinct config contributors | Collective ownership of AI setup | Git blame analysis | [Expert judgment] 50%+ of team has contributed |
| Mandatory feedback loop enforcement rate | Reliability of quality gates | CI/CD audit: % of repos with enforced gates | [Expert judgment] 100% |
| Agentic setup retrospective coverage | Team reflects on and improves AI practices | Retrospective notes audit | [Expert judgment] Discussed in 75%+ of retros |
| Cross-member code quality variance | Whether shared workflow levels up the whole team | Per-developer defect rate standard deviation | [Expert judgment] 30-50% reduction from Zone 1 |
| Externalized plan artifact creation rate | Whether teams are planning before coding | PR audit for linked plan documents | [Expert judgment] 70%+ of non-trivial PRs have plan artifacts |
| PM contribution to shared AI configuration | PMs actively shape team AI practices | Config git blame: PM-authored sections for discovery/specification | [Expert judgment] PM has contributed discovery-related config |
| Designer contribution to shared standards | Designers own design-related AI practices | Config/standards git blame: designer-authored design review criteria | [Expert judgment] Designer has contributed design standards |
| QA test strategy documentation rate | QA adapts test strategies for AI-generated code | Audit: documented AI-specific test strategies per sprint | [Expert judgment] Updated test strategy within first month |

### Anti-Metrics (Warning Signs)

| Anti-Metric | What It Signals | Threshold for Concern |
|------------|----------------|----------------------|
| Single-maintainer AI config | "Shared" config is really one person's setup | Only 1 contributor to config in past month |
| Feedback loop bypass rate | Teams circumventing quality gates (--no-verify, skipping CI) | > 5% of commits bypass feedback loops |
| Workflow abandonment under deadline pressure | Zone 2 practices are not habitual | Team reverts to ad-hoc AI usage during sprints with tight deadlines |
| Growing gap between best and worst AI users | Shared workflow is not leveling up the team | Quality variance increasing or stable (not decreasing) |
| Stale AI configuration | Team set it up once and stopped iterating | Config not updated in 30+ days |
| Retrospective silence on AI topics | AI practices are not being discussed or improved | AI workflow not mentioned in 3+ consecutive retrospectives |

### Leading Indicators (Predict Zone 2 Competency)

- **AI config creation and first iteration:** Team creates and begins iterating on shared config.
- **Feedback loop installation rate:** Repos gaining enforced quality gates.
- **Plan artifact creation rate:** PRs increasingly include externalized plans.
- **Team members seeking context engineering training:** Interest in deepening AI workflow skills.
- **Cross-team config pattern sharing:** Teams exchanging AGENTS.md patterns or skill libraries.
- **QA test strategy documentation:** QA engineers documenting AI-specific testing strategies and error patterns.
- **Designer contributions to shared configuration:** Designers adding design context to AGENTS.md and participating in design-adjacent workflow tasks.

### Lagging Indicators (Confirm Zone 2 Competency Achieved)

- **Sustained shared workflow adherence over 3+ months:** Including during high-pressure periods.
- **PR cycle time reduction:** 20-35% improvement from Zone 1 baseline.
- **New member onboarding acceleration:** 25-40% faster time to first independent PR.
- **Reduced knowledge silos:** Decrease in "only person who knows this" bottleneck instances.
- **Measurable and consistent velocity improvement:** Team can demonstrate AI-augmented throughput gains with data, not anecdotes.

---

## Zone 3: Accelerating

**Zone summary:** AI fundamentally changes all roles in the production pipeline. Engineers become process designers, PMs become behavioral specifiers, designers become design systems architects, and QA engineers become evaluation pipeline specialists.

### Primary Metric

**Ratio of specification and verification time to implementation time.**

- **How to measure:** Task time-tracking categorized into specification (defining what to build), implementation (building it), and verification (confirming it works). This can be done through developer self-classification of time blocks or through task type categorization in sprint planning. Note: this metric is conceptually important but practically challenging to measure with precision. The boundaries between specification, implementation, and verification are blurry in AI-augmented workflows (e.g., reviewing AI-generated code is simultaneously verification and implementation). Treat the target as a directional indicator -- specification and verification should become the majority of work -- not a precise measurement. Consider supplementing with proxy measures: ratio of planning artifacts to code artifacts per PR, or ratio of review comments to code changes. The validation study should assess whether practitioners can reliably self-classify time into these categories.
  *Validation note:* The "time to self-classification" aspect of this metric --- whether practitioners can reliably categorize their time into specification, implementation, and verification --- has not yet been included in the [Validation Study Plan](/research/validation-study-plan). This self-classification reliability question should be considered for inclusion in future validation phases, as the metric's practical utility depends on practitioners being able to make these categorizations consistently.
- **Target:** [Expert judgment] Specification + verification time represents 50-70% of total development time (indicating the role has shifted from "writing code" to "specifying and verifying solutions").

### Secondary Metrics

| Metric | What It Measures | How to Measure | Target |
|--------|-----------------|----------------|--------|
| CAT suite first-pass rate | AI workflow produces production-quality output reliably | CI/CD analytics: % of submissions passing all automated checks on first try | [Expert judgment] 85%+ |
| Cross-functional task completion rate | Individuals work outside traditional specialization | Task data correlated with role profiles | [Expert judgment] 20-30% of tasks |
| Eval pipeline coverage | Systematic quality assessment of AI output | Repository audit for eval configurations | [Expert judgment] 60%+ of AI workflows |
| AI-to-human code ratio | How much code is AI-generated vs. hand-written | Code attribution analysis (where tooling supports it) | [Expert judgment] 70-85% AI-generated |
| Time from requirement to production deployment | End-to-end delivery speed | Issue tracker timestamps | [Expert judgment] 50-70% reduction from Zone 2 |
| Developer time on architecture and design | Shift toward higher-value cognitive work | Time-tracking or self-report | [Expert judgment] 40%+ of developer time |

### Anti-Metrics (Warning Signs)

| Anti-Metric | What It Signals | Threshold for Concern |
|------------|----------------|----------------------|
| Declining code comprehension | Developers cannot explain AI-generated code they shipped | Developers unable to explain > 10% of code in their PRs during review |
| Technical debt acceleration | AI generates code faster than the team can maintain it | Tech debt backlog growing faster than it is being addressed |
| Skill atrophy in core engineering | Developers losing fundamental skills they still need | Developers unable to complete tasks without AI at 60%+ of normal velocity |
| Over-specialization in AI tooling | Team becomes dependent on specific AI vendor/tool | Team velocity drops > 40% when primary AI tool is unavailable |
| Eval pipeline false confidence | Evals pass but production quality degrades | Gap between eval pass rates and production defect rates widening |
| Burnout from pace of change | Role transformation is exhausting rather than empowering | Rising burnout indicators or attrition among experienced engineers |

### Leading Indicators (Predict Zone 3 Competency)

- **Increasing CAT suite comprehensiveness:** More automated checks being added to the pipeline.
- **Developers initiating cross-functional work:** Developers voluntarily picking up tasks outside their specialty.
- **Architecture discussions referencing AI capabilities:** Team designs solutions that leverage AI strengths.
- **Eval pipeline creation rate:** New evals being defined and integrated.
- **QA eval harness co-ownership:** QA engineers beginning to co-own evaluation criteria in eval harnesses.
- **Design specification encoding rate:** Designers beginning to encode design standards as machine-verifiable pipeline inputs.
- **PM behavioral specification quality:** PMs writing measurable efficacy thresholds for AI workflows.
- **Decreasing implementation time per feature:** Features are completed faster while specification quality remains stable or improves.

### Lagging Indicators (Confirm Zone 3 Competency Achieved)

- **Feature delivery velocity 2-3x Zone 2 baseline:** Sustained over 3+ months.
- **Team produces output equivalent to 50-100% larger team:** Measured against pre-Zone-3 team-size norms.
- **Role descriptions have evolved:** Job postings and internal role descriptions reflect "AI Engineer" capabilities.
- **Cross-functional delivery is routine:** Team members regularly complete work outside traditional specialization without quality degradation.
- **Architecture is AI-native:** System design decisions explicitly account for AI augmentation patterns.

---

## Zone 4: Industrializing

**Zone summary:** The organization operates an AI-first software factory. Engineers maintain the factory, PMs define portfolio-level production targets, designers own the factory's specification layer, and QA operates the evaluation infrastructure.

### Primary Metric

**Organizational AI capability maturity score: a composite of infrastructure investment, cross-team standardization, and strategic AI integration.**

- **How to measure:** Quarterly assessment combining: (a) percentage of engineering investment in AI infrastructure, (b) percentage of teams using organization-wide AI workflows, (c) number of proprietary AI tools or custom models in production use.
- **Target:** Composite score indicating AI is a first-class organizational capability, not just a collection of team-level practices.

### Secondary Metrics

| Metric | What It Measures | How to Measure | Target |
|--------|-----------------|----------------|--------|
| Custom AI infrastructure investment | Organization treats AI as strategic infrastructure | Budget analysis: % of engineering spend on AI tooling/infrastructure | [Expert judgment — speculative] 10-20% |
| Cross-team AI workflow reuse rate | Organizational standardization beyond individual teams | Configuration audit across repositories | [Expert judgment — speculative] 70%+ teams use org-wide components |
| Agentic system autonomy level | AI agents complete tasks with minimal human intervention | Task classification and human-touchpoint analysis | [Expert judgment — speculative] 30-50% of routine tasks |
| Time-to-market for new capabilities | End-to-end organizational delivery speed | Portfolio tracking: requirement to production | [Expert judgment — speculative] 3-5x improvement from baseline |
| AI platform team effectiveness | Internal AI tooling team delivers value to product teams | Internal customer satisfaction survey | [Expert judgment — speculative] 80%+ satisfaction |
| Proprietary AI model/tool count | Organization builds rather than just consumes AI capability | Inventory of custom AI assets | Growth trajectory quarter-over-quarter |

### Anti-Metrics (Warning Signs)

| Anti-Metric | What It Signals | Threshold for Concern |
|------------|----------------|----------------------|
| AI infrastructure cost spiraling | Investment is growing faster than the value it produces | AI infrastructure costs growing > 2x faster than output metrics |
| Vendor lock-in deepening | Organization is dependent on specific AI providers with no portability | Cannot switch primary AI vendor without > 6-month migration |
| Innovation theater | AI initiatives are performative rather than value-producing | High investment with no measurable throughput or quality improvement |
| Organizational complexity increase | AI infrastructure adds bureaucracy rather than capability | Teams report more process overhead after AI industrialization |
| Talent concentration risk | AI capability depends on a small number of specialists | > 50% of AI infrastructure knowledge held by < 10% of engineering staff |
| Ethical and compliance gaps | AI usage outpaces governance and oversight | Security, privacy, or compliance incidents related to AI systems |

### Leading Indicators (Predict Zone 4 Competency)

- **AI platform team formation:** Organization creates dedicated AI infrastructure team.
- **Cross-team AI standardization initiatives:** Organization-wide effort to align AI practices.
- **Executive sponsorship of AI strategy:** AI capability is a board-level or C-suite strategic priority.
- **AI-related hiring and role creation:** Organization hires for AI-specific engineering roles.
- **Investment in custom model training or fine-tuning:** Organization begins building proprietary AI assets.
- **Design specification layer operationalization:** Designers establishing machine-verifiable design specifications at portfolio scale.
- **QA evaluation infrastructure ownership:** QA engineers operating factory-level evaluation systems as their primary function.
- **PM portfolio-scale specification capability:** PMs defining factory production targets and system-level acceptance criteria.

### Lagging Indicators (Confirm Zone 4 Competency Achieved)

- **AI capability cited as competitive differentiator:** Customers, recruits, and analysts recognize the organization's AI capability.
- **Sustained 3-5x throughput improvement from pre-AI baseline:** At the organizational level, not just individual teams.
- **AI infrastructure is a profit center or clear cost-saver:** Financial analysis demonstrates ROI of AI investments.
- **Organization attracts talent based on AI capability:** AI practices are a recruiting advantage.
- **Industry recognition for AI-augmented development practices:** External validation through case studies, conference talks, or analyst coverage.

---

## Cross-Zone Progression Metrics

These metrics track the overall journey across zones, independent of any single zone.

| Metric | What It Measures | How to Measure |
|--------|-----------------|----------------|
| Zone progression rate | Speed at which teams advance through zones | Time between zone competency assessments showing progression |
| Zone regression frequency | How often teams slip back to previous zone behaviors under pressure | Diagnostic reassessment results. Operationally, zone regression is identified by: (a) declining composite scores on re-diagnostic assessment (e.g., a team previously at Established dropping to Developing), or (b) loss of previously habitual behaviors under pressure as surfaced during facilitated discussion (e.g., a team that previously maintained AI-assisted code review under deadline pressure now abandons it). Both indicators should be assessed during reassessment; score decline alone may reflect honest recalibration rather than true regression, so facilitator judgment about behavioral evidence is essential. |
| Investment follow-through rate | Whether the organization makes the investments it commits to | Quarterly audit of roadmap commitments vs. actual investments |
| Cross-zone consistency | Whether the organization progresses evenly or has wide zone variance between teams | Standard deviation of zone scores across teams |
| Competency durability | Whether achieved competency persists over time | Repeated diagnostic assessments at 6-month intervals |

## Related Documentation

- [Metrics Tree](/toolkit/metrics-tree) -- North Star metric decomposition and counter-metrics
- [Organizational Health Metrics](/toolkit/organizational-health-metrics) -- Management-level organizational metrics
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Zone 1 proficiencies and investments
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Zone 2 proficiencies and investments
- [Zone 3 Reference](/toolkit/zone-3-accelerating) -- Zone 3 proficiencies and investments
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Zone 4 proficiencies and investments
