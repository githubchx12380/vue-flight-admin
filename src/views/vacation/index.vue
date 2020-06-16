<template>
  <div class="vacation">
      <el-card class="box-card" v-for="(item,index) in vacationList" :key="index">
        <div slot="header" class="clearfix">
            <span>假日选项{{index + 1 }}</span>
        </div>
        <el-row>
            <el-col :span="8" >
                <h4>标题</h4>
                <h4 class="vaction_col">{{item.vacation_title}}</h4>
            </el-col>
            <el-col :span="8" class="vaca_back">
                <h4>Logo</h4>
                <img :src="vacationImg + item.vacation_backimg" alt="">
            </el-col>
            <el-col :span="8" >
                <h4>出行时间</h4>
                <h4 class="vaction_col">5、6月周末</h4>
            </el-col>
        </el-row>
      </el-card>
  </div>
</template>

<script>
import { vacation_list } from '@/api/vacation'
export default {
    data() {
        return {
            vacationList:[]
        }
    },
    computed:{
        vacationImg() {
            return 'http://localhost:1337/api/'
        }
    },
    methods:{
        get_vacation() {
            vacation_list().then(res => {
                this.vacationList = res.data.data
            })
        }
    },
    created() {
        this.get_vacation()
    },
  
    
}
</script>

<style scoped lang="scss">
.vacation{
    padding: 20px;
    .box-card{
        margin-bottom: 20px;
        h4{
            text-align: center;
        }
        .vaca_back{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .vaction_col{
            padding: 30px;
        }
    }
}
</style>