---
title:  'Finding Discriminative Filters for Specific Degradations in Blind Super-Resolution'  #  Paper title, covered by ''
teser: Finding.png
type:   paper
pro_type: Image Super-Resolution
layout: post  #  Do not change this
date:   2021-08-3 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Liangbin Xie, Xintao Wang, Chao Dong, Zhongang Qi, Ying Shan  # authors information
venue:  Conference and Workshop on Neural Information Processing Systems (NeurIPS Spotlight), 2021 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  August  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/TencentARC/FAIG  # If has data, post code link here, otherwise None
paperLink: https://proceedings.neurips.cc/paper/2021/file/008bd5ad93b754d500338c253d9c1770-Paper.pdf
---

Recent blind super-resolution (SR) methods typically consist of two branches, one for degradation prediction and the other for conditional restoration. However, our experiments show that a one-branch network can achieve comparable performance to the two-branch scheme. Then we wonder: how can one-branch networks automatically learn to distinguish degradations? To find the answer, we propose a new diagnostic tool -- Filter Attribution method based on Integral Gradient (FAIG). Unlike previous integral gradient methods, our FAIG aims at finding the most discriminative filters instead of input pixels/features for degradation removal in blind SR networks. With the discovered filters, we further develop a simple yet effective method to predict the degradation of an input image. Based on FAIG, we show that, in one-branch blind SR networks, 1) we are able to find a very small number of (1%) discriminative filters for each specific degradation; 2) The weights, locations and connections of the discovered filters are all important to determine the specific network function. 3) The task of degradation prediction can be implicitly realized by these discriminative filters without explicit supervised learning. Our findings can not only help us better understand network behaviors inside one-branch blind SR networks, but also provide guidance on designing more efficient architectures and diagnosing networks for blind SR.

