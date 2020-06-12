<template>
  <el-form>
    <el-form-item label="头像">
      <upload @headSubmitImg="res => model.img = res" />
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model.trim="user.name" />
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model.trim="user.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Upload from './upload'
import { update_info } from '@/api/user'
import { getToken } from '@/utils/auth'
export default {
  components:{
    Upload
  },

  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: ''
        }
      }
    }
  },
  methods: {
    submit() {
     const {avatar,role,...req} = this.user 
      update_info(req).then(res => {
        if(res.data.code === 200) {
          this.$message({
            message: res.data.msg,
            type: 'success',
            duration: 5 * 1000
          })
          this.$router.push('/')
        }
        
      })
      
    }
  }
}
</script>
