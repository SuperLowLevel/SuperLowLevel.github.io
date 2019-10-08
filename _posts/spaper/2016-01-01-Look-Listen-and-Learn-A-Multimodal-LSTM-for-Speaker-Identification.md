---
title:  'Look, Listen and Learn - A Multimodal LSTM for Speaker Identification'  #  Paper title, covered by ''
teser: llla.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2016-10-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jimmy Ren, Yongtao Hu, Yu-Wing Tai, Chuan Wang, Li Xu, Wenxiu Sun, Qiong Yan  # authors information
venue:  AAAI Conference on Artificial Intelligence, (AAAI oral), 2016  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2016  # paper year, number
month:  January  # paper month, full name
projectPage: None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/viewFile/12386/12133
---

Speaker identification refers to the task of localizing the face of a person who has the same identity as the ongoing voice in a video. This task not only requires collective perception over both visual and auditory signals, the robustness to handle severe quality degradations and unconstrained content variations are also indispensable. In this paper, we describe a novel multimodal Long Short-Term Memory (LSTM) architecture which seamlessly unifies both visual and auditory modalities from the beginning of each sequence input. The key idea is to extend the conventional LSTM by not only sharing weights across time steps, but also sharing weights across modalities. We show that modeling the temporal dependency across face and voice can significantly improve the robustness to content quality degradations and variations. We also found that our multimodal LSTM is robustness to distractors, namely the non-speaking identities. We applied our multimodal LSTM to The Big Bang Theory dataset and showed that our system outperforms the state-of-the-art systems in speaker identification with lower false alarm rate and higher recognition accuracy.

