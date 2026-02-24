---
title: "Roadmap: Zone 2 (Integrating) to Zone 3 (Accelerating)"
description: "Roadmap template for progressing from Zone 2 (Integrating) to Zone 3 (Accelerating) with a role identity shift."
section: "roadmaps"
order: 3
---
**Transition type:** Role identity shift
**Typical duration:** 12-24 months
**Investment level:** Significant -- requires sustained executive commitment and dedicated engineering capacity

This roadmap guides organizations from systematic team-level AI integration (Zone 2) to an AI-driven development model (Zone 3). The transition from Zone 2 to Zone 3 involves a significantly larger investment than earlier zone transitions. Zone 1→2 was a workflow integration shift. Zone 2→3 is a role identity shift. New roles must be created, new infrastructure must be built, and leadership must commit to operating in conditions of irreducible non-determinism.

**This transition requires an explicit organizational decision.** Zone 3 is not the default next step for every organization that achieves Zone 2 competency. It is appropriate only where the strategic context justifies the investment: organizations where AI-driven development velocity is a competitive necessity, where engineering capacity is a meaningful constraint on growth, or where the nature of the product makes AI-generated software economically advantageous at scale. If the organization's strategic context does not clearly justify Zone 3 investment, pursuing deep Zone 2 competency is the right choice. A highly competent Zone 2 organization outperforms a fragile Zone 3 organization in every dimension.

The Prime Directive of Zone 3 is: **You are no longer writing the code. You are designing the process by which code is produced.** Every practice, role, and infrastructure element in this roadmap flows from that reframing.

> **For teams with embedded Artisans:** Zone 2→3 involves significant new infrastructure and role definitions. When an Artisan team is embedded, the Artisan AI Engineer helps define and model the AI Engineer role through practice — demonstrating what the role looks like in daily work rather than just defining it on paper. Technical activities like building eval harnesses and implementing CAT pipelines are led jointly by the Artisan Engineer and the client's emerging AI Engineers. The Artisan's goal is not to build the infrastructure for the client, but to build it with them.

---

## Prerequisites

Before beginning this roadmap, confirm:

- [ ] The organization demonstrates Zone 2 competency across multiple teams: Plan/Code/Verify is habitual under pressure, not just present on good days
- [ ] Executive sponsorship exists at VP-of-Engineering level or above, with multi-year investment commitment
- [ ] The organization has explicitly decided to pursue Zone 3 as a strategic objective -- this decision has been made at the leadership level, not just by individual teams
- [ ] Engineering leadership accepts the operational reality of non-determinism: AI systems produce statistically good outputs, not guaranteed outputs, and organizational processes must be designed accordingly
- [ ] Budget exists for dedicated infrastructure: eval tooling, observability platforms, trace storage, and ongoing LLM API costs at higher volumes
- [ ] There is capacity to create or hire into the AI Engineer role identity -- this is a new kind of engineering role and may require hiring, not just reassignment
- [ ] The organization has drafted an AI output accountability policy that addresses: who owns AI output quality, how incidents caused by AI-generated code are handled, what software categories require human authorship regardless of AI capability, and how the organization's regulatory and contractual obligations interact with AI-generated output

**Critical prerequisite:** Zone 2 competency must be genuine, not performed. If teams are following Zone 2 practices because they are mandated rather than because they are habitual, Zone 3 investment will not compound on a solid foundation. Conduct a rigorous Zone 2 competency diagnostic before committing to Zone 3 work.

---

## Month 1-2: Establish Identity and Infrastructure

**Theme:** Define the AI Engineer role identity and put foundational observability and prompt versioning infrastructure in place before building production-grade AI workflows.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **Define the AI Engineer role identity** | CTO / VP Engineering + Artisan AI Engineer | Week 1-3 | The AI Engineer is not a developer who uses AI tools. The AI Engineer designs, maintains, and improves the AI-driven production process. Define the role explicitly: what does this person own? What are they accountable for? How does their work differ from a software engineer's? Publish a role definition and begin identifying who on existing teams has the aptitude and interest to grow into this identity. This is the most important action in Month 1 -- everything else builds on it. If an Artisan AI Engineer is embedded, they model what this role looks like through their daily work — making the role definition concrete rather than abstract. **Identity transition support.** Before and alongside the formal role announcement, invest in structured support for the identity transition. This includes: (a) individual conversations between engineering managers and each affected engineer about what the transition means for them personally -- not directive conversations but exploratory ones; (b) small-group workshops where engineers explore what the identity shift means, what they are being asked to let go of, and what support they need (see Bridges, 2009, Managing Transitions for the Ending/Neutral Zone/New Beginning model that frames these conversations); (c) explicit acknowledgment from engineering leadership that the transition involves real loss -- of mastery, of identity, of the thing that made people feel competent. Engineers who have spent years building excellence in writing code are being asked to let go of that source of professional identity. That loss is real and deserves acknowledgment before the new identity can take hold. |
| **Conduct identity transition workshops** | Engineering Leadership + External Facilitator (if available) | Week 2-6 | Before the AI Engineer role is formally announced, run small-group sessions (6-8 engineers) where engineers explore what the identity shift means for them. Use Bridges' transition model as a frame: What are you being asked to let go of (Ending)? What feels uncertain or disorienting about this change (Neutral Zone)? What possibilities does the new model create (New Beginning)? **Neutral Zone specificity:** The Neutral Zone is where most engineers will spend the longest time during this transition. In practical terms, it looks like: knowing the old role is ending but not yet feeling competent in the new one; feeling like an imposter because the skills that previously earned recognition (writing elegant code) are no longer the primary measure of contribution; oscillating between excitement about the new possibilities and grief about what is being lost; lower productivity as cognitive energy goes to processing the transition rather than producing output. Facilitators should normalize these experiences explicitly rather than assuming engineers will work through them silently. Schedule follow-up Neutral Zone check-ins at 4-week intervals during the first 3 months. These are not training sessions -- they are safe spaces for processing the transition. Engineers who feel heard during this phase are more likely to engage constructively with the role transition. Engineers whose concerns are dismissed or bypassed are more likely to resist, and that resistance will be misdiagnosed as skill deficit. |
| **Establish prompt versioning as an engineering discipline** | AI Engineer Lead / Tech Leads | Week 1-4 | All prompts that drive production-relevant AI behavior must be versioned, reviewed, and deployed with the same discipline as application code. Set up a prompt repository or prompt management system. Define the PR/review process for prompt changes. Establish the norm immediately: a prompt change is a code change. No informal edits to production prompts. |
| **Deploy AI observability infrastructure** | Platform / DevOps | Week 2-6 | Instrument all AI calls with trace capture: inputs, outputs, model version, latency, and cost. Establish a cost monitoring dashboard. Create baseline metrics for AI call volume, cost-per-feature, and response latency. This infrastructure is the foundation for drift detection, cost governance, and eval result interpretation. Do not wait until it is perfect -- get basic traces flowing now and iterate. |
| **Run a Conditioning-level design workshop (Level 1)** | Artisan AI Engineer / AI Engineer Lead + Team | Week 3-5 | Introduce the "separate generation from decisioning" framework at Level 1 (Conditioning): define what agents work within. For each major AI-assisted workflow, document the constraints, boundaries, and context that define the agent's operating environment. These are the walls of the sandbox -- not rules inside it, but the shape of the space. Workshop outputs should be committed as constraint documents in the repository. |
| **Identify initial eval targets** | AI Engineer Lead / Tech Leads | Week 4-6 | Select 2-3 high-value, high-volume AI workflows as the first targets for formal evaluation. Criteria: workflows where output quality is measurable, where failures have known consequences, and where current quality assessment depends on manual review. These become the first eval harness candidates. Document why each was selected. |
| **Draft organizational non-determinism policy** | Engineering Leadership | Week 4-8 | AI systems produce different outputs for the same inputs. Write down what this means for the organization: how are quality standards defined statistically? What failure rates are acceptable for which types of outputs? How are incidents caused by AI-generated code handled? Who owns AI output quality? This policy should address not only statistical quality standards and acceptable failure rates, but also accountability structures: who is responsible when AI-generated output causes harm, what documentation and audit trail requirements apply, and what categories of software are excluded from AI-driven production. See Zone 3: Accountability for AI-Generated Output for the full framework. This policy makes implicit assumptions explicit and surfaces disagreements early. |
| **PM training on AI behavioral specification** | Product Leadership + AI Engineer Lead | Week 3-6 | Train PMs on defining efficacy thresholds -- what accuracy and reliability the business can tolerate for each AI-driven workflow. PMs learn to write measurable acceptance criteria that directly govern AI pipeline behavior: response quality thresholds, acceptable variance bounds, edge case handling requirements, and failure mode definitions. This is a factory input -- PMs need to define what "good enough" means quantitatively for AI-driven workflows. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| AI Engineer role definition published and communicated | End of Week 3 | Role definition document exists; relevant engineers have read and responded to it |
| Prompt versioning system operational | End of Week 4 | At least one prompt is version-controlled and deployed through the new process |
| AI observability infrastructure live | End of Week 6 | Traces visible in dashboard; cost and latency baselines established |
| Conditioning-level constraints documented for 2+ workflows | End of Week 5 | Constraint documents committed to repository |
| Non-determinism policy drafted and in leadership review | End of Week 8 | Draft document exists; review meeting scheduled |

### Common Obstacles

- **"AI Engineer" is treated as a title, not an identity shift.** The most common failure mode in early Zone 3 is assigning the "AI Engineer" label to an existing developer without changing what they actually do. The role requires a genuine identity shift: from "I write code" to "I design and maintain the process that produces code." This shift takes months and requires deliberate coaching, not just a job title change.
- **Observability is deployed but not reviewed.** Instrumentation without regular examination is theater. Assign explicit ownership for reviewing observability data weekly from day one. Traces that are never examined cannot inform improvement.
- **Prompt versioning is bypassed for "quick fixes."** The discipline of treating prompts as code is fragile in early stages. Establish the norm immediately and hold it: there are no informal prompt changes. Every change, including small tweaks, goes through version control.

---

## Month 3-6: Build CAT and Eval Infrastructure

**Theme:** Move from observing AI behavior to systematically testing and asserting quality through Continuous Alignment Testing (CAT) pipelines and formal eval harnesses.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **Build first eval harness** | Artisan AI Engineer / AI Engineer | Month 3-4 | An eval harness is a test suite for AI outputs. Build one for the first target workflow identified in Month 1-2. The harness runs the AI workflow against a curated set of inputs, scores outputs against defined quality criteria, and produces a pass/fail signal. Start with the simplest possible scoring -- exact-match or keyword checks. The goal is to learn what eval infrastructure looks like, not to achieve comprehensive coverage. |
| **Implement CAT pipeline** | Artisan AI Engineer / AI Engineer + DevOps | Month 3-5 | Continuous Alignment Testing means eval harnesses run automatically on every relevant change: new prompt versions, new model versions, and on a scheduled cadence to detect drift. Integrate the first eval harness into CI/CD. Define what a failing eval means: does it block deployment? Trigger a review? Alert the on-call engineer? Make the consequences explicit before they happen. |
| **Introduce Authority-level governance (Level 2)** | AI Engineer Lead + Engineering Leadership | Month 4-5 | Level 2 of the "separate generation from decisioning" framework addresses authority: who or what can approve AI-generated actions. For each workflow, define the approval requirements. Some actions are auto-approved if evals pass. Others require human review. Others require specific roles. Document the authority matrix and implement it in workflow design. |
| **Expand observability to drift monitoring** | AI Engineer | Month 4-6 | Model behavior drifts over time as providers update models and context shifts. Set up automated drift detection: compare current eval scores against the baselines established in Month 1-2. Define a drift threshold that triggers review. Assign ownership for investigating drift alerts. Drift that goes undetected is quality degradation that compounds silently. |
| **Build second and third eval harnesses** | AI Engineer | Month 5-6 | Extend eval coverage to the other target workflows identified in Month 1-2. Each harness may require a different scoring approach: some outputs are best evaluated by deterministic rules, others by LLM-as-judge, others by human spot-check sampling. Document the evaluation strategy and rationale for each harness. |
| **Train tech leads on eval thinking** | Artisan AI Engineer / AI Engineer Lead | Month 5-6 | Eval design is a skill. Tech leads moving toward the AI Engineer identity need to identify what "good output" means for a given workflow, construct representative test cases, and define scoring criteria. Run a workshop that practices eval design on real workflows from the team's own backlog. |
| **Designer specification encoding** | Design Lead + AI Engineer | Month 3-5 | Designers begin encoding design standards, component specifications, and interaction patterns as machine-verifiable inputs for AI pipelines. This transforms design from artifact production to specification authorship -- the factory needs design standards it can consume and validate against automatically, not mockups that require human interpretation. Start with the team's most-used components and design patterns. |
| **QA transition to evaluation pipeline ownership** | QA Lead + AI Engineer | Month 3-6 | QA engineers begin co-owning eval harness design, bringing their testing expertise to the systematic evaluation of AI-produced artifacts. QA defines evaluation criteria across functional, security, accessibility, and performance dimensions. Start with one eval harness where QA co-owns the evaluation criteria alongside engineering. |
| **Design first multi-agent workflow (Level 3)** | AI Engineer + Tech Lead | Month 5-6 | Level 3 of the framework addresses orchestrated multi-agent pipelines. Identify one workflow currently handled by a single AI call that would benefit from decomposition into specialized agents with defined handoffs. Design the pipeline: what does each agent receive, produce, and pass forward? What evals cover the handoff quality? Keep this first pipeline deliberately simple -- two agents, one handoff. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| First eval harness exists and produces a scored result | End of Month 4 | Harness runs, produces pass/fail, results are stored |
| CAT pipeline runs automatically on prompt or model changes | End of Month 5 | CI/CD log shows evals running on a recent change |
| Authority matrix documented for all target workflows | End of Month 5 | Document exists; implemented in at least one workflow |
| Drift monitoring operational with defined thresholds | End of Month 6 | Alert configuration exists; at least one drift check has run |
| Three eval harnesses exist covering initial target workflows | End of Month 6 | Three harnesses in repository with documented evaluation strategies |
| First multi-agent workflow designed | End of Month 6 | Design document reviewed by AI Engineer and Tech Lead |
| PMs trained on behavioral specification and efficacy thresholds | End of Month 6 | PMs can write measurable acceptance criteria for AI workflows |
| QA co-owns at least one eval harness | End of Month 6 | QA-defined evaluation criteria present in at least one harness |
| Design standards encoded as verifiable eval criteria for at least one component area | End of Month 5 | Machine-verifiable design specifications committed to repository |

### Common Obstacles

- **Eval harnesses are built for perfect cases only.** Eval suites that test only happy paths detect nothing useful. Curate inputs that represent known-hard cases, edge inputs, and historically problematic scenarios. The value of an eval harness is proportional to the quality of its difficult cases.
- **CAT failures block deployment without informing improvement.** Failing evals that halt deployments without generating learning artifacts are a bottleneck, not a quality system. Every eval failure should produce a learning record: why did it fail? Regression or newly discovered gap? What changed?
- **Multi-agent design complexity escalates immediately.** The first multi-agent workflow should be deliberately constrained. Two agents with a clean handoff, not a five-agent pipeline. Complexity compounds quickly and produces eval coverage challenges that overwhelm teams that are still learning how to build harnesses.

---

## Month 6-12+: Deepen and Institutionalize

**Theme:** Make Zone 3 practices organizational norms rather than the work of a specialized team. Extend eval coverage. Implement portfolio-scale quality assessment at Level 4.

### Activities

| Activity | Owner | Duration | Description |
|---|---|---|---|
| **Expand CAT coverage across teams** | AI Engineer + Tech Leads | Month 7-10 | Extend the eval harness and CAT pattern to additional teams and workflows beyond the initial targets. Each team should have at least one workflow under automated evaluation. Establish a standard eval template to reduce the cost of adding new harnesses. The goal is coverage breadth, not just depth on the initial workflows. |
| **Implement Level 4: portfolio-scale evals** | AI Engineer | Month 8-12 | Level 4 of the "separate generation from decisioning" framework is automated quality assessment at scale. Build capability to run evals across the full portfolio of AI workflows on a regular cadence. The goal is organizational visibility: are AI workflows collectively improving, degrading, or drifting? This requires aggregated eval reporting, not just per-workflow dashboards. |
| **Establish AI cost governance** | Engineering Leadership + Finance | Month 7-9 | At Zone 3 scale, AI API costs are a significant line item. Establish budget accountability: which teams own which costs? What is the expected cost-per-unit-of-output for each workflow? What triggers a cost review? Integrate AI costs into engineering metrics alongside compute, storage, and labor costs. |
| **Run AI Engineer career development program** | VP Engineering / People | Month 8-12 | The AI Engineer identity needs a career path. Define what progression looks like: from Zone 2 practitioner to AI Engineer Associate to AI Engineer to Staff AI Engineer. Create the curriculum, mentorship structure, and evaluation criteria for each stage. This is how the organization builds a durable pipeline of people who can do this work. |
| **Conduct first external eval audit** | Third Party | Month 10-12 | Invite an external party -- another organization's AI engineers, an academic collaborator, or a consulting partner -- to review the eval harness design, coverage, and scoring validity. External review surfaces blind spots that internal teams cannot see. A team that has been inside a system long enough cannot assess its own coverage gaps reliably. |
| **Document institutional AI engineering practices** | AI Engineer Lead | Month 10-12+ | By Month 10-12, the organization has accumulated significant tacit knowledge about what makes AI workflows reliable. Convert this into explicit documentation: engineering standards for AI workflow design, eval coverage requirements, observability instrumentation standards, and the authority matrix governance model. This documentation is what makes Zone 3 practices durable through team turnover. |
| **Cross-role eval ownership** | AI Engineer Lead + PM + Design + QA | Month 8-12 | Eval harnesses should have cross-functional ownership: engineering owns pipeline infrastructure, QA owns evaluation criteria and failure mode taxonomy, PMs own efficacy thresholds, and designers own design-compliance criteria. Establish shared ownership models for at least 2-3 eval harnesses, ensuring that eval coverage reflects the full production pipeline -- not just engineering concerns. |

### Milestones

| Milestone | Target | How to Verify |
|---|---|---|
| All teams have at least one workflow under CAT | End of Month 10 | Eval harness inventory shows per-team coverage |
| Portfolio-scale eval reporting operational | End of Month 12 | Dashboard shows aggregated eval metrics across teams |
| AI cost governance policy in place | End of Month 9 | Budget accountability structure documented and active |
| AI Engineer career path defined and in use | End of Month 12 | Career path document published; at least one engineer is formally on it |
| External eval audit completed with findings triaged | End of Month 12 | Audit report exists; findings reviewed and assigned |
| Cross-functional eval ownership established for 2+ harnesses | End of Month 12 | Eval harnesses have documented ownership across engineering, QA, PM, and design |

### Common Obstacles

- **Portfolio-scale evals surface uncomfortable truths.** When eval results are aggregated across teams, some teams will show meaningfully worse outcomes than others. This is valuable information, but it requires leadership maturity to handle constructively rather than defensively. Establish norms for using eval data to help, not to rank or blame.
- **The AI Engineer career path is an afterthought.** Organizations that define the AI Engineer role without defining a career path for it will lose their best people to organizations that have. The career path work in this phase is not HR overhead -- it is retention infrastructure.
- **"We're too busy for an external audit."** External audits feel like overhead when teams are under delivery pressure. The organizations that most need external review of their eval coverage are the ones most confident they do not need it. Build the audit into the plan from Month 1, not as an optional add-on.

---

## Mid-Roadmap Planning Review (Month 6-9)

This transition spans 12-24 months. A roadmap built at the start of that journey will be wrong by Month 6. Plan a formal mid-roadmap review at the 6-9 month mark to assess whether the plan still reflects reality.

### What to Review

**Strategic context check.** Has the organization's reason for pursuing Zone 3 changed? New leadership, a strategic pivot, a merger, a downturn in AI capability investment, or competitive dynamics that have shifted can all change whether Zone 3 remains the right destination. If the answer is no, do not continue by momentum. Revisit the goal-setting decision with leadership and consider whether the organization is better served by deepening Zone 2 competency.

**Foundation quality check.** Is the Zone 2 competency that underpins this roadmap holding? Zone 3 infrastructure built on Zone 2 practices that are performed-but-not-habitual will produce brittle results. Re-administer the Zone 2 diagnostic component if there is any doubt. If Zone 2 competency is not actually present, pause Zone 3 work and re-establish the foundation before continuing.

**Progress-to-milestone ratio.** Are completed milestones proportional to elapsed time? A 6-month review that shows 4 months of expected progress is on track. A 6-month review that shows 1-2 months of expected progress signals a systemic problem — not a schedule problem. Investigate: Is the obstacle organizational capacity? Leadership support? Role definition? The non-determinism policy? Identify the root cause before extending the timeline.

**Velocity trend.** Is work accelerating or decelerating? Early Zone 3 work is often slow because the patterns are unfamiliar. This is expected. If velocity is still declining at Month 6 — not just slow, but getting slower — that is a warning sign that the team is struggling with something foundational, not just learning.

**Resistance assessment.** What proportion of engineers are actively engaged with the Zone 3 transition? What proportion are ambivalent? What proportion are actively resisting? For those resisting, what are their concerns? Distinguish between concerns about the transition design (pace, support, career path clarity) and general discomfort with change. If a significant number of engineers are raising concerns about the transition design, treat those concerns as legitimate design input and adjust the roadmap accordingly. If the AI Engineer role identity has not taken hold, the answer may not be "push harder" -- it may be "adjust the design to address the concerns being surfaced." See Piderit (2000) on the difference between resistance and ambivalence, and Ford et al. (2008) on treating resistance as data about the change design.

**Political dynamics assessment.** Zone 3 transitions redistribute organizational influence: roles that were previously central to delivery (senior developers, architects) may feel diminished, while new roles (AI Engineers, eval specialists) gain influence. Assess whether resistance patterns correlate with political position rather than purely personal comfort. Are senior engineers with significant organizational influence acting as blockers? Are middle managers concerned about their relevance in the new structure? Political dynamics do not make resistance illegitimate -- they explain why resistance persists even when concerns appear to have been addressed. If political factors are significant, the transition design may need to explicitly address how influence and career capital transfer to the new structure.

### When to Replan

Replan at the 6-9 month review if ANY of the following are true:

- The strategic rationale for Zone 3 has changed
- Zone 2 competency re-assessment shows significant erosion
- Fewer than 50% of expected milestones are complete
- The AI Engineer role identity has not taken hold — people nominally in the role are still primarily writing application code
- Budget or capacity constraints have materially changed since the roadmap was built
- A key technical assumption has proven false (the planned observability platform does not integrate with your stack; the planned eval framework doesn't support your use cases; the LLM economics have shifted enough to change the model)

### How to Replan

Replanning is not failure. A 12-24 month roadmap that is not revised at all is almost certainly stale. A productive replanning session covers:

1. **Confirm the destination is still correct.** If Zone 3 remains the right target, proceed. If the strategic context has changed, make a deliberate decision to return to Zone 2 deepening — and frame it as a strategic recalibration, not a retreat. A return-to-Zone-2 decision is a legitimate outcome of the mid-roadmap review: it means the organization has learned enough about the actual cost and complexity of Zone 3 to make a better-informed strategic choice. The facilitator should present this option without stigma, using the same decision factors from the [Goal-Setting Framework](/toolkit/goal-setting-framework) that informed the original target zone selection.
2. **Reset milestones from current state.** Do not "catch up" by removing milestones. Instead, rebuild the second half of the roadmap based on what you have actually learned in the first 6 months. Some work will take longer; some areas will prove easier than expected.
3. **Address any foundational gaps explicitly.** If the AI Engineer identity has not taken hold, add identity-building activities to the next phase rather than assuming it will resolve itself. If Zone 2 competency has eroded, add Zone 2 reinforcement work before continuing Zone 3 investment.
4. **Adjust leading indicators.** Indicators set at the start of the roadmap may not have proven predictive. Replace any indicator that has not moved even when the underlying behavior has progressed, or that has moved despite no underlying progress.
5. **Re-communicate to stakeholders.** Leadership should hear the replanning rationale and the revised timeline from the facilitator, not as a failure narrative but as an evidence-based adjustment. A facilitator who surfaces difficult mid-point truths is more valuable than one who reports on-track status until a late failure.

---

## Success Criteria for Zone 3 Competency

The organization has achieved Zone 3 competency when:

- [ ] AI workflows are the primary mechanism for producing production code across the engineering organization
- [ ] All significant AI workflows have eval harnesses running in CAT pipelines
- [ ] Prompt versioning is universal and non-negotiable -- no prompt changes outside version control
- [ ] The AI Engineer role identity is real: engineers in this role spend the majority of their time on process design, eval development, and observability -- not on writing application code
- [ ] Drift monitoring is operational and drift alerts are investigated within a defined SLA
- [ ] Authority matrices are documented and implemented for all production AI workflows
- [ ] Engineering leadership can answer "What is the current quality level of our AI-driven workflows?" from instrumentation data, not intuition
- [ ] AI cost is tracked, owned, and managed as a first-class engineering metric
- [ ] Zone 3 practices hold under pressure: evals are not bypassed, prompt versioning is not skipped, observability is not ignored when teams face deadline stress
- [ ] PMs define measurable efficacy thresholds and behavioral specifications for AI workflows as standard practice
- [ ] Designers have encoded key design standards as machine-verifiable specifications consumed by AI pipelines
- [ ] QA engineers co-own eval harness evaluation criteria and maintain the failure mode taxonomy
- [ ] Eval harnesses have cross-functional ownership (engineering: pipeline infrastructure, QA: evaluation criteria, PM: efficacy thresholds, design: design-compliance criteria)

If all criteria are met and the organization's strategic context warrants it, assess competency for Zone 4 using the [Zone 3 to Zone 4 Roadmap](/toolkit/zone-3-to-4). Zone 4 represents the next step in the progression and requires evaluating whether that deeper investment is justified using the same strategic analysis framework applied at every zone transition.

---

## Leading Indicators

Track these during the roadmap to detect progress or stalls early:

| Indicator | What It Signals | How to Measure |
|---|---|---|
| Number of workflows under CAT coverage | Eval infrastructure is scaling | Harness inventory |
| Eval pass rate trend over time | Whether AI workflow quality is improving | CAT pipeline reports |
| Drift alert response time | Whether drift monitoring is operationally real | Incident log or on-call records |
| Prompt change review cycle time | Whether prompt versioning is lightweight enough to sustain | PR metrics on prompt repository |
| AI cost per unit of output | Whether AI workflows are becoming more efficient | Cost dashboard normalized by output volume |
| Proportion of engineers with AI Engineer identity | Whether the role shift is taking hold | Engineering org chart, role self-identification survey |
| External eval audit findings severity | Whether internal quality assurance has blind spots | Audit report |

---

## Related Documentation

- [Zone 3: Accelerating](/toolkit/zone-3-accelerating) -- Full zone reference
- [Zone 1 to Zone 2 Roadmap](/toolkit/zone-1-to-2) -- Previous roadmap in the progression
- [Zone 3 to Zone 4 Roadmap](/toolkit/zone-3-to-4) -- Next roadmap in the progression
- [Engagement Model](/toolkit/engagement-model) -- How this roadmap fits into the consulting engagement
