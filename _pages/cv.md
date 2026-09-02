---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download PDF](/files/CV_Shi_Che.pdf){: .btn .btn--info}

## Education

**Shanghai Jiao Tong University** · Shanghai, China  
*B.Eng. in Mechanical Engineering, School of Mechanical Engineering* (Minor: Computer Science & Technology)

- Overall: GPA **90.61 / 100**, ranked **14 / 318** (top 5%); CET-6 **646**
- Mathematics & Physics: Mathematical Methods (99), Linear Algebra (89), University Physics (Honors) (92/96/90), Theoretical Mechanics (91), Mechanics of Materials (96)
- Computer Science: Data Structures (97), C++ Programming (100)

## Projects

### HandEdit — First-person Hand-to-Robot-Hand Image Editing Benchmark
*Core member · Data construction* · [github.com/HandEdit/HandEdit](https://github.com/HandEdit/HandEdit)

An image-editing benchmark that replaces first-person human hands/arms with a specified robot embodiment to generate large-scale pseudo-ground-truth data and an evaluation benchmark for embodied AI.

- **Robot selection**: chose mechanical arm + dexterous hand combinations balancing degrees of freedom, kinematic reachability, and morphological diversity.
- **URDF modeling**: built, organized, and textured robot 3D models (URDF) with unified link/joint/material definitions to support batch rendering.
- **Data pipeline**: built a background-inpaint + dexterous-hand retarget batch workflow, producing **90%** of the EgoDex dataset.
- **Research**: experienced the full cycle of data construction, quality review, and benchmark evaluation.

### RoboMaster Balance-Infantry Robot — Leg Mechanism Lightweighting & Stiffness Optimization
*Core design & manufacturing*

- **Biomimetic design**: proposed a hollow carbon-fiber leg inspired by biological bone and bicycle carbon frames; parametric modeling in SolidWorks.
- **FEA**: used SolidWorks Simulation to analyze torsional/impact behavior across layup and cross-section options.
- **Manufacturing**: adopted PMI foam core + vacuum-bag molding, resolving tolerance-fit and interlaminar bonding issues.
- **Result**: improved torsional stiffness while cutting **50 g** per leg, broadening motor response bandwidth.

### Wheel-legged Robot Jumping Optimization — Dynamics Parameter Study
*Experiment design & data analysis*

- **Testbed**: designed a modular leg test bench to study reduction ratio and nitrogen-spring pressure.
- **Optimization**: ran controlled-variable experiments across drivetrain ratios and preload (9–17 MPa), collecting speed and trajectory data.
- **Analysis**: balanced motor torque vs. tip velocity to determine the optimal **15/19 ratio** and **15 MPa** operating point.

### 10th "Shangwei Cup" National Composite Materials Design & Manufacturing Competition
*Core design*

- **Automated simulation**: scripted Abaqus (Python) to automate model–mesh–solve for batch simulations over layup/angle/thickness.
- **Rapid iteration**: analyzed batch results to quickly locate the stiffness–mass balance point, cutting the iteration cycle.

## Skills

- **Programming**: C/C++ (proficient; NOIP award), Python (data processing & simulation), STM32 embedded, Linux
- **Engineering software**: SolidWorks (proficient, incl. Simulation), Abaqus (FEA), LaTeX

## Honors & Awards

- **SAIC-GM-Wuling Scholarship** — First Prize (2025)
- **RoboMaster 2025 National University Robot Competition** — National Champion / Central Region 1st Prize (2025)
- **10th "Shangwei Cup" National Composite Materials Design & Manufacturing Competition** — National 2nd Prize (2025)
- **2026 China-US Young Maker Competition (Team Leader)** — Shanghai Region 2nd Prize (2026)
- **National 3D Digital Innovation Design Competition** — Shanghai Region 2nd Prize (2026)
