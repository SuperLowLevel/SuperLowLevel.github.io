---
title:  'Path-Restore: Learning Network Path Selection for Image Restoration'  #  Paper title, covered by ''
teser: Path-Restore.png
type:   paper
pro_type: Image Restoration
layout: post  #  Do not change this
date:   2021-07-22 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Ke Yu, Xintao Wang, Chao Dong, Xiaoou Tang, Chen Change Loy  # authors information
venue:  IEEE TRANSACTIONS ON PATTERN ANALYSIS AND MACHINE INTELLIGENCE (PAMI), 2021 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  July  # paper month, full name
projectPage: https://www.mmlab-ntu.com/project/pathrestore/index.html  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/yuke93/Path-Restore  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/document/9483659 # post paper pdf link here
---

Very deep Convolutional Neural Networks (CNNs) have greatly improved the performance on various image restoration tasks. However, this comes at a price of increasing computational burden, hence limiting their practical usages. We observe that some corrupted image regions are inherently easier to restore than others since the distortion and content vary within an image. To leverage this, we propose Path-Restore, a multi-path CNN with a pathfinder that can dynamically select an appropriate route for each image region. We train the pathfinder using reinforcement learning with a difficulty-regulated reward. This reward is related to the performance, complexity and the difficulty of restoring a region. A policy mask is further investigated to jointly process all the image regions. We conduct experiments on denoising and mixed restoration tasks. The results show that our method achieves comparable or superior performance to existing approaches with less computational cost. In particular, Path-Restore is effective for real-world denoising, where the noise distribution varies across different regions on a single image. Compared to the state-of-the-art RIDNet, our method achieves comparable performance and runs 2.7x faster on the realistic Darmstadt Noise Dataset. Models and codes will be released.


