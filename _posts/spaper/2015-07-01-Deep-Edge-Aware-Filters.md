---
title:  'Deep Edge-Aware Filters'  #  Paper title, covered by ''
teser: deaf.png
type:   spaper
pro_type: None
layout: post  #  Do not change this
date:   2015-07-25 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Li Xu, Jimmy S. Ren, Qiong Yan, Renjie Liao, Jiaya Jia  # authors information
venue:  International Conference on Machine Learning (ICML), 2015  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2015  # paper year, number
month:  July  # paper month, full name
projectPage: None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None
paperLink: http://proceedings.mlr.press/v37/xub15.pdf
---

There are many edge-aware filters varying in their construction forms and filtering properties. It seems impossible to uniformly represent and accelerate them in a single framework. We made the attempt to learn a big and important family of edge-aware operators from data. Our method is based on a deep convolutional neural network with a gradient domain training procedure, which gives rise to a powerful tool to approximate various filters without knowing the original models and implementation details. The only difference among these operators in our system becomes merely the learned parameters. Our system enables fast approximation for complex edge-aware filters and achieves up to 200x acceleration, regardless of their originally very different implementation. Fast speed can also be achieved when creating new effects using spatially varying filter or filter combination, bearing out the effectiveness of our deep edge-aware filters.


