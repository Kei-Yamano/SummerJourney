import { Calendar, Clock, Tag, ArrowLeft, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PumpArticle() {
  const article = {
    title: "PUMP -PopUp Memo Pad- 開発記録",
    date: "2025年2月",
    readTime: "6分",
    tags: ["HTML", "CSS", "JavaScript", "Chrome拡張機能"],
    thumbnail: "/pump.png",
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
              PUMPは検索支援およびメモ機能を追加したGoogle
              Chrome拡張機能です。検索効率の向上と情報管理の最適化を目指して開発しました。
            </p>

            <h2>開発背景</h2>
            <p>
              {/* ここに開発背景について書いてください */}
              インターネット検索において、同じページを何度も訪問してしまう問題や、重要な情報を見つけても後で見つけられない問題を解決したいと考えました。
            </p>

            <h2>主な機能</h2>
            <p>
              {/* ここに主な機能について書いてください */}
              PUMPには以下の主要機能があります：
            </p>
            <ol>
              <li>検索したページにメモと必要性の評価を残す機能</li>
              <li>次回検索以降、タイトルを見るだけで必要性が分かる表示機能</li>
              <li>タイトルにカーソルを添えるとメモ内容が表示される機能</li>
            </ol>

            <h2>技術的な実装</h2>
            <p>
              {/* ここに技術的な実装について書いてください */}
              HTML、CSS、JavaScriptを使用してChrome拡張機能として実装しました。特にメモ入力ウィンドウに関するアルゴリズムとUIの設計を担当しました。
            </p>

            <h2>開発で工夫した点</h2>
            <p>
              {/* ここに開発で工夫した点について書いてください */}
              ユーザビリティを重視し、直感的に操作できるインターフェースの設計に力を入れました。
            </p>

            <h2>ハッカソンでの成果</h2>
            <p>
              {/* ここにハッカソンでの成果について書いてください */}
              2025年2月のハッカソンで最優秀賞を受賞しました。実用的な機能と直感的なUIが評価されました。
            </p>

            <h2>今後の展望</h2>
            <p>
              {/* ここに今後の展望について書いてください */}
              より多くのブラウザに対応し、機能の拡張を検討しています。
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
