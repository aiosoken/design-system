import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@lib/components/input";
import { Label } from "@lib/components/label";
import { Search, Mail, Eye, EyeOff, User } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@lib/components/button";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "入力タイプ",
    },
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "テキストを入力",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="email">メールアドレス</Label>
      <Input id="email" type="email" placeholder="example@aio-soken.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "無効な入力",
    disabled: true,
  },
};

export const WithIconLeft: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <Input className="pl-9" placeholder="検索..." />
    </div>
  ),
};

export const WithIconRight: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Input className="pr-9" placeholder="ユーザー名" />
      <User className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
    </div>
  ),
};

export const Password: Story = {
  render: function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="relative w-[300px]">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="パスワードを入力"
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute right-1 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </Button>
      </div>
    );
  },
};

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="error-input">メールアドレス</Label>
      <Input
        id="error-input"
        type="email"
        placeholder="example@aio-soken.com"
        aria-invalid="true"
        defaultValue="invalid-email"
      />
      <p className="text-xs text-destructive">
        有効なメールアドレスを入力してください
      </p>
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="username">ユーザー名</Label>
      <Input
        id="username"
        placeholder="aiosoken_user"
      />
      <p className="text-xs text-muted-foreground">
        半角英数字とアンダースコアのみ使用できます
      </p>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[300px]">
      <div className="flex flex-col gap-2">
        <Label>通常の入力</Label>
        <Input placeholder="テキストを入力" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>メールアドレス</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input type="email" className="pl-9" placeholder="example@aio-soken.com" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label>パスワード</Label>
        <Input type="password" placeholder="パスワード" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>数値</Label>
        <Input type="number" placeholder="0" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>無効</Label>
        <Input placeholder="無効な入力" disabled />
      </div>
      <div className="flex flex-col gap-2">
        <Label>エラー</Label>
        <Input placeholder="エラー状態" aria-invalid="true" />
      </div>
    </div>
  ),
};
