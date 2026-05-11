---
title:  'Diffbir: Toward blind image restoration with generative diffusion prior'
teser: DiffBIRnew.png
type:   paper
pro_type: Image Restoration
layout: post
date:   2024-09-02 11:59:59 +0800
author: Xinqi Lin, Jingwen He, Ziyan Chen, Zhaoyang Lyu, Bo Dai, Fanghua Yu, Yu Qiao, Wanli Ouyang, Chao Dong
venue:  European Conference on Computer Vision (ECCV), 2024
year:   2024
month:  September
projectPage: None
supplemental : None
data: None
code: https://github.com/XPixelGroup/DiffBIR
paperLink: https://link.springer.com/chapter/10.1007/978-3-031-73202-7_25
---

We present DiffBIR, a general restoration pipeline that could handle different blind image restoration tasks in a unified framework. DiffBIR decouples blind image restoration problem into two stages: 1) degradation removal: removing image-independent content; 2) information regeneration: generating the lost image content. Each stage is developed independently but they work seamlessly in a cascaded manner. In the first stage, we use restoration modules to remove degradations and obtain high-fidelity restored results. For the second stage, we propose IRControlNet that leverages the generative ability of latent diffusion models to generate realistic details. Specifically, IRControlNet is trained based on specially produced condition images without distracting noisy content for stable generation performance. Moreover, we design a region-adaptive restoration guidance that can modify the denoising process during inference without model re-training, allowing users to balance quality and fidelity through a tunable guidance scale. Extensive experiments have demonstrated DiffBIR's superiority over state-of-the-art approaches for blind image super-resolution, blind face restoration and blind image denoising tasks on both synthetic and real-world datasets.

