---
title:  'Deep Surface Normal Estimation with Hierarchical RGB-D Fusion'  #  Paper title, covered by ''
teser: rgb.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jin Zeng, Yanfeng Tong, Yunmu Huang, Qiong Yan, Wenxiu Sun, Jing Chen, Yongtian Wan  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2019
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/pdf/1904.03405.pdf  # post paper pdf link here
---

The growing availability of commodity RGB-D cameras has boosted the applications in the field of scene understanding. However, as a fundamental scene understanding task, surface normal estimation from RGB-D data lacks thorough investigation. In this paper, a hierarchical fusion network with adaptive feature re-weighting is proposed for surface normal estimation from a single RGB-D image. Specifically, the features from color image and depth are successively integrated at multiple scales to ensure global surface smoothness while preserving visually salient details. Meanwhile, the depth features are re-weighted with a confidence map estimated from depth before merging into the color branch to avoid artifacts caused by input depth corruption. Additionally, a hybrid multi-scale loss function is designed to learn accurate normal estimation given noisy ground-truth dataset. Extensive experimental results validate the effectiveness of the fusion strategy and the loss design, outperforming state-of-the-art normal estimation schemes.
