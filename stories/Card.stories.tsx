import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@lib/components/card";
import { Button } from "@lib/components/button";
import { Badge } from "@lib/components/badge";
import { MoreHorizontal, Users, TrendingUp, Building } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
        <CardDescription>カードの説明文がここに入ります。</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">カードのメインコンテンツです。</p>
      </CardContent>
      <CardFooter>
        <Button>アクション</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>設定</CardTitle>
        <CardDescription>アカウント設定を管理します。</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">ユーザー名</span>
            <span>@aiosoken</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">メール</span>
            <span>info@aio-soken.com</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ServiceCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>AIコンサルティング</CardTitle>
        <CardDescription>
          企業のAI導入を支援するコンサルティングサービス
        </CardDescription>
        <CardAction>
          <Badge>人気</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
          <li>現状分析と課題抽出</li>
          <li>AI導入戦略の策定</li>
          <li>PoC開発支援</li>
          <li>運用サポート</li>
        </ul>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>お問い合わせ</Button>
        <Button variant="outline">詳細を見る</Button>
      </CardFooter>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[180px]">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <Users className="size-4" />
            総ユーザー数
          </CardDescription>
          <CardTitle className="text-3xl">1,234</CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-[180px]">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <TrendingUp className="size-4" />
            月間アクセス
          </CardDescription>
          <CardTitle className="text-3xl">56.7K</CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-[180px]">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <Building className="size-4" />
            契約企業
          </CardDescription>
          <CardTitle className="text-3xl">89</CardTitle>
        </CardHeader>
      </Card>
    </div>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[400px] border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="text-primary">お知らせ</CardTitle>
        <CardDescription>2024年1月15日</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          新しいAIレポート「2024年のAIトレンド予測」を公開しました。
          詳細はダウンロードページをご確認ください。
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="px-0">
          続きを読む →
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const InteractiveCard: Story = {
  render: () => (
    <Card className="w-[350px] transition-shadow hover:shadow-md cursor-pointer">
      <CardHeader>
        <CardTitle>クリック可能なカード</CardTitle>
        <CardDescription>
          ホバーするとシャドウが変化します
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          カード全体をクリック可能にしたい場合のスタイル例です。
        </p>
      </CardContent>
    </Card>
  ),
};
