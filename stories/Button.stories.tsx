import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@lib/components/button";
import { Mail, Download, ArrowRight, Loader2, Plus, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "ボタンのスタイルバリエーション",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
      description: "ボタンのサイズ",
    },
    disabled: {
      control: "boolean",
      description: "無効状態",
    },
    asChild: {
      control: "boolean",
      description: "子要素としてレンダリング",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "ボタン",
  },
};

export const Primary: Story = {
  args: {
    variant: "default",
    children: "プライマリーボタン",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "セカンダリーボタン",
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

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "ゴースト",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "リンク",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "小さいボタン",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "大きいボタン",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail />
        メールを送信
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    variant: "outline",
    children: <Download />,
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        読み込み中...
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "無効なボタン",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">バリエーション</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">サイズ</h3>
        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">アイコン付き</h3>
        <div className="flex items-center gap-2">
          <Button>
            <Mail />
            メール送信
          </Button>
          <Button variant="secondary">
            詳細を見る
            <ArrowRight />
          </Button>
          <Button variant="outline" size="icon">
            <Download />
          </Button>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">アイコンサイズ</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon-sm">
            <Plus />
          </Button>
          <Button variant="outline" size="icon">
            <Plus />
          </Button>
          <Button variant="outline" size="icon-lg">
            <Plus />
          </Button>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">状態</h3>
        <div className="flex items-center gap-2">
          <Button disabled>
            <Loader2 className="animate-spin" />
            読み込み中
          </Button>
          <Button variant="destructive">
            <Trash2 />
            削除する
          </Button>
        </div>
      </div>
    </div>
  ),
};
