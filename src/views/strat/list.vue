<template>
  <div>
    <div class="strat_parent">
      <el-row>
        <el-col :span="12">
          <div class="item_col" v-for="item in list" :key="item.strat_id">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{item.title.substring(1,25)}}...</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-html="item.content"></div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="item_col" v-for="item in listright" :key="item.strat_id">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{item.title.substring(1,25)}}...</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-html="item.content"></div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="getdata"><el-button :loading="loading" round @click="handleGetData">加载更多</el-button></div>
    
  </div>
</template>

<script>
import { strat_list } from "@/api/strat";
export default {
  data() {
    return {
      loading:false,
      pages: {
        page: 1,
        pagesize: 2
      },
      list: [],
      listright: []
    };
  },
  methods: {
    get_stratlist() {
      strat_list(this.pages).then(res => {
        this.list.push(...res.data.data);
      });
      strat_list({
        page: this.pages.page + 1,
        pagesize: this.pages.pagesize
      }).then(res => {
        this.listright.push(...res.data.data);
      });
    },
    handleGetData() {
        this.pages.page += 1
        this.loading = true
        setTimeout(() => {
            this.get_stratlist()
            this.loading = false
        },1000)
    }
  },
  created() {
    this.get_stratlist();
  }
};
</script>

<style scoped lang="scss">
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
/deep/ .el-card__body {
  overflow: hidden;
  padding: 0;
}
.box-card {
  padding: 0 10px;
  overflow: hidden;
  width: 80%;
}
.getdata{
    width: 250px;
    margin: 0 auto 50px;
    /deep/ .el-button--medium{
        width: 100%;
    }
}
</style>