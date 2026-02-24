---
title: "Zone 1: Augmenting"
description: "Individual team members -- developers, PMs, designers, QA engineers -- use AI tools habitually as part of their daily software production work."
section: "reference"
order: 1
---
Individual team members involved in software production -- developers, product managers, designers, QA engineers -- use AI tools habitually as part of their daily work. AI usage is personal, optional, and ad-hoc. The fundamental shift in this zone is from "AI is new, unfamiliar, or threatening" to "AI tools are a normal part of how I work every day." Zone 1 represents the first step in the AI Competency Evaluation (ACE) model, a progressive framework spanning four zones. Every organization pursuing AI-augmented development passes through this zone, and the proficiencies established here form the foundation for all subsequent zones.

**Shift type:** Tool adoption shift

---

## Who Is This For?

Zone 1 is relevant to any software organization where individual contributors -- developers, product managers, designers, QA engineers -- have not yet adopted AI tools as a habitual part of their workflow. This includes organizations that have purchased AI tool licenses but see low or inconsistent usage, organizations where AI adoption is driven by a few enthusiasts rather than being broadly practiced, and organizations where team members are curious about AI but uncertain how to integrate it into real work.

Organizations at this zone are not yet asking AI to change how teams collaborate or how delivery processes work. The goal is simpler and more immediate: get every individual comfortable and productive with AI tools so that the team has a foundation to build on. If your developers reach for AI tooling as naturally as they reach for their IDE or version control, your PMs use AI when synthesizing customer research under deadline pressure, your designers incorporate AI into design exploration as a default, and your QA engineers use AI for test strategy and triage routinely — you have achieved Zone 1 competency across roles. If team members abandon AI tools when deadlines tighten or when working in unfamiliar territory, you have not.

## Core Metric

**Team members involved in software production -- developers, PMs, designers, QA engineers -- habitually use AI tools in their daily work, even under deadline pressure or in unfamiliar codebases.**

Habitual use is the key qualifier. Occasional or experimental use does not constitute competency. The test is whether AI tools remain part of each team member's software production workflow when conditions are least favorable -- tight deadlines, production incidents, legacy code, unfamiliar domains. If AI tools are the first thing dropped when pressure increases, the organization has not yet reached Zone 1 competency.

## Benefits

Organizations that achieve Zone 1 competency can expect the following observable improvements:

- **Faster individual task completion.** Coding, writing, research, and documentation tasks take less time when AI assists with generation, completion, and iteration.
- **Reduced "blank page" problem.** Developers and product managers spend less time staring at empty files. AI provides starting points that can be refined, lowering the activation energy for any task.
- **Faster onboarding to unfamiliar codebases.** New team members and developers working in unfamiliar areas of the codebase use AI to explain code, trace execution paths, and understand architectural decisions.
- **Reduction in boilerplate coding time.** Repetitive code patterns, test scaffolding, configuration files, and standard implementations are generated rather than typed, freeing developer attention for higher-value decisions.
- **More time for higher-value thinking work.** When mechanical coding tasks are accelerated, developers spend proportionally more time on design, architecture, and problem decomposition.
- **Democratized access to coding help.** Junior developers receive on-demand assistance that approximates senior-level guidance for common patterns, reducing bottlenecks on senior team members for routine questions.
- **Improved written communication.** Meeting notes, documentation, stakeholder emails, and user stories improve in clarity and completeness when AI assists with drafting and editing.
- **Faster product research synthesis for PMs.** Product managers spend less time manually synthesizing customer interviews, survey data, and competitive research. AI provides structured summaries and pattern identification that the PM refines against their domain knowledge, reducing the time from data collection to actionable insight.
- **Accelerated design exploration for designers.** Designers explore more alternatives in less time, using AI to generate variations, analyze design patterns, and identify accessibility issues. The exploration phase -- where the right design direction is discovered -- expands rather than just the production phase.
- **More thorough test coverage for QA.** QA engineers achieve broader test coverage by using AI to identify edge cases, generate test data, and suggest test strategies that would be impractical to develop manually under typical time constraints.

## Proficiencies

Proficiencies are specific, observable behaviors that are practiced habitually -- not occasionally or only when convenient. An individual demonstrates Zone 1 competency when these behaviors persist under pressure.

### Engineering

- **Uses AI coding assistants for code completion and generation daily.** Inline AI completion (GitHub Copilot, Cursor, Windsurf, or equivalent) is active and used as a routine part of writing code, not reserved for special occasions or simple tasks.
- **Uses AI to explain unfamiliar code and debug issues.** When encountering unfamiliar code, error messages, or unexpected behavior, the developer's workflow includes querying an AI assistant as a standard diagnostic step alongside reading documentation and searching the web.
- **Selects the appropriate mode of AI engagement for the task at hand.** The developer distinguishes between vibe-coding (exploratory, low-stakes, AI-driven generation for prototypes and experiments), CHOP -- Chat-Oriented Programming (interactive, chat-based AI collaboration for coding tasks), and AI-assisted coding (rigorous, human-reviewed AI-augmented development for production code). The developer matches the mode to the stakes and context of the work.
- **Reviews and understands AI-generated code before accepting it.** AI output is treated as a draft from a capable but fallible collaborator. The developer reads, comprehends, and validates generated code rather than accepting it blindly. This includes verifying correctness, checking for security issues, and ensuring alignment with project conventions. This also includes awareness that AI-generated code may reflect biases present in training data -- for example, generating stereotyped sample data, defaulting to culturally specific assumptions, or reproducing biased patterns from the codebases it was trained on.
- **Uses AI to write and improve tests and documentation.** Test generation, test case ideation, docstring writing, and README updates are tasks where AI routinely assists, reducing the friction that often causes these activities to be skipped.

### Product Management

- **Uses AI for user story writing, research synthesis, and stakeholder communications.** AI assists with drafting user stories, summarizing research findings, preparing stakeholder updates, and structuring product documents. The product manager refines and validates AI output against their domain knowledge.
- **Uses AI tools for meeting notes and summaries.** Meeting recordings or notes are processed through AI to produce structured summaries, action items, and decisions, reducing the overhead of documentation and improving team alignment.
- **Prompts effectively for PM-relevant tasks.** The product manager can construct prompts that provide sufficient context, constraints, and intent to get useful output from AI tools for product work, rather than receiving generic or unhelpful responses.
- **Uses AI to accelerate product discovery work.** AI assists with synthesizing customer interview data, analyzing competitive positioning, generating and pressure-testing product hypotheses, and structuring prioritization frameworks. The PM uses AI to do better product thinking, not just faster artifact production.
- **Uses AI to analyze quantitative product data and extract actionable insights.** AI assists with interpreting usage analytics, identifying patterns in customer feedback, modeling scenario outcomes, and summarizing market research. The PM treats AI as an analytical partner for the strategic dimensions of product work, not just the documentation dimensions. This includes awareness that AI-generated analysis may reflect biases in training data -- for example, overweighting well-documented market segments, reproducing demographic assumptions, or generating recommendations that reflect the patterns of larger organizations rather than the PM's specific context.

### Design and Architecture

- **Uses AI for ideation, content generation, and design exploration.** AI tools assist with generating design alternatives, creating placeholder content, exploring layout options, and producing copy variations. The designer treats AI as a brainstorming partner that accelerates the exploration phase.
- **Incorporates AI-powered tools into the design workflow.** AI capabilities within design tools (image generation, layout suggestions, content-aware features) are part of the designer's standard toolkit rather than novelties used occasionally.
- **Uses AI to synthesize user research and analyze usability data.** AI assists with identifying patterns in user research transcripts, summarizing usability test findings, flagging accessibility issues in existing designs, and generating insights from qualitative data. The designer uses AI to deepen understanding of user needs, not just to produce artifacts faster.
- **Uses AI to explore and evaluate information architecture and interaction design alternatives.** AI assists with generating navigation structures, evaluating content organization patterns, analyzing competitor UX approaches, and identifying potential usability issues in proposed designs. The designer treats AI as a design thinking partner for the analytical dimensions of design work. This includes awareness that AI-generated design suggestions may embed cultural assumptions, accessibility blind spots, or aesthetic biases from training data -- for example, defaulting to patterns optimized for able-bodied users, Western reading conventions, or majority-demographic personas.

### Quality Assurance

- **Uses AI to assist with test case generation and test strategy design.** AI tools help generate test cases from requirements, suggest edge cases, and assist with structuring test plans. The QA engineer refines and validates AI-generated test artifacts against their domain knowledge.
- **Uses AI for bug triage, reproduction, and root cause analysis.** When investigating defects, the QA engineer queries AI to help analyze logs, suggest reproduction steps, identify likely root causes, and cross-reference similar issues -- as a standard diagnostic step alongside traditional investigation techniques.
- **Uses AI to create and manage test data.** AI assists with generating realistic test data sets, creating test fixtures, and producing data that covers boundary conditions and edge cases, reducing the manual effort that often makes thorough test data preparation impractical. This includes awareness that AI-generated test data may reflect demographic patterns in training data -- for example, overrepresenting certain user demographics or defaulting to culturally specific data patterns that do not reflect the application's actual user base.

### A Note on Data Science and ML Practitioners

Data science and ML practitioners on the team should participate in Zone 1 adoption alongside other roles. Their existing practices -- notebooks, data analysis, model experimentation -- naturally overlap with AI tool usage, and many will find adoption straightforward. ACE does not define a separate data science proficiency track because data science is a specialization rather than a universal team role in software production. Where data science practitioners are present, they should be included in training, assessed alongside the team, and their AI tool adoption should be measured by the same habitual-use standard applied to all other roles.

## Organizational Investments

Zone 1 competency requires organizational investment beyond individual motivation. These are changes the organization must make, not training individuals must complete on their own.

- **Provide AI tool licenses to all team members, not just developers.** Product managers, designers, QA engineers, and other contributors benefit from AI tools. Restricting licenses to developers alone limits the breadth of adoption and signals that AI is "only for coding."
- **Establish organizational policy on approved AI tools and data handling.** Teams need clear guidance on which AI tools are approved, what data can and cannot be shared with AI services, and how to handle proprietary code and sensitive information. Ambiguity about policy suppresses adoption -- people avoid tools when they are unsure whether using them is permitted.
- **Provide structured training on AI tool usage.** Basic training covers tool installation, configuration, effective prompting, and workflow integration. This is not a one-time workshop; it includes ongoing support, office hours, and shared learning channels where team members exchange tips and techniques.
- **Actively address concerns about AI's impact on roles and careers.** Many practitioners carry anxiety that AI tools will change or eliminate their roles. This anxiety is not irrational -- the role of software engineering and other software production disciplines is genuinely changing, and the ACE framework's own zone progression describes that change. Leadership must address these concerns honestly rather than with reassurance that may later feel dishonest. Effective approaches include: (a) Acknowledge the concern as legitimate: "The role of software development is changing. What makes someone valuable in this role is also changing. What we can control is whether that change happens to you or with you." (b) Make concrete commitments about the current transition period -- specify what AI adoption will and will not mean for employment decisions during the organization's current zone transition. Vague reassurance erodes trust; specific, time-bounded commitments build it. (c) Connect current adoption to the organization's chosen stopping point -- the organization's target zone has specific workforce implications. If the target is Zone 2, the workforce model remains substantially similar to the current state. If the target is Zone 3+, workforce implications are more significant and should be addressed explicitly as part of the goal-setting process. (d) Do not promise that no roles will change. Promise instead that the organization will invest in helping people navigate the change.
- **Ensure developers have appropriate API keys and accounts.** Practical blockers kill adoption. If developers cannot sign up for tools without procurement approval, if API keys require weeks of security review, or if corporate firewalls block AI services, adoption stalls regardless of interest. Remove these friction points proactively.
- **Establish basic guidelines on when AI-generated code needs extra review.** Not all AI-generated code carries equal risk. Code touching security-sensitive areas, authentication, authorization, financial calculations, or regulated domains warrants additional scrutiny. Provide clear, lightweight guidelines rather than blanket prohibitions.

## Techniques

The following tools, methods, and practices characterize Zone 1 work:

### Inline AI Code Completion
Tools such as GitHub Copilot, Cursor, and Windsurf provide real-time code suggestions as the developer types. This is often described as "autocomplete on steroids" -- the AI predicts and generates code completions ranging from single lines to entire function bodies based on the surrounding context.

### Chat-Based Coding Assistants
Claude Code, OpenAI Codex, OpenCode, and similar tools provide a conversational interface for coding tasks. Developers describe what they need, provide context, and iterate on the AI's output through dialogue. This is the core of Chat-Oriented Programming (CHOP).

### General-Purpose AI Assistants
ChatGPT, Claude, and Gemini serve as general-purpose assistants for tasks beyond code generation: explaining concepts, summarizing documents, drafting communications, researching technologies, and answering technical questions.

### Prompt Engineering Basics
Effective AI usage requires clear communication of intent, context, and constraints. At Zone 1, this means learning to write prompts that specify what you want, provide relevant context (code snippets, error messages, project constraints), and articulate the desired output format. This is a foundational skill that deepens in subsequent zones.

### CHOP Workflow
Chat-Oriented Programming is an interactive workflow where the developer and AI collaborate through conversation. The developer describes a task, the AI generates code, the developer reviews and provides feedback, and the cycle repeats. CHOP is more deliberate than inline completion and more structured than open-ended chat.

### Vibe-Coding for Prototyping
Vibe-coding is exploratory, low-stakes AI-assisted coding used for prototypes, proof-of-concept work, and experiments. The developer describes the desired outcome at a high level and lets the AI generate substantial portions of the code with lighter review. This technique is appropriate when the goal is learning or exploration, not production-quality output.

## Timeline

- **Individual habitual usage:** 1-3 months from initial exposure to consistent, habitual use. Most developers show meaningful adoption within the first 2-4 weeks if tools are available and training is provided.
- **Visible productivity improvements:** Within 2-4 weeks of adoption, individual developers report faster task completion and reduced friction on routine work.
- **Organization-wide adoption:** 2-6 months depending on organizational culture, the strength of the investment in removing barriers, and whether leadership actively champions adoption. Organizations with strong learning cultures and low bureaucratic friction reach broad adoption faster.
- **Competency (habitual under pressure):** True competency -- where AI tool usage persists under deadline pressure and in unfamiliar contexts -- typically lags initial adoption by 1-2 months. Early adoption is often enthusiastic but fragile; competency is demonstrated when the behavior is durable.

Timeline estimates above are based primarily on developer adoption data. PM, designer, and QA adoption timelines may differ depending on AI tool maturity and workflow integration for each role. Facilitators should set role-appropriate expectations rather than applying developer timelines universally.

## Recognizing and Addressing Regression

Zone 1 competency can regress. Common triggers include: team member turnover (new members who have not built AI habits), tool migrations (switching AI providers disrupts established workflows), organizational stress (extended crunch periods where teams revert to pre-AI practices), and policy changes (new security or compliance requirements that create friction around AI tool usage).

**Signs of regression:** AI tool usage metrics decline; team members report abandoning AI tools during recent high-pressure periods; new team members are not onboarded into AI workflows; retrospectives stop discussing AI practices.

**What to do:** Treat regression as a signal that the organizational investments supporting Zone 1 are insufficient, not as individual failure. Revisit the investments (training, tooling, policy clarity) and address the specific trigger. Re-run the diagnostic to establish current state and plan targeted re-investment.

## Progressive Competency Note

Zone 1 is a progressive zone -- most organizations will use it as a foundation for Zone 2 and beyond. However, the decision to progress beyond Zone 1 deserves the same strategic analysis as any other zone transition. Some organizations -- small teams, highly regulated environments, organizations where software is a supporting function rather than a core competency -- may find that Zone 1 competency genuinely serves their strategic needs. The framework's stopping-point principle applies to every zone, including Zone 1.

That said, most organizations will find significant unrealized value in Zone 1 alone. An organization where every individual uses AI tools effectively but the team's processes, code review practices, and delivery workflows remain unchanged is leaving substantial team-level benefits on the table. For the majority of software organizations, Zone 2 represents the competitive baseline and the natural near-term target.

Organizations that have achieved Zone 1 competency should evaluate Zone 2 investment through the same strategic analysis framework used for all zone transitions -- considering investment capacity, risk appetite, and strategic need. Most will conclude that the Zone 2 investment is justified. Those that do not should be confident that Zone 1 competency is a legitimate, valuable organizational capability.

## Relationship to Other Zones

### Zone 0: Pre-AI Baseline
Zone 0 represents the starting state before any AI tool adoption. Teams in Zone 0 rely entirely on traditional development workflows. Some individuals may have experimented with AI tools, but usage is sporadic, unsupported by the organization, and not integrated into daily work. The transition from Zone 0 to Zone 1 is primarily about removing barriers to adoption and establishing habitual individual use.

### Zone 2: Integrating
Zone 2 shifts the focus from individual tool use to team-level integration. Zone 2's defining practices are: Plan/Code/Verify as the default workflow for all changes, a shared AGENTS.md/CLAUDE.md committed to source control as the team's "AI constitution," and mandatory feedback loops (compiler, linter, tests) that AI-generated code must pass before committing. The shift is from "I use AI in my work" to "our team's processes incorporate AI." Zone 2 requires Zone 1 competency as a foundation — teams cannot integrate AI into shared workflows if individuals are not yet comfortable using AI tools independently.

### Zones 3 and 4
Subsequent zones address deeper organizational transformation, including AI-driven architecture decisions, organizational learning loops, and strategic AI integration. These zones are documented separately and build progressively on Zones 1 and 2.

---

## Related Documentation

- [What Is ACE?](/toolkit/what-is-ace) -- Framework overview and the four zones in context
- [Zone 2: Integrating](/toolkit/zone-2-integrating) -- The next progressive zone; all Zone 1 organizations should target Zone 2
- [Zone 1 Diagnostic Questions](/toolkit/zone-1-questions) -- The assessment instrument for this zone
- [Baseline-to-Zone-1 Roadmap](/toolkit/baseline-to-zone-1) -- Progression plan for organizations starting from Zone 0
- [Zone-1-to-Zone-2 Roadmap](/toolkit/zone-1-to-2) -- Progression plan for the transition out of Zone 1
- [Technique Catalog: Zone 1](/toolkit/technique-catalog) -- Detailed descriptions of Zone 1 tools and methods
- [Proficiency Catalog](/toolkit/proficiency-catalog) -- Complete listing of Zone 1 proficiencies across all roles
- [Zone-Specific Metrics](/toolkit/zone-specific-metrics) -- Leading indicators for measuring Zone 1 competency progression
- [Progressive Competency Model](/toolkit/progressive-competency-model) -- Why Zone 1 is the foundation for all subsequent zones in the progression
- [Competency vs. Knowledge](/toolkit/competency-vs-knowledge) -- What "habitual under pressure" means and why it matters
