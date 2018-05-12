
	<template>
	
		<section id="workshop" :class="$route.name == 'workshop'? 'show' : ''" class="section workshop">
			<div class="background_image"></div>
			<div class="section_content">
				<div class="section_body">		
					
					<div class="section_content contact">
						<div class="content_wrapper">
							<h3 class="title rise">Project Workshop</h3>
							
			
							<div class="subnav clearfix">	
							
								<div class="subnav_content workshop show">
								<p>This space under construction</p>
									<div class="links">
										<a class=" project_link" target="_blank" href="projects/image_gallery/image_gallery.html">Image Gallery</a>
										<a class=" project_link" target="_blank" href="projects/audio_panel/index.html">Audio Panel</a>
										<a class="project_link" target="_blank" href="http://mmcguire.qudock.com/projects/metatags/">Advanced Meta-Tag Generator</a>
									</div>	
								</div>
							
							</div>
						</div>
					</div>	
				</div>
			</div>
		</section>
		
	</template>
	
	
	
	
	<style>
	
	/*	------------	WORKSHOP SECTION	------------	*/
	
		.section.workshop .background_image {						
		background: url(/static/images/workshop.jpg) repeat;	
		background-size: cover;
		}
		
	.section.workshop .section_content {
		
	}
	.section.workshop  .project_link {
		color: var(--links);
		font-size: 1.5rem;
	}
	.section.workshop .project_link + .project_link {
		margin-left: 1rem;
	}
	
	
	
	</style>
	
	
	
	<sript>
		import { mapState } from 'vuex'
		export default {
			name: 'workshop',
			computed: mapState([
				'title'
			]),
			data () {
				return {
				}
			}
		}
	
	</script>