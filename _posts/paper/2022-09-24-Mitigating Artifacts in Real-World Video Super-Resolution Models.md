---
title:  'Mitigating Artifacts in Real-World Video Super-Resolution Models'  #  Paper title, covered by ''
teser: Mitigating Artifacts in Real-World Video Super-Resolution Models.png
type:   paper
pro_type: Video Super-resolution
layout: post  #  Do not change this
date:   2022-09-24 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Liangbin Xie, Xintao Wang, Honglun Zhang, Chao Dong, Ying Shan
venue:  AAAI Conference on Artificial Intelligence (AAAI), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  December # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/TencentARC/FastRealVSR  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2212.07339 # post paper pdf link here
---
The recurrent structure is a prevalent framework for the task
of video super-resolution, which models the temporal depen dency between frames via hidden states. When applied to
real-world scenarios with unknown and complex degrada tions, hidden states tend to contain unpleasant artifacts and
propagate them to restored frames. In this circumstance, our
analyses show that such artifacts can be largely alleviated
when the hidden state is replaced with a cleaner counterpart.
Based on the observations, we propose a Hidden State Attention (HSA) module to mitigate artifacts in real-world video
super-resolution. Specifically, we first adopt various cheap filters to produce a hidden state pool. For example, Gaussian
blur filters are for smoothing artifacts while sharpening filters
are for enhancing details. To aggregate a new hidden state that
contains fewer artifacts from the hidden state pool, we devise
a Selective Cross Attention (SCA) module, in which the attention between input features and each hidden state is calculated. Equipped with HSA, our proposed method, namely
FastRealVSR, is able to achieve 2× speedup while obtaining better performance than Real-BasicVSR.