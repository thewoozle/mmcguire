	<template>
	  <div class="page_wrapper" ref="app" id="app">
		<div class="spinner ">
			<span class="spinner_content"></span>
		</div>
	  
		<page_header />
		<main class="main_content">
			<div class="main_content_inner">
				<intro  />
				<what_i_do/>
				<contact />
				<workshop />
				<portfolio />
			</div>
		</main>	
		<page_footer />
	  </div>
	</template>

	<script>
	import page_header from '@/components/page_header'
	import page_footer from '@/components/page_footer'
	import intro from '@/components/intro'
	import what_i_do from '@/components/what_i_do'
	import contact from '@/components/contact'
	import workshop from '@/components/workshop'
	import portfolio from '@/components/portfolio'

	
	export default {
	  name: 'App',
	  data() {
		return {
		}
	  }, 
	  watch: {
		'$route' () {
			var vm = this;
			if (vm.$route.name == 'portfolio') {
			setTimeout(function(){
				vm.$refs.app.classList.add('slides');
			},1000);
			} else {
				vm.$refs.app.classList.remove('slides');				
			}
		}
	  },
	  components: {
		'page_header' : page_header ,
		'page_footer': page_footer,
		'intro' : intro,
		'what_i_do' : what_i_do,
		'contact' : contact,
		'workshop' : workshop,
		'portfolio' : portfolio
	  },
	  methods: {
	  }
	}
	</script>
	
	<style>
	/*	-----------------------------------------------------------------------------------------------------
										VARIABLES
		-----------------------------------------------------------------------------------------------------	*/

		:root {
			--backgroundColor: #0C0D0F;	/* woodsmoke 	rgba(12,13,15,1);		- off-black							*/
			--mainColor: 		#abb3be;	/*	cadet blue 		rgba(171, 179, 190, 1)	- lighter silvery blue				*/
			--secondary:		#aeb79e;		/*	zorba 			rgba(160, 156, 144, 1)	- yellowish medium gray 		*/
			--highlight: 		#CDD5e0; 	/*	tiara				rgba(205, 213, 224, 1)	- light grayish silver 				*/
			--altColor:			#fff;
			--accentText: 		#c1bfb5; 		/*	yellowish off-white	*/
			--links: 			#829D80; 	/*	amulet 			rgba(130, 157, 128, 1) 	- medium grayish green			*/
			--titleColor:		#8EAAEC; 	/*bright blue*/
			--thirdColor:		#9AA8CB;	/* rock blue 		rgba(154, 168, 203, 1)	- slightly grayish bright blue 	*/
			--contactLink: 		#557753;	/* med green */
			--sectionBack: 		rgba(154, 168, 203, .15);  
			--highlightBack: 	rgba(171, 179, 190, .25);
			--contrastColor:	#314e5d;
			--contactBack: 		rgba(85,119,83,.65);
			--warningColor: 	#c53310;
			
			--borderRadius: 		.2rem;
			--boxShadow: 			1px 1px 1px rgba(0,0,0,0.5);
		}





	/*  -----------------------------------------------------------------------------------------------------
									COLOR GRADIENTS
		-----------------------------------------------------------------------------------------------------		*/



	/*  -----------------------------------------------------------------------------------------------------
									ANIMATIONS
		-----------------------------------------------------------------------------------------------------		*/
		@keyframes levitate {


		}

		@keyframes spin {
		from {transform:rotate(0deg);}
		to {transform:rotate(360deg);}
		}



	/*  -----------------------------------------------------------------------------------------------------
									GENERAL  TYPOGRAPHY
		-----------------------------------------------------------------------------------------------------	*/
		* {
			color: var(--mainColor);			
			font-size: inherit;
		}
		*,
		.section .section_content .title {
			font-family: 'Proxima Nova', "Open Sans",Arial,sans-serif;	
		}	
		.title {	
			color: var(--titleColor);
		}
		.link .text,
		.title,	
		p .moral,
		.section.what_i_do .box .box_header .box_title,
		.page_title {
			font-family: raleway, 'Open Sans',  sans-serif;		
		}	

		.copyright,	
		#intro .mantra .detail{
			font-family: 'Quattrocento', serif;
		}



		/*	------	TITLES	------	*/	

		.section_title {
		font-size: 2.5em;
		line-height: 1.5em;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: .05em;
		text-shadow: 0px 1px 2px rgba(255,255,255,.5);
		}
		.subtitle {
		font-size: 1.25rm;
		text-transform: uppercase;
		}
		.body_header .header_content {
		padding: 6px 15px;
		font-size: 1.1em;
		line-height: 1em;
		} 
		.sub_section_title {
		font-weight: 300;
		font-size: 1.75em;
		line-height: 2em;
		padding: 0 0 2px 0;
		text-align: center;
		text-transform: uppercase;
		color: var(--titleColor);
		letter-spacing: .15em;
		text-shadow: -1px -1px 1px rgba(0,0,0,0.35);
		}
		.content_title {
		font-family: helvetica, sans-serif;
		font-size: 1.5em;
		line-height: 1.5em;
		}





	/*  -----------------------------------------------------------------------------------------------------
									COMMON STYLES
		-----------------------------------------------------------------------------------------------------    */ 

		/*	------------	BUTTONS & LINKS 	------------	*/	
		.close_button {
		position: relative;
		display: inline-block;		
		font-size: 2.5rem;
		width: 1em;
		height: 1em;
		cursor: pointer;
		color: var(--contactLink);		
		background: rgba(255,255,255,.1);		
		border: solid 2px var(--contactLink);
		border-radius: .2rem;
		}
		.close_button:hover {
		background: var(--warningColor);
		border-color: #800;
		color: #fff;
		}
		.close_button:active {
		transform: translateY(1px);
		}
		.button {

		}

		.link {
		color: #17607B;
		position: relative;
		text-shadow: -1px -1px 1px rgba(0,0,0,0.15);
		}
		.link:hover {
		color: var(--titleColor);
		}
		.link:active {
		top: 1px;
		}

		p .moral {
		display: block;
		text-align: right;
		font-size:  1.1rem;
		font-weight: 300;
		font-style: italic;
		color: #b99;
		}



		/*	------------	SPINNER	------------	*/		
		.spinner {
		position: fixed;
			left: 50%;
			top: 50%;
			z-index: -1;
		width: 5rem;
		height: 5rem;
		opacity: 0;
		transform: scale(.25) translate(-2.5rem, -2.5rem);
		transform-origin: 0 0;
		transition: z-index .65s, opacity .65s, transform .6s;
		}
		.spinner.show {
		opacity: .85;
		transform: scale(1)  translate(-2.5rem, -2.5rem);
			z-index: 1001;
		}
		.spinner.show .spinner_content {
		display: inline-block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 2px solid transparent;
		border-top-color: #55788c;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;	;
		}

		.spinner .spinner_content:before,
		.spinner .spinner_content:after {
		content: "";
		position: absolute;
		border-radius: 50%;
		border: 2px solid transparent;
		}

		.spinner .spinner_content:before {
			top: 10%;
			left: 10%;		
		width: 80%;
		height: 80%;
		border-top-color: #a94848;
		-webkit-animation: spin 3s linear infinite;
		animation: spin 3s linear infinite;
		}
		.spinner .spinner_content:after {
			top: 20%;
			left: 20%;		
		width: 60%;
		height: 60%;
		border-top-color: #638877;
		-webkit-animation: spin 1.5s linear infinite;
		animation: spin 1.5s linear infinite;
		}


		.rise {
		transform:translateY(3rem) scale(.5);
		transition: transform 1.25s, -webkit-filter 1.25s;
		transition-delay: .25s;
		}
		.section.show .rise {
		transform:translateY(0) scale(1);
		}	




		/*	------------	SCROLL BAR (webkit)	------------	*/	
		::-webkit-scrollbar {
		width: 10px;
		height: 10px;
		}

		::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
		background: rgba(0,0,0,0.15);
		border-radius: 2px;
		}

		::-webkit-scrollbar-thumb {
		border-radius: 4px;
		cursor: pointer;
		background: rgba(0, 118, 163, .4);
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5),
							2px 2px 5px rgba(0,0,0,0.3); 
		}
		::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 118, 163, .5);
		}





	/*  -----------------------------------------------------------------------------------------------------
										FORM ELEMENTS
		-----------------------------------------------------------------------------------------------------		*/ 



	/*  -----------------------------------------------------------------------------------------------------
									BASIC PAGE LAYOUT
		-----------------------------------------------------------------------------------------------------    */ 

		body {
			background: #000;
			overflow: hidden;
			max-width: 1800px;
			margin: 0 auto;
		}
		.page_wrapper {
			width: 100vw;
			height: 100vh;
		}
		.page_wrapper.ready {
			opacity: 1;
			filter: none;
		}

		.main_content {
			margin-top: 4rem;
			height: calc(100vh - 4rem);
			width: 100vw;
			overflow: hidden;
		}
		.main_content_inner {
			position: relative;
			display: inline-block;
			width: 100%;
			height: 100%;
		}



	/*  -----------------------------------------------------------------------------------------------------
									MAIN CONTENT SECTIONS
		-----------------------------------------------------------------------------------------------------    */     
		.section {
			position: absolute;
			width: 25;
			height: 25;
			overflow: hidden;
			opacity: 0;
			justify-content: center;
			transform:translate(0,0);
			background: var(--sectionBack);
			transition: top .85s ease, left .85s ease, opacity .85s, width .85s, height .85s;
		}	 

		.section.intro {
			left: -100%;
			top: -20%;
		}
		.section.what_i_do {
			left: -100%;
			top: 25%;		
		}
		.section.portfolio {
			top: 100%;
			left: -35%;
		}
		.section.workshop  {
			top: 100%;
			left: 75%;
		}
		.section.contact {
			top: -35%;
			left: -100%;
		}

		.section.show {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 1;
			z-index: 10;
		}

		.section .background_image {
			position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			opacity: .2; 
			filter: blur(3px);	
		}	
		
		.section .section_header {
			padding: 1rem 0 0 0;
			text-align: center;
		}
		.section  .section_title {
			text-align: center;
			font-size: 1.35rem;
			font-weight: lighter;
			margin-top: 4rem;
			text-transform: uppercase;
		}
		.section .section_content .title {		
			font-family: raleway, sans-serif;
			font-size: 2.5rem;
			font-weight: 200;
			text-align: center;
			font-style: italic;
			padding: 2rem 0 1rem 0;
		}
		.section .section_body {
			position: relative;
			overflow: hidden;
			overflow-Y: auto;
			color: var(--highlight);
			/*filter: blur(15px);*/
			height: 100%;		
			width: 100%;
			max-width: 85rem;
			margin: 0 auto;
			padding: 0 2%;
			transition: transform .85s ease, opacity .85s, filter .85s;
		}
		.section.show .section_body {
		/*	filter: blur(0);			*/
		}
		.section .section_content {
			height: 100vh;
			height: calc(100vh - 5rem);		
			margin: 0 auto;
			padding: 0 1rem;
			font-weight: lighter;
			width: 100%;
		}

		.section .slideout {
			position: absolute;
				top: 0;
				left: 100%;
				z-index: 100;
			height: calc(100vh - 5rem);
			width: 100vw;
			max-width: 1800px;
			transition: left .5s ease-in-out;
		}
		.slideout.show {
			left: 0;
		}
		.slideout .slideout_content {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			height: 100%;
			width: 100%;		
		}
		.slideout .close_button{
			position: absolute;
				top: 0;
				right: 0;
				z-index: 20;
			display: inline-block;
			border-radius: 0 0 0 .2rem;
			margin: -2px -2px 0 0;
		}

		.content_area  .content {
		}
		.content_area  .section_body p {
			line-height: 1.3em;
			position: relative;
		}
		.content_area  .content .moral {
			color: #f5f5f5;
			font-style: italic;
			display: block; 
			font-size: .9em;
		}









	/*  -----------------------------------------------------------------------------------------------------
									RESPONSIVE LAYOUT
		-----------------------------------------------------------------------------------------------------      
		default max width: 1200px
		*/

		@media (min-width:1730px) { 



		}

		@media (min-width:1199px) { /* desktop */ 



		}

		@media (max-width:1024px) { /* laptop, small desktop */ 
		}

		@media (max-width:960px) { /* tablet, smaller laptop / desktop */ 
			.main_content {
				margin-top: 8rem;
			}

		}

		@media (max-width:480px) { /* small tablet, large phone */ 


		}

	
	</style>

