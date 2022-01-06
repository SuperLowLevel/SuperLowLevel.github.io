---
title:  'HDRUNet: Single Image HDR Reconstruction with Denoising and Dequantization'  #  Paper title, covered by '
type: paper
pro_type: Image Restoration
teser: hdrunet.png
layout: post  #  Do not change this
date:   2021-03-23 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xiangyu Chen, Yihao Liu, Zhengwen Zhang, Yu Qiao, Chao Dong  # authors information
venue:  Computer Vision and Pattern Recognition, NTIRE Workshop (CVPRW), 2021  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2021  # paper year, number
month:  June  # paper month, full name
projectPage: None
supplemental : None
data: None # If has data, post data link here, otherwise None
code: https://github.com/chxy95/HDRUNet
paperLink: https://openaccess.thecvf.com/content/CVPR2021W/NTIRE/papers/Chen_HDRUNet_Single_Image_HDR_Reconstruction_With_Denoising_and_Dequantization_CVPRW_2021_paper.pdf
---

Most consumer-grade digital cameras can only capture a limited range of luminance in real-world scenes due to sensor constraints. Besides, noise and quantization errors are often introduced in the imaging process. In order to obtain high dynamic range (HDR) images with excellent visual quality, the most common solution is to combine multiple images with different exposures. However, it is not always feasible to obtain multiple images of the same scene and most HDR reconstruction methods ignore the noise and quantization loss. In this work, we propose a novel learning-based approach using a spatially dynamic encoder-decoder network, HDRUNet, to learn an end-to-end mapping for single image HDR reconstruction with denoising and dequantization. The network consists of a UNet-style base network to make full use of the hierarchical multi-scale information, a condition network to perform pattern-specific modulation and a weighting network for selectively retaining information. Moreover, we propose a Tanh_L1 loss function to balance the impact of over-exposed values and well-exposed values on the network learning. Our method achieves the state-of-the-art performance in quantitative comparisons and visual quality. The proposed HDRUNet model won the second place in the single frame track of NITRE2021 High Dynamic Range Challenge.
