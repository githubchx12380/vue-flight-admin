<template>
  <div>
      <component :is="current" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminUserOrder from './admin/user_order'
import editorUserOrder from './editor/index'
import { now,line } from '../../socket'
import { getToken } from '../../api/qiniu'
export default {
    data() {
        return {
            current:'adminUserOrder'
        }
    },
    components:{
        adminUserOrder,
        editorUserOrder
    },
    computed:{
        ...mapGetters([
            'roles'
        ]) 
    },
    created() {
        if(!this.roles.includes('admin')) {
            console.log(111);
            
            this.current = 'editorUserOrder'
        }
        
    },
}
</script>

<style>

</style>