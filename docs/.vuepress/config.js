module.exports = {
	title: "Carlos' Outbreak Minisite",
	description: "Guides for getting through scenarios in Resident Evil: Outbreak and Resident Evil: Outbreak - File #2",
	head: [
		['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/favicons/apple-icon-57x57.png"}],
		['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/favicons/apple-icon-60x60.png"}],
		['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/favicons/apple-icon-72x72.png"}],
		['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/favicons/apple-icon-76x76.png"}],
		['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/favicons/apple-icon-114x114.png"}],
		['link', { rel: "apple-touch-icon", sizes: "120x120", href: "/favicons/apple-icon-120x120.png"}],
		['link', { rel: "apple-touch-icon", sizes: "144x144", href: "/favicons/apple-icon-144x144.png"}],
		['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/favicons/apple-icon-152x152.png"}],
		['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-icon-180x180.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicons/android-icon-192x192.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicons/favicon-96x96.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
		['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
		['meta', { name: "theme-color", content: "#ffffff"}],
	],
	theme: 'yuu',
	themeConfig: {
		logo: '/icons/gator112.png',
		nav: [
			{
				text: "Characters",
				items: [
					{ text: "Kevin", link: "/characters/kevin" }, 
					{ text: "Mark", link: "/characters/mark" }, 
					{ text: "Jim", link: "/characters/jim" }, 
					{ text: "George", link: "/characters/george" }, 
					{ text: "David", link: "/characters/david" }, 
					{ text: "Alyssa", link: "/characters/alyssa" }, 
					{ text: "Yoko", link: "/characters/yoko" }, 
					{ text: "Cindy", link: "/characters/cindy" }
				]
			},
			{
				text: "Scenarios",
				items: [
					{ text: "Outbreak", link: "/scenarios/outbreak" },
					{ text: "Below Freezing Point", link: "/scenarios/below-freezing-point" },
					{ text: "The Hive", link: "/scenarios/the-hive" },
					{ text: "Hellfire", link: "/scenarios/hellfire" },
					{ text: "Decisions, Decisions", link: "/scenarios/decisions-decisions" },
					{ text: "Wild Things", link: "/scenarios/wild-things" },
					{ text: "Underbelly", link: "/scenarios/underbelly" },
					{ text: "Flashback", link: "/scenarios/flashback" },
					{ text: "Desperate Times", link: "/scenarios/desperate-times" },
					{ text: "End of the Road", link: "/scenarios/end-of-the-road" },
				]
			},
			{
				text: "Challenges",
				items: [
					{ text: "Elimination 1", link: "/challenges/elimination-1" }, 
					{ text: "Elimination 2", link: "/challenges/elimination-2" }, 
					{ text: "Elimination 3", link: "/challenges/elimination-3" }, 
					{ text: "Showdown 1", link: "/challenges/showdown-1" }, 
					{ text: "Showdown 2", link: "/challenges/showdown-2" }, 
					{ text: "Showdown 3", link: "/challenges/showdown-3" }
				]
			}
		],
		sidebar: {
			"/characters/" : [
				{
					title: "Characters",
					collapsable: false,
					children: [
						"kevin",
						"mark",
						"jim",
						"george",
						"david",
						"alyssa",
						"yoko",
						"cindy"
					]
				}	
			],
			"/scenarios/": [
				{
					title: "Scenarios",
					collapsable: false,
					children: [
						"outbreak",
						"below-freezing-point",
						"the-hive",
						"hellfire",
						"decisions-decisions",
						"wild-things",
						"underbelly",
						"flashback",
						"desperate-times",
						"end-of-the-road"
					]	
				}
			],
			'/challenges/': [
				{
					title: "Challenges",
					collapsable: false,
					children: [
						"elimination-1",
						"elimination-2",
						"elimination-3",
						"showdown-1",
						"showdown-2",
						"showdown-3"
					]	
				}
			]
		},
		yuu: {
			defaultColorTheme: 'red'
		}
	}
}
