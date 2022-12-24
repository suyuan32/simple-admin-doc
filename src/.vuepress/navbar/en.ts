import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Document",
    icon: "fa-solid fa-book",
    link: "/guide/"
  },
  {
    text: "Online Preview",
    icon: "fa-regular fa-laptop",
    link: "http://101.132.124.135/login"
  },
  {
    text: "Other Documents",
    icon: "fa-solid fa-book",
    children: [
      {
        text: "Ent Document",
        icon: "fa-solid fa-book",
        link: "https://entgo.io/docs/getting-started"
      },
      {
        text: "Go Zero Document",
        icon: "fa-solid fa-book",
        link: "https://go-zero.dev/"
      },
      {
        text: "Vben Admin Document",
        icon: "fa-solid fa-book",
        link: "https://doc.vvbin.cn/"
      },
      {
        text: "Go Swagger Document",
        icon: "fa-solid fa-book",
        link: "https://goswagger.io/"
      },
      {
        text: "Ant Design Vue Document",
        icon: "fa-solid fa-book",
        link: "https://antdv.com/components/overview"
      },
    ]
  },
]);
