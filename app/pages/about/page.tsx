import {
  Code,
  Database,
  Palette,
  Users,
  Award,
  Heart,
  Trophy,
  MapPin,
  Calendar,
  User,
  Target,
  Lightbulb,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function About() {
  const profileInfo = {
    name: "山野 夏",
    birthDate: "2001年4月22日",
    birthPlace: "大阪府堺市",
    introduction:
      "コマンドを覚えることに情熱を持つエンジニア志望の大学生です。Next.jsやReactを使ったウェブアプリケーション開発に興味をもち、このポートフォリオサイトを通じて自分の経歴やスキル、制作物を紹介しています。自身の面白いを表現し続けるために、学び続けています。",
    profileImage: "/logo.png", // プロフィール画像をaddicon.pngに変更
  }

  const selfPR = {
    title: "自己PR",
    highlights: [
      {
        icon: <Target className="h-6 w-6 text-blue-600" />,
        title: "問題解決をする面白さ",
        description:
          "研究テーマ決めや後輩の研究相談、ビジネスコンテストへの参加経験などから、課題発見、またその解決手法の提案する面白さに気づき、今でも開発する際は常に課題発見と解決を意識しながら実施しています。",
      },
      {
        icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
        title: "継続的な学習意欲",
        description:
          "サッカーやギター、格闘ゲームが趣味であることにも繋がっていますが、どんな物事にも中途半端に終わることが嫌いで、コツを掴むまで続ける執念があります。",
      },
      {
        icon: <Zap className="h-6 w-6 text-purple-600" />,
        title: "チームのために助けを求める",
        description:
          "学生団体での活動を通して、チームリーダーとして外に働きかけ、助けを求める大切さに気づきました。",
      },
    ],
    strengths: [
      "格闘ゲームで培った集中力と戦略的思考",
      "新しい技術への適応力と学習速度",
      "チームワークを重視したコミュニケーション能力",
      "ユーザー体験を重視した開発姿勢",
    ],
  }

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python"],
    },
    {
      category: "Tools",
      items: ["JupyterNotebook", "Git", "VScode", "Vercel"],
    },
    {
      category: "Design",
      items: ["Figma"],
    },
  ]

  const experience = [
    {
      period: "2025/4 - 現在",
      title: "和歌山大学大学院 システム工学研究科 コミュニケーション科学クラスタ",
      company: "修士課程",
      description: "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
    },
    {
      period: "2021/4 - 2025/3",
      title: "和歌山大学 システム工学部 社会情報学メジャー 感性情報デザイン研究室",
      company: "学士課程",
      description: "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
    },
    {
      period: "2017/4 - 2020/3",
      title: "清風南海高等学校",
      company: "高等学校",
      description: "まだ情報系に進むかすら決めていなかった時期です。",
    },
  ]

  const awards = [
    {
      title: "ハッカソン最優秀賞",
      project: "Chrome拡張機能「PUMP」",
      description:
        "検索支援とメモ機能を追加したChrome拡張機能を開発。直感的なUIと実用的な機能が特に学生同士からの共感がとても評価され、参加チーム中で最優秀賞を受賞。",
      date: "2025年2月",
      icon: "🏆",
      color: "from-yellow-100 to-orange-100",
      borderColor: "border-yellow-300",
    },
    {
      title: "和歌山大学学生挑戦コンテスト優秀賞",
      project: "デジタルサイネージ導入提案",
      description:
        "学内メールの問題と学内掲示板が活用されていない問題の両方を改善するため、大学内の情報発信を効率化するデジタルサイネージシステムの導入を提案。実現可能性と革新性が評価され、優秀賞を受賞。",
      date: "2024年12月",
      icon: "🌟",
      color: "from-blue-100 to-purple-100",
      borderColor: "border-blue-300",
    },
  ]

  const organizations = [
    {
      name: "学生団体 add。",
      role: "企画担当",
      description:
        "学生の挑戦を支援する団体として、イベント企画や運営を担当。新しいアイデアを形にする場を提供し、学生同士のネットワーク構築に貢献。",
      image: "/add-logo.png", // 学生団体add。のロゴを更新
      website: "#",
      activities: ["イベント企画・運営", "学生支援プログラム"],
    },
  ]

  const hobbies = [
    {
      name: "格闘ゲーム",
      description: "正確なコマンド入力に必要な地道さと試合に勝つための戦略的思考が刺さった。主にストリートファイターシリーズをプレイ。",
      icon: "🥊",
      color: "from-red-100 to-orange-100",
    },
    {
      name: "漫画",
      description: "ジャンルにこだわらず、なぜこの世界観なのか、このキャラクターの行動や成長から作者は何を書きたかったのか、を読むことが大好き。",
      icon: "📚",
      color: "from-blue-100 to-cyan-100",
    },
    {
      name: "サッカー観戦",
      description: "中学でプレイヤーは引退したのですが、チームが試合に勝つためのつぶれる動きやハイライトに映らない部分からも戦術や選手の意図を観察し、チームで勝つことの難しさと面白さを見るのが大好き。",
      icon: "⚽",
      color: "from-green-100 to-emerald-100",
    },
    {
      name: "カラオケ",
      description: "音楽を通じてストレス発散し、表現力を向上させる。友人との交流の場としても活用。",
      icon: "🎤",
      color: "from-purple-100 to-pink-100",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Me</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
      </div>

      {/* Profile Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src={profileInfo.profileImage || "/placeholder.svg?height=200&width=200"}
                  alt={profileInfo.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{profileInfo.name}</h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-700">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>生年月日: {profileInfo.birthDate}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>出身: {profileInfo.birthPlace}</span>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-blue-100">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-3">
                  <User className="h-5 w-5 text-blue-600" />
                  自己紹介
                </h3>
                <p className="text-slate-700 leading-relaxed">{profileInfo.introduction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self PR Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Target className="h-8 w-8 text-green-600" />
          {selfPR.title}
        </h2>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {selfPR.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                {highlight.icon}
                <h3 className="text-lg font-bold text-slate-800">{highlight.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">私の強み</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {selfPR.strengths.map((strength, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/70 p-4 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Award className="h-8 w-8 text-blue-600" />
          学歴
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-500 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-slate-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards - moved after Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-600" />
          受賞実績
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${award.color} p-8 rounded-2xl border-2 ${award.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{award.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{award.title}</h3>
                    <span className="text-sm font-medium text-slate-600 bg-white/50 px-3 py-1 rounded-full">
                      {award.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">{award.project}</h4>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Code className="h-8 w-8 text-green-600" />
          技術スキル
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                {skillGroup.category === "Frontend" && <Palette className="h-5 w-5 text-pink-500" />}
                {skillGroup.category === "Backend" && <Database className="h-5 w-5 text-blue-500" />}
                {skillGroup.category === "Tools" && <Code className="h-5 w-5 text-green-500" />}
                {skillGroup.category === "Design" && <Palette className="h-5 w-5 text-purple-500" />}
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Heart className="h-8 w-8 text-red-500" />
          趣味・興味
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${hobby.color} p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{hobby.icon}</span>
                <h3 className="text-xl font-bold text-slate-800">{hobby.name}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">{hobby.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Organizations */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Users className="h-8 w-8 text-purple-600" />
          所属団体・活動
        </h2>
        <div className="grid gap-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Organization Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center overflow-hidden border-2 border-blue-200">
                    <Image
                      src={org.image || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Organization Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{org.name}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {org.role}
                      </span>
                    </div>
                    <a
                      href={org.website}
                      className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                    >
                      詳細を見る
                    </a>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-4">{org.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">主な活動</h4>
                    <div className="flex flex-wrap gap-2">
                      {org.activities.map((activity, activityIndex) => (
                        <span
                          key={activityIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
