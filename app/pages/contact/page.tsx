import { Mail, MapPin, Clock, Github, Twitter, Linkedin, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          お気軽にお問い合わせください。できる限り迅速にご返信いたします。
        </p>
      </div>

      {/* Contact Information - Expanded and Centered */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">メールアドレス</h3>
                <a
                  href="mailto:contact@natscape.dev"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 text-lg"
                >
                  s266318@wakayama-u.ac.jp
                </a>
              </div>
            </div>
            <p className="text-slate-600 ml-18 pl-1">ご連絡はこちらまで</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">レスポンス可能時間</h3>
                <p className="text-green-700 font-medium text-lg">通常24時間以内</p>
              </div>
            </div>
            <p className="text-slate-600 ml-18 pl-1">学生であるため、講義中を除き、24時間対応可能です。</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-7 w-7 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">所在地</h3>
                <p className="text-purple-700 font-medium text-lg">大阪府, 日本</p>
              </div>
            </div>
            <p className="text-slate-600 ml-18 pl-1">リモート対応可能</p>
          </div>

          {/* Social Links Card */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <ExternalLink className="h-6 w-6 text-amber-600" />
              ソーシャルメディア
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/Kei-Yamano"
                className="flex flex-col items-center gap-2 p-4 bg-white/70 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <Github className="h-8 w-8 text-slate-800" />
                <span className="text-slate-700 font-medium">GitHub</span>
              </a>
              {/*<a
                href="#"
                className="flex flex-col items-center gap-2 p-4 bg-white/70 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <Twitter className="h-8 w-8 text-blue-500" />
                <span className="text-slate-700 font-medium">Twitter</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center gap-2 p-4 bg-white/70 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <Linkedin className="h-8 w-8 text-blue-700" />
                <span className="text-slate-700 font-medium">LinkedIn</span>
              </a>*/}
            </div>
          </div>
        </div>
        
        {/* FAQ Section - Enhanced */}
        {/*<div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">よくある質問</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">プロジェクトの期間はどのくらいですか？</h4>
              <p className="text-slate-600">
                プロジェクトの規模により異なりますが、小規模なものは1-2週間、大規模なものは2-3ヶ月程度です。詳細はご相談に応じて柔軟に対応いたします。
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">リモートでの作業は可能ですか？</h4>
              <p className="text-slate-600">
                はい、リモートワークに対応しています。オンラインでのコミュニケーションツールを活用し、円滑なプロジェクト進行をサポートします。
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">技術スタックの相談は可能ですか？</h4>
              <p className="text-slate-600">
                もちろんです。プロジェクトの要件に最適な技術スタックをご提案いたします。最新技術のトレンドも考慮した上で、最適な選択をサポートします。
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">料金体系はどのようになっていますか？</h4>
              <p className="text-slate-600">
                プロジェクトの規模や複雑さによって異なります。初回のご相談時に詳細な要件をお伺いし、透明性のある見積もりをご提案いたします。
              </p>
            </div>
          </div>
        </div>*/}

        {/* Call to Action */}
        {/*<div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 p-10 rounded-2xl shadow-xl text-white">
          <h3 className="text-2xl font-bold mb-4">お気軽にご連絡ください</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            プロジェクトのアイデアや技術的な質問など、どんなことでもお気軽にご相談ください。
            あなたのビジョンを実現するお手伝いをいたします。
          </p>
          <a
            href="mailto:contact@natscape.dev"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium text-lg shadow-md"
          >
            <Mail className="h-5 w-5" />
            メールを送る
          </a>
        </div>*/}
      </div>
    </div>
  )
}
