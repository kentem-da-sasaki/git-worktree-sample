# Git Worktree + Claude Code 並列開発ハンズオン

Git Worktree と Claude Code を組み合わせて、**3つの機能を同時並列で開発**する体験ハンズオンです。

## 前提条件

- Git がインストールされていること
- Claude Code (`claude`) がインストールされていること
- モダンブラウザ（Chrome, Firefox, Edge 等）

## ハンズオン手順

### Step 1: クローン & ベースアプリ確認

```bash
git clone <このリポジトリのURL>
cd git-worktree-sample
```

`index.html` をブラウザで開き、**時計カード**が表示されることを確認してください。

---

### Step 2: Worktree を作成する

3つの機能ブランチ用に worktree を作成します。

```bash
git worktree add ../worktree-calculator  -b feature/calculator
git worktree add ../worktree-color-picker -b feature/color-picker
git worktree add ../worktree-unit-converter -b feature/unit-converter
```

> 各 worktree はリポジトリの隣のディレクトリに作られます。

---

### Step 3: 各 Worktree で Claude Code を起動して機能を実装

**ターミナルを3つ**開き、それぞれの worktree で `claude` を起動します。以下のプロンプトをそのままコピペしてください。

#### ターミナル1 — 電卓カード

```bash
cd ../worktree-calculator
claude
```

Claude Code に以下を入力:

```
js/calculator.js と css/calculator.css を作成して、四則演算ができる電卓カードを実装してください。

要件:
- Dashboard.addCard() で自己登録する（js/clock.js を参考に）
- id: "calculator", title: "電卓", icon: "🧮"
- 0-9, +, -, ×, ÷, =, C ボタンをグリッド配置
- 計算結果をディスプレイに表示
- css/calculator.css にスタイルを記述
- 完成したらコミットしてください
```

#### ターミナル2 — カラーピッカーカード

```bash
cd ../worktree-color-picker
claude
```

Claude Code に以下を入力:

```
js/color-picker.js と css/color-picker.css を作成して、カラーピッカーカードを実装してください。

要件:
- Dashboard.addCard() で自己登録する（js/clock.js を参考に）
- id: "color-picker", title: "カラーピッカー", icon: "🎨"
- <input type="color"> でカラー選択
- 選択中の色を HEX と RGB で表示
- 色のプレビュー領域を表示
- css/color-picker.css にスタイルを記述
- 完成したらコミットしてください
```

#### ターミナル3 — 単位変換カード

```bash
cd ../worktree-unit-converter
claude
```

Claude Code に以下を入力:

```
js/unit-converter.js と css/unit-converter.css を作成して、単位変換カードを実装してください。

要件:
- Dashboard.addCard() で自己登録する（js/clock.js を参考に）
- id: "unit-converter", title: "単位変換", icon: "📐"
- カテゴリ切替: 長さ（m/km/mi/ft）、重さ（kg/g/lb/oz）、温度（℃/℉/K）
- 入力値を変換してリアルタイム表示
- css/unit-converter.css にスタイルを記述
- 完成したらコミットしてください
```

> 3つの Claude Code が同時に作業を進めます。各実装は独立したファイルなのでコンフリクトしません。

---

### Step 4: main にマージして完成確認

全ての実装が完了したら、main ブランチにマージします。

```bash
cd git-worktree-sample
git merge feature/calculator
git merge feature/color-picker
git merge feature/unit-converter
```

`index.html` をブラウザでリロードし、**4つのカード**（時計・電卓・カラーピッカー・単位変換）が表示されれば成功です！

---

## 片付け

worktree を削除してクリーンアップします。

```bash
git worktree remove ../worktree-calculator
git worktree remove ../worktree-color-picker
git worktree remove ../worktree-unit-converter
```

不要になったブランチも削除できます。

```bash
git branch -d feature/calculator
git branch -d feature/color-picker
git branch -d feature/unit-converter
```
