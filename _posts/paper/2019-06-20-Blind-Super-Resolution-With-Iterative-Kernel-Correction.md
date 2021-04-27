---
title:  'Blind Super-Resolution With Iterative Kernel Correction'  #  Paper title, covered by ''
type:   paper
pro_type: Image Super-Resolution
teser: ikc.png
layout: post  #  Do not change this
date:   2019-06-20 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jinjin Gu, Hannan Lu, Wangmeng Zuo, Chao Dong  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage: http://www.jasongt.com/projectpages/IKC.html  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_CVPR_2019/papers/Gu_Blind_Super-Resolution_With_Iterative_Kernel_Correction_CVPR_2019_paper.pdf  # post paper pdf link here
---

Deep learning based methods have dominated super-resolution (SR) field due to their remarkable performance in terms of effectiveness and efficiency. Most of these methods assume that the blur kernel during downsampling is predefined/known (e.g., bicubic). However, the blur kernels involved in real applications are complicated and unknown, resulting in severe performance drop for the advanced SR methods. In this paper, we propose an Iterative Kernel Correction (IKC) method for blur kernel estimation in blind SR problem, where the blur kernels are unknown. We draw the observation that kernel mismatch could bring regular artifacts (either over-sharpening or over-smoothing), which can be applied to correct inaccurate blur kernels. Thus we introduce an iterative correction scheme -- IKC that achieves better results than direct kernel estimation. We further propose an effective SR network architecture using spatial feature transform (SFT) layers to handle multiple blur kernels, named SFTMD. Extensive experiments on synthetic and real-world images show that the proposed IKC method with SFTMD can provide visually favorable SR results and the state-of-the-art performance in blind SR problem.