<template>
 
</template>

<script>
export default {
 
  methods: {
    onSuccess(res, file, fileList) {
     this.$emit('headSubmitImg',res.url)
    }
  }
}
</script>
