import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@lib/components/badge";
import { Check, AlertCircle, Clock, Zap } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "バッジのスタイルバリエーション",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "バッジ",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "セカンダリー",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "削除",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "アウトライン",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Zap />
        新機能
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">新着</Badge>
      <Badge variant="secondary">AI</Badge>
      <Badge variant="destructive">終了</Badge>
      <Badge variant="outline">ベータ版</Badge>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">ステータス表示</h3>
        <div className="flex gap-2">
          <Badge className="bg-green-500 hover:bg-green-500/90">
            <Check className="size-3" />
            公開中
          </Badge>
          <Badge variant="secondary">
            <Clock className="size-3" />
            下書き
          </Badge>
          <Badge variant="destructive">
            <AlertCircle className="size-3" />
            非公開
          </Badge>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">カテゴリタグ</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">AI</Badge>
          <Badge variant="outline">機械学習</Badge>
          <Badge variant="outline">データ分析</Badge>
          <Badge variant="outline">DX</Badge>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">通知バッジ</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">メッセージ</span>
          <Badge className="rounded-full min-w-5 justify-center px-1.5">3</Badge>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">優先度</h3>
        <div className="flex gap-2">
          <Badge variant="destructive">高</Badge>
          <Badge variant="default">中</Badge>
          <Badge variant="secondary">低</Badge>
        </div>
      </div>
    </div>
  ),
};
