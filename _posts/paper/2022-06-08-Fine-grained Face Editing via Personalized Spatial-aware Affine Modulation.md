---
title:  'Fine-grained Face Editing via Personalized Spatial-aware Affine Modulation'  #  Paper title, covered by ''
teser: Fine-grained Face Editing via Personalized Spatial-aware Affine Modulation.png
type:   paper
pro_type: 
layout: post  #  Do not change this
date:   2022-06-08 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Si Liu, Renda Bao, Defa Zhu, Shaofei Huang, Qiong Yan, Liang Lin, Chao Dong
venue:  IEEE Transactions on Multimedia (TMM), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  Mat # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9769916 # post paper pdf link here
---

Fine-grained face editing, as a special case of image
translation task, aims at modifying face attributes according
to users’ preference. Although generative adversarial networks
(GANs) have achieved great success in general image translation
tasks, these models cannot be directly applied in the face editing
problem. Ideal face editing is challenging as it has two special
requirements – personalization and spatial-awareness. To address
these issues, we propose a novel Personalized Spatial-aware Affine
Modulation (PSAM) method based on a general GAN structure.
The key idea is to modulate the intermediate features in a
personalized and spatial-aware manner, which corresponds to
the face editing procedure. Specifically, for personalization, we
adopt both the face image and the desired attribute as input to
generate the modulation tensors. For spatial-aware, we set these
tensors to be of the same size as the input image, allowing pixelwise modulation. Extensive experiments in four fine-grained face
editing tasks, i.e., makeup, expression, illumination and aging,
demonstrate the effectiveness of the proposed PSAM method.
The synthesis results of PSAM can be further boosted by a new
transferable training strategy.