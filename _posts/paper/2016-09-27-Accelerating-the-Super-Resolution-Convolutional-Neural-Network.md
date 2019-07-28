---
title:  'Accelerating the Super-Resolution Convolutional Neural Network'  #  Paper title, covered by ''
type:   paper
teser: fsrcnn.png
layout: post  #  Do not change this
date:   2016-09-27 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Chao Dong, Chen Change Loy, Xiaoou Tang  # authors information
venue:  The European Conference on Computer Vision (ECCV), 2016  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2016  # paper year, number
month:  September  # paper month, full name
projectPage: http://mmlab.ie.cuhk.edu.hk/projects/FSRCNN.html  # If has project page, link here, otherwise None
supplemental : None
data:   https://drive.google.com/open?id=0B7tU5Pj1dfCMVVdJelZqV0prWnM  # If has data, post data link here, otherwise None
code:   https://drive.google.com/open?id=0B7tU5Pj1dfCMVktYZUN2aV8xVTQ  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/1608.00367  # post paper pdf link here
---

As a successful deep model applied in image super-resolution (SR), the Super-Resolution Convolutional Neural Network (SRCNN) has demonstrated superior performance to the previous hand-crafted models either in speed and restoration quality. However, the high computational cost still hinders it from practical usage that demands real-time performance (24 fps). In this paper, we aim at accelerating the current SRCNN, and propose a compact hourglass-shape CNN structure for faster and better SR. We re-design the SRCNN structure mainly in three aspects. First, we introduce a deconvolution layer at the end of the network, then the mapping is learned directly from the original low-resolution image (without interpolation) to the high-resolution one. Second, we reformulate the mapping layer by shrinking the input feature dimension before mapping and expanding back afterwards. Third, we adopt smaller filter sizes but more mapping layers. The proposed model achieves a speed up of more than 40 times with even superior restoration quality. Further, we present the parameter settings that can achieve real-time performance on a generic CPU while still maintaining good performance. A corresponding transfer strategy is also proposed for fast training and testing across different upscaling factors.