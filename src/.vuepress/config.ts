import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { cut } from "@node-rs/jieba";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

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

  head: [
    [
      "script",
      {
        charset: "UTF-8",
        id: "LA_COLLECT",
        src: "//sdk.51.la/js-sdk-pro.min.js",
      },
    ],
    ["script", {}, `LA.init({id:"Jw6Oc7YXX4TYmO1Y",ck:"Jw6Oc7YXX4TYmO1Y"})`],
  ],

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      indexLocaleOptions: {
        "/zh/": {
          // 使用 nodejs-jieba 进行分词
          tokenize: (text, fieldName) =>
            fieldName === "id" ? [text] : cut(text, true),
        },
      },
      locales: {
        "/zh/": {
          placeholder: " 开始搜索",
        },
      },
    }),
  ],
});
