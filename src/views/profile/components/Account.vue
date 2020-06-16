<template>
  <el-form>
    <el-form-item label="头像">
       <el-upload :multiple="true"  :on-success="onSuccess" :action="baseURL" drag>
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            将文件拖到此处，或<em>点击上传</em>
          </div>
       </el-upload>
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
import request from '../../../utils/request'
import { update_info } from '@/api/user'
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          img:''
        }
      }
    }
  },
  computed:{
    baseURL() {
      return request.defaults.baseURL + '/user/upload'
    },
  },
  methods: {
    onSuccess(res) {
      this.user.img = res.url
    },
    submit() {
     const {avatar,role,...req} = this.user 
    
      update_info(req).then(res => {
        if(res.data.code === 200) {
          this.$message({
            message: res.data.msg,
            type: 'success',
            duration: 5 * 1000
          })
          this.$store.dispatch('user/getInfo')
          this.$router.push('/')
        }
        
      })
      
    }
  }
}
</script>
