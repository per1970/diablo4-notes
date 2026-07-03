import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * Site: Diablo 4 Knowledge Vault
 * Vault: C:\Users\perkr\OneDrive\Documents\Obsidian\Games\Diablo 4
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "D4 Vault",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "per1970.github.io/diablo4-notes", // ← change to your actual GitHub Pages URL
    ignorePatterns: [
      "private",
      "Templates",
      ".obsidian",
      "**/*.canvas",
    ],
    defaultDateType: "modified",
    theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Cinzel",
    body: "Source Sans 3",
    code: "JetBrains Mono",
  },
  colors: {
    lightMode: {
      light:         "#f9f6f0",   // parchment background
      lightgray:     "#e8e2d8",   // borders
      gray:          "#9a9080",   // muted text
      darkgray:      "#3a3228",   // body text
      dark:          "#1a1510",   // headings
      secondary:     "#7a2020",   // crimson — links & accents
      tertiary:      "#5a4a28",   // gold — hover states
      highlight:     "rgba(180,140,80,0.12)",
      textHighlight: "#ffeaa0",
    },
    darkMode: {
      // Set identical to lightMode to force parchment everywhere
      // OR keep your original dark values if you want dark mode
      light:         "#f9f6f0",
      lightgray:     "#e8e2d8",
      gray:          "#9a9080",
      darkgray:      "#3a3228",
      dark:          "#1a1510",
      secondary:     "#7a2020",
      tertiary:      "#5a4a28",
      highlight:     "rgba(180,140,80,0.12)",
      textHighlight: "#ffeaa0",
    },
  },
},
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        prettyLinks: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config