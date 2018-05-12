
	const portfolio = [
		{
			// TEDxPortland
			name: 'TEDxPortland - BRIDGES',
			frontImage: 'bridges/bridges_1.gif', 
			images: ['bridges/bridges_2.jpg','bridges/bridges_3.gif','bridges/bridges_4.jpg','bridges/bridges_5.jpg', ],
			client: 'Enjoy The Weather',
			skills: ['Vue.js', 'VueX', 'Greensock', 'CSS Animation', 'Responseive Design', 'Photoshop'],
			url: 'http://www.tedxportland.com/',
			description: '<p>With a two-week deadline, I was brought-on to update the TEDxPortland website with new content, new Intro animations, and a new theme '+
				'for 2018</p>'+
				'<p>Thankfully, the site was well built Vue SPA (Single Page App) to begin with, making it easy to update. </p>',
			actions: '<p>I used CSS keyframe animation for the title element, updated the vueX store with new speaker and partner information, updated the markup in'+
				' several Vue templates, and re-styled much of the site for the 2018 theme.</p>'	
		},{
			// GSRO 
			name: 'Washington State Salmon Report',
			frontImage: 'gsro/gsro_1.gif', 
			images: ['gsro/gsro_2.jpg','gsro/gsro_3.jpg','gsro/gsro_4.jpg','gsro/gsro_5.jpg','gsro/gsro_6.jpg'],
			client: 'HotPepper Studios',
			skills: ['CSS3', 'Responsive Design', 'Wordpress', 'PHP', 'SQL', 'jQuery', 'AJAX'],
			url: 'https://stateofsalmon.wa.gov/',
			description: '<p>This was a fairly complex site that included full-bleed videos, multiple subpages, graphs and chart data loaded from a custom API, and dynamic articles loaded with AJAX.</p> ',
			actions: '<p>I worked with our designer and a data-developer with the Governor\'s Office to develop this site. Juggling all the sub pages in Wordpress was a challenge, as was making the AJAX calls display properly. </p>'
		}, {
			// MEGT 
			name: 'Mother Earth\'s Gifts and Treasures',
			frontImage: 'megt/megt_1.gif',
			images: ['megt/megt_1.gif','megt/megt_2.jpg','megt/megt_3.jpg',],
			client: 'Mother Earth\'s Gifts and Treasures',
			skills: ['CSS3', 'Vue.js', 'webpack', 'Laravel', 'SQL', 'Photoshop'],
			url: 'http://www.motherearthsgiftsandtreasures.com/',
			description: '<p>MEGT is a local vendor of naturopathic remedies and herbal teas. The owner had an aging static website created over a decade ago, with a separate mobile version. Besides being a hassle for users, the hosting and upkeep of multiple sites as a financial burden.</p>',
			actions: '<p>I helped set-up new hosting and created a new site from scratch with a Vue.js front-end and Laravel back-end connecting to a new SQL database for products and settings. </p>'+
					'<p>Besides making the new site responsive and much more user friendly, I added new pages for ABOUT, LEGAL, and other content. I also added an ADMIN suite to add or update product information. The client was delighted with the new site and cutting her website costs by almost 70%.</p>'
		},{
			// COLOR SUPPLY
			name: 'Color Supply',
			frontImage: 'color_supply/color_supply_1.gif', 
			images: ['color_supply/color_supply_2.jpg', 'color_supply/color_supply_3.jpg', 'color_supply/color_supply_4.jpg', ],
			client: 'Mason Gentry',
			skills: ['CSS3', 'CSS Animation', 'Responsive Design', 'SVG Graphics', 'jQuery','Photoshop'],
			url: 'http://colorsupplyyy.com/',
			description: '<p>Color Supply is a color picking tool and color pallet design app. using color combinations from notable international designers and illustrators.</p>',
			actions: '<p>This was my first project with Mason Gentry and I didn\'t create it, another developer created the basic page template but lacked the CSS and jQuery skills to make it work. I enjoyed the challenge of changing colors in SVG elements and creating CSS elements to work with them. </p>'	
		},{
			// Design Authority
			name: 'Design Authority Quiz',
			frontImage: 'design_authority/design_authority_1.gif', 
			images: ['design_authority/design_authority_2.jpg', 'design_authority/design_authority_3.jpg', 'design_authority/design_authority_4.jpg'],
			client: 'Mason Gentry',
			skills: ['CSS3', 'Angular', 'Responsive Design', 'jQuery', 'SVG graphics'],
			url: 'http://designauthority.co/',
			description: '<p>The Design Authority quiz site asks a series of questions to determine the user\'s focus as a Designer and give feedback relating to other '+
						'famous designers with the same focus. </p>',
			actions: '<p>This was a kinda fun, simple site to create. Looking at it now, I can picture it being a natural project for Vue-cli instead of the Angular that I used originally. The designer originally wanted to use static images for the vertical-'+
					'lined bar graphs but instead we went with dynamically generated SVG lines that made it look much better and responsive. </p>'+
					'<p>The only challenges that I had with the site was in the way the designer wanted  to display the result-content on small screens. That lead me to using a 100% width with a min-width for content on larger viewports (screens). </p>'	
		},{
			// HIPTRACK
			name: 'HipTrack free Time Tracking Service',
			frontImage: 'hipTrack/hipTrack_1.gif',
			images: ['hipTrack/hipTrack_2.png','hipTrack/hipTrack_3.png','hipTrack/hipTrack_4.png','hipTrack/hipTrack_5.png'],
			client: 'Mason Gentry',
			skills: ['CSS3', 'Responsive Design', 'Vue.js', 'Laravel', 'MySQL'],
			url: '',
			description: '<p>HipTrack was a quick and simple time-logging app for Psychologists and Councilors professionals to log time spent on a pre-set series of  categories as well as personalize their categories.</p>'+
						'<p>The page would also create weekly and monthly reports of how the houers where spent</p>',
			actions: '<p>This site doesn\'t seem to currently be live so I\'m not sure what it\'s status is, but it was a neat challenge in data collection and report generation. The site was created with Vue (not Vue2), Laravel, and custom SVG donut-charts. </p>'	
		},{
			// BLACK SWAN API	
			name: 'Black Swan Price API',
			frontImage: 'black_swan/black_swan_1.png', 
			images: ['black_swan/black_swan_1.png','black_swan/black_swan_2.png'],
			client: 'confidential',
			skills: ['vue.js', 'AJAX', 'API', 'jQuery'],
			url: '',
			description: '<p>A client needed an API interface to scrape pricing data from the Black Swan API. Unfortunately, this was an NDA job and I can\'t show it off properly. </p>',
			actions: '<p>While this was a fairly simple project, searching and manipulating the API data was a challenge, since the API JSON had several different basic data schemes. Eventually, I decided to create a new JSON object from all the incoming data and use that for my data-source.'+
					' This proved to be a good idea when the original data format changed while I was working on the project. </p>',
		},{
			// QUANTUM OPTICAL	
			name: 'Quantum Optical',
			frontImage: 'quantum_optical/qo_1.gif', 
			images: ['quantum_optical/qo_2.jpg','quantum_optical/qo_3.jpg','quantum_optical/qo_4.jpg','quantum_optical/qo_5.jpg','quantum_optical/qo_6.jpg','quantum_optical/qo_7.jpg','quantum_optical/qo_8.png','quantum_optical/qo_9.jpg','quantum_optical/qo_10.gif'],
			client: 'Nightship Networks',
			skills: ['CSS3', 'Responsive Design', 'ASP', 'jQuery', 'AJAX', 'SQL', 'Photoshop'],
			url: 'http://www.quantumoptical.com/',
			description: '<p>Quantum Optical is a site for Optometric test-taking and certification. After buying site credit or using a provided code, a user may take a test and receive a certificate for his state. </p>'+
						'<p>Nightship Networks gave me the task of creating a new front-end for the existing ASP back-end of the site as well as adding new content as well as creating a new account-history page and related functions.</p>',						
			actions: '<p>While most of my work on this site was in updating the markup, creating new CSS, and new jQuery functions, I did manage to add some Angular functionality to greatly improve the test-library page\'s loading time and pagination. I also '+
					' created a common test-history object  and a course-menu object that is saved in Local Storage for quick site-wide access. </p>'+
					'<p> The site also needed to have the ability to easily add themes for client portals, to make the site styling match client sites. I\'ve probably created thirty portal landing pages for them in the last few years.</p> '
		},{
			// WKKF
			name: 'Kellog Foundation Food Pojects',
			frontImage: 'wkkf/wkkf_1.gif', 
			images: ['wkkf/wkkf_2.jpg','wkkf/wkkf_3.gif','wkkf/wkkf_4.jpg'],
			client: 'HotPepper Studios for the kellog Foundation',
			skills: ['CSS3', 'Responsive Design', 'Wordpress', 'PHP', 'SQL', 'jQuery'],
			url: 'http://communityfood.wkkf.org/',
			description: '<p>The Kellogg Foundation\'s Food Revolution site is about changing the way we think about growing and distributing food. The site essentially has two parts, Food Stories and an interactive map of Food Projects. </p>',
			actions: '<p>This was a fairly strait-forward wordpress site with one complex part, an interactive map of project locations linked to a searchable, dynamic menu of project reports and themes</p>'
		},{
			// ADVANCED META-TAG GENERATOR
			name: 'Advanced Meta-tag Generator',
			frontImage: 'meta_tags/meta-tags_1.gif', 
			images: ['meta_tags/meta-tags_1.gif', 'meta_tags/meta-tags_2.jpg','meta_tags/meta-tags_3.jpg'], 
			client: 'BigEngage',
			skills: ['Angular', 'jQuery', 'Meta tags'],
			url: 'https://www.bigengage.com/Tools/Advanced_Meta_Tag_Generator/',
			description: '<p>BigEngage wanted to add a Meta-Tag scraper/generator to their site\'s tools. It was a fun little project that I still use to see what a site\'s meta-tags are. Pro-tip, don\'t scrape the NSA website. '	,
			actions: '<p>This site was a fairly basic single page with custom jQuery to scrape the meta-data from the target site and manipulate it in the form fields. It seems antiquated by today\'s standards of using Angular or Vue to manipulate the front-end.</p>'
		},{
			// CONCIOUS TRANSFORMATION	
			name: 'Conscious Transformations',
			frontImage: 'ct/ct_1.gif', 
			images: ['ct/ct_2.jpg','ct/ct_3.jpg','ct/ct_4.jpg','ct/ct_5.jpg','ct/ct_6.jpg','ct/ct_7.jpg'],
			client: 'HotPepper Studios for Conscious Transformations',
			skills: ['CSS3', 'Responsive Design', 'Wordpress', 'PHP', 'SQL', 'jQuery'],
			url: 'https://conscioustransformation.com/',
			description: '<p>The Conscious Transformation site coordinates product sales, classes, and philosophical teachings in conjunction with the InnerMatrix parent organization. <p>'	,
			actions: '<p>This was a project for HotPepper Studios, using Wordpress with some custom jQuery controls and CSS Animations. The only challenging part of the project was creating a data-driven Training Session page with calendar and sign-up functions. </p>'
		},{
			// CIRCLES
			name: 'Circles Menu Demo',
			frontImage: 'circles/circles_1.gif', 
			images: ['circles/circles_1.gif'],
			client: 'Nightship Networks',
			skills: ['CSS3', 'CSS Animation', 'Responsive Design', 'jQuery'],
			url: 'http://mmcguire.qudock.com/projects/circles/',
			description: '<p>Nightship Networks was toying with the idea of having truly unique home page navigation as part of a site update, so I created this demo as a proof of concept. The project was shelved due to budgetary reasons.</p>',
			actions: '<p>The idea is that random CSS-generated circles would be generated on page-load and move to the center of the page-view when clicked-on. </p>'
		},{
			// TAKING ACTION
			name: 'Taking Action on Overuse',
			frontImage: 'taking_action/taking_action_1.JPG', 
			images: ['taking_action/taking_action_2.jpg', 'taking_action/taking_action_3.jpg', 'taking_action/taking_action_4.jpg', 'taking_action/taking_action_5.jpg', 'taking_action/taking_action_6.jpg' ],
			client: 'HotPepper Studios for the MacColl Center',
			skills: ['CSS3', 'Responsive Design', 'Wordpress', 'PHP', 'SQL', 'jQuery'],
			url: 'https://takingactiononoveruse.org/',
			description: '<p>The MacColl Center\'s Taking Action site addresses over-use of costly medical procedures and medications. </p>',
			actions: '<p>This was a pretty easy Wordpress site with no real challenges or surprises. </p>'
		},{
			// OUT OF YOUR HEAD
			name: 'Out of Your Head audio panel',
			frontImage: 'ooyh/ooyh_1.gif', 
			images: ['ooyh/ooyh_2.jpg','ooyh/ooyh_3.jpg',],
			client: 'Darin Fong Audio',
			skills: ['CSS3', 'CSS Animation', 'Responsive Design', 'jQuery'],
			url: 'https://fongaudio.com/',
			description: '<p>Darin Fong needed a new audio control panel for his internet audio service. The project included creating a partially generic control panel that could be dynamically customized from an API.</p> ',
			actions: '<p>The project was created as a stand-alone web page with the intent of using the markup with in a larger app. I enjoyed the challenge of re-creating static button and control images in CSS (using the images as a fallback).</p>'	
		},{
			// CROWS NEST
			name: 'The Crows Nest Task Manager',
			frontImage: 'crows_nest/crowsnest_1.gif', 
			images: ['crows_nest/crowsnest_2.jpg','crows_nest/crowsnest_3.gif'],
			client: 'undesclosed',
			skills: ['CSS3', 'Responsive Design', 'Angular', 'PHP', 'SQL', 'jQuery'],
			url: '',
			description: '<p>The Crows Nest was a task management application with dynamic digital post-it notes. After approximately 80% completion, the project was stopped, due to an already-published product with a similar name.</p>',
			actions: '<p>This was a single-page application using Angular for the front-end data handling and jQuery to manipulate the post-it notes. </p>'	
		},{
			// CURO.NET
			name: 'Curo Healing',
			frontImage: 'curo_healing/curo_1.jpg', 
			images: ['curo_healing/curo_2.jpg'],
			client: 'Curo Healing',
			skills: ['CSS3', 'PHP', 'CodeIgnitor','Responsive Design', 'jQuery'],
			url: 'http://curo-healing.com/',
			description: '<p>This was a simple vendor site with basic pages, info, and contact forms.</p>',
			actions: '<p>This project was fairly basic content that included a google map plugin and a dynamic contact form. Without the form, it could have been done without PHP. </p>'	
		},{
			// CUSTOMSELL 
			name: 'CustomSell',
			frontImage: 'customsell/customsell_1.gif', 
			images: ['customsell/customsell_1.gif','customsell/customsell_1.jpg','customsell/customsell_2.jpg','customsell/customsell_3.jpg','customsell/customsell_4.jpg'],
			client: 'Customsell',
			skills: ['CSS3', 'CSS Animation', 'SVG graphics', 'Responsive Design', 'jQuery'],
			url: 'http://www.meetcustomsell.com/', 
			description: '<p>The \'tour\' was an introductory demo of the site\'s features, including custom page animation and animated CSS and SVG graphics.</p>',
			actions: '<p>I was hired to update content on the CustomSell site, fix broken CSS animations, and add new content as well as re-do the basic page-action. The entire site also needed updated responsive layout for small screens</p>'	
		},{
			// SILENCE IS BROKEN
			name: 'The Silence is Broken',
			frontImage: 'silence/silence_1.jpg', 
			images: ['silence/silence_1.jpg','silence/silence_2.jpg', 'silence/silence_3.jpg' ],
			client: 'Unlimited Labs for Silence is Broken',
			skills: ['jQuery', 'css3'],
			url: 'http://www.thesilenceisbroken.org/index.html',
			description: '<p>This was a fairly simple small project, requiring a little jQuery to control playing videos.</p>'	,
			actions: '<p></p>'
		},{
			// BEAT THE BLUES	
			name: 'Beat the Blues promotion',
			frontImage: 'beat_blues/beat_blues_1.jpg', 
			images: ['beat_blues/beat_blues_2.jpg','beat_blues/beat_blues_3.jpg',],
			client: 'Nightship Networks',
			skills: ['CSS3', 'Responsive Design'], 
			url: 'http://blutechnation.com/',
			description: '<p>This was a fairly simple three-page site for a BluTech lenses promotion.</p>',
			actions: '<p>This site was a \'last minute\' project for Nightship Networks. It was a basic landing-page re-creating a printed flyer and two sign-up pages.</p>'	
		},{
			// SKYSTEM
			name: 'SkyStem form redesign',
			frontImage: 'skystem/skystem_1.jpg', 
			images: ['skystem/skystem_1.jpg','skystem/skystem_2.jpg'], 
			client: 'Skystem',
			skills: ['CSS3', 'Responsive Design', 'jQuery'],
			url: 'http://skystem.com/',
			description: '<p>The SkyStem site wanted to re-design the look-and-feel of their forms.</p>',
			actions: '<p></p>'	
		},{
			// EDGE
			name: 'The EDGE 3.0',
			frontImage: 'edge/edge_1.jpg', 
			images: ['edge/edge_2.jpg','edge/edge_3.jpg','edge/edge_4.jpg','edge/edge_5.jpg','edge/edge_6.jpg'],
			client: 'GateWay Professional Network', 
			skills: ['CSS3', 'Responsive Design', 'SVG Graphics', 'PHP', 'jQuery'],
			url: 'https://www.gatewaypn.com/',
			description: '<p>Originally part of a team hired to completely re-work the site from scratch, my role was to work on the front-end. After going through two back-end developers, the project changed to having me use the front-end mockups I created to give the site a front-end makeover.</p>',
			actions: '<p>This was a fairly big job with a limited timeline and budget (after the client had already paid for two development cycles). Besides basic re-styling, I also added charts and graphs that were a combination of the Fusion Charts plugin and custom-generated pie-charts.</p>'+
					'<p>Additional work included creating custom report pages and updating the site\'s navigation</p>'
		},{
			// OAW
			name: 'Opticians Association of Washington',
			frontImage: 'oaw/oaw_1.gif', 
			images: ['oaw/oaw_2.jpg','oaw/oaw_3.jpg','oaw/oaw_4.jpg','oaw/oaw_5.jpg'],
			client: 'Nightship Networks',
			skills: ['CSS3', 'Responsive Design', 'jQuery'], 
			url: 'http://www.oaw.org/',
			description: '<p>The OAW was a Nightship Networks client that I created a new site for, including a product gallery and event schedule page.</p>'	,
			actions: '<p></p>'
		},{
			// NETCAMS IO
			name: 'NetCams IO',
			frontImage: 'netcams_io/netcam_1.jpg', 
			images: ['netcams_io/netcam_1.jpg', 'netcams_io/netcam_2.jpg'],
			client: 'Netcams.IO',
			skills: ['CSS3', 'Responsive Design', 'Ruby on Rails',  'jQuery'],
			url: 'http://netcams.io/',
			description: '<p>I was contracted to create the front-end for this Rails site for remotely accessing webcams, which mainly involved displaying videos and managing account settings. Unfortunately, the owner had financial difficulties and the contract ended. Surprisingly, while the site is still active, it is in the un-finished state that I left it in.</p> '	,
			actions: '<p>While I\'ve only worked on a couple Ruby sites, it\'s nice that one MVC is very much like another when your creating front-end content</p>'
		},{
			// OAM
			name: 'Opticians Association of Massachusetts',
			frontImage: 'oam/oam_1.jpg', 
			images: ['oam/oam_2.jpg','oam/oam_3.jpg','oam/oam_4.jpg','oam/oam_5.jpg','oam/oam_5.jpg'],
			client: 'Nightship Networks',
			skills: ['CSS3', 'Responsive Design', 'ASP', 'AJAX',  'jQuery'],
			url: 'https://www.opticiansma.org/',
			description: '<p>OAM is a Nightship Networks client that I was given the task of creating a new front-end for the existing site. I also created a new convention Event Sign-up and Classified Ads pages.</p>',
			actions: '<p></p>'
		},{
			// CAREFREE YACHT CHARTERS	 
			name: 'Carefree Yacht Charters',
			frontImage: 'carefree_yacht/carefree_yacht_1.jpg', 
			images: ['carefree_yacht/carefree_yacht_2.jpg','carefree_yacht/carefree_yacht_3.jpg','carefree_yacht/carefree_yacht_4.jpg','carefree_yacht/carefree_yacht_5.jpg','carefree_yacht/carefree_yacht_6.jpg'],
			client: 'Carefree Yacht Charters',
			skills: ['CSS3', 'Responsive Design', 'PHP', 'SQL', 'jQuery'],
			url: 'https://www.carefreecharters.com/',
			description: '<p>Carefree Yacht Charters needed a new site built, from photoshop designs. While the site was fairly straitforward, one challenge was to make text and layers images display properly with mobile styling.</p>',
			actions: '<p></p>'
		},{
			// DORA INTERNATIONAL 
			name: 'DORA International',
			frontImage: 'dora/dora_1.jpg', 
			images: ['dora/dora_2.jpg','dora/dora_3.jpg'],
			client: 'DORA International',
			skills: ['CSS3', 'Responsive Design', 'PHP', 'jQuery'],
			url: 'https://www.jrjewelers.com/designer-jewelry/dora-international.html',
			description: '<p>DORA needed to give their International portal a facelift.</p>',
			actions: '<p>While this was a pretty simple site, it did have some challenging mobile styling and CSS animation.</p>'
		},{
			// COLUMBIA LAW GROUP
			name: 'Columbia Law Group',
			frontImage: 'clg/clg_1.jpg', 
			images: ['clg/clg_1.jpg','clg/clg_2.jpg'],
			client: 'Columbia Law Group',
			skills: ['CSS3',  'jQuery'],
			url: '',
			description: '<p>The Columbia Law Group contracted me to create a new site, from basic sketches. The site consisted of simple HTML markup. Oddly, the site and client dissapeared shortly after the site went live.</p>',
			actions: '<p></p>'
		},{
			// ATLAS TRAVEL	
			name: 'Atlas travel',
			frontImage: 'atlas_travel/atlast_travel_1.gif',  
			images: ['atlas_travel/atlas_travel_2.jpg','atlas_travel/atlas_travel_3.jpg','atlas_travel/atlas_travel_4.jpg','atlas_travel/atlas_travel_5.jpg','atlas_travel/atlas_travel_6.jpg','atlas_travel/atlas_travel_6.jpg'],
			client: 'Atlas Travel Web',
			skills: ['CSS3',  'jQuery'],
			url: 'https://www.atlastravelweb.com/',
			description: '<p>Atlas Travel contracted me to create a new site from scratch, using photoshop design mockups.</p>',
			actions: '<p>While this was a larger project, there wasn\'t any dynamic content, making it a rare HTML-only site</p>'
		},{
			// NWPOR
			name: 'NWPOR',
			frontImage: 'nwpor/nwpor_2.jpg', 
			images: ['nwpor/nwpor_3.jpg','nwpor/nwpor_4.jpg'],
			client: 'NWPOR',
			skills: ['CSS3', 'CSS Animation', 'Photoshop', 'Responsive Design', 'parallax animation',  'jQuery'],
			url: '',
			description: '<p>I created a huge SPA for a friend\'s paranormal Research Group, that had six page-views spread around the central landing page-view in the shape of a five-pointed star with navigation that moved the window-view with parralax animation around the whole thing. My friend missed paying the hosting fee and the whole glorious thing was lost except a couple images I took, though I wish I had a gif of the animation.</p>',
			actions: '<p>While the site itself wasn\'t very complicated, the parallax animation was an interesting challenge. </p>'
		},{
			// LINDATA
			name: 'LindData.com',
			frontImage: 'linddata/linddata_1.jpg', 
			images: ['linddata/linddata_1.jpg','linddata/linddata_2.jpg'],
			client: 'Lind Data Services',
			skills: ['CodeIgnitor', 'PHP', 'CSS3'],
			url: '',
			description: '<p>Lind Data Services was a film and video storage warehouse in Holywood and needed a website to help users locate and track their stored content. Unfortunately the site is no longer active.</p>'	,
			actions: '<p></p>'
		}
	]
	
	
	
	export {portfolio}
	
	