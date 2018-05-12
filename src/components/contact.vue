
	<template>
	
		<section id="contact" :class="$route.name == 'contact'? 'show' : ''" class="section contact">
			<div class="background_image"></div>
				<div class="section_body">		
					
					<div class="section_content contact">
						<div class="content_wrapper">
							<h3 class="title rise">Where I'm At</h3>
							
							<p>I settled in Vancouver Washington, a place with mild winters, milder summers, mild rain, few tornados, not a lot of floods, only a couple volcanos, and lots of game stores. </p>
							
							<div class="links">
								<div class="link_wrapper contact_links">
									<span class="text">You can Email me at </span>
									<a class="link" target="_blank" href="mailto:mmcgu1966@gmail.com" title="opens your email client">
										<span class="icon far fa-envelope-square"></span>
										<span class="text">mmcgu1966@gmail.com</span>
									</a> 
									
									<span class="text">Or find me on social media</span>
									<a class="link" target="_blank" href="https://www.facebook.com/mmcgu1966">
										<span class="icon fab fa-facebook-square"></span>
										<span class="text"> Facebook</span>
									</a>
								</div>
								
								<div class="link_wrapper credentials_links">								
									<span class="text">My Credentials</span>
									<a class="link" target="_blank" href="https://www.linkedin.com/in/michael-mcguire-18063313">											
										<span class="icon fab fa-linkedin"></span>
										<span class="text">LinkedIn</span>
									</a>
									
									<span class="text">&nbsp; </span>											
									<a class="link upwork_link" href="https://www.upwork.com/freelancers/~0137d2bd2e6953425f?viewMode=1" target="_blank">
										<img class="icon image" src="/static/images/up.png">
										<span class="text">UpWork</span>
									</a>
								</div>
							</div>	
						</div> 
					</div>
				</div>
			</div>
		</section>
						
	</template>
	
	
	
	<style>
	
	/*	------------		CONTACT SECTION	------------	*/
		.section.contact .background_image {		
		background: url(/static/images/coffee_desk.png) repeat;	
		background-size: cover;
		}
	
	.section.contact.section_content {
		width: 60%;
	}
	.section.contact p {
		margin-top: 1rem;
		letter-spacing: .05em;
		font-size: 1.25rem;
		text-indent: 1rem;
		text-align: justify;
		font-weight: 100;
		color: var(--accentText);
	}
	.section.contact .content_wrapper {
		padding: 0 4rem;		
		height: 22rem;
		position: relative;
		top: 50%;
		transform:translateY(-15rem);
	}
	.section.contact .links {		
		font-size: 0;
		width: 50rem;
		margin: 0 auto;
		padding: 1rem 0;
	}
	.section.contact .link_wrapper {
		display: inline-block;		
	}
	.section.contact .link_wrapper + .link_wrapper {
		margin-left: 6%;
	}
	.section.contact .contact_links {
		width: 60%;		
	}
	.section.contact .credentials_links {
		width: 34%;
		
	}
	.section.contact .text {
		display: block;
		width: 100%;
		font-size: 1.5rem;
		line-height: 2em;
	}
	.section.contact .link {
		display: block;
		width: 100%;
		overflow: hidden;
		border-radius: .2rem;
		opacity: .85;
		background: var(--contactBack);
		color: var(--accentText);
		transition: opacity .3s;
	}
	.section.contact .link:hover {
		opacity: 1;
	}
	.section.contact .link .icon {
		display: inline-block;
		height: 4rem;		
		font-size: 3.25rem;
		opacity: .1;
		width: 4rem;
		margin-left: .5rem;
		text-align: center;
		line-height: 4rem;
	}
	.section.contact .link .icon.image {
		border-radius: .25rem;
		background: rgba(255,255,255,.5);
	}
	.section.contact .link .text {
		display: inline-block;
		width: auto;
		font-size: 2rem;
		opacity: .75;
		line-height: 4rem;
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
			.section.contact .content_wrapper {
				width: 100%;
				height: auto;
				top: 0;
				transform:translateY(0);
			}
			.section.contact .links {
				width: 100%;
			}
			.section.contact .contact_links,
			.section.contact .credentials_links {
				width: 100%;
			}
			.section.contact .link_wrapper + .link_wrapper {
				margin-left: 0;
			}
		}

		@media (max-width:960px) { /* tablet, smaller laptop / desktop */ 
			.section.contact .content_wrapper {
				padding: 0;
			}
		}

		@media (max-width:480px) { /* small tablet, large phone */ 


		}

	
	
	
	
	
	</style>
	
	<sript>
		import { mapState } from 'vuex'
		export default {
			name: 'contact',
			computed: mapState([
				'title'
			]),
			data () {
				return {
				}
			}
		}
	
	</script>