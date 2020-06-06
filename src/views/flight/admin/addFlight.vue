<template>
  <div class="add-flight">
      <h1 style="text-align:center">新建航班</h1>
      <el-form>
        <el-form-item label="航班号:" label-width="70px">
          <el-input v-model="model.airCode"></el-input>
        </el-form-item>
        <el-row class="el-rows">
          <el-col :span="8" >
            <el-form-item label-width="110px" label="出发城市">
                  <el-select v-model="model.depAirportCode" placeholder="请选择">
                    <el-option
                      v-for="item in cilist"
                      :key="item.city_id"
                      :label="item.city"
                      :value="item.citycode">
                    </el-option>
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label-width="110px" label="出发城市">
                  <el-select v-model="model.arrAirportCode" placeholder="请选择">
                    <el-option
                      v-for="item in cilist"
                      :key="item.city_id"
                      :label="item.city"
                      :value="item.citycode">
                    </el-option>
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="110px" label="出发时间">
              <el-date-picker
                v-model="depdates"
                @change="depDateChange"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm" 
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="el-rows">
          <el-col :span="8">
            <el-form-item label="到达时间" label-width="110px">
             <el-date-picker
                v-model="arrdates"
                value-format="yyyy-MM-dd HH:mm" 
                @change="arrDateChange"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出发航空站" label-width="110px">
               <el-select v-model="model.depTerminal" placeholder="请选择">
                  <el-option
                    v-for="item in termoption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="到达航空站" label-width="110px">
               <el-select v-model="model.arrTerminal" placeholder="请选择">
                  <el-option
                    v-for="item in termoption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="el-rows">
          <el-col :span="8" style="padding-right:100px;">
            <el-form-item label="航班折扣" label-width="110px">
              <el-input v-model="model.discountStr" placeholder="格式为:(1.6折)"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"  style="padding-right:100px;">
            <el-form-item label="航空公司" label-width="110px">
              <el-input v-model="model.fullName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="有无餐食" label-width="110px">
               <el-select v-model="model.mealDesc" placeholder="请选择">
                  <el-option
                    v-for="item in medloption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="el-rows">
          <el-col :span="8"  style="padding-right:100px;">
             <el-form-item label="航班价格" label-width="110px">
              <el-input type="number" v-model="model.price"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
             <el-form-item label="飞机类型" label-width="110px">
               <el-select v-model="model.planFullType" placeholder="请选择">
                  <el-option
                    v-for="item in planFullTypeopt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:100px;">
              <el-form-item label="航班耗时" label-width="120px">
                <el-input v-model="need" readonly></el-input>
              </el-form-item>
          </el-col>
        </el-row>
        <div style="padding:30px 100px;">
          <el-button type="success" size="medium" round style="width:100%;margin:0 auto;" @click="submitFlight">提交</el-button>
        </div>
      </el-form>
      <div style="display:none;">{{needDate}}</div>
  </div>
</template>

<script>
import { CityList,insert_flight } from '@/api/flight'
export default {
  data() {
    return {
      need:'',
      cilist:[],
      depdates:'',
      arrdates:'',
      planFullTypeopt:[
        {value:'空客320(大)',label:'空客320(大)'},
        {value:'空客320(中)',label:'空客320(中)'},
        {value:'空客320(小)',label:'空客320(小)'}
      ],
      medloption:[
        {value:'有餐食',label:'有餐食'},
        {value:'无餐食',label:'无餐食'},
      ],
      termoption:[
        {value:'T1',label:'T1'},
        {value:'T2',label:'T2'},
        {value:'T3',label:'T3'},
      ],
      value1:'',
      model:{

      },
      options:[{
         value: 'zhinan',
          label: '指南',

          children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
      }]
    }
  },
  computed:{
    needDate() {
      if(this.depdates && this.arrdates) {
        console.log(this.depdates,this.arrdates);
        
        var dt1 = this.depdates 
        var dt2 = this.arrdates
        function getHoursDiff(dt1,dt2) {
            if(typeof(dt1)=="string") {
                dt1=new Date(dt1.replace(/-/,'/'));
                dt2=new Date(dt2.replace(/-/,'/'));
            }
            var res=dt2-dt1;
            if(isNaN(res))
                throw Error("invalid dates arguments");
            return res/(1000*60*60);
        }
        var re=getHoursDiff(dt1,dt2);
        var h=parseInt(re);
        var m=parseInt((re-h)*60);
        let str = `${h}小时${m}分钟`
        this.need = str
        this.model.flightTime = str
        
      }
      return '哈哈'
    }
  },
  methods:{
    //出发城市和机场
    handleChangeDep(val) {
      console.log(val);
    },
    //到达城市和机场
    handleChangeArr(val) {
      console.log(val)
    },
    //出发时间
    depDateChange(val) {
      let dateArr = val.split(' ')
      this.model.depDate = dateArr[0]
      this.model.depTime = dateArr[1]
    },
    //到达时间
    arrDateChange(val) {
      let dateArr = val.split(' ')
      this.model.arrDate = dateArr[0]
      this.model.arrTime = dateArr[1]
    },
    //获取城市数据
    citylist() {
      CityList().then(res => {
        this.cilist = res.data.data
      })
    },
    //提交
    submitFlight() {
      insert_flight(this.model).then(res => {
        
      })
    }
  },
  created() {
    this.citylist()
  },
}
</script>

<style scoped lang="scss">
.add-flight{
  padding: 20px 10px;
}
.el-rows{
  margin: 40px 0 0 0;
}
</style>