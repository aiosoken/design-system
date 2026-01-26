import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming/create";
import "../lib/styles.css";

const docsTheme = create({
  base: "light",
  brandTitle: "AIO総研 Design System",
  brandUrl: "https://aiosoken.com",
  brandImage: "/アセット16@2x.png",
  brandTarget: "_blank",
  colorPrimary: "#F25533",
  colorSecondary: "#3054AD",
  appBg: "#FAFAFA",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E5E5E5",
  appBorderRadius: 8,
  textColor: "#1A1A1A",
  textMutedColor: "#666666",
  barTextColor: "#666666",
  barSelectedColor: "#3054AD",
  barBg: "#FFFFFF",
  inputBg: "#FFFFFF",
  inputBorder: "#E5E5E5",
  inputTextColor: "#1A1A1A",
  inputBorderRadius: 6,
  fontBase: '"Inter", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',
});

const preview: Preview = {
  parameters: {
    docs: {
      theme: docsTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1A1A1A" },
        { name: "orange-light", value: "#FDEAE5" },
        { name: "blue-dark", value: "#28366E" },
      ],
    },
  },
};

export default preview;
