import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@lib/components/switch";
import { Label } from "@lib/components/label";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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
      description: "初期状態",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

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
    <div className="flex items-center gap-3">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">機内モード</Label>
    </div>
  ),
};

export const SettingsExample: Story = {
  render: () => (
    <div className="w-[300px] divide-y">
      <div className="flex justify-between items-center py-3">
        <div>
          <p className="font-medium text-sm">通知</p>
          <p className="text-xs text-muted-foreground mt-1">
            プッシュ通知を受け取る
          </p>
        </div>
        <Switch defaultChecked />
      </div>
      <div className="flex justify-between items-center py-3">
        <div>
          <p className="font-medium text-sm">ダークモード</p>
          <p className="text-xs text-muted-foreground mt-1">
            暗いテーマを使用
          </p>
        </div>
        <Switch />
      </div>
      <div className="flex justify-between items-center py-3">
        <div>
          <p className="font-medium text-sm">自動保存</p>
          <p className="text-xs text-muted-foreground mt-1">
            変更を自動的に保存
          </p>
        </div>
        <Switch defaultChecked />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">通常</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch id="state-off" />
            <Label htmlFor="state-off">OFF</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="state-on" defaultChecked />
            <Label htmlFor="state-on">ON</Label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">無効</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off" className="text-muted-foreground">OFF</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on" className="text-muted-foreground">ON</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};
