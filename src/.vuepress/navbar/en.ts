import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Document",
    icon: "mingcute:book-line",
    link: "/guide/README.md",
  },
  {
    text: "Online Preview",
    icon: "ic:baseline-laptop",
    children: [
      {
        text: "Simple Admin",
        icon: "ic:baseline-laptop",
        link: "https://preview.ryansu.tech/",
      },
      {
        text: "Simple Admin Tenant Version",
        icon: "ic:baseline-laptop",
        link: "https://tenant-preview.ryansu.tech/",
      },
    ],
  },
  {
    text: "Other Documents",
    icon: "iconoir:book",
    children: [
      {
        text: "Ent Document",
        icon: "iconoir:book",
        link: "https://entgo.io/docs/getting-started",
      },
      {
        text: "Go Zero Document",
        icon: "iconoir:book",
        link: "https://go-zero.dev/",
      },
      {
        text: "Vben Admin Document",
        icon: "iconoir:book",
        link: "https://vben.ryansu.tech/",
      },
      {
        text: "Go Swagger Document",
        icon: "iconoir:book",
        link: "https://goswagger.io/",
      },
      {
        text: "Ant Design Vue Document",
        icon: "iconoir:book",
        link: "https://antdv.com/components/overview",
      },
    ],
  },
  {
    text: "Github Repo",
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
    text: "Video Tutorial",
    icon: "ph:video-bold",
    link: "https://www.youtube.com/channel/UCBisP_LYu9ietKS3FtCnmcA",
  },
  {
    text: "Interview Guide",
    icon: "ion:book-outline",
    link: "https://goguide.ryansu.tech/en/",
  },
]);
