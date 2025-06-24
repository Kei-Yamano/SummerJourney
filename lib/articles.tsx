import type React from "react"
import Image from "next/image"

// 記事データの型定義
export interface ArticleData {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  thumbnail: string
  category: string
  author: string
  content: React.ReactNode
}

// 記事データを一元管理
export const articlesData: Record<string, ArticleData> = {
  "teruteru-tell-your-tale": {
    id: "teruteru-tell-your-tale",
    title: "てるてる～Tell Your Tale～ 開発記録",
    excerpt: "イラストから物語を考える創造力と表現する文章力を養う2人用対戦ゲームの開発について詳しく解説します。",
    date: "2023年8月15日",
    readTime: "8分",
    tags: ["Unity", "C#", "ゲーム開発", "チーム開発"],
    thumbnail: "/teruteruHome.png",
    category: "プロダクト",
    author: "山野 夏",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>プロジェクト概要</h2>
        <p>
          「てるてる～Tell Your Tale～」は、イラストから物語を考える創造力と表現する文章力を養う2人用対戦ゲームです。
        </p>

        <h2>ゲームの流れ</h2>
        <p>ゲームは以下の流れで進行します：</p>
        <ol>
          <li>4枚の画像から物語を創造</li>
          <li>相手の物語を読み、元の4枚の画像を推測</li>
          <li>その一致率で競いあう</li>
        </ol>

        <h2>ゲーム画面</h2>

        <h3>物語作成画面</h3>
        <div className="my-8">
          <Image
            src="/teruteruPlay.png"
            alt="てるてる物語作成画面"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center">プレイヤーが4枚の画像を見て物語を作成している画面</p>
        </div>

        <h3>画像推測画面</h3>
        <div className="my-8">
          <Image
            src="/teruteruRead.png"
            alt="てるてる画像推測画面"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center">相手の物語から元の4枚の画像を推測している画面</p>
        </div>

        <h2>開発について</h2>
        <p>このゲームはUnityとC#を使用して開発しました。私はフロントエンド部分を担当しました。</p>

        <h2>技術的な挑戦</h2>
        <p>
          伝言による文章力と想像力を鍛えるという性質から、チームで通信は最優先事項に置くことを決めていました。そのため、フロントエンドでのアルゴリズムをホワイトボードに書きながら、バックエンドの実装状態に合わせて都度調整していく部分は難しくもあり、楽しい部分でもありました。
        </p>

        <h2>チーム開発での学び</h2>
        <p>
          チームで常に進捗を確認し合い、また意見をいつでも交わせられるよう同じ環境で開発している時間を長く取れたことはとても重要だったと感じています。
          当たり前のことでもありますが、バージョン管理をする際のコンフリクトを避ける大切さを経験する良い機会でもありました。
        </p>
      </div>
    ),
  },

  "text-communication-research": {
    id: "text-communication-research",
    title: "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
    excerpt: "自己肯定感の低下問題に対して、テキスト対話上での褒め方支援に注目した研究について詳しく解説します。",
    date: "2024年12月1日",
    readTime: "12分",
    tags: ["Python", "機械学習", "研究", "自然言語処理"],
    thumbnail: "/digital.png",
    category: "研究",
    author: "山野 夏",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>研究背景</h2>
        <p>
          現代社会において、自己肯定感の低下が深刻な問題となっています。この研究では、テキスト対話上での褒め方支援に注目しました。
        </p>

        <h2>研究目的</h2>
        <p>
          テキストコミュニケーションにおける褒め方の上手さを推定するモデルを構築し、その推定精度を分析することを目的としています。
        </p>

        <h2>研究手法</h2>
        <p>
          男女21組のペアにテキスト対話をしてもらい、そこから131の称賛データを収集し、
          Python3を使用して、ランダムフォレストによる機械学習モデルを構築しました。
        </p>

        <h2>実験結果</h2>
        <p>
          対面での褒めを対象にした先行モデルには及ばない結果となりました。しかし、テキストコミュニケーションでは、対面での褒め以上に極性値による影響が大きいことが明らかになりました。
        </p>

        <h2>今後の課題</h2>
        <p>
          文脈を加味した推定ができていないため、修士では称賛前後の文章も踏まえた上で、LLMを用いた特徴量の抽出を予定しております。
        </p>
      </div>
    ),
  },

  "pump-popup-memo-pad": {
    id: "pump-popup-memo-pad",
    title: "PUMP -PopUp Memo Pad- 開発記録",
    excerpt: "検索支援およびメモ機能を追加したChrome拡張機能の開発について詳しく解説します。",
    date: "2025年2月10日",
    readTime: "6分",
    tags: ["HTML", "CSS", "JavaScript", "Chrome拡張機能"],
    thumbnail: "/pump.png",
    category: "プロダクト",
    author: "山野 夏",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>プロジェクト概要</h2>
        <p>
          PUMPは検索支援およびメモ機能を追加したGoogle
          Chrome拡張機能です。検索効率の向上と情報管理の最適化を目指して開発しました。
        </p>

        <h2>開発背景</h2>
        <p>
          インターネット検索において、同じページを何度も訪問してしまう問題や、重要な情報を見つけても後で見つけられない問題を解決したいと考えました。
        </p>

        <h2>主な機能</h2>
        <p>PUMPには以下の主要機能があります：</p>
        <ol>
          <li>検索したページにメモと必要性の評価を残す機能</li>
          <li>次回検索以降、タイトルを見るだけで必要性が分かる表示機能</li>
          <li>タイトルにカーソルを添えるとメモ内容が表示される機能</li>
        </ol>

        <h2>技術的な実装</h2>
        <p>
          HTML、CSS、JavaScriptを使用してChrome拡張機能として実装しました。特にメモ入力ウィンドウに関するアルゴリズムとUIの設計を担当しました。
        </p>

        <h2>開発で工夫した点</h2>
        <p>ユーザビリティを重視し、直感的に操作できるインターフェースの設計に力を入れました。</p>

        <h2>ハッカソンでの成果</h2>
        <p>2025年2月のハッカソンで最優秀賞を受賞しました。実用的な機能と直感的なUIが評価されました。</p>

        <h2>今後の展望</h2>
        <p>より多くのブラウザに対応し、機能の拡張を検討しています。</p>
      </div>
    ),
  },

  "hittan-save": {
    id: "hittan-save",
    title: "ヒッタンセーブ 開発記録",
    excerpt: "2人同時対戦の落ちもの×射的ゲームの開発について詳しく解説します。",
    date: "2023年7月20日",
    readTime: "5分",
    tags: ["Java", "ゲーム開発", "2人対戦"],
    thumbnail: "/HitAndSave.png",
    category: "プロダクト",
    author: "山野 夏",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>ゲーム概要</h2>
        <p>
          ヒッタンセーブは2人同時対戦の落ちもの×射的ゲームです。海を舞台に、溺れている人を救助し、ワニから守るアクションゲームです。
        </p>

        <h2>ゲームルール</h2>
        <p>ゲームには2種類のオブジェクトが登場します：</p>
        <ul>
          <li>溺れている人：救助する必要がある</li>
          <li>ワニ：撃退する必要がある</li>
        </ul>
        <p>それぞれに対応したアイテムでクリックする必要があり、間違えるとペナルティが発生します。</p>

        <h2>特徴的な要素</h2>
        <p>
          このゲームの特徴は逆転要素にジャンケンイベントを用意していることです。ゲーム中にランダムで発生し、勝敗を大きく左右します。
        </p>

        <h2>技術的な実装</h2>
        <p>Javaを使用して開発しました。オブジェクトの落下システム、当たり判定、スコア計算などを実装しました。</p>

        <h2>開発で苦労した点</h2>
        <p>2人同時プレイの実装や、リアルタイムでの当たり判定の処理に苦労しました。</p>

        <h2>学んだこと</h2>
        <p>ゲーム開発を通じて、リアルタイム処理やユーザーインターフェースの重要性を学びました。</p>

        <h2>今後の改善点</h2>
        <p>より多様なオブジェクトの追加や、難易度調整機能の実装を検討しています。</p>
      </div>
    ),
  },

  "digital-signage-contest": {
    id: "digital-signage-contest",
    title: "和歌山大学学生挑戦コンテスト優秀賞獲得記録",
    excerpt: "デジタルサイネージ導入提案で優秀賞を受賞した経験について詳しく解説します。",
    date: "2024年12月15日",
    readTime: "7分",
    tags: ["デジタルサイネージ", "企画提案", "大学", "コンテスト"],
    thumbnail: "/digital.png",
    category: "受賞",
    author: "山野 夏",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>コンテスト概要</h2>
        <p>
          和歌山大学学生挑戦コンテストは、学生の革新的なアイデアと実現可能性を評価するコンテストです。2024年12月に開催されました。
        </p>

        <h2>提案内容</h2>
        <p>
          学内メールの問題と学内掲示板が活用されていない問題の両方を改善するため、大学内の情報発信を効率化するデジタルサイネージシステムの導入を提案しました。
        </p>

        <h2>課題の発見</h2>
        <p>学内での情報伝達において以下の問題を発見しました：</p>
        <ul>
          <li>学内メールが読まれない</li>
          <li>掲示板の情報が古い</li>
          <li>重要な情報が埋もれてしまう</li>
        </ul>

        <h2>解決策の提案</h2>
        <p>デジタルサイネージを学内の主要な場所に設置し、リアルタイムで情報を更新できるシステムを提案しました。</p>

        <h2>システムの特徴</h2>
        <p>提案したシステムの主な特徴は以下の通りです：</p>
        <ol>
          <li>リアルタイム情報更新</li>
          <li>視覚的に分かりやすい表示</li>
          <li>緊急時の迅速な情報伝達</li>
          <li>学生の関心を引く動的なコンテンツ</li>
        </ol>

        <h2>実現可能性の検討</h2>
        <p>技術的な実現可能性、コスト面、運用面から詳細な検討を行いました。</p>

        <h2>評価されたポイント</h2>
        <p>
          実現可能性と革新性が評価され、優秀賞を受賞することができました。特に学生目線での課題発見と具体的な解決策が評価されました。
        </p>

        <h2>今後の展望</h2>
        <p>この提案を実際に大学に導入してもらえるよう、さらなる詳細設計と実証実験を検討しています。</p>

        <h2>学んだこと</h2>
        <p>課題発見から解決策の提案まで、一連のプロセスを通じて企画力と提案力を身につけることができました。</p>
      </div>
    ),
  },
}

// 記事データを配列として取得する関数
export function getAllArticles(): ArticleData[] {
  return Object.values(articlesData).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 特定の記事を取得する関数
export function getArticleById(id: string): ArticleData | null {
  return articlesData[id] || null
}

// 記事IDの一覧を取得する関数
export function getAllArticleIds(): string[] {
  return Object.keys(articlesData)
}
