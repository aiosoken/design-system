import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@lib/components/alert";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "アラートのバリエーション",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Info className="size-4" />
      <AlertTitle>お知らせ</AlertTitle>
      <AlertDescription>
        システムメンテナンスを予定しています。
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="size-4" />
      <AlertTitle>エラー</AlertTitle>
      <AlertDescription>
        入力内容に問題があります。確認してください。
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert className="w-[400px] border-green-500 text-green-700 [&>svg]:text-green-600">
      <CheckCircle2 className="size-4" />
      <AlertTitle>完了</AlertTitle>
      <AlertDescription className="text-green-600">
        データの保存が完了しました。
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert className="w-[400px] border-yellow-500 text-yellow-700 [&>svg]:text-yellow-600">
      <AlertTriangle className="size-4" />
      <AlertTitle>警告</AlertTitle>
      <AlertDescription className="text-yellow-600">
        この操作は元に戻せません。
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Alert>
        <Info className="size-4" />
        <AlertTitle>お知らせ</AlertTitle>
        <AlertDescription>
          新機能が追加されました。
        </AlertDescription>
      </Alert>

      <Alert className="border-green-500 text-green-700 [&>svg]:text-green-600">
        <CheckCircle2 className="size-4" />
        <AlertTitle>成功</AlertTitle>
        <AlertDescription className="text-green-600">
          処理が正常に完了しました。
        </AlertDescription>
      </Alert>

      <Alert className="border-yellow-500 text-yellow-700 [&>svg]:text-yellow-600">
        <AlertTriangle className="size-4" />
        <AlertTitle>警告</AlertTitle>
        <AlertDescription className="text-yellow-600">
          セッションが間もなく期限切れになります。
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>エラー</AlertTitle>
        <AlertDescription>
          通信エラーが発生しました。
        </AlertDescription>
      </Alert>
    </div>
  ),
};
