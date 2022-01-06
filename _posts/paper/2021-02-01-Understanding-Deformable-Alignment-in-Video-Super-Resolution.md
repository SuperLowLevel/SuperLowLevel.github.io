---
title:  'Understanding Deformable Alignment in Video Super-Resolution'  #  Paper title, covered by ''
teser: uda.png
type:   paper
pro_type: Video Super-Resolution
layout: post  #  Do not change this
date:   2021-02-1 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Kelvin C.K. Chan, Xintao Wang, Ke Yu, Chao Dong, Chen Change Loy # authors information
venue:  AAAI Conference on Artificial Intelligence (AAAI), 2021  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  February  # paper month, full name
projectPage: https://ckkelvinchan.github.io/projects/DCN/
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/ckkelvinchan/offset-fidelity-loss
paperLink: https://ojs.aaai.org/index.php/AAAI/article/view/16181/15988
---

Deformable convolution, originally proposed for the adaptation to geometric variations of objects, has recently shown compelling performance in aligning multiple frames and is increasingly adopted for video super-resolution. Despite its remarkable performance, its underlying mechanism for alignment remains unclear. In this study, we carefully investigate the relation between deformable alignment and the classic flow-based alignment. We show that deformable convolution can be decomposed into a combination of spatial warping and convolution. This decomposition reveals the commonality of deformable alignment and flow-based alignment in formulation, but with a key difference in their offset diversity. We further demonstrate through experiments that the increased diversity in deformable alignment yields better-aligned features, and hence significantly improves the quality of video super-resolution output. Based on our observations, we propose an offset-fidelity loss that guides the offset learning with optical flow. Experiments show that our loss successfully avoids the overflow of offsets and alleviates the instability problem of deformable alignment. Aside from the contributions to deformable alignment, our formulation inspires a more flexible approach to introduce offset diversity to flow-based alignment, improving its performance.
