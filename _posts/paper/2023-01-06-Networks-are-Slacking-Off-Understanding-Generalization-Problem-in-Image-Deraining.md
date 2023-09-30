---
title:  'Networks are Slacking Off: Understanding Generalization Problem in Image Deraining'  #  Paper title, covered by ''
teser: Networks are Slacking Off_Understanding Generalization Problem in Image Deraining.png
type:   paper
pro_type: Image Deraining
layout: post  #  Do not change this
date:   2023-01-06 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jinjin Gu, Xianzheng Ma, Xiangtao Kong, Yu Qiao, Chao Dong # authors information
venue:  Conference and Workshop on Neural Information Processing Systems(NeurIPS), 2023 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  Sep # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2305.15134 # post paper pdf link here
---

Deep deraining networks, while successful in laboratory benchmarks, consistently encounter substantial generalization issues when deployed in real-world applications. A prevailing perspective in deep learning encourages the use of highly complex training data, with the expectation that a richer image content knowledge will facilitate overcoming the generalization problem. However, through comprehensive and systematic experimentation, we discovered that this strategy does not enhance the generalization capability of these networks. On the contrary, it exacerbates the tendency of networks to overfit to specific degradations. Our experiments reveal that better generalization in a deraining network can be achieved by simplifying the complexity of the training data. This is due to the networks are slacking off during training, that is, learning the least complex elements in the image content and degradation to minimize training loss. When the complexity of the background image is less than that of the rain streaks, the network will prioritize the reconstruction of the background, thereby avoiding overfitting to the rain patterns and resulting in improved generalization performance. Our research not only offers a valuable perspective and methodology for better understanding the generalization problem in low-level vision tasks, but also displays promising practical potential.