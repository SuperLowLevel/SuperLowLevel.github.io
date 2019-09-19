---
title:  'Image Super-Resolution Using Deep Convolutional Networks'  #  Paper title, covered by ''
type:   paper
pro_type: Image Super-Resoltion
teser: srcnn.png
layout: post  #  Do not change this
date:   2016-02-27 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Chao Dong, Chen Change Loy, Kaiming He, Xiaoou Tang  # authors information
venue:  IEEE TRANSACTIONS ON PATTERN ANALYSIS AND MACHINE INTELLIGENCE, 2016  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2016  # paper year, number
month:  February  # paper month, full name
projectPage: http://mmlab.ie.cuhk.edu.hk/projects/SRCNN.html  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7115171  # post paper pdf link here
---

We propose a deep learning method for single image super-resolution (SR). Our method directly learns an end-to-end mapping between the low/high-resolution images. The mapping is represented as a deep convolutional neural network (CNN) that takes the low-resolution image as the input and outputs the high-resolution one. We further show that traditional sparse-coding-based SR methods can also be viewed as a deep convolutional network. But unlike traditional methods that handle each component separately, our method jointly optimizes all layers. Our deep CNN has a lightweight structure, yet demonstrates state-of-the-art restoration quality, and achieves fast speed for practical on-line usage. We explore different network structures and parameter settings to achieve trade-offs between performance and speed. Moreover, we extend our network to cope with three color channels simultaneously, and show better overall reconstruction quality.