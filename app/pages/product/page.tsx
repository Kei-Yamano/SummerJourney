import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Product() {
  const projects = [
    {
      id: 1,
      title: "てるてる～Tell Your Tale～",
      description:
        "イラストから物語を考える創造力と表現する文章力を養う2人用対戦ゲーム①4枚の画像から物語を創造②相手の物語を読み、元の4枚の画像を推測③その一致率で競いあう【開発担当】:フロントエンド",
      image: "/teruteruHome.png",
      technologies: ["unity", "C#"],
      liveUrl: "#",
      githubUrl: "#",
      articleUrl: "/pages/article/teruteru-tell-your-tale",
      date: "2023年7月-8月",
    },
    {
      id: 2,
      title: "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
      description:
        "自己肯定感の低下問題に対して，テキスト対話上での褒め方支援に注目した研究褒め方の上手さを推定するモデルを構築し，その推定精度を分析【結果】対面での褒めを対象にした先行モデルには及ばず。",
      image: "/digital.png",
      technologies: ["Python3"],
      liveUrl: "#",
      githubUrl: "#",
      articleUrl: "/pages/article/text-communication-research",
      date: "2024年8月-2025年2月",
    },
    {
      id: 3,
      title: "PUMP -PopUp Memo Pad-",
      description:
        "検索支援およびメモ機能を追加したgoogleの拡張機能①検索したページにメモと必要かどうかを残す②次回検索以降, タイトルを見るだけで必要かわかる③タイトルにカーソルを添えるとメモ内容が表示 主な担当:メモ入力ウィンドウに関するアルゴリズムとUI",
      image: "/pump.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      articleUrl: "/pages/article/pump-popup-memo-pad",
      date: "2025年2月",
    },
    {
      id: 4,
      title: "ヒッタンセーブ",
      description:
        "2人同時対戦の落ちもの×射的ゲーム, ワニと溺れている人の2種類のオブジェクト, それぞれに対応したアイテムでクリックする必要あり, また逆転要素にジャンケンイベントを用意",
      image: "/HitAndSave.png",
      technologies: ["Java"],
      liveUrl: "#",
      githubUrl: "#",
      articleUrl: "/pages/article/hittan-save",
      date: "2023年7月",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          これまでに開発した制作物・研究成果を紹介します。
        </p>
      </div>

      {/* All Projects */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">プロジェクト一覧</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={project.articleUrl}>
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 flex-shrink-0">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
