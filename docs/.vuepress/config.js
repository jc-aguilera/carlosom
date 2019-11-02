module.exports = {
	title: "Carlos' Outbreak Minisite",
	description: "Guides for getting through scenarios in Resident Evil: Outbreak and Resident Evil: Outbreak - File #2",
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
		}
	},
	theme: 'yuu'
}
