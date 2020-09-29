---
title:  'Conditional Sequential Modulation for Efficient Global Image Retouching'  #  Paper title, covered by ''
teser: CSRNet.png
type:   paper
pro_type: Image Restoration
layout: post  #  Do not change this
date:   2020-07-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jingwen He*, Yihao Liu*, Yu Qiao and Chao Dong # authors information
venue:  The European Conference on Computer Vision (ECCV), 2020  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2020  # paper year, number
month:  August  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/hejingwenhejingwen/CSRNet  # If has data, post code link here, otherwise None
paperLink: None  # post paper pdf link here
---

Photo retouching aims at enhancing the aesthetic visual quality of images that suffer from photographic defects such as over/under
exposure, poor contrast, inharmonious saturation. Practically, photo retouching can be accomplished by a series of image processing operations.
In this paper, we investigate some commonly-used retouching operations
and mathematically find that these pixel-independent operations can be
approximated or formulated by multi-layer perceptrons (MLPs). Based
on this analysis, we propose an extremely light-weight framework - Conditional Sequential Retouching Network (CSRNet) - for efficient global
image retouching. CSRNet consists of a base network and a condition
network. The base network acts like an MLP that processes each pixel
independently and the condition network extracts the global features of
the input image to generate a condition vector. To realize retouching
operations, we modulate the intermediate features using Global Feature
Modulation (GFM), of which the parameters are transformed by condition vector. Benefiting from the utilization of 1 ×1 convolution, CSRNet
only contains less than 37k trainable parameters, which is orders of magnitude smaller than existing learning-based methods. Extensive experiments show that our method achieves state-of-the-art performance on
the benchmark MIT-Adobe FiveK dataset quantitively and qualitatively.