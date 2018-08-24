import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _d789a044 = () => import('../pages/spit/index.vue' /* webpackChunkName: "pages/spit/index" */).then(m => m.default || m)
const _34c10e66 = () => import('../pages/qa/index.vue' /* webpackChunkName: "pages/qa/index" */).then(m => m.default || m)
const _84c56e72 = () => import('../pages/gathering/index.vue' /* webpackChunkName: "pages/gathering/index" */).then(m => m.default || m)
const _711c9a15 = () => import('../pages/friends/index.vue' /* webpackChunkName: "pages/friends/index" */).then(m => m.default || m)
const _62bb987e = () => import('../pages/recruit/index.vue' /* webpackChunkName: "pages/recruit/index" */).then(m => m.default || m)
const _076d91e2 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/spit",
			component: _d789a044,
			name: "spit"
		},
		{
			path: "/qa",
			component: _34c10e66,
			name: "qa"
		},
		{
			path: "/gathering",
			component: _84c56e72,
			name: "gathering"
		},
		{
			path: "/friends",
			component: _711c9a15,
			name: "friends"
		},
		{
			path: "/recruit",
			component: _62bb987e,
			name: "recruit"
		},
		{
			path: "/",
			component: _076d91e2,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
