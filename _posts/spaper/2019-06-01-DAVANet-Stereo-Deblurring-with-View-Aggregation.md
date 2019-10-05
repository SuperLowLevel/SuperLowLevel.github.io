---
title:  'DAVANet: Stereo Deblurring with View Aggregation'  #  Paper title, covered by ''
teser: davanet.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Shangchen Zhou, Jiawei Zhang, Wangmeng Zuo, Haozhe Xie, Jinshan Pan, Jimmy S. Ren  # authors information
venue:  Computer Vision and Pattern Recognition, oral (CVPR oral), 2019
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None
data: https://stereoblur.shangchenzhou.com/  # If has data, post data link here, otherwise None
code: https://github.com/sczhou/DAVANet  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/1904.05065.pdf  # post paper pdf link here
---

Nowadays stereo cameras are more commonly adopted in emerging devices such as dual-lens smartphones and unmanned aerial vehicles. However, they also suffer from blurry images in dynamic scenes which leads to visual discomfort and hampers further image processing. Previous works have succeeded in monocular deblurring, yet there are few studies on deblurring for stereoscopic images. By exploiting the two-view nature of stereo images, we propose a novel stereo image deblurring network with Depth Awareness and View Aggregation, named DAVANet. In our proposed network, 3D scene cues from the depth and varying information from two views are incorporated, which help to remove complex spatially-varying blur in dynamic scenes. Specifically, with our proposed fusion network, we integrate the bidirectional disparities estimation and deblurring into a unified framework. Moreover, we present a large-scale multi-scene dataset for stereo deblurring, containing 20,637 blurry-sharp stereo image pairs from 135 diverse sequences and their corresponding bidirectional disparities. The experimental results on our dataset demonstrate that DAVANet outperforms state-of-the-art methods in terms of accuracy, speed, and model size.