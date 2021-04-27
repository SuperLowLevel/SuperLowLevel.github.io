---
title:  'Unsupervised Image Super-Resolution Using Cycle-in-Cycle Generative Adversarial Networks'  #  Paper title, covered by ''
type:   paper
pro_type: Image Super-Resolution
teser: cycincyc.png
layout: post  #  Do not change this
date:   2018-03-27 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yuan Yuan, Siyuan Liu, Jiawei Zhang, Yongbing Zhang, Chao Dong, Liang Lin  # authors information
venue:  Computer Vision and Pattern Recognition, NTIRE Workshop (CVPRW), 2018  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2018  # paper year, number
month:  March  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_cvpr_2018_workshops/papers/w13/Yuan_Unsupervised_Image_Super-Resolution_CVPR_2018_paper.pdf  # post paper pdf link here
---

We consider the single image super-resolution problem in a more general case that the low-/high-resolution pairs and the down-sampling process are unavailable. Different from traditional super-resolution formulation, the low-resolution input is further degraded by noises and blurring. This complicated setting makes supervised learning and accurate kernel estimation impossible. To solve this problem, we resort to unsupervised learning without paired data, inspired by the recent successful image-to-image translation applications. With generative adversarial networks (GAN) as the basic component, we propose a Cycle-in-Cycle network structure to tackle the problem within three steps. First, the noisy and blurry input is mapped to a noise-free low-resolution space. Then the intermediate image is up-sampled with a pre-trained deep model. Finally, we fine-tune the two modules in an end-to-end manner to get the high-resolution output. Experiments on NTIRE2018 datasets demonstrate that the proposed unsupervised method achieves comparable results as the state-of-the-art supervised models.