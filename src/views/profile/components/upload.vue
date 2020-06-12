<template>
  <el-upload :multiple="true" :on-success="onSuccess" :action="baseURL" drag>
    <i class="el-icon-upload" />
    <div class="el-upload__text">
      将文件拖到此处，或<em>点击上传</em>
    </div>
  </el-upload>
</template>

<script>
import request from '../../../utils/request'
export default {
  computed:{
    baseURL() {
      return request.defaults.baseURL + '/user/upload'
    }
  },
  methods: {
    onSuccess(res, file, fileList) {
     this.$emit('headSubmitImg',res.url)
    }
  }
}
</script>
