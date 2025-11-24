# AIO Design System

デザインシステムのドキュメントとコンポーネントライブラリ

## 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

## ビルド

```bash
# プロダクションビルド
pnpm build
```

## デプロイ

### Vercel

```bash
# Vercel CLIでデプロイ
vercel
```

または、GitHubリポジトリをVercelに接続して自動デプロイ

### その他のプラットフォーム

環境変数:
- `NODE_ENV=production`
- `PORT=3000` (任意)

ビルドコマンド: `pnpm build`

起動コマンド: `pnpm start`

## 構成

```
aio-design-system/
├── client/          # フロントエンドコード
│   ├── src/
│   └── public/
├── server/          # バックエンドコード
├── shared/          # 共有コード
└── dist/            # ビルド出力
    ├── index.js     # サーバー
    └── public/      # 静的ファイル
```
