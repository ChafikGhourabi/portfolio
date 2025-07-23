import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<Header />
			<main className="flex-1">
				<Intro />
				{/* <Projects /> */}
				<Skills />
				<Experience />
				<Education />
				{/* <Testimonials /> */}
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
