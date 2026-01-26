import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@lib/components/select";
import { Label } from "@lib/components/label";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="選択してください" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">オプション1</SelectItem>
        <SelectItem value="option2">オプション2</SelectItem>
        <SelectItem value="option3">オプション3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="service">サービス</Label>
      <Select>
        <SelectTrigger id="service" className="w-[250px]">
          <SelectValue placeholder="サービスを選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="consulting">AIコンサルティング</SelectItem>
          <SelectItem value="development">AI開発支援</SelectItem>
          <SelectItem value="training">AI研修</SelectItem>
          <SelectItem value="support">運用サポート</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="担当者を選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>営業部</SelectLabel>
          <SelectItem value="tanaka">田中 太郎</SelectItem>
          <SelectItem value="suzuki">鈴木 花子</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>開発部</SelectLabel>
          <SelectItem value="sato">佐藤 一郎</SelectItem>
          <SelectItem value="yamada">山田 次郎</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <Select>
      <SelectTrigger size="sm" className="w-[180px]">
        <SelectValue placeholder="選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">オプション1</SelectItem>
        <SelectItem value="2">オプション2</SelectItem>
        <SelectItem value="3">オプション3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="無効" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">オプション1</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="development">
      <SelectTrigger className="w-[250px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="consulting">AIコンサルティング</SelectItem>
        <SelectItem value="development">AI開発支援</SelectItem>
        <SelectItem value="training">AI研修</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <div className="flex flex-col gap-2">
        <Label>お問い合わせ種別</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="種別を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inquiry">サービスについて</SelectItem>
            <SelectItem value="quote">お見積もり依頼</SelectItem>
            <SelectItem value="support">サポート</SelectItem>
            <SelectItem value="other">その他</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>ご予算</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="予算を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under100">100万円未満</SelectItem>
            <SelectItem value="100-500">100万円〜500万円</SelectItem>
            <SelectItem value="500-1000">500万円〜1000万円</SelectItem>
            <SelectItem value="over1000">1000万円以上</SelectItem>
            <SelectItem value="unknown">未定</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};
