---
title:  'Reflash Dropout in Image Super-Resolution'  #  Paper title, covered by ''
teser: dropout.png
type:   paper
pro_type: Image Super-Resolution
layout: post  #  Do not change this
date:   2021-12-22 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xiangtao Kong*, Xina Liu*, Jinjin Gu, Yu Qiao, Chao Dong  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  March  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  https://github.com/Xiangtaokong/Reflash-Dropout-in-Image-Super-Resolution
paperLink: https://arxiv.org/pdf/2112.12089.pdf # post paper pdf link here
---

Dropout is designed to relieve the overfitting problem in high-level vision tasks but is rarely applied in low-level vision tasks, like image super-resolution (SR). As a classic regression problem, SR exhibits a different behaviour as high-level tasks and is sensitive to the dropout operation. However, in this paper, we show that appropriate usage of dropout benefits SR networks and improves the generalization ability. Specifically, dropout is better embedded at the end of the network and is significantly helpful for the multi-degradation settings. This discovery breaks our common sense and inspires us to explore its working mechanism. We further use two analysis tools -- one is from recent network interpretation works, and the other is specially designed for this task. The analysis results provide side proofs to our experimental findings and show us a new perspective to understand SR networks.

