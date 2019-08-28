---
title:  'Recovering Realistic Texture in Image Super-Resolution by Deep Spatial Feature Transform'  #  Paper title, covered by ''
type:   paper
teser: sftgan.png
layout: post  #  Do not change this
date:   2018-06-21 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xintao Wang, Ke Yu, Chao Dong, Chen Change Loy  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2018  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2018  # paper year, number
month:  June  # paper month, full name
projectPage: http://mmlab.ie.cuhk.edu.hk/projects/SFTGAN/  # If has project page, link here, otherwise None
supplemental : http://mmlab.ie.cuhk.edu.hk/projects/SFTGAN/suport/cvpr18_sftgan_supp.pdf
data: https://drive.google.com/drive/folders/1iZfzAxAwOpeutz27HC56_y5RNqnsPPKr?usp=sharing  # If has data, post data link here, otherwise None
code: https://github.com/xinntao/SFTGAN  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_cvpr_2018/papers/Wang_Recovering_Realistic_Texture_CVPR_2018_paper.pdf  # post paper pdf link here
---

Despite that convolutional neural networks (CNN) have recently demonstrated high-quality reconstruction for single-image super-resolution (SR), recovering natural and realistic texture remains a challenging problem. In this paper, we show that it is possible to recover textures faithful to semantic classes. In particular, we only need to modulate features of a few intermediate layers in a single network conditioned on semantic segmentation probability maps. This is made possible through a novel Spatial Feature Transform (SFT) layer that generates affine transformation parameters for spatial-wise feature modulation. SFT layers can be trained end-to-end together with the SR network using the same loss function. During testing, it accepts an input image of arbitrary size and generates a high-resolution image with just a single forward pass conditioned on the categorical priors. Our final results show that an SR network equipped with SFT can generate more realistic and visually pleasing textures in comparison to state-of-the-art SRGAN and EnhanceNet.