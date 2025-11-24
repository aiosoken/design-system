import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Type, Box, Image, Zap, Shield, Brain, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">AIO総研 デザインシステム</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          AIで経営を最適化する先進的総合研究所のブランドアイデンティティとデザインガイドラインです。
          一貫性のあるユーザー体験を提供するための原則、コンポーネント、パターンを定義しています。
        </p>
      </div>

      {/* Brand Values */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">先進的・革新的</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              最先端のAI技術を駆使し、常に業界の一歩先を行く革新的なソリューションを提供します。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-secondary mb-2" />
            <CardTitle className="text-lg">信頼性・安定性</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              確実な成果を提供することで、クライアントとの長期的な信頼関係を構築します。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Brain className="h-8 w-8 text-secondary mb-2" />
            <CardTitle className="text-lg">専門性・知的</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              深い経営知見とAI技術の専門性を組み合わせ、高度な分析と洞察を提供します。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Layers className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">柔軟性・適応力</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              各企業の独自の課題やニーズに応じて、カスタマイズされたソリューションを提供します。
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold mb-6">デザインシステムの要素</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Palette className="h-6 w-6 text-primary" />
                <CardTitle>カラーシステム</CardTitle>
              </div>
              <CardDescription>
                オレンジと青を基調とした、「エネルギッシュな優しさと知性」を表現するカラーパレット
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Type className="h-6 w-6 text-secondary" />
                <CardTitle>タイポグラフィ</CardTitle>
              </div>
              <CardDescription>
                Noto Sans JPとInterを使用した、読みやすさと先進性を両立したフォントシステム
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Box className="h-6 w-6 text-primary" />
                <CardTitle>コンポーネント</CardTitle>
              </div>
              <CardDescription>
                再利用可能なUIコンポーネントライブラリで、一貫性のあるユーザー体験を提供
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Image className="h-6 w-6 text-secondary" />
                <CardTitle>ロゴガイドライン</CardTitle>
              </div>
              <CardDescription>
                ロゴの使用ルール、バリエーション、禁止事項を定義したガイドライン
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">デザイン原則</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2">明快さ (Clarity)</h3>
            <p className="text-sm text-muted-foreground">
              情報は明確で理解しやすく提示します。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">先進性 (Innovation)</h3>
            <p className="text-sm text-muted-foreground">
              モダンなビジュアル表現により、革新的なブランドイメージを構築します。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">信頼感 (Trust)</h3>
            <p className="text-sm text-muted-foreground">
              プロフェッショナルな印象により、経営層の信頼を獲得します。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">アクセシビリティ (Accessibility)</h3>
            <p className="text-sm text-muted-foreground">
              誰もが利用しやすいデザインにより、包括的なコミュニケーションを実現します。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">効率性 (Efficiency)</h3>
            <p className="text-sm text-muted-foreground">
              再利用可能なコンポーネントにより、迅速な制作を可能にします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
