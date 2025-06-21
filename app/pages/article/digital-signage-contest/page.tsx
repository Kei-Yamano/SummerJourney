import { Calendar, Clock, Tag, ArrowLeft, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DigitalSignageContestArticle() {
  const article = {
    title: "和歌山大学学生挑戦コンテスト優秀賞獲得記録",
    date: "2024年12月",
    readTime: "7分",
    tags: ["デジタルサイネージ", "企画提案", "大学", "コンテスト"],
    thumbnail: "/digital.png",
    category: "受賞",
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

            <h2>コンテスト概要</h2>
            <p>
              {/* ここにコンテスト概要について書いてください */}
              和歌山大学学生挑戦コンテストは、学生の革新的なアイデアと実現可能性を評価するコンテストです。2024年12月に開催されました。
            </p>

            <h2>提案内容</h2>
            <p>
              {/* ここに提案内容について書いてください */}
              学内メールの問題と学内掲示板が活用されていない問題の両方を改善するため、大学内の情報発信を効率化するデジタルサイネージシステムの導入を提案しました。
            </p>

            <h2>課題の発見</h2>
            <p>
              {/* ここに課題の発見について書いてください */}
              学内での情報伝達において以下の問題を発見しました：
            </p>
            <ul>
              <li>学内メールが読まれない</li>
              <li>掲示板の情報が古い</li>
              <li>重要な情報が埋もれてしまう</li>
            </ul>

            <h2>解決策の提案</h2>
            <p>
              {/* ここに解決策の提案について書いてください */}
              デジタルサイネージを学内の主要な場所に設置し、リアルタイムで情報を更新できるシステムを提案しました。
            </p>

            <h2>システムの特徴</h2>
            <p>
              {/* ここにシステムの特徴について書いてください */}
              提案したシステムの主な特徴は以下の通りです：
            </p>
            <ol>
              <li>リアルタイム情報更新</li>
              <li>視覚的に分かりやすい表示</li>
              <li>緊急時の迅速な情報伝達</li>
              <li>学生の関心を引く動的なコンテンツ</li>
            </ol>

            <h2>実現可能性の検討</h2>
            <p>
              {/* ここに実現可能性の検討について書いてください */}
              技術的な実現可能性、コスト面、運用面から詳細な検討を行いました。
            </p>

            <h2>評価されたポイント</h2>
            <p>
              {/* ここに評価されたポイントについて書いてください */}
              実現可能性と革新性が評価され、優秀賞を受賞することができました。特に学生目線での課題発見と具体的な解決策が評価されました。
            </p>

            <h2>今後の展望</h2>
            <p>
              {/* ここに今後の展望について書いてください */}
              この提案を実際に大学に導入してもらえるよう、さらなる詳細設計と実証実験を検討しています。
            </p>

            <h2>学んだこと</h2>
            <p>
              {/* ここに学んだことについて書いてください */}
              課題発見から解決策の提案まで、一連のプロセスを通じて企画力と提案力を身につけることができました。
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
