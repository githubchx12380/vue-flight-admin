<template>
  <div>
      <component :is="current" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminStrat from './admin'
import editorStrat from './editor'
export default {
    data() {
        return {
            current:'adminStrat'
        }
    },
    components:{
        adminStrat,
        editorStrat
    },
    computed:{
        ...mapGetters([
            'roles'
        ]) 
    },
    created() {
        if(!this.roles.includes('admin')) {
            this.current = 'editorStrat'
        }
    }
}
</script>

<style>

</style>