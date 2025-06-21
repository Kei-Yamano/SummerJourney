import { BookOpen, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Article() {
  // 記事データ - featuredプロパティを削除
  const articles = [
    {
      id: "teruteru-tell-your-tale",
      title: "てるてる～Tell Your Tale～ 開発記録",
      excerpt: "イラストから物語を考える創造力と表現する文章力を養う2人用対戦ゲームの開発について詳しく解説します。",
      date: "2023年8月15日",
      readTime: "8分",
      tags: ["Unity", "C#", "ゲーム開発", "チーム開発"],
      thumbnail: "/teruteruHome.png",
      category: "プロダクト",
    },
    {
      id: "text-communication-research",
      title: "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
      excerpt: "自己肯定感の低下問題に対して、テキスト対話上での褒め方支援に注目した研究について詳しく解説します。",
      date: "2024年12月1日",
      readTime: "12分",
      tags: ["Python", "機械学習", "研究", "自然言語処理"],
      thumbnail: "/digital.png",
      category: "研究",
    },
    {
      id: "pump-popup-memo-pad",
      title: "PUMP -PopUp Memo Pad- 開発記録",
      excerpt: "検索支援およびメモ機能を追加したChrome拡張機能の開発について詳しく解説します。",
      date: "2025年2月10日",
      readTime: "6分",
      tags: ["HTML", "CSS", "JavaScript", "Chrome拡張機能"],
      thumbnail: "/pump.png",
      category: "プロダクト",
    },
    {
      id: "hittan-save",
      title: "ヒッタンセーブ 開発記録",
      excerpt: "2人同時対戦の落ちもの×射的ゲームの開発について詳しく解説します。",
      date: "2023年7月20日",
      readTime: "5分",
      tags: ["Java", "ゲーム開発", "2人対戦"],
      thumbnail: "/HitAndSave.png",
      category: "プロダクト",
    },
    {
      id: "digital-signage-contest",
      title: "和歌山大学学生挑戦コンテスト優秀賞獲得記録",
      excerpt: "デジタルサイネージ導入提案で優秀賞を受賞した経験について詳しく解説します。",
      date: "2024年12月15日",
      readTime: "7分",
      tags: ["デジタルサイネージ", "企画提案", "大学", "コンテスト"],
      thumbnail: "/digital.png",
      category: "受賞",
    },
  ]

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
