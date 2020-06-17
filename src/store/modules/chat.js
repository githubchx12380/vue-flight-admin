const state = {
    Msg: {}
  }
  
  const mutations = {
  
    Add_MSG_MATA: (state,data) => {
      state.Msg = data
    }
  }
  
  const actions = {
    ADD_MSG: ({state,commit}, data) => {
        if(state.Msg[data.username]) {
            state.Msg[data.username].push(data)
            commit('Add_MSG_MATA',JSON.parse(JSON.stringify(state.Msg)))
            return
        }
        state.Msg[data.username] = [data]
        commit('Add_MSG_MATA',JSON.parse(JSON.stringify(state.Msg)))
        
    },
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  