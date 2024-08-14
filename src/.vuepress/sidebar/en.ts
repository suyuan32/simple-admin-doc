import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Document",
      icon: "fa-solid fa-book",
      prefix: "guide/",
      children: [
        {
          text: "Basic Configuration",
          prefix: "basic-config/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Quick Start",
          prefix: "quick-start/",
          collapsible: true,
          children: [
            {
              text: "Development Process",
              link: "process",
            },
            {
              text: "Code Generation",
              prefix: "codegen/",
              children: "structure",
            },
            {
              text: "Extra Generation",
              prefix: "extra/",
              children: "structure",
            },
            {
              text: "Core Development",
              prefix: "core/",
              children: "structure",
            },
          ],
        },
        {
          text: "Features",
          prefix: "feature/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "CI/CD",
          prefix: "cicd/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Official Modules",
          prefix: "official-comp/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Community Module",
          prefix: "community-comp/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Membership Benefits",
          link: "member",
        },
        {
          text: "Version Upgrade",
          link: "upgrade",
        },
        {
          text: "FAQ",
          link: "FAQ",
        },
      ],
    },
  ],
});
