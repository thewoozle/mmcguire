
	<template>

		<section id="portfolio" :class="$route.name == 'portfolio'? 'show' : ''" class="section portfolio">
			<div class="background_image"></div>
			
			<div class="section_body">
				<div class="section_content">
					<h2 class="title rise ">My Web-Dev Portfolio</h2>
					
					<div class="portfolio_report">
						<div class="element">
						
							<span class="title">Client Breakdown</span>
							
							<span class="item">Enjoy the Weather: <span class="value">1</span></span>
							<span class="item">Nightship Networks: <span class="value">13</span></span>
							<span class="item">Hot Pepper Studios<span class="value">4</span></span>
							<span class="item">Mason Gentry<span class="value">3</span></span>
							<span class="item">Darin Fong Audio<span class="value">1</span></span>
							<span class="item">LindData<span class="value">2</span></span>
							<span class="item">Gateway Professional Network<span class="value">4</span></span>
							<span class="item">CustomSell LTD<span class="value">3</span></span>
							<span class="item">DORA International<span class="value">1</span></span>
							<span class="item">Mosier Data: <span class="value">5</span></span>
							<span class="item">OSFCI: <span class="value">3</span></span>
							<span class="item">Individual Clients: <span class="value">16</span></span>
							<span class="item">Personal / side projects<span class="value">15<em>+</em></span></span>
							
						</div>
						
						<div class="element">
						
							<span class="title">Skillset Breakdown</span>
							
							<span class="item">HTML5 Paridigm: <span class="value">50<em>+</em></span></span>
							<span class="item">CSS3 styling: <span class="value">50<em>+</em></span></span>
							<span class="item">Responsive Design: <span class="value">18</span></span>
							<span class="item">Mobile navigation: <span class="value">7</span></span>
							<span class="item">jQuery: <span class="value">30<em>+</em></span></span>
							<span class="item">AJAX data handling: <span class="value">15<em>+</em></span></span>
							<span class="item">Angular: <span class="value">6</span></span>
							<span class="item">Vue.js: <span class="value">5</span></span>
							<span class="item">Laravel PHP: <span class="value">4</span></span>
							<span class="item">Codeignighter PHP: <span class="value">2</span></span>
							<span class="item">ASP Visual Basic: <span class="value">8</span></span>
							<span class="item">SQL / MySql: <span class="value">15<em>+</em></span></span>
							<span class="item">Ruby on Rails: <span class="value">2</span></span>
							<span class="item">WordPress: <span class="value">8</span></span>
							<span class="item">Control panels: <span class="value">12</span></span>
							<span class="item">SVG graphics: <span class="value">7</span></span>
						
						</div>
						
						<div class="intro">
							<p>I created my first web page in 2002, as a FAQ and Support page for the Electronics Manufacturer where I was the head of the Product Support department.
								My portfolio includes all major projects I've worked on, excepting a couple NDA projects, minor SPA pages, page tweaks, and things I've forgotten. 
								In 2009 I became a dedicated web developer with a focus on front-end data-handling. Today I try to work with Vue.js and Laravel as much as possible. 
							</p>
						</div>
						
					</div>
					
					<div class="portfolio_wrapper">
						
						<div class="portfolio_item"  v-for="item in portfolio" @click="showPortItem = item">
							<div class="browser_top">
								<div class="dots">
									<span class="dot"></span><span class="dot"></span><span class="dot"></span>
								</div>
								<a v-if="item.url" :href="item.url" class="item_name link" target="_blank"  v-text="item.name"></a>	
								<span v-else  class="item_name" target="_blank"  v-text="item.name"></span>	
							</div>
							<div class="item_display " :style="{'background-image': 'url(../static/images/portfolio/'+item.frontImage.toLowerCase()+')'}">
							
								<div class="item_details">
									
									<div class="cover">
									
										<div class="skills">
											<span class="skill" v-for="skill in item.skills" v-text="'< '+skill+' >'"></span>
										</div>
										
										
										<span class="more">More...</span>										
									</div>	
								</div>
							</div>						
						</div>
						
					</div>
					
				</div>	
			</div>	
			
			<div class="slideout"  :class="showPortItem.name? 'show' : ''">
					<button type="button" class="close_button fal fa-times" @click="showPortItem = []; oldSlide = ''; newSlide = '';" ></button>
				<div class="slideout_content">
					<div class="project_title">
						<a v-if="showPortItem.url" :href="showPortItem.url" class="link" target="_blank"  v-text="showPortItem.name"></a>	
						<span v-else class="text" v-text="showPortItem.name"></span>
					</div>	
					
					<div class="slideshow" v-if="showPortItem.images">
						<div class="slides" v-if="showPortItem.images.length" >
							<span class="slide prev"  ref="oldSlide" :style="{'background-image': 'url(/static/images/portfolio/'+oldSlide+')'}"></span>
							<span class="slide current"  ref="newSlide" :style="{'background-image': 'url(/static/images/portfolio/'+newSlide+')'}"></span>
						</div>	
						
						<div class="slides" v-else >
							<span class="slide current"   :style="{'background-image': 'url(/static/images/portfolio/'+showPortItem.frontImage+')'}"></span>
						</div>
						<div class="dots">
							<span v-for="image in showPortItem.images" class="dot"></span>
						</div>
					</div>
					
					<div class="description" v-html="showPortItem.description"></div>
					
					<div class="actions"v-html="showPortItem.actions"></div>
				
				</div>				
			</div>
			
		</section>
	</template>
	
	
	
	<script>
		import { mapState } from 'vuex'
		export default {
			name: 'portfolio',
			computed: mapState([
				'portfolio'
			]),
			data () {
				return {
					showPortItem: 	[],		
					oldSlide:		'',
					newSlide:		'',					
				}
			},
			
			watch: {
				showPortItem: function(portItem) {
					var vm = this;
					if (portItem.images) {
						vm.newSlide = vm.showPortItem.images[0];
						vm.oldSlide = vm.showPortItem.images[0];
						setTimeout(function() {
							vm.animate_slideshow();								
						},100);
					}
					
				}
			},
			
			methods: {
				animate_slideshow() {	
				//console.log('this');
					var vm 		= this,
						images 	= vm.showPortItem.images;
						
					if (images) {
						images.push(images.shift());
						vm.oldSlide = images[0];
						
						vm.$refs.oldSlide.classList.remove('animate','prev');
						vm.$refs.oldSlide.classList.add('current');
						
						vm.$refs.newSlide.classList.remove('animate', 'current');
						vm.$refs.newSlide.classList.add('next');
						vm.newSlide = images[1];
						
						if(images.length > 1) {
							// change old and new slides, reposition them and then animate them
							var timer = setTimeout(function() {
								if (vm.showPortItem.images) {
									//console.log(vm.showPortItem.images);
									vm.$refs.oldSlide.classList.add('animate','prev');
									vm.$refs.oldSlide.classList.remove('current');	
									
									vm.$refs.newSlide.classList.add('animate', 'current');
									vm.$refs.newSlide.classList.remove('next');
								} else {
									clearTimeout(timer);
								}	
							},9000);							
							
							// after allowing time to animate, start loop over
							setTimeout(function() {
								if (vm.showPortItem.images) {
									vm.animate_slideshow();
								}
							},10000);
						}	
					}
					
					
				}
			}
		}
	</script>
	
	<style>
	
	
	/*	-----------------------------------------------------------------------
								PORTFOLIO
		-----------------------------------------------------------------------*/
		.section.portfolio .background_image {	
		background: url(/static/images/newyork.jpg) repeat;	
		background-size: cover;			
		}
	.section.portfolio .portfolio_report {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 1rem auto;
	}	
	.section.portfolio .portfolio_report .element {
		display: flex;
		width: 100%;
		max-width: 30rem;
		flex-wrap: wrap;
		background: #a4b9d0;
		border: solid 1px #666;
		border-radius: var(--borderRadius);
		padding: .35rem 1rem;
		color: #111;;
		font-size: .85em;
		line-height: 1.5em;
		font-weight: 300;
	}	
	.section.portfolio .portfolio_report .intro {
		display: flex;
		margin: 1rem 2rem;
		font-size: 1.25rem;
		font-style: italic;
		width: 100%;
	}
	.section.portfolio .portfolio_report .intro p::first-letter {
		font-size: 1.35em;
		font-family: raleway;		
		text-transform: uppercase;
		font-weight: 500;
		color: var(--secondary);
	}
	.section.portfolio .portfolio_report .element .item {
		display: flex;
		align-items: center;
		width: 50%;
		line-height: 1em;
		font-size: .8rem;
		padding: .15rem 1.5rem .15rem 0;
		justify-content: space-between;
	}
	.section.portfolio .portfolio_report .element  .title {
		display: flex;
		width: 100%;
		font-size: 1rem;
		font-family: raleway, sans-serif;
		justify-content: center;
		font-weight: 100;
		color: #fff;
		padding: .15rem 0;
		text-transform: uppercase;
		letter-spacing: .05em;
	}
	.section.portfolio .portfolio_report .element .item .value {
		position: relative;
		display: flex;
		width: 2rem;
		justify-content: flex-end;
		padding: 0 .15rem 0 0;
	}
	.section.portfolio .portfolio_report .element .item .value em {
		position: absolute;
		top: 0;
		left: 100%;
		font:inherit;
		line-height: inherit;
	}
	
	.portfolio_wrapper {
		display: flex;
		max-height: 20rem;
		flex-wrap: wrap;
		overflow: hidden;
		justify-content: space-around;
		transition: max-height .25s;
		transition-delay: 1s;
	}
	.section.show .portfolio_wrapper {
		max-height: 300rem;
	}
	.portfolio_item {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		margin: 1rem .5rem;
		width: 100%;	
		max-width: 425px;
		border:solid 2px #ccc;
		border-radius:var(--borderRadius);
	}
	
	.portfolio_item .browser_top {
		display: flex;
		width: 100%;
		position: relative;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		background: #d5d5d5;
		height: 1.6rem;
		padding: 0 1rem;
	}
	.portfolio_item .browser_top .dots {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		margin: .45rem .5rem ;
	}
	.portfolio_item .browser_top .dot {
		display: flex;
		height: .65rem;
		width: .65rem;
		margin: 0 .15rem;
		border-radius: 50%;
		box-shadow: 0px 0px 0px rgba(0,0,0,0.4);
		border: solid 2px rgba(0,0,0,0.05);
		background: #d56a61;
	}
	.portfolio_item .browser_top .dot:nth-of-type(2) {
		background: #eebc46;
	}
	.portfolio_item .browser_top .dot:nth-of-type(3) {
		background: #89c34f;
	}
	.portfolio_item .browser_top .item_name {
		display: flex;
		color: #555;
		height: 100%;
		height: 1.5rem;
		border-radius: .15rem;
		padding: 0 .5rem;
		align-items: center;
		text-shadow: 0 1px 1px rgba(255,255,255,.5);
	}
	.portfolio_item .browser_top .item_name.link {
		color: var(--contactLink);
		cursor: pointer;
	}
	.portfolio_item .browser_top .item_name.link:hover {
		color: var(--accentText);
		background: var(--contactBack);
		text-shadow: -1px -1px 0px rgba(0,0,0,0.2);
	}
	.portfolio_item .item_display {
		display: flex;
		background-position: center center;
		background-size: cover;
		position: relative;	
		pointer-events: none;
		cursor: pointer;
		box-shadow: inset 1px 1px 1rem rgba(0,0,0,0.5);
		width: 100%;
		height: 15rem;
	}
	.portfolio_item .item_details {
		position: absolute;
			top:0;
			left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		pointer-events: none;
		transition: opacity .3s;
	}
	.portfolio_item.expand .item_details,
	.portfolio_item:hover  .item_details {
		opacity: 1;
		z-index: 1;
	}
	
	.portfolio_item .cover{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0, .65);		
	}
	.portfolio_item .item_url{
		position: absolute;
			bottom: 0;
			left: 0;
			z-index: 100;
		width: 100%;
		text-align: center;
	}
	.portfolio_item .skills {
		display: flex;
		flex-wrap: wrap;
		margin-top: 4rem;
		padding: 0 1rem;
		overflow: hidden;
		justify-content: space-around;
	}
	.portfolio_item .more,
	.portfolio_item .skill {
		display: flex;
		align-items: center;
		margin: .5rem;
		font-size: .8rem;
		line-height: 1.25em;
		white-space: nowrap;
		opacity: 0;
		color: #000;
		border-radius: .15rem;
		background: rgba(56,46,38,.6);
		padding: .15rem .5rem;
		transform:translateY(-500%);
		transition:transform .5s ease-out, color .5s, opacity .5s;
	}
	.portfolio_item .skill:nth-of-type(2) {	
		transition-delay: .1s;
	}
	.portfolio_item .skill:nth-of-type(3) {	
		transition-delay: .2s;
	}
	.portfolio_item .skill:nth-of-type(4) {	
		transition-delay: .3s;
	}
	.portfolio_item .skill:nth-of-type(5) {	
		transition-delay: .4s;
	}
	.portfolio_item .skill:nth-of-type(6) {	
		transition-delay: .5s;
	}
	.portfolio_item .skill:nth-of-type(7) {	
		transition-delay: .6s;
	}
	.portfolio_item .skill:nth-of-type(8) {	
		transition-delay: .7s;
	}
	.portfolio_item .skill:nth-of-type(9) {	
		transition-delay: .8s;
	}
	.portfolio_item .skill:nth-of-type(10) {	
		transition-delay: .9s;
	}
	.portfolio_item.expand .item_details .skill,
	.portfolio_item:hover  .item_details .skill {
		transform:translateY(0);
		opacity: 1;
		color: #d5d5d5;
		transition-delay: 0;
	}
	
	.portfolio_item .item_details .more {
		position: absolute;
			bottom: -2rem;;
			left: 50%;
		transform:translateX(-2rem);
		width: 4rem;
		text-align: center;
		display: inline-block;
		pointer-events: auto;
		cursor: pointer;
		
		opacity: 1;
		color: #fff;
		transition: bottom .5s;
		transition-delay: .6s;
	}
	.portfolio_item:hover  .item_details .more,
	.portfolio_item.expand .item_details .more {
		bottom: 1rem;		
	}
	
	.section.portfolio .slideout {
		background: #f6f7f3;
	}
	.section.portfolio .slideout .close_button {
		font-size: 6rem;
		margin: 0;
	}
	.portfolio .slideout_content {
		background: inherit;
		overflow: hidden;
		overflow-y: auto;
		height: 100%;
		max-width: 60rem;			
		margin: 0 auto;
		padding: 5.5rem 1rem 1rem 1rem;
	}
	.portfolio .slideout .project_title {
		position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
		display: flex;
		background: inherit;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		overflow-y: auto;
		width: 100%;
		font-family: raleway;
		font-size: 2rem;
		line-height: 1em;		
		padding: 2rem 0 1.5rem 0;
		border-bottom: solid 1px var(--mainColor);
	}
	
	.portfolio .slideout .project_title .link,
	.portfolio .slideout .project_title .text {
		display: flex;
		text-shadow: none;
		font: inherit;
		padding: .25rem 1rem;
	}
	.portfolio .slideout .project_title .text {
		color: var(--contrastColor);
	}
	.portfolio .slideout .project_title .link {
		color: var(--contactLink);
	}
	.portfolio .slideout .project_title .link:hover {	
      color: var(--accentText);
		background: var(--contactBack);
		text-shadow: -1px -1px 0px rgba(0,0,0,0.2);
	}
	
	.portfolio .slideout .slideshow {
		display: flex;
		margin: 1rem auto;
		width: 100vw;
		height: 100vw;
		max-height: 30rem;
	}
	.portfolio .slideout .slideshow .slides {
		display: flex;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		flex-wrap: nowrap;
		border: solid 1px var(--accentText);
		border-radius: .1rem;
	}
	.portfolio .slideout .slideshow .slide {
		position: absolute;
			top: 0;
			left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: .15rem;
		background-position: center top;
		background-size: contain;
	}
	.portfolio .portfolio_item:nth-of-type(n+4) {
		display: none;
	}
	#app.slides .portfolio .portfolio_item:nth-of-type(n+6) {
		display: flex;
	}
	
	
	
	.portfolio .slideout .slideshow .slide.animate {
		transition: left 1s ease-in-out;
	}
	.portfolio .slideout .slideshow .slide.current {		
		left: 0;
	}
	.portfolio .slideout .slideshow .slide.prev {
		left: -100%;	
	}
	.portfolio .slideout .slideshow .slide.next {
		left: 100%;
	}
	.portfolio .slideout .actions,
	.portfolio .slideout .description {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin: 1rem 0;
		font-family: raleway;
		font-weight: 300;
		padding: .25rem;
		line-height: 1.5em;
		font-size: 1.5rem;
	}
	.portfolio .slideout p {
		display: flex;
		width: 100%;
		font: inherit;
		color: var(--contrastColor);
	}
	
	
	</style>
	