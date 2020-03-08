# Учебный проект «MartaUp»
👨‍💻 Адаптивный лендинг для digital-агентства

Основной стек:
+ Pug
+ PostCSS
+ Webpack 4
+ jQuery

<p align='center'>
<img src='http://lessons.sergeev.press/MartaUp-Preview.png'>
</p>

[**Демо**](https://sergeev-vn.github.io/marta-up/)

## Чтобы развернуть проект необходимо:
> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же
> [последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

```sh
$ git clone https://github.com/sergeev-vn/marta-up.git
$ cd marta-up
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение                                                                                   |
| ------ | -------------------------------------------------------------------------------------------- |
| dev    | Запустит webpack-dev-server с _горячей_ заменой модулей                                      |
| build  | Соберет проект для **production** (проект готов к загрузке на сервер)                        |

#### Чтобы запустить скрипт:

```sh
$ npm run имя_скрипта
```

##### Либо:

```sh
$ yarn имя_скрипта
```
