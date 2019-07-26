---
title:  'Deep Network Interpolation for Continuous Imagery Effect Transition'  #  Paper title, covered by ''
type:   paper
teser: dni.png
layout: post  #  Do not change this
date:   2019-06-19 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xintao Wang, Ke Yu, Chao Dong, Xiaoou Tang, Chen Change Loy  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage:  https://xinntao.github.io/projects/DNI/  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/xinntao/DNI  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_CVPR_2019/papers/Wang_Deep_Network_Interpolation_for_Continuous_Imagery_Effect_Transition_CVPR_2019_paper.pdf  # post paper pdf link here
---

Deep convolutional neural network has demonstrated its capability of learning a deterministic mapping for the desired imagery effect. However, the large variety of user flavors motivates the possibility of continuous transition among different output effects. Unlike existing methods that require a specific design to achieve one particular transition (e.g., style transfer), we propose a simple yet universal approach to attain a smooth control of diverse imagery effects in many low-level vision tasks, including image restoration, image-to-image translation, and style transfer. Specifically, our method, namely Deep Network Interpolation (DNI), applies linear interpolation in the parameter space of two or more correlated networks. A smooth control of imagery effects can be achieved by tweaking the interpolation coefficients. In addition to DNI and its broad applications, we also investigate the mechanism of network interpolation from the perspective of learned filters.