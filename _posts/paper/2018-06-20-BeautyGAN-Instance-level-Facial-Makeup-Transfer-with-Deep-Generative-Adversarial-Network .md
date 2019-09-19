---
title:  'BeautyGAN: Instance-level Facial Makeup Transfer with Deep Generative Adversarial Network'  #  Paper title, covered by ''
type:   paper
pro_type: Style Transfer
teser: beautygan.png
layout: post  #  Do not change this
date:   2018-6-20 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Tingting Li, Ruihe Qian, Chao Dong, Si Liu, Qiong Yan, Wenwu Zhu, Liang Lin  # authors information
venue:  The 26th ACM international conference on Multimedia (ACM MM), 2018  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2018  # paper year, number
month:  June  # paper month, full name
projectPage:  http://liusi-group.com/pdf/BeautyGAN-camera-ready_2.pdf  # If has project page, link here, otherwise None
supplemental : None
data: https://drive.google.com/file/d/18UlvYDL6UGZ2rs0yaDsSzoUlw8KI5ABY/view?usp=drive_open  # If has data, post data link here, otherwise None
code: https://github.com/baldFemale/beautyGAN-tf-Implement  # If has data, post code link here, otherwise None
paperLink: http://delivery.acm.org/10.1145/3250000/3240618/p645-li.pdf?ip=210.75.253.250&id=3240618&acc=ACTIVE%20SERVICE&key=33E289E220520BFB%2E6FFDCCEC948C43C2%2E4D4702B0C3E38B35%2E4D4702B0C3E38B35&__acm__=1562659192_63aae75de8b7648a6f6717dfffad5b78  # post paper pdf link here
---

Facial makeup transfer aims to translate the makeup style from a given reference makeup face image to another non-makeup one while preserving face identity. Such an instance-level transfer problem is more challenging than conventional domain-level transfer tasks, especially when paired data is unavailable. Makeup style is also different from global styles (e.g., paintings) in that it consists of several local styles/cosmetics, including eye shadow, lipstick, foundation, and so on. Extracting and transferring such local and delicate makeup information is infeasible for existing style transfer methods. We address the issue by incorporating both global domain-level loss and local instance-level loss in an dual input/output Generative Adversarial Network, called BeautyGAN. Specifically, the domain-level transfer is ensured by discriminators that distinguish generated images from domains’ real samples. The instance-level loss is calculated by pixel-level histogram loss on separate local facial regions. We further introduce perceptual loss and cycle consistency loss to generate high quality faces and preserve identity. The overall objective function enables the network to learn translation on instance-level through unsupervised adversarial learning. We also build up a new makeup dataset that consists of 3834 high-resolution face images. Extensive experiments show that BeautyGAN could generate visually pleasant makeup faces and accurate transferring results. Data and code are available at http://liusi-group.com/projects/BeautyGAN.