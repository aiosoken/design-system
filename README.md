# AIO総研 デザインシステム

AIO総研のブランドアイデンティティとUIコンポーネントを文書化するStorybookです。

## セットアップ

```bash
cd design-system
npm install
```

## 開発

Storybookを起動するには：

```bash
npm run storybook
```

ブラウザで http://localhost:6006 を開きます。

## ビルド

静的サイトとしてビルドするには：

```bash
npm run build-storybook
```

ビルド結果は `storybook-static` ディレクトリに出力されます。

## 構成

```
design-system/
├── .storybook/         # Storybook設定
│   ├── main.ts         # メイン設定
│   └── preview.ts      # プレビュー設定
├── lib/                # コンポーネントライブラリ
│   ├── components/     # UIコンポーネント
│   ├── hooks/          # カスタムフック
│   ├── styles.css      # グローバルスタイル
│   ├── utils.ts        # ユーティリティ
│   └── index.ts        # エクスポート
├── public/             # 静的アセット（ロゴなど）
├── stories/            # ストーリーファイル
│   ├── Introduction.mdx
│   ├── Colors.stories.tsx
│   ├── Logo.stories.tsx
│   ├── Button.stories.tsx
│   └── ...
└── package.json
```

## ブランドカラー

| カラー | HEX | 用途 |
|--------|-----|------|
| Primary Orange | #F25533 | CTAボタン、アクセント |
| Primary Blue | #3054AD | リンク、情報表示 |
| Black | #1A1A1A | 本文テキスト |
| Gray-600 | #666666 | キャプション |

## コンポーネント

- Button - ボタンコンポーネント
- Card - カードコンポーネント
- Input - 入力フィールド
- Checkbox - チェックボックス
- Switch - スイッチ
- Tabs - タブ
- Dialog - ダイアログ
- Badge - バッジ

詳細はStorybookで確認してください。
