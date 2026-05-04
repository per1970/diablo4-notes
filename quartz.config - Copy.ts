import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * Site: Diablo 4 Season 13 Notes
 * Vault: C:\Users\perkr\OneDrive\Documents\Obsidian\Games\Diablo 4
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "D4 Season 13 Notes",
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
        header: "Cinzel",         // Fantasy/gothic feel fitting Diablo
        body: "Source Sans Pro",  // Clean readable body text
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f0e8",        // Parchment background
          lightgray: "#e0d8cc",
          gray: "#9e8f7a",
          darkgray: "#3d2b1f",
          dark: "#1a0a00",
          secondary: "#8b1a1a",    // Deep red — Diablo theme
          tertiary: "#c0392b",
          highlight: "rgba(139, 26, 26, 0.12)",
          textHighlight: "#fff176",
        },
        darkMode: {
          light: "#1a0e0a",        // Very dark background
          lightgray: "#2a1a12",
          gray: "#6b4f3a",
          darkgray: "#c8b89a",
          dark: "#f0e6d3",
          secondary: "#c0392b",    // Diablo red
          tertiary: "#e74c3c",
          highlight: "rgba(192, 57, 43, 0.15)",
          textHighlight: "#b34700",
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