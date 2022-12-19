---
title:  'Very Lightweight Photo Retouching Network with Conditional Sequential Modulation'  #  Paper title, covered by ''
teser: Very Lightweight Photo.png
type:   paper
pro_type: Photo retouching, Image enhancement
layout: post  #  Do not change this
date:   2022-07-24 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yihao Liu, Jingwen He, Xiangyu Chen, Zhengwen Zhang, Hengyuan Zhao, Chao Dong, Yu Qiao
venue:  IEEE Transactions on Multimedia (TMM), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  June # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/lyh-18/CSRNet  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9786805 # post paper pdf link here
---
Photo retouching aims at improving the aesthetic
visual quality of images that suffer from photographic defects, especially for poor contrast, over/under exposure, and
inharmonious saturation. In practice, photo retouching can be
accomplished by a series of image processing operations. As most
commonly-used retouching operations are pixel-independent, i.e.,
the manipulation on one pixel is uncorrelated with its neighboring
pixels, we can take advantage of this property and design
a specialized algorithm for efficient global photo retouching.
We analyze these global operations and find that they can
be mathematically formulated by a Multi-Layer Perceptron
(MLP). Based on this observation, we propose an extremely
lightweight framework – Conditional Sequential Retouching
Network (CSRNet). Benefiting from the utilization of 1 × 1
convolution, CSRNet only contains less than 37K trainable
parameters, which are orders of magnitude smaller than existing
learning-based methods. Experiments show that our method
achieves state-of-the-art performance on the benchmark MITAdobe FiveK dataset quantitively and qualitatively. In addition
to achieve global photo retouching, the proposed framework
can be easily extended to learn local enhancement effects. The
extended model, namely CSRNet-L, also achieves competitive
results in various local enhancement tasks.
