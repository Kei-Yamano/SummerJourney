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
      <div className="max-w-none text-slate-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">プロジェクト概要</h2>
        <p className="my-5 leading-7">
          「てるてる～Tell Your Tale～」は、イラストから物語を考える創造力と表現する文章力を養う2人用対戦ゲームです。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">ゲームの流れ</h2>
        <p className="my-5 leading-7">ゲームは以下の流れで進行します：</p>
        <ol className="list-decimal list-inside my-5 space-y-2 pl-4">
          <li className="leading-7">4枚の画像から物語を創造</li>
          <li className="leading-7">相手の物語を読み、元の4枚の画像を推測</li>
          <li className="leading-7">その一致率で競いあう</li>
        </ol>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">ゲーム画面</h2>

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 leading-tight">物語作成画面</h3>
        <div className="my-8">
          <Image
            src="/teruteruPlay.png"
            alt="てるてる物語作成画面"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center italic">
            プレイヤーが4枚の画像を見て物語を作成している画面
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 leading-tight">画像推測画面</h3>
        <div className="my-8">
          <Image
            src="/teruteruRead.png"
            alt="てるてる画像推測画面"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center italic">
            相手の物語から元の4枚の画像を推測している画面
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">開発について</h2>
        <p className="my-5 leading-7">
          このゲームはUnityとC#を使用して開発しました。私はフロントエンド部分を担当しました。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">技術的な挑戦</h2>
        <p className="my-5 leading-7">
          伝言による文章力と想像力を鍛えるという性質から、チームで通信は最優先事項に置くことを決めていました。そのため、フロントエンドでのアルゴリズムをホワイトボードに書きながら、バックエンドの実装状態に合わせて都度調整していく部分は難しくもあり、楽しい部分でもありました。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">チーム開発での学び</h2>
        <p className="my-5 leading-7">
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
      <div className="max-w-none text-slate-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">研究背景</h2>
        <p className="my-5 leading-7">
          現代社会において、自己肯定感の低下が深刻な問題となっています。この研究では、テキスト対話上での褒め方支援に注目しました。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">研究目的</h2>
        <p className="my-5 leading-7">
          テキストコミュニケーションにおける褒め方の上手さを推定するモデルを構築し、その推定精度を分析することを目的としています。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">研究手法</h2>
        <p className="my-5 leading-7">
          男女21組のペアにテキスト対話をしてもらい、そこから131の称賛データを収集し、
          Python3を使用して、ランダムフォレストによる機械学習モデルを構築しました。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">実験結果</h2>
        <p className="my-5 leading-7">
          対面での褒めを対象にした先行モデルには及ばない結果となりました。しかし、テキストコミュニケーションでは、対面での褒め以上に極性値による影響が大きいことが明らかになりました。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">今後の課題</h2>
        <p className="my-5 leading-7">
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
    thumbnail: "/pump.png", // プロダクトページと同じ画像を使用
    category: "プロダクト",
    author: "山野 夏",
    content: (
      <div className="max-w-none text-slate-700 leading-relaxed">
        {/* ここから記事の内容を書いてください */}
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">プロジェクト概要</h2>
        <p className="my-5 leading-7">
          卒業研究などで，特定のキーワードで複数の文献を検索することが多いと思います．
          そして後日同じキーワードで検索した際，どの文献が読み直したいものだったか，タイトルだけでは判別しにくいということが発生しがちでした．
          この課題感を解決するため，検索タイトルに読み直す必要があるものには緑のライン，必要がないものには赤色のラインを表示し，マウスカーソルをタイトルに重ねると過去自分が残したメモがポップアップするという拡張機能をチームで開発しました．
          また，その文献が必要であるか，やポップアップするメモを記入するためのウィンドウは，開いているwebページ上でショートカットキーを入力することで表示されるよう開発しました．
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">担当</h2>
        <p className="my-5 leading-7">
          常にチーム内で互いに助け合いながらではありましたが，私は主に，メモを入力するウィンドウに必要な機能全般とUIを担当していました．
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">主な機能</h2>
        <p className="my-5 leading-7">{/* ここに主な機能の説明を書いてください */}</p>
        <ol className="list-decimal list-inside my-5 space-y-2 pl-4">
          <li className="leading-7">
            alt + mキーを押すことで，開いているwebページに対して，メモと必要不要かどうか残すことが可能なウィンドウの表示
          </li>
          <li className="leading-7">
            メモを残したwebページを振り返ることができるサイドメニュー
          </li>
          <li className="leading-7">
            検索すると，検索タイトルに必要なページには緑の下線が，不要なページには赤の下線が表示，また検索タイトルにマウスカーソルを合わせることで，メモが表示
          </li>
        </ol>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">実際の使用画面</h2>

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 leading-tight">メモ入力画面</h3>
        <div className="my-8">
          <Image
            src="/pumpInput.png"
            alt="PUMP メモ入力画面"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center italic">
            表示されているウィンドウにメモを入力することができます．また自分にとって必要であるかどうかをボタンで残しておくことができます．
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 leading-tight">検索結果画面</h3>
        <div className="my-8">
          <Image
            src="/pumpSearch.png"
            alt="PUMP 検索結果画面"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center italic">
            必要であるボタンを押したwebページには緑の下線が，不要なものには赤の下線が表示されています．また検索タイトルにマウスカーソルを合わせることで，入力したメモが表示されます．
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">開発で工夫した点</h2>
        <p className="my-5 leading-7">
          自分たちがターゲット層だったこともあり，常にユーザ視点で必要な要素は何かを意識しながら，機能の決定をしていきました．また，チーム4人で開発進捗を定期的に共有し，コンフリクトといった問題が起こらないよう進めました．
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">ハッカソンでの成果</h2>
        <p className="my-5 leading-7">
          サポーターズさんが主催の技育CAMPの一環であるハッカソンvol23にて，同期4人で参加し，検索支援およびメモ機能を追加したgoogleの拡張機能『PopUp Memo Pad』を発表し，最優秀賞をいただきました．
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">今後の展望</h2>
        <p className="my-5 leading-7">
          キャッシュの問題を解決した後に，公開できるよう進めています．
        </p>
        {/* ここまで記事の内容 */}
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
      <div className="max-w-none text-slate-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">ゲーム概要</h2>
        <p className="my-5 leading-7">
          ヒッタンセーブは2人同時対戦の落ちもの×射的ゲームです。海を舞台に、溺れている人を救助し、ワニから守るアクションゲームです。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">ゲームルール</h2>
        <p className="my-5 leading-7">ゲームには2種類のオブジェクトが登場します：</p>
        <ul className="list-disc list-inside my-5 space-y-2 pl-4">
          <li className="leading-7">溺れている人：救助する必要がある</li>
          <li className="leading-7">ワニ：撃退する必要がある</li>
        </ul>
        <p className="my-5 leading-7">
          それぞれに対応したアイテムでクリックする必要があり、間違えるとペナルティが発生します。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">特徴的な要素</h2>
        <p className="my-5 leading-7">
          このゲームの特徴は逆転要素にジャンケンイベントを用意していることです。ゲーム中にランダムで発生し、勝敗を大きく左右します。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">技術的な実装</h2>
        <p className="my-5 leading-7">
          Javaを使用して開発しました。オブジェクトの落下システム、当たり判定、スコア計算などを実装しました。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">開発で苦労した点</h2>
        <p className="my-5 leading-7">2人同時プレイの実装や、リアルタイムでの当たり判定の処理に苦労しました。</p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">学んだこと</h2>
        <p className="my-5 leading-7">
          ゲーム開発を通じて、リアルタイム処理やユーザーインターフェースの重要性を学びました。
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">今後の改善点</h2>
        <p className="my-5 leading-7">より多様なオブジェクトの追加や、難易度調整機能の実装を検討しています。</p>
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
    thumbnail: "/digital.png", // プロダクトページと同じ画像を使用
    category: "受賞",
    author: "山野 夏",
    content: (
      <div className="max-w-none text-slate-700 leading-relaxed">
        {/* ここから記事の内容を書いてください */}
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">コンテスト概要</h2>
        <p className="my-5 leading-7">審査員に学長や企業が参加している，和歌山大学をより良くするためのアイデアコンテスト</p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">提案内容</h2>
        <p className="my-5 leading-7">
          デジタルサイネージによる学内広報のDX化
        </p>

        <div className="my-8">
          <Image
            src="/affect.png"
            alt="大学が抱えている問題の現状"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center italic">
            私たちのチームでは，学生にとってメールの件名が見づらいこと，および全学生を対象とした必須メールの回答率が50％未満であることから，学内の情報伝達を効率化する必要があると考えました．さらに，学内掲示板の活用不足にも着目し、デジタルサイネージを用いた学内広報のDX化を提案しました。
          </p>
        </div>

        <div className="my-8">
          <Image
            src="/set.png"
            alt="デジタルサイネージの設置位置候補"
            width={800}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-slate-600 mt-2 text-center italic">
            {/* ここに設置位置図の説明を書いてください */}
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">システムの特徴</h2>
        <p className="my-5 leading-7">{/* ここにシステムの特徴の説明を書いてください */}</p>
        <ol className="list-decimal list-inside my-5 space-y-2 pl-4">
          <li className="leading-7">{/* 特徴1を書いてください */}</li>
          <li className="leading-7">{/* 特徴2を書いてください */}</li>
          <li className="leading-7">{/* 特徴3を書いてください */}</li>
          <li className="leading-7">{/* 特徴4を書いてください */}</li>
        </ol>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">実現可能性の検討</h2>
        <p className="my-5 leading-7">{/* ここに実現可能性の検討内容を書いてください */}</p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">評価されたポイント</h2>
        <p className="my-5 leading-7">{/* ここに評価されたポイントを書いてください */}</p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">今後の展望</h2>
        <p className="my-5 leading-7">{/* ここに今後の展望を書いてください */}</p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight">学んだこと</h2>
        <p className="my-5 leading-7">{/* ここに学んだことを書いてください */}</p>
        {/* ここまで記事の内容 */}
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
