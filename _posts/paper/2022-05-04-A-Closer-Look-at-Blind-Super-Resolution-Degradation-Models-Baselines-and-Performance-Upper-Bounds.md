---
title:  'A Closer Look at Blind Super-Resolution: Degradation Models, Baselines, and Performance Upper Bounds'  #  Paper title, covered by ''
teser: clook.png
type:   paper
pro_type: Image Super-Resolution
layout: post  #  Do not change this
date:   2022-05-03 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Wenlong Zhang, Guangyuan Shi, Yihao Liu, Chao Dong, Xiao-Ming Wu
venue:  Computer Vision and Pattern Recognition Workshop (CVPRW), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  May # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/WenlongZhang0517/CloserLookBlindSR  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/pdf/2205.04910.pdf # post paper pdf link here
---

Degradation models play an important role in Blind super-resolution (SR). The classical degradation model, which mainly involves blur degradation, is too simple to simulate real-world scenarios. The recently proposed practical degradation model includes a full spectrum of degradation types, but only considers complex cases that use all degradation types in the degradation process, while ignoring many important corner cases that are common in the real world. To address this problem, we propose a unified gated degradation model to generate a broad set of degradation cases using a random gate controller. Based on the gated degradation model, we propose simple baseline networks that can effectively handle non-blind, classical, practical degradation cases as well as many other corner cases. To fairly evaluate the performance of our baseline networks against state-of-the-art methods and understand their limits, we introduce the performance upper bound of an SR network for every degradation type. Our empirical analysis shows that with the unified gated degradation model, the proposed baselines can achieve much better performance than existing methods in quantitative and qualitative results, which are close to the performance upper bounds.

