import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@lib/components/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@lib/components/card";
import { Button } from "@lib/components/button";
import { Input } from "@lib/components/input";
import { Label } from "@lib/components/label";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">タブ1</TabsTrigger>
        <TabsTrigger value="tab2">タブ2</TabsTrigger>
        <TabsTrigger value="tab3">タブ3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm text-muted-foreground">タブ1のコンテンツです。</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-muted-foreground">タブ2のコンテンツです。</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm text-muted-foreground">タブ3のコンテンツです。</p>
      </TabsContent>
    </Tabs>
  ),
};

export const AccountSettings: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList className="w-full">
        <TabsTrigger value="account" className="flex-1">
          アカウント
        </TabsTrigger>
        <TabsTrigger value="password" className="flex-1">
          パスワード
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>アカウント</CardTitle>
            <CardDescription>
              アカウント情報を変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">名前</Label>
              <Input id="name" defaultValue="山田 太郎" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">ユーザー名</Label>
              <Input id="username" defaultValue="@yamada" />
            </div>
            <Button className="self-start">保存</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>パスワード</CardTitle>
            <CardDescription>
              パスワードを変更できます。
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="current">現在のパスワード</Label>
              <Input id="current" type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="new">新しいパスワード</Label>
              <Input id="new" type="password" />
            </div>
            <Button className="self-start">パスワードを変更</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ServiceTabs: Story = {
  render: () => (
    <Tabs defaultValue="consulting" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="consulting">コンサルティング</TabsTrigger>
        <TabsTrigger value="development">開発支援</TabsTrigger>
        <TabsTrigger value="training">研修</TabsTrigger>
      </TabsList>
      <TabsContent value="consulting" className="mt-4">
        <h3 className="font-semibold mb-2">AIコンサルティング</h3>
        <p className="text-muted-foreground text-sm">
          企業のAI導入を支援する包括的なコンサルティングサービスを提供します。
          現状分析から導入計画の策定、実装支援まで一貫してサポートします。
        </p>
      </TabsContent>
      <TabsContent value="development" className="mt-4">
        <h3 className="font-semibold mb-2">AI開発支援</h3>
        <p className="text-muted-foreground text-sm">
          機械学習モデルの開発からデプロイまで、技術的な支援を提供します。
          お客様のニーズに合わせたカスタムソリューションを構築します。
        </p>
      </TabsContent>
      <TabsContent value="training" className="mt-4">
        <h3 className="font-semibold mb-2">AI研修プログラム</h3>
        <p className="text-muted-foreground text-sm">
          経営層から技術者まで、レベルに合わせたAI研修プログラムを提供します。
          実践的なワークショップを通じて、AI活用スキルを習得できます。
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">有効</TabsTrigger>
        <TabsTrigger value="disabled" disabled>無効</TabsTrigger>
        <TabsTrigger value="another">もう一つ</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p className="text-sm text-muted-foreground">このタブは有効です。</p>
      </TabsContent>
      <TabsContent value="another">
        <p className="text-sm text-muted-foreground">このタブも有効です。</p>
      </TabsContent>
    </Tabs>
  ),
};
