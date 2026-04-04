# utgw.net-2020

[Hono](https://hono.dev/) で実装された個人サイトです。AWS Lambda にデプロイされています。

## 開発

開発サーバーを起動します:

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## コマンド

| コマンド              | 説明                                        |
| --------------------- | ------------------------------------------- |
| `npm run dev`         | 開発サーバーを起動                          |
| `npm run build`       | esbuild でバンドル                          |
| `npm run typecheck`   | TypeScript の型チェック                     |
| `npm run lint`        | oxlint で lint                              |
| `npm run format`      | oxfmt でコード整形                          |
| `npm run deploy`      | ビルド・静的ファイル・Lambda を一括デプロイ |
| `npx playwright test` | E2E テストを実行                            |
