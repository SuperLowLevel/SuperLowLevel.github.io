---
title:  'Unifying Image Processing as Visual Prompting Question Answering'  #  Paper title, covered by ''
teser: PromptGIP.png
type:   paper
pro_type: Image Processing
layout: post  #  Do not change this
date:   2024-02-21 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yihao Liu, Xiangyu Chen, Xianzheng Ma, Xintao Wang, Jiantao Zhou, Yu Qiao, Chao Dong # authors information
venue:  International Conference on Machine Learning(ICML), 2024 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2024  # paper year, number
month:  February # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/lyh-18/PromptGIP  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2310.10513 # post paper pdf link here
---

Image processing is a fundamental task in computer vision, which aims at enhancing image quality and extracting essential features for subsequent vision applications. Traditionally, task-specific models are developed for individual tasks and designing such models requires distinct expertise. Building upon the success of large language models (LLMs) in natural language processing (NLP), there is a similar trend in computer vision, which focuses on developing large-scale models through pretraining and in-context learning. This paradigm shift reduces the reliance on task-specific models, yielding a powerful unified model to deal with various tasks. However, these advances have predominantly concentrated on high-level vision tasks, with less attention paid to low-level vision tasks. To address this issue, we propose a universal model for general image processing that covers image restoration, image enhancement, image feature extraction tasks, etc. Our proposed framework, named PromptGIP, unifies these diverse image processing tasks within a universal framework. Inspired by NLP question answering (QA) techniques, we employ a visual prompting question answering paradigm. Specifically, we treat the input-output image pair as a structured question-answer sentence, thereby reprogramming the image processing task as a prompting QA problem. PromptGIP can undertake diverse cross-domain tasks using provided visual prompts, eliminating the need for task-specific finetuning. Our methodology offers a universal and adaptive solution to general image processing. While PromptGIP has demonstrated a certain degree of out-of-domain task generalization capability, further research is expected to fully explore its more powerful emergent generalization.
