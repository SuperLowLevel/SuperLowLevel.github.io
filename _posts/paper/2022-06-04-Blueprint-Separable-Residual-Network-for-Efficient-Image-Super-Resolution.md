---
title:  'Blueprint Separable Residual Network for Efficient Image Super-Resolution'  #  Paper title, covered by ''
teser: bsrn.png
type:   paper
pro_type: Image Super-Resolution
layout: post  #  Do not change this
date:   2022-06-03 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Zheyuan Li, Yingqi Liu, Xiangyu Chen, Haoming Cai, Jinjin Gu, Yu Qiao, Chao Dong
venue:  Computer Vision and Pattern Recognition Workshop (CVPRW), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  June # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/xiaom233/BSRN  # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/CVPR2022W/NTIRE/papers/Li_Blueprint_Separable_Residual_Network_for_Efficient_Image_Super-Resolution_CVPRW_2022_paper.pdf # post paper pdf link here
---

Recent advances in single image super-resolution (SISR) have achieved extraordinary performance, but the computational cost is too heavy to apply in edge devices. To alleviate this problem, many novel and effective solutions have been proposed. Convolutional neural network (CNN) with the attention mechanism has attracted increasing attention due to its efficiency and effectiveness. However, there is still redundancy in the convolution operation. In this paper, we propose Blueprint Separable Residual Network (BSRN) containing two efficient designs. One is the usage of blueprint separable convolution (BSConv), which takes place of the redundant convolution operation. The other is to enhance the model ability by introducing more effective attention modules. The experimental results show that BSRN achieves state-of-the-art performance among existing efficient SR methods. Moreover, a smaller variant of our model BSRN-S won the first place in model complexity track of NTIRE 2022 Efficient SR Challenge. The code is available at https://github.com/xiaom233/BSRN.

