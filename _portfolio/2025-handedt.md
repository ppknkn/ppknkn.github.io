---
title: "HandEdit: First-person Hand-to-Robot-Hand Image Editing Benchmark"
excerpt: "A benchmark that replaces first-person human hands with robot dexterous hands for embodied AI; led data construction and produced 90% of the EgoDex dataset."
collection: portfolio
---

**Role:** Core member · Data construction · [github.com/HandEdit/HandEdit](https://github.com/HandEdit/HandEdit)

HandEdit replaces the human hand/arm in first-person video with a specified robot embodiment, generating large-scale pseudo-ground-truth data and an evaluation benchmark for embodied AI.

- **Robot selection**: chose mechanical arm + dexterous hand combinations balancing degrees of freedom, kinematic reachability, and morphological diversity.
- **URDF modeling**: built, organized, and textured robot 3D models (URDF) with unified link/joint/material definitions to support batch rendering.
- **Data pipeline**: built a background-inpaint + dexterous-hand retarget batch workflow, producing **90%** of the EgoDex dataset.
