---
title:  'Blind Image Restoration Based on Cycle-Consistent Network'  #  Paper title, covered by ''
teser: Blind Image Restoration Based on Cycle-Consistent Network.png
type:   paper
pro_type: Image Restoration
layout: post  #  Do not change this
date:   2022-03-02 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Shixiang Wu, Chao Dong, Yu Qiao # authors information
venue:  IEEE Transactions on Multimedia (TMM), 2022 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  January  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9671019 # post paper pdf link here
---

This paper studies the blind image restoration where
the ground truth is unavailable and the downsampling process
is unknown. This complicated setting makes supervised learning
and accurate kernel estimation impossible. Inspired by the recent
success of image-to-image translation, this paper resorts to the
unsupervised Cycle-consistent based framework to tackle this
challenging problem. Different from the image-to-image task, the
fidelity of reconstructed image is important for image restoration.
Therefore, to improve the reconstruction ability of the Cycle consistent network, we make explorations from the following
aspects. First, we constrain low-frequency content in data to
preserve the content of output from LR input. Second, we
impose constraint on the content of training data to provide
better supervision for discriminator, helping to suppress high frequency artifacts or fake textures. Third, we average model
parameters to further improve the generated image quality and
help with model selection for GAN-based methods. Since GAN based methods tend to produce various artifacts with different
models, model average could realize a smoother control of
balancing artifacts and fidelity. We have conducted extensive
experiments on real noise and super resolution datasets to
validate the effectiveness of the above techniques. The proposed
ECycleGAN also demonstrates superior performance to SOTA
methods in two applications – blind SR and blind denoising.