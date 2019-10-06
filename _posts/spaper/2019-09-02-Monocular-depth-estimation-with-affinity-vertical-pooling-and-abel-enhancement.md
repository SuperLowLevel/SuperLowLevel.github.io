---
title:  'Monocular depth estimation with affinity, vertical pooling, and label enhancement.'  #  Paper title, covered by ''
teser: mdea.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2018-06-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yukang Gan, Xiangyu Xu, Wenxiu Sun, Liang Lin  # authors information
venue:  The European Conference on Computer Vision (ECCV), 2018  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2018  # paper year, number
month:  September  # paper month, full name
projectPage: None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: http://openaccess.thecvf.com/content_ECCV_2018/papers/YuKang_Gan_Monocular_Depth_Estimation_ECCV_2018_paper.pdf
---

While significant progress has been made in monocular depth estimation with Convolutional Neural Networks (CNNs) extracting absolute features, such as edges and textures, the depth constraint of neighboring pixels, namely relative features, has been mostly ignored by recent methods. To overcome this limitation, we explicitly model the relationships of different image locations with an affinity layer and combine absolute and relative features in an end-to-end network. In addition, we also consider another prior knowledge that major depth changes in images lie in the vertical direction, and thus, it is beneficial to capture local vertical features for refined depth estimation. In the proposed algorithm we introduce vertical pooling to aggregate image features vertically to improve the depth accuracy.Furthermore, since the Lidar depth ground truth is quite sparse, we enhance the depth labels by generating high-quality dense depth maps with off-the-shelf stereo matching method which takes left-right image pairs as input.We also integrate multi-scale structures in our network to obtain global understanding the image depth and exploit residual learning to help depth refinement.We demonstrate that the proposed algorithm performs favorably against state-of-the-art methods both qualitatively and quantitatively on the KITTI driving dataset.


