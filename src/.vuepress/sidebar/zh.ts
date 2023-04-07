import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "文档",
      icon: "fa-solid fa-book",
      prefix: "guide/",
      children: [
        {
          text: "基本配置",
          prefix: "basic-config/",
          children: "structure",
        },
        {
          text: "快速开始",
          prefix: "quick-start/",
          children: [
            {
              text: "开发流程",
              link: "process",
            },
            {
              text: "为core贡献代码",
              prefix: "core/",
              children: "structure",
            },
            {
              text: "代码生成",
              prefix: "codegen/",
              children: "structure",
            },
            {
              text: "额外生成命令",
              prefix: "extra/",
              children: "structure",
            },
            {
              text: "快速体验docker-compose",
              link: "all_in_one",
            },
          ],
        },
        {
          text: "功能列表",
          prefix: "feature/",
          children: "structure",
        },
        {
          text: "官方模块",
          prefix: "official-comp/",
          children: "structure",
        },
        {
          text: "常见问题",
          link: "FAQ",
        },
      ],
    },
  ],
});
