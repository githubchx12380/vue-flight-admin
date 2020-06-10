<template>
    <div class="user_order">
        <el-page-header @back="goBack" content="订单详情">
        </el-page-header>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>订单详情</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
           <el-table
            :data="orderlist"
            style="width: 100%"
            >
            <el-table-column
              prop="order_id"
              label="订单ID"
              width="130">
            </el-table-column>
             <el-table-column
              prop="dep"
              label="出发地"
              width="130">
            </el-table-column>
             <el-table-column
              prop="arr"
              label="到达地"
              width="130">
            </el-table-column>
             <el-table-column
              prop="depDate"
              label="出发时间"
              width="130">
            </el-table-column>
            <el-table-column
              prop="buy_date"
              label="订单创建日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="getname"
              label="机票接收人"
              width="130">
            </el-table-column>
            <el-table-column
              prop="getphone"
              label="接收电话"
              width="130">
            </el-table-column>
            <el-table-column
              prop="person.length"
              label="购票数量"
               width="130">
            </el-table-column>
            <el-table-column
              prop="allprice"
              label="总价格"
               width="130">
            </el-table-column>
            <el-table-column
              prop="buy_state"
              label="支付状态">
              <template slot-scope="scope">
                  <div>
                    {{scope.row.buy_state ? '已支付' : '未支付'}}
                  </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
       
    </div>
</template>

<script>
import { userItem_order } from '@/api/order'
  export default {
    data() {
      return {
        orderlist:[]
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
    },
    mounted() {
        userItem_order(this.$route.params.id).then(res => {
          this.orderlist = res.data.data      
        })
    }
  }
</script>

<style lang="scss" scoped>

.user_order{
    padding: 20px;
}
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin: 20px 0;
  }
</style>