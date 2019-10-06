---
title:  'Cascade residual learning: A two-stage convolutional neural network for stereo matching'  #  Paper title, covered by ''
teser: crl.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2017-10-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jiahao Pang, Wenxiu Sun, Jimmy SJ. Ren, Chengxi Yang, Qiong Yan  # authors information
venue:  International Conference on Computer Vision, (ICCV), 2017  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2017  # paper year, number
month:  October  # paper month, full name
projectPage: None
supplemental : http://openaccess.thecvf.com/content_ICCV_2017_workshops/supplemental/Pang_Cascade_Residual_Learning_ICCV_2017_supplemental.pdf
data: None  # If has data, post data link here, otherwise None
code: https://github.com/Artifineuro/crl
paperLink: http://openaccess.thecvf.com/content_ICCV_2017_workshops/papers/w17/Pang_Cascade_Residual_Learning_ICCV_2017_paper.pdf
---

Leveraging on the recent developments in convolutional neural networks (CNNs), matching dense correspondence from a stereo pair has been cast as a learning problem, with performance exceeding traditional approaches. However, it remains challenging to generate high-quality disparities for the inherently ill-posed regions. To tackle this problem, we propose a novel cascade CNN architecture composing of two stages. The first stage advances the recently proposed DispNet by equipping it with extra up-convolution modules, leading to disparity images with more details. The second stage explicitly rectifies the disparity initialized by the first stage; it couples with the first-stage and generates residual signals across multiple scales. The summation of the outputs from the two stages gives the final disparity. As opposed to directly learning the disparity at the second stage, we show that residual learning provides more effective refinement. Moreover, it also benefits the training of the overall cascade network. Experimentation shows that our cascade residual learning scheme provides state-of-the-art performance for matching stereo correspondence. By the time of the submission of this paper, our method ranks first in the KITTI 2015 stereo benchmark, surpassing the prior works by a noteworthy margin.
