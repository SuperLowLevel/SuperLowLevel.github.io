---
title:  '3D Human Pose Estimation in the Wild by Adversarial Learning'  #  Paper title, covered by ''
teser: 3dhpe.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2018-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Wei Yang, Wanli Ouyang, Xiaolong Wang, Jimmy Ren, Hongsheng Li, Xiaogang Wang  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2018
year:   2018  # paper year, number
month:  June  # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None 
data: None
code: None
paperLink: http://openaccess.thecvf.com/content_cvpr_2018/papers/Yang_3D_Human_Pose_CVPR_2018_paper.pdf
---

Recently, remarkable advances have been achieved in 3D human pose estimation from monocular images because of the powerful Deep Convolutional Neural Networks (DCNNs). Despite their success on large-scale datasets collected in the constrained lab environment, it is difficult to obtain the 3D pose annotations for in-the-wild images. Therefore, 3D human pose estimation in the wild is still a challenge. In this paper, we propose an adversarial learning framework, which distills the 3D human pose structures learned from the fully annotated dataset to in-the-wild images with only 2D pose annotations. Instead of defining hard-coded rules to constrain the pose estimation results, we design a novel multi-source discriminator to distinguish the predicted 3D poses from the ground truth, which helps to enforce the pose estimator to generate anthropometrically valid poses even with images in the wild. We also observe that a carefully designed information source for the discriminator is essential to boost the performance. Thus, we design a geometric descriptor, which computes the pairwise relative locations and distances between body joints, as a new information source for the discriminator. The efficacy of our adversarial learning framework with the new geometric descriptor have been demonstrated through extensive experiments on two widely used public benchmarks. Our approach significantly improves the performance compared with previous state-of-the-art approaches.


