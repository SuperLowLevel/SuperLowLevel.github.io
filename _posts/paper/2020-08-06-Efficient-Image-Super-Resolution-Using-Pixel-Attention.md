---
title:  'Efficient Image Super-Resolution Using Pixel Attention'  #  Paper title, covered by ''
teser: PAN.png
type:   paper
pro_type: Image Restoration
layout: post  #  Do not change this
date:   2020-07-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Hengyuan Zhao, Xiangtao Kong, Jingwen He, Yu Qiao and Chao Dong # authors information
venue:  The European Conference on Computer Vision, AIM Workshop (ECCVW), 2020  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2020  # paper year, number
month:  September  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/zhaohengyuan1/PAN  # If has data, post code link here, otherwise None
paperLink: http://xpixel.group/paper/PAN.pdf  # post paper pdf link here
---
This work aims at designing a lightweight convolutional neural network for image super resolution (SR). With simplicity bare in
mind, we construct a pretty concise and effective network with a newly
proposed pixel attention scheme. Pixel attention (PA) is similar as channel attention and spatial attention in formulation. The difference is that
PA produces 3D attention maps instead of a 1D attention vector or
a 2D map. This attention scheme introduces fewer additional parameters but generates better SR results. On the basis of PA, we propose
two building blocks for the main branch and the reconstruction branch,
respectively. The first one — SC-PA block has the same structure as
the Self-Calibrated convolution but with our PA layer. This block is
much more efficient than conventional residual/dense blocks, for its twobranch architecture and attention scheme. While the second one — UPA block combines the nearest-neighbor upsampling, convolution and
PA layers. It improves the final reconstruction quality with little parameter cost. Our final model — PAN could achieve similar performance as
the lightweight networks — SRResNet and CARN, but with only 272K
parameters (17.92% of SRResNet and 17.09% of CARN). The effectiveness of each proposed component is also validated by ablation study. The
code is available at https://github.com/zhaohengyuan1/PAN.
