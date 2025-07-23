import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";

const experiences = [
	{
		role: "Mobile Developer",
		company: "Satoripop | Sousse, Tunisia",
		period: "October 2022 - Present",
		description:
			"Lead mobile application development across diverse industry verticals, architecting scalable solutions with React Native and Expo. Drive cross-functional collaboration within agile teams, working closely with UI/UX designers, QA engineers, and backend developers. Manage end-to-end app lifecycle including App Store and Google Play deployment, version control, and production maintenance. Spearhead automation initiatives by implementing cutting-edge workflows using n8n and AI-driven solutions.",
	},
	{
		role: "Intern Mobile Developer",
		company: "Satoripop | Sousse, Tunisia",
		period: "February 2022 - August 2022",
		description:
			"Architected and developed a comprehensive telehealth mobile application featuring real-time video consultations and secure messaging capabilities. Successfully transformed complex UI/UX mockups into pixel-perfect components. Seamlessly integrated third-party services including Firebase for backend infrastructure and Voximplant for high-quality voice/video communication.",
	},
];

export function Experience() {
	return (
		<section id="experience" className="py-20 sm:py-32 bg-secondary">
			<div className="container mx-auto px-4">
				<h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
					Professional Experience
				</h2>
				<div className="relative max-w-3xl mx-auto pl-8 md:pl-10">
					<div className="absolute left-0 top-0 bottom-0 w-1 bg-border rounded-full md:left-4"></div>
					{experiences.map((exp, index) => (
						<div key={index} className="relative mb-8">
							<div className="absolute left-0 top-2 -translate-x-[calc(50%-2px)] h-4 w-4 rounded-full bg-primary border-4 border-background md:left-4"></div>
							<Card className="ml-4 md:ml-8">
								<CardHeader>
									<div className="flex flex-col md:flex-row justify-between items-start gap-2">
										<div>
											<CardTitle className="font-headline text-xl">
												{exp.role}
											</CardTitle>
											<CardDescription>{exp.company}</CardDescription>
										</div>
										<p className="text-sm text-muted-foreground shrink-0 pt-1">
											{exp.period}
										</p>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{exp.description}</p>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
