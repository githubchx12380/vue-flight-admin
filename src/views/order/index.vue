<template>
  <div class="ordet-box">
       <el-table
      v-loading="listLoading"
      :data="orderList"
      style="width: 100%">
      <el-table-column
        prop="order_id"
        label="订单ID"
        width="120">
      </el-table-column>

      <el-table-column
        prop="air_ticket_id"
        label="航班ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="dep"
        label="出发地"
        width="120">
      </el-table-column>
      <el-table-column
        prop="arr"
        label="到达地"
        width="120"
       >
      </el-table-column>
      <el-table-column
        prop="person.length"
        label="购票数量"
        width="120"
       >
      </el-table-column>
      <el-table-column
        prop="buy_date"
        label="订单创建时间"
        width="200"
       >
      </el-table-column>
      <el-table-column
        prop="baoxian"
        label="保险金额"
        width="150"
       >
      </el-table-column>
      <el-table-column
        prop="allprice"
        label="总价格"
        width="110"
       >
      </el-table-column>
      <el-table-column
        prop="discountStr"
        label="订单操作"
       >
        <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">预留电话</el-button>
        <el-button
          size="mini"
          type="success"
          @click="handleDelete(scope.$index, scope.row)">乘客信息</el-button>
      </template>
      </el-table-column>
    </el-table>

    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false"
       >
       <el-form v-for="(item,index) in currentArr" style="padding-right:15px" :key="index" label-width="70px">
           <h2 style="text-align:center">乘客{{index + 1}}</h2>
           <el-form-item label="姓名:">
               <el-input readonly :value="item.name" placeholder="请输入内容"></el-input>
           </el-form-item>
           <el-form-item label="证件号:">
               <el-input readonly :value="item.card" placeholder="请输入内容"></el-input>
           </el-form-item>
       </el-form>
      
    </el-drawer>
  </div>
</template>

<script>
import { get_OrderData } from '@/api/order'
export default {
    data() {
        return {
            currentArr:[],
            drawer:false,
            listLoading:true,
            orderList:[]
        }
    },
    methods:{
        getOrderData() {
            this.listLoading = true
            get_OrderData().then(res => {
                this.orderList = [...res.data.data]
                setTimeout(() => {
                    this.listLoading = false
                }, 0.5 * 1000)
            })
        },
        //查看预留电话
        handleEdit(scope,row) {
            if(!this.$store.state.user.roles.includes('admin')) {
                this.$message.warning('抱歉,您的权限不够!')
                return
            }
            let html = `<div style="display: flex;
            justify-content: center;
            align-items: center;">
            <span>姓名:</span>
            <span style="font-weight:700;">${row.getname}</span>
            </div>
            <div style="display: flex;
            justify-content: center;
            align-items: center;">
            <span>手机号:</span>
            <span style="font-weight:700;">${row.getphone}</span>
            </div>`
            this.$alert(html, {
                dangerouslyUseHTMLString: true
            });

        },
        //查看乘客信息
        handleDelete(scope,row) {
             if(!this.$store.state.user.roles.includes('admin')) {
                this.$message.warning('抱歉,您的权限不够!')
                return
            }
            this.currentArr = this.orderList[scope].person
            
            this.drawer = true
        }
    },
    created() {
        this.getOrderData()
    }
}
</script>

<style scoped>
.ordet-box{
   padding: 20px 10px;
}

</style>