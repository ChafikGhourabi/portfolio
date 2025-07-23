import { CodeXml, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t py-6 md:py-8">
			<div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
				<div className="flex items-center space-x-2">
					<CodeXml className="h-6 w-6 text-primary" />
					<p className="text-sm text-muted-foreground">
						&copy; {new Date().getFullYear()} Chafik GHOURABI. All rights
						reserved.
					</p>
				</div>
				<div className="flex items-center space-x-4">
					<Link
						href="tel:+21629262075"
						aria-label="Phone"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<Phone className="h-6 w-6" />
					</Link>
					<Link
						href="mailto:chafikghourabi@gmail.com"
						aria-label="Email"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<Mail className="h-6 w-6" />
					</Link>
					<Link
						href="https://github.com/ChafikGhourabi"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<Github className="h-6 w-6" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/chafik-ghourabi-2888031b3"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<Linkedin className="h-6 w-6" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
