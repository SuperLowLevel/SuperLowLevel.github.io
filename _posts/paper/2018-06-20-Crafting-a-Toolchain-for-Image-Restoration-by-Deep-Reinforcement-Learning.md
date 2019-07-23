---
title:  'Crafting a Toolchain for Image Restoration by Deep Reinforcement Learning'  #  Paper title, covered by ''
type:   paper
layout: post  #  Do not change this
date:   2018-06-20 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Ke Yu, Chao Dong, Liang Lin, Chen Change Loy  # authors information
venue:  Computer Vision and Pattern Recognition (CVPR), 2018  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2018  # paper year, number
month:  June  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_cvpr_2018/papers/Yu_Crafting_a_Toolchain_CVPR_2018_paper.pdf  # post paper pdf link here
---

We investigate a novel approach for image restoration by reinforcement learning. Unlike existing studies that mostly train a single large network for a specialized task, we prepare a toolbox consisting of small-scale convolutional networks of different complexities and specialized in different tasks. Our method, RL-Restore, then learns a policy to select appropriate tools from the toolbox to progressively restore the quality of a corrupted image. We formulate a step-wise reward function proportional to how well the image is restored at each step to learn the action policy. We also devise a joint learning scheme to train the agent and tools for better performance in handling uncertainty. In comparison to conventional human-designed networks, RL-Restore is capable of restoring images corrupted with complex and unknown distortions in a more parameter-efficient manner using the dynamically formed toolchain.