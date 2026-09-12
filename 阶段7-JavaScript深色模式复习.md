# 阶段 7：JavaScript 深色模式复习

## 这一阶段完成了什么

我们给网站增加了深色模式按钮：

- 点击“深色模式”后，页面切换为深色配色。
- 按钮文字会变成“浅色模式”。
- 再次点击可以切回浅色模式。
- 浏览器会记住上一次选择，刷新页面后仍然保留。

新增文件：

- `script.js`：JavaScript 交互逻辑。

## 重要原理

### 1. JavaScript 负责行为

HTML 负责放按钮：

```html
<button class="theme-toggle" type="button">深色模式</button>
```

JavaScript 负责监听点击：

```javascript
themeToggle.addEventListener("click", () => {
  // 点击后执行的代码
});
```

`addEventListener` 可以理解成“当某件事情发生时，执行一段代码”。

### 2. 用 class 切换样式

JavaScript 中：

```javascript
document.body.classList.toggle("dark-mode", isDarkMode);
```

这行会给 `body` 添加或移除 `dark-mode` 类。CSS 中的 `.dark-mode` 就会自动接管颜色。

这样做比用 JavaScript 一个个修改颜色更清晰，因为：

- JavaScript 只负责决定当前状态。
- CSS 负责具体外观。

### 3. CSS 变量

浅色模式中定义：

```css
:root {
  --page-background: #f7f3ed;
}
```

使用时写：

```css
body {
  background: var(--page-background);
}
```

深色模式只需要重新定义同一个变量：

```css
.dark-mode {
  --page-background: #1f2937;
}
```

页面就会统一改变颜色。

### 4. `localStorage` 保存选择

```javascript
localStorage.setItem("theme", "dark");
```

这会把主题选择保存在当前浏览器中。下次打开网站时：

```javascript
const savedTheme = localStorage.getItem("theme");
```

就可以读取之前保存的选择。

## 如何复现本阶段

1. 在 HTML 中添加一个按钮。
2. 在 HTML 末尾引入 `script.js`。
3. 在 CSS 中定义浅色和深色变量。
4. 给按钮添加点击事件。
5. 点击时切换 `dark-mode` 类。
6. 用 `localStorage` 保存当前主题。

## 本阶段练习

1. 把按钮文字改成你喜欢的表达。
2. 修改深色模式的背景色。
3. 打开网页，切换主题后刷新，观察主题是否保留。
4. 打开浏览器开发者工具，在 Console 中输入：

```javascript
localStorage.getItem("theme")
```

观察浏览器保存的值。

## 发布更新

本阶段需要上传：

- `index.html`
- `style.css`
- `script.js`

复习文档也可以一起上传。

## 记住这句话

**JavaScript 决定网页怎么响应操作，CSS 决定响应后的样子。**
