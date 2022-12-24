import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文档",
    icon: "fa-solid fa-book",
    link: "/zh/guide/"
  },
  {
    text: "在线预览",
    icon: "fa-regular fa-laptop",
    link: "http://101.132.124.135/login"
  },
  {
    text: "其他文档",
    icon: "fa-solid fa-book",
    children: [
      {
        text: "Ent 中文文档",
        icon: "fa-solid fa-book",
        link: "https://ent.ryansu.pro/#/"
      },
      {
        text: "Go Zero 文档",
        icon: "fa-solid fa-book",
        link: "https://go-zero.dev/"
      },
      {
        text: "Vben Admin 文档",
        icon: "fa-solid fa-book",
        link: "https://doc.vvbin.cn/"
      },
      {
        text: "Go Swagger 文档",
        icon: "fa-solid fa-book",
        link: "https://goswagger.io/"
      },
      {
        text: "Ant Design Vue 文档",
        icon: "fa-solid fa-book",
        link: "https://antdv.com/components/overview"
      },
    ]
  }
  
]);
