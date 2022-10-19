---
title:  'Rethinking Alignment in Video Super-Resolution Transformers'  #  Paper title, covered by ''
teser: alignment.png
type:   paper
pro_type: Video Super-Resolution
layout: post  #  Do not change this
date:   2022-09-19 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Shuwei Shi, Jinjin Gu, Liangbin Xie, Xintao Wang, Yujiu Yang, Chao Dong
venue:  Conference and Workshop on Neural Information Processing Systems, 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  September # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/xpixelgroup/rethinkvsralignment  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2207.08494 # post paper pdf link here
---

The alignment of adjacent frames is considered an essential operation in video super-resolution (VSR). Advanced VSR models, including the latest VSR Transformers, are generally equipped with well-designed alignment modules. However, the progress of the self-attention mechanism may violate this common sense. In this paper, we rethink the role of alignment in VSR Transformers and make several counter-intuitive observations. Our experiments show that: (i) VSR Transformers can directly utilize multi-frame information from unaligned videos, and (ii) existing alignment methods are sometimes harmful to VSR Transformers. These observations indicate that we can further improve the performance of VSR Transformers simply by removing the alignment module and adopting a larger attention window. Nevertheless, such designs will dramatically increase the computational burden, and cannot deal with large motions. Therefore, we propose a new and efficient alignment method called patch alignment, which aligns image patches instead of pixels. VSR Transformers equipped with patch alignment could demonstrate state-of-the-art performance on multiple benchmarks. Our work provides valuable insights on how multi-frame information is used in VSR and how to select alignment methods for different networks/datasets. 

