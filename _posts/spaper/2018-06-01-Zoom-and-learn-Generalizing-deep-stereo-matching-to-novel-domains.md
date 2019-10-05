---
title:  'Zoom and Learn: Generalizing Deep Stereo Matching to Novel Domains'  #  Paper title, covered by ''
teser: zal.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2018-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jiahao Pang, Wenxiu Sun, Chengxi Yang, Jimmy Ren, Ruichao Xiao, Jin Zeng, Liang Lin  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2018
year:   2018  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : http://openaccess.thecvf.com/content_cvpr_2018/Supplemental/1078-supp.pdf
data: None
code: https://github.com/Artifineuro/zole
paperLink: http://openaccess.thecvf.com/content_cvpr_2018/papers/Pang_Zoom_and_Learn_CVPR_2018_paper.pdf
---

Despite the recent success of stereo matching with convolutional neural networks (CNNs), it remains arduous to generalize a pre-trained deep stereo model to a novel domain. A major difficulty is to collect accurate ground-truth disparities for stereo pairs in the target domain. In this work, we propose a self-adaptation approach for CNN training, utilizing both synthetic training data (with ground-truth disparities) and stereo pairs in the new domain (without ground-truths). Our method is driven by two empirical observations. By feeding real stereo pairs of different domains to stereo models pre-trained with synthetic data, we see that: i) a pre-trained model does not generalize well to the new domain, producing artifacts at boundaries and ill-posed regions; however, ii) feeding an up-sampled stereo pair leads to a disparity map with extra details. To avoid i) while exploiting ii), we formulate an iterative optimization problem with graph Laplacian regularization. At each iteration, the CNN adapts itself better to the new domain: we let the CNN learn its own higher-resolution output; at the meanwhile, a graph Laplacian regularization is imposed to discriminatively keep the desired edges while smoothing out the artifacts. We demonstrate the effectiveness of our method in two domains: daily scenes collected by smartphone cameras, and street views captured in a driving car.


