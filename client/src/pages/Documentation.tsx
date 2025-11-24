import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Code, Palette, FileText } from "lucide-react";

export default function Documentation() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">ドキュメント</h1>
        <p className="text-lg text-muted-foreground">
          AIO総研デザインシステムの使い方と、実装ガイドラインです。
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>デザインシステムとは</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            デザインシステムは、ブランドアイデンティティ、デザイン原則、UIコンポーネント、
            コーディング規約などを体系化したものです。これにより、以下のメリットが得られます。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">一貫性</h3>
              <p className="text-sm text-muted-foreground">
                すべての媒体で統一されたブランド体験を提供
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">効率性</h3>
              <p className="text-sm text-muted-foreground">
                再利用可能なコンポーネントで制作時間を短縮
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">品質</h3>
              <p className="text-sm text-muted-foreground">
                アクセシビリティとユーザビリティを標準化
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            <CardTitle>開発者向け: 使い始める</CardTitle>
          </div>
          <CardDescription>
            ウェブサイトやアプリケーションでデザインシステムを使用する方法
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">1. カラー変数の設定</h3>
            <p className="text-sm text-muted-foreground mb-3">
              CSSカスタムプロパティを使用して、ブランドカラーを定義します。
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`:root {
  /* Primary Orange */
  --color-primary: #F25533;
  --color-primary-dark: #CE461B;
  --color-primary-light: #FDEAE5;
  
  /* Primary Blue */
  --color-secondary: #3054AD;
  --color-secondary-dark: #28366E;
  --color-secondary-light: #7890CA;
  
  /* Neutral */
  --color-text: #1A1A1A;
  --color-text-muted: #666666;
  --color-border: #E5E5E5;
  --color-background: #FFFFFF;
}`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">2. フォントの読み込み</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Google Fontsから、Noto Sans JPとInterを読み込みます。
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">3. ベーススタイルの適用</h3>
            <p className="text-sm text-muted-foreground mb-3">
              bodyタグにフォントファミリーを設定します。
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`body {
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  color: var(--color-text);
  background-color: var(--color-background);
  line-height: 1.6;
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* For Designers */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-secondary" />
            <CardTitle>デザイナー向け: Figmaでの使用</CardTitle>
          </div>
          <CardDescription>
            デザインツールでデザインシステムを活用する方法
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Figmaライブラリ</AlertTitle>
            <AlertDescription>
              Figmaコンポーネントライブラリを準備中です。完成次第、共有リンクを提供します。
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="font-semibold mb-2">カラースタイルの設定</h3>
            <p className="text-sm text-muted-foreground">
              Figmaのカラースタイル機能を使用して、デザインシステムのカラーパレットを登録してください。
              カラーシステムページに記載されている色名とHEXコードを参照してください。
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">テキストスタイルの設定</h3>
            <p className="text-sm text-muted-foreground">
              タイポグラフィページに記載されているフォントサイズ、ウェイト、行間を使用して、
              テキストスタイルを作成してください。
            </p>
          </div>
        </CardContent>
      </Card>

      {/* For Content Creators */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <CardTitle>コンテンツ制作者向け: 資料作成のガイドライン</CardTitle>
          </div>
          <CardDescription>
            PowerPoint、Keynote、Googleスライドでの使用方法
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">カラーの使用</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>見出し・強調</strong>: Primary Orange (#F25533) を使用</li>
              <li>• <strong>本文・説明</strong>: Black (#1A1A1A) を使用</li>
              <li>• <strong>補足情報</strong>: Gray-600 (#666666) を使用</li>
              <li>• <strong>図表・グラフ</strong>: Primary Orange と Primary Blue を組み合わせて使用</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">フォントの使用</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>日本語</strong>: Noto Sans JP (利用できない場合は游ゴシック、メイリオ)</li>
              <li>• <strong>英数字</strong>: Inter (利用できない場合はSegoe UI、Arial)</li>
              <li>• <strong>見出し</strong>: Bold (700) を使用</li>
              <li>• <strong>本文</strong>: Regular (400) を使用</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">レイアウトの原則</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 余白を十分に確保し、情報を詰め込みすぎない</li>
              <li>• 重要な情報は左上に配置する(視線の流れを考慮)</li>
              <li>• 1スライドに1つのメッセージを原則とする</li>
              <li>• ロゴは右上または左上に小さく配置する</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <CardTitle>アクセシビリティガイドライン</CardTitle>
          <CardDescription>
            すべてのユーザーが利用しやすいデザインを実現するために
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">カラーコントラスト</h3>
            <p className="text-sm text-muted-foreground">
              テキストと背景のコントラスト比は、WCAG 2.1 AAレベル(4.5:1以上)を満たすようにしてください。
              デザインシステムで定義されているカラーの組み合わせは、すべてこの基準を満たしています。
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">フォントサイズ</h3>
            <p className="text-sm text-muted-foreground">
              本文のフォントサイズは16px以上を使用してください。
              小さなキャプションやラベルでも、12px未満は避けてください。
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">インタラクティブ要素</h3>
            <p className="text-sm text-muted-foreground">
              ボタンやリンクは、キーボードでアクセス可能にし、フォーカス状態を明確に表示してください。
              タッチターゲットは最小44px × 44pxを確保してください。
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Support */}
      <Card>
        <CardHeader>
          <CardTitle>サポート・お問い合わせ</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            デザインシステムの使用に関するご質問や、新しいコンポーネントの追加リクエストなどは、
            ブランド管理部門までお問い合わせください。
          </p>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              このデザインシステムは継続的に改善されます。
              フィードバックや改善提案をお待ちしています。
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
