<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="model.aircode" placeholder="航班编号" style="width: 150px;" class="filter-item" @keyup.enter.native="aircodeChange" />
        <div class="block filter-item" style="width: 220px">
          <el-date-picker
            v-model="model.depdate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      <el-select v-model="model.depcode"  placeholder="出发城市" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in cityList" :key="item.city_id" :label="item.city" :value="item.citycode" />
      </el-select>
      <el-select v-model="model.arrcode" placeholder="到达城市" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in cityList" :key="item.city_id" :label="item.city" :value="item.citycode" />
      </el-select>
      <div class="block filter-item" style="width: 300px;margin:0 20px;">
          <span class="demonstration">价格 {{model.price}} 以内</span>
      <el-slider v-model="model.price" :max="3000" :min="0"></el-slider>
  </div>
     
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="sratchSubmit">
        搜索
      </el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="air_ticket_id"
        label="ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="airCode"
        label="航班编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="depAirport"
        label="起飞机场"
        width="150">
      </el-table-column>
      <el-table-column
        prop="arrAirport"
        label="到达机场"
        width="150">
      </el-table-column>
      <el-table-column
        prop="depDate"
        label="起飞时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="price"
        label="航班价格"
         width="150">
      </el-table-column>
      <el-table-column
        prop="planeFullType"
        label="飞机类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="discountStr"
        label="折扣"
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
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>

     <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="model.page"
      :page-sizes="[10, 20, 50, 100,200]"
      :page-size="model.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>


  </div>
</template>

<script>
import { CityList,flight_list,delete_flight } from '@/api/flight'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination



export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
   
  },
  data() {
    return {
     
      tableData: [],
      total:null,
      cityList:[],
      listLoading: true,
      model:{
        depcode:'',
        arrcode:'',
        page:1,
        limit:10,
        depdate:'',
        aircode:'',
        price:3000,
      },
     
    
    }
  },
  created() {
    //获取城市列表
    this.getCity()
    //获取所有机票信息
    this.getList() 
  },
  methods: {
    //编辑按钮点击
    handleEdit(scope,row) {
      if(!this.$store.state.user.roles.includes('admin')) {
        this.$message.error('抱歉,您的权限不够!')
        return
      }
      this.$router.push(`/flight/addair/${row.air_ticket_id}`)
    },
    //删除按钮点击
    handleDelete(scope,row) {
      if(!this.$store.state.user.roles.includes('admin')) {
        this.$message.error('抱歉,您的权限不够!')
        return
      }
      
      delete_flight(row.air_ticket_id).then(res => {
        if(res.data.code == 200) {
          this.$message.success(res.data.msg)
          this.getList()
        }
      })
    },
    //翻页
    handleSizeChange(val) {
     this.model.limit = val
     this.model.page = 1
     this.getList()
    },
    handleCurrentChange(val) {
       this.model.page = val
      this.getList()
    },
    //获取城市数据
    getCity() {
      CityList().then(res => {
        this.cityList = res.data.data
      })
    },
    //出发城市
    depChange(val) {
      
    },
    //到达
    arrChange(val) {

    },
    //获取航班数据
    getList() {
      this.listLoading = true
      flight_list(this.model).then(res => {
        this.total = res.data.len
        console.log(res.data.data);
        
        this.tableData = res.data.data
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
    },
    //搜索
    sratchSubmit() {
       this.model.page = 1
       this.getList()
    },
   
 
   

    
  }
}
</script>
