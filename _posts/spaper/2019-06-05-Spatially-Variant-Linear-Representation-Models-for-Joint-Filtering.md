---
title:  'Spatially Variant Linear Representation Models for Joint Filtering'  #  Paper title, covered by ''
teser: svlr.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jinshan Pan, Jiangxin Dong, Jimmy S. Ren, Liang Lin, Jinhui Tang, Ming-Hsuan Yang  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2019
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : http://openaccess.thecvf.com/content_CVPR_2019/supplemental/Pan_Spatially_Variant_Linear_CVPR_2019_supplemental.pdf
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: http://openaccess.thecvf.com/content_CVPR_2019/papers/Pan_Spatially_Variant_Linear_Representation_Models_for_Joint_Filtering_CVPR_2019_paper.pdf
---

Joint filtering mainly uses an additional guidance image as a prior and transfers its structures to the target image in the filtering process. Different from existing algorithms that rely on locally linear models or hand-designed objective functions to extract the structural information from the guidance image, we propose a new joint filter based on a spatially variant linear representation model (SVLRM), where the target image is linearly represented by the guidance image. However, the SVLRM leads to a highly ill-posed problem. To estimate the linear representation coefficients, we develop an effective algorithm based on a deep convolutional neural network (CNN). The proposed deep CNN (constrained by the SVLRM) is able to estimate the spatially variant linear representation coefficients which are able to model the structural information of both the guidance and input images. We show that the proposed algorithm can be effectively applied to a variety of applications, including depth/RGB image upsampling and restoration, flash/no-flash image deblurring, natural image denoising, scale-aware filtering, etc. Extensive experimental results demonstrate that the proposed algorithm performs favorably against state-of-the-art methods that have been specially designed for each task.
