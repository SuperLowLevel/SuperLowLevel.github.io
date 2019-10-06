---
title:  'Dual Student: Breaking the Limits of Teacher in Semi-supervised Learning'  #  Paper title, covered by ''
teser: dsbl.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2019-10-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Zhanghan Ke, Daoye Wang, Qiong Yan, Jimmy Ren, Rynson W.H. Lau  # authors information
venue:  International Conference on Computer Vision, (ICCV), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2019  # paper year, number
month:  October  # paper month, full name
projectPage: None
supplemental : http://www.cs.cityu.edu.hk/~rynson/papers/demos/iccv19b-supp.pdf
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: https://arxiv.org/pdf/1909.01804.pdf
---

Recently, consistency-based methods have achieved state-of-the-art results in semi-supervised learning (SSL). These methods always involve two roles, an explicit or implicit teacher model and a student model, and penalize predictions under different perturbations by a consistency constraint. However, the weights of these two roles are tightly coupled since the teacher is essentially an exponential moving average (EMA) of the student. In this work, we show that the coupled EMA teacher causes a performance bottleneck. To address this problem, we introduce Dual Student, which replaces the teacher with another student. We also define a novel concept, stable sample, following which a stabilization constraint is designed for our structure to be trainable. Further, we discuss two variants of our method, which produce even higher performance. Extensive experiments show that our method improves the classification performance significantly on several main SSL benchmarks. Specifically, it reduces the error rate of the 13-layer CNN from 16.84% to 12.39% on CIFAR-10 with 1k labels and from 34.10% to 31.56% on CIFAR-100 with 10k labels. In addition, our method also achieves a clear improvement in domain adaptation.

