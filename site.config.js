const CONFIG = {
  // profile setting (required)
  profile: {
    name: "chaitanya allu",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "a grad student & backend developer",
    bio: "i design & code software systems",
    personalEmail: "chaitanyaa1999@gmail.com",
    schoolEmail: "ca96y@umkc.edu",
    linkedin: "chaitanyaallu",
    github: "csk731",
    instagram: "",
  },
  projects: [
    {
      name: `download-my-resume(.pdf)`,
      href: "https://docs.google.com/document/export?format=pdf&id=1Qfx0tJyCGO6RzFNEjy61U6qV9LEDmMMm4p8t-xwN-mM&includes_info_params=true&cros_files=false&inspectorResult=%7B%22pc%22%3A1%2C%22lplc%22%3A55%7D",
    },
  ],
  // blog setting (required)
  blog: {
    title: "chaitanya's portfolio",
    description: "welcome to my portfolio!",
  },

  // CONFIG configration (required)
  link: "https://chaitanyaallu.dev",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
