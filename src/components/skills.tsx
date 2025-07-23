import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, Code, Users } from "lucide-react";
import { SkillHighlighter } from "./skill-highlighter";

const techSkills = [
	"React Native",
	"React",
	"Expo",
	"JavaScript",
	"TypeScript",
	"Java",
	"Swift",
	"Native Module",
	"Android",
	"iOS",
	"App Store",
	"Google Play",
	"Redux / Redux Toolkit",
	"Zustand",
	"RTK Query",
	"React Query",
	"Node.js",
	"NestJS",
	"NextJS",
	"REST APIs",
	"GraphQL",
	"WebSocket",
	"Firebase",
	"Supabase",
	"Git",
	"CI/CD",
	"GitHub Actions",
	"EAS Build",
];

const softSkills = [
	"Agile Methodologies",
	"Team Collaboration",
	"Problem Solving",
	"Code Review",
	"Project Management",
	"Communication",
	"Mentoring",
];

export function Skills() {
	return (
		<section id="skills" className="py-20 sm:py-32 ">
			<div className="container mx-auto px-4">
				<h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
					My Skills & Expertise
				</h2>
				<p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
					A look at the technologies I work with and the skills I bring to the
					table.
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<Card className="lg:col-span-2">
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Code /> Technical Skills
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap gap-2">
							{techSkills.map((skill) => (
								<Badge
									key={skill}
									variant="default"
									className="text-base py-1 px-3"
								>
									{skill}
								</Badge>
							))}
						</CardContent>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Users /> Soft Skills
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap gap-2">
							{softSkills.map((skill) => (
								<Badge
									key={skill}
									variant="outline"
									className="text-base py-1 px-3"
								>
									{skill}
								</Badge>
							))}
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<BrainCircuit /> AI Skill Highlighter
							</CardTitle>
							<CardDescription>
								Paste a job description below to see which of my skills are most
								relevant.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<SkillHighlighter />
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
