<template>
  <div>
      <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminAddFlight from './admin/addFlight'
import editorFlight from './editor/index'
export default {
    name:'addFilter',
    components:{
        adminAddFlight,
        editorFlight
    },
    data() {
        return {
          currentRole:'adminAddFlight'
        }
    },
     computed: {
    ...mapGetters([
      'roles'
    ])
    },
    created() {
        if (!this.roles.includes('admin')) {
            this.currentRole = 'editorFlight'
        }
    }
}
</script>

<style>

</style>