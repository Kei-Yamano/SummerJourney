import { Calendar, Clock, Tag, ArrowLeft, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TeruteruArticle() {
  const article = {
    title: "てるてる～Tell Your Tale～ 開発記録",
    date: "2023年8月",
    readTime: "8分",
    tags: ["Unity", "C#", "ゲーム開発", "チーム開発"],
    thumbnail: "/teruteruHome.png",
    category: "プロダクト",
    author: "山野 夏",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Articles */}
      <div className="bg-white border-b">
        <div className="container px-4 py-4 md:px-6 max-w-4xl mx-auto">
          <Link
            href="/pages/article"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            記事一覧に戻る
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white">
        <div className="container px-4 py-12 md:px-6 md:py-16 max-w-4xl mx-auto">
          {/* Category and Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {article.author}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Thumbnail */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl mb-12">
            <Image
              src={article.thumbnail || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={500}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white">
        <div className="container px-4 py-12 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* 
              ここに記事の内容を書いてください。
              以下はサンプルの構成です。実際の内容に置き換えてください。
            */}

            <h2>プロジェクト概要</h2>
            <p>
              {/* ここにプロジェクトの概要を書いてください */}
              「てるてる～Tell Your
              Tale～」は、イラストから物語を考える創造力と表現する文章力を養う2人用対戦ゲームです。
            </p>

            <h2>ゲームの流れ</h2>
            <p>
              {/* ここにゲームの流れについて詳しく書いてください */}
              ゲームは以下の流れで進行します：
            </p>
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
              <p className="text-sm text-slate-600 mt-2 text-center">
                プレイヤーが4枚の画像を見て物語を作成している画面
              </p>
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
            <p>
              {/* ここに開発について詳しく書いてください */}
              このゲームはUnityとC#を使用して開発しました。私はフロントエンド部分を担当しました。
            </p>

            <h2>技術的な挑戦</h2>
            <p>
              {/* ここに技術的な挑戦について書いてください */}
              伝言による文章力と想像力を鍛えるという性質から、チームで通信は最優先事項に置くことを決めていました。そのため、フロントエンドでのアルゴリズムをホワイトボードに書きながら、バックエンドの実装状態に合わせて都度調整していく部分は難しくもあり、楽しい部分でもありました。
            </p>

            <h2>チーム開発での学び</h2>
            <p>
              {/* ここにチーム開発での学びについて書いてください */}
              チームで常に進捗を確認し合い、また意見をいつでも交わせられるよう同じ環境で開発している時間を長く取れたことはとても重要だったと感じています。
              当たり前のことでもありますが、バージョン管理をする際のコンフリクトを避ける大切さを経験する良い機会でもありました。
            </p>

            {/* 
              記事の内容はここまでです。
              上記のコメント部分に実際の内容を書き込んでください。
            */}
          </div>
        </div>
      </div>

      {/* Related Articles or Back to Top */}
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <Link
            href="/pages/article"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            他の記事を見る
          </Link>
        </div>
      </div>
    </div>
  )
}
