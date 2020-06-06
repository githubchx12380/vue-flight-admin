<template>
  <div>
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminOrder from './admin'
import editorOrder from './editor'
export default {
  data() {
    return {
      currentRole:'adminOrder'
    }
  },
  components:{
    adminOrder,
    editorOrder
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
      if (!this.roles.includes('admin')) {
          this.currentRole = 'editorOrder'
      }
  }
}
</script>

<style>

</style>