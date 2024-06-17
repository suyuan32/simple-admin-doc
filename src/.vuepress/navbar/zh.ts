import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文档",
    icon: "mingcute:book-line",
    link: "/zh/guide/README.md",
  },
  {
    text: "在线预览",
    icon: "ic:baseline-laptop",
    children: [
      {
        text: "Simple Admin",
        icon: "ic:baseline-laptop",
        link: "https://preview.ryansu.tech/",
      },
      {
        text: "Simple Admin 多租户版",
        icon: "ic:baseline-laptop",
        link: "https://tenant-preview.ryansu.tech/",
      },
    ],
  },
  {
    text: "其他文档",
    icon: "iconoir:book",
    children: [
      {
        text: "Ent 中文文档",
        icon: "iconoir:book",
        link: "https://ent.ryansu.tech/#/",
      },
      {
        text: "Go Zero 文档",
        icon: "iconoir:book",
        link: "https://go-zero.dev/",
      },
      {
        text: "Vben Admin 文档",
        icon: "iconoir:book",
        link: "https://vben.ryansu.tech/",
      },
      {
        text: "Go Swagger 文档",
        icon: "iconoir:book",
        link: "https://goswagger.io/",
      },
      {
        text: "Ant Design Vue 文档",
        icon: "iconoir:book",
        link: "https://antdv.com/components/overview",
      },
    ],
  },
  {
    text: "Github 仓库",
    icon: "material-symbols:box-outline",
    children: [
      {
        text: "Simple Admin Core",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-core",
      },
      {
        text: "Simple Admin Backend UI",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-backend-ui",
      },
      {
        text: "Simple Admin File Manager",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-file",
      },
      {
        text: "Simple Admin Tools",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-tools",
      },
      {
        text: "Simple Admin Job",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-job",
      },
      {
        text: "Simple Admin Common",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-common",
      },
    ],
  },
  {
    text: "视频教程",
    icon: "ph:video-bold",
    link: "https://space.bilibili.com/9872669/channel/series",
  },
  {
    text: "面试宝典",
    icon: "ion:book-outline",
    link: "https://goguide.ryansu.tech/",
  },
]);
