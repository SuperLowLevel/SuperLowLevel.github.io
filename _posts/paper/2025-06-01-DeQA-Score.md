---
title:  'Teaching Large Language Models to Regress Accurate Image Quality Scores using Score Distribution'
teser: DeQA-Score.png
type:   paper
pro_type: Image Quality Assessment
layout: post
date:   2025-06-01 11:59:59 +0800
author: Zhiyuan You, Xin Cai, Jinjin Gu, Tianfan Xue, Chao Dong
venue:  IEEE Computer Vision and Pattern Recognition Conference (CVPR), 2025
year:   2025
month:  June
projectPage: https://depictqa.github.io/deqa-score/
supplemental : None
data: None
code: https://github.com/zhiyuanyou/DeQA-Score
paperLink: https://ieeexplore.ieee.org/document/11092496
---

With the rapid advancement of Multi-modal Large Language Models (MLLMs), MLLM-based Image Quality Assessment (IQA) methods have shown promising performance in linguistic quality description. However, current methods still fall short in accurately scoring image quality. In this work, we aim to leverage MLLMs to regress accurate quality scores. A key challenge is that the quality score is inherently continuous, typically modeled as a Gaussian distribution, whereas MLLMs generate discrete token outputs. This mismatch necessitates score discretization. Previous approaches discretize the mean score into a one-hot label, resulting in information loss and failing to capture inter-image relationships. We propose a distribution-based approach that discretizes the score distribution into a soft label. This method preserves the characteristics of the score distribution, achieving high accuracy and maintaining inter-image relationships. Moreover, to address dataset variation, where different IQA datasets exhibit various distributions, we introduce a fidelity loss based on Thurstone's model. This loss captures intra-dataset relationships, facilitating co-training across multiple IQA datasets. With these designs, we develop the distribution-based Depicted image Quality Assessment model for Score regression (DeQA-Score). Experiments across multiple benchmarks show that DeQA-Score stably outperforms baselines in score regression. Also, DeQA-Score can predict the score distribution that closely aligns with human annotations.

