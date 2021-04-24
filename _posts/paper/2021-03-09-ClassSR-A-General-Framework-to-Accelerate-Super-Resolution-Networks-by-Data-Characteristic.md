---
title:  'ClassSR: A General Framework to Accelerate Super-Resolution Networks by Data Characteristic.'  #  Paper title, covered by '
type: paper
pro_type: Image Super-Resolution
teser: classsr.png
layout: post  #  Do not change this
date:   2021-03-23 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xiangtao Kong, Hengyuan Zhao, Yu Qiao, Chao Dong  # authors information
venue:  Computer Vision and Pattern Recognition, (CVPR), 2021  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2021  # paper year, number
month:  June  # paper month, full name
projectPage: None
supplemental : None
data: None # If has data, post data link here, otherwise None
code: https://github.com/Xiangtaokong/ClassSR
paperLink: https://arxiv.org/abs/2103.04039
---

We aim at accelerating super-resolution (SR) networks on large images (2K-8K). The large images are usually decomposed into small sub-images in practical usages. Based on this processing, we found that different image regions have different restoration difficulties and can be processed by networks with different capacities. Intuitively, smooth areas are easier to super-solve than complex textures. To utilize this property, we can adopt appropriate SR networks to process different sub-images after the decomposition. On this basis, we propose a new solution pipeline -- ClassSR that combines classification and SR in a unified framework. In particular, it first uses a Class-Module to classify the sub-images into different classes according to restoration difficulties, then applies an SR-Module to perform SR for different classes. The Class-Module is a conventional classification network, while the SR-Module is a network container that consists of the to-be-accelerated SR network and its simplified versions. We further introduce a new classification method with two losses -- Class-Loss and Average-Loss to produce the classification results. After joint training, a majority of sub-images will pass through smaller networks, thus the computational cost can be significantly reduced. Experiments show that our ClassSR can help most existing methods (e.g., FSRCNN, CARN, SRResNet, RCAN) save up to 50% FLOPs on DIV8K datasets. This general framework can also be applied in other low-level vision tasks.
