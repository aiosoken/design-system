import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@lib/components/checkbox";
import { Label } from "@lib/components/label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "無効状態",
    },
    defaultChecked: {
      control: "boolean",
      description: "初期チェック状態",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">利用規約に同意する</Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">ニュースレターを受け取る</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="updates" />
        <Label htmlFor="updates">製品アップデートを受け取る</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">マーケティング情報を受け取る</Label>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">通常</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="normal-off" />
            <Label htmlFor="normal-off">未選択</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="normal-on" defaultChecked />
            <Label htmlFor="normal-on">選択済み</Label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">無効</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-off" disabled />
            <Label htmlFor="disabled-off" className="text-muted-foreground">未選択</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on" className="text-muted-foreground">選択済み</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};
