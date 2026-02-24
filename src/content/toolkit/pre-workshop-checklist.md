---
title: "Pre-Workshop Checklist"
description: "This checklist covers everything a facilitator must prepare before running an ACE diagnostic workshop."
section: "diagnostic"
type: "diagnostic"
audience: "facilitator"
order: 8
---
This checklist covers everything a facilitator must prepare before running an ACE diagnostic workshop. Thorough preparation is the difference between a workshop that produces actionable insights and one that produces surface-level scores.

---

## 2 Weeks Before the Workshop

### Discovery and Context

- [ ] **Complete discovery interviews with key stakeholders.** Meet with the engineering manager, team lead, and organizational sponsor. Understand their goals for the diagnostic, their perception of current AI adoption, and any sensitivities or concerns. Document what you learn in the context analysis template.

- [ ] **Review the context analysis template.** Capture: team size and composition (roles), current AI tool usage (what tools, how widely adopted), recent delivery history (any major incidents, deadline crunches, or team changes), and organizational context (policies on AI usage, procurement status of AI tool licenses, any prior AI training).

- [ ] **Determine which zones to assess.** Run the Zone 0 baseline screening with a team lead or engineering manager if there is any question about whether the team has meaningful AI usage. Based on discovery interviews, identify which zones are relevant:
  - Most teams assess Zone 1 and Zone 2
  - Teams with strong Zone 2 signals may also assess Zone 3
  - Assessing more than 3 zones in a single workshop is not recommended

- [ ] **Schedule the workshop.** Block 90-120 minutes. The full team must be present -- developers, product managers, designers, QA engineers, and anyone else who is part of the delivery team. Avoid scheduling during crunch periods, release weeks, or immediately after production incidents.

- [ ] **Send the pre-read to all participants.** The pre-read should cover:
  - What the diagnostic is (a facilitated self-assessment, not an audit or performance review)
  - What to expect during the workshop (individual scoring, group discussion, retrospective)
  - How results will be used (team report for the team, management report with aggregate patterns only -- no individual or team-specific data shared with management)
  - What to think about beforehand: "Reflect on your actual daily practices over the past 2-4 weeks. Think about specific examples of when you did or did not use AI tools."
  - Estimated duration and logistics

- [ ] **Prepare question sheets.** Print or set up digital forms for each zone being assessed. Each participant needs their own copy. Include:
  - The zone name and brief description
  - All questions for each zone with the 1-5 scale
  - Space for optional notes next to each question
  - Participant name or anonymous identifier (discuss anonymity approach with sponsor)

### Logistics

- [ ] **Confirm room booking** (in-person) or **video platform setup** (remote). For in-person: ensure a room with a whiteboard or flip chart, seating for the full team, and wall space for posting sticky notes. For remote: ensure the video platform supports breakout rooms (optional), screen sharing, and a shared document or polling tool.

- [ ] **Confirm the organizational sponsor understands the dual reporting model.** The sponsor should know that:
  - The team report goes to the team and contains specific scores, discussion themes, and investment recommendations
  - The management report aggregates patterns across teams and does not disclose individual team results
  - This separation is non-negotiable and is fundamental to getting honest participation

---

## 1 Week Before the Workshop

### Participant Competency

- [ ] **Review the team roster.** Confirm who will attend. The following roles should be present:
  - All software engineers/developers on the team
  - Product manager(s)
  - Designer(s)
  - QA engineer(s)
  - Any other regular contributors to the team's delivery work

- [ ] **Identify any missing participants and make a plan.** If a team member cannot attend:
  - For 1-2 missing members: proceed with the workshop, note the gap, and collect their individual scores asynchronously within 48 hours. Do not include them in the group discussion scores.
  - For 3+ missing members or if a key role is entirely unrepresented: reschedule. A diagnostic with significant absences produces unreliable results.
  - The team lead or manager should NOT attend if their presence will inhibit honest responses. Discuss this with the sponsor. If the manager is a regular working member of the team (e.g., a coding tech lead), they should participate. If they are a non-coding manager, their presence may suppress honest scoring on sensitive items.
  - **If a participant declines to participate:** Respect the decision without pressure. Participation is voluntary, and pressuring a reluctant participant undermines the psychological safety the diagnostic depends on. Note the gap in data coverage -- specifically, which role or perspective is now unrepresented. Consider whether the declining participant's reluctance may represent a broader team concern (fear of how results will be used, distrust of the process, or organizational dynamics that suppress honest participation). If multiple participants decline or if the declining participant holds a perspective likely shared by others, treat this as diagnostic data in itself and discuss with the engagement sponsor whether underlying concerns need to be addressed before proceeding.

- [ ] **Prepare facilitation materials:**
  - Flip chart paper or digital whiteboard with zone names and question numbers pre-written
  - Sticky notes and markers (in-person) or digital equivalent
  - Timer or clock visible to the room
  - Discussion prompt cards (see [Discussion Prompts](/toolkit/discussion-prompts))
  - Score tally sheet (one per zone: rows = questions, columns = participants)

- [ ] **Set up the scoring tool.** Whether using paper forms, a spreadsheet, or a digital assessment tool:
  - Pre-populate with participant names or anonymous identifiers
  - Pre-populate with zone names and question text
  - Ensure the tally mechanism works (test formulas, test the polling tool, etc.)
  - Have a backup method ready (paper forms if the digital tool fails)

- [ ] **Brief the organizational sponsor on what to expect from reports.** Walk through the report templates so the sponsor knows the format, content, and timeline for delivery. Confirm:
  - When reports will be delivered (typically 1-2 weeks after the workshop)
  - Who receives which report
  - Whether a follow-up goal-setting session is planned

---

## Day of the Workshop

### Room Setup (In-Person)

- [ ] **Arrange seating in a circle or U-shape.** Avoid classroom-style rows. The team needs to see each other during discussion. The facilitator should be able to move around the room.

- [ ] **Post zone labels and question numbers on the wall.** Create a visual anchor for the scoring phases. This helps the team track progress through the assessment.

- [ ] **Set up the scoring display area.** If using sticky dots, post flip chart paper with a grid (questions x scale values). If using digital display, have the screen ready.

- [ ] **Place materials at each seat:** scoring forms, pens, and a brief reminder card with the scale definitions (1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always).

- [ ] **Test any technology:** projector, screen sharing, polling tools, timers.

### Room Setup (Remote)

- [ ] **Open the video call 10 minutes early.** Test screen sharing, ensure the polling or scoring tool is accessible to all participants, and verify that everyone has the question sheets (sent in advance or available via shared link).

- [ ] **Prepare a shared document** for live score display (a simple spreadsheet visible to all, or the facilitator's screen shared during the reveal phase).

- [ ] **Have a backup communication channel** (Slack, Teams chat) in case of audio/video issues.

### Final Checks

- [ ] **Confirm all expected participants are present** (or accounted for, with a plan for absentees).

- [ ] **Verify you have:** facilitation script, discussion prompts, scoring sheets, timer, and report templates ready for post-workshop data entry.

- [ ] **Take a breath.** Review the facilitation script opening. Remember: your job is to create a safe space for honest self-assessment, not to evaluate the team. The team's scores are their scores. Your role is to facilitate the conversation that makes those scores meaningful.

---

## Who Should Be in the Room

**Include:**
- All regular members of the delivery team, regardless of role
- Part-time team members who contribute meaningfully to delivery
- The team lead, if they are a working member of the team

**Exclude (or handle carefully):**
- **Non-coding managers** whose presence may inhibit honest responses. Discuss with the sponsor. If the manager insists on attending, have a private conversation about the risk to data quality and suggest they receive results through the team report instead.
- **Stakeholders or executives** who are not part of the daily delivery team. Their presence changes the dynamic from self-assessment to performance review.
- **People from other teams** unless they regularly contribute to this team's work.

**Handle with care:**
- **New team members** (less than 2-4 weeks on the team). They may not have enough experience to score accurately. Include them in the discussion but consider excluding their scores from the tally, or have them score with a "not enough experience" option.
- **Contractors or temporary team members.** Include if they are part of the team's regular workflow. Exclude if they are short-term and do not represent the team's habitual practices.

---

## Remote Workshop Considerations

Running the diagnostic remotely is fully viable but requires additional preparation:

- **Scoring must be truly private.** Use anonymous polling tools or have participants submit scores via private message or individual form, not by unmuting and reading scores aloud. The risk of anchoring bias (where early responses influence later ones) is higher in remote settings.

- **Discussion requires active facilitation.** In remote settings, people are more likely to stay silent. Call on specific people. Use structured turn-taking. Consider using the chat for initial reactions before opening voice discussion.

- **Energy management matters more.** Remote workshops lose energy faster than in-person ones. Build in a 5-minute break between zones if assessing more than two zones. Keep the pace brisk during scoring phases.

- **Visual displays need screen sharing.** When revealing score distributions, share your screen showing the aggregated results. Consider using a simple bar chart or dot plot that participants can see clearly on their screens.

- **Record the session (with permission)** if allowed by organizational policy. This helps the facilitator capture discussion themes accurately for the report, especially when taking notes while facilitating is difficult.

---

## Accessibility and Inclusion

Diagnostic workshops must be accessible to all participants. Address these considerations during preparation:

### Cognitive and Neurodiverse Participants

- [ ] **Send materials in advance with enough lead time.** Send the pre-read, question sheets, and scale descriptions at least 3 business days before the workshop, not the night before. Participants who need more processing time should have it.

- [ ] **Describe the workshop structure explicitly in the pre-read.** Some participants need to know exactly what will happen, in what order, and for how long. Include a brief agenda with time blocks: "We will spend approximately 10 minutes on each question, then discuss as a group."

- [ ] **Confirm the format for scoring.** State clearly whether participants will share scores verbally, on paper, or digitally. Unexpected format changes create unnecessary cognitive load. If the format must change, announce it before it happens.

- [ ] **Allow processing time before discussion.** After participants submit individual scores, pause for 60-90 seconds before opening the discussion. This benefits participants who need a moment to organize their thoughts before speaking.

- [ ] **Provide written question text alongside verbal presentation.** Do not rely on verbal-only delivery of questions. Ensure question text is visible throughout the scoring phase.

### Remote Accessibility

- [ ] **Confirm captioning availability for remote workshops.** Use the video platform's built-in live captions, or arrange for a third-party captioning service if a participant requests it. Ask about captioning needs in the pre-read logistics section.

- [ ] **Confirm screen reader compatibility if using digital polling tools.** If any participant uses a screen reader, test the polling or scoring tool for accessibility before the workshop. Have an alternative format ready (read questions aloud, receive responses via chat).

- [ ] **Ensure adequate color contrast in any shared visual materials.** Score distribution charts and zone summary displays should use high-contrast palettes and not rely on color alone to convey information (use labels or patterns alongside color).

### Language and Communication

- [ ] **If the team includes participants for whom English is not a primary language**, distribute question sheets in advance and allow extra time for individual scoring. Do not rely on participants to process complex behavioral descriptors in real time while also managing the cognitive load of the discussion.

- [ ] **Offer written response as an option.** Some participants express themselves more clearly in writing than verbally. Allow participants to submit their discussion contributions via chat in remote workshops or written notes in in-person workshops.

### In-Person Accessibility

- [ ] **Confirm the room is physically accessible.** Check for step-free access, adequate space for mobility devices, and seating that accommodates different physical needs.

- [ ] **Avoid scheduling workshops in noisy or acoustically poor rooms.** Participants who are hard of hearing or have auditory processing differences need a quiet environment with clear acoustics. Test the room before the workshop if possible.

---

## Common Preparation Mistakes

- **Skipping discovery interviews.** Running the diagnostic without understanding the team's context produces generic results. Discovery interviews let you tailor your facilitation approach, anticipate sensitive topics, and ask better follow-up questions during discussion.

- **Not confirming the dual reporting model with the sponsor.** If the sponsor expects to see individual team scores in the management report, resolve this before the workshop, not after. The diagnostic's integrity depends on the team trusting that their honest answers will not be used against them.

- **Under-preparing for the discussion phase.** The scores are useful, but the facilitated discussion is where the real insights emerge. Prepare zone-specific discussion prompts and be ready to probe high-variance items. Do not rely on improvisation.

- **Scheduling during a bad week.** If the team just shipped a major release, is in the middle of a production crisis, or recently had significant personnel changes, postpone. Stressed teams give lower scores across the board, and the scores reflect their current emotional state rather than their habitual practices.

---

## Related Documentation

- [Workshop Script](/toolkit/workshop-script) -- The full facilitation script run after this checklist is complete
- [Discussion Prompts](/toolkit/discussion-prompts) -- Zone-specific probes and facilitation moves for the discussion phase
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to interpret score distributions during the workshop
- [Quick Reference](/toolkit/quick-reference) -- One-page zone and scale reference for use during the workshop
- [Engagement Model](/toolkit/engagement-model) -- How the diagnostic workshop fits into the overall engagement structure
