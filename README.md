# pic-shutter-card
[![EN](https://img.shields.io/badge/lang-EN-green.svg)](/README.en.md)

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
![](https://img.shields.io/github/watchers/samoswall/pic-shutter-card.svg)
![](https://img.shields.io/github/stars/samoswall/pic-shutter-card.svg)

[![Donate](https://img.shields.io/badge/donate-Yandex-red.svg)](https://yoomoney.ru/fundraise/b8GYBARCVRE.230309)

**Карточка штор для Lovelace UI Home Assistant**
![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample.gif)
![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample0.gif)
**Карточка отображает текущее положение шторы, позволяет управлять её положением и имеет пользовательские настройки для устоновки произвольных изображений окна, вида за окном и полотна шторы.**

## Содержание
- [Добавление репозитория](#A1)
- [Установка](#A2)
- [Конфигурация](#A3)
- [Описание файлов изображений](#A4)
- [Примеры кода карточки](#A5)
- [Благодарности](#A6)
- [Пожертвования](#A7)
  
<a id="A1"></a>
## Добавление репозитория

В разделе HACS в меню, расположенном в правом верхнем углу, выбираем пункт: **Пользовательские репозитории**.

Вводим адрес репозитория: `https://github.com/samoswall/pic-shutter-card`, выбираем категорию **Lovelace**,  нажимаем кнопку **Добавить**.

<a id="A2"></a>
## Установка

В разделе HACS в поиске вводим **pic-shutter-card**, выбираем карточку, нажимаем кнопку **Скачать**.

<a id="A3"></a>
## Конфигурация

### Главное

| Имя   | Тип    | Важность параметра | Значение по умолчанию | Описание
| ----  | ----   | --------           | -------               | -----------
| type  | string | Обязательно        | -                     | Должно быть "custom:pic-shutter-card"
| title | string | Не обязательно     | -                     | Название карточки. Отображается в верхнем правом углу.

### Параметры

| Имя                  | Тип     | Важность параметра | Значение по умолчанию         | Описание
| ----                 | ----    | ---------------    | -------                       | -----------
| entity               | string  | Обязательно        | -                             | Идентификатор сущности
| name                 | string  | Не обязательно     | Friendly name of the entity   | Отображаемое имя шторы
| buttons_position     | string  | Не обязательно     | `left`                        | Местоположение кнопок управления: слева - `left` , справа - `right` от окна или не показывать - `not show`
| title_position       | string  | Не обязательно     | `top`                         | Местоположение имени шторы и процента открытия: сверху - `top` , снизу - `bottom`
| outside_window       | string  | Не обязательно     | `not show`                    | Отображение картинки вида за окном: показывать - `show` , не показывать - любое другое значение
| invert_percentage    | boolean | Не обязательно     | `false`                       | Инверсия положения шторы. Установите `true` если 100% - штора закрыта и 0% when it is opened
| outside_window_pic   | string  | Не обязательно     | `/local/community/pic-shutter-card/outside_window.png`    | Файл изображения вида за окном. Загружены с карточкой: `outside_window.png` `outside_window1.png` `outside_window2.png` `outside_window3.png` `outside_window4.png` `outside_window5.png` `outwin1.png` `outwin2.png` `outwin3.png `
| frame_window_pic     | string  | Не обязательно     | `/local/community/pic-shutter-card/frame_window.png`      | Файл изображения рамы окна. Загружены с карточкой: `frame_window.png` `frame_win1.png` `frame_win1_2.png` `frame_win2.png`
| shutter_slide_pic    | string  | Не обязательно     | `/local/community/pic-shutter-card/sc_shutter_slide.png`  | Файл изображения полотна шторы. Загружены с карточкой: `art.png` `art1.png` `art_city.png` `art3.png` `art4.png` `purple.png` `liteblue.png` `litegreen.png` `sc_shutter_slide.png`
| shutter_bottom_pic   | string  | Не обязательно     | `/local/community/pic-shutter-card/sc_shutter_bottom.png` | Файл изображения нижней планки у рулонных штор. Загружен с карточкой: `sc_shutter_bottom.png`
| shutter_min_position | int (px)| Не обязательно     | 4                            | Минимальное положение шторы. (в открытом положении)
| shutter_max_position | int (px)| Не обязательно     | 127                          | Максимальное положение шторы. (в закрытом положении)
| shutter_heigth       | int (px)| Не обязательно     | 140                          | Высота шторы. Используется только для штор, у которых направление открытия влево и/или вправо.
| shutter_direction    | string  | Не обязательно     | `up`                         | Направление открытия шторы: вверх - `up` , влево - `left` , вправо - `right` , влево и вправо одновременно - `leftright`
| shutter_top          | int (px)| Не обязательно     | 17                           | Отступ от верхнего края окна до полотна шторы. Значение в пикселях. (высота окна 141 пиксель)
| shutter_animation    | string  | Не обязательно     | `show`                       | Отображение анимации направления движения: показывать - `show` , не показывать - любое другое значение
| shutter_pic_height   | int (px)| Не обязательно     | 155                          | Высота изображения окна. Увеличивает вертикальный размер карточки.
| shutter_left         | int (%) | Не обязательно     | 5                            | Отступ полотна шторы от левого края окна. Указывается в % от размера окна.
| shutter_width        | int (%) | Не обязательно     | 90                           | Ширина полотна шторы. Указывается в % от размера окна.
| shutter_end_offset   | int (%) | Не обязательно     | 0                            | Смещение нижнего значения полотна шторы. Указывается в % от 100. (Пример: Если при 80% штора полностью закрывает окно, то смещение 20 отобразит как закрытое на 100%)
| replace_0_percent    | string  | Не обязательно     | notuse                       | Заменяет значение 0% на пользовательское слово. Например: Закрыто, Опущено и т.д.
| replace_100_percent  | string  | Не обязательно     | notuse                       | Заменяет значение 100% на пользовательское слово. Например: Открыто, Поднято и т.д.

<a id="A4"></a>
## Описание файлов изображений

В папке карточки `pic-shutter-card` уже имеются некоторые изображения:

| Файл                  | Описание                                                                     | Размер изображения |  Изображение
| ----                  | -----------                                                                  | -----------        | --------
| frame_window.png      | Рама окна вариант 1 (вертикальные жалюзи)                                    | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_window.png)
| frame_win1.png        | Рама окна вариант 2 (белая рама с подоконником)                              | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_win1.png)
| frame_win1_2.png      | Рама окна вариант 2 c гардиной для полотна шторы art4.png                    | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_win1_2.png)
| frame_win2.png        | Рама окна вариант 3 (коричневая рама)                                        | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/frame_win2.png)
| outside_window.png    | Изображение вида за окном вариант 1 (Москва Сити)                            | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window.png)
| outside_window1.png   | Изображение вида за окном вариант 2 (Панорама ночного города часть 1)        | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window1.png)
| outside_window2.png   | Изображение вида за окном вариант 2 (Панорама ночного города часть 2)        | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window2.png)
| outside_window3.png   | Изображение вида за окном вариант 2 (Панорама ночного города часть 3)        | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window3.png)
| outside_window4.png   | Изображение вида за окном вариант 2 (Панорама ночного города часть 4)        | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window4.png)
| outside_window5.png   | Изображение вида за окном вариант 2 (Панорама ночного города часть 5)        | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outside_window5.png)
| outwin1.png           | Изображение вида за окном вариант 3 (Природа)                                | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outwin1.png)
| outwin2.png           | Изображение вида за окном вариант 4 (Лес)                                    | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outwin2.png)
| outwin3.png           | Изображение вида за окном вариант 5 (Озеро)                                  | (153px х 151px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/outwin3.png)
| art.png               | Изображение полотна шторы вариант 1 (Абстракция белый фон)                   | (100px х 150px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art.png)
| art1.png              | Изображение полотна шторы вариант 2 (Абстракция черный фон)                  | (141px х 125px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art1.png)
| art_city.png          | Изображение полотна шторы вариант 3 (Ночной город черный фон)                | (141px х 125px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art_city.png)
| art3.png              | Изображение полотна шторы вариант 1 (Абстракция белый фон)                   | (142px х 145px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art3.png)
| art4.png              | Изображение полотна шторы вариант 4 (Синяя штора на гардине)                 | (141px х 130px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/art4.png)
| purple.png            | Изображение сиреневого полотна шторы                                         | (1px х 1px)        | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/purple.png)
| liteblue.png          | Изображение голубого полотна шторы                                           | (1px х 1px)        | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/liteblue.png)
| litegreen.png         | Изображение светлозеленого полотна шторы                                     | (1px х 1px)        | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/litegreen.png)
| sc_shutter_slide.png  | Изображение жалюзи (верхние 4 пикселя белые, нижние с прозрачным градиентом) | (1px х 6px)        | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/sc_shutter_slide.png)
| sc_shutter_bottom.png | Изображение нижней планки у рулонных штор                                    | (137px х 7px)      | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/sc_shutter_bottom.png)
| pic_balcon_l.png      | Рама окна с дверью. (левая)                                                  | (232px x 610px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/pic_balcon_l.png)
| pic_balcon_r.png      | Рама окна с дверью. (правая)                                                 | (234px x 610px)    | ![all](https://github.com/samoswall/pic-shutter-card/blob/main/dist/pic_balcon_r.png)

<a id="A5"></a>
### Примеры кода карточки

**Пример минимального кода карточки**

![all](https://github.com/samoswall/pic-shutter-card/blob/main/Image/sample1.png)
```yaml
type: custom:pic-shutter-card
entities:
- entity: cover.roll_1
```

**Пример кода карточки 1**

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

**Пример кода карточки 2**

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

**Пример кода карточки 3**

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

**Пример кода карточки 4**

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

**Пример кода карточки 5**

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
## Благодарности

Эта карточка является модернизацией карточки [hass-shutter-card](https://github.com/Deejayfool/hass-shutter-card).
Спасибо автору [Deejayfool](https://github.com/Deejayfool).

<a id="A7"></a>
## Пожертвования
Вы можете поддержать этот или другие проекты.
[![Donate](https://img.shields.io/badge/donate-Yandex-red.svg)](https://yoomoney.ru/fundraise/b8GYBARCVRE.230309)
