<template>
  <div class="strat_parent">
    <el-row>
   
      <el-col :span="12" class="item_col" v-for="item in list" :key="item.strat_id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{item.title.substring(1,25)}}...</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-html="item.content"></div>
        </el-card>
      </el-col>
  
    </el-row>
  </div>
</template>

<script>
import { strat_list } from '@/api/strat'
export default {
    data() {
        return {
            pages:{
                page:1,
                pagesize:4
            },
            list:[]
        }
    },
    methods:{
        get_stratlist() {
            strat_list(this.pages).then(res => {
                this.list = res.data.data
            })
        }
    },
    created() {
        this.get_stratlist()
    }
};
</script>

<style>

.item_col {
  display: flex;
  justify-content: center;
  margin: 15px 0;
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
  clear: both;
}

.box-card {
  width: 550px;
}
</style>