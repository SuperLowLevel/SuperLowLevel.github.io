---
title:  'Single View Stereo Matching'  #  Paper title, covered by ''
teser: svsm.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2018-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yue Luo, Jimmy Ren, Mude Lin, Jiahao Pang, Wenxiu Sun, Hongsheng Li, Liang Lin  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR spotlight), 2018
year:   2018  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None 
data: None
code: https://github.com/lawy623/SVS
paperLink: http://openaccess.thecvf.com/content_cvpr_2018/papers/Luo_Single_View_Stereo_CVPR_2018_paper.pdf
---

Previous monocular depth estimation methods take a single view and directly regress the expected results. Though recent advances are made by applying geometrically inspired loss functions during training, the inference procedure does not explicitly impose any geometrical constraint. Therefore these models purely rely on the quality of data and the effectiveness of learning to generalize. This either leads to suboptimal results or the demand of huge amount of expensive ground truth labelled data to generate reasonable results. In this paper, we show for the first time that the monocular depth estimation problem can be reformulated as two sub-problems, a view synthesis procedure followed by stereo matching, with two intriguing properties, namely i) geometrical constraints can be explicitly imposed during inference; ii) demand on labelled depth data can be greatly alleviated. We show that the whole pipeline can still be trained in an end-to-end fashion and this new formulation plays a critical role in advancing the performance. The resulting model outperforms all the previous monocular depth estimation methods as well as the stereo block matching method in the challenging KITTI dataset by only using a small number of real training data. The model also generalizes well to other monocular depth estimation benchmarks. We also discuss the implications and the advantages of solving monocular depth estimation using stereo methods.


