---
title:  'Spatio-Temporal Filter Adaptive Network for Video Deblurring'  #  Paper title, covered by ''
teser: stfa.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-10-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Shangchen Zhou, Jiawei Zhang, Jinshan Pan, Haozhe Xie, Wangmeng Zuo, Jimmy S. Ren  # authors information
venue:  International Conference on Computer Vision, (ICCV), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2019  # paper year, number
month:  October  # paper month, full name
projectPage: https://www.shangchenzhou.com/projects/stfan/
supplemental : https://www.shangchenzhou.com/assets/paper/STFAN-supp.pdf
data: None  # If has data, post data link here, otherwise None
code: https://github.com/sczhou/STFAN
paperLink: https://arxiv.org/pdf/1904.12257.pdf  # post paper pdf link here
---

Video deblurring is a challenging task due to the spatially variant blur caused by camera shake, object motions, and depth variations, etc. Existing methods usually estimate optical flow in the blurry video to align consecutive frames or approximate blur kernels. However, they tend to generate artifacts or cannot effectively remove blur when the estimated optical flow is not accurate. To overcome the limitation of separate optical flow estimation, we propose a Spatio-Temporal Filter Adaptive Network (STFAN) for the alignment and deblurring in a unified framework. The proposed STFAN takes both blurry and restored images of the previous frame as well as blurry image of the current frame as input, and dynamically generates the spatially adaptive filters for the alignment and deblurring. We then propose the new Filter Adaptive Convolutional (FAC) layer to align the deblurred features of the previous frame with the current frame and remove the spatially variant blur from the features of the current frame. Finally, we develop a reconstruction network which takes the fusion of two transformed features to restore the clear frames. Both quantitative and qualitative evaluation results on the benchmark datasets and real-world videos demonstrate that the proposed algorithm performs favorably against state-of-the-art methods in terms of accuracy, speed as well as model size.


