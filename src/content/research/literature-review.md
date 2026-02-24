---
title: "Literature Review: AI in Software Production"
description: "Review of the current state of research and evidence on AI-augmented software production, grounding the ACE zone definitions in observable reality."
order: 1
---

This document reviews the current state of research and evidence on AI-augmented software production, grounding the ACE zone definitions in observable reality. It covers industry adoption patterns, productivity evidence, team-level integration, role transformation, and emerging signals for AI-first ways of working.

ACE addresses AI adoption across all crafts involved in software production -- engineering, product management, design, quality assurance, DevOps, documentation, and other disciplines. However, the published research to date is heavily skewed toward coding and developer-focused use cases. This literature review reflects that skew: most cited studies examine AI coding tools and developer productivity. Where evidence exists for broader software production roles, it is included. The gaps in research on non-coding AI adoption are themselves a significant finding.

This is a narrative literature review, not a systematic review or peer-reviewed paper. Studies were identified through the authors' professional knowledge, targeted searches, and relevant citation chains rather than through a systematic search protocol with predefined inclusion/exclusion criteria. Where research exists, it is cited. Where evidence is emerging or speculative, that is stated explicitly. The goal is intellectual honesty about what we know, what we suspect, and what remains to be validated. A systematic review of AI adoption measurement would strengthen the evidence base and is recommended as future work.

**A note on source types and evidence-level markers.** This review cites a mix of peer-reviewed publications (e.g., Peng et al., 2023; Perry et al., 2023; Forsgren, Humble, & Kim, 2018), pre-prints (e.g., arXiv papers that have not completed peer review), and non-peer-reviewed sources including company research reports (GitHub, 2024; Uplevel, 2024; GitClear, 2024), industry surveys (Stack Overflow, 2024; JetBrains, 2024), blog posts (Beck, 2024; Swyx, 2023), and product documentation (Anthropic, 2024). Non-peer-reviewed sources are included because the field is evolving faster than the peer-review cycle, and significant practitioner knowledge exists only in these forms. However, readers should calibrate their confidence accordingly: findings from controlled peer-reviewed studies warrant more weight than findings from company whitepapers or practitioner blog posts, which may reflect selection bias, commercial interest, or limited generalizability.

To help readers calibrate confidence at the claim level, key findings throughout this review are marked with evidence-level tags:
- **[Validated]** -- Supported by peer-reviewed research with appropriate methodology
- **[Emerging]** -- Supported by pre-prints, industry reports, or practitioner surveys that have not undergone peer review
- **[Expert judgment]** -- Based on practitioner observation, blog posts, or framework author experience

**A note on temporal limitations.** An additional limitation of this evidence base is temporal. The field is evolving faster than the research cycle; several foundational studies (e.g., Peng et al., 2023; Perry et al., 2023) measured earlier-generation AI coding tools (inline code completion) rather than the agentic AI tools that currently define the Zone 1-3 tool landscape. Their findings regarding productivity gains, quality risks, and usage patterns may not transfer directly to agentic tools, which have qualitatively different interaction models. Where possible, this review distinguishes between evidence from inline-completion-era studies and evidence from agentic-tool-era practitioner reports.

### Framework Lineage

ACE's zone-based progression model draws on a lineage of capability frameworks including CMMI (staged maturity), the DORA research program (organizational capability measurement), and the Agile Fluency Model (Larsen & Shore, 2012), which demonstrated that team capability is best understood as habitual practice under pressure rather than knowledge or best-day performance. From CMMI, ACE borrows the staged progression structure but explicitly rejects two of its assumptions: that higher stages are universally better (ACE treats Zone 2 as the appropriate target for many organizations) and that process compliance is the primary indicator of maturity (ACE measures behavioral competency rather than documented process adherence). ACE applies this insight to AI adoption specifically, with a diagnostic instrument, engagement model, and domain content designed for the distinct challenges of organizational AI integration.

---

## Section 1: Current State of AI Adoption in Software Development (2024-2025)

### Industry Adoption Rates

AI coding tool adoption accelerated dramatically between 2023 and 2025. GitHub reported that GitHub Copilot reached over 1.8 million paid subscribers by early 2024, with adoption growing across enterprise and individual segments **[Emerging]** (GitHub, 2024). Stack Overflow's 2024 Developer Survey found that approximately 76% of developers reported using or planning to use AI tools in their development workflow, up from 70% the previous year **[Emerging]** (Stack Overflow, 2024).

However, adoption rates mask significant variation in usage depth. A 2024 study by Uplevel, analyzing engineering metrics across multiple organizations, found that while AI tool licensing was widespread, consistent daily usage was concentrated among a subset of developers **[Emerging]** (Uplevel, 2024). Many organizations reported a pattern where 20-30% of developers accounted for 60-70% of AI tool usage -- a distribution consistent with the ACE observation that individual enthusiasm is often confused with organizational capability.

JetBrains' 2024 State of Developer Ecosystem survey corroborated this pattern, finding that while most developers had tried AI coding tools, regular daily use was reported by a smaller proportion, with many developers describing their usage as "occasional" or "for specific tasks only" (JetBrains, 2024).

### Tool Landscape

The AI tool landscape for software production by late 2025 spans multiple crafts, though coding tools dominate market attention and research:

**Engineering-focused tools:**
- **Inline code completion:** GitHub Copilot, Cursor, Windsurf (formerly Codeium), Amazon Q Developer (formerly CodeWhisperer), Tabnine, Supermaven
- **Chat-based coding assistants:** Claude Code (Anthropic), ChatGPT/Codex (OpenAI), Gemini Code Assist (Google), Aider, OpenCode
- **IDE-integrated AI:** Cursor (AI-native IDE), Windsurf, JetBrains AI Assistant, Visual Studio IntelliCode
- **Code review and quality:** CodeRabbit, Codacy AI, GitHub Copilot for PRs

**Cross-craft and non-coding tools:**
- **General-purpose AI:** Claude, ChatGPT, Gemini -- used across all crafts for research, analysis, writing, and problem-solving
- **Design:** Figma AI, AI-assisted prototyping and design systems tools
- **Product management:** AI-assisted requirements analysis, backlog refinement, user story generation, and competitive research
- **Quality assurance:** AI-assisted test generation, test case design, exploratory testing support, and defect analysis
- **Documentation:** AI-assisted technical writing, API documentation generation, and knowledge base management
- **Project coordination:** AI-assisted estimation, retrospective analysis, and dependency mapping

The trend from 2024 to 2025 has been a shift from passive assistance toward agentic AI tools that can execute multi-step tasks with greater autonomy. In engineering, Claude Code, Cursor's agent mode, and similar tools represent a qualitative shift from "autocomplete" to "collaborator." Parallel shifts are emerging across other crafts, though less documented. These trends correspond to the transition from Zone 1 to Zone 2 in the ACE framework.

### Individual vs. Team vs. Organizational Adoption Patterns

Research consistently shows that AI tool adoption follows an individual-first pattern **[Validated]** (Barke et al., 2023). Practitioners across crafts adopt tools based on personal curiosity and perceived productivity benefit, often before their organization has established policies, training, or shared practices. This pattern is best documented among developers but is observable in product management, design, and QA as well.

This individual-first adoption creates what the ACE framework calls the "Zone 1 ceiling" -- a state where many individuals use AI tools effectively but the team's processes, quality standards, and delivery workflows have not changed. McKinsey's 2024 technology report noted that organizations with high individual AI adoption but low process integration reported smaller productivity gains than expected, suggesting that individual tool use without workflow integration yields diminishing returns **[Emerging]** (McKinsey, 2024).

Organizational adoption -- where AI is integrated into team processes, workflows, and shared practices across crafts -- remains less common. A 2024 survey by GitLab found that only 25% of organizations reported having formal AI development policies, and fewer than 15% had integrated AI into their CI/CD or code review workflows at a team level (GitLab, 2024). The gap is likely wider for non-engineering crafts, where formal AI adoption policies are even rarer. This gap between individual adoption and organizational integration is precisely the problem ACE addresses.

### Barriers to Adoption

Research identifies several consistent barriers to AI adoption in software development:

1. **Security and data privacy concerns.** Organizations are cautious about proprietary code being sent to AI services. A SANS Institute survey found that data leakage was the top concern among engineering leaders evaluating AI coding tools (SANS, 2024).

2. **Quality and trust concerns.** Practitioners report uncertainty about the quality of AI-generated output, whether code, designs, test plans, or requirements documents. In engineering specifically, concerns focus on complex logic, security-sensitive code, and domain-specific implementations (Vaithilingam et al., 2022; Liang et al., 2024).

3. **Policy ambiguity.** Organizations that have not established clear policies on AI tool usage create an environment where risk-averse practitioners avoid tools entirely (GitLab, 2024).

4. **Licensing and intellectual property.** Concerns about the IP status of AI-generated code remain a barrier, particularly in regulated industries (Lemley & Casey, 2024).

5. **Organizational inertia.** Established workflows, review processes, and team norms across all crafts resist integration of new tools, even when individual practitioners find them valuable (McKinsey, 2024).

---

## Section 2: Evidence for Zone 1 -- Individual Impact

*Note: Published productivity research focuses almost exclusively on engineering tasks. Evidence for AI's impact on individual productivity in product management, design, QA, and other software production crafts remains largely anecdotal. This is a significant gap that future research should address.*

### Productivity Gains for Individuals

The most-cited study on AI coding productivity is GitHub's controlled experiment on Copilot **[Emerging]** (Peng et al., 2023; arXiv preprint, not yet peer-reviewed at time of writing), which found that developers using Copilot completed a benchmark coding task 55% faster than those without it. This study, while frequently referenced, has important limitations: it measured a specific, well-defined task (writing an HTTP server) rather than the full range of software development activities, and the participants were not using Copilot in their normal workflow but in an experimental setting.

A more naturalistic study by Google **[Emerging]** (Tabachnyk & Nikolov, 2022) analyzed internal usage of an ML-based code completion tool and found that accepted code completions saved developers an estimated 6% of coding keystrokes, with the benefit concentrated in repetitive and boilerplate code patterns. This more modest finding is consistent with the ACE expectation that Zone 1 benefits are primarily in acceleration of routine tasks.

Uplevel's 2024 analysis of engineering metrics across organizations using AI tools found mixed results: some teams showed measurable velocity improvements, while others showed no statistically significant change. The key differentiator appeared to be usage consistency -- teams where AI tool usage was habitual showed benefits, while teams with sporadic usage did not (Uplevel, 2024). This finding directly supports the ACE emphasis on competency (habitual behavior) over mere knowledge or occasional use.

Microsoft Research **[Validated]** (Ziegler et al., 2024) published a study on developer productivity with AI assistants that found productivity gains were real but variable, depending on task type, developer experience, and the quality of the AI model. The study also noted that developers needed 2-4 weeks to develop effective usage patterns, consistent with the ACE Zone 1 timeline of 1-3 months to habitual use.

### Code Quality With and Without AI

Evidence on code quality is more mixed. A 2023 Stanford study **[Validated]** (Perry et al., 2023) found that developers using AI coding assistants produced code with more security vulnerabilities than those without, and -- concerningly -- felt more confident about their code's security despite the increased vulnerability rate. This highlights the importance of the ACE proficiency requiring developers to "review and understand AI-generated code before accepting it."

Conversely, a 2024 study by Sonatype found that organizations using AI coding tools with integrated static analysis and security scanning (i.e., with feedback loops) showed comparable or improved security posture versus manual development **[Emerging]** (Sonatype, 2024). The difference appears to be whether AI-generated code is subject to systematic quality checks -- a Zone 2 practice.

GitClear's 2024 analysis of code quality metrics across repositories using AI tools found an increase in "code churn" (code that is rewritten or deleted shortly after being written), suggesting that AI-generated code may require more iteration to reach production quality **[Emerging]** (GitClear, 2024). This is consistent with the ACE view that AI-generated code is a "draft from a capable but fallible collaborator" requiring review.

### Habitual vs. Occasional Use Differences

Limited formal research exists on the difference between habitual and occasional AI tool use, but several studies provide indirect evidence. Mozannar et al. (2024) studied how developers learn to use AI code assistants over time and found that experienced AI users developed more effective strategies for when to accept, reject, or modify AI suggestions **[Validated]**. This learning curve supports the ACE distinction between Zone 0 (no use), early Zone 1 (experimental use), and Zone 1 competency (habitual, effective use). While this study focused on coding, the pattern of skill development through consistent practice likely applies across crafts.

Anecdotal evidence from developer surveys and conference talks consistently reports that the productivity benefit of AI tools increases with consistent use. Practitioners who use AI tools daily report higher satisfaction and larger perceived productivity gains than those who use them sporadically (Stack Overflow, 2024; JetBrains, 2024). Informal reports from product managers and designers describe a similar pattern: AI becomes significantly more useful once practitioners develop habits around when and how to use it.

---

## Section 3: Evidence for Zone 2 -- Team-Level Integration

### Systematic vs. Ad-Hoc AI Tool Use

Research on team-level AI integration is significantly less developed than research on individual use. Most studies focus on individual practitioner interactions with AI tools -- overwhelmingly in coding contexts -- leaving a gap in understanding how cross-functional teams systematically integrate AI into shared workflows across crafts.

The closest analog in existing literature comes from DevOps research. The DORA (DevOps Research and Assessment) program has demonstrated over multiple years that team-level practices (CI/CD, automated testing, trunk-based development) produce measurable improvements in delivery performance **[Validated]** (Forsgren et al., 2018; DORA, 2024). By analogy, the ACE prediction is that team-level AI practices (shared configuration, mandatory feedback loops, Plan/Code/Verify workflow) will produce similarly measurable improvements over ad-hoc individual use **[Expert judgment]**. It is worth noting that DORA's cluster findings were based on survey data from thousands of respondents across multiple years, while ACE's planned validation will operate at substantially smaller sample sizes; any cluster evidence from ACE's initial studies should be treated as preliminary rather than definitive.

**Important limitation of this analogy:** DORA's key metrics (deployment frequency, lead time for changes, change failure rate, time to restore service) are verifiable against objective data sources -- deployment logs, incident records, commit timestamps. ACE's diagnostic primarily measures self-reported behavior, which has a different validity profile. The strength of self-report is that it captures behavioral nuance (especially under-pressure behavior) that objective metrics miss. The limitation is that self-report is subject to reporting biases (social desirability, conformity pressure) that objective metrics are not.

This limitation is especially relevant for Zone 2 constructs like "shared agentic workflow" and "team-level AI integration," which are harder to operationalize than DORA's deployment-oriented metrics. A team can have a shared AGENTS.md file committed to source control (objectively verifiable) while individual team members rarely consult or update it (behaviorally inoperative). Self-report that the team "follows its shared agentic workflow" may reflect aspiration or social conformity rather than observed practice. The [Validation Study Plan](/research/validation-study-plan) addresses this through convergent validation: comparing self-reported diagnostic scores against independent behavioral observation and objective artifacts. Specifically, the validation plan employs r<sub>wg</sub> analysis for within-team agreement on self-report items, behavioral observation sessions with inter-observer agreement targets to assess whether reported practices are enacted, and objective artifact review -- repository commit history for AI configuration files, CI/CD logs for feedback loop enforcement, and PR records for Plan/Code/Verify evidence. Where self-report and objective evidence diverge, the divergence itself is an important diagnostic finding.

Preliminary evidence supports this prediction. Organizations that have adopted team-level AI conventions -- such as shared prompt libraries, standardized code review processes for AI-generated code, and CI-integrated quality checks -- report more consistent and measurable productivity gains than organizations where AI use is purely individual **[Emerging]** (McKinsey, 2024; Thoughtworks Technology Radar, 2024).

### Team-Level AI Workflow Practices

The concept of shared AI configuration (AGENTS.md, CLAUDE.md) as a team-level artifact is relatively new, emerging primarily in 2024-2025 with the adoption of agentic AI tools like Claude Code and Cursor. Formal research on this practice is limited, but early practitioner reports describe significant benefits:

- **Reduced AI skill variance across team members.** When the AI configuration encodes project context and coding standards, less experienced AI users produce output closer to the team's quality standards (Anthropic, 2024 -- documentation and user reports).
- **Faster onboarding.** New team members benefit from the accumulated project context in the shared configuration, reducing the time to productivity.
- **Consistent code style and conventions.** AI tools configured with project-specific standards produce more consistent output across team members.

Thoughtworks included "AI-assisted software development lifecycle" and "AI team coding assistants" as notable entries in their 2024 Technology Radar, signaling that team-level AI integration is moving from early adoption to mainstream awareness (Thoughtworks, 2024). Notably, team-level integration in the ACE sense extends beyond engineering -- it includes shared AI practices for how teams handle requirements refinement, design iteration, test strategy, and documentation, not only code production.

### Shared AI Configuration

The practice of maintaining AI configuration in version control is an emerging convention without formal research validation. However, it builds on well-established software engineering practices: configuration as code, infrastructure as code, and the general principle that team agreements should be explicit and versioned.

The ACE framework's emphasis on shared AI configuration as a Zone 2 requirement reflects practitioner consensus rather than formal research. Validation of this practice's effectiveness is an area requiring further study (see [Validation Study Plan](/research/validation-study-plan)).

---

## Section 4: Evidence for Zone 3 -- Role Transformation

*Note on evidence level: Zone 3 represents a prediction of the ACE framework with limited formal research validation. The shift from "practitioner who uses AI" to "AI-augmented practitioner who specifies and verifies" is supported by emerging practitioner reports but not by formal empirical studies. The following evidence is early-stage; it does not yet constitute validation of Zone 3 practices or outcomes.*

### The "AI Engineer" Role Emergence

The concept of an "AI Engineer" -- a practitioner whose primary skill is architecting solutions around AI capabilities rather than performing traditional craft work directly -- has emerged as a practitioner-driven concept rather than a research-validated role **[Expert judgment]** (Swyx, 2023). Swyx coined the term in an engineering context and described the role shift from "writing code" to "orchestrating AI systems," a framing that aligns with the ACE Zone 3 description. Analogous shifts are beginning to appear in other crafts: product managers who use AI to rapidly generate and evaluate product strategy alternatives, designers who use AI to explore design spaces more broadly, and QA professionals who use AI to generate comprehensive test strategies.

By 2024-2025, job postings for roles explicitly described as "AI Engineer" or "AI-augmented" practitioner roles began appearing, though the role definition varies significantly across organizations. In engineering, some use "AI Engineer" to mean ML/AI model development; others use it closer to the ACE meaning of a practitioner who works primarily through AI augmentation. Similar role evolution in non-engineering crafts is less formalized but emerging.

### Shift in Practitioner Work Patterns

Research from Microsoft Research (Mozannar et al., 2024) and Google (Tabachnyk & Nikolov, 2022) documents early shifts in work patterns with AI tools, but these studies capture Zone 1-level changes (individual tool use) rather than the Zone 3-level role transformation. The shift from "practitioner who uses AI" to "AI-augmented practitioner who specifies and verifies" is a prediction of the ACE framework that has limited formal research validation.

Anecdotal evidence from early adopters of agentic AI tools describes a workflow that closely matches the Zone 3 prediction: practitioners across crafts spend more time on specification and review, less time on direct production, and can tackle tasks outside their traditional specialization because the AI handles implementation details. In engineering, this is documented through blog posts, conference talks, and community discussions about Claude Code and Cursor. In product management and design, similar patterns are emerging but less publicly documented.

Kent Beck's writing on "AI-Assisted Software Engineering" (2024) describes a shift in the practitioner role that is consistent with Zone 3 **[Expert judgment]**: the practitioner becomes a "navigator" who directs the AI rather than a "driver" who produces directly. Beck's framing emphasizes that this shift requires new skills (clear specification, effective review, systems thinking) rather than just faster execution -- a principle that applies across all software production crafts.

### Eval Pipelines and Observability Practices

The concept of eval pipelines for AI-augmented development -- systematic evaluation of AI output quality -- is emerging primarily from the AI/ML community rather than traditional software engineering. Anthropic, OpenAI, and other AI companies have published extensively on evaluation methodology for AI systems, and some of these practices are being adapted for AI-augmented software development.

Formal research on eval pipelines specifically for AI-generated code in production software development is limited. The ACE framework's inclusion of eval pipelines as a Zone 3 technique reflects emerging practitioner practice rather than validated research.

---

## Section 5: Emerging Signals for Zone 4

### Early Evidence of AI-First Development

Zone 4 -- organizational industrialization of AI -- is largely speculative as of early 2026. No formal research validates the specific practices and outcomes described in the ACE Zone 4 definition. However, several signals suggest the trajectory:

1. **AI-native startups.** A growing number of startups are building with AI as a foundational development tool from day one, achieving output-to-headcount ratios that would be impossible with traditional development. These organizations represent early instances of Zone 4-like practices, though they benefit from having no legacy processes to transform.

2. **Enterprise AI platform teams.** Large enterprises including Google, Microsoft, Meta, and others have created internal AI platform teams that build and maintain custom AI development infrastructure. While these efforts predate the ACE framework, they represent the kind of organizational investment described in Zone 4.

3. **Custom model fine-tuning for development.** Organizations beginning to fine-tune AI models on their proprietary codebases represent an early signal of Zone 4 investment. Research from organizations like Replit, Sourcegraph, and others documents early experiments in this direction.

### Agentic AI Systems in Production

The emergence of agentic AI systems -- AI tools that can execute multi-step tasks with greater autonomy -- is a significant development for ACE's Zone 3 and Zone 4 predictions. Devin (by Cognition), SWE-Agent (Princeton NLP), and similar projects demonstrate the potential for AI agents to handle increasingly complex development tasks.

However, as of early 2026, fully autonomous AI development agents remain limited in their reliability for production software engineering. Benchmarks such as SWE-bench (Jimenez et al., 2024) show that even the best AI agents resolve only a fraction of real-world software issues without human intervention. This suggests that the Zone 3 model of human-directed, AI-assisted development is more realistic in the near term than the Zone 4 model of highly autonomous AI development.

### Speculative Trajectory

The trajectory from current evidence suggests:
- **Zone 1 and Zone 2 practices are grounded in present reality.** The tools, practices, and organizational challenges described in these zones are observable in many organizations today.
- **Zone 3 is on the near horizon.** Early adopters of agentic tools are beginning to experience the role transformation described in Zone 3, but it is not yet widespread or well-documented.
- **Zone 4 remains aspirational.** While early signals exist, no organization has demonstrably achieved the fully industrialized AI development capability described in Zone 4. The timeline for Zone 4 becoming realistic depends on the pace of advancement in AI agent capabilities.

---

## Section 5b: Responsible AI and Ethical Considerations

The ACE framework operates in a broader context of responsible AI research that is essential for understanding the risks and obligations associated with AI-augmented software production.

### AI Bias in Code Generation

AI code generation models are trained on large corpora of existing code, which may contain biases -- stereotyped variable names, culturally specific assumptions, security anti-patterns that disproportionately affect certain populations, and design patterns that embed accessibility barriers. Buolamwini & Gebru (2018) demonstrated that commercial AI systems exhibit significant accuracy disparities across demographic groups **[Validated]**. In code generation specifically, early research has begun to document related concerns: Chen et al. (2021) noted that Codex reproduces biases present in its training data, including stereotyped variable naming and culturally narrow assumptions in generated code. Bender et al. (2021) argued that large language models trained on internet-scale text corpora systematically encode the perspectives of overrepresented populations while marginalizing others -- a concern that extends directly to code generation models trained on public repositories. Systematic study of demographic bias in AI-generated code remains limited, but the training data composition (predominantly English-language, open-source code from a non-representative subset of global developers) makes bias a reasonable expectation that practitioners should actively monitor.

Beyond bias in generated code, AI augmentation can create accountability gaps when systematic verification practices are absent. Perry et al. (2023) found that developers using AI coding assistants produced code with more security vulnerabilities while reporting higher confidence in their code's security -- a concrete demonstration of how AI augmentation can undermine the self-assessment that quality processes depend on.

The implications for ACE are concrete: teams using AI code generation should review AI output not only for correctness and security but also for embedded assumptions that may not serve all users. This concern is reflected in the bias awareness additions to Zone 1 proficiency descriptions for PM, Design, and Engineering roles.

### Accountability and Governance Frameworks

The NIST AI Risk Management Framework (NIST, 2023) and the EU AI Act (2024) establish governance expectations for organizations deploying AI systems. Organizations operating at Zone 3-4 -- where AI is a primary production mechanism -- should evaluate their obligations under these frameworks. Raji et al. (2020) provide a practical internal auditing framework that maps well to ACE's eval harness and CAT pipeline architecture.

### Workforce Transition

Acemoglu & Restrepo (2020) demonstrate that automation simultaneously displaces workers in automated tasks and creates demand for workers in new tasks **[Validated]**. Autor (2024) argues that whether AI concentrates or democratizes expertise depends on organizational design choices. These findings are directly relevant to ACE zone transitions, particularly Zone 3-4 where the role of software engineers changes fundamentally.

### Ethical Principles for AI Deployment

Floridi et al. (2018) synthesize five ethical principles for AI: beneficence, non-maleficence, autonomy, justice, and explicability **[Validated]**. Jobin et al. (2019) confirm these principles across 84 international AI ethics guidelines **[Validated]**. ACE's observability and eval infrastructure addresses explicability; the accountability additions in Zone 3-4 address responsibility; the gaps in justice/fairness are addressed through targeted additions to proficiency definitions and organizational investments.

### Additional References

- Acemoglu, D., & Restrepo, P. (2020). Robots and Jobs: Evidence from US Labor Markets. Journal of Political Economy, 128(6), 2188-2244.
- Autor, D. (2024). Applying AI to Rebuild Middle Class Jobs. NBER Working Paper 32140.
- Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the Dangers of Stochastic Parrots. FAccT '21.
- Buolamwini, J., & Gebru, T. (2018). Gender Shades. Proceedings of Machine Learning Research, 81, 1-15.
- EU AI Act. (2024). Regulation (EU) 2024/1689.
- Floridi, L., et al. (2018). AI4People -- An Ethical Framework for a Good AI Society. Minds and Machines, 28(4).
- Jobin, A., Ienca, M., & Vayena, E. (2019). The Global Landscape of AI Ethics Guidelines. Nature Machine Intelligence, 1(9), 389-399.
- NIST. (2023). AI Risk Management Framework (AI RMF 1.0).
- Raji, I. D., et al. (2020). Closing the AI Accountability Gap. FAT* 2020.
- Chen, M., et al. (2021). Evaluating Large Language Models Trained on Code. arXiv preprint arXiv:2107.03374.
- World Economic Forum. (2023). The Future of Jobs Report 2023.

---

## Section 6: Gaps and Limitations

### What Is Missing from Current Research

1. **Team-level and cross-craft studies are scarce.** Nearly all published research on AI-augmented software production focuses on individual developers working on coding tasks. Research on how cross-functional teams systematically integrate AI into shared workflows across crafts is minimal. This is the biggest gap relevant to ACE, as Zones 2-4 are fundamentally about team and organizational practices spanning all software production disciplines.

2. **Longitudinal studies are rare.** Most studies capture a snapshot of AI tool usage. Few track how AI usage patterns evolve over months or years, making it difficult to validate the ACE concept of "competency" as a durable behavior pattern.

3. **Organizational adoption studies are limited.** Research on the organizational conditions that enable or block AI adoption in software production is less developed than research on individual tool use. The ACE organizational investment framework draws more on DevOps and organizational change research by analogy than on direct AI-specific evidence.

4. **Quality and safety evidence is mixed.** Whether AI-augmented development produces higher or lower quality code appears to depend heavily on the practices surrounding AI use (review, testing, feedback loops) rather than AI use per se. More research is needed on which practices reliably produce quality improvements.

5. **Role transformation evidence is anecdotal.** The Zone 3 prediction that practitioner roles will shift from direct production to specifying and verifying is supported by practitioner reports but not by formal research. This gap is especially pronounced for non-engineering crafts.

6. **Non-engineering craft research is nearly absent.** Almost no published research examines AI's impact on product management, design, QA, or other software production crafts with the rigor applied to coding productivity. ACE's cross-craft scope is informed by practitioner observation rather than formal evidence for these disciplines.

7. **Economic impact studies are preliminary.** While individual productivity gains are documented (primarily for coding), the economic impact of AI adoption on organizational delivery capacity, team sizing, and total cost of software production is not well-studied.

### How ACE Addresses These Gaps

ACE provides a structured framework for understanding AI adoption across all software production crafts:

- **Distinguishes individual from team from organizational adoption.** Most current frameworks treat AI adoption as a single dimension. ACE's zone model separates individual tool use (Zone 1) from team integration (Zone 2) from role transformation (Zone 3) from organizational capability (Zone 4).

- **Addresses all crafts, not just engineering.** While published research focuses on coding, ACE assesses AI adoption across engineering, product management, design, QA, and other disciplines involved in software production. This cross-craft perspective reflects the reality that software is produced by cross-functional teams, not by engineers alone.

- **Emphasizes competency over knowledge.** The ACE focus on habitual behavior under pressure addresses a gap in current adoption measurement, which typically counts tool licenses or self-reported usage without assessing behavioral durability.

- **Identifies organizational investments as prerequisites for team competency.** Current research often attributes adoption success or failure to individual practitioner motivation. ACE explicitly identifies the organizational changes required to support team-level competency across crafts.

- **Provides a diagnostic instrument for assessment.** Rather than relying on self-report surveys with vague questions, ACE's facilitated diagnostic aims to assess observable behavior and organizational conditions directly.

### Areas Requiring Further Validation

1. **Zone boundary validity.** Are the four zones the right number? Are the boundaries between zones drawn in the right places? Expert validation and longitudinal data are needed.

2. **Investment-outcome linkage.** Does making the organizational investments described for each zone actually produce the predicted benefits? This requires longitudinal study of organizations that have used the ACE framework.

3. **Competency assessment reliability.** Does the facilitated diagnostic produce consistent results across different facilitators, organizations, and time periods? Inter-rater reliability studies are needed.

4. **Timeline predictions.** The zone progression timelines (1-3 months for Zone 1, 3-6 months for Zone 2, etc.) are based on practitioner experience and analogy to comparable organizational change frameworks. They require validation against real organizational data.

5. **Counter-metric effectiveness.** Do the counter-metrics identified in the metrics tree actually prevent gaming of the North Star metric? This can only be validated through observation of organizations using the framework.

See the [Validation Study Plan](/research/validation-study-plan) for a structured approach to addressing these gaps.

---

## References

- Anthropic. (2024). Claude Code documentation and best practices. https://docs.anthropic.com
- Barke, S., James, M. B., & Polikarpova, N. (2023). Grounded Copilot: How programmers interact with code-generating models. Proceedings of the ACM on Programming Languages, 7(OOPSLA1).
- Beck, K. (2024). AI-assisted software engineering. Substack and personal blog publications.
- DORA. (2024). Accelerate State of DevOps Report 2024. Google Cloud.
- Forsgren, N., Humble, J., & Kim, G. (2018). Accelerate: The Science of Lean Software and DevOps. IT Revolution Press.
- GitClear. (2024). Coding on Copilot: 2024 Data Suggests Downward Pressure on Code Quality. GitClear whitepaper.
- GitHub. (2024). GitHub Copilot metrics and adoption data. GitHub Blog.
- GitLab. (2024). Global DevSecOps Report 2024.
- JetBrains. (2024). The State of Developer Ecosystem 2024.
- Jimenez, C. E., et al. (2024). SWE-bench: Can Language Models Resolve Real-World GitHub Issues? ICLR 2024.
- Lemley, M. A., & Casey, B. (2024). Fair Learning. Texas Law Review.
- Liang, J. T., et al. (2024). Large Language Models for Code: Security Hardening and Adversarial Testing. IEEE S&P 2024.
- McKinsey & Company. (2024). The State of AI in 2024: Gen AI's Breakout Year.
- Mozannar, H., et al. (2024). Reading Between the Lines: Modeling User Behavior and Costs in AI-Assisted Programming. CHI 2024.
- Peng, S., Kalliamvakou, E., Cihon, P., & Demirer, M. (2023). The impact of AI on developer productivity: Evidence from GitHub Copilot. arXiv preprint.
- Perry, N., Srivastava, M., Kumar, D., & Boneh, D. (2023). Do Users Write More Insecure Code with AI Assistants? CCS 2023.
- SANS Institute. (2024). AI in Cybersecurity: Enterprise Adoption and Risk Survey.
- Sonatype. (2024). State of the Software Supply Chain 2024.
- Stack Overflow. (2024). Stack Overflow Developer Survey 2024.
- Swyx. (2023). The Rise of the AI Engineer. Blog post and Latent Space podcast.
- Tabachnyk, M., & Nikolov, S. (2022). ML-Enhanced Code Completion Improves Developer Productivity. Google AI Blog.
- Thoughtworks. (2024). Technology Radar Volume 31.
- Uplevel. (2024). The Real Impact of AI on Engineering Productivity. Uplevel research report.
- Vaithilingam, P., Zhang, T., & Glassman, E. L. (2022). Expectation vs. Experience: Evaluating the Usability of Code Generation Tools Powered by Large Language Models. CHI Extended Abstracts.
- Larsen, D. & Shore, J. (2012). Your Path through Agile Fluency. Martin Fowler's blog / Agile Fluency Project.
- Ziegler, A., et al. (2024). Measuring GitHub Copilot's Impact on Productivity. Communications of the ACM.

---

## Related Documentation

- [Validation Study Plan](/research/validation-study-plan) -- Design for validating the ACE framework
- [What Is ACE](/toolkit/what-is-ace) -- Framework overview
- [Metrics Tree](/toolkit/metrics-tree) -- Measurement framework for AI adoption progress
