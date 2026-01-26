import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@lib/components/textarea";
import { Label } from "@lib/components/label";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "プレースホルダー",
    },
    disabled: {
      control: "boolean",
      description: "無効状態",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "メッセージを入力...",
    className: "w-[300px]",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="message">お問い合わせ内容</Label>
      <Textarea
        id="message"
        placeholder="ご質問やご要望をお書きください..."
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "無効な入力",
    disabled: true,
    className: "w-[300px]",
  },
};

export const WithHelperText: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="description">説明</Label>
      <Textarea
        id="description"
        placeholder="プロジェクトの概要を入力..."
      />
      <p className="text-xs text-muted-foreground">
        500文字以内で入力してください
      </p>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="error-textarea">お問い合わせ内容</Label>
      <Textarea
        id="error-textarea"
        placeholder="内容を入力..."
        aria-invalid="true"
      />
      <p className="text-xs text-destructive">
        この項目は必須です
      </p>
    </div>
  ),
};

export const WithMaxLength: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="limited">フィードバック</Label>
      <Textarea
        id="limited"
        placeholder="ご意見をお聞かせください..."
        maxLength={200}
      />
      <p className="text-xs text-muted-foreground text-right">
        0/200
      </p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[400px]">
      <div className="flex flex-col gap-2">
        <Label htmlFor="project-overview">プロジェクト概要</Label>
        <Textarea
          id="project-overview"
          placeholder="プロジェクトの目的や背景をお書きください..."
          className="min-h-[100px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="requirements">ご要望</Label>
        <Textarea
          id="requirements"
          placeholder="具体的なご要望があればお書きください..."
          className="min-h-[100px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="remarks">備考</Label>
        <Textarea
          id="remarks"
          placeholder="その他、お伝えしたいことがあればお書きください..."
        />
        <p className="text-xs text-muted-foreground">任意</p>
      </div>
    </div>
  ),
};
