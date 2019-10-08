---
title:  'Learning Deformable Kernels for Image and Video Denoising'  #  Paper title, covered by ''
teser: ldki.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-04-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xiangyu Xu, Muchen Li, Wenxiu Sun  # authors information
venue:  arXiv preprint arXiv:1904.06903 (2019)
year:   2019  # paper year, number
month:  April  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: https://arxiv.org/pdf/1904.06903.pdf
---

Most of the classical denoising methods restore clear results by selecting and averaging pixels in the noisy input. Instead of relying on hand-crafted selecting and averaging strategies, we propose to explicitly learn this process with deep neural networks. Specifically, we propose deformable 2D kernels for image denoising where the sampling locations and kernel weights are both learned. The proposed kernel naturally adapts to image structures and could effectively reduce the oversmoothing artifacts. Furthermore, we develop 3D deformable kernels for video denoising to more efficiently sample pixels across the spatial-temporal space. Our method is able to solve the misalignment issues of large motion from dynamic scenes. For better training our video denoising model, we introduce the trilinear sampler and a new regularization term. We demonstrate that the proposed method performs favorably against the state-of-the-art image and video denoising approaches on both synthetic and real-world data.

