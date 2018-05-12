
	<template>
		<header id="page_header" class="page_header" :class="scrollState" ref="pageHeader">
			<div class="header_inner">
				<h1 class="page_title" :class="$route.name == 'intro'? '' : 'min'">
					<div class="levitate">
						<span class="prefix">Hi, I'm </span>
						<span class="first_name">Michael </span>
						<span class="last_name">McGuire</span>
					</div>	
				</h1>	
				<nav class="main_nav" :class=$route.name id="nav_links">
				
					<router-link :to="{name: 'intro'}" class="nav_link intro_link" >
						<i class="icon fal fa-play"></i>
						<span class="text">Intro</span>
					</router-link>
					
					<router-link :to="{name: 'what_i_do'}" class="nav_link what_i_do_link"   >
						<i class="icon fal fa-code"></i>
						<span class="text">What I Do</span>
					</router-link>
					
					<router-link :to="{name: 'portfolio'}" class="nav_link portfolio_link"  >
						<i class="icon fal fa-images"></i> 
						<span class="text">Portfolio</span>
					</router-link>
					
					<router-link :to="{name: 'contact'}" class="nav_link contact_link"   >
						<i class="icon fal fa-comments-alt"></i>
						<span class="text">Contact</span>
					</router-link>
					
					<router-link :to="{name: 'workshop'}" class="nav_link workshop_link"  title="see what I'm Mad Scienceing or Showing-off" >
						<i class="icon fal fa-rocket"></i>
						<span class="text">Workshop</span>
					</router-link>
					
				</nav>
			</div>	
		</header>
	</template>
	
	
	
	<script>
		import { mapState } from 'vuex'
		export default{
			name: 'page_header',
			computed: mapState([
				'scrollState'
			]),
			
			props: [],
			data() {
				return {}
			},
			mounted: function() {
				
			},
			methods: {
				
			}
		}
	</script>
	
	<style>
	/*  -----------------------------------------------------------------------------------------------------
									PAGE HEADER
		-----------------------------------------------------------------------------------------------------    */ 
		.page_header {
			position: fixed;
				top: 0;
				left: 0;
				z-index: 50;
			height: 4rem;			
			width: 100%;
			background: rgba(0,0,0,0.85);
		}
		.page_header .header_inner { 
			display: flex;
			justify-content: space-between;
			height: 100%;
			padding: 0 0 0 5%;
			width: 100%;
			max-width: 1200px;
			margin: 0 auto;
		}
		.main_nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			position: absolute;
				right: 2%;
				top: 0;
		}
		
	.page_title {
		position: absolute;
			top: 85px;
			left: 50%;
		display: flex;	
		width: 20rem;
		color: var(--secondary);
		font-size: 3em;
		font-weight: 400;
		white-space: nowrap;
		text-align: center;
		transform:translate(-170px, 0);
		transition: top .85s,
					left .85s,
					color .85s,
					transform .85s,
					text-align .85s,
					text-shadow .85s;
	} 
	.page_title .levitate {
		display: flex;
		justify-content: center;
		font: inherit;
		color: inherit;
	}
	.page_title .prefix,
	.page_title .first_name,	
	.page_header .page_title.min .last_name,
	.page_header.scrolling .last_name	{
		display: flex;
		max-width: 12rem;
		font: inherit;
		padding: 0
		.5rem;
		overflow: hidden;
		opacity: 1;
		transition: opacity .5s,
					max-width .5s;
	}
	.page_header .page_title.min, 
	.page_header.scrolling .page_title {
		top: 0;
		left: 190px;
		font-weight: 600;
		font-size: 2.5rem;
		text-align: left;
		text-shadow: -1px -1px 2px rgba(0,0,0,0.25);
	}
	.page_header .page_title.min .prefix,
	.page_header .last_name,
	.page_header.scrolling .page_title .prefix {		
		opacity: 0;
		max-width: 0;
	}
		 
		
		.main_nav  .nav_link:active {
			transform:translateY(1px);	 
		}   
		.main_nav .nav_link{
			display: flex;
			background: none;
			position: relative;
			cursor: pointer;	
			opacity: 1;
			min-width: 4rem;
			padding: 0 5px;
			border-radius: 2px;
			color: var(--secondary);
			transition: color .4s, opacity .4s, filter .4s, background .4s;
		}
		.main_nav.intro .nav_link.intro_link, 
		.main_nav.what_i_do .nav_link.what_i_do_link, 
		.main_nav.workshop .nav_link.workshop_link, 
		.main_nav.contact .nav_link.contact_link, 
		.main_nav.portfolio .nav_link.portfolio_link {
			opacity: .8;
			color: #666;
			pointer-events: none;
		}
		.main_nav .nav_link:hover {
			color: var(--titleColor);		
		}
		.main_nav .nav_link + .nav_link{
			margin-left: 15px;
		}
		.main_nav .nav_link .text,
		.main_nav .nav_link .icon {
			display: flex;
			justify-content: flex-start;
			color: inherit;
			font-size: 1.5em;
			line-height: 1.25em;	
			text-shadow: -1px -1px 1px rgba(0,0,0,0.2);
		}
		.main_nav .nav_link .text {
			font-weight: 100;
			margin-left: .25rem;
		}
		.main_nav .subnav {
			display: block;
			position: relative;
			overflow: hidden;
			width: 100%;
			line-height: 1.6rem;
			height: 1.6rem;
		}
		.main_nav .subnav .projects {
			display: inline-block;
			font-size: 1.25rem;
			font-weight: 300;
			letter-spacing: -.075em;
			cursor: default;
			line-height: inherit;
			text-transform: uppercase;
		}
		.main_nav .subnav .subnav_content {
			display: block;
			position: absolute;
			top: -100%;
			transition: top .5s;
		}
		.main_nav .subnav .subnav_content.show {
			top: 0;
		}
		.main_nav .subnav .project_link:active {
			top: 1px;
		}
		.main_nav .subnav .links {
			display: inline-block;
			white-space: nowrap;
			overflow: hidden;
			padding: 0 0 0 .5em;
			line-height: inherit;
		}
		
		.main_nav .subnav .project_link  {
			display: inline-block;
			font-size: 1.25em;
			line-height: inherit;
			padding: 0 .4em;
			color: #555;
			text-shadow: 0 1px 1px rgba(255,255,255,.25);
			cursor: pointer;
		}
		.main_nav .subnav .project_link:hover  {
			color: #666;
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
		
			
			.main_nav .nav_link .text {
				display: none;
			}
			.page_header {
				width: 100vw;
			}
			.page_header.min .page_title,
			.page_header.scrolling .page_title,
			.page_header .page_title {
				top: 0;
				left: 190px;
				font-weight: 600;
				height: 100%;
				align-items: center;
				font-size: 1.5rem;
				text-align: left;
				text-shadow: -1px -1px 2px rgba(0,0,0,0.25);
			}
			.main_nav .nav_link .text, .main_nav .nav_link .icon {
				font-size: 2.5rem;
			}
		}

		@media (max-width:960px) { /* tablet, smaller laptop / desktop */ 
			.page_header {
				height: 8rem;
			}
			.page_header .page_title {
				width: 50%;
			}
			.page_title .levitate {
				flex-wrap: wrap;
			}
			.page_header .page_title .first_name,
			.page_header .page_title .last_name{
				width: 100%;
			}
			.main_nav {
				flex-wrap: wrap;
				height: 100%;
				width: 50%;
				transform: translateY(0);
				justify-content: space-around;
			}
			/* display none */
			.page_header .page_title .prefix {
				display: none!important;
			}
			.page_header .page_title .last_name {
				    max-width: 12rem;
					opacity: 1;
			}
		}

		@media (max-width:480px) { /* small tablet, large phone */ 


		}

		
	</style>
	
	
	