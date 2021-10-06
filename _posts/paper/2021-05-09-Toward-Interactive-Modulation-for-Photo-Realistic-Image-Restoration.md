---
title:  'Toward Interactive Modulation for Photo-Realistic Image Restoration'  #  Paper title, covered by '
type: paper
pro_type: Image Restoration
teser: cugan.png
layout: post  #  Do not change this
date:   2021-05-9 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Haoming Cai, Jingwen He, Yu Qiao, Chao Dong  # authors information
venue:  Computer Vision and Pattern Recognition Workshop (CVPRW), 2021  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2021  # paper year, number
month:  May  # paper month, full name
projectPage: None
supplemental : None
data: None # If has data, post data link here, otherwise None
code: None
paperLink: https://openaccess.thecvf.com/content/CVPR2021W/NTIRE/papers/Cai_Toward_Interactive_Modulation_for_Photo-Realistic_Image_Restoration_CVPRW_2021_paper.pdf
---

Modulating image restoration level aims to generate a restored image by altering a factor that represents the restoration strength. Previous works mainly focused on optimizing the mean squared reconstruction error, which brings high reconstruction accuracy but lacks finer texture details. This paper presents a Controllable Unet Generative Adversarial Network (CUGAN) to generate high-frequency textures in the modulation tasks. CUGAN consists of two modules-base networks and condition networks. The base networks comprise a generator and a discriminator. In the generator, we realize the interactive control of restoration levels by tuning the weights of different features from different scales in the Unet architecture. Moreover, we adaptively modulate the intermediate features in the discriminator according to the severity of degradations. The condition networks accept the condition vector (encoded degradation information) as input, then generate modulation parameters for both the generator and the discriminator. During testing, users can control the output effects by tweaking the condition vector. We also provide a smooth transition between GAN and MSE effects by a simple transition method. Extensive experiments demonstrate that the proposed CUGAN achieves excellent performance on image restoration modulation tasks.

