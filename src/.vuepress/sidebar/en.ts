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
          children: "structure",
        },
        {
          text: "Quick Start",
          prefix: "quick-start/",
          children: [
            {
              text: "Develop Process",
              link: "process",
            },
            {
              text: "Contribute To Core",
              prefix: "core/",
              children: "structure",
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
          ],
        },
        {
          text: "Features",
          prefix: "feature/",
          children: "structure",
        },
        {
          text: "Official Modules",
          prefix: "official-comp/",
          children: "structure",
        },
        {
          text: "FAQ",
          link: "FAQ",
        },
      ],
    },
  ],
});
