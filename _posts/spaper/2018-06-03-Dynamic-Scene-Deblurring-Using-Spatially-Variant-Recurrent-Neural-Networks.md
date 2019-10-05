---
title:  'Dynamic Scene Deblurring Using Spatially Variant Recurrent Neural Networks'  #  Paper title, covered by ''
teser: dsdu.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2018-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jiawei Zhang, Jinshan Pan, Jimmy Ren, Yibing Song, Linchao Bao, Rynson W.H. Lau, Ming-Hsuan Yang  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR spotlight), 2018
year:   2018  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None 
data: None
code: https://github.com/zhjwustc/cvpr18_rnn_deblur_matcaffe
paperLink: http://openaccess.thecvf.com/content_cvpr_2018/papers/Zhang_Dynamic_Scene_Deblurring_CVPR_2018_paper.pdf
---

Due to the spatially variant blur caused by camera shake and object motions under different scene depths, deblurring images captured from dynamic scenes is challenging. Although recent works based on deep neural networks have shown great progress on this problem, their models are usually large and computationally expensive. In this paper, we propose a novel spatially variant neural network to address the problem. The proposed network is composed of three deep convolutional neural networks (CNNs) and a recurrent neural network (RNN). RNN is used as a deconvolution operator performed on feature maps extracted from the input image by one of the CNNs. Another CNN is used to learn the weights for the RNN at every location. As a result, the RNN is spatially variant and could implicitly model the deblurring process with spatially variant kernels. The third CNN is used to reconstruct the final deblurred feature maps into restored image. The whole network is end-to-end trainable. Our analysis shows that the proposed network has a large receptive field even with a small model size. Quantitative and qualitative evaluations on public datasets demonstrate that the proposed method performs favorably against state-of-the-art algorithms in terms of accuracy, speed, and model size.


