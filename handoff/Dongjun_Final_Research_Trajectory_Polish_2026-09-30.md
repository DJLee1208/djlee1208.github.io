# Handoff: Final Research-Trajectory Polish for DongJun Lee's Public Profile

Date: 2026-09-30

## Goal

Make one final, narrow narrative refinement to DongJun Lee's LinkedIn About and personal-homepage About sections.

The goal is **not** to change his research identity.

The current identity is correct:

- Machine Learning & Optimization
- Learning-Augmented Optimization
- current focus on large-scale, multi-period mixed-integer optimization
- neural solution prediction
- structure-aware feasibility repair
- temporal representation learning as the foundation from his master's work

The only goal of this task is to make the **MS -> PhD research trajectory immediately visible** to a recruiter or research scientist who reads only the first few sentences.

The intended high-level trajectory is:

```text
Temporal representation learning
        ->
learned models / predictions
        ->
constrained optimization
        ->
sequential decisions
```

Do **not** literally add this arrow diagram to the public profile unless specifically requested. It is the conceptual guide for the prose.

---

## Source of truth

Use the currently deployed September 29, 2026 profile as the source of truth.

Verified current state is documented in:

- `Dongjun_Profile_Update_Result_2026-09-29.md`
- `Dongjun_Profile_Update_Verification_2026-09-29.pdf`
- `Dongjun_Lee_Resume_2026-09-29.pdf`

For the website, read the **current repository version** before editing.

For LinkedIn, read the **current saved About text** before editing.

Do not restore wording from older September 28 versions.

---

## Scope

### In scope

1. LinkedIn About
2. Personal-homepage About prose

### Out of scope

Do **not** modify:

- CV / résumé
- LinkedIn headline
- LinkedIn Experience descriptions
- LinkedIn Education
- LinkedIn Skills
- LinkedIn skill associations
- LinkedIn Publications
- LinkedIn Featured
- homepage Hero headline
- homepage Hero summary
- homepage Research section
- homepage Projects / Ongoing Research
- homepage Publications
- homepage Experience
- homepage Education
- homepage Contact
- OG/share image
- navigation
- visual design
- CSS
- JavaScript
- dates
- job titles
- publication metadata
- author order
- review status

Do not add new skills such as Recommendation Systems, Reinforcement Learning, Portfolio Optimization, Finance, Ads, Marketplace Optimization, or similar industry-target keywords unless they reflect actual completed research.

The profile should describe the researcher's actual methodology, not every industry problem to which it may transfer.

---

## Research-framing principle

The profile should **not** frame DongJun as:

- a power-systems specialist;
- a unit-commitment specialist;
- only a time-series researcher;
- only an optimization-proxy researcher;
- a generic sequential-decision-making researcher;
- a recommendation researcher;
- a finance researcher.

The intended identity is:

> **Learning-Augmented Optimization**

with a current methodological specialization in:

- large-scale multi-period mixed-integer optimization;
- neural solution prediction;
- structure-aware feasibility repair;
- temporally coupled constrained systems.

His prior time-series work should appear as a methodological foundation, not as an unrelated previous field.

The continuity should be clear:

**MS:** learning temporal representations from sequential data.

**PhD:** integrating learned models with constrained mathematical optimization.

**Broader goal:** using temporal data, learned models, and mathematical structure to make high-quality constrained decisions over time.

---

## LinkedIn About

Replace **only** the research prose above the Website / Google Scholar links.

Preferred text:

> I am a PhD researcher at Georgia Tech, advised by Pascal Van Hentenryck in the NSF AI4OPT Institute. My research focuses on learning-augmented optimization, building on my background in temporal representation learning to connect sequential data and learned models with constrained decisions over time. I develop methods that combine machine learning with mathematical optimization to make large-scale constrained problems faster to solve.
>
> My current focus is large-scale, multi-period mixed-integer optimization, where discrete and continuous decisions are coupled across time and resources. I study neural solution prediction and structure-aware feasibility repair, with the goal of improving computational efficiency while maintaining feasibility and solution quality.
>
> My master's research at Seoul National University focused on deep learning for time-series forecasting and anomaly detection, including temporal representations for long-range dependencies and multivariate structure. More broadly, I am interested in learning methods for optimization-based planning and sequential decision-making under complex constraints.
>
> Website: https://djlee1208.github.io/
>
> Google Scholar: [preserve current exact URL]

Important:

- Preserve the current Website URL.
- Preserve the current Google Scholar URL exactly.
- Do not add paper titles or venues here.
- Do not mention power systems, unit commitment, economic dispatch, HVDC, energy systems, recommendation, finance, or any other application domain.
- Do not add "seeking internship" language.
- Do not add buzzwords solely for recruiter search.

---

## Personal homepage About

Use the same conceptual framing as LinkedIn, with minor grammatical adaptation if needed.

Preferred prose:

> I am a PhD student in Industrial Engineering at Georgia Tech, advised by Pascal Van Hentenryck in the NSF AI4OPT Institute. My research focuses on learning-augmented optimization, building on my background in temporal representation learning to connect sequential data and learned models with constrained decisions over time. I develop methods that combine machine learning with mathematical optimization to make large-scale constrained problems faster to solve.
>
> My current focus is large-scale, multi-period mixed-integer optimization, where discrete and continuous decisions are coupled across time and resources. I study neural solution prediction and structure-aware feasibility repair, with the goal of improving computational efficiency while maintaining feasibility and solution quality.
>
> My master's research at Seoul National University focused on deep learning for time-series forecasting and anomaly detection, including temporal representations for long-range dependencies and multivariate structure. More broadly, I am interested in learning methods for optimization-based planning and sequential decision-making under complex constraints.

Do not modify the surrounding homepage layout.

---

## Important preservation rule

The existing homepage Hero is already good and should remain unchanged:

> **Learning-augmented optimization for large-scale constrained systems.**

The current Hero summary should also remain unchanged unless a factual conflict is discovered.

The current Research section already provides the correct decomposition:

1. Large-Scale Multi-Period Optimization
2. Optimization Proxies & Feasibility Repair
3. Temporal Learning & Sequential Decisions

Do not rewrite these merely for wording consistency.

---

## CV

**No CV edit is requested.**

The September 29 CV already gives the intended trajectory through adjacent Research Experience entries.

Georgia Tech / AI4OPT:

- large-scale multi-period mixed-integer optimization
- neural solution prediction
- structured / feasibility repair
- multistage stochastic optimization

SNU:

- time-series forecasting
- anomaly detection
- temporal representations
- spectral attention
- contrastive learning

The Selected Publications section provides the evidence.

Do not add a summary/profile paragraph to the CV.

Do not make application-specific variants in this task.

---

## LinkedIn Skills

**No skill changes are requested.**

Preserve the verified current global ordering and role associations.

In particular, do **not** add speculative industry keywords based on potential job targets.

The current combination already supports broad discovery across ML and optimization:

- Machine Learning
- Optimization
- Deep Learning
- Time Series Forecasting
- Python
- PyTorch
- Operations Research
- Integer Programming
- Linear Programming
- Mathematical Modeling
- Stochastic Optimization
- Anomaly Detection
- Julia
- Model Predictive Control
- Time Series
- Artificial Intelligence
- Mechanical Engineering
- Consulting
- Semiconductor Engineering

Do not remove endorsement-bearing entries.

---

## Verification

After editing:

1. Re-read the full saved LinkedIn About.
2. Verify that Website and Google Scholar URLs are unchanged.
3. Verify LinkedIn Headline is unchanged.
4. Verify Experience descriptions are unchanged.
5. Verify Skills and skill associations are unchanged.
6. Verify Publications and Featured are unchanged.
7. Render / inspect the homepage at desktop and mobile widths.
8. Verify no layout regression.
9. Verify homepage Contact remains unchanged.
10. Verify no "Let's talk" / "Let's discuss" language was reintroduced.
11. Verify publication metadata and links are unchanged.
12. Verify the CV file is byte-identical to the pre-task CV.

---

## Commit / deployment policy

Do not commit, push, stash, delete, or broadly reorganize files unless the user explicitly authorizes those actions in the execution task.

If deployment is explicitly authorized, modify only the minimum required homepage source file(s).

Do not touch CSS or JavaScript for this prose-only task.

---

## Compute

No GPU, Slurm, training, inference, solver run, or scientific experiment is needed.

This is a prose-only profile refinement.

---

## Acceptance criteria

The task is complete when:

- LinkedIn About immediately communicates the MS -> PhD continuity;
- homepage About communicates the same trajectory;
- Learning-Augmented Optimization remains the primary identity;
- current large-scale multi-period MIP work remains clearly visible;
- temporal representation learning is clearly the foundation of the earlier work;
- sequential decision-making appears as a broader objective/application of the methodology, not as a replacement field label;
- no application domain dominates the profile;
- no unsupported industry keywords are added;
- CV, publications, skills, experience records, dates, links, and design are otherwise unchanged.
