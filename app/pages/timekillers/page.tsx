"use client"

import { useState } from "react"
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, RefreshCw, Coffee } from "lucide-react"

export default function TimeKillers() {
  const [diceValue, setDiceValue] = useState(1)
  const [isRolling, setIsRolling] = useState(false)
  const [joke, setJoke] = useState("ボタンを押してジョークを見よう！")

  const jokes = [
    "なぜプログラマーは暗闇を恐れないのか？バグがあるからです！",
    "HTMLとCSSが喧嘩しました。JavaScriptが仲裁に入りました。",
    "404エラー：ジョークが見つかりません。",
    "プログラマーの好きな飲み物は？Java！",
    "なぜコンピューターは風邪をひかないのか？Windowsがあるからです！",
  ]

  const rollDice = () => {
    setIsRolling(true)
    setTimeout(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1)
      setIsRolling(false)
    }, 1000)
  }

  const getRandomJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    setJoke(randomJoke)
  }

  const DiceIcon = () => {
    const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
    const Icon = diceIcons[diceValue - 1]
    return <Icon className={`h-16 w-16 ${isRolling ? "animate-spin" : ""}`} />
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Coffee className="h-12 w-12 text-yellow-600 animate-bounce" />
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Time Killers ⏰</h1>
        <p className="text-lg text-slate-600 mb-12">ちょっとした時間つぶしに最適な楽しいコンテンツです！</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dice Game */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">🎲 サイコロゲーム</h2>
            <div className="flex justify-center mb-6">
              <div className="text-blue-600">
                <DiceIcon />
              </div>
            </div>
            <button
              onClick={rollDice}
              disabled={isRolling}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 flex items-center gap-2 mx-auto"
            >
              <RefreshCw className={`h-4 w-4 ${isRolling ? "animate-spin" : ""}`} />
              {isRolling ? "ローリング中..." : "サイコロを振る"}
            </button>
            <p className="mt-4 text-slate-600">出た目: {diceValue}</p>
          </div>

          {/* Joke Generator */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">😄 プログラマージョーク</h2>
            <div className="bg-slate-50 p-4 rounded-lg mb-6 min-h-[100px] flex items-center justify-center">
              <p className="text-slate-700 text-center">{joke}</p>
            </div>
            <button
              onClick={getRandomJoke}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 mx-auto block"
            >
              新しいジョーク
            </button>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🌟 豆知識</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold mb-2">🐙 タコの心臓</p>
              <p>タコには3つの心臓があります！</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold mb-2">🍯 ハチミツ</p>
              <p>ハチミツは腐りません。3000年前のものでも食べられます！</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold mb-2">🦒 キリンの舌</p>
              <p>キリンの舌は約50cm！紫外線から守るため黒っぽい色です。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
