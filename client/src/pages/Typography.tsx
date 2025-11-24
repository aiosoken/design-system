import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@lib/components/card";

export default function Typography() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">タイポグラフィ</h1>
        <p className="text-lg text-muted-foreground">
          読みやすさと先進性を両立させ、幅広いデバイスで一貫した体験を提供します。
        </p>
      </div>

      {/* Font Families */}
      <Card>
        <CardHeader>
          <CardTitle>フォントファミリー</CardTitle>
          <CardDescription>
            Google Fontsで提供される高品質なフォントを使用しています。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">日本語フォント: Noto Sans JP</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">モダンで読みやすく、様々なウェイトが利用可能です。</p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
                  Light (300): AIO総研は、AIで経営を最適化する先進的総合研究所です。
                </p>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}>
                  Regular (400): AIO総研は、AIで経営を最適化する先進的総合研究所です。
                </p>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>
                  Medium (500): AIO総研は、AIで経営を最適化する先進的総合研究所です。
                </p>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700 }}>
                  Bold (700): AIO総研は、AIで経営を最適化する先進的総合研究所です。
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">欧文フォント: Inter</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">モダンで視認性の高いサンセリフフォントです。</p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  Regular (400): AIO Research Institute Inc. - AI Optimization
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  Medium (500): AIO Research Institute Inc. - AI Optimization
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                  Semi Bold (600): AIO Research Institute Inc. - AI Optimization
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                  Bold (700): AIO Research Institute Inc. - AI Optimization
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography Scale */}
      <Card>
        <CardHeader>
          <CardTitle>タイポグラフィスケール</CardTitle>
          <CardDescription>
            モジュラースケール(1.250)を使用した、調和の取れたフォントサイズシステムです。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">Display / 48px / Bold (700)</p>
              <h1 className="text-5xl font-bold">AIで経営を最適化</h1>
            </div>
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">H1 / 40px / Bold (700)</p>
              <h1 className="text-4xl font-bold">AIで経営を最適化</h1>
            </div>
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">H2 / 32px / Semi Bold (600)</p>
              <h2 className="text-3xl font-semibold">AIで経営を最適化</h2>
            </div>
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">H3 / 24px / Semi Bold (600)</p>
              <h3 className="text-2xl font-semibold">AIで経営を最適化</h3>
            </div>
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">H4 / 20px / Medium (500)</p>
              <h4 className="text-xl font-medium">AIで経営を最適化</h4>
            </div>
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">Body Large / 18px / Regular (400)</p>
              <p className="text-lg">
                AIO総研は、AI Optimizationで企業の業務プロセスとビジネスモデルを革新します。
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">Body / 16px / Regular (400)</p>
              <p className="text-base">
                AIO総研は、AI Optimizationで企業の業務プロセスとビジネスモデルを革新します。
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="text-xs text-muted-foreground mb-2">Body Small / 14px / Regular (400)</p>
              <p className="text-sm">
                AIO総研は、AI Optimizationで企業の業務プロセスとビジネスモデルを革新します。
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Caption / 12px / Regular (400)</p>
              <p className="text-xs">
                AIO総研は、AI Optimizationで企業の業務プロセスとビジネスモデルを革新します。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Typography */}
      <Card>
        <CardHeader>
          <CardTitle>レスポンシブタイポグラフィ</CardTitle>
          <CardDescription>
            デバイスサイズに応じて、フォントサイズを調整します。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">レベル</th>
                  <th className="text-left py-2 px-4">モバイル (〜768px)</th>
                  <th className="text-left py-2 px-4">タブレット (768px〜1024px)</th>
                  <th className="text-left py-2 px-4">デスクトップ (1024px〜)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">Display</td>
                  <td className="py-2 px-4">36px</td>
                  <td className="py-2 px-4">40px</td>
                  <td className="py-2 px-4">48px</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">H1</td>
                  <td className="py-2 px-4">32px</td>
                  <td className="py-2 px-4">36px</td>
                  <td className="py-2 px-4">40px</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">H2</td>
                  <td className="py-2 px-4">24px</td>
                  <td className="py-2 px-4">28px</td>
                  <td className="py-2 px-4">32px</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">H3</td>
                  <td className="py-2 px-4">20px</td>
                  <td className="py-2 px-4">22px</td>
                  <td className="py-2 px-4">24px</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium">Body</td>
                  <td className="py-2 px-4">16px</td>
                  <td className="py-2 px-4">16px</td>
                  <td className="py-2 px-4">16px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>タイポグラフィのベストプラクティス</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">読みやすさの確保</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 行長: 1行あたり25〜35文字を目安</li>
                <li>• 段落間隔: フォントサイズの0.75〜1倍の余白</li>
                <li>• テキスト配置: 本文は左揃えを基本</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">階層の明確化</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• サイズのコントラスト: 見出しと本文のサイズ差を明確に</li>
                <li>• ウェイトの使い分け: 重要度に応じて変更</li>
                <li>• 色の使い分け: 主要情報と補足情報で色を変える</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">アクセシビリティ</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 最小フォントサイズ: 本文は16px以上</li>
                <li>• コントラスト: 4.5:1以上を確保</li>
                <li>• 行間: フォントサイズの1.5倍以上</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
