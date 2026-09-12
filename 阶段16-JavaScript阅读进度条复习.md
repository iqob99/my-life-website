# 阶段 16：JavaScript 阅读进度条复习

## 这一阶段完成了什么

本阶段给三个独立博客文章页增加了顶部阅读进度条。

当读者向下滚动时，进度条会从左到右增长；读完页面时，进度达到 100%。

## 重要原理

### 1. HTML 创建进度条元素

```html
<div
  class="reading-progress"
  role="progressbar"
  aria-label="文章阅读进度"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="0"
></div>
```

`role="progressbar"` 告诉辅助工具这是一个进度条。`aria-valuenow` 表示当前进度。

### 2. 用 JavaScript 计算百分比

页面可以滚动的总高度是：

```javascript
document.documentElement.scrollHeight - window.innerHeight
```

当前滚动距离是：

```javascript
window.scrollY
```

因此阅读百分比可以这样计算：

```javascript
window.scrollY / 可滚动总高度 * 100
```

### 3. 监听滚动事件

```javascript
window.addEventListener("scroll", updateReadingProgress);
```

每次滚动时，JavaScript 都会重新计算进度，并修改进度条的宽度：

```javascript
readingProgress.style.width = `${progress}%`;
```

## 为什么要检查元素是否存在

首页没有阅读进度条，但首页和文章页共用同一个 `script.js`。

所以脚本必须先判断：

```javascript
if (!readingProgress) {
  return;
}
```

这样首页不会因为找不到阅读进度条而报错。

## 如何复现本阶段

1. 在文章页添加一个进度条元素。
2. 使用 CSS 固定它在窗口顶部。
3. 用 JavaScript 获取页面高度和滚动距离。
4. 计算阅读百分比。
5. 在 `scroll` 事件中更新宽度。
6. 用 `resize` 事件应对窗口大小变化。

## 本阶段练习

1. 修改进度条的颜色。
2. 把进度条高度改成 6px。
3. 在进度条旁边显示百分比文字。
4. 观察文章页和首页的控制台是否都没有错误。

## 发布更新

上传：

- `script.js`
- `style.css`
- `posts` 文件夹中的三个 HTML 文件
- 本复习文档

## 记住这句话

**JavaScript 可以读取页面状态，并根据用户操作实时改变页面。**
