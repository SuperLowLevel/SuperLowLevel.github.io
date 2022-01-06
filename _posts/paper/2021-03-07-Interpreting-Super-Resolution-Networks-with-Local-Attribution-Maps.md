---
title:  'Interpreting Super-Resolution Networks with Local Attribution Maps'  #  Paper title, covered by ''
type: paper
pro_type: Image Super-Resolution
teser: LAM.png
layout: post  #  Do not change this
date:   2021-03-23 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jinjin Gu, Chao Dong  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2021  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2021  # paper year, number
month:  June  # paper month, full name
projectPage: https://x-lowlevel-vision.github.io/lam.html # If has project page, link here, otherwise None
supplemental : None
data: None # If has data, post data link here, otherwise None
code: None
paperLink: https://openaccess.thecvf.com/content/CVPR2021/papers/Gu_Interpreting_Super-Resolution_Networks_With_Local_Attribution_Maps_CVPR_2021_paper.pdf  # post paper pdf link here
---

Image super-resolution (SR) techniques have been developing rapidly, benefiting from the invention of deep networks and its successive breakthroughs. However, it is acknowledged that deep learning and deep neural networks are difficult to interpret. SR networks inherit this mysterious nature and little works make attempt to understand them. In this paper, we perform attribution analysis of SR networks, which aims at finding the input pixels that strongly influence the SR results. We propose a novel attribution approach called local attribution map (LAM), which inherits the integral gradient method yet with two unique features. One is to use the blurred image as the baseline input, and the other is to adopt the progressive blurring function as the path function. Based on LAM, we show that: (1) SR networks with a wider range of involved input pixels could achieve better performance. (2) Attention networks and non-local networks extract features from a wider range of input pixels. (3) Comparing with the range that actually contributes, the receptive field is large enough for most deep networks. (4) For SR networks, textures with regular stripes or grids are more likely to be noticed, while complex semantics are difficult to utilize. Our work opens new directions for designing SR networks and interpreting low-level vision deep models.