---
title:  'PhotoFramer: Multi-modal Image Composition Instruction'
teser: PhotoFramer.png
type:   paper
pro_type: Image Composition
layout: post
date:   2026-03-01 11:59:59 +0800
author: Zhiyuan You, Ke Wang, He Zhang, Xin Cai, Jinjin Gu, Tianfan Xue, Chao Dong, Zhoutong Zhang
venue:  IEEE Computer Vision and Pattern Recognition Conference (CVPR), 2025
year:   2026
month:  March
projectPage: None
supplemental : None
data: None
code: https://github.com/zhiyuanyou/PhotoFramer-Assessment
paperLink: https://arxiv.org/abs/2512.00993
---

Composition matters during the photo-taking process, yet many casual users struggle to frame well-composed images. To provide composition guidance, we introduce PhotoFramer, a multi-modal composition instruction framework. Given a poorly composed image, PhotoFramer first describes how to improve the composition in natural language and then generates a well-composed example image. To train such a model, we curate a large-scale dataset. Inspired by how humans take photos, we organize composition guidance into a hierarchy of sub-tasks: shift, zoom-in, and view-change tasks. Shift and zoom-in data are sampled from existing cropping datasets, while view-change data are obtained via a two-stage pipeline. First, we sample pairs with varying viewpoints from multi-view datasets, and train a degradation model to transform well-composed photos into poorly composed ones. Second, we apply this degradation model to expert-taken photos to synthesize poor images to form training pairs. Using this dataset, we finetune a model that jointly processes and generates both text and images, enabling actionable textual guidance with illustrative examples. Extensive experiments demonstrate that textual instructions effectively steer image composition, and coupling them with exemplars yields consistent improvements over exemplar-only baselines. PhotoFramer offers a practical step toward composition assistants that make expert photographic priors accessible to everyday users.
