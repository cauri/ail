---
title: "Goal-Setting Framework: Choosing a Target Zone"
description: "This framework helps organizations choose their target zone after completing the ACE diagnostic."
section: "consulting"
order: 2
---
This framework helps organizations choose their target zone after completing the ACE diagnostic. It is designed to be structured enough for a non-expert facilitator to use and rigorous enough to prevent organizations from selecting zones based on aspiration rather than strategic analysis.

---

## When to Use This Framework

Use this framework during Phase 3 (Goal Setting & Roadmap) of an ACE engagement, after the diagnostic results are available and before roadmap creation begins. The primary audience is organizational leadership -- CTO, VP Engineering, Engineering Directors, and business leaders who have budget and structural authority.

This framework does not replace facilitated discussion. It structures that discussion so that the target zone decision is grounded in evidence rather than enthusiasm.

---

## Decision Factors

Five factors determine which target zone is appropriate for an organization. Each factor should be evaluated explicitly during the goal-setting session. No single factor is decisive; the target zone emerges from the interaction of all five.

### 1. Risk Appetite

Zone transitions involve progressively deeper organizational change. Zones 1 and 2 involve additive changes -- adding tools, practices, and standards. Zone 3 involves structural changes -- redefining roles, restructuring teams. Zone 4 involves cultural transformation -- redefining the identity of engineering itself. Risk increases along the progression.

Questions to assess risk appetite:

- Has the organization successfully executed structural change in the past 2-3 years (reorg, new development methodology, significant process change)?
- How does leadership respond when investments take longer than planned to produce results? Is there patience for 12-24 month transformation timelines?
- What is the organization's tolerance for a temporary productivity dip during transitions? (Zone 3 typically involves a learning curve where throughput decreases before it increases.)
- Are there regulatory or contractual constraints that limit how radically engineering practices can change?

**Low risk appetite:** Target Zone 2 with deep competency. Invest in making Zone 2 practices excellent rather than pursuing structural transformation.

**Moderate risk appetite:** Target Zone 2 as a near-term goal; evaluate Zone 3 competency after achieving Zone 2 competency.

**High risk appetite:** Zone 3 is a viable target if other factors align. Zone 4 should only be considered by organizations with demonstrated tolerance for multi-year, high-uncertainty investments.

### 2. Investment Capacity

Each zone transition requires specific organizational investments. The cost is not just financial (tool licenses, training programs) but also temporal (time allocated to building new practices) and political (leadership attention, organizational change management).

| Zone Transition | Financial Investment | Time Investment | Political Capital Required |
|---|---|---|---|
| Zone 0 to 1 | Low (tool licenses, basic training) | 1-3 months | Low (enabling, not restructuring) |
| Zone 1 to 2 | Moderate (tool standardization, workflow training, infrastructure) | 3-6 months | Moderate (requires team-level process change) |
| Zone 2 to 3 | High (new roles, infrastructure, experimentation budget) | 12-24 months | High (requires structural change, role redefinition) |
| Zone 3 to 4 | Very High (proprietary infrastructure, specialized talent) | 2-5 years | Very High (requires executive-level commitment, sustained over years) |

Questions to assess investment capacity:

- What budget is available specifically for AI adoption initiatives (not just tool licenses, but training, infrastructure, and dedicated improvement time)?
- Can teams be given protected time for building new practices, or is all engineering time allocated to feature delivery?
- Is leadership willing to create new roles or modify existing role definitions?
- Is there organizational change management capacity (internal or external) to support the transition?

**Limited capacity:** Target Zone 1 or Zone 2, focusing on investments with the fastest time-to-value.

**Moderate capacity:** Target Zone 2 with a realistic timeline and explicit investment commitments.

**Significant capacity:** Zone 3 is feasible if strategic need justifies it and Zone 2 foundations are solid.

### 3. Strategic Need

The right target zone is the one that serves the organization's strategic position. Not every organization benefits from the same level of AI integration.

Questions to assess strategic need:

- Is software development a core competency that differentiates the organization, or a supporting function?
- Are competitors visibly gaining advantage from AI-augmented development?
- Does the organization's product roadmap require development velocity that current practices cannot sustain?
- Are customers or market conditions creating pressure for faster delivery, higher quality, or AI-native product features?
- Would AI-augmented development create a defensible competitive advantage, or merely keep pace with industry baseline?

**Software as supporting function:** Zone 2 is likely the appropriate target. The organization needs AI-augmented development to be efficient and reliable, not transformative.

**Software as core competency in a competitive market:** Zone 3 merits serious evaluation. The throughput and quality gains from AI-driven development may be competitively necessary.

**AI-adjacent or AI-native product:** Zone 3 is likely necessary; Zone 4 may be appropriate for market leaders willing to invest in proprietary AI development infrastructure.

### 4. Current Zone and Competency Stage

The diagnostic establishes the starting point. Target zones must be realistic given where the organization is today.

**General progression guidelines:**

| Current State | Realistic Near-Term Target | Timeline |
|---|---|---|
| Zone 0 | Zone 1 | 1-3 months |
| Zone 1, Learning stage | Zone 1 Competent, then Zone 2 | 3-6 months to Zone 1 Competent, 6-9 months to Zone 2 |
| Zone 1, Competent stage | Zone 2 | 3-6 months |
| Zone 2, Learning stage | Zone 2 Competent | 3-6 months |
| Zone 2, Competent stage | Zone 2 Deep Competency or Zone 3 | 6-12 months (Zone 2 deep) or 12-24 months (Zone 3) |
| Zone 3, Learning stage | Zone 3 Competent | 12-18 months |

**Do not skip zones.** Organizations at Zone 0 should not target Zone 3. Organizations at Zone 1 Learning should not target Zone 2 Competent on an aggressive timeline. Each zone builds on the habits and infrastructure of the previous zone, and attempting to skip stages produces fragile capabilities that collapse under pressure.

### 5. Team Competency

Zone 3 requires that Zone 2 practices are not just present but competent -- habitual under pressure, consistently applied, and continuously improving. Teams that have recently achieved Zone 2 scores in the Learning stage are not ready for Zone 3 investment.

Questions to assess team competency:

- Do teams maintain their Zone 2 practices (Plan/Code/Verify, shared AI configuration, mandatory feedback loops) under deadline pressure, or do these practices degrade when things get hard?
- Have teams been iterating on their agentic setup in retrospectives, or has the setup been static since initial configuration?
- Is code review of AI-generated output rigorous and consistent, or does it vary by reviewer?
- Are teams measuring the impact of their AI practices, or relying on anecdotal evidence?

**Not ready for Zone 3:** If Zone 2 practices degrade under pressure, invest in deepening Zone 2 competency rather than pursuing Zone 3.

**Ready for Zone 3:** If Zone 2 practices are durable, iteratively improving, and the team is bumping up against the ceiling of what Zone 2 practices can deliver, Zone 3 investment is appropriate.

---

## Decision Matrix

The following matrix maps organizational profiles to likely appropriate target zones. This is a starting point for discussion, not a prescription. Every organization has unique factors that may override these general patterns.

| Organizational Profile | Typical Current State | Likely Appropriate Target | Rationale |
|---|---|---|---|
| **Small consultancy / agency** (5-30 developers) | Zone 0-1 | Zone 2 | Consistent team practices provide reliable delivery; structural transformation of Zone 3 is not justified at this scale |
| **Mid-size product company** (30-100 developers, competitive market) | Zone 0-2 | Zone 2-3 | Competitive pressure may justify Zone 3; assess whether product roadmap demands exceed Zone 2 throughput capacity |
| **Enterprise with compliance constraints** (regulated industry, audit requirements) | Zone 0-1 | Zone 2 | Regulatory requirements may limit the structural changes Zone 3 requires; deep Zone 2 competency with strong verification practices serves compliance needs |
| **AI-native startup** (product built on AI capabilities) | Zone 1-2 | Zone 3-4 | AI is the core product; development practices must match the product's level of AI sophistication |
| **Large enterprise** (500+ developers, multiple product lines) | Mixed across teams | Zone 2 baseline, Zone 3 for select teams | Standardize on Zone 2 across the organization; invest in Zone 3 for teams where the leverage justifies it |
| **Government / defense contractor** | Zone 0-1 | Zone 2 | Security and compliance constraints favor systematic, auditable practices (Zone 2 strengths) over structural transformation |
| **Developer tools / platform company** | Zone 1-2 | Zone 3 | Engineering excellence is the product's brand promise; customers expect AI-native practices |
| **Non-tech company with internal software team** | Zone 0 | Zone 1-2 | Software supports the business; AI adoption should improve efficiency without organizational disruption |

---

## Zone Selection Questions

Use these questions during the leadership goal-setting session to help decision-makers articulate their target zone. The facilitator presents each question, captures the discussion, and maps responses to the decision factors above.

### Strategic Alignment

1. **What role does software development play in our competitive strategy?** Is it a core differentiator, an important enabler, or a cost center? The answer frames how much transformation is strategically warranted.

2. **What would we do with 2x-3x engineering throughput?** If the answer is "we have more than enough capacity," Zone 2 is likely sufficient. If the answer is "we have a massive backlog and competitive pressure to deliver faster," Zone 3 merits evaluation.

3. **Are our competitors gaining visible advantage from AI-augmented development?** If yes, what specifically are they doing that we are not? This grounds the discussion in observable competitive reality rather than abstract ambition.

### Risk and Change Capacity

4. **What is the largest organizational change we have successfully executed in the past 3 years?** The answer reveals the organization's actual change capacity, which is a better predictor than aspiration.

5. **If this investment takes 18 months to show full results, will leadership still support it?** Zone 3 requires sustained investment through a learning curve. Organizations that need quick wins should focus on Zone 2.

6. **Are we willing to change engineering role definitions, career ladders, and performance criteria?** If the answer is "not really," Zone 3 is not appropriate regardless of other factors. The AI Engineer role transition is not optional for Zone 3.

7. **What happens in our organization when a strategic initiative encounters its first significant setback?** Organizations that abandon initiatives at the first difficulty will not sustain Zone 3 investment. Zone 2 deep competency is a more reliable target.

### Current Capability

8. **Do our teams currently maintain their AI development practices under deadline pressure?** If practices degrade under stress, the teams are not yet consistent at their current zone. Invest in deepening current practice before targeting a higher zone.

9. **Do our teams have regular retrospectives specifically about their AI development workflow?** If not, Zone 2 habits are not yet self-improving, which means they are not yet mature enough to serve as a foundation for Zone 3.

10. **Can our engineering managers describe what "good AI-augmented development" looks like on their team?** If leadership cannot articulate current AI practices, they cannot effectively support further investment.

### Investment Willingness

11. **What budget are we prepared to allocate specifically to AI development capability building (beyond tool licenses)?** The answer reveals whether the organization is serious about investment or hoping AI adoption will happen organically.

12. **Can we give teams 10-20% of their time for AI practice improvement, protected from feature delivery pressure?** Without protected time, teams cannot build new habits. This is a non-negotiable investment for any zone transition.

13. **Are we willing to invest in infrastructure (CI/CD changes, observability tooling, eval frameworks) to support AI integration?** Zone 2 requires feedback loop infrastructure; Zone 3 requires eval and observability infrastructure. Both cost money and engineering time.

### Destination Clarity

14. **If we achieve our target zone, what will be different about how we deliver software in 12 months?** The answer should be concrete and specific. Vague answers ("we'll be more productive") suggest the organization has not yet thought clearly about what it wants.

15. **What is the minimum zone that addresses our strategic needs?** This question deliberately pushes against the "higher is better" bias. The right zone is the lowest zone that serves the organization's actual strategic requirements.

---

## Investment Case Template

Use the following template to build a business case for each zone transition. This template can be included in proposals, internal planning documents, or board presentations.

### Zone Transition: [Current Zone] to [Target Zone]

**Strategic Rationale**

Why this transition serves the organization's competitive position, delivery needs, or strategic goals. Reference specific findings from the diagnostic and competitive analysis.

**Expected Benefits**

List 3-5 specific, measurable benefits that the organization expects to realize. Each benefit should include:
- What will improve (metric or observable behavior)
- By how much (quantified where possible, qualified where not)
- Over what timeframe
- How it will be measured

Example: "Reduce average PR review time from 2 days to same-day by implementing mandatory AI feedback loops. Measured by PR cycle time metrics in GitHub/GitLab. Expected within 3 months of adoption."

**Required Investments**

| Investment Category | Specific Investment | Estimated Cost | Timeline |
|---|---|---|---|
| Tooling | [e.g., AI tool licenses for all team members] | [amount or range] | [when needed] |
| Training | [e.g., Plan/Code/Verify workflow training] | [amount or range] | [when needed] |
| Infrastructure | [e.g., CI/CD pipeline modifications for feedback loops] | [amount or range] | [when needed] |
| Time Allocation | [e.g., 15% of sprint capacity for AI practice building] | [opportunity cost] | [duration] |
| Organizational Change | [e.g., Updated role descriptions for AI Engineer] | [effort estimate] | [when needed] |

**Risk Assessment**

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Teams revert to old practices under pressure | Medium-High | Delays competency achievement | Regular re-diagnostics, leadership reinforcement, retrospective culture |
| Tool costs exceed budget | Low-Medium | Budget pressure | Quarterly cost review, usage optimization |
| Key champions leave the organization | Medium | Slows adoption momentum | Distribute AI expertise broadly, avoid single-point-of-failure |
| [Additional risks specific to this organization] | | | |

**Timeline and Milestones**

| Milestone | Target Date | Success Criteria | Leading Indicators |
|---|---|---|---|
| [First milestone] | [date] | [what it looks like when achieved] | [early signals of progress] |
| [Second milestone] | [date] | [what it looks like when achieved] | [early signals of progress] |
| [Competency check / re-diagnostic] | [date] | [specific score or behavioral threshold] | [behavioral observations] |

**Decision Point**

At [date], the organization will assess progress against milestones and decide whether to:
- Continue the current plan
- Adjust the timeline or approach
- Escalate investment
- Revise the target zone

This decision point ensures that zone targeting remains a living strategic decision rather than a fixed commitment.

---

## Common Pitfalls in Zone Selection

**Targeting Zone 3 because it sounds impressive.** Zone 3 requires structural organizational change. If the strategic analysis does not justify that change, deep Zone 2 competency is a better investment. Prestige is not a valid reason to pursue a zone.

**Underestimating the investment required for Zone 2.** Zone 2 involves real organizational change: shared configurations, mandatory quality gates, protected improvement time, and retrospective culture. Organizations that treat Zone 2 as "just standardize what we're already doing" underinvest and stall.

**Setting different target zones for different teams without organizational alignment.** If Team A targets Zone 3 but the CI/CD infrastructure, role definitions, and management practices remain Zone 1-level, Team A cannot achieve its target. Organizational investments must align with team targets.

**Confusing individual enthusiasm with organizational competency.** A few highly skilled AI users do not make an organization ready for Zone 3. Competency is about collective, habitual behavior -- the diagnostic measures this, and the goal-setting session should respect what the diagnostic reveals.

**Ignoring the "competent under pressure" criterion.** An organization whose Zone 2 practices work on good days but collapse under deadline pressure has not achieved Zone 2 competency. Targeting Zone 3 from this position will produce fragile results. Invest in making current-zone practices durable before progressing.

---

## Related Documentation

- [Engagement Model](/toolkit/engagement-model) -- How this framework fits into the overall consulting engagement
- [Progressive Competency Model](/toolkit/progressive-competency-model) -- How zone progression works and why organizations choose their stopping point
- [Roadmap Templates](roadmap-templates/) -- Phased progression plans for each zone transition
- [Investment Catalog](/toolkit/investment-catalog) -- Full catalog of investments by zone; use alongside this framework when building the investment commitment list
- [How to Choose a Target Zone](/toolkit/choose-target-zone) -- Step-by-step guide for the zone selection decision
- [Metrics Tree](/toolkit/metrics-tree) -- The North Star metric and leading indicators that help evaluate whether a chosen target zone is being pursued effectively
