---
title:  'Enhancing Descriptive Image Quality Assessment with A Large-scale Multi-modal Dataset'
teser: DepictQAnew.png
type:   paper
pro_type: Image Quality Assessment
layout: post
date:   2025-11-01 11:59:59 +0800
author: Zhiyuan You, Jinjin Gu, Xin Cai, Zheyuan Li, Kaiwen Zhu, Chao Dong, Tianfan Xue
venue:  IEEE Transactions on Image Processing (TIP), 2025
year:   2025
month:  November
projectPage: None
supplemental : None
data: None
code: https://github.com/XPixelGroup/DepictQA
paperLink: https://arxiv.org/abs/2405.18842
---

With the rapid advancement of Vision Language Models (VLMs), VLM-based Image Quality Assessment (IQA) seeks to describe image quality linguistically to align with human expression and capture the multifaceted nature of IQA tasks. However, current methods are still far from practical usage. First, prior works focus narrowly on specific sub-tasks or settings, which do not align with diverse real-world applications. Second, their performance is sub-optimal due to limitations in dataset coverage, scale, and quality. To overcome these challenges, we introduce the enhanced Depicted image Quality Assessment model (DepictQA-Wild). Our method includes a multi-functional IQA task paradigm that encompasses both assessment and comparison tasks, brief and detailed responses, full-reference and non-reference scenarios. We introduce a ground-truth-informed dataset construction approach to enhance data quality, and scale up the dataset to 495K under the brief-detail joint framework. Consequently, we construct a comprehensive, large-scale, and high-quality dataset, named DQ-495K. We also retain image resolution during training to better handle resolution-related quality issues, and estimate a confidence score that is helpful to filter out low-quality responses. Experimental results demonstrate that DepictQA-Wild significantly outperforms traditional score-based methods, prior VLM-based IQA models, and proprietary GPT-4V in distortion identification, instant rating, and reasoning tasks. Our advantages are further confirmed by real-world applications including assessing the web-downloaded images and ranking model-processed images.

