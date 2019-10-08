---
title:  'Convolutional Memory Blocks for Depth Data Representation Learning'  #  Paper title, covered by ''
teser: cmbd.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2018-08-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Wang, Keze, Liang Lin, Chuangjie Ren, Wei Zhang, Wenxiu Sun  # authors information
venue:  International Joint Conference on Artificial Intelligence (IJCAI), 2018  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2018  # paper year, number
month:  August  # paper month, full name
projectPage: None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: https://www.ijcai.org/proceedings/2018/0387.pdf
---

Compared to natural RGB images, data captured by 3D / depth sensors (e.g., Microsoft Kinect) have different properties, e.g., less discriminable in appearance due to lacking color / texture information. Applying convolutional neural networks (CNNs) on these depth data would lead to unsatisfying learning efficiency, i.e., requiring large amounts of annotated training data for convergence. To address this issue, this paper proposes a novel memory network module, called Convolutional Memory Block (CMB), which empowers CNNs with the memory mechanism on handling depth data. Different from the existing memory networks that store long / short term dependency from sequential data, our proposed CMB focuses on modeling the representative dependency (correlation) among non-sequential samples. Specifically, our CMB consists of one internal memory (i.e., a set of feature maps) and three specific controllers, which enable a powerful yet efficient memory manipulation mechanism. In this way, the internal memory, being implicitly aggregated from all previous inputted samples, can learn to store and utilize representative features among the samples. Furthermore, we employ our CMB to develop a concise framework for predicting articulated pose from still depth images. Comprehensive evaluations on three public benchmarks demonstrate significant superiority of our framework over all the compared methods. More importantly, thanks to the enhanced learning efficiency, our framework can still achieve satisfying results using much less training data.


