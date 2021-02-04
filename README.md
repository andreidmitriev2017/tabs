# tabs
Функция создания табов
## Установка
Для того чтобы установить данный плагин, необходимо:
1. Чтобы Ваш HTML файл содержал следующую структуру:

  ```html
<div class="tabs">
      <div class="tabs__menu">
          <div class="tabs__link">One</div>
          <div class="tabs__link">Two</div>
          <div class="tabs__link">Three</div>
      </div>
      <div class="tabs__item">content 1</div>
      <div class="tabs__item">content 2</div>
      <div class="tabs__item">content 3</div>
</div>
```
2. Ваш CSS-файл должен содержать классы **"hide"** и **show**. Свойство **display** у **hide** может быть **flex** или **block** по Вашему усмотрению.
```CSS
.hide {
    display: none;
}

.show {
    display: block;
}
```

3. В HTML - коде перед подключением ваше скрипта необходимо подключить tabs.js ^
```html
<script src="tabs.js"></script>
```
4. В Вашем скрипте неоходимо произвести вызов функции и передать в нее параметры:
```JS
createTabs('.tabs__menu', '.tabs__link', '.tabs__item');
```
