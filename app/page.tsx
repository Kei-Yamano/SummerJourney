"use client"

import { useState, useEffect } from "react"
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import RippleEffect from "./components/ripple-effect"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 画像の切り替え順序: 1枚目→2枚目→3枚目→1枚目（ループ）
  const heroImages = [
    {
      src: "/background1.jpg",
      alt: "Outdoor relaxation area with friends enjoying evening",
    },
    {
      src: "/background2.jpg",
      alt: "Friends having fun at an outdoor gathering",
    },
    {
      src: "/background3.jpg",
      alt: "Evening gathering with friends at outdoor space",
    },
  ]

  // 固定のキャッチコピー
  const title = "面白いことを探したい。"
  const subtitle = "自分事として捉えられ、共感できることを大切にしながら。"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000) // 4秒ごとに切り替え

    return () => clearInterval(interval)
  }, [heroImages.length])

  const currentImage = heroImages[currentImageIndex]

  return (
    <div className="relative w-full">
      {/* Hero Image Section with Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 drop-shadow-md leading-relaxed">{subtitle}</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <RippleEffect
          rippleColor="rgba(255, 255, 255, 0.3)"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce cursor-pointer p-2">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </RippleEffect>

        {/* Image Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Switch to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full transition-all duration-75 ease-linear"
            style={{
              width: `${((Date.now() % 4000) / 4000) * 100}%`,
              animation: "progress 4s linear infinite",
            }}
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="min-h-screen flex items-center justify-center py-16 md:py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          {/* Floating background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-4 h-4 bg-gray-200 rounded-full opacity-30 transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x * 0.02 + "px",
                top: mousePosition.y * 0.02 + "px",
              }}
            ></div>
            <div
              className="absolute w-2 h-2 bg-gray-300 rounded-full opacity-40 transition-all duration-700 ease-out"
              style={{
                left: mousePosition.x * 0.05 + 100 + "px",
                top: mousePosition.y * 0.03 + 50 + "px",
              }}
            ></div>
          </div>

          <div className="text-center space-y-6 md:space-y-8 relative z-10 max-w-4xl mx-auto">
            <RippleEffect rippleColor="rgba(169, 169, 169, 0.4)" intensity="light" className="flex justify-center mb-6">
              <div className="cursor-pointer p-2">
                <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-gray-500 animate-spin" />
              </div>
            </RippleEffect>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 relative leading-tight">
              ようこそ Summer Journey へ
              <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 text-xl md:text-2xl animate-bounce">
                ✨
              </span>
            </h2>

            <div className="space-y-4 md:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                山野 夏です。格ゲーマです。
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                コマンドを覚えることに情熱を持つエンジニア志望の大学生です。
                Next.jsやReactを使ったウェブアプリケーション開発を始めてみようかと思いかけています。
                このポートフォリオサイトでは、私の経歴やスキル、制作物などを紹介しようと思っています。
                お気軽にご連絡ください！
              </p>
            </div>

            {/* 「制作物を見る」ボタンのスタイルを「私について詳しく」ボタンと同じにする */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-12 md:mt-16">
              <RippleEffect rippleColor="rgba(71, 85, 105, 0.3)" intensity="medium">
                <a
                  href="/pages/about"
                  className="group px-6 md:px-8 py-3 md:py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
                >
                  私について詳しく
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </RippleEffect>
              <RippleEffect rippleColor="rgba(59, 130, 246, 0.3)" intensity="medium">
                <a
                  href="/pages/product"
                  className="group px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
                >
                  制作物を見る
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </RippleEffect>
            </div>
          </div>
        </div>
      </section>

      {/* Career Vision Section */}
      <section className="bg-gradient-to-r from-slate-50 to-gray-100 py-16 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">キャリアビジョン</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <RippleEffect rippleColor="rgba(59, 130, 246, 0.3)" intensity="light">
              <div className="space-y-4 text-center cursor-pointer p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">革新的な技術</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  最新技術を活用し、常に進化し続けるソリューションを提供
                </p>
              </div>
            </RippleEffect>
            <RippleEffect rippleColor="rgba(168, 85, 247, 0.3)" intensity="light">
              <div className="space-y-4 text-center cursor-pointer p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">デザイン思考</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ユーザー中心のデザインで、直感的で美しいインターフェースを創造
                </p>
              </div>
            </RippleEffect>
            <RippleEffect rippleColor="rgba(34, 197, 94, 0.3)" intensity="light">
              <div className="space-y-4 text-center cursor-pointer p-4 rounded-xl hover:bg-white/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">持続的成長</h4>
                <p className="text-slate-600 text-sm leading-relaxed">継続的な学習と改善により、長期的な価値を創出</p>
              </div>
            </RippleEffect>
          </div>
        </div>
      </section>

      {/* Fun easter egg */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:px-6 text-center">
        <p className="text-sm text-slate-400 mb-2">🎯 何か楽しいことを探していますか？</p>
        <div className="flex justify-center gap-4">
          <RippleEffect rippleColor="rgba(59, 130, 246, 0.3)" intensity="light">
            <a
              href="/pages/timekillers"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300 hover:underline px-2 py-1"
            >
              時間つぶし
            </a>
          </RippleEffect>
          <span className="text-slate-300">|</span>
          <RippleEffect rippleColor="rgba(75, 85, 99, 0.3)" intensity="light">
            <a
              href="/pages/tools"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300 hover:underline px-2 py-1"
            >
              便利ツール
            </a>
          </RippleEffect>
        </div>
      </section>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
