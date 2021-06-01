---
title:  'BasicVSR: The Search for Essential Components in Video Super-Resolution and Beyond'  #  Paper title, covered by '
type: paper
pro_type: Video Super-Resolution
teser: basicvsr.png
layout: post  #  Do not change this
date:   2021-03-23 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Kelvin C.K. Chan, Xintao Wang, Ke Yu, Chao Dong, Chen Change Loy  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2021  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2021  # paper year, number
month:  June  # paper month, full name
projectPage: https://ckkelvinchan.github.io/projects/BasicVSR/
supplemental : None
data: None # If has data, post data link here, otherwise None
code: https://github.com/ckkelvinchan/BasicVSR-IconVSR
paperLink: https://arxiv.org/abs/2012.02181
---

Video super-resolution (VSR) approaches tend to have more components than the image counterparts as they need to exploit the additional temporal dimension. Complex designs are not uncommon. In this study, we wish to untangle the knots and reconsider some most essential components for VSR guided by four basic functionalities, i.e., Propagation, Alignment, Aggregation, and Upsampling. By reusing some existing components added with minimal redesigns, we show a succinct pipeline, BasicVSR, that achieves appealing improvements in terms of speed and restoration quality in comparison to many state-of-the-art algorithms. We conduct systematic analysis to explain how such gain can be obtained and discuss the pitfalls. We further show the extensibility of BasicVSR by presenting an information-refill mechanism and a coupled propagation scheme to facilitate information aggregation. The BasicVSR and its extension, IconVSR, can serve as strong baselines for future VSR approaches.
