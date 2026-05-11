---
title:  'TurboFill: Adapting Few-step Text-to-image Model for Fast Image Inpainting'
teser: TurboFill.png
type:   paper
pro_type: Image Editing
layout: post
date:   2025-06-02 11:59:59 +0800
author: Liangbin Xie, Daniil Pakhomov, Zhonghao Wang, Zongze Wu, Ziyan Chen, Yuqian Zhou, Haitian Zheng, Zhifei Zhang, Zhe Lin, Jiantao Zhou, Chao Dong
venue:  IEEE Computer Vision and Pattern Recognition Conference (CVPR), 2025
year:   2025
month:  June
projectPage: None
supplemental : None
data: None
code: None
paperLink: https://ieeexplore.ieee.org/document/11093016
---

This paper introduces TurboFill, a fast image inpainting model that enhances a few-step text-to-image diffusion model with an inpainting adapter for high-quality and efficient inpainting. While standard diffusion models generate high-quality results, they incur high computational costs. We overcome this by training an inpainting adapter on a few-step distilled text-to-image model, DMD2, using a novel 3-step adversarial training scheme to ensure realistic, structurally consistent, and visually harmonious inpainted regions. To evaluate TurboFill, we propose two benchmarks: DilationBench, which tests performance across mask sizes, and HumanBench, based on human feedback for complex prompts. Experiments show that TurboFill outperforms both multi-step BrushNet and few-step inpainting methods, setting a new benchmark for high-performance inpainting tasks.

