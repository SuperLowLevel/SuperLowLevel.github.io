---
title:  'RankSRGAN: Super Resolution Generative Adversarial Networks with Learning to Rank'  #  Paper title, covered by ''
teser: ranksrgan.png
type:   paper
pro_type: Image Super-Resolution
layout: post  #  Do not change this
date:   2021-07-21 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Wenlong Zhang, Yihao Liu, Chao Dong, Yu Qiao  # authors information
venue:  IEEE TRANSACTIONS ON PATTERN ANALYSIS AND MACHINE INTELLIGENCE (PAMI), 2021 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  July  # paper month, full name
projectPage: https://wenlongzhang0724.github.io/Projects/RankSRGAN  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/WenlongZhang0724/RankSRGAN  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9497054 # post paper pdf link here
---

Generative Adversarial Networks (GAN) have demonstrated the potential to recover realistic details for single image super-resolution (SISR). To further improve the visual quality of super-resolved results, PIRM2018-SR Challenge employed perceptual metrics to assess the perceptual quality, such as PI, NIQE, and Ma. However, existing methods cannot directly optimize these indifferentiable perceptual metrics, which are shown to be highly correlated with human ratings. To address the problem, we propose Super-Resolution Generative Adversarial Networks with Ranker (RankSRGAN) to optimize generator in the direction of different perceptual metrics. Specifically, we first train a Ranker which can learn the behaviour of perceptual metrics and then introduce a novel rank-content loss to optimize the perceptual quality. The most appealing part is that the proposed method can combine the strengths of different SR methods to generate better results. Furthermore, we extend our method to multiple Rankers to provide multi-dimension constraints for the generator. Extensive experiments show that RankSRGAN achieves visually pleasing results and reaches state-of-the-art performance in perceptual metrics and quality. 