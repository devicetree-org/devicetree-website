---
layout: flow
title: Members
permalink: /members/
js-package: extended
flow:
    - row: custom_include_row
      source: sticky-tab-bar.html
    - row: container_row
      sections:
        - format: title
          size: h2
          content: Our Members
        - format: members
          style: zoom
          item_width: 3 #bootstrap col-sm- value e.g 3, 4, 5ths etc
          content:
              - name: Arm
                image:
                    path: /assets/images/arm.jpg
                    alt: Arm Logo
                url: https://www.linaro.org/membership/arm/
              - name: HiSilicon
                image:
                    path: /assets/images/hisilicon.jpg
                    alt: HiSilicon Logo
                url: https://www.linaro.org/membership/hisilicon/
              - name: ST
                image:
                    path: /assets/images/st.jpg
                    alt: ST Logo
                url: https://www.linaro.org/membership/st/
              - name: Linaro
                image:
                    path: /assets/images/linaro.jpg
                    alt: Linaro Logo
                url: https://www.linaro.org/
    - row: container_row
      sections:
        - format: title
          size: h2
          content: Thanks to the following companies for their help in establishing devicetree.org
        - format: members
          style: zoom
          item_width: 4 #bootstrap col-sm- value e.g 3, 4, 5ths etc
          content:
              - name: IBM
                image:
                    path: /assets/images/ibm.jpg
                    alt: IBM Logo
                url: https://www.ibm.com/
              - name: Arm
                image:
                    path: /assets/images/arm.jpg
                    alt: Arm Logo
                url: https://www.linaro.org/membership/arm/
              - name: NXP
                image:
                    path: /assets/images/nxp.jpg
                    alt: NXP Logo
                url: https://www.linaro.org/membership/nxp/
    - row: main_content_row
---
