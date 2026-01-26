import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",

  // Brand
  brandTitle: "AIO総研 Design System",
  brandUrl: "https://aiosoken.com",
  brandImage: "/アセット16@2x.png",
  brandTarget: "_blank",

  // Colors
  colorPrimary: "#F25533", // AIO Orange
  colorSecondary: "#3054AD", // AIO Blue

  // UI
  appBg: "#FAFAFA",
  appContentBg: "#FFFFFF",
  appPreviewBg: "#FFFFFF",
  appBorderColor: "#E5E5E5",
  appBorderRadius: 8,

  // Text colors
  textColor: "#1A1A1A",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#666666",

  // Toolbar
  barTextColor: "#666666",
  barSelectedColor: "#3054AD",
  barHoverColor: "#F25533",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#E5E5E5",
  inputTextColor: "#1A1A1A",
  inputBorderRadius: 6,

  // Button
  buttonBg: "#F5F5F5",
  buttonBorder: "#E5E5E5",

  // Boolean
  booleanBg: "#E5E5E5",
  booleanSelectedBg: "#3054AD",

  // Typography
  fontBase: '"Inter", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
