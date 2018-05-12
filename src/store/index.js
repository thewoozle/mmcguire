	import Vue from 'vue'
	import Vuex from 'vuex'

	import { portfolio } from './portfolio'

	Vue.use(Vuex)

	// root state object.
	// each Vuex instance is just a single state tree.
	const state = {
		title: 'Web Developer and Gaming Event Promoter',
		scrollState: '',
		portfolio: portfolio
	}

	const mutations = {
		updateScrollState(state, scroll) {
			state.scrollState = scroll
		}
	}
	const actions = {
	}
	const getters = {
	}

	export default new Vuex.Store({
	  state,
	  getters,
	  actions,
	  mutations
	})