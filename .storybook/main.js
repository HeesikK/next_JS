/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require("path");

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-onboarding", "@storybook/addon-links", "@storybook/addon-essentials", "@chromatic-com/storybook", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [path.resolve(__dirname, "../public")], // 절대 경로로 수정
};

export default config;
