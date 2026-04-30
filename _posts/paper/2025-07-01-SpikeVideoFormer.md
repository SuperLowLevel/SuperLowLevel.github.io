---
title:  'SpikeVideoFormer: An Efficient Spike-Driven Video Transformer with Hamming Attention and O(T) Complexity'
teser: SpikeVideoFormer.png
type:   paper
pro_type: Video Understanding
layout: post
date:   2025-07-01 11:59:59 +0800
author: Shihao Zou, Qingfeng Li, Wei Ji, Jingjing Li, Yongkui Yang, Guoqi Li, Chao Dong
venue:  International Conference on Machine Learning (ICML), 2025
year:   2025
month:  July
projectPage: None
supplemental : None
data: None
code: https://github.com/JimmyZou/SpikeVideoFormer
paperLink: https://openreview.net/forum?id=zvzCdHbDBP
---

Spiking Neural Networks (SNNs) have shown competitive performance to Artificial Neural Networks (ANNs) in various vision tasks, while offering superior energy efficiency. However, existing SNN-based Transformers primarily focus on single-image tasks, emphasizing spatial features while not effectively leveraging SNNs' efficiency in video-based vision tasks. In this paper, we introduce SpikeVideoFormer, an efficient spike-driven video Transformer, featuring linear temporal complexity O(T). Specifically, we design a spike-driven Hamming attention (SDHA) which provides a theoretically guided adaptation from traditional real-valued attention to spike-driven attention. Building on SDHA, we further analyze various spike-driven space-time attention designs and identify an optimal scheme that delivers appealing performance for video tasks, while maintaining only linear temporal complexity. The generalization ability and efficiency of our model are demonstrated across diverse downstream video tasks, including classification, human pose tracking, and semantic segmentation. Empirical results show our method achieves state-of-the-art performance compared to existing SNN approaches.

