<template>
  <div class="chat_box">
      <el-row>
        <el-col :span="6" class="left">
          <h3>用户列表</h3>
          <div @click="currentKey = key" class="user" v-for="(item,key,index) in Msg" :key="index">
            <img v-if="item[0].head_img" :src="baseURL + item[0].head_img" alt="">
            <img v-else src="http://k1998.xyz:3000/images/avatar01.jpg" alt="">
            <p :class="currentKey === key && 'active' ">{{key}}</p>
          </div>
          
        </el-col>
        <el-col :span="18" class="right">
          <h3>前台消息</h3>
          <div class="content">
            <div v-for="(item,index) in Msg[currentKey]" :key="index">
                <div  v-if="item.webuser_id" class="content_item_left">
                <img v-if="Msg[currentKey][0].head_img" :src="baseURL + Msg[currentKey][0].head_img" alt="">
                <img v-else src="http://k1998.xyz:3000/images/avatar01.jpg" alt="">
                <div>
                  <p>{{item.value}}</p>
                </div>
              </div>
              <div v-else class="content_item_right">
                <div>
                </div>
                <p>{{item.value}}</p>
                 <img v-if="Msg[currentKey][0].head_img"  :src="baseURL + Msg[currentKey][0].head_img" alt="">
                 <img v-else src="http://k1998.xyz:3000/images/avatar01.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="text_box">
            <div class="biaoq"></div>
              <textarea class="text" v-model="value" contenteditable>
              </textarea>
          </div>
            <el-button class="submits" @click="MsgSubmit">发送</el-button>
        </el-col>
        <div style="display:none">{{userlist}}</div>
      </el-row>
  </div>
</template>

<script>
import { now, line } from '../../socket'
import { getToken } from '../../utils/auth'
import { mapGetters } from 'vuex'
import { imgURL as baseRUL } from '../../utils/imgUrl'
export default {
    data() {
      return {
        value:'',
        currentKey:'123456',
      }
    },
    computed:{
      userlist() {
        return 1
      },
      baseURL() {
        return baseRUL
      },
      ...mapGetters([
        'name',
        'Msg'
      ]),
      
    },
    
    methods:{
      MsgSubmit() {
      }
    },
    mounted() {
      
        now({id:getToken(),name:this.name})
    },
    beforeDestroy() {
        line({id:getToken(),name:this.name})
    },
    
    
}
</script>

<style scoped lang="scss">
.chat_box{
  padding: 20px;
  .left{
    background-color: #2e3238;
    color: white;
    padding: 0 20px;
    height: 80vh;
    .user{
      display: flex;
      align-items: center;
      margin: 10px 0;
      cursor: pointer;
      &:hover{
        color: #42b983;
      }
      p {
        &.active{
          color:#42b983 ;
        }
      }
      img{
        width: 40px;
        height: 40px;
        margin-right: 10px;;
      }
      
    }
  }
  .right{
    background-color: #eeeeee;
    height: 80vh;
    position: relative;
    .submits{
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
    h3{
      padding-bottom: 15px;
      font-weight: 400;
      text-align: center;
      border-bottom:1px solid rgb(204, 204, 204);
    }
    .content{
      height: calc(80vh - 50px - 200px);
      overflow: auto;
      padding: 0 10px;
      img{
        width: 40px;
        height: 40px;
        margin-right: 10px;;
      }
       p{
        background-color: #b2e281;
        color: black;
        line-height: 40px;
        padding: 0 10px;
      }
      .content_item_left{
        display: flex;
        align-items: center;
        >div{
          flex: 1;
          p{
            display: inline-block;
          }
        }
      }
      .content_item_right{
        display: flex;
        align-items: center;
        >div{
          flex: 1;
        }
        p{
            display: inline-block;
            margin-right: 10px;
        }
      }
      
    }
    .text_box{
      padding: 0 20px;
      position: absolute;
      bottom: 0;
      height: 200px;
      right: 0;
      left: 0;
      .biaoq{
        height: 40px;
        margin-bottom:10px;
        border-bottom: 1px solid rgb(204, 204, 204);
      }
      .text{
        border:0;
        background-color: #eeeeee;
        height: 130px;
        width: 100%;
        outline: none
      }
    }
  }
}
</style>