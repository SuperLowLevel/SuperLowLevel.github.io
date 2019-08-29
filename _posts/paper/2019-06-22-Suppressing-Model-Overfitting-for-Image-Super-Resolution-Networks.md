---
title:  'Suppressing Model Overfitting for Image Super-Resolution Networks'  #  Paper title, covered by ''
type:   paper
teser: ntire2019sr.png
layout: post  #  Do not change this
date:   2019-06-23 10:59:59 +0800  # paper pub data, only change year and month according to this format
author: Ruicheng Feng, Jinjin Gu, Yu Qiao, Chao Dong  # authors information
venue:  Computer Vision and Pattern Recognition, NTIRE Workshop (CVPRW), 2019  # Where it be, ICCV and CVPR remove IEEE Conference on, 
year:   2019  # paper year, number
month:  June  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: http://openaccess.thecvf.com/content_CVPRW_2019/papers/NTIRE/Feng_Suppressing_Model_Overfitting_for_Image_Super-Resolution_Networks_CVPRW_2019_paper.pdf  # post paper pdf link here
---

Large deep networks have demonstrated competitive performance in single image super-resolution (SISR), with a huge volume of data involved. However, in real-world scenarios, due to the limited accessible training pairs, large models exhibit undesirable behaviors such as overfitting and memorization. To suppress model overfitting and further enjoy the merits of large model capacity, we thoroughly investigate generic approaches for supplying additional training data pairs. In particular, we introduce a simple learning principle MixUp to train networks on interpolations of sample pairs, which encourages networks to support linear behavior in-between training samples. In addition, we propose a data synthesis method with learned degradation, enabling models to use extra high-quality images with higher content diversity. This strategy proves to be successful in reducing biases of data. By combining these components – MixUp and synthetic training data, large models can be trained without overfitting under very limited data samples and achieve satisfactory generalization performance. Our method won the second place in NTIRE2019 Real SR Challenge.
