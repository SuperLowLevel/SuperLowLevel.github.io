---
title:  'Deep End-to-End Alignment and Refinement for Time-of-Flight RGB-D Module'  #  Paper title, covered by ''
teser: deea.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-10-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Di Qiu, Jiahao Pang, Wenxiu Sun, Chengxi Yang  # authors information
venue:  International Conference on Computer Vision, (ICCV), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2019  # paper year, number
month:  October  # paper month, full name
projectPage: None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: https://arxiv.org/pdf/1909.07623.pdf  # post paper pdf link here
---

Recently, it is increasingly popular to equip mobile RGB cameras with Time-of-Flight (ToF) sensors for active depth sensing. However, for off-the-shelf ToF sensors, one must tackle two problems in order to obtain high-quality depth with respect to the RGB camera, namely 1) online calibration and alignment; and 2) complicated error correction for ToF depth sensing. In this work, we propose a framework for jointly alignment and refinement via deep learning. First, a cross-modal optical flow between the RGB image and the ToF amplitude image is estimated for alignment. The aligned depth is then refined via an improved kernel predicting network that performs kernel normalization and applies the bias prior to the dynamic convolution. To enrich our data for end-to-end training, we have also synthesized a dataset using tools from computer graphics. Experimental results demonstrate the effectiveness of our approach, achieving state-of-the-art for ToF refinement.


