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
          children: 'structure',
        },
        {
          text: "Quick Start",
          prefix: "quick-start/",
          children: [
            {
              text: "Develop Process",
              link: "process"
            },
            {
              text: "Contribute To Core Service",
              prefix: "core/",
              children: "structure"
            },
            {
              text: "Code Generation",
              prefix: "codegen/",
              children: "structure"
            },
            {
              text: "Preview with docker-compose",
              link: "all_in_one"
            },
          ]
        },
        {
          text: "Features",
          prefix: "feature/",
          children: "structure"
        },
        {
          text: "Official Modules",
          prefix: "official-comp/",
          children: "structure"
        },
        {
          text: "FAQ",
          link: "FAQ"
        },
      ],
    },
  ],
});
