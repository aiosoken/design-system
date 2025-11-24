import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@lib/components/card";
import { Badge } from "@lib/components/badge";

interface SpacingItemProps {
  name: string;
  value: string;
  pixels: string;
  usage: string;
  example?: boolean;
}

function SpacingItem({ name, value, pixels, usage, example = true }: SpacingItemProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground font-mono">{value} / {pixels}</p>
        </div>
        <Badge variant="outline" className="font-mono text-xs">{value}</Badge>
      </div>
      <p className="text-xs text-muted-foreground">{usage}</p>
      {example && (
        <div className="bg-muted/30 rounded-lg p-4 flex items-center">
          <div className="bg-primary" style={{ width: pixels, height: '32px' }} />
        </div>
      )}
    </div>
  );
}

export default function Spacing() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">スペーシング</h1>
        <p className="text-lg text-muted-foreground">
          一貫したスペーシング（余白）は、視覚的な階層とリズムを作り出し、ユーザー体験を向上させます。
        </p>
      </div>

      {/* Spacing Scale */}
      <Card>
        <CardHeader>
          <CardTitle>スペーシングスケール</CardTitle>
          <CardDescription>
            4pxを基準単位とした8段階のスペーシングシステムです。すべてのマージンとパディングは、このスケールから選択してください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpacingItem
              name="Extra Small (XS)"
              value="0.25rem"
              pixels="4px"
              usage="アイコンとテキスト間、タグ内のパディング"
            />
            <SpacingItem
              name="Small (SM)"
              value="0.5rem"
              pixels="8px"
              usage="ボタン内のパディング、カード内の小さな余白"
            />
            <SpacingItem
              name="Medium (MD)"
              value="1rem"
              pixels="16px"
              usage="コンポーネント内の標準的なパディング"
            />
            <SpacingItem
              name="Large (LG)"
              value="1.5rem"
              pixels="24px"
              usage="カード間のマージン、セクション内の余白"
            />
            <SpacingItem
              name="Extra Large (XL)"
              value="2rem"
              pixels="32px"
              usage="大きなコンポーネント間のマージン"
            />
            <SpacingItem
              name="2XL"
              value="3rem"
              pixels="48px"
              usage="セクション間の余白"
            />
            <SpacingItem
              name="3XL"
              value="4rem"
              pixels="64px"
              usage="ページ内の大きなセクション区切り"
            />
            <SpacingItem
              name="4XL"
              value="6rem"
              pixels="96px"
              usage="ページ間の余白、ヒーローセクション"
            />
          </div>
        </CardContent>
      </Card>

      {/* Padding Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Padding（内側の余白）の使い分け</CardTitle>
          <CardDescription>
            要素の内側の余白です。コンテンツと境界線の間に空間を作ります。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">コンポーネント別のパディング推奨値</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">ボタン（標準）</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">px-4 py-2</code>
                </div>
                <div className="bg-muted/30 p-2 rounded flex items-center justify-center">
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">
                    ボタン例
                  </button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">カード</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">p-6</code>
                </div>
                <div className="bg-card border rounded-lg p-6">
                  <h4 className="font-semibold mb-2">カードタイトル</h4>
                  <p className="text-sm text-muted-foreground">カード内のコンテンツは、24pxのパディングで囲まれています。</p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">入力フィールド</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">px-3 py-2</code>
                </div>
                <div className="bg-muted/30 p-2 rounded">
                  <input
                    type="text"
                    placeholder="テキスト入力"
                    className="w-full px-3 py-2 rounded-lg border bg-background"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">バッジ・タグ</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">px-2 py-1</code>
                </div>
                <div className="bg-muted/30 p-2 rounded flex gap-2">
                  <Badge>タグ1</Badge>
                  <Badge variant="secondary">タグ2</Badge>
                  <Badge variant="outline">タグ3</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Margin Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Margin（外側の余白）の使い分け</CardTitle>
          <CardDescription>
            要素の外側の余白です。コンポーネント同士の間隔を作ります。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">用途別のマージン推奨値</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                <code className="text-xs bg-background px-2 py-1 rounded font-mono shrink-0">space-y-2</code>
                <div className="text-sm">
                  <span className="font-medium">8px</span>: リスト項目間、フォームフィールド間の狭い間隔
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                <code className="text-xs bg-background px-2 py-1 rounded font-mono shrink-0">space-y-4</code>
                <div className="text-sm">
                  <span className="font-medium">16px</span>: 段落間、カード内のセクション間の標準間隔
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                <code className="text-xs bg-background px-2 py-1 rounded font-mono shrink-0">space-y-6</code>
                <div className="text-sm">
                  <span className="font-medium">24px</span>: カード間、コンポーネントグループ間の間隔
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                <code className="text-xs bg-background px-2 py-1 rounded font-mono shrink-0">space-y-8</code>
                <div className="text-sm">
                  <span className="font-medium">32px</span>: ページ内のセクション間の間隔（このページで使用中）
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                <code className="text-xs bg-background px-2 py-1 rounded font-mono shrink-0">space-y-12</code>
                <div className="text-sm">
                  <span className="font-medium">48px</span>: 大きなセクション間、ページの主要な区切り
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">実例: セクション間のマージン</h3>
            <div className="border rounded-lg p-6 space-y-8">
              <div className="bg-muted/50 p-4 rounded">
                <h4 className="font-semibold">セクション 1</h4>
                <p className="text-sm text-muted-foreground">32pxのマージン（space-y-8）で次のセクションと分離されています。</p>
              </div>
              <div className="bg-muted/50 p-4 rounded">
                <h4 className="font-semibold">セクション 2</h4>
                <p className="text-sm text-muted-foreground">視覚的な階層を作り、コンテンツを読みやすくします。</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Container & Layout */}
      <Card>
        <CardHeader>
          <CardTitle>コンテナとレイアウトのスペーシング</CardTitle>
          <CardDescription>
            レスポンシブなコンテナパディングとレイアウトの余白管理
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-3">コンテナの水平パディング</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Badge variant="outline">モバイル</Badge>
                <span className="text-muted-foreground">16px (1rem) - 画面幅 &lt; 640px</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">タブレット</Badge>
                <span className="text-muted-foreground">24px (1.5rem) - 画面幅 640px - 1024px</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">デスクトップ</Badge>
                <span className="text-muted-foreground">32px (2rem) - 画面幅 &gt; 1024px</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">ページ全体の垂直スペーシング</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>ページトップ・ボトム</strong>: 32px (py-8) の標準パディング</p>
              <p>• <strong>見出しと本文の間</strong>: 8px (mb-2) でタイトル直下のサブテキスト</p>
              <p>• <strong>セクション間</strong>: 32px (space-y-8) でコンテンツを分離</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>スペーシングのベストプラクティス</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">✓ 一貫性を保つ</h4>
              <p className="text-sm text-muted-foreground">
                同じ種類の要素には、常に同じスペーシング値を使用してください。例えば、すべてのカード間は24px（space-y-6）など。
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">✓ スケールに従う</h4>
              <p className="text-sm text-muted-foreground">
                定義されたスペーシングスケールから選択してください。任意の値（例: 13px, 27px）は避けましょう。
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">✓ 視覚的階層を作る</h4>
              <p className="text-sm text-muted-foreground">
                より大きなスペーシングは、より重要な区切りを意味します。セクション間 {'>'} コンポーネント間 {'>'} 要素間の順に大きくします。
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <h4 className="font-semibold mb-1">✓ レスポンシブに対応する</h4>
              <p className="text-sm text-muted-foreground">
                モバイルでは狭く、デスクトップでは広く。画面サイズに応じてスペーシングを調整しましょう。
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-4">
              <h4 className="font-semibold mb-1">✗ 余白を詰めすぎない</h4>
              <p className="text-sm text-muted-foreground">
                情報を詰め込みすぎると、読みにくくなります。十分な余白を確保して、呼吸できるデザインを心がけましょう。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tailwind Utilities */}
      <Card>
        <CardHeader>
          <CardTitle>Tailwind CSS ユーティリティクラス</CardTitle>
          <CardDescription>
            開発で使用する主なスペーシングクラス
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Padding（内側の余白）</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-xs font-mono">
                  p-{'{n}'} pt-{'{n}'} pr-{'{n}'} pb-{'{n}'} pl-{'{n}'} px-{'{n}'} py-{'{n}'}
                </code>
                <p className="text-xs text-muted-foreground mt-2">
                  例: <code className="bg-background px-1 rounded">p-4</code> = 16px のパディング（全方向）
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm">Margin（外側の余白）</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-xs font-mono">
                  m-{'{n}'} mt-{'{n}'} mr-{'{n}'} mb-{'{n}'} ml-{'{n}'} mx-{'{n}'} my-{'{n}'}
                </code>
                <p className="text-xs text-muted-foreground mt-2">
                  例: <code className="bg-background px-1 rounded">mb-6</code> = 24px の下方向マージン
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm">Gap（Flexbox/Grid内の間隔）</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-xs font-mono">
                  gap-{'{n}'} gap-x-{'{n}'} gap-y-{'{n}'}
                </code>
                <p className="text-xs text-muted-foreground mt-2">
                  例: <code className="bg-background px-1 rounded">gap-4</code> = 16px のグリッド/フレックスアイテム間隔
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm">Space Between（子要素間の間隔）</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-xs font-mono">
                  space-x-{'{n}'} space-y-{'{n}'}
                </code>
                <p className="text-xs text-muted-foreground mt-2">
                  例: <code className="bg-background px-1 rounded">space-y-8</code> = 32px の垂直方向の子要素間隔
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
