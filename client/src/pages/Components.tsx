import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { 
  Info, AlertCircle, CheckCircle2, AlertTriangle, 
  Loader2, Download, Mail, User, ChevronRight,
  Home, Settings, FileText, ChevronDown, Play, Pause, Volume2
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Components() {
  const [progress, setProgress] = useState(45);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">コンポーネント</h1>
        <p className="text-lg text-muted-foreground">
          再利用可能なUIコンポーネントのライブラリです。一貫性のあるユーザー体験を提供します。
        </p>
      </div>

      {/* Buttons */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">ボタン</h2>
          <p className="text-muted-foreground">
            アクションを実行するための基本的なコンポーネントです。
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>バリエーション</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>サイズ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>アイコン付きボタン</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                メール送信
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                ダウンロード
              </Button>
              <Button variant="secondary" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                読み込み中...
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Elements */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">フォーム要素</h2>
          <p className="text-muted-foreground">
            ユーザー入力を受け付けるためのコンポーネントです。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>テキスト入力</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" type="email" placeholder="example@aio-research.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">お名前</Label>
              <Input id="name" placeholder="山田 太郎" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">メッセージ</Label>
              <Textarea id="message" placeholder="お問い合わせ内容をご記入ください" rows={4} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>チェックボックス</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">利用規約に同意します</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">ニュースレターを受け取る</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled">無効な選択肢</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ラジオボタン</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1">オプション 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2">オプション 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="option3" />
                <Label htmlFor="option3">オプション 3</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>セレクトボックス</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>業種を選択</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="業種を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manufacturing">製造業</SelectItem>
                  <SelectItem value="finance">金融業</SelectItem>
                  <SelectItem value="retail">小売業</SelectItem>
                  <SelectItem value="it">IT・通信業</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>スイッチ(トグル)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">通知を有効化</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing">マーケティングメールを受信</Label>
              <Switch id="marketing" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="disabled-switch">無効なスイッチ</Label>
              <Switch id="disabled-switch" disabled />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>スライダー</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>音量: 50%</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <Label>価格範囲: ¥0 - ¥10,000</Label>
              <Slider defaultValue={[0, 10000]} max={10000} step={100} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>プログレスバー</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>アップロード中...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                +10%
              </Button>
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                -10%
              </Button>
              <Button size="sm" variant="secondary" onClick={() => setProgress(0)}>
                リセット
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Alerts */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">アラート・通知</h2>
          <p className="text-muted-foreground">
            ユーザーに重要な情報を伝えるためのコンポーネントです。
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>アラートの種類</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>情報</AlertTitle>
              <AlertDescription>
                これは一般的な情報を伝えるアラートです。
              </AlertDescription>
            </Alert>

            <Alert variant="default" className="border-green-200 bg-green-50 dark:bg-green-950/20">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900 dark:text-green-100">成功</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                操作が正常に完了しました。
              </AlertDescription>
            </Alert>

            <Alert variant="default" className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">警告</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                この操作には注意が必要です。
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>エラー</AlertTitle>
              <AlertDescription>
                エラーが発生しました。もう一度お試しください。
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>トースト通知</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => toast.success("保存しました")}>
                成功通知
              </Button>
              <Button variant="outline" onClick={() => toast.error("エラーが発生しました")}>
                エラー通知
              </Button>
              <Button variant="secondary" onClick={() => toast.info("情報を更新しました")}>
                情報通知
              </Button>
              <Button variant="ghost" onClick={() => toast("シンプルな通知")}>
                デフォルト通知
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">バッジ</h2>
          <p className="text-muted-foreground">
            ステータスやカテゴリを示すための小さなラベルです。
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>バッジのバリエーション</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">デフォルト</Badge>
              <Badge variant="secondary">セカンダリ</Badge>
              <Badge variant="outline">アウトライン</Badge>
              <Badge variant="destructive">重要</Badge>
              <Badge className="bg-green-600 hover:bg-green-700">成功</Badge>
              <Badge className="bg-yellow-600 hover:bg-yellow-700">警告</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">カード</h2>
          <p className="text-muted-foreground">
            関連する情報をグループ化して表示するコンテナです。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>シンプルなカード</CardTitle>
              <CardDescription>カードの説明文がここに入ります</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                カードのコンテンツエリアです。テキスト、画像、その他の要素を配置できます。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>アクション付きカード</CardTitle>
              <CardDescription>フッターにボタンを配置できます</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                このカードにはフッターセクションがあり、アクションボタンを配置しています。
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">キャンセル</Button>
              <Button>実行</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Navigation Components */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">ナビゲーション</h2>
          <p className="text-muted-foreground">
            ページ間の移動やコンテンツの切り替えを支援するコンポーネントです。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>タブ</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">タブ 1</TabsTrigger>
                <TabsTrigger value="tab2">タブ 2</TabsTrigger>
                <TabsTrigger value="tab3">タブ 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p className="text-sm text-muted-foreground">タブ1のコンテンツです。</p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p className="text-sm text-muted-foreground">タブ2のコンテンツです。</p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p className="text-sm text-muted-foreground">タブ3のコンテンツです。</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>パンくずリスト</CardTitle>
          </CardHeader>
          <CardContent>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">コンポーネント</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>ナビゲーション</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ページネーション</CardTitle>
          </CardHeader>
          <CardContent>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ステップインジケーター</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <span className="text-sm font-medium">基本情報</span>
              </div>
              <div className="flex-1 h-0.5 bg-primary mx-2" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <span className="text-sm font-medium">詳細設定</span>
              </div>
              <div className="flex-1 h-0.5 bg-muted mx-2" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <span className="text-sm text-muted-foreground">確認</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Overlay Components */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">オーバーレイ</h2>
          <p className="text-muted-foreground">
            コンテンツの上に表示されるコンポーネントです。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>モーダル / ダイアログ</CardTitle>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>ダイアログを開く</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>確認</DialogTitle>
                  <DialogDescription>
                    この操作を実行してもよろしいですか?この操作は取り消せません。
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">キャンセル</Button>
                  <Button>実行</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ドロワー</CardTitle>
          </CardHeader>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">ドロワーを開く</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>設定</SheetTitle>
                  <SheetDescription>
                    アプリケーションの設定を変更できます。
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>通知</Label>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>ダークモード</Label>
                    <Switch />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ポップオーバー</CardTitle>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">ポップオーバーを開く</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium">追加情報</h4>
                  <p className="text-sm text-muted-foreground">
                    ポップオーバーは、追加情報やアクションを表示するために使用します。
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ツールチップ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">ホバーしてください</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>これはツールチップです</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>詳細情報</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Data Display */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">データ表示</h2>
          <p className="text-muted-foreground">
            データや情報を整理して表示するコンポーネントです。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>テーブル</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>名前</TableHead>
                  <TableHead>役職</TableHead>
                  <TableHead>部署</TableHead>
                  <TableHead className="text-right">ステータス</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">山田 太郎</TableCell>
                  <TableCell>マネージャー</TableCell>
                  <TableCell>営業部</TableCell>
                  <TableCell className="text-right">
                    <Badge className="bg-green-600">アクティブ</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">佐藤 花子</TableCell>
                  <TableCell>エンジニア</TableCell>
                  <TableCell>開発部</TableCell>
                  <TableCell className="text-right">
                    <Badge className="bg-green-600">アクティブ</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">鈴木 一郎</TableCell>
                  <TableCell>デザイナー</TableCell>
                  <TableCell>デザイン部</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">休暇中</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>アコーディオン</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>デザインシステムとは?</AccordionTrigger>
                <AccordionContent>
                  デザインシステムは、ブランドアイデンティティ、デザイン原則、UIコンポーネント、
                  コーディング規約などを体系化したものです。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>どのように使用しますか?</AccordionTrigger>
                <AccordionContent>
                  各コンポーネントのコードをコピーして、プロジェクトに組み込むことができます。
                  詳細はドキュメントページをご覧ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>カスタマイズは可能ですか?</AccordionTrigger>
                <AccordionContent>
                  はい、各コンポーネントはカスタマイズ可能です。
                  ただし、ブランドの一貫性を保つため、基本的なデザイン原則は守ってください。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>リスト</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                <User className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">プロフィール設定</p>
                  <p className="text-sm text-muted-foreground">アカウント情報を編集</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                <Settings className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">一般設定</p>
                  <p className="text-sm text-muted-foreground">アプリケーションの設定</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">ドキュメント</p>
                  <p className="text-sm text-muted-foreground">使い方ガイド</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>タイムライン</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium">プロジェクト開始</p>
                  <p className="text-sm text-muted-foreground">2024年1月15日</p>
                  <p className="text-sm mt-2">デザインシステムの構築を開始しました。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium">カラーシステム定義</p>
                  <p className="text-sm text-muted-foreground">2024年2月1日</p>
                  <p className="text-sm mt-2">ブランドカラーとセマンティックカラーを定義しました。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">コンポーネントライブラリ完成</p>
                  <p className="text-sm text-muted-foreground">2024年3月10日</p>
                  <p className="text-sm mt-2">すべてのコンポーネントが完成しました。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>統計カード</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">総ユーザー数</p>
                <p className="text-3xl font-bold mt-2">1,234</p>
                <p className="text-sm text-green-600 mt-1">↑ 12% 前月比</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">アクティブプロジェクト</p>
                <p className="text-3xl font-bold mt-2">42</p>
                <p className="text-sm text-green-600 mt-1">↑ 8% 前月比</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">完了タスク</p>
                <p className="text-3xl font-bold mt-2">856</p>
                <p className="text-sm text-red-600 mt-1">↓ 3% 前月比</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Components */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">その他</h2>
          <p className="text-muted-foreground">
            その他の便利なコンポーネントです。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>アバター</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>区切り線 (Separator)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm">セクション 1</p>
              <Separator className="my-4" />
              <p className="text-sm">セクション 2</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm">左</p>
              <Separator orientation="vertical" className="h-8" />
              <p className="text-sm">右</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>空状態 (Empty State)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">データがありません</h3>
              <p className="text-sm text-muted-foreground mb-4">
                まだデータが登録されていません。<br />
                新しいアイテムを追加してください。
              </p>
              <Button>
                新規作成
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ローディングスピナー</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <Loader2 className="h-8 w-8 animate-spin text-secondary" />
              <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
