---
title:  'Shepard Convolutional Neural Networks'  #  Paper title, covered by ''
teser: scnn.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2015-12-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jimmy S. Ren, Li Xu, Qiong Yan, Wenxiu Sun  # authors information
venue:  Conference and Workshop on Neural Information Processing Systems (NeurIPS), 2015  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2015  # paper year, number
month:  December  # paper month, full name
projectPage: None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: http://papers.nips.cc/paper/5774-shepard-convolutional-neural-networks.pdf
---

Deep learning has recently been introduced to the field of low-level computer vision and image processing. Promising results have been obtained in a number of tasks including super-resolution, inpainting, deconvolution, filtering, etc. However, previously adopted neural network approaches such as convolutional neural networks and sparse auto-encoders are inherently with translation invariant operators. We found this property prevents the deep learning approaches from outperforming the state-of-the-art if the task itself requires translation variant interpolation (TVI). In this paper, we draw on Shepard interpolation and design Shepard Convolutional Neural Networks (ShCNN) which efficiently realizes end-to-end trainable TVI operators in the network. We show that by adding only a few feature maps in the new Shepard layers, the network is able to achieve stronger results than a much deeper architecture. Superior performance on both image inpainting and super-resolution is obtained where our system outperforms previous ones while keeping the running time competitive.


