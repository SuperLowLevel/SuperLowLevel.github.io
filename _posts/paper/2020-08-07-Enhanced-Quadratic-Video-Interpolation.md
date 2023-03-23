---
title:  'Enhanced Quadratic Video Interpolation'  #  Paper title, covered by ''
teser: EQVI.png
type:   paper
pro_type: Video Restoration
layout: post  #  Do not change this
date:   2020-07-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yihao Liu, Liangbin Xie, Li Siyao, Wenxiu Sun, Yu Qiao, Chao Dong # authors information
venue:  The European Conference on Computer Vision, AIM Workshop (ECCVW), 2020  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2020  # paper year, number
month:  September  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/lyh-18/EQVI  # If has data, post code link here, otherwise None
paperLink: https://link.springer.com/content/pdf/10.1007/978-3-030-66823-5_3.pdf  # post paper pdf link here
---
With the prosperity of digital video industry, video frame
interpolation has arisen continuous attention in computer vision community and become a new upsurge in industry. Many learning-based methods have been proposed and achieved progressive results. Among them,
a recent algorithm named quadratic video interpolation (QVI) achieves
appealing performance. It exploits higher-order motion information (e.g.
acceleration) and successfully models the estimation of interpolated flow.
However, its produced intermediate frames still contain some unsatisfactory ghosting, artifacts and inaccurate motion, especially when large and
complex motion occurs. In this work, we further improve the performance
of QVI from three facets and propose an enhanced quadratic video interpolation (EQVI) model. In particular, we adopt a rectified quadratic
flow prediction (RQFP) formulation with least squares method to estimate the motion more accurately. Complementary with image pixellevel blending, we introduce a residual contextual synthesis network
(RCSN) to employ contextual information in high-dimensional feature
space, which could help the model handle more complicated scenes and
motion patterns. Moreover, to further boost the performance, we devise
a novel multi-scale fusion network (MS-Fusion) which can be regarded as
a learnable augmentation process. The proposed EQVI model won the
first place in the AIM2020 Video Temporal Super-Resolution Challenge.
Codes are available at https://github.com/lyh-18/EQVI
.
