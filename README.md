# Portfolio - sukuna-hikona.github.io

Vue.js + Vite で構築したポートフォリオサイトです。  
GitHub Pagesで自動デプロイされます。

## 技術スタック

- **Vue.js 3** + Vue Router 4
- **Vite 5**
- **GitHub Pages** + GitHub Actions (CI/CD)

## セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/sukuna-hikona/sukuna-hikona.github.io.git
cd sukuna-hikona.github.io

# 依存関係をインストール
npm install

# 開発サーバーを起動（http://localhost:5173）
npm run dev

# ビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## デプロイ

`main` ブランチにpushすると、GitHub Actionsが自動でビルド・デプロイします。

### 初回セットアップ手順

1. GitHubで `sukuna-hikona.github.io` という名前のリポジトリを作成
2. このプロジェクトをpush:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/sukuna-hikona/sukuna-hikona.github.io.git
   git push -u origin main
   ```
3. リポジトリの **Settings → Pages** で:
   - Source: **GitHub Actions** を選択
4. 数分後、`https://sukuna-hikona.github.io` でサイトが公開されます

## プロジェクト構成

```
src/
├── assets/main.css    # グローバルスタイル
├── components/
│   ├── HomePage.vue   # メインページ（Hero, About, Skills, Projects）
│   └── ProjectDetail.vue  # プロジェクト詳細ページ
├── data/projects.js   # プロジェクト・スキルデータ
├── router/index.js    # Vue Router設定
├── App.vue            # ルートコンポーネント
└── main.js            # エントリーポイント
```

## カスタマイズ

- プロジェクト情報: `src/data/projects.js`
- デザイン・カラー: `src/assets/main.css` のCSS変数
- ナビゲーション: `src/App.vue`
