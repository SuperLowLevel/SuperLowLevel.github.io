---
title:  'Deep graph Laplacian regularization for robust denoising of real images'  #  Paper title, covered by ''
teser: dglr.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jin Zeng, Jiahao Pang, Wenxiu Sun, Gene Cheung  # authors information
venue:  Computer Vision and Pattern Recognition Workshops (CVPRW), 2019
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : http://openaccess.thecvf.com/content_CVPRW_2019/supplemental/Zeng_Deep_Graph_Laplacian_CVPRW_2019_supplemental.pdf
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: http://openaccess.thecvf.com/content_CVPRW_2019/papers/NTIRE/Zeng_Deep_Graph_Laplacian_Regularization_for_Robust_Denoising_of_Real_Images_CVPRW_2019_paper.pdf
---

Recent developments in deep learning have revolutionized the paradigm of image restoration. However, its applications on real image denoising are still limited, due to its sensitivity to training data and the complex nature of real image noise. In this work, we combine the robustness merit of model-based approaches and the learning power of data-driven approaches for real image denoising. Specifically, by integrating graph Laplacian regularization as a trainable module into a deep learning framework, we are less susceptible to overfitting than pure CNN-based approaches, achieving higher robustness to small datasets and cross-domain denoising. First, a sparse neighborhood graph is built from the output of a convolutional neural network (CNN). Then the image is restored by solving an unconstrained quadratic programming problem, using a corresponding graph Laplacian regularizer as a prior term. The proposed restoration pipeline is fully differentiable and hence can be end-to-end trained. Experimental results demonstrate that our work is less prone to overfitting given small training data. It is also endowed with strong cross-domain generalization power, outperforming the state-of-the-art approaches by a remarkable margin.

