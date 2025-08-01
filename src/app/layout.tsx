import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	icons: {
		icon: "/favicon.png",
		apple: "/favicon.png",
	},
	title: {
		default: "Chafik GHOURABI - Mobile React Native Developer",
		template: "%s | Chafik GHOURABI Portfolio",
	},
	description:
		"Experienced Mobile React Native Developer specializing in cross-platform mobile applications. Portfolio showcasing innovative mobile solutions, technical expertise, and professional experience.",
	keywords: [
		"React Native Developer",
		"Mobile App Developer",
		"Expo Developer",
		"Cross-platform Development",
		"iOS Developer",
		"Android Developer",
		"JavaScript",
		"TypeScript",
		"Mobile Applications",
		"Chafik GHOURABI",
	],
	authors: [{ name: "Chafik GHOURABI" }],
	creator: "Chafik GHOURABI",
	publisher: "Chafik GHOURABI",
	metadataBase: new URL("https://portfolio-umber-nine-j8befgo8i9.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://portfolio-umber-nine-j8befgo8i9.vercel.app",
		title: "Chafik GHOURABI - Mobile React Native Developer",
		description:
			"Experienced Mobile React Native Developer specializing in cross-platform mobile applications. Portfolio showcasing innovative mobile solutions and technical expertise.",
		siteName: "Chafik GHOURABI Portfolio",
		images: [
			{
				url: "/images/my-image-old.jpg",
				width: 1200,
				height: 630,
				alt: "Chafik GHOURABI - Mobile React Native Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Chafik GHOURABI - Mobile React Native Developer",
		description:
			"Experienced Mobile React Native Developer specializing in cross-platform mobile applications.",
		images: [], // Same image as Open Graph
		creator: "@chafikghourabi",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "xZntRqNCZ3Zar5dZp6-hn5l1Vtz_SxaXfV7-lbvARU8", // Add when you set up Google Search Console
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="icon" href="/favicon.png" type="image/png" />
				<link rel="apple-touch-icon" href="/favicon.png" />
				<link rel="apple-touch-icon" href="/favicon.svg" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="google-site-verification"
					content="xZntRqNCZ3Zar5dZp6-hn5l1Vtz_SxaXfV7-lbvARU8"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Chafik GHOURABI",
							jobTitle: "Mobile React Native Developer",
							description:
								"Experienced Mobile React Native Developer specializing in cross-platform mobile applications",
							url: "https://portfolio-umber-nine-j8befgo8i9.vercel.app",
							sameAs: [
								"https://linkedin.com/in/chafik-ghourabi-2888031b3",
								"https://github.com/ChafikGhourabi",
								"https://twitter.com/chafikghourabi",
							],
							knowsAbout: [
								"React Native",
								"Expo",
								"Mobile Development",
								"Cross-platform Development",
								"JavaScript",
								"TypeScript",
								"iOS Development",
								"Android Development",
							],
							worksFor: {
								"@type": "Organization",
								name: "Freelance",
							},
						}),
					}}
				/>
			</head>
			<body className="font-body antialiased">
				{children}
				<Toaster />
			</body>
		</html>
	);
}
