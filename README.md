# Spec Kit Cookbook

Astro Starlight を使って構築した Spec Kit Cookbook のドキュメントサイトです。

## 開発コマンド

| Command | Action |
| :-- | :-- |
| `npm install` | 依存関係をインストールします。 |
| `npm run dev` | ローカル開発サーバーを起動します。 |
| `npm run build` | 本番用の静的サイトを生成します。 |
| `npm run preview` | ビルド済みサイトをローカルで確認します。 |
| `npm run astro -- --help` | Astro CLI のヘルプを表示します。 |

## コンテンツ配置

- `src/content/docs/guides/`: ガイド系ドキュメント
- `src/content/docs/reference/`: 詳細リファレンス
- `astro.config.mjs`: Starlight とサイドバーの設定

既存の Markdown ドキュメントに含まれる Mermaid 図も、Astro 上でそのまま描画できるように設定しています。
