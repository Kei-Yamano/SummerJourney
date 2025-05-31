"use client"

import { useState } from "react"
import { Calculator, Palette, Hash, Copy, Check } from "lucide-react"

export default function Tools() {
  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(12)
  const [color, setColor] = useState("#3B82F6")
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let result = ""
    for (let i = 0; i < passwordLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  const rgb = hexToRgb(color)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Fun Tools 🛠️</h1>
          <p className="text-lg text-slate-600">日常で使える便利で楽しいツール集です！</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Password Generator */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Hash className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-800">パスワード生成器</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  パスワードの長さ: {passwordLength}
                </label>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <button
                onClick={generatePassword}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                パスワードを生成
              </button>

              {password && (
                <div className="relative">
                  <div className="bg-slate-50 p-4 rounded-lg border font-mono text-sm break-all">{password}</div>
                  <button
                    onClick={() => copyToClipboard(password)}
                    className="absolute top-2 right-2 p-2 text-slate-500 hover:text-slate-700 transition-colors duration-300"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Color Picker */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-800">カラーピッカー</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">色を選択</label>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-12 rounded-lg border border-slate-300 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium">HEX:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{color}</span>
                    <button
                      onClick={() => copyToClipboard(color)}
                      className="p-1 text-slate-500 hover:text-slate-700 transition-colors duration-300"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {rgb && (
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">RGB:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}</span>
                      <button
                        onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
                        className="p-1 text-slate-500 hover:text-slate-700 transition-colors duration-300"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full h-20 rounded-lg border border-slate-300" style={{ backgroundColor: color }}></div>
            </div>
          </div>
        </div>

        {/* Text Tools */}
        <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">📝 テキストツール</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">文字数カウンター</h3>
              <p className="text-sm text-slate-600">テキストの文字数を数えます</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">大文字・小文字変換</h3>
              <p className="text-sm text-slate-600">テキストの大文字小文字を変換</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">URLエンコーダー</h3>
              <p className="text-sm text-slate-600">URLを安全な形式にエンコード</p>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">🚧 これらのツールは開発中です！</p>
        </div>
      </div>
    </div>
  )
}
