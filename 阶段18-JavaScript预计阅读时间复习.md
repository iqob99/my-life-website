# 阶段 18：JavaScript 预计阅读时间复习

## 这一阶段完成了什么

本阶段给三篇文章增加了“预计阅读时间”。

页面打开后，JavaScript 会读取文章正文的文字数量，并自动显示预计需要几分钟读完。

## 重要原理

### 1. 给页面准备一个显示位置

```html
<p class="reading-time">正在计算阅读时间……</p>
```

页面刚打开时先显示临时文字，JavaScript 计算完成后再替换它。

### 2. 读取正文文字

```javascript
const characterCount = articleBody.textContent.trim().length;
```

- `textContent` 可以读取元素中的所有文字。
- `trim()` 可以去掉开头和结尾多余的空白。
- `length` 可以得到文字数量。

### 3. 根据文字数量估算时间

```javascript
const minutes = Math.max(1, Math.ceil(characterCount / 300));
```

这里用每分钟约 300 个中文字作为简单估算：

- 除以 300，得到大约需要几分钟。
- `Math.ceil()` 向上取整。
- `Math.max(1, ...)` 确保最短显示为 1 分钟。

这不是精确计时，而是给读者一个方便的阅读预期。

### 4. 更新页面内容

```javascript
readingTime.textContent = `预计阅读 ${minutes} 分钟`;
```

JavaScript 可以修改 HTML 元素里的文字，让页面内容根据实际文章自动变化。

## 为什么要检查元素是否存在

首页没有 `.reading-time` 和 `.article-body`，但首页和文章页共用同一个 `script.js`。

因此只有在两个元素都存在时，才执行阅读时间计算：

```javascript
if (readingTime && articleBody) {
  // 计算阅读时间
}
```

## 如何复现本阶段

1. 在文章标题附近添加一个阅读时间元素。
2. 用 JavaScript 获取文章正文。
3. 计算正文文字数量。
4. 按一个简单规则估算分钟数。
5. 把计算结果写回页面。

## 本阶段练习

1. 把每分钟 300 个字改成 250 个字。
2. 修改显示文字，例如“阅读大约需要 1 分钟”。
3. 给一篇文章增加更多内容，观察阅读时间是否变化。
4. 在首页打开浏览器控制台，确认没有错误。

## 发布更新

上传：

- `script.js`
- `style.css`
- `posts` 文件夹中的三个 HTML 文件
- 本复习文档

## 记住这句话

**网页内容可以被 JavaScript 读取、计算，再动态显示给用户。**
