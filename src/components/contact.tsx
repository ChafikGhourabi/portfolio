"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("https://formspree.io/f/mwpqlzkj", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setFormData({ name: "", email: "", message: "" });
			}
		} catch (error) {
			console.error("Form submission error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-20 sm:py-32 bg-secondary">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="flex flex-col justify-center">
						<h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
							Let's Build Something Great
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Have a project in mind or looking to add a passionate developer to
							your team? I'd love to hear from you. Let's connect and create
							something amazing together.
						</p>
						<div className="space-y-4">
							<Link
								href="tel:+21629262075"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 hover:text-primary transition-colors group"
							>
								<Phone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
								<span className="font-semibold text-foreground">
									+216 29 262 075
								</span>
							</Link>
							<Link
								href="mailto:chafikghourabi@gmail.com"
								className="flex items-center gap-3 hover:text-primary transition-colors group"
							>
								<Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
								<span className="font-semibold text-foreground">
									chafikghourabi@gmail.com
								</span>
							</Link>
							<Link
								href="https://linkedin.com/in/chafik-ghourabi-2888031b3"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 hover:text-primary transition-colors group"
							>
								<Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
								<span className="font-semibold text-foreground">
									LinkedIn Profile
								</span>
							</Link>
						</div>
					</div>
					<Card>
						<CardHeader>
							<CardTitle>Send me a message</CardTitle>
							<CardDescription>
								I'll get back to you as soon as possible.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<Input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder="Your Name"
									required
								/>
								<Input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="Your Email"
									required
								/>
								<Textarea
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									placeholder="Your Message"
									rows={5}
									required
								/>

								<Button
									type="submit"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Sending..." : "Send Message"}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
