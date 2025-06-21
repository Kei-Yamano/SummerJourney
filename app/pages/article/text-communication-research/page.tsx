import { Calendar, Clock, Tag, ArrowLeft, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TextCommunicationResearchArticle() {
  const article = {
    title: "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
    date: "2024年8月~",
    readTime: "12分",
    tags: ["Python", "機械学習", "研究", "自然言語処理"],
    thumbnail: "",
    category: "研究",
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

            <h2>研究背景</h2>
            <p>
              {/* ここに研究背景について書いてください */}
              現代社会において、自己肯定感の低下が深刻な問題となっています。この研究では、テキスト対話上での褒め方支援に注目しました。
            </p>

            <h2>研究目的</h2>
            <p>
              {/* ここに研究目的について書いてください */}
              テキストコミュニケーションにおける褒め方の上手さを推定するモデルを構築し、その推定精度を分析することを目的としています。
            </p>

            <h2>研究手法</h2>
            <p>
              {/* ここに研究手法について書いてください */}
              男女21組のペアにテキスト対話をしてもらい、そこから131の称賛データを収集し、
              Python3を使用して、ランダムフォレストによる機械学習モデルを構築しました。
            </p>

            <h2>実験結果</h2>
            <p>
              {/* ここに実験結果について書いてください */}
              対面での褒めを対象にした先行モデルには及ばない結果となりました。しかし、テキストコミュニケーションでは、対面での褒め以上に極性値による影響が大きいことが明らかになりました。
            </p>

            <h2>今後の課題</h2>
            <p>
              {/* ここに今後の課題について書いてください */}
              文脈を加味した推定ができていないため、修士では称賛前後の文章も踏まえた上で、LLMを用いた特徴量の抽出を予定しております。
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
