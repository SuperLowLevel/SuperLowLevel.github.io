---
title:  'Towards Efficient SDRTV-to-HDRTV by Learning from Image Formation'
teser: HDRTVNet-plus.png
type:   paper
pro_type: Image Restoration
layout: post
date:   2025-09-01 11:59:59 +0800
author: Xiangyu Chen, Zheyuan Li, Zhengwen Zhang, Jimmy S. Ren, Yihao Liu, Jingwen He, Yu Qiao, Jiantao Zhou, Chao Dong
venue:  IEEE Transactions on Multimedia (TMM), 2025
year:   2025
month:  September
projectPage: None
supplemental : None
data: None
code: https://github.com/xiaom233/HDRTVNet-plus
paperLink: https://ieeexplore.ieee.org/document/11146495
---

Contemporary display enables video content rendering with high dynamic range (HDR) and wide color gamut (WCG). However, the majority of existing content remains in standard dynamic range (SDR) format. Therefore, the conversion of SDR content to HDRTV standards holds significant value. This paper delineates and analyzes the SDRTV-to-HDRTV conversion by modeling the formation of SDRTV/HDRTV content. The findings reveal that a naive end-to-end supervised training pipeline suffers from severe gamut transition errors. To address this, we propose a new three-step solution called HDRTVNet++, which includes adaptive global color mapping, local enhancement, and highlight refinement. The adaptive global color mapping step utilizes global statistics for image-adaptive color adjustments, followed by a local enhancement network for detail improvement. These two components are integrated as a generator, with GAN-based joint training ensuring highlight consistency. Our method, tailored for ultra-high-definition TV content, offers both effectiveness and computational efficiency in processing 4K resolution images. We also construct HDRTV1K, a dataset comprising HDR videos adhering to the HDR10 standard, featuring 1235 training and 117 testing images at 4K resolution. Furthermore, we employ five metrics to assess SDRTV-to-HDRTV performance. Our results demonstrate state-of-the-art performance both quantitatively and visually.

