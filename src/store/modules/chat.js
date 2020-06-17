const state = {
    logs: []
  }
  
  const mutations = {
    ADD_MSG: (state, data) => {
        console.log(state);
        console.log(data);
        
        let obj = []
        
    //  state.push({
    //      [data.webuser_id]:[data]
    //  })
    //  console.log(state);
     
    },
    CLEAR_ERROR_LOG: (state) => {
      state.logs.splice(0)
    }
  }
  
  const actions = {
  
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  