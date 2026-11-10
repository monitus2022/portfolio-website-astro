import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro) & the webmanifest name.
	author: "Tommy Cheung",
	// Used as the default description meta property and webmanifest description.
	description:
		"AI Engineer with a data science background, building practical LLM, ML, and MLOps systems. Open to AI/ML engineering roles.",
	// HTML lang property, found in src/layouts/Base.astro.
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro.
	ogLocale: "en_GB",
	// Used for the meta title, webmanifest name, header wordmark, and footer.
	title: "Tommy Cheung",
	// Used to build canonical URLs and sitemap entries.
	url: "https://monitus.org",
};

// Used to generate the primary navigation in the Header.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/projects/",
		title: "Projects",
	},
	{
		path: "/about/",
		title: "About",
	},
	{
		path: "/contact/",
		title: "Contact",
	},
];

// Secondary destinations. These are intentionally kept out of the primary nav so
// the site stays focused on the public profile.
export const resourceLinks: { path: string; title: string; external?: boolean }[] = [
	{
		path: "https://notes.monitus.org",
		title: "Study Notes",
		external: true,
	},
	{
		path: "https://code.monitus.org",
		title: "Code Cheatsheets",
		external: true,
	},
];

// Shown on the Contact page behind a reveal button to reduce harvesting.
export const contactEmail = "monitus202201@proton.me";

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
