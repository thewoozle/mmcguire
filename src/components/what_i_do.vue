
	<template>

		<section id="what_i_do" class="section what_i_do" :class="$route.name == 'what_i_do'? 'show' : ''">
			<div class="background_image"></div>
			
			<div class="section_body clearfix">
			
				<div class="section_content">
				
					<h3 class="title rise">I do Front-end Web Development</h3>				
					<p class="subtitle">When done right, a website creates an intuitive, responsive, and seamless User Experience </p>
										
					<div class="content_wrapper boxes">
						<div class="column">
					
							<div class="box web_design offset">
								<header class="box_header">
									<div class="icon_wrapper">
										<i class="icon fas fa-rocket"></i>
									</div>	
									<h3 class="box_title">Holistic Web Design</h3>
								</header>	
								
								<div class="box_content">
									<p>
										Just like a rocket, a web site is made up of many parts that must work together with artfully synchronized precision. The 
										Holistic Design Approach considers the project as an interconnected whole, not a sum of vaguely-related parts. Also just 
										like a rocket, lowest-bidder contracts with off-the-shelf components will probably crash and burn just when you're trying to 
										fly.  <span class="moral">Coding and Rocket Science... just say'n</span>
									</p>	
								</div>	
							</div>	
								
							<div class="box user_experience offset">
								<header class="box_header">
									<div class="icon_wrapper">
										<i class="icon fal fa-thumbs-up fa-flip-horizontal"></i>
									</div>	
									<h3 class="box_title">The UX</h3>
								</header>
								
								<div class="box_content">
									<p>
										A web site has about 15 seconds to do and be what the user expects.  Just like anything else in their lives, they don't want 
										to wait round tying to figure it out. They shouldn't. An intuitive, holistic design will bring users back again, instead of regretting those 15 seconds.<span class="moral">That's User Experience</span>  
									</p>
									
								</div>	
							</div>											
							
							
							<div class="box old_days offset">
								<header class="box_header">
									<div class="icon_wrapper">
										<i class="icon fal fa-code"></i>
									</div>	
									<h3 class="box_title">The Good Old Days</h3>
								</header>
								
								<div class="box_content">							
									<p>Just a couple years ago, a website would have a 1024px-wide desktop version and MIGHT have completely different mobile site. Today, a site needs to be responsive to any device-size, from a 80-inch plasmatron to an older 4-inch iPhone. While
										almost any developer can scale content to work with multiple device sizes, it takes a seasoned User-Experience developer to know what the user expects from those different devices. Just making things smaller isn't going to be the right answer.
										<span class="moral">Table-based layout will make a comeback... you'll see</span>
									</p>	
								</div>
							</div>
							
						</div>

						
						<div class="column">		
							
							<div class="box state_of_the_art offset">
								<header class="box_header">
									<div class="icon_wrapper">
										<i class="icon fal fa-tablet-android-alt"></i>
										<i class="icon overlay fal fa-terminal"></i>
									</div>	
									<h3 class="box_title">State of the Art</h3>
								</header>	
								
								<div class="box_content">
									<p>												
										Every five years or so, the way we make web sites totally changes. Gone is the idea of creating a whole web page in 
										the server and then reloading it with every button click. 90% of what we used to do back-end code can be done better
										with templates using front-end Javascript and CSS. <span class="moral">Think of it as Evolution in Action</span>
									</p>
									
								</div>	
							</div>	 
							
							
							<div class="box skill offset">
								<header class="box_header">
									<div class="icon_wrapper">
										<i class="icon fal fa-code"></i>
									</div>	
									<h3 class="box_title">Skill</h3>
								</header>
								
								<div class="box_content">
									<p>
										Michael has worked hard to specialize in the front-end web basics, like HTML, CSS3, jQuery, and coding Syntax.  Like Rocket Science, it all comes 
										down to how well you know the basics, regardless of the platform or framework. 
									</p>
									<p>
										While the latest new thing may not be better, it's important to learn the latest techniques or technologies. If you 
										don't evolve, you become obsolite. 
									</p>
									<p>The user wants to see and interact with a website without having to think too hard about how it works or why. While the HOW a web site works is important to the developers, 
										the WHAT and WHY it works is what defines that user's experience. 
										<span class="moral">'Ruby Blog' was never good enough</span>
									</p>
								</div>
							</div>
							
						</div>	
						
					</div>
					
				</div>	
				
			</div>
		</section>	
	</template>
	
	
	
	
	<style>
		/*	------------	WHAT I DO SECTION	------------	*/
		.section.what_i_do .background_image {		
			background: url(/static/images/components.png) repeat;	
		}
		.section.what_i_do .subtitle  {
			text-align: center;
			margin-top: 1rem;
		}
		.section.what_i_do .content_wrapper {		
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			position: relative;
				top: 50%;
			font-size: 0;	
			padding: 0 3% 5rem 3%;
			transform:translateY(-20rem);
			overflow: hidden;
		}
		.section.what_i_do .content_wrapper .column{		
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			width: 100%;
			max-width: 30rem;
		}		
		
		.section.what_i_do .box  {
			display: flex;
			flex-wrap: wrap;
			font-size: 1rem;
			margin: 2rem auto;
			opacity: 1;
			transition: transform 1s, opacity;
			transition-delay: .3s;
		}
		.section.what_i_do .box.offset {
			opacity: .25;
		}
		
		.section.what_i_do .box.web_design.offset  {
			transform:translate(-10rem, -5rem);
		}
		.section.what_i_do .box.state_of_the_art.offset  {
			transform:translate(8rem, -12rem);
		}
		.section.what_i_do .box.user_experience.offset  {
			transform:translate(12rem, -6rem);
		}
		.section.what_i_do .box.skill.offset  {
			transform:translate(6rem, 16rem);
		}
		.section.what_i_do .box.old_days.offset  {
			transform:translate(15rem, -13rem); 
		} 
		.section.what_i_do.show .box.web_design.offset,
		.section.what_i_do.show .box.state_of_the_art.offset,
		.section.what_i_do.show .box.user_experience.offset,
		.section.what_i_do.show .box.skill.offset,
		.section.what_i_do.show .box.old_days.offset  {
			transform:translate(0,0); 
			opacity: 1;
		} 
		
	
	.section.what_i_do .box .box_header {
		display: flex;
		align-items: center;
		height: 4.5rem;
		padding: 5px 2% 0;		
	}
	.section.what_i_do .box .box_header .icon_wrapper {
		display: flex;
		justify-content: center;
		position: relative;
		height: 100%;
		width: 4.5rem;
	}
	.section.what_i_do .box .box_header .icon{
		font-size: 4rem;
		display: flex;
		vertical-align: middle;
		width: 100%;
		line-height: 1em;
		text-align: left;
		color: #000;
		-webkit-filter: drop-shadow(1px 1px 2px rgba(142,170,236,.35));
		filter: drop-shadow(0 1px 3px rgba(142,170,236,.35));
	}
	.section.what_i_do .box .box_header .icon.overlay {
		position: absolute;
			top: 0;
			left: 0;
		color: 	#1e611e;
		font-size: .75rem;
		padding: .85rem 0 0 .85rem;
	}
	.section.what_i_do .box .box_header .box_title {
		display: flex;
		align-items: center;
		line-height: 85px;
		margin-left: .5rem;
		height: 100%;
		width: 10rem;
		padding: .1rem 0 0 0;
		color: var(--mainColor);
		letter-spacing: .05em;
		text-align: left;
		font-size: 1.6rem;
		font-weight: 300;
		line-height: 1em;
	}	
	.section.what_i_do .box .box_content {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 1rem;
		text-align: justify;
		
	}
	.section.what_i_do .box .box_content p {		
		font-size: 1.1rem;
		color: var(--accentText);
		line-height: 1.6em;			
	}
	</style>
	
	
	
	<sript>
		import { mapState } from 'vuex'
		export default {
			name: 'what_i_do',
			computed: mapState([
				'title'
			]),
			data () {
				return {
				}
			}
		}
	
	</script>