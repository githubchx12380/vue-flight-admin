<template>
  <div class="city">
    <el-button type="success" @click="addSubmitCity">添加城市</el-button>
    <el-drawer
        title="我是标题"
        direction="ttb"
        :visible.sync="drawer"
        :with-header="false">
      <el-form style="padding:20px 100px">
          <el-form-item style="margin:20px 0" label="城市名称" label-width="80px">
                <el-input v-model="model.city" ></el-input>
          </el-form-item>
          <el-form-item style="margin:20px 0" label="城市编号" label-width="80px">
                <el-input v-model="model.citycode"></el-input>
          </el-form-item>
          <el-form-item style="padding-left:20px;">
              <el-button type="primary" plain @click="SubmitCity">确定</el-button>
              <el-button type="info" plain @click="drawer = false">取消</el-button>
          </el-form-item>
      </el-form>
    </el-drawer>
       <el-table
      :data="citylist"
      style="width: 100%">
      <el-table-column
        prop="city_id"
        label="城市ID"
        width="500">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        width="500">
      </el-table-column>
      <el-table-column
        prop="citycode"
        label="城市编号">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { CityList,addCity } from '@/api/flight'
export default {
    data() {
        return {
            model:{},
            citylist:[],
            drawer:false
        }
    },
    methods:{
        addSubmitCity() {
            if(!this.$store.state.user.roles.includes('admin')) {
                this.$message.warning('抱歉,您的权限不够!')
                return
            }
            this.drawer = true
        },
        SubmitCity() {
            addCity(this.model).then(res => {
               if(res.data.code === 200) {
                     this.initcityList()
                     this.drawer = false
               }
            })
        },
        initcityList() {
            CityList().then(res => {
                this.citylist = res.data.data
            })
        }
    },
    created() {
        this.initcityList()
    }
}
</script>

<style scoped lang="scss">
.city{
    padding: 20px;
}
</style>