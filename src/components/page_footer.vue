
	<template>
	
		<footer id="page_footer" class="page_footer"> 				
			
			<div class="footer_inner clearfix">
				<div class="footer_element work_element">
					<a class="link res_link" target="_blank" href="/static/images/Michael_McGuire_CV.pdf"><img class="image" src="/static/images/cv.jpg"><span class="text">Michael's CV</span></a>
					<a class="link email_link far fa-envelope-square" target="_blank" href="mailto:mmcgu1966@gmail.com" title="opens your email client"><span class="text">Email Michael</span></a> 
					
				</div>
				<div class="footer_element colophon_element">
					<div class="vertical_wrapper">
						<h3 class="subtitle">Colophon</h3>
					</div>
					<p>
						This version  of my portfolio was created with Vue-cli, VueX, and Vue-router as an SPA (Single Page App). The content sections are positioned
						around the intro page-view and are pulled into the center when active, instead of the boring vertical scroll. 
					</p>
				</div>
				<div class="footer_element copy_element">
					<p>Special THANK YOU to <a class="link" target="_blank" href="http://nightship.net/">Nightship Networks</a> for providing the Hosting for this site.</p>
					<p class="copyright">Woozle Labs ©2016 - {{thisYear()}} </p>	
				</div>
			</div>
		
		</footer>
		
	</template>
	
	
	
	<style>
    /*  -----------------------------------------------------------------------------------------------------
                                    PAGE FOOTER
        -----------------------------------------------------------------------------------------------------    */ 
		.page_footer {
			position: fixed;
				z-index: 50;
				bottom: 0;
				left: 0;
			width: 100vw;
			height: 8rem;			
			transform: translateY(7rem);
			
			cursor: pointer;			
			font-size: .8rem;
			box-shadow: -1px 0 4px rgba(0,0,0,0.5);
			background: url(/static/images/black-wood.jpg) repeat;			
			border-top: 1.5rem solid transparent;
			-webkit-border-image: url(/static/images/stripes.jpg) 100% 0 repeat; /* Safari 3.1-5 */
			border-image: url(/static/images/stripes.jpg) 100% 0 repeat; 
			transition: transform .5s ease-out, cursor .5s;
		}
		.page_footer:hover,
		.page_footer:focus {
			transform: translateY(0);	
			cursor: default;
		}
		.page_footer .background {
			background: rgba(0,0,0,0.25);
			padding: 5px 0 0 0;		
		}
		.page_footer .footer_inner {
			display: flex;
			justify-content: space-between;
			width: 100%;
			max-width: 1200px;
			padding: 4px 0;
			margin: 0 auto;
		}
		.page_footer .footer_inner .footer_element {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			position: relative;
			padding: 0 0 0 25px;
			min-height: 100px;
			width: 30%;
		} 
		.page_footer .footer_inner .footer_element + .footer_element {
			margin-left: 1.25%;
		}
		.page_footer .footer_inner .footer_element:last-of-type {
			float: right;
		}
		.page_footer .footer_inner .footer_element p {
			color: #798a74;
			font-size: .9rem;
			font-weight: 300;
		}
		.page_footer .footer_inner .footer_element p.copyright{
			font-size: .65em;
			color: #889c82;
		}
		.page_footer .footer_inner .footer_element.colophon_element {
			width: 37%;
			display: flex;
		}
		.page_footer .footer_inner .footer_element.colophon_element p{
			font-style: italic;
			padding: 0 1rem;
		}
		.page_footer .footer_inner .footer_element.copy_element p {
			margin-top: 1em;
			width: 100%;
			text-align: center;
		}
		.page_footer .footer_inner .footer_element .vertical_wrapper {		
			position: absolute;
				top: 0;
				left: 0;
			width: 20px;		
			height: 120%;
		}
		.page_footer .footer_inner .footer_element .subtitle {		
			position: absolute;
			bottom: 0;
			left: 0;
			letter-spacing: .025em;
			color: #515151;
			font-size: 1.05em;
			transform:rotate(270deg);
			transform-origin: 0 0;
		}
		.page_footer .footer_footer {
			padding: 5px 0px;
			margin-top: 6px;
			border-top: solid 1px #222;
		}
		.page_footer .footer_footer .provided_by {
			text-align: right;
			float: right
		}
		.page_footer .work_element .status {
			padding: 0 0 4px 0;
		}
		.page_footer .work_element .status .title{
			font-size: 1.25em;
			display: inline-block;
			line-height: 16px;
			color: var(--secondary);
			width: 25%;
			text-align: right;
			padding: 0 5px 0 0;
		}
		.page_footer .work_element .status .current {
			font-size: 1.15em;
			line-height: 16px;
			color: #1E9646;
			/*color: #941A1A;*/
			max-width: 75%;
		}
		
		.page_footer .work_element .link {		
			width: 40%;
			position: relative;
			display: inline-block;
			text-align: center;
			font-size: 6em;
			line-height: 1em;
			color: rgba(24,60,99,.5);
			text-shadow: -1 -1px .1rem rgba(0,0,0,0.15);
		}
		.page_footer .work_element .link .image {	
			display: block;
			width: 100%;
			opacity: .9;
			border-radius: .1rem;
			margin-top: .5rem;
		}
		.page_footer .work_element .link + .link {
			margin-left: 10%;
			float: right;
		}
		.page_footer .work_element .link .text{
			position: absolute;
				top: 0;
				left: 0;		
			text-align: center;
			font-size: 1.1rem;
			font-weight: 300;
			line-height: 1.35em;
			background: rgba(0,0,0,0.25);
			color: #fff;
			opacity: 0;
			margin: 30% 0 0 0;
			text-shadow: -1px -1px 1px rgba(0,0,0,0.5);
			width: 100%;
			transition: opacity .3s;
		}
		
		.page_footer .work_element .link:hover .text  {		
			opacity: 1;
		}
		.page_footer .footer_footer .link {
			text-transform: uppercase;
		}
		
		.page_footer .footer_footer .email_link {
			margin-left: 10%;
		}
		
		
	
	</style>
	
	
	
	
	
	<script>
		export default {
			name: 'page_footer',
			data() {
				return {
					
				}
			},
			mounted: function() {
			},
			methods: {				
				thisYear: function(e) {
					return new Date().getFullYear();					
				}
			}
			
		}
	
	</script>