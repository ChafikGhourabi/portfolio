"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

export function Intro() {
	const handleDownloadCV = () => {
		const link = document.createElement("a");
		link.href = "/documents/chafik-ghourabi-resume.pdf";
		link.download = "Chafik_GHOURABI_CV.pdf";
		link.click();
	};

	return (
		<section
			id="intro"
			className="py-20 sm:py-32 bg-secondary"
			aria-label="Introduction"
		>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
					<div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
						<h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
							Chafik GHOURABI
						</h1>
						<h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">
							Mobile React Native Developer
						</h2>
						<p
							className="text-lg text-muted-foreground mb-8 max-w-xl"
							role="banner"
						>
							I specialize in building beautiful and performant cross-platform
							mobile applications with React Native. With over 3 years of
							experience, I transform ideas into engaging user experiences,
							focusing on clean code and cutting-edge technologies like
							TypeScript and Redux.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button size="lg" onClick={handleDownloadCV}>
								<Download className="mr-2 h-5 w-5" />
								Download CV
							</Button>
							<Button size="lg" variant="outline" asChild>
								<a
									href="https://github.com/ChafikGhourabi"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-5 w-5" />
									GitHub
								</a>
							</Button>
						</div>
					</div>
					<div className="flex justify-center order-1 md:order-2">
						<Image
							src="/images/my-image-old.jpg"
							alt="Chafik GHOURABI"
							width={400}
							height={400}
							className="rounded-full shadow-lg"
							data-ai-hint="professional developer portrait"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
