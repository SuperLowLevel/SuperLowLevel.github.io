---
title:  'Modulating Image Restoration With Continual Levels via Adaptive Feature Modification Layers'  #  Paper title, covered by ''
type:   paper
teser: modulating.png
layout: post  #  Do not change this
date:   2019-06-22 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jingwen He, Chao Dong, Yu Qiao  # authors information
venue:  Computer Vision and Pattern Recognition, oral (CVPR oral), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : http://openaccess.thecvf.com/content_CVPR_2019/supplemental/He_Modulating_Image_Restoration_CVPR_2019_supplemental.pdf
data: None # If has data, post data link here, otherwise None
code: https://github.com/hejingwenhejingwen/AdaFM  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_CVPR_2019/papers/He_Modulating_Image_Restoration_With_Continual_Levels_via_Adaptive_Feature_Modification_CVPR_2019_paper.pdf  # post paper pdf link here
---

In image restoration tasks, like denoising and superresolution, continual modulation of restoration levels is of great importance for real-world applications, but has failed most of existing deep learning based image restoration methods. Learning from discrete and fixed restoration levels, deep models cannot be easily generalized to data of continuous and unseen levels. This topic is rarely touched in literature, due to the difficulty of modulating well-trained models with certain hyper-parameters. We make a step forward by proposing a unified CNN framework that consists of little additional parameters than a single-level model yet could handle arbitrary restoration levels between a start and an end level. The additional module, namely AdaFM layer, performs channel-wise feature modification, and can adapt a model to another restoration level with high accuracy. By simply tweaking an interpolation coefficient, the intermediate model - AdaFM-Net could generate smooth and continuous restoration effects without artifacts. Extensive experiments on three image restoration tasks demonstrate the effectiveness of both model training and modulation testing. Besides, we carefully investigate the properties of AdaFM layers, providing a detailed guidance on the usage of the proposed method.
