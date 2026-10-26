# JustEat narrative review

Status: The user subsequently requested restoring the Design Decision section. Its original copy, feature order, captions, legend, layout, and position after Prototype have been restored. The review below records the earlier proposal; its decision-section changes no longer describe the current page.

The central problem is the work of checking a dish against dietary needs while the rest of the table is ready to order. The revision keeps this situation visible from the opening through the final screens.

## Where the original story lost focus

| Location | Reading problem | Revision |
| --- | --- | --- |
| Background and competitor review | Broad allergy context and feature inventories obscured the specific ordering task. | Name the menu / allergen-guide / staff cross-check, and frame the competitor review around a diner already at the table. |
| Research observations | The menu-switching observation was paired with a broad social-comfort insight; the social observation led to a broad systems claim. | Pair each observation with its immediate implication: retain restrictions, place information beside dishes, and support checking during a shared order. |
| Exploration to concept | Wearables, pickup, and group dining appeared without a clear selection rationale. | Explain why the table-linked menu addresses the observed delay; identify pickup as a supporting exploration. |
| Single-diner flow to family / group features | The scope expanded without distinguishing evidence from inference. | State that the individual flow is the foundation and family / group features are extensions to validate. |
| Final design walkthrough | Severity led the story, while the clearest response to menu-switching appeared much later. Titles, headlines, and paragraphs repeated the same intent. | Lead with menu / dish detail, then meal options, profiles, and group coordination. Each feature has one heading and four short evidence-to-benefit steps. |
| Screens and recordings | Several captions only named a screen; group screenshots had no local explanation. | Attach captions describing the choice, visible UI treatment, and checking task. Move the recordings after the explained final screens. |

## Evidence used for the six decisions

| Design decision | Evidence already present in the case study |
| --- | --- |
| Menu cues followed by dish detail | The author's approximately 30-minute menu / separate allergen-guide comparison. |
| Warnings for individual meal options | Mia's uncertainty about milk and Jason's uncertainty about apple variety. The option-level treatment is a design response to ingredient specificity. |
| Reusable profiles | Repeated checking in the author's exercise and Hope's account of dairy appearing in everyday foods. Family profiles are an extension. |
| Per-allergen profile levels | Yogita's account of weighing discomfort against social participation. This supports exploring individual concerns, but does not validate a three-level severity model. |
| Table profile visibility | Linda's exclusion from a shared meal and Alex's lack of control. The shared reference is a proposed response. |
| Affected-diner indicators | Waiting during the author's menu check and Linda's experience. Applying these findings to shared-dish selection is a design inference. |

Interview quotations are unchanged. The personal egg-free exercise is explicitly distinguished from participants' lived experience. Intended benefits are not presented as measured improvements.

The profile-level artwork was also mislabeled: it shows allergen setup and enlarged Low / Medium / High labels, rather than a dish screen. Its caption and alternative text now match the artwork, and the redundant legend has been removed.

The closing section identifies the next validation questions: recognizing conflicts, knowing the active profile, interpreting group indicators, understanding profile levels and visibility, and handling incomplete restaurant data.

## Verification

Asset / content checks and the production build pass. The case-study component was also rendered to HTML to check the six complete reasoning chains and attached captions. Browser visual QA could not be completed because the available native Chrome connection timed out; desktop and phone layout still need an interactive visual pass.
