---
keywords: OpenFirmware, OpenPOWER Abstraction Layer (OPAL), Power Architecture Platform Requirements (PAPR), Flattened Device Tree (FDT), Devicetree, Specification, data, structure
layout: "../../layouts/Flow.astro"
slug: /
jumbotron:
  inner_image: /assets/images/devicetree-icon-white.png
  title: The DeviceTree Specification
  image: /assets/images/background-image.jpg
  description: >-
    A devicetree is a data structure for describing hardware
  buttons:
    - title: Specification
      url: /specifications/
      class: btn bg-primary py-2 px-4 fade-in-three border-b-5
flow:
  - row: container_row
    style: text-center prose
    sections:
      - component: text
        text_content:
          text: |-
            # Welcome to devicetree.org

            If you are looking for the devicetree specification you’ve come to the right place!

            ## Current release is [v0.3](https://github.com/devicetree-org/devicetree-specification/releases/tag/v0.3)

            Devicetree.org is a community effort by many companies and individuals to facilitate the future evolution of the Devicetree Standard.

            The devicetree is a data structure for describing hardware. Rather than hard coding every detail of a device into an operating system, many aspects of the hardware can be described in a data structure that is passed to the operating system at boot time. The devicetree is used by OpenFirmware, OpenPOWER Abstraction Layer (OPAL), Power Architecture Platform Requirements (PAPR) and in the standalone Flattened Device Tree (FDT) form.

            The devicetree specification provides a full technical description of the devicetree data format and best practices.

            Everyone is encouraged to get involved and yes there is a [GitHub project too](https://github.com/devicetree-org/devicetree-specification)! Further information about the devicetree standard can be found throughout this website.

            Please visit the following links at the top right to learn more and the links below to participate.

      - component: buttons
        buttons_content:
          - title: Collaborate
            url: /collaborate/
            style: bg-primary py-2 px-4 text-white rounded
---
