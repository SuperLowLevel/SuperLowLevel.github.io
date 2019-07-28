---
title:  'ESRGAN: Enhanced Super-Resolution Generative Adversarial Networks'  #  Paper title, covered by ''
type:   paper
teser: esrgan.png
layout: post  #  Do not change this
date:   2018-09-06 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xintao Wang, Ke Yu, Shixiang Wu, Jinjin Gu, Yihao Liu, Chao Dong, Yu Qiao, Chen Change Loy  # authors information
venue:  The European Conference on Computer Vision Workshop (ECCVW), 2018  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2018  # paper year, number
month:  September  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/xinntao/ESRGAN  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_ECCVW_2018/papers/11133/Wang_ESRGAN_Enhanced_Super-Resolution_Generative_Adversarial_Networks_ECCVW_2018_paper.pdf  # post paper pdf link here
---

The Super-Resolution Generative Adversarial Network (SRGAN) is a seminal work that is capable of generating realistic textures during single image super-resolution. However, the hallucinated details are often accompanied with unpleasant artifacts. To further enhance the visual quality, we thoroughly study three key components of SRGAN â€“ network architecture, adversarial loss and perceptual loss, and improve each of them to derive an Enhanced SRGAN (ESRGAN). In particular, we introduce the Residual-in-Residual Dense Block (RRDB) without batch normalization as the basic network building unit. Moreover, we borrow the idea from relativistic GAN to let the discriminator predict relative realness instead of the absolute value. Finally, we improve the perceptual loss by using the features before activation, which could provide stronger supervision for brightness consistency and texture recovery. Benefiting from these improvements, the proposed ESRGAN achieves consistently better visual quality with more realistic and natural textures than SRGAN and won the first place in the PIRM2018-SR Challenge (region 3) with the best perceptual index. The code is available at https://github.com/xinntao/ESRGAN.