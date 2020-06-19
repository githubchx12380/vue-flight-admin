<template>
  <div>
    <div style="margin-bottom:15px;">
    </div>
    <div>
        <el-radio-group v-model="radio1" @change="handleAdmin">
          <el-radio-button label="editor"></el-radio-button>
          <el-radio-button label="admin"></el-radio-button>
        </el-radio-group>
    </div>
     <el-table
    :data="adminlist"
    style="width: 100%">
    <el-table-column
      prop="user_id"
      label="管理员ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="头像"
      width="180">
      <template slot-scope="{row}">
         <img :src="imgUrl + row.img" alt="" style="width:50px;">
      </template>
    </el-table-column>
    <el-table-column
      prop="username"
      label="账号">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { get_admininfo } from '@/api/user'
import { imgURL } from '@/utils/imgUrl'
export default {
    data() {
      return {
            radio1: 'admin',
            adminlist:[],
          }
    },
    computed:{
      imgUrl() {
        return imgURL
      }
    },
    methods:{
      handleAdmin(val) {
        this.radio1 = val
        this.get_adminlist()
      },
      //获取数据
      get_adminlist() {
        get_admininfo(this.radio1).then(res => {
          this.adminlist = res.data.data
        })
      }
    },
    created() {
      this.get_adminlist()
    }
}
</script>
