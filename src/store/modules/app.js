const shouldUseTransition = !/transition=none/.test(location.href)

const app = {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: shouldUseTransition ? 'forward' : '',
    title: '首页',
    isShowBack: false,
    deviceScrollTopStyle: 'translateX(0px) translateY(0px) translateZ(0px) scale(1, 1)'
  },
  mutations: {
    updateDeviceScrollTopStyle (state, scrollTopStyle) {
      state.deviceScrollTopStyle = scrollTopStyle
    },
    updateHeader (state, {title, isShowBack}) {
      state.title = title
      state.isShowBack = isShowBack
    },
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      if (!shouldUseTransition) {
        return
      }
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
}

export default app
