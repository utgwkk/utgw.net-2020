# utgw.net-2020

[Hono](https://hono.dev/) で実装された個人サイトです。AWS Lambda にデプロイされています。

## 開発

開発サーバーを起動します:

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## コマンド

| コマンド | 説明 |
| --- | --- |
| `yarn dev` | 開発サーバーを起動 |
| `yarn build` | esbuild でバンドル |
| `yarn typecheck` | TypeScript の型チェック |
| `yarn lint` | oxlint で lint |
| `yarn format` | oxfmt でコード整形 |
| `yarn deploy` | ビルド・静的ファイル・Lambda を一括デプロイ |
| `yarn playwright test` | E2E テストを実行 |
