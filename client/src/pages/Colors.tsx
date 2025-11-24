import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface ColorSwatchProps {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  textColor?: string;
}

function ColorSwatch({ name, hex, rgb, usage, textColor = "white" }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success(`${text} をコピーしました`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <div
        className="h-24 rounded-lg flex items-center justify-center cursor-pointer group relative overflow-hidden"
        style={{ backgroundColor: hex, color: textColor }}
        onClick={() => copyToClipboard(hex)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="relative flex items-center gap-2">
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />}
        </div>
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{hex}</p>
        <p className="text-xs text-muted-foreground font-mono">{rgb}</p>
        <p className="text-xs text-muted-foreground">{usage}</p>
      </div>
    </div>
  );
}

export default function Colors() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">カラーシステム</h1>
        <p className="text-lg text-muted-foreground">
          AIO総研のカラーシステムは、ロゴから抽出したオレンジと青を基調とし、「エネルギッシュな優しさと知性」を表現します。
        </p>
      </div>

      {/* Primary Orange */}
      <Card>
        <CardHeader>
          <CardTitle>Primary Orange (プライマリーオレンジ)</CardTitle>
          <CardDescription>
            エネルギッシュで優しい印象を与える、AIO総研のシグネチャーカラーです。革新性、活力、親しみやすさを表現します。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColorSwatch
              name="Orange-600 (Main)"
              hex="#F25533"
              rgb="rgb(242, 85, 51)"
              usage="CTAボタン、重要な見出し、アクセント"
            />
            <ColorSwatch
              name="Orange-700 (Dark)"
              hex="#CE461B"
              rgb="rgb(206, 70, 27)"
              usage="ホバー状態、強調表示"
            />
            <ColorSwatch
              name="Orange-100 (Light)"
              hex="#FDEAE5"
              rgb="rgb(253, 234, 229)"
              usage="背景、ハイライト"
              textColor="#1A1A1A"
            />
          </div>
        </CardContent>
      </Card>

      {/* Primary Blue */}
      <Card>
        <CardHeader>
          <CardTitle>Primary Blue (プライマリーブルー)</CardTitle>
          <CardDescription>
            知性と信頼性を象徴する、AIO総研のコアカラーです。専門性、安定性、論理性を表現します。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColorSwatch
              name="Blue-600 (Main)"
              hex="#3054AD"
              rgb="rgb(48, 84, 173)"
              usage="リンク、情報表示、アイコン"
            />
            <ColorSwatch
              name="Blue-800 (Dark)"
              hex="#28366E"
              rgb="rgb(40, 54, 110)"
              usage="ヘッダー、フッター、濃い背景"
            />
            <ColorSwatch
              name="Blue-300 (Light)"
              hex="#7890CA"
              rgb="rgb(120, 144, 202)"
              usage="セカンダリーボタン、補助的な要素"
            />
          </div>
        </CardContent>
      </Card>

      {/* Neutral Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Neutral Colors (ニュートラルカラー)</CardTitle>
          <CardDescription>
            テキスト、背景、境界線など、基本的な要素に使用するグレースケールです。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch
              name="Black"
              hex="#1A1A1A"
              rgb="rgb(26, 26, 26)"
              usage="本文テキスト、見出し"
            />
            <ColorSwatch
              name="Gray-800"
              hex="#2D2D2D"
              rgb="rgb(45, 45, 45)"
              usage="サブテキスト"
            />
            <ColorSwatch
              name="Gray-600"
              hex="#666666"
              rgb="rgb(102, 102, 102)"
              usage="キャプション"
              textColor="white"
            />
            <ColorSwatch
              name="Gray-400"
              hex="#999999"
              rgb="rgb(153, 153, 153)"
              usage="プレースホルダー"
              textColor="white"
            />
            <ColorSwatch
              name="Gray-200"
              hex="#E5E5E5"
              rgb="rgb(229, 229, 229)"
              usage="境界線"
              textColor="#1A1A1A"
            />
            <ColorSwatch
              name="Gray-100"
              hex="#F5F5F5"
              rgb="rgb(245, 245, 245)"
              usage="背景(薄)"
              textColor="#1A1A1A"
            />
            <ColorSwatch
              name="White"
              hex="#FFFFFF"
              rgb="rgb(255, 255, 255)"
              usage="背景(白)"
              textColor="#1A1A1A"
            />
          </div>
        </CardContent>
      </Card>

      {/* Semantic Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Semantic Colors (セマンティックカラー)</CardTitle>
          <CardDescription>
            システムメッセージやフィードバックに使用する機能的な色です。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ColorSwatch
              name="Success-600"
              hex="#10B981"
              rgb="rgb(16, 185, 129)"
              usage="成功メッセージ、完了状態"
            />
            <ColorSwatch
              name="Warning-600"
              hex="#F59E0B"
              rgb="rgb(245, 158, 11)"
              usage="警告メッセージ、注意喚起"
            />
            <ColorSwatch
              name="Error-600"
              hex="#EF4444"
              rgb="rgb(239, 68, 68)"
              usage="エラーメッセージ、削除アクション"
            />
            <ColorSwatch
              name="Info-600"
              hex="#3054AD"
              rgb="rgb(48, 84, 173)"
              usage="情報メッセージ"
            />
          </div>
        </CardContent>
      </Card>

      {/* Gradient */}
      <Card>
        <CardHeader>
          <CardTitle>Gradient (グラデーション)</CardTitle>
          <CardDescription>
            ロゴのようなグラデーション表現は、特別な場面でのみ使用します。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div
                className="h-32 rounded-lg flex items-center justify-center text-white font-semibold"
                style={{ background: "linear-gradient(135deg, #F25533 0%, #3054AD 100%)" }}
              >
                オレンジ → ブルー グラデーション
              </div>
              <p className="text-sm text-muted-foreground mt-2 font-mono">
                background: linear-gradient(135deg, #F25533 0%, #3054AD 100%);
              </p>
            </div>
            <div>
              <div
                className="h-32 rounded-lg flex items-center justify-center text-foreground font-semibold"
                style={{ background: "linear-gradient(135deg, #FDEAE5 0%, #E8EFFA 100%)" }}
              >
                ライトグラデーション (背景用)
              </div>
              <p className="text-sm text-muted-foreground mt-2 font-mono">
                background: linear-gradient(135deg, #FDEAE5 0%, #E8EFFA 100%);
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>カラーの使い分け</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary">オレンジ(Orange)を使用する場面</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ユーザーにアクションを促す要素(CTAボタン、申し込みボタン)</li>
                <li>• 革新的なサービスや新機能の紹介</li>
                <li>• エネルギッシュで前向きな印象を与えたい箇所</li>
                <li>• 親しみやすさを強調したいコンテンツ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-secondary">ブルー(Blue)を使用する場面</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 情報提供やナビゲーション要素</li>
                <li>• データや分析結果の表示</li>
                <li>• 専門性や信頼性を強調したい箇所</li>
                <li>• 落ち着いた印象を与えたいコンテンツ</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
