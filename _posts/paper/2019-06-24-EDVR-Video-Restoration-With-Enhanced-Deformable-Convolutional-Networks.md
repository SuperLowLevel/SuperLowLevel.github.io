---
title:  'EDVR: Video Restoration With Enhanced Deformable Convolutional Networks'  #  Paper title, covered by ''
type:   paper
layout: post  #  Do not change this
date:   2019-06-24 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xintao Wang, Kelvin C.K. Chan, Ke Yu, Chao Dong, Chen Change Loy  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2019  # paper year, number
month:  April  # paper month, full name
projectPage: https://xinntao.github.io/projects/EDVR  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/xinntao/EDVR  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_CVPRW_2019/papers/NTIRE/Wang_EDVR_Video_Restoration_With_Enhanced_Deformable_Convolutional_Networks_CVPRW_2019_paper.pdf  # post paper pdf link here
---

Video restoration tasks, including super-resolution, deblurring, etc, are drawing increasing attention in the computer vision community. A challenging benchmark named REDS is released in the NTIRE19 Challenge. This new benchmark challenges existing methods from two aspects: (1) how to align multiple frames given large motions, and (2) how to effectively fuse different frames with diverse motion and blur. In this work, we propose a novel Video Restoration framework with Enhanced Deformable convolutions, termed EDVR, to address these challenges. First, to handle large motions, we devise a Pyramid, Cascading and Deformable (PCD) alignment module, in which frame alignment is done at the feature level using deformable convolutions in a coarse-to-fine manner. Second, we propose a Temporal and Spatial Attention (TSA) fusion module, in which attention is applied both temporally and spatially, so as to emphasize important features for subsequent restoration. Thanks to these modules, our EDVR wins the champions and outperforms the second place by a large margin in all four tracks in the NTIRE19 video restoration and enhancement challenges. EDVR also demonstrates superior performance to state-of-the-art published methods on video super-resolution and deblurring. The code is available at https://github.com/xinntao/EDVR