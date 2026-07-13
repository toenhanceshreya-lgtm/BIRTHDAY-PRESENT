import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, r as performance_default, t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CvWWs1ep.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StarField({ count = 120, className = "" }) {
	const stars = (0, import_react.useMemo)(() => Array.from({ length: count }, (_, i) => ({
		id: i,
		top: Math.random() * 100,
		left: Math.random() * 100,
		size: Math.random() * 2 + .4,
		delay: Math.random() * 6,
		duration: 2 + Math.random() * 5,
		opacity: .3 + Math.random() * .7
	})), [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
		children: [stars.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute rounded-full bg-ivory",
			style: {
				top: `${s.top}%`,
				left: `${s.left}%`,
				width: `${s.size}px`,
				height: `${s.size}px`,
				opacity: s.opacity,
				boxShadow: `0 0 ${s.size * 4}px rgba(255,240,200,0.8)`,
				animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
			}
		}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes twinkle{0%,100%{opacity:.15;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}` })]
	});
}
var LINES$1 = [
	"Loading...",
	"Collecting four years of memories...",
	"Searching through billions of stars...",
	"Looking for my favorite person...",
	"Found."
];
function Prologue({ onEnter }) {
	const [lineIdx, setLineIdx] = (0, import_react.useState)(0);
	const [typed, setTyped] = (0, import_react.useState)("");
	const [showName, setShowName] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [fading, setFading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (lineIdx >= LINES$1.length) {
			const t = setTimeout(() => setShowName(true), 500);
			return () => clearTimeout(t);
		}
		const line = LINES$1[lineIdx];
		if (typed.length < line.length) {
			const t = setTimeout(() => setTyped(line.slice(0, typed.length + 1)), 55);
			return () => clearTimeout(t);
		}
		const pause = setTimeout(() => {
			setLineIdx((i) => i + 1);
			setTyped("");
		}, 750);
		return () => clearTimeout(pause);
	}, [typed, lineIdx]);
	(0, import_react.useEffect)(() => {
		if (!showName) return;
		const start = performance_default.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(100, (t - start) / 2600 * 100);
			setProgress(p);
			if (p < 100) raf = requestAnimationFrame(tick);
			else setTimeout(() => setReady(true), 400);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [showName]);
	const handleEnter = () => {
		setFading(true);
		setTimeout(onEnter, 1100);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		className: "fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-midnight-deep",
		animate: { opacity: fading ? 0 : 1 },
		transition: { duration: 1 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarField, { count: 180 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto w-full max-w-xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-[9rem] font-sans text-base tracking-wide text-ivory/80 sm:text-lg",
					children: [LINES$1.slice(0, lineIdx).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 opacity-60",
						children: l
					}, i)), lineIdx < LINES$1.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2",
						children: [typed, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-ivory align-middle" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: 1.2 },
					className: "mt-8 font-display text-5xl font-light tracking-wide text-ivory sm:text-7xl",
					style: { textShadow: "0 0 40px rgba(233,199,124,0.5)" },
					children: ["SARTHAK  ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-blush",
						children: "❤"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .6,
						delay: .6
					},
					className: "mx-auto mt-10 h-[2px] w-64 max-w-[80%] overflow-hidden rounded-full bg-ivory/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-gradient-to-r from-gold-soft via-gold to-blush transition-[width] duration-100 ease-linear",
						style: {
							width: `${progress}%`,
							boxShadow: "0 0 12px rgba(233,199,124,0.7)"
						}
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: ready && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					initial: {
						opacity: 0,
						y: 20,
						scale: .95
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					transition: { duration: 1 },
					onClick: handleEnter,
					className: "group relative mt-12 rounded-full border border-gold/40 bg-midnight/40 px-10 py-4 font-display text-lg tracking-widest text-ivory backdrop-blur-md transition hover:border-gold hover:bg-midnight/60",
					style: { boxShadow: "0 0 40px rgba(233,199,124,0.25), inset 0 0 20px rgba(233,199,124,0.08)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10",
						children: "✨ Enter Our Universe"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition group-hover:opacity-100",
						style: { background: "radial-gradient(circle,rgba(233,199,124,.4),transparent 70%)" }
					})]
				}) })
			]
		})]
	});
}
var favourite_default = "/assets/favourite-DtEMwjCp.jpg";
function Welcome({ onBegin }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight-deep px-6 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarField, { count: 150 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse at center, rgba(30,30,80,.4), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: { duration: 1.4 },
						className: "mx-auto mb-10 aspect-[4/5] w-64 overflow-hidden rounded-2xl border border-gold/30 bg-midnight/60 shadow-2xl sm:w-80",
						style: { boxShadow: "0 30px 80px rgba(0,0,0,.6), 0 0 60px rgba(233,199,124,.15)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full items-center justify-center bg-gradient-to-br from-midnight to-midnight-deep text-xs uppercase tracking-widest text-ivory/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: favourite_default,
								alt: "Our favorite photo",
								className: "w-full h-full object-cover rounded-2xl"
							}), "          "]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .2
						},
						className: "mb-4 font-hand text-lg text-gold",
						children: "Chapter One"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: { duration: 1.2 },
						className: "font-display text-5xl font-light leading-tight text-ivory sm:text-7xl",
						style: { textShadow: "0 0 40px rgba(233,199,124,.3)" },
						children: [
							"Happy Birthday,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"SARTHAK ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-blush",
								children: "❤"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .6
						},
						className: "mx-auto mt-6 max-w-xl font-serif text-lg text-ivory/70 italic sm:text-xl",
						children: "\"Welcome to a place built from four years of laughter, adventures, ordinary moments, and unforgettable memories.\""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						transition: {
							duration: 1,
							delay: 1
						},
						className: "mt-4 font-hand text-xl text-gold-soft",
						children: "Every page you open is a little piece of my heart."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.3
						},
						onClick: onBegin,
						className: "mt-12 rounded-full border border-gold/50 bg-transparent px-10 py-4 font-display text-lg tracking-widest text-ivory backdrop-blur-md transition hover:border-gold hover:bg-gold/10",
						style: { boxShadow: "0 0 40px rgba(233,199,124,.2)" },
						children: "Begin Our Story →"
					})
				]
			})
		]
	});
}
var EPISODES = [
	{
		n: 1,
		title: "The Beginning",
		tag: "How a hello became everything.",
		color: "from-indigo-900 to-midnight",
		photos: [
			{
				type: "image",
				src: "/assets/photo1-C7z6qmne.jpg"
			},
			{
				type: "image",
				src: "/assets/photo2-BEn_5Lw3.jpg"
			},
			{
				type: "image",
				src: "/assets/photo3-4t155ghy.jpg"
			},
			{
				type: "image",
				src: "/assets/photo4-DsIWTYyM.jpg"
			}
		]
	},
	{
		n: 2,
		title: "Falling in Love",
		tag: "The moments we knew.",
		color: "from-rose-900 to-midnight",
		photos: [
			{
				type: "video",
				src: "/assets/love1-CzhA-Ebj.mp4"
			},
			{
				type: "video",
				src: "/assets/love2-DGq-f_I8.mp4"
			},
			{
				type: "image",
				src: "/assets/love3-Y_1-IRg1.jpg"
			},
			{
				type: "image",
				src: "/assets/love4-sox5FMpt.jpg"
			}
		]
	},
	{
		n: 3,
		title: "Adventures Together",
		tag: "Cities, roads, sunsets.",
		color: "from-amber-900 to-midnight",
		photos: [
			{
				type: "video",
				src: "/assets/together1-bl7Xj4NE.mp4"
			},
			{
				type: "video",
				src: "/assets/together2-B_7p3qar.mp4"
			},
			{
				type: "video",
				src: "/assets/together3-Bh_RX0Mn.mp4"
			},
			{
				type: "image",
				src: "/assets/together4-DVwqp_vH.jpg"
			}
		]
	},
	{
		n: 4,
		title: "Little Things About You",
		tag: "The details I adore.",
		color: "from-fuchsia-900 to-midnight",
		photos: [
			{
				type: "video",
				src: "/assets/little1-Pf2vssrs.mp4"
			},
			{
				type: "video",
				src: "/assets/little2-D4kgbSPs.mp4"
			},
			{
				type: "image",
				src: "/assets/little3-BcWp8wjW.jpg"
			},
			{
				type: "video",
				src: "/assets/little4-DliLYsBB.mp4"
			}
		]
	},
	{
		n: 5,
		title: "Birthday Special",
		tag: "Today. Us. Forever.",
		color: "from-yellow-800 to-midnight",
		photos: [
			{
				type: "video",
				src: "/assets/special-D3HP0oo3.mp4"
			},
			{
				type: "image",
				src: "/assets/special%20(2)-DcnFM2Ly.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(1)-C2flA8NY.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(10)-Bt0_8itg.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(9)-B3eZI5BK.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(8)-Dsae8K69.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(3)-CYDsHzwR.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(4)-Dw6WLX1X.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(5)-CdhC80Tm.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(6)-DB5ZL3_p.jpg"
			},
			{
				type: "image",
				src: "/assets/special%20(7)-CxfOfzBl.jpg"
			}
		]
	}
];
function OurStory() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const ep = EPISODES.find((e) => e.n === open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen bg-midnight-deep px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-hand text-lg text-gold",
					children: "Chapter Two"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-5xl font-light tracking-widest text-ivory sm:text-7xl",
					children: "OUR STORY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl font-serif italic text-ivory/60",
					children: "A five-part series. Streaming now, only for you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: EPISODES.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .7,
							delay: i * .08
						},
						whileHover: {
							y: -6,
							scale: 1.02
						},
						onClick: () => setOpen(e.n),
						className: "group relative overflow-hidden rounded-2xl border border-gold/20 bg-midnight text-left shadow-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `aspect-video bg-gradient-to-br ${e.color}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full items-center justify-center text-6xl opacity-40 transition group-hover:scale-110",
								children: "🎬"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-hand text-sm text-gold",
									children: ["Episode ", e.n]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl text-ivory",
									children: e.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ivory/60",
									children: e.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs uppercase tracking-widest text-gold-soft opacity-0 transition group-hover:opacity-100",
									children: "▶ Play episode"
								})
							]
						})]
					}, e.n))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: ep && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .5 },
			className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-midnight-deep/95 p-6 backdrop-blur-xl",
			onClick: () => setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .9,
					y: 40
				},
				animate: {
					scale: 1,
					y: 0
				},
				exit: {
					scale: .9,
					y: 40
				},
				transition: { duration: .5 },
				onClick: (e) => e.stopPropagation(),
				className: "relative w-full max-w-4xl overflow-hidden rounded-3xl border border-gold/30 bg-midnight/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(null),
						className: "absolute right-4 top-4 rounded-full border border-ivory/20 px-3 py-1 text-sm text-ivory/70 hover:border-gold hover:text-gold",
						children: "✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-hand text-gold",
						children: ["Episode ", ep.n]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-4xl text-ivory sm:text-5xl",
						children: ep.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif italic text-ivory/60",
						children: ep.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-5",
						children: ep.photos.map((file, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							whileHover: { scale: 1.04 },
							transition: { duration: .3 },
							className: "overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-2xl",
							children: file.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: file.src,
								controls: true,
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								className: "h-80 w-full object-contain bg-black"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: file.src,
								alt: `Photo ${i + 1}`,
								className: "h-80 w-full object-contain bg-black"
							})
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-xl border border-gold/20 bg-midnight-deep/60 p-6 font-serif italic text-ivory/70",
						children: "[ Add your memory, letter, or caption for this episode... ]"
					})
				]
			})
		}) })]
	});
}
var FRAMES = [
	{
		title: "The First Photo",
		date: "Spring, Year One",
		caption: "Before we knew what we were becoming.",
		media: "/assets/firstpic-DQWsQW7u.jpg",
		type: "image"
	},
	{
		title: "Late Night Drives",
		date: "Summer, Year One",
		caption: "You, me, the city lights, no destination.",
		media: "/assets/latenightdrive-D7mwZlZq.jpg",
		type: "image"
	},
	{
		title: "Our First Trip",
		date: "Autumn, Year Two",
		caption: "New places always felt like home with you.",
		media: "/assets/firsttrip-D0SxIAIg.mp4",
		type: "video"
	},
	{
		title: "That One Sunset",
		date: "Winter, Year Two",
		caption: "The sky matched the way I felt.",
		media: "/assets/together4-DVwqp_vH.jpg",
		type: "image"
	},
	{
		title: "A Quiet Morning",
		date: "Spring, Year Three",
		caption: "The ordinary became extraordinary.",
		media: "/assets/quitmorning-D0xQaTHO.mp4",
		type: "video"
	},
	{
		title: "Just Because",
		date: "Year Four",
		caption: "Still falling. Every single day.",
		media: "/assets/ustbeacuuse-BQhp332t.jpg",
		type: "image"
	}
];
function Museum() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative min-h-screen bg-gradient-to-b from-midnight-deep via-midnight to-midnight-deep px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-hand text-lg text-gold",
					children: "Chapter Three"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-5xl font-light text-ivory sm:text-6xl",
					children: "The Museum of Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl font-serif italic text-ivory/60",
					children: "A private gallery. No crowds. Just moments we curated together."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
					children: FRAMES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .8,
							delay: i % 3 * .1
						},
						whileHover: { y: -8 },
						className: "group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-sm border-[10px] border-ivory/90 bg-midnight-deep p-1 transition-shadow",
							style: { boxShadow: "0 30px 60px rgba(0,0,0,.7), 0 0 30px rgba(233,199,124,.1)" },
							children: [f.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: f.media,
								alt: f.title,
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
								className: "h-full w-full object-cover",
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: f.media,
									type: "video/mp4"
								}), "Your browser does not support the video tag."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay transition group-hover:opacity-70",
								style: { background: "radial-gradient(ellipse at top, rgba(233,199,124,.4), transparent 60%)" }
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-ivory",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-hand text-sm text-gold",
									children: f.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif text-sm italic text-ivory/60",
									children: f.caption
								})
							]
						})]
					}, i))
				})
			]
		})
	});
}
var REASONS = [
	"The way you laugh with your whole body.",
	"How you make ordinary Tuesdays feel like holidays.",
	"The way you say my name when you're sleepy.",
	"You remember the smallest things I mention.",
	"Your hand always finds mine.",
	"You're my safest place.",
	"You dance even when there's no music.",
	"You believe in me louder than I do.",
	"The face you make when food is really good.",
	"You forgive fast and love slow and steady.",
	"You listen — actually listen.",
	"Your kindness to strangers.",
	"The way you say 'good morning' like it matters.",
	"You make me want to be better, softly.",
	"You're funny even when you don't try.",
	"You cry at movies and pretend you didn't.",
	"You taught me what home means.",
	"Your patience with my chaos.",
	"You're the calm in every storm.",
	"You still text me things you think of.",
	"You make me feel chosen, every day.",
	"The little sounds you make when you're focused.",
	"You give the world's best hugs.",
	"You're brave in ways you don't see.",
	"You remember the coffee order.",
	"You're my favorite conversation.",
	"You are proof the universe is on my side.",
	"You feel like a warm room in winter.",
	"You are my favorite hello and my hardest goodbye.",
	"Because it's you. It's always been you."
];
function Constellation() {
	const stars = (0, import_react.useMemo)(() => REASONS.map((r, i) => ({
		id: i,
		top: 8 + Math.random() * 84,
		left: 6 + Math.random() * 88,
		size: 6 + Math.random() * 8,
		reason: r
	})), []);
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen overflow-hidden bg-black px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-hand text-lg text-gold",
						children: "Chapter Four"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-5xl font-light text-ivory sm:text-6xl",
						children: "The Constellation of You"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl font-serif italic text-ivory/60",
						children: "Thirty stars. Thirty reasons. Tap one — I wrote them all for you."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-14 h-[70vh] min-h-[500px] w-full max-w-5xl overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-b from-midnight-deep via-black to-midnight-deep",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "absolute inset-0 h-full w-full",
						preserveAspectRatio: "none",
						children: stars.map((s, i) => {
							const n = stars[(i + 1) % stars.length];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: `${s.left}%`,
								y1: `${s.top}%`,
								x2: `${n.left}%`,
								y2: `${n.top}%`,
								stroke: "rgba(233,199,124,.12)",
								strokeWidth: "1"
							}, i);
						})
					}),
					stars.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(s.id),
						className: "absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory transition hover:scale-150",
						style: {
							top: `${s.top}%`,
							left: `${s.left}%`,
							width: s.size,
							height: s.size,
							boxShadow: "0 0 12px rgba(255,240,200,.9), 0 0 24px rgba(233,199,124,.6)",
							animation: `pulse ${2 + s.id % 4}s ease-in-out infinite`
						},
						"aria-label": `Star ${s.id + 1}`
					}, s.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes pulse{0%,100%{opacity:.7;transform:translate(-50%,-50%) scale(.9)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.2)}}` })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setActive(null),
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .85,
						y: 30
					},
					animate: {
						scale: 1,
						y: 0
					},
					exit: {
						scale: .85,
						y: 30
					},
					onClick: (e) => e.stopPropagation(),
					className: "relative w-full max-w-md rounded-3xl border border-gold/30 bg-midnight/70 p-10 text-center shadow-2xl backdrop-blur-2xl",
					style: { boxShadow: "0 0 80px rgba(233,199,124,.25)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl",
							children: "✨"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-hand text-gold",
							children: ["Reason #", active + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-serif text-2xl italic leading-relaxed text-ivory",
							children: stars[active].reason
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(null),
							className: "mt-8 text-xs uppercase tracking-widest text-ivory/50 hover:text-gold",
							children: "Close star"
						})
					]
				})
			}) })
		]
	});
}
var SONGS = [
	{
		title: "Our First Song",
		artist: "Arijit Singh",
		note: "The one that played the night everything changed.",
		audio: "/assets/Aaj%20Se%20Teri-Dc0Yz98x.mp3"
	},
	{
		title: "Long Distance Anthem",
		artist: "Arijit Singh",
		note: "Miles apart, same three minutes.",
		audio: "/assets/Pikley%20-CiYzdZdZ.mp3"
	},
	{
		title: "Sunday Morning",
		artist: "Arijit Singh",
		note: "Sunlight, coffee, your voice.",
		audio: "/assets/SANJU-zLVw_AJn.mp3"
	},
	{
		title: "Birthday Track",
		artist: "Arijit Singh",
		note: "For today. For you.",
		audio: "/assets/Rozana%20-q1CusmzY.mp3"
	}
];
function Soundtrack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative min-h-screen bg-midnight px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-hand text-lg text-gold",
					children: "Chapter Five"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-5xl font-light text-ivory sm:text-6xl",
					children: "Our Soundtrack"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl font-serif italic text-ivory/60",
					children: "Every relationship has a playlist. Ours has a whole B-side."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: SONGS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .7,
							delay: i % 3 * .1
						},
						whileHover: { y: -6 },
						className: "group rounded-2xl border border-gold/20 bg-midnight-deep/60 p-6 backdrop-blur-md",
						style: { boxShadow: "0 20px 40px rgba(0,0,0,.5)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto aspect-square w-full max-w-[220px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 rounded-full bg-black transition-transform duration-[8s] group-hover:[transform:rotate(360deg)]",
									style: {
										background: "radial-gradient(circle, #1a1a1a 20%, #000 22%, #0d0d0d 60%), repeating-radial-gradient(circle, #111 0 2px, #000 2px 4px)",
										boxShadow: "0 20px 40px rgba(0,0,0,.6), inset 0 0 20px rgba(0,0,0,.8)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black bg-gradient-to-br from-gold to-blush" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-2xl text-ivory",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-gold-soft",
								children: s.artist
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-serif text-sm italic text-ivory/60",
								children: [
									"\"",
									s.note,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 rounded-xl border border-gold/20 bg-black/30 p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("audio", {
									controls: true,
									preload: "metadata",
									className: "w-full rounded-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
										src: s.audio,
										type: "audio/mpeg"
									}), "Your browser does not support the audio element."]
								})
							})
						]
					}, i))
				})
			]
		})
	});
}
var PINS = [
	{
		name: "Where We Met",
		x: 22,
		y: 45,
		caption: "The place that started it all.",
		media: "/assets/adv1-lMI3Qlx9.mp4",
		type: "video"
	},
	{
		name: "First Getaway",
		x: 40,
		y: 30,
		caption: "One suitcase, zero plans, all magic.",
		media: "/assets/adv2-7Fr_igYx.mp4",
		type: "video"
	},
	{
		name: "The Mountain Trip",
		x: 58,
		y: 22,
		caption: "Cold nights, warm blankets, endless talks.",
		media: "/assets/adv3-Ds5ncLOZ.jpg",
		type: "image"
	},
	{
		name: "Beach Days",
		x: 68,
		y: 60,
		caption: "Saltwater, sunburns, laughter.",
		media: "/assets/adv4-CKyN5yJl.jpg",
		type: "image"
	},
	{
		name: "That City Weekend",
		x: 80,
		y: 40,
		caption: "Lights, streets, us.",
		media: "/assets/adv5-Dr38W5r_.jpg",
		type: "image"
	},
	{
		name: "Our Little Corner",
		x: 32,
		y: 70,
		caption: "Not glamorous. Just ours.",
		media: "/assets/adv6-DplbINEI.mp4",
		type: "video"
	}
];
function Adventures() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen bg-midnight-deep px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-hand text-lg text-gold",
					children: "Chapter Six"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-5xl font-light text-ivory sm:text-6xl",
					children: "Adventures Together"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl font-serif italic text-ivory/60",
					children: "A map of every place you made unforgettable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-midnight via-midnight-deep to-black",
					style: { backgroundImage: "radial-gradient(circle at 20% 30%, rgba(30,50,90,.5), transparent 50%), radial-gradient(circle at 70% 60%, rgba(60,30,80,.4), transparent 55%)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-0 h-full w-full opacity-20",
						preserveAspectRatio: "none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
							id: "grid",
							width: "40",
							height: "40",
							patternUnits: "userSpaceOnUse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M40 0H0V40",
								fill: "none",
								stroke: "rgba(233,199,124,.3)",
								strokeWidth: ".5"
							})
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "100%",
							height: "100%",
							fill: "url(#grid)"
						})]
					}), PINS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(i),
						className: "absolute -translate-x-1/2 -translate-y-full group",
						style: {
							left: `${p.x}%`,
							top: `${p.y}%`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block h-4 w-4 rounded-full bg-gold transition group-hover:scale-150",
							style: { boxShadow: "0 0 20px rgba(233,199,124,.9), 0 0 40px rgba(233,199,124,.5)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block whitespace-nowrap rounded-full bg-midnight/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-ivory/70 opacity-0 backdrop-blur-md transition group-hover:opacity-100",
							children: p.name
						})]
					}, i))]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setActive(null),
			className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { scale: .85 },
				animate: { scale: 1 },
				exit: { scale: .85 },
				onClick: (e) => e.stopPropagation(),
				className: "w-full max-w-2xl rounded-3xl border border-gold/30 bg-midnight/70 p-8 backdrop-blur-2xl sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-hand text-gold",
						children: "📍 Location"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-4xl text-ivory",
						children: PINS[active].name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif italic text-ivory/60",
						children: PINS[active].caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] flex items-center justify-center overflow-hidden rounded-xl border-8 border-amber-100 bg-neutral-900 shadow-2xl",
						children: PINS[active].type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: PINS[active].media,
							alt: PINS[active].name,
							className: "max-h-full max-w-full object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							className: "max-h-full max-w-full object-contain",
							controls: true,
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
								src: PINS[active].media,
								type: "video/mp4"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(null),
						className: "mt-6 text-xs uppercase tracking-widest text-ivory/50 hover:text-gold",
						children: "Close"
					})
				]
			})
		}) })]
	});
}
var LETTERS = [
	{
		title: "Open when you're happy",
		emoji: "💌",
		body: "Hello love, I always wish u to be happyyy 🩷If u r happy rn u should be grateful to me bcoz it's me after ur mother who would be praying for ur happiness in my every prayer.I always believe u will turn out in a very good and great and humble person i would have ever known.U would be such a grt ideal person for yr kidss, my love.🤌🏼🩷"
	},
	{
		title: "Open when you're stressed",
		emoji: "💌",
		body: "What? Missing me? Then text me, let me know , yha aakr pdhne ki koi need nhi h, just let me know. What? U r blocked? Then email me , paytm me , gpay me or whatever 😒 No excuse tht u can't express.  Do it before its too late 😌🌻🪸Imagine u r reading this I'm no more in this world🙂"
	},
	{
		title: "Open when you miss me",
		emoji: "💌",
		body: "I'm missing you too. Close your eyes. Feel that? That's me, holding you across whatever miles are between us. Always."
	},
	{
		title: "Birthday Letter",
		emoji: "🎂",
		body: `Hello My Coral Reef,
It's your birthday todayyyy, yooyoooooo😭😌🫶🏻 . Wishing u the best years ahheaddd. I love you so much babu. 🫂🌻🫶🏻 I'm glad to be ur sunflower. 🫶🏻🌻
4 yrs ago we found each other , waise toh phle  hi u had flashback of our future but yeahh. I wish we will never regret our bond. I know we have been through a lot of things. We had toxic relationship, did mistakes , did hurt each other so badly, bit returning to each other was permanent. I know i have been so rude to u. Im really sorry babu 🫂. If for my mistakes if I will ha e chance I will apologize u by touching ur feet by totally layin on ground.
I know we did mistakes. But its our greatness that we are learning , changing our negatives for each other , and doing everything we can do for each other. As our 3rd yr of relationship starts, i think we have become more mature version of ourselves.  I will not say to forget past. Bcoz that's d reason we r becomin better  version of ourselves for each other. I will not say now more. But U should always remember this, I will always love you mycoral reef. Coral reef s yaad aaya the changes u made in urself makin me feel safe even more with you. And as same I will always try to be ur sunflower .

Infinite love 
Shundri.`
	}
];
function Letters() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen bg-midnight px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-hand text-lg text-gold",
					children: "Chapter Seven"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-5xl font-light text-ivory sm:text-6xl",
					children: "Letters"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl font-serif italic text-ivory/60",
					children: "For every mood, a letter. Open only when you need to."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2",
					children: LETTERS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .7,
							delay: i * .1
						},
						whileHover: {
							y: -6,
							rotate: -.5
						},
						onClick: () => setOpen(i),
						className: "group relative overflow-hidden rounded-lg border border-gold/25 bg-gradient-to-br from-ivory to-[oklch(0.9_0.03_80)] p-8 text-left shadow-2xl",
						style: { boxShadow: "0 30px 60px rgba(0,0,0,.6)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-4 -top-4 h-24 w-24 rotate-12 bg-blush/40 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-4xl",
									children: l.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl text-midnight-deep",
									children: l.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs uppercase tracking-widest text-midnight/50 transition group-hover:text-midnight",
									children: "Tap to open →"
								})
							]
						})]
					}, i))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setOpen(null),
			className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .7,
					rotateX: 90,
					opacity: 0
				},
				animate: {
					scale: 1,
					rotateX: 0,
					opacity: 1
				},
				exit: {
					scale: .7,
					rotateX: 90,
					opacity: 0
				},
				transition: { duration: .6 },
				onClick: (e) => e.stopPropagation(),
				className: "relative w-full max-w-2xl rounded-lg border border-gold/40 bg-gradient-to-br from-ivory to-[oklch(0.92_0.03_80)] p-10 text-midnight-deep shadow-2xl sm:p-14",
				style: { boxShadow: "0 40px 100px rgba(0,0,0,.7), 0 0 60px rgba(233,199,124,.3)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl",
						children: LETTERS[open].emoji
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-3xl sm:text-4xl",
						children: LETTERS[open].title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t border-midnight/10 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg leading-relaxed italic sm:text-xl",
							children: LETTERS[open].body
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-right font-hand text-2xl text-blush",
							children: "— Always yours ❤"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(null),
						className: "mt-8 text-xs uppercase tracking-widest text-midnight/50 hover:text-blush",
						children: "Fold letter back"
					})
				]
			})
		}) })]
	});
}
var DREAMS = [
	{
		title: "Watch a sunrise together",
		where: "Somewhere quiet."
	},
	{
		title: "Take that trip we keep talking about",
		where: "Passports ready."
	},
	{
		title: "Build a tiny home for two",
		where: "With too many plants."
	},
	{
		title: "Learn to cook something ridiculous",
		where: "Together, badly, happily."
	},
	{
		title: "Dance at your birthday, ten years from now",
		where: "Same us. Slower song."
	},
	{
		title: "Grow old on the same porch",
		where: "Same tea. Same view."
	}
];
function Future() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative min-h-screen bg-gradient-to-b from-midnight-deep via-midnight to-midnight-deep px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-hand text-lg text-gold",
					children: "Chapter Eight"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-5xl font-light text-ivory sm:text-6xl",
					children: "Our Future"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl font-serif italic text-ivory/60",
					children: "A bucket list of small dreams and big ones. Every one waiting for us."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: DREAMS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .7,
							delay: i % 3 * .1
						},
						whileHover: { y: -6 },
						className: "rounded-2xl border border-gold/25 bg-midnight/50 p-8 backdrop-blur-md",
						style: { boxShadow: "0 20px 40px rgba(0,0,0,.5), inset 0 0 20px rgba(233,199,124,.03)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-hand text-gold",
								children: ["Dream #", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl leading-snug text-ivory",
								children: d.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-serif text-sm italic text-ivory/60",
								children: d.where
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs uppercase tracking-widest text-ivory/40",
								children: "To be continued..."
							})
						]
					}, i))
				})
			]
		})
	});
}
var LINES = [
	"Thank you...",
	"For every smile.",
	"Every laugh.",
	"Every ordinary moment that became extraordinary.",
	"Happy Birthday..."
];
function Finale() {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const particles = (0, import_react.useMemo)(() => Array.from({ length: 40 }, (_, i) => ({
		id: i,
		left: Math.random() * 100,
		delay: Math.random() * 8,
		duration: 10 + Math.random() * 12,
		size: 2 + Math.random() * 3
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 transition-all duration-[3000ms]",
				style: { background: visible ? "linear-gradient(to bottom, oklch(0.35 0.1 60), oklch(0.75 0.15 60) 40%, oklch(0.9 0.09 75) 70%, oklch(0.96 0.05 85))" : "linear-gradient(to bottom, #000, #0a0a1e)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute rounded-full bg-ivory/70",
					style: {
						left: `${p.left}%`,
						bottom: -10,
						width: p.size,
						height: p.size,
						boxShadow: "0 0 8px rgba(255,240,200,.9)",
						animation: `float ${p.duration}s linear ${p.delay}s infinite`
					}
				}, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes float{0%{transform:translateY(0);opacity:0}10%{opacity:.9}100%{transform:translateY(-120vh);opacity:0}}` })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center",
				children: [
					LINES.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: 1.2,
							delay: i * .6
						},
						className: i === LINES.length - 1 ? "mt-8 font-display text-5xl font-light text-midnight-deep sm:text-7xl" : "mt-3 font-serif text-xl italic text-midnight-deep/80 sm:text-2xl",
						children: l
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							scale: .9
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: {
							duration: 1.4,
							delay: 3.4
						},
						className: "mt-4 font-hand text-4xl text-blush sm:text-5xl",
						style: { textShadow: "0 2px 20px rgba(255,255,255,.4)" },
						children: "Coral Reef ❤"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						viewport: { once: true },
						transition: {
							duration: 1.5,
							delay: 5
						},
						className: "mt-24 font-display text-3xl text-midnight-deep/70 sm:text-4xl",
						children: "The End?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						viewport: { once: true },
						transition: {
							duration: 1.5,
							delay: 6.2
						},
						className: "mt-6 font-serif text-2xl italic text-midnight-deep/80",
						children: "No..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: 1.5,
							delay: 7.2
						},
						className: "mt-4 font-display text-4xl text-midnight-deep sm:text-5xl",
						children: ["To Be Continued... ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-blush",
							children: "❤"
						})]
					})
				]
			})
		]
	});
}
function EasterEggs() {
	const [modal, setModal] = (0, import_react.useState)(null);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setModal({
				title: "You found the heart 💗",
				body: "This one's for the days I don't say it enough: you are the best thing that has ever happened to me. Thank you for being you."
			}),
			className: "fixed bottom-6 left-6 z-30 text-2xl transition hover:scale-125",
			style: {
				animation: "hb 2.4s ease-in-out infinite",
				filter: "drop-shadow(0 0 10px rgba(233,144,180,.7))"
			},
			"aria-label": "Secret heart",
			children: "💗"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes hb{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setModal({
				title: "Inside joke unlocked ⭐",
				body: "\"You know the one. Yeah — that one. Don't act like you don't remember.\" 😏"
			}),
			className: "fixed right-6 top-24 z-30 text-lg opacity-70 transition hover:opacity-100 hover:scale-150",
			"aria-label": "Secret star",
			children: "✦"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setFlipped((v) => !v),
			className: "fixed bottom-6 right-6 z-30 h-24 w-20 [perspective:800px] sm:h-28 sm:w-24",
			"aria-label": "Secret polaroid",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-full w-full rounded-sm bg-ivory shadow-2xl transition-transform duration-700 [transform-style:preserve-3d]",
				style: { transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-end p-1 [backface-visibility:hidden]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3/4 w-full bg-gradient-to-br from-blush/40 to-midnight/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 font-hand text-[9px] text-midnight-deep",
						children: "flip me"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center p-2 text-center [backface-visibility:hidden]",
					style: { transform: "rotateY(180deg)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-hand text-[10px] leading-tight text-midnight-deep",
						children: [
							"\"I'll love you",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"in every version",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"of us.\" ❤"
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setModal({
				title: "A secret message",
				body: "\"If you found this, you know me better than anyone. ❤\"",
				hand: true
			}),
			className: "fixed left-1/2 bottom-2 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ivory/20 transition hover:text-gold",
			"aria-label": "Hidden message",
			children: "· · ·"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setModal(null),
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .85,
					y: 20
				},
				animate: {
					scale: 1,
					y: 0
				},
				exit: {
					scale: .85,
					y: 20
				},
				onClick: (e) => e.stopPropagation(),
				className: "relative w-full max-w-md rounded-3xl border border-gold/30 bg-midnight/80 p-8 text-center backdrop-blur-2xl",
				style: { boxShadow: "0 0 80px rgba(233,199,124,.3)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-2xl text-ivory",
						children: modal.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-4 ${modal.hand ? "font-hand text-2xl text-gold-soft" : "font-serif italic text-ivory/80"}`,
						children: modal.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal(null),
						className: "mt-8 text-xs uppercase tracking-widest text-ivory/50 hover:text-gold",
						children: "Close"
					})
				]
			})
		}) })
	] });
}
function Index() {
	const [entered, setEntered] = (0, import_react.useState)(false);
	const beginRef = (0, import_react.useRef)(null);
	const handleEnter = () => {
		setEntered(true);
	};
	const scrollToStory = () => {
		document.getElementById("chapter-2")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen scroll-smooth bg-midnight-deep text-ivory antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !entered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prologue, { onEnter: handleEnter }, "prologue") }), entered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: 1.08
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			transition: {
				duration: 1.4,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, { onBegin: scrollToStory }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: beginRef,
					id: "chapter-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurStory, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Museum, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Soundtrack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Adventures, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letters, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Future, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finale, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EasterEggs, {})
			]
		})]
	});
}
//#endregion
export { Index as component };
