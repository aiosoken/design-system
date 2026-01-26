import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@lib/components/dialog";
import { Button } from "@lib/components/button";
import { Input } from "@lib/components/input";
import { Label } from "@lib/components/label";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>ダイアログを開く</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ダイアログタイトル</DialogTitle>
          <DialogDescription>
            ダイアログの説明文がここに入ります。
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">ダイアログのメインコンテンツです。</p>
        <DialogFooter>
          <Button variant="outline">キャンセル</Button>
          <Button>確認</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ConfirmDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">削除</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="size-5 text-destructive" />
            本当に削除しますか?
          </DialogTitle>
          <DialogDescription>
            この操作は取り消せません。データは完全に削除されます。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">キャンセル</Button>
          <Button variant="destructive">削除する</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const FormDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>プロフィールを編集</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>プロフィールを編集</DialogTitle>
          <DialogDescription>
            プロフィール情報を変更して保存してください。
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-name">名前</Label>
            <Input id="edit-name" defaultValue="山田 太郎" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-email">メールアドレス</Label>
            <Input id="edit-email" type="email" defaultValue="yamada@example.com" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">キャンセル</Button>
          <Button>保存</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const InfoDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Info className="size-4" />
          詳細を見る
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AIコンサルティングサービス</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            AIO総研のAIコンサルティングサービスは、企業のAI導入を包括的に支援します。
          </p>
          <h4 className="font-semibold text-sm">サービス内容</h4>
          <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
            <li>現状分析と課題抽出</li>
            <li>AI導入戦略の策定</li>
            <li>PoC開発支援</li>
            <li>本番環境への展開</li>
            <li>運用・保守サポート</li>
          </ul>
        </div>
        <DialogFooter>
          <Button>お問い合わせ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SuccessDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">送信完了を表示</Button>
      </DialogTrigger>
      <DialogContent className="text-center">
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="size-8 text-green-600" />
          </div>
          <DialogHeader className="text-center">
            <DialogTitle>送信が完了しました</DialogTitle>
            <DialogDescription>
              お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。
            </DialogDescription>
          </DialogHeader>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button>閉じる</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
