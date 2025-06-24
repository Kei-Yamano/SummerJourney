import { BookOpen, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllArticles } from "@/lib/articles"

export default function Article() {
  // 記事データを自動取得
  const articles = getAllArticles()

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Articles</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          プロダクト開発や研究について詳しく解説した記事をご覧いただけます。
        </p>
      </div>

      {articles.length === 0 ? (
        /* No Articles Message */
        <div className="text-center py-16">
          <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-700 mb-4">申し訳ありません。記事が投稿されていません。</h2>
          <p className="text-slate-500 max-w-lg mx-auto">現在、記事を準備中です。もうしばらくお待ちください。</p>
        </div>
      ) : (
        /* All Articles List */
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">記事一覧</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/pages/article/${article.id}`}>
                <article className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.thumbnail || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-slate-500 text-xs mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 flex-shrink-0">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>

                    <div className="flex flex-wrap gap-1 mt-auto">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
