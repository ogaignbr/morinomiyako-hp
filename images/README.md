# 画像ファイルの配置ガイド

## ディレクトリ構成

```
public/images/
├── hero/       … Hero セクションの背景画像
├── works/      … Works セクションの実績サムネイル
└── profile/    … About セクションのプロフィール写真
```

## 使い方

画像を配置したら `src/data/siteContent.js` のパスを更新してください。

### Hero 背景
```js
backgroundImage: '/images/hero/bg.jpg',
```

### Works 実績
```js
{ title: '...', image: '/images/works/work-01.jpg', ... },
```

### About プロフィール
```js
avatar: '/images/profile/avatar.jpg',
```

## 推奨サイズ

| 用途 | 推奨サイズ | 形式 |
|------|-----------|------|
| Hero背景 | 1920×1080px | JPG / WebP |
| Works | 800×500px (16:10) | JPG / WebP |
| Profile | 400×400px | JPG / WebP |
