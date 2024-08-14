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
          collapsible: true,
          children: "structure",
        },
        {
          text: "快速开始",
          prefix: "quick-start/",
          collapsible: true,
          children: [
            {
              text: "开发流程",
              link: "process",
            },
            {
              text: "代码生成",
              prefix: "codegen/",
              children: "structure",
            },
            {
              text: "额外生成",
              prefix: "extra/",
              children: "structure",
            },
            {
              text: "Core开发",
              prefix: "core/",
              children: "structure",
            },
          ],
        },
        {
          text: "功能列表",
          prefix: "feature/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "持续集成 CI/CD",
          prefix: "cicd/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "官方模块",
          prefix: "official-comp/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "社区模块",
          prefix: "community-comp/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "会员权益",
          link: "member",
        },
        {
          text: "版本升级",
          link: "upgrade",
        },
        {
          text: "常见问题",
          link: "FAQ",
        },
      ],
    },
  ],
});
