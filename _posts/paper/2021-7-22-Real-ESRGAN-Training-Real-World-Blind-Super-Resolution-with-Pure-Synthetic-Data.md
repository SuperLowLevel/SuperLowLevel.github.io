---
title:  'Real-ESRGAN: Training Real-World Blind Super-Resolution with Pure Synthetic Data'  #  Paper title, covered by ''
teser: realESRGAN.png
type:   paper
pro_type: Image Super-Resolution
layout: post  #  Do not change this
date:   2021-07-21 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xintao Wang, Liangbin Xie, Chao Dong, Ying Shan  # authors information
venue:  International Conference on Computer Vision Workshop (ICCVW), 2021 #Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  July  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/xinntao/Real-ESRGAN  # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/ICCV2021W/AIM/papers/Wang_Real-ESRGAN_Training_Real-World_Blind_Super-Resolution_With_Pure_Synthetic_Data_ICCVW_2021_paper.pdf # post paper pdf link here
---

Though many attempts have been made in blind super-resolution to restore low-resolution images with unknown and complex degradations, they are still far from addressing general real-world degraded images. In this work, we extend the powerful ESRGAN to a practical restoration application (namely, Real-ESRGAN), which is trained with pure synthetic data. Specifically, a high-order degradation modeling process is introduced to better simulate complex real-world degradations. We also consider the common ringing and overshoot artifacts in the synthesis process. In addition, we employ a U-Net discriminator with spectral normalization to increase discriminator capability and stabilize the training dynamics. Extensive comparisons have shown its superior visual performance than prior works on various real datasets. We also provide efficient implementations to synthesize training pairs on the fly.

