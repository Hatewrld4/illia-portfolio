# ILLIA — Персональний сайт-портфоліо

Персональний сайт-візитка студента Полтавського політехнічного коледжу — Іллі, Python-розробника та ентузіаста технологій.

## Структура проєкту

```
illia-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── favicon.svg
└── README.md
```

## Технології

- HTML5 (семантична розмітка)
- CSS3 (власні змінні, Grid, Flexbox, анімації)
- Vanilla JavaScript (ES6+, без фреймворків)
- Шрифт Inter (Google Fonts)

## Як запустити локально

Сайт не потребує збірки чи встановлення залежностей — це звичайні статичні файли.

**Варіант 1. Відкрити напряму**

Двічі клацни на файл `index.html` — він відкриється у браузері за замовчуванням.

**Варіант 2. Локальний сервер (рекомендовано)**

Деякі браузери обмежують роботу JavaScript при відкритті файлу напряму (`file://`), тому зручніше підняти локальний сервер:

За допомогою Python (якщо встановлено):

```bash
cd illia-portfolio
python -m http.server 8000
```

Потім відкрий у браузері: `http://localhost:8000`

За допомогою Node.js (пакет `serve`):

```bash
cd illia-portfolio
npx serve .
```

За допомогою VS Code: встанови розширення **Live Server** і натисни «Go Live» внизу вікна редактора.

## Як опублікувати сайт безкоштовно через GitHub Pages

1. **Створи репозиторій на GitHub**
   Зайди на [github.com](https://github.com) → «New repository» → вкажи назву, наприклад `illia-portfolio` → натисни «Create repository».

2. **Завантаж файли проєкту**

   Через веб-інтерфейс:
   - Відкрий створений репозиторій → «Add file» → «Upload files»
   - Перетягни всі файли та папки проєкту (`index.html`, `css/`, `js/`, `assets/`, `favicon.svg`, `README.md`)
   - Натисни «Commit changes»

   Або через термінал:

   ```bash
   cd illia-portfolio
   git init
   git add .
   git commit -m "Перший коміт: персональний сайт-портфоліо"
   git branch -M main
   git remote add origin https://github.com/Hatewrld4/illia-portfolio.git
   git push -u origin main
   ```

3. **Увімкни GitHub Pages**
   - Відкрий репозиторій на GitHub → вкладка **Settings**
   - У лівому меню вибери **Pages**
   - У розділі «Build and deployment» → «Source» вибери **Deploy from a branch**
   - У «Branch» вибери `main` і папку `/ (root)` → натисни **Save**

4. **Готово**
   Через кілька хвилин сайт буде доступний за адресою:

   ```
   https://hatewrld4.github.io/illia-portfolio/
   ```

   (точна адреса залежить від назви акаунта та репозиторію — GitHub покаже її на сторінці Pages після публікації)

## Примітки

- Усі посилання на GitHub ведуть на [github.com/Hatewrld4](https://github.com/Hatewrld4).
- Сайт адаптивний і коректно працює на екранах від 375px до 1920px.
- Анімації враховують налаштування `prefers-reduced-motion` операційної системи користувача.
