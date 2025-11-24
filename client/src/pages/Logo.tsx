import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Download, Info, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Logo() {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">ロゴガイドライン</h1>
        <p className="text-lg text-muted-foreground">
          AIO総研のロゴの使用ルール、バリエーション、禁止事項を定義しています。
        </p>
      </div>

      {/* Logo Variations - Grayscale */}
      <Card>
        <CardHeader>
          <CardTitle>ロゴバリエーション - グレースケール</CardTitle>
          <CardDescription>
            モノクロ印刷や背景色に制限がある場合に使用するグレースケール版
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Symbol + AIO */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット2@2x.png" alt="AIO総研 ロゴ - グレースケール" className="max-h-16" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボル + AIO</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット2@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol Only */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット3@2x.png" alt="AIO総研 シンボルマーク - グレースケール" className="max-h-16" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボルマークのみ</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット3@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol + AIO総研 (Vertical) */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット4@2x.png" alt="AIO総研 ロゴ - 縦組み グレースケール" className="max-h-24" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボル + AIO総研 (縦組み)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット4@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol + AIO総研 + Research Institute Inc. */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット5@2x.png" alt="AIO総研 フルロゴ - グレースケール" className="max-h-20" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">フルロゴ (英文付き)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット5@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol + AIO総研 (Horizontal) */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット6@2x.png" alt="AIO総研 ロゴ - 横組み グレースケール" className="max-h-16" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボル + AIO総研 (横組み)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット6@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logo Variations - Color */}
      <Card>
        <CardHeader>
          <CardTitle>ロゴバリエーション - カラー</CardTitle>
          <CardDescription>
            ブランドカラー(オレンジと青)を使用したカラー版
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Symbol + AIO - Color */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット12@2x.png" alt="AIO総研 ロゴ - カラー" className="max-h-16" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボル + AIO (カラー)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット12@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol Only - Color */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット13@2x.png" alt="AIO総研 シンボルマーク - カラー" className="max-h-16" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボルマークのみ (カラー)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット13@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol + AIO総研 (Vertical) - Color */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット14@2x.png" alt="AIO総研 ロゴ - 縦組み カラー" className="max-h-24" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボル + AIO総研 (縦組み・カラー)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット14@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol + AIO総研 + Research Institute Inc. - Color */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット15@2x.png" alt="AIO総研 フルロゴ - カラー" className="max-h-20" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">フルロゴ (英文付き・カラー)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット15@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>

            {/* Symbol + AIO総研 (Horizontal) - Color */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-border rounded-lg p-8 flex items-center justify-center min-h-[120px]">
                <img src="/アセット16@2x.png" alt="AIO総研 ロゴ - 横組み カラー" className="max-h-16" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">シンボル + AIO総研 (横組み・カラー)</p>
                <Button size="sm" variant="outline" onClick={() => handleDownload('アセット16@2x.png')}>
                  <Download className="h-4 w-4 mr-2" />
                  ダウンロード
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logo Usage Rules */}
      <Card>
        <CardHeader>
          <CardTitle>使用ルール</CardTitle>
          <CardDescription>
            ロゴを使用する際の基本的なガイドライン
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              推奨される使用方法
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground ml-7">
              <li>• <strong>ウェブサイトヘッダー</strong>: 横組みロゴ(カラー)を使用</li>
              <li>• <strong>名刺・封筒</strong>: フルロゴ(英文付き)を使用</li>
              <li>• <strong>SNSアイコン</strong>: シンボルマークのみ(カラー)を使用</li>
              <li>• <strong>プレゼンテーション資料</strong>: 横組みロゴまたはシンボル + AIOを使用</li>
              <li>• <strong>モノクロ印刷物</strong>: グレースケール版を使用</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">クリアスペース</h3>
            <p className="text-sm text-muted-foreground mb-3">
              ロゴの周囲には、ロゴの高さの50%以上の余白を確保してください。
              これにより、ロゴの視認性と存在感が保たれます。
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">最小サイズ</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium mb-1">デジタル媒体</p>
                <p className="text-muted-foreground">高さ: 最小24px</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium mb-1">印刷物</p>
                <p className="text-muted-foreground">高さ: 最小8mm</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prohibited Usage */}
      <Card>
        <CardHeader>
          <CardTitle>禁止事項</CardTitle>
          <CardDescription>
            ロゴの誤った使用例と避けるべき行為
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">ロゴの変形</p>
                <p className="text-sm text-muted-foreground">
                  ロゴを引き伸ばしたり、圧縮したり、回転させたりしないでください。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">色の変更</p>
                <p className="text-sm text-muted-foreground">
                  指定されたカラーバリエーション以外の色を使用しないでください。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">エフェクトの追加</p>
                <p className="text-sm text-muted-foreground">
                  影、グロー、グラデーション、アウトラインなどのエフェクトを追加しないでください。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">要素の分離</p>
                <p className="text-sm text-muted-foreground">
                  シンボルマークとテキストを分離して使用しないでください。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">背景とのコントラスト不足</p>
                <p className="text-sm text-muted-foreground">
                  ロゴが背景に埋もれないよう、十分なコントラストを確保してください。
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Notes */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>ロゴの使用に関するお問い合わせ</AlertTitle>
        <AlertDescription>
          ガイドラインに記載されていない使用方法や、特別な用途でのロゴ使用については、
          ブランド管理部門までお問い合わせください。
        </AlertDescription>
      </Alert>
    </div>
  );
}
