	<template>
		<section  id="intro" class="section intro" :class="$route.name == 'intro'? 'show' : ''" >
		
			<div class="background_image"></div>
			
			<div class="section_body" @scroll="handle_scroll" ref="intro_body">
				<div class="bugs_reported">
					<span class="days">days </span> <span class="text"> since last coding accident: </span>
					<span class="amount">like... one-ish?</span>
				</div>
			
				<h2 class="section_title ">{{title}}</h2>
				
				<div class="section_content mantra">
				
					<div class="content_wrapper">
						<h3 class="title rise">I believe in creating better websites</h3>
						<p>One of the things I like least about being a web developer is being asked to develop something without a plan or design. 
						Invariably, the project will take longer and have more changes as it develops. Entirely because nobody sat down and worked-out a plan beforehand. 
						</p>
						<p>
							While the current trend is to create hastily written, badly formatted, cloned code to get web sites out the door fast, I belive in creating readable, 
							meaningful code that is eye-catchingly unique, elegant, and maintainable; it should never need to be re-worked for every update or because it was obsolete before it was even published.  
						<span class="moral">Weeks of Coding can save you hours of Planning... status quo</span>
						</p>
						
					</div>
				</div>
				
						
				<div class="section_content who_i_am" id="who_i_am" ref="who_i_am">
				
					<div class="content_wrapper">
						<h3 class="title">Web developers live a nomadic existence, traveling from site to site at the whims of Development Paridigms</h3>
						<p>  
							What I really am is a Pacific NorthWest based Full-Stack Web Developer with a focus on Responsive front-end Design since about 2010. 
							My primary focus right now is creating Vue.js as a Single-Page App or with the Laravel PHP framework. 
							I don't know if I could be considered to be on the cutting-edge of responsive design, but do try to keep up with the latest trends in responsive layout and styling while keeping a wary eye on this week's fad-based design trend. 
						</p>
						<p>I also demo and promote several role Playing Game events for Wizards of the Coast and Chaosium as well as help organize local game conventions. I have a blast running RPGs at shows and in stores. </p>

					</div>
					
				</div>
						
			</div>	
			
		</section>
		
	</template>
	
	

	<script>
		import { mapState } from 'vuex'
		export default {
			name: 'intro',
			computed: mapState([
				'title',
				'scrollState'
			]),
			
			
			data () {
				return {
					activeSection: ''
				}
			},
			mounted: function(){
			},
			methods: {
				
			/*	----------------------------------------------------------------
							HANDLE SCROLL
					page title moves on scroll, if intro section
				----------------------------------------------------------------	*/	
				handle_scroll(e) {
					if (e.target.scrollTop > 25) {
						this.$store.commit('updateScrollState', 'scrolling');
					} else {
						this.$store.commit('updateScrollState', '');
					}	
				},
			}	
			
		}
	</script>

	
	
	
	<style scoped>
			
		/*	------------	INTRO SECTION	------------	*/
		.section.intro .background_image {						
			background: url(/static/images/me.png) repeat;	
			background-size: cover;
		}
		.section.intro .section_content.mantra {
			height: calc(100vh - 20rem);
		}
		.section.intro .bugs_reported {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			position: absolute;
				top: 0;
				right: 2%;
			width: 11rem;
			padding: .5rem;
			opacity: .75;
			background: #769e76;
			border: solid 2px #f3f7e0;
			overflow: hidden;
			box-shadow: inset 0px 0px .75rem rgba(0,0,0,0.25);
			border-radius: .2rem;
			color: #fff;
			text-shadow: -1px -1px 1px rgba(0,75,0,.5);
		}
		.section.intro .bugs_reported .text {
			display: flex;
			align-items: center;
			width: 5.5rem;
			font-size: .7rem;
			letter-spacing: .01em;
			line-height: 1em;
			font-weight: 200;
		}
		.section.intro .bugs_reported .days {
			display: flex;
			padding-top: .2rem;
			align-items: center;
			font-weight: bold;
			text-transform: uppercase;
			font-size: 1.5rem;			
		}
		.section.intro .bugs_reported .amount {
			display: flex;
			margin: 0 auto;
			justify-content: center;
			font-family: raleway;
			font-style: italic;
			font-weight: 300;
			padding: .1rem .5rem;
			margin-top: .25rem;
			border-radius: .15rem;
			background: rgba(0,0,0,0.1);
			color: #f3f7e0;
			border: solid 1px #f3f7e0;
		}
		.section.intro p {
			margin-top: 1rem;
			letter-spacing: .05em;
			padding: 0 2rem;
			font-size: 1.5rem;
			text-indent: 1rem;
		}
		.section.intro p::first-letter {
			font-size: 1.5em;
			font-family: raleway;		
			text-transform: uppercase;
			font-weight: 500;
			color: var(--secondary);
		}
		
		.section.intro  .content_wrapper {
		}
		
		.section.intro .who_i_am {
			margin-top: 0;
			height: 100vh;
		}
		.section.intro .who_i_am p {
			margin-top: 1.5rem;
			font-size: 1.5rem;
		}
	</style>

	
	