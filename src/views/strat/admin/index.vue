<template>
  <div class="components-container">
    <aside>
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html">Documentation</a>
    </aside>
    <div>
      <tinymce v-model="content" @images_upload_handler="images_upload_handler" :height="300" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content:``
    }
  },
  methods:{
    images_upload_handler(blobInfo,success,callback){
      console.log(blobInfo);
      
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>

