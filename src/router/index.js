
	import Vue from 'vue'
	import Router from 'vue-router'
	import intro from '@/components/intro'
	import what_i_do from '@/components/what_i_do'
	import contact from '@/components/contact'
	import workshop from '@/components/workshop'
	import portfolio from '@/components/portfolio'

	Vue.use(Router)

	export default new Router({
		mode: 'history',
		routes: [{
			path: '/',
			name: 'intro',
			component: intro
		},{
			path: '/what_i_do',
			name: 'what_i_do',
			component: what_i_do
		},{
			path: '/contact',
			name: 'contact',
			component: contact
		},{
			path: '/workshop',
			name: 'workshop',
			component: workshop
		},{
			path: '/portfolio',
			name: 'portfolio',
			component: portfolio
		}]
	})
