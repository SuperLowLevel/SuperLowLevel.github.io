---
title:  'Efficient Image Super-Resolution using Vast-Receptive-Field Attention'  #  Paper title, covered by ''
teser: VapSR.png
type:   paper
pro_type: Efficient Image Super-Resolution 
layout: post  #  Do not change this
date:   2022-09-21 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Lin Zhou, Haoming Cai, Jinjin Gu, Zheyuan Li, Yingqi Liu, Xiangyu Chen, Yu Qiao, Chao Dong
venue:  The European Conference on Computer Vision Workshop (ECCVW), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  September # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/zhoumumu/VapSR # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2210.05960 # post paper pdf link here
---

The attention mechanism plays a pivotal role in designing advanced super-resolution (SR) networks. In this work, we design an efficient SR network by improving the attention mechanism. We start from a simple pixel attention module and gradually modify it to achieve better super-resolution performance with reduced parameters. The specific approaches include: (1) increasing the receptive field of the attention branch, (2) replacing large dense convolution kernels with depth-wise separable convolutions, and (3) introducing pixel normalization. These approaches paint a clear evolutionary roadmap for the design of attention mechanisms. Based on these observations, we propose VapSR, the VAst-receptive-field Pixel attention network. Experiments demonstrate the superior performance of VapSR. VapSR outperforms the present lightweight networks with even fewer parameters. And the light version of VapSR can use only 21.68% and 28.18% parameters of IMDB and RFDN to achieve similar performances to those networks.