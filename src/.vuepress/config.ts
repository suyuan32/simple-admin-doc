import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/simple-admin-doc/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Simple Admin",
      description: "The document website for simple admin.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Simple Admin",
      description: "Simple Admin的文档网站",
    },
  },

  theme,

  shouldPrefetch: false,
});
