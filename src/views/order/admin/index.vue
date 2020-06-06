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
        width="150"
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
  </div>
</template>

<script>
import { get_OrderData } from '@/api/order'
export default {
    data() {
        return {
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