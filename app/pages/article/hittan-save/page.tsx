import { Calendar, Clock, Tag, ArrowLeft, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HittanSaveArticle() {
  const article = {
    title: "ヒッタンセーブ 開発記録",
    date: "2023年1月",
    readTime: "5分",
    tags: ["Java", "ゲーム開発", "2人対戦"],
    thumbnail: "/HitAndSave.png",
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

            <h2>ゲーム概要</h2>
            <p>
              {/* ここにゲーム概要について書いてください */}
              ヒッタンセーブは2人同時対戦の落ちもの×射的ゲームです。海を舞台に、溺れている人を救助し、ワニから守るアクションゲームです。
            </p>

            <h2>ゲームルール</h2>
            <p>
              {/* ここにゲームルールについて書いてください */}
              ゲームには2種類のオブジェクトが登場します：
            </p>
            <ul>
              <li>溺れている人：救助する必要がある</li>
              <li>ワニ：撃退する必要がある</li>
            </ul>
            <p>それぞれに対応したアイテムでクリックする必要があり、間違えるとペナルティが発生します。</p>

            <h2>特徴的な要素</h2>
            <p>
              {/* ここに特徴的な要素について書いてください */}
              このゲームの特徴は逆転要素にジャンケンイベントを用意していることです。ゲーム中にランダムで発生し、勝敗を大きく左右します。
            </p>

            <h2>技術的な実装</h2>
            <p>
              {/* ここに技術的な実装について書いてください */}
              Javaを使用して開発しました。オブジェクトの落下システム、当たり判定、スコア計算などを実装しました。
            </p>

            <h2>開発で苦労した点</h2>
            <p>
              {/* ここに開発で苦労した点について書いてください */}
              2人同時プレイの実装や、リアルタイムでの当たり判定の処理に苦労しました。
            </p>

            <h2>学んだこと</h2>
            <p>
              {/* ここに学んだことについて書いてください */}
              ゲーム開発を通じて、リアルタイム処理やユーザーインターフェースの重要性を学びました。
            </p>

            <h2>今後の改善点</h2>
            <p>
              {/* ここに今後の改善点について書いてください */}
              より多様なオブジェクトの追加や、難易度調整機能の実装を検討しています。
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
