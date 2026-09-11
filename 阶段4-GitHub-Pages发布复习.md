# 阶段 4：使用 GitHub Pages 发布网站

## 这一阶段要完成什么

把电脑上的个人网站上传到 GitHub，并使用 GitHub Pages 生成一个可以分享的网址。

GitHub 是保存代码的网站，GitHub Pages 是 GitHub 提供的静态网站服务。我们的项目只使用 HTML 和 CSS，所以不需要服务器或数据库就可以发布。

## 发布前检查

确认项目文件夹中至少有：

- `index.html`
- `style.css`

`index.html` 很重要，因为 GitHub Pages 会把它当作网站首页。

## 第一步：创建仓库

1. 登录 GitHub。
2. 点击右上角的 `+`，选择 `New repository`。
3. Repository name 填写：`my-life-website`。
4. 选择 `Public`，这样 GitHub Pages 才能正常使用。
5. 勾选 `Add a README file`。
6. 点击 `Create repository`。

仓库（repository）可以理解成“放项目文件的线上文件夹”。

## 第二步：上传文件

1. 进入刚创建的 `my-life-website` 仓库。
2. 点击 `Add file`，选择 `Upload files`。
3. 把本地项目文件夹中的这些文件拖进去：
   - `index.html`
   - `style.css`
   - 所有 `阶段*.md` 复习文档
4. 页面下方找到提交区域。
5. 在提交说明中填写：`完成个人网站初版`。
6. 点击 `Commit changes`。

不要把整个项目文件夹再套一层上传。打开仓库后，应该能直接看到 `index.html`，而不是先打开一个同名文件夹。

## 第三步：开启 GitHub Pages

1. 在仓库页面点击 `Settings`。
2. 在左侧找到 `Pages`。
3. 在 `Build and deployment` 下：
   - `Source` 选择 `Deploy from a branch`。
   - Branch 选择 `main`。
   - 文件夹选择 `/ (root)`。
4. 点击 `Save`。
5. 等待几十秒，刷新页面。

成功后，GitHub 会显示类似下面的网址：

```text
https://你的用户名.github.io/my-life-website/
```

## 第四步：检查网站

打开 GitHub Pages 显示的网址，确认：

1. 页面标题是 `Momk | 个人网站`。
2. 导航可以跳转到“关于我”“兴趣”“联系”。
3. 三个兴趣卡片可以正常显示。
4. 手机浏览器打开时内容没有横向溢出。

如果网页显示旧内容，先等待 1 到 2 分钟，再按 `Ctrl + F5` 强制刷新。

## 重要原理

### 静态网站是什么

我们的页面由 HTML、CSS 和少量资源组成，不需要程序实时计算，也不需要数据库保存数据，所以叫“静态网站”。

### 发布和本地打开有什么区别

- 本地打开：文件只在自己的电脑上可见。
- 发布到 GitHub Pages：GitHub 把文件放到互联网上，别人可以通过网址访问。

### 为什么首页必须叫 `index.html`

服务器访问一个文件夹时，通常会自动寻找 `index.html` 作为默认入口。如果改成别的名字，网址打开时可能找不到首页。

## 如何更新网站

以后修改本地文件后：

1. 在 GitHub 仓库中点击 `Add file` → `Upload files`。
2. 上传修改后的文件。
3. 点击 `Commit changes`。
4. 等待 GitHub Pages 重新发布。

## 安全提醒

- 不要把 GitHub 密码发给任何人。
- 不要把身份证号、手机号、家庭住址等隐私写进公开网站。
- 不要把密码、API 密钥或私密文件上传到公开仓库。

## 记住这句话

**GitHub 保存项目，GitHub Pages 把项目变成网址。**
