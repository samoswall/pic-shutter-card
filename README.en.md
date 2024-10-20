# pic-shutter-card
[![EN](https://img.shields.io/badge/lang-RU-green.svg)](/README.md)

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
![](https://img.shields.io/github/watchers/samoswall/pic-shutter-card.svg)
![](https://img.shields.io/github/stars/samoswall/pic-shutter-card.svg)

[![Donate](https://img.shields.io/badge/donate-Yandex-red.svg)](https://yoomoney.ru/fundraise/b8GYBARCVRE.230309)

**Curtain Card for Lovelace UI Home Assistant**
![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample.gif)
![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample0.gif)
**The card displays the current position of the curtain, allows you to control its position and has user settings for adjusting arbitrary images of the window, the view outside the window and the curtain canvas.**

## Content
- [Adding a repository](#A1)
- [Installation](#A2)
- [Configuration](#A3)
- [Description of image files](#A4)
- [Sample Card code](#A5)
- [Thanks](#A6)
- [Donations](#A7)

<a id="A1"></a>
## Adding a repository

In the HACKS section, in the menu located in the upper right corner, select the item: **User repositories**.

Enter the repository address: `https://github.com/samoswall/pic-shutter-card `, select the category **Lovelace**, click the **Add** button.

<a id="A2"></a>
## Installation

In the HACS section in the search, enter **pic-shutter-card**, select the card, click the **Download** button.

<a id="A3"></a>
## Configuration

### General

| Name | Type    | Required | Default value | Description
| ---- | ----    | -------- | -------       | -----------
| type | string  | true     | -             | Must be "custom:pic-shutter-card"
| title | string | false    | -             | The name of the card. It is displayed in the upper right corner.

### Параметры

| Name | Type | Required | Default value | Description
| ----                 | ----    | ---------------    | -------                       | -----------
| entity               | string  | true               | -                             | The shutter entity ID
| name                 | string  | false              | Friendly name of the entity   | Name to display for the shutter
| buttons_position     | string  | false              | `left`                        | Set buttons on `left` or on `right` of the shutter or `not show` to disable visibility
| title_position       | string  | false              | `top`                         | Set title on `top` or on `bottom` of the shutter
| outside_window       | string  | false              | `not show`                    | Set it to `show` for visibility of the background picture outside the window
| invert_percentage    | boolean | false              | `false`                       | Set it to `true` if your shutter is 100% when it is closed, and 0% when it is opened
| outside_window_pic   | string  | false              | `/local/community/pic-shutter-card/outside_window.png`    | The image file of the view outside the window. Uploaded with a card: `outside_window.png` `outside_window1.png` `outside_window2.png` `outside_window3.png` `outside_window4.png` `outside_window5.png` `outwin1.png` `outwin2.png` `outwin3.png `
| frame_window_pic     | string  | false              | `/local/community/pic-shutter-card/frame_window.png`      | The image file of the window frame. Uploaded with a card: `frame_window.png` `frame_win1.png` `frame_win1_2.png` `frame_win2.png`
| shutter_slide_pic    | string  | false              | `/local/community/pic-shutter-card/sc_shutter_slide.png`  | The image file of the curtain cloth. Uploaded with a card: `art.png` `art1.png` `art_city.png` `art3.png` `art4.png` `purple.png` `liteblue.png` `litegreen.png` `sc_shutter_slide.png`
| shutter_bottom_pic   | string  | false              | `/local/community/pic-shutter-card/sc_shutter_bottom.png` | An image file of the bottom bar of the roller blinds. Uploaded with a card: `sc_shutter_bottom.png`
| shutter_min_position | int (px)| false              | 4                            | The minimum position of the curtain. (in the open position)
| shutter_max_position | int (px)| false              | 127                          | The maximum position of the curtain. (in the closed position)
| shutter_heigth       | int (px)| false              | 140                          | The height of the curtain. It is used only for curtains with an opening direction to the left and/or right.
| shutter_direction    | string  | false              | `up`                         | The direction of opening the curtain: up - `up`, left - `left` , right - `right` , left and right at the same time - `leftright`
| shutter_top          | int (px)| false              | 17                           | The indentation from the upper edge of the window to the curtain cloth. The value in pixels. (window height 141 pixels)
| shutter_animation    | string  | false              | `show`                       | Displaying the animation of the direction of movement: show - `show` , do not show - any other value
| shutter_pic_height   | int (px)| false              | 155                          | The height of the window image. Increases the vertical size of the card.
| shutter_left         | int (%) | false              | 5                            | The indentation of the curtain cloth from the left edge of the window. It is specified as a % of the window size.
| shutter_width        | int (%) | false              | 90                           | The width of the curtain cloth. It is specified as a % of the window size.
| shutter_end_offset   | int (%) | false              | 0                            | The offset of the lower value of the curtain cloth. Specified in % of 100. (Example: If at 80% the curtain completely covers the window, then offset 20 will display as 100% closed)
| replace_0_percent    | string  | false              | notuse                       | Replaces the value of 0% with a custom word. For example: Closed, Bottom, etc. Any language is allowed.
| replace_100_percent  | string  | false              | notuse                       | Replaces the value of 100% with a custom word. For example: Open, Top, etc. Any language is allowed.

<a id="A4"></a>
### Description of image files

There are already some images in the `pic-shutter-card` folder:

| File                  | Description                                                                       | Image Size      | Image
| ----                  | -----------                                                                       | -----------     | --------
| frame_window.png      | Window frame option 1 (vertical blinds)                                           | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_window.png)
| frame_win1.png        | Window frame option 2 (white frame with window sill)                              | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_win1.png)
| frame_win1_2.png      | Window frame option 2 with curtain cloth art4.png                                 | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_win1_2.png)
| frame_win2.png        | Window frame option 3 (brown frame)                                               | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_win2.png)
| outside_window.png    | Image of the view outside the window option 1 (Moscow City)                       | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window.png)
| outside_window1.png   | Image of the view outside the window option 2 (Panorama of the night city part 1) | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window1.png)
| outside_window2.png   | Image of the view outside the window option 2 (Panorama of the night city part 2) | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window2.png)
| outside_window3.png   | Image of the view outside the window option 2 (Panorama of the night city part 3) | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window3.png)
| outside_window4.png   | Image of the view outside the window option 2 (Panorama of the night city part 4) | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window4.png)
| outside_window5.png   | Image of the view outside the window option 2 (Panorama of the night city part 5) | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window5.png)
| outwin1.png           | Image of the view outside the window option 3 (Nature)                            | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outwin1.png)
| outwin2.png           | Image of the view outside the window option 4 (Forest)                            | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outwin2.png)
| outwin3.png           | Image of the view outside the window option 5 (Lake)                              | (153px x 151px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outwin3.png)
| art.png               | Curtain canvas image option 1 (Abstraction white background)                      | (100px x 150px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art.png)
| art1.png              | Curtain canvas image option 2 (Abstraction black background)                      | (141px x 125px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art1.png)
| art_city.png          | Canvas curtain image option 3 (Night City black background)                       | (141px x 125px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art_city.png)
| art3.png              | Curtain canvas image option 1 (Abstraction white background)                      | (142px x 145px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art3.png)
| art4.png              | Picture of the curtain cloth option 4 (Blue curtain on the curtain)               | (141px x 130px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art4.png)
| purple.png            | Image of a purple curtain cloth                                                   | (1px x 1px)     | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/purple.png)
| liteblue.png          | Image of a blue curtain cloth                                                     | (1px x 1px)     | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/liteblue.png)
| litegreen.png         | Image of a light green curtain cloth                                              | (1px x 1px)     | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/litegreen.png)
| sc_shutter_slide.png  | Louver image (top 4 pixels white, bottom with transparent gradient)               | (1px x 6px)     | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/sc_shutter_slide.png)
| sc_shutter_bottom.png | Image of the bottom bar of the roller blinds                                      | (137px x 7px)   | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/sc_shutter_bottom.png)
| pic_balcon_l.png      | Window frame with door. (left)                                                    | (232px x 610px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/pic_balcon_l.png)
| pic_balcon_r.png      | Window frame with door. (right)                                                   | (234px x 610px) | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/pic_balcon_r.png)

<a id="A5"></a>
### Examples of the card code

**Example of the minimum card code**

![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample1.png)
```yaml
type: custom:pic-shutter-card
entities:
- entity: cover.roll_1
```

**Sample card code 1**

![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample2.png)
```yaml
type: horizontal-stack
cards:
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_2
    name: ' '
    buttons_position: not show
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outwin1.png
    shutter_slide_pic: /local/community/pic-shutter-card/sc_shutter_slide.png
    shutter_animation: not show
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_2
    name: ' '
    buttons_position: not show
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outwin2.png
    shutter_slide_pic: /local/community/pic-shutter-card/purple.png
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_2
    name: ' '
    buttons_position: not show
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outwin1.png
    shutter_slide_pic: /local/community/pic-shutter-card/litegreen.png
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_2
    name: ' '
    buttons_position: not show
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outwin2.png
    shutter_slide_pic: /local/community/pic-shutter-card/liteblue.png
    shutter_animation: not show
```

**Sample card code 2**

![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample3.png)
```yaml
type: horizontal-stack
cards:
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_1
    name: Left
    buttons_position: left
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outside_window2.png
    frame_window_pic: /local/community/pic-shutter-card/frame_window.png
    shutter_slide_pic: /local/community/pic-shutter-card/art1.png
    shutter_bottom_pic: none
    shutter_direction: left
    shutter_heigth: 135
    shutter_min_position: 5
    shutter_max_position: 95
    shutter_animation: show
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_1
    name: LeftRight
    buttons_position: left
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outside_window4.png
    frame_window_pic: /local/community/pic-shutter-card/frame_window.png
    shutter_slide_pic: /local/community/pic-shutter-card/art1.png
    shutter_bottom_pic: none
    shutter_direction: leftright
    shutter_heigth: 135
    shutter_min_position: 5
    shutter_max_position: 95
    shutter_animation: show
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_1
    name: Right
    buttons_position: left
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outside_window5.png
    frame_window_pic: /local/community/pic-shutter-card/frame_window.png
    shutter_slide_pic: /local/community/pic-shutter-card/art1.png
    shutter_bottom_pic: none
    shutter_direction: right
    shutter_heigth: 135
    shutter_min_position: 5
    shutter_max_position: 95
    shutter_animation: show
```

**Sample card code 3**

![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample4.png)
```yaml
type: horizontal-stack
cards:
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_1
    name: Left
    buttons_position: right
    title_position: bottom
    shutter_animation: show
    shutter_min_position: 5
    shutter_top: 4
    shutter_max_position: 135
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outside_window.png
    frame_window_pic: /local/community/pic-shutter-card/frame_win1.png
    shutter_slide_pic: /local/community/pic-shutter-card/art_city.png
    shutter_bottom_pic: show
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_1
    name: Right
    buttons_position: left
    title_position: bottom
    shutter_animation: show
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outwin1.png
    frame_window_pic: /local/community/pic-shutter-card/frame_win1_2.png
    shutter_slide_pic: /local/community/pic-shutter-card/art4.png
    shutter_bottom_pic: none
    shutter_top: -1
    shutter_heigth: 159
    shutter_direction: leftright
    shutter_min_position: -1
    shutter_max_position: 100
```

**Sample card code 4**

![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample5.png)
```yaml
type: horizontal-stack
cards:
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_2
    name: ' '
    buttons_position: left
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outside_window.png
    frame_window_pic: /local/community/pic-shutter-card/frame_win1.png
    shutter_min_position: 3
    shutter_top: 5
    shutter_max_position: 137
- type: custom:pic-shutter-card
  entities:
  - entity: cover.roll_2
    name: ' '
    buttons_position: right
    title_position: bottom
    outside_window: show
    outside_window_pic: /local/community/pic-shutter-card/outside_window.png
    frame_window_pic: /local/community/pic-shutter-card/frame_win2.png
    shutter_min_position: 3
    shutter_top: 5
    shutter_max_position: 142
```

**Sample card code 5**

![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample6.gif)
```yaml
type: horizontal-stack
cards:
  - type: custom:pic-shutter-card
    entities:
      - entity: cover.roll_1
        name: ' '
        buttons_position: left
        title_position: bottom
        outside_window: show
        frame_window_pic: /local/community/pic-shutter-card/pic_balcon_l.png
        shutter_min_position: 3
        shutter_top: 18
        shutter_left: 21
        shutter_max_position: 257
        shutter_pic_height: 300
        shutter_width: 74
  - type: custom:pic-shutter-card
    entities:
      - entity: cover.roll_2
        name: ' '
        buttons_position: right
        title_position: bottom
        outside_window: show
        frame_window_pic: /local/community/pic-shutter-card/pic_balcon_r.png
        shutter_min_position: 3
        shutter_top: 18
        shutter_left: 3
        shutter_max_position: 173
        shutter_pic_height: 300
        shutter_width: 80
```
<a id="A6"></a>
### Thanks

This card is an upgrade of the [has-shutter-card](https://github.com/Deejayfool/has-shutter-card).
Thanks to the author [Deejayfool](https://github.com/Deejayfool).

<a id="A7"></a>
## Donations
You can support this or other projects.
[![Donate](https://img.shields.io/badge/donate-Yandex-red.svg)](https://yoomoney.ru/fundraise/b8GYBARCVRE.230309)
