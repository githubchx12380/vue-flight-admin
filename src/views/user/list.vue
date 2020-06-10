<template>
  <div>
       <el-table
      v-loading="listLoading"
      :data="allUserData"
      style="width: 100%">
      <el-table-column
        prop="webuser_id"
        label="用户ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户姓名"
        width="150">
         <template slot-scope="scope">
					<div>
            {{scope.row.name? scope.row.name : '暂未设置'}}
					</div>
				</template>
      </el-table-column>
       <el-table-column
        prop="username"
        label="登录账号"
         width="150">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="用户性别"
        width="150">
        <template slot-scope="scope">
					<div>
            {{scope.row.gender === 1 ? '男' : '女'}}
					</div>
				</template>
      </el-table-column>
      <el-table-column
        prop="birth_date"
        label="出生日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="money"
        label="账户余额"
        width="150">
      </el-table-column>
      <el-table-column
        prop="xinyong"
        label="信誉分"
        width="150">
      </el-table-column>
      <el-table-column
        prop="discountStr"
        label="用户头像"
        width="100"
       >
      </el-table-column>
      <el-table-column
        prop="discountStr"
        label="飞机票操作"
       >
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看订单</el-button>
        <el-button
          size="mini"
          :type="scope.row.state ? 'danger' : 'primary'"
          @click="handleDelete(scope.$index, scope.row)">{{scope.row.state ? '封禁' : '解封'}}</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { userall,state_user } from '@/api/user'
export default {
  data() {
    return {
      listLoading:true,
      allUserData:[]
    }
  },
  methods:{
     get_alluser() {
       this.listLoading = true
        userall().then(res => {
          this.allUserData = res.data.data
          setTimeout(() => {
            this.listLoading = false
          },500)
        })
     },
     //封禁用户,解封
      handleDelete(index,scope) {
          state_user(scope.webuser_id).then(res => {
            this.$message.success(res.data.msg)
            if(res.data.code === 200) {
              this.get_alluser()
            }
          })
      },
      //查看用户订单
      handleEdit(index,scope) {
        
      }
      
  },
  created() {
    this.get_alluser()
  },
}
</script>

<style>

</style>