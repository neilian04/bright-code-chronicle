import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUp, AtSign, Award, Brain, Briefcase, Calendar, CheckCircle2, Code2, Download, ExternalLink, Facebook, Folder, GitFork, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, Send, Sparkles, Star, Twitter, UserCircle2, Wrench, X } from "lucide-react";
//#region src/assets/neil-logo.png
var neil_logo_default = "/assets/neil-logo-D3qVDyq0.png";
//#endregion
//#region src/assets/neil-profile.png
var neil_profile_default = "/assets/neil-profile-BgZt6EQj.png";
//#endregion
//#region src/assets/blockchain-cert.png
var blockchain_cert_default = "/assets/blockchain-cert-BC1y0jQz.png";
//#endregion
//#region src/assets/build-with-ai.jpg
var build_with_ai_default = "/assets/build-with-ai-Eod7j-zM.jpg";
//#endregion
//#region src/assets/its-cybersecurity.png
var its_cybersecurity_default = "/assets/its-cybersecurity-B-Ei7Lo1.png";
//#endregion
//#region src/assets/its-network-sec.png
var its_network_sec_default = "/assets/its-network-sec-Y2zkA1si.png";
//#endregion
//#region src/assets/github-js-workshop.png
var github_js_workshop_default = "/assets/github-js-workshop-CZ7lTtEV.png";
//#endregion
//#region src/lib/portfolio-data.ts
var PROFILE_IMAGE = neil_profile_default;
var CERT_COVERS = {
	"GitHub and JavaScript Workshop": github_js_workshop_default,
	"IT Specialist — Network Security": its_network_sec_default,
	"IT Specialist — Cybersecurity": its_cybersecurity_default,
	"Blockchain Campus Conference 2024": blockchain_cert_default,
	"Build with AI": build_with_ai_default
};
var SITE = {
	name: "Neil Ian",
	fullName: "NEIL IAN R. MALLARI",
	role: "Computer Science Student",
	specialization: "(Cybersecurity)",
	resumeUrl: "https://docs.google.com/document/d/1AVEV4LK_pneGVImUQCpRCh1DHPQFc0NMLME30wxMpZA/edit?usp=sharing",
	email: "n.mallari.545046@umindanao.edu.ph",
	phone: "+63 964 1466 036",
	location: "Davao City, Philippines",
	logo: neil_logo_default,
	github: "https://github.com/neilian04"
};
var NAV_LINKS = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#certifications",
		label: "Certifications"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#education",
		label: "Education"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var EXPERIENCES = [
	{
		period: "February 2026 — Present",
		title: "Music Director",
		org: "Words of Life Christian Ministries — Davao (WLCM)"
	},
	{
		period: "August 2025 — Present",
		title: "Sound Engineer",
		org: "UM-College of Computing Education Student Government (CCE-CSG)"
	},
	{
		period: "August 2023 — Present",
		title: "Self Employed",
		org: "Code and build for our coding projects."
	},
	{
		period: "August 2024 — May 2025",
		title: "Technical Team Member",
		org: "Junior Blockchain Education Consortium of the Philippines — UM Davao"
	}
];
var SKILL_GROUPS = [
	{
		label: "Languages",
		items: [
			"Python",
			"JavaScript",
			"Java",
			"PHP",
			"SQL",
			"MySQL",
			"HTML",
			"CSS",
			"Excel"
		]
	},
	{
		label: "Technical Skills",
		items: [
			"Object-Oriented Programming",
			"UI/UX Structuring",
			"Cybersecurity",
			"Database Design"
		]
	},
	{
		label: "Tools",
		items: [
			"Git / GitHub",
			"Visual Studio Code",
			"Microsoft Office",
			"Google Workspace",
			"A.I. (Claude, Perplexity, Gemini, ChatGPT, Codex)",
			"Figma"
		]
	},
	{
		label: "Soft Skills",
		items: [
			"Leadership",
			"Creativity",
			"Communication & Teamwork",
			"Attention to Detail",
			"Willingness to Learn"
		]
	}
];
var driveThumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
var PROJECTS = [
	{
		name: "Food Supply during Emergency Situations Simulation",
		role: "Full-Stack Developer",
		timeline: "Mar 2026 — May 2026",
		cover: driveThumb("1RsaTu5bzHCGUYMnIXXKCYxHikaTnh4b1"),
		link: "https://github.com/neilian04/CSE10_Simulation",
		tools: [
			"Python",
			"DES",
			"Simulation",
			"Data Analysis"
		],
		description: "Discrete-Event Simulation (DES) model evaluating and optimizing the food supply chain during disaster response in Buhangin District, Davao City. Analyzed vehicle allocations and routing scenarios to identify bottlenecks, accelerate delivery times, and ensure equitable relief distribution."
	},
	{
		name: "Lugang Cafe Ordering & Management System",
		role: "Backend Developer",
		timeline: "Mar 2025 — Apr 2025",
		cover: driveThumb("1xS-rfEPs3u07qElC8s-rIe168Yq81oeg"),
		link: "https://github.com/Neil2004-12/Lugang_Cafe",
		tools: [
			"PHP",
			"MySQL",
			"JavaScript",
			"HTML",
			"CSS"
		],
		description: "Web-based e-menu and management system enabling localized, table-centric digital ordering. Automated real-time order queue tracking for staff with admin tools for menu customization and comprehensive sales reporting."
	},
	{
		name: "RM Woodworks Inventory Management",
		role: "Quality Assurance",
		timeline: "Nov 2025 — Dec 2025",
		cover: driveThumb("1GDz-lPpISC0jujKHiSWrYBdVaOLG4ms0"),
		link: "https://github.com/JayLao27/rmwoodworks",
		tools: [
			"Laravel",
			"PHP",
			"MySQL",
			"Blade"
		],
		description: "Comprehensive Laravel web application managing the complete lifecycle of wood materials and products. Streamlines procurement, inventory tracking, sales operations, and manufacturing workflows for wood-based businesses."
	},
	{
		name: "GameForge",
		role: "UI/UX Design",
		timeline: "Mar 2025 — May 2025",
		cover: "",
		link: "https://github.com/JayLao27/GameForge_",
		tools: [
			"Figma",
			"UI/UX",
			"eCommerce",
			"Prototyping"
		],
		description: "eCommerce web application for gaming laptops, keyboards, mice, and peripherals. Streamlines product browsing, inventory management, order processing, and customer transactions with secure checkout, order tracking, and responsive interfaces."
	}
];
var EDUCATION = [
	{
		period: "August 2023 — Present",
		school: "University of Mindanao",
		degree: "Bachelor of Science in Computer Science"
	},
	{
		period: "2021 — 2023",
		school: "Assumption College of Davao",
		degree: "Senior High School"
	},
	{
		period: "2017 — 2021",
		school: "Cabantian National High School",
		degree: "Junior High School"
	}
];
var CERTIFICATIONS = [
	{
		name: "GitHub and JavaScript Workshop",
		issuer: "College of Computing Education Skills Clinic — Mentors",
		description: "Demonstrated interactive websites and professionally managing, backing up, and sharing coding projects.",
		link: "https://drive.google.com/file/d/15G9e2PO7Hdv11nshozVaxbKRvo8r7QDF/view?usp=sharing"
	},
	{
		name: "IT Specialist — Network Security",
		issuer: "Certiport",
		description: "Demonstrated proficiency in network security concepts and practices.",
		link: "https://drive.google.com/file/d/1RJl9thnNcQ8pjEvdcigBDz3qkkBwD63J/view?usp=sharing"
	},
	{
		name: "IT Specialist — Cybersecurity",
		issuer: "Certiport",
		description: "Demonstrated proficiency in cybersecurity concepts and practices.",
		link: "https://drive.google.com/file/d/1rS2OlGV8A82Q-JCyCQyq-5ThBYPdrLaC/view?usp=sharing"
	},
	{
		name: "Blockchain Campus Conference 2024",
		issuer: "Blockchain Education Consortium",
		description: "Connects attendees with industry leaders, showcasing real-world blockchain applications & validating skills.",
		link: "https://drive.google.com/file/d/1WDA6VJvCMmeyv6iGZVWBXySe686DSHNY/view?usp=sharing"
	},
	{
		name: "Build with AI",
		issuer: "Google Developers Groups",
		description: "Deploying real-world AI applications, agentic & cloud integrations using Google's latest AI ecosystem.",
		link: "https://drive.google.com/file/d/1PVyAtDIbqawT286dPQ0ZVMrKfC9TCw0r/view?usp=sharing"
	}
];
//#endregion
//#region src/components/Header.tsx
function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#hero",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: SITE.logo,
						alt: "Neil Ian logo",
						className: "h-10 w-10 rounded-md object-contain"
					}), /* @__PURE__ */ jsx("span", {
						className: "font-display text-lg font-bold tracking-wide text-gradient-teal",
						children: SITE.name
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: "text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-teal",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen((s) => !s),
					className: "rounded-md border border-border p-2 text-foreground md:hidden",
					children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
				})
			]
		}), open ? /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden",
			children: /* @__PURE__ */ jsx("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3",
				children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-neon-teal",
					children: l.label
				}, l.href))
			})
		}) : null]
	});
}
//#endregion
//#region src/components/CodeWindow.tsx
function CodeWindow({ title, children, className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `code-window overflow-hidden ${className}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 border-b border-code-border px-4 py-3",
			children: [
				/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.65_0.20_25)]" }),
				/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.80_0.16_70)]" }),
				/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.75_0.18_150)]" }),
				title ? /* @__PURE__ */ jsx("span", {
					className: "ml-auto mr-auto text-sm font-medium text-neon-teal",
					children: title
				}) : null
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "px-5 py-4 text-sm leading-7",
			children
		})]
	});
}
var Tok = {
	K: ({ children }) => /* @__PURE__ */ jsx("span", {
		style: { color: "var(--syntax-keyword)" },
		children
	}),
	S: ({ children }) => /* @__PURE__ */ jsx("span", {
		style: { color: "var(--syntax-string)" },
		children
	}),
	N: ({ children }) => /* @__PURE__ */ jsx("span", {
		style: { color: "var(--syntax-number)" },
		children
	}),
	F: ({ children }) => /* @__PURE__ */ jsx("span", {
		style: { color: "var(--syntax-fn)" },
		children
	}),
	P: ({ children }) => /* @__PURE__ */ jsx("span", {
		style: { color: "var(--syntax-prop)" },
		children
	}),
	C: ({ children }) => /* @__PURE__ */ jsx("span", {
		style: { color: "var(--syntax-comment)" },
		children
	}),
	V: ({ children }) => /* @__PURE__ */ jsx("span", {
		style: { color: "var(--syntax-var)" },
		children
	})
};
//#endregion
//#region src/components/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "hero",
		className: "relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-30" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono text-sm text-neon-teal",
						children: "$ whoami"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]",
						children: [
							"Hello,",
							/* @__PURE__ */ jsx("br", {}),
							"This is ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-pink",
								children: SITE.fullName
							}),
							",",
							/* @__PURE__ */ jsx("br", {}),
							"I'm a ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-teal",
								children: SITE.role
							}),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-teal",
								children: SITE.specialization
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex items-center gap-4 text-neon-pink",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: SITE.github,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "GitHub",
								className: "transition-colors hover:text-neon-violet",
								children: /* @__PURE__ */ jsx(Github, { size: 22 })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#contact",
								"aria-label": "LinkedIn",
								className: "transition-colors hover:text-neon-violet",
								children: /* @__PURE__ */ jsx(Linkedin, { size: 22 })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#contact",
								"aria-label": "Facebook",
								className: "transition-colors hover:text-neon-violet",
								children: /* @__PURE__ */ jsx(Facebook, { size: 22 })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#contact",
								"aria-label": "Twitter",
								className: "transition-colors hover:text-neon-violet",
								children: /* @__PURE__ */ jsx(Twitter, { size: 22 })
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "#contact",
							className: "btn-neon-violet inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider",
							children: ["Contact Me ", /* @__PURE__ */ jsx(Mail, { size: 16 })]
						}), /* @__PURE__ */ jsxs("a", {
							href: SITE.resumeUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "btn-neon-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider",
							children: ["Get Resume ", /* @__PURE__ */ jsx(Download, { size: 16 })]
						})]
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "relative",
					children: /* @__PURE__ */ jsx(CodeWindow, { children: /* @__PURE__ */ jsx("pre", {
						className: "overflow-x-auto whitespace-pre font-mono text-[13px] leading-7",
						children: /* @__PURE__ */ jsxs("code", { children: [
							/* @__PURE__ */ jsx(Tok.K, { children: "const" }),
							" ",
							/* @__PURE__ */ jsx(Tok.V, { children: "coder" }),
							" = ",
							"{",
							"\n  ",
							/* @__PURE__ */ jsx(Tok.P, { children: "name" }),
							": ",
							/* @__PURE__ */ jsx(Tok.S, { children: "'NEIL IAN R. MALLARI'" }),
							",",
							"\n  ",
							/* @__PURE__ */ jsx(Tok.P, { children: "skills" }),
							": [",
							/* @__PURE__ */ jsx(Tok.S, { children: "'Python'" }),
							", ",
							/* @__PURE__ */ jsx(Tok.S, { children: "'JavaScript'" }),
							", ",
							/* @__PURE__ */ jsx(Tok.S, { children: "'Java'" }),
							",",
							"\n           ",
							/* @__PURE__ */ jsx(Tok.S, { children: "'SQL'" }),
							", ",
							/* @__PURE__ */ jsx(Tok.S, { children: "'MySQL'" }),
							", ",
							/* @__PURE__ */ jsx(Tok.S, { children: "'Cybersecurity'" }),
							"],",
							"\n  ",
							/* @__PURE__ */ jsx(Tok.P, { children: "hardWorker" }),
							": ",
							/* @__PURE__ */ jsx(Tok.K, { children: "true" }),
							",",
							"\n  ",
							/* @__PURE__ */ jsx(Tok.P, { children: "quickLearner" }),
							": ",
							/* @__PURE__ */ jsx(Tok.K, { children: "true" }),
							",",
							"\n  ",
							/* @__PURE__ */ jsx(Tok.P, { children: "problemSolver" }),
							": ",
							/* @__PURE__ */ jsx(Tok.K, { children: "true" }),
							",",
							"\n  ",
							/* @__PURE__ */ jsx(Tok.P, { children: "hireable" }),
							": ",
							/* @__PURE__ */ jsx(Tok.F, { children: "function" }),
							"() ",
							"{",
							"\n    ",
							/* @__PURE__ */ jsx(Tok.K, { children: "return" }),
							" (",
							"\n      ",
							/* @__PURE__ */ jsx(Tok.K, { children: "this" }),
							".",
							/* @__PURE__ */ jsx(Tok.P, { children: "hardWorker" }),
							" &&",
							"\n      ",
							/* @__PURE__ */ jsx(Tok.K, { children: "this" }),
							".",
							/* @__PURE__ */ jsx(Tok.P, { children: "problemSolver" }),
							" &&",
							"\n      ",
							/* @__PURE__ */ jsx(Tok.K, { children: "this" }),
							".",
							/* @__PURE__ */ jsx(Tok.P, { children: "skills" }),
							".",
							/* @__PURE__ */ jsx(Tok.P, { children: "length" }),
							" >= ",
							/* @__PURE__ */ jsx(Tok.N, { children: "5" }),
							"\n    ",
							");",
							"\n  ",
							"}",
							";",
							"\n",
							"}",
							";"
						] })
					}) })
				})]
			})
		]
	});
}
//#endregion
//#region src/components/SectionHeading.tsx
function SectionHeading({ eyebrow, title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-12 flex flex-col items-center text-center",
		children: [
			eyebrow ? /* @__PURE__ */ jsx("span", {
				className: "mb-3 inline-block rounded-full border border-neon-violet/50 bg-neon-violet/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neon-violet",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ jsx("h2", {
				className: "text-3xl font-bold tracking-tight sm:text-4xl",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-gradient-teal",
					children: title
				})
			}),
			children ? /* @__PURE__ */ jsx("p", {
				className: "mt-3 max-w-2xl text-sm text-muted-foreground",
				children
			}) : null,
			/* @__PURE__ */ jsx("div", { className: "mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-neon-violet to-transparent" })
		]
	});
}
//#endregion
//#region src/components/About.tsx
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "relative py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Who I Am",
				title: "About Me"
			}), /* @__PURE__ */ jsx("div", {
				className: "card-glow rounded-2xl p-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-8 md:flex-row md:items-center md:text-left",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative shrink-0",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-neon-violet/40 to-neon-teal/40 blur-2xl" }), /* @__PURE__ */ jsx("img", {
							src: PROFILE_IMAGE,
							alt: "Neil Ian R. Mallari",
							className: "h-44 w-44 rounded-2xl border-2 border-neon-violet/40 object-cover shadow-xl sm:h-52 sm:w-52",
							loading: "lazy"
						})]
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: [
							"Third-year Computer Science student at the",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "font-semibold text-neon-teal",
								children: "University of Mindanao"
							}),
							", specializing in ",
							/* @__PURE__ */ jsx("span", {
								className: "font-semibold text-neon-violet",
								children: "Cybersecurity"
							}),
							". Actively expanding technical capabilities through backend design, quality assurance testing, and discrete-event simulation modeling. Seeking a practical development role to apply security and programming skills to real-world solutions."
						]
					})]
				})
			})]
		})
	});
}
//#endregion
//#region src/components/Experience.tsx
function Experience() {
	return /* @__PURE__ */ jsxs("section", {
		id: "experience",
		className: "relative py-20",
		children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-20" }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Journey",
				title: "Experience"
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-teal/60 via-neon-violet/40 to-transparent sm:left-1/2" }), /* @__PURE__ */ jsx("ul", {
					className: "space-y-5",
					children: EXPERIENCES.map((exp, i) => /* @__PURE__ */ jsxs("li", {
						className: "relative pl-12 sm:pl-0",
						children: [/* @__PURE__ */ jsx("span", { className: "absolute left-[7px] top-5 h-3 w-3 rounded-full bg-neon-teal shadow-glow-teal sm:left-[calc(50%-6px)]" }), /* @__PURE__ */ jsx("div", {
							className: `card-glow rounded-xl p-5 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:ml-auto sm:pl-6" : "sm:mr-auto sm:pr-6"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neon-violet/40 bg-neon-violet/10 text-neon-violet",
									children: /* @__PURE__ */ jsx(Briefcase, { size: 18 })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "font-mono text-xs text-neon-teal",
											children: exp.period
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-1 text-base font-bold uppercase tracking-wide",
											children: exp.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: exp.org
										})
									]
								})]
							})
						})]
					}, exp.title))
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/Skills.tsx
var ICONS = [
	Code2,
	Brain,
	Wrench,
	Sparkles
];
function Skills() {
	return /* @__PURE__ */ jsx("section", {
		id: "skills",
		className: "relative py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Toolkit",
				title: "Skills"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: SKILL_GROUPS.map((group, i) => {
					const Icon = ICONS[i % ICONS.length];
					return /* @__PURE__ */ jsxs("div", {
						className: "card-glow rounded-2xl p-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-lg border border-neon-teal/40 bg-neon-teal/10 text-neon-teal",
								children: /* @__PURE__ */ jsx(Icon, { size: 18 })
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-mono text-sm uppercase tracking-[0.2em] text-neon-teal",
								children: group.label
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-2",
							children: group.items.map((item) => /* @__PURE__ */ jsx("span", {
								className: "rounded-md border border-neon-violet/30 bg-neon-violet/5 px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-neon-violet/70 hover:bg-neon-violet/15 hover:text-neon-violet",
								children: item
							}, item))
						})]
					}, group.label);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/Certifications.tsx
function Certifications() {
	return /* @__PURE__ */ jsx("section", {
		id: "certifications",
		className: "relative py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Credentials",
				title: "All Certifications"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: CERTIFICATIONS.map((c) => {
					const cover = CERT_COVERS[c.name];
					return /* @__PURE__ */ jsxs("a", {
						href: c.link,
						target: "_blank",
						rel: "noreferrer",
						className: "card-glow group flex flex-col rounded-2xl p-6",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 flex h-32 items-center justify-center overflow-hidden rounded-xl border border-code-border bg-code-bg",
								children: cover ? /* @__PURE__ */ jsx("img", {
									src: cover,
									alt: `${c.name} certificate`,
									className: "h-full w-full object-cover transition-transform group-hover:scale-105",
									loading: "lazy"
								}) : /* @__PURE__ */ jsx(Award, {
									size: 48,
									className: "text-neon-violet transition-transform group-hover:scale-110"
								})
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-base font-bold text-gradient-teal",
								children: c.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs font-medium uppercase tracking-wider text-neon-violet",
								children: c.issuer
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 flex-1 text-sm text-muted-foreground",
								children: c.description
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "mt-4 inline-flex items-center gap-1 text-xs font-semibold text-neon-teal",
								children: ["View Certificate ", /* @__PURE__ */ jsx(ExternalLink, { size: 12 })]
							})
						]
					}, c.name);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/Projects.tsx
function Projects() {
	return /* @__PURE__ */ jsxs("section", {
		id: "projects",
		className: "relative py-20",
		children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-20" }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Showcase",
				title: "Projects"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: PROJECTS.map((p) => /* @__PURE__ */ jsxs("article", {
					className: "card-glow flex flex-col overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative h-48 w-full overflow-hidden border-b border-border bg-code-bg",
						children: [p.cover ? /* @__PURE__ */ jsx("img", {
							src: p.cover,
							alt: p.name,
							loading: "lazy",
							referrerPolicy: "no-referrer",
							className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						}) : /* @__PURE__ */ jsx("div", {
							className: "flex h-full items-center justify-center text-neon-violet/60",
							children: /* @__PURE__ */ jsx(Folder, {
								size: 72,
								strokeWidth: 1.2
							})
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-1 flex-col p-6",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-bold text-gradient-teal",
								children: p.name
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ jsx(UserCircle2, {
											size: 12,
											className: "text-neon-violet"
										}),
										" ",
										p.role
									]
								}), /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ jsx(Calendar, {
											size: 12,
											className: "text-neon-teal"
										}),
										" ",
										p.timeline
									]
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: p.description
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: p.tools.map((t) => /* @__PURE__ */ jsx("span", {
									className: "rounded-md border border-neon-teal/30 bg-neon-teal/5 px-2 py-0.5 font-mono text-[10px] text-neon-teal",
									children: t
								}, t))
							}),
							/* @__PURE__ */ jsxs("a", {
								href: p.link,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-neon-violet mt-5 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider",
								children: ["View Project ", /* @__PURE__ */ jsx(ExternalLink, { size: 14 })]
							})
						]
					})]
				}, p.name))
			})]
		})]
	});
}
//#endregion
//#region src/components/Education.tsx
function Education() {
	return /* @__PURE__ */ jsx("section", {
		id: "education",
		className: "relative py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Academic",
				title: "Education"
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-4",
				children: EDUCATION.map((e) => /* @__PURE__ */ jsxs("div", {
					className: "card-glow flex items-center gap-4 rounded-xl p-5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neon-teal/40 bg-neon-teal/10 text-neon-teal",
						children: /* @__PURE__ */ jsx(GraduationCap, { size: 22 })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-mono text-xs text-neon-teal",
								children: e.period
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-1 text-base font-bold uppercase tracking-wide",
								children: e.school
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: e.degree
							})
						]
					})]
				}, e.school))
			})]
		})
	});
}
//#endregion
//#region src/components/Contact.tsx
function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [sent, setSent] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) return;
		const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
		const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
		window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
		setForm({
			name: "",
			email: "",
			message: ""
		});
	};
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "relative py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Get in Touch",
				title: "Contact with Me"
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("form", {
					onSubmit,
					className: "card-glow rounded-2xl p-6",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-5 text-sm text-muted-foreground",
							children: "If you have any questions or concerns, please don't hesitate to contact me. I'm open to any work opportunities that align with my skills and interests."
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "mb-3 block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mb-1 block text-sm font-medium",
								children: "Your Name"
							}), /* @__PURE__ */ jsx("input", {
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								required: true,
								className: "w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none transition-colors focus:border-neon-violet focus:ring-1 focus:ring-neon-violet"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "mb-3 block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mb-1 block text-sm font-medium",
								children: "Your Email"
							}), /* @__PURE__ */ jsx("input", {
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								required: true,
								className: "w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none transition-colors focus:border-neon-violet focus:ring-1 focus:ring-neon-violet"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "mb-5 block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mb-1 block text-sm font-medium",
								children: "Your Message"
							}), /* @__PURE__ */ jsx("textarea", {
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								required: true,
								rows: 5,
								className: "w-full resize-none rounded-md border border-border bg-input/40 px-3 py-2 text-sm outline-none transition-colors focus:border-neon-violet focus:ring-1 focus:ring-neon-violet"
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							className: "btn-neon-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider",
							children: ["Send Message ", /* @__PURE__ */ jsx(Send, { size: 14 })]
						}),
						sent ? /* @__PURE__ */ jsxs("p", {
							className: "mt-4 inline-flex items-center gap-2 rounded-md border border-neon-teal/40 bg-neon-teal/10 px-3 py-2 text-sm text-neon-teal",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { size: 16 }), " Opening your email client…"]
						}) : null
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: `mailto:${SITE.email}`,
							className: "card-glow flex items-center gap-4 rounded-xl p-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-full border border-neon-teal/40 bg-neon-teal/10 text-neon-teal",
								children: /* @__PURE__ */ jsx(AtSign, { size: 18 })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium break-all",
								children: SITE.email
							})]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: `tel:${SITE.phone.replace(/\s/g, "")}`,
							className: "card-glow flex items-center gap-4 rounded-xl p-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-full border border-neon-violet/40 bg-neon-violet/10 text-neon-violet",
								children: /* @__PURE__ */ jsx(Phone, { size: 18 })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: SITE.phone
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "card-glow flex items-center gap-4 rounded-xl p-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-full border border-neon-pink/40 bg-neon-pink/10 text-neon-pink",
								children: /* @__PURE__ */ jsx(MapPin, { size: 18 })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: SITE.location
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-3 pt-2",
							children: [
								{
									Icon: Github,
									href: SITE.github,
									label: "GitHub"
								},
								{
									Icon: Linkedin,
									href: "#",
									label: "LinkedIn"
								},
								{
									Icon: Twitter,
									href: "#",
									label: "Twitter"
								},
								{
									Icon: Facebook,
									href: "#",
									label: "Facebook"
								}
							].map(({ Icon, href, label }) => /* @__PURE__ */ jsx("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": label,
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-neon-violet hover:text-neon-violet",
								children: /* @__PURE__ */ jsx(Icon, { size: 16 })
							}, label))
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border/60 py-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"© Developer Portfolio by",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold text-gradient-teal",
						children: SITE.fullName
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-5",
				children: [/* @__PURE__ */ jsxs("a", {
					href: SITE.github,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-teal",
					children: [/* @__PURE__ */ jsx(Star, { size: 14 }), " Star"]
				}), /* @__PURE__ */ jsxs("a", {
					href: SITE.github,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-violet",
					children: [/* @__PURE__ */ jsx(GitFork, { size: 14 }), " Fork"]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/ScrollTop.tsx
function ScrollTop() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 400);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ jsx("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Scroll to top",
		className: "btn-neon-gradient fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full",
		children: /* @__PURE__ */ jsx(ArrowUp, { size: 18 })
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Experience, {}),
				/* @__PURE__ */ jsx(Skills, {}),
				/* @__PURE__ */ jsx(Certifications, {}),
				/* @__PURE__ */ jsx(Projects, {}),
				/* @__PURE__ */ jsx(Education, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(ScrollTop, {})
		]
	});
}
//#endregion
export { Index as component };
