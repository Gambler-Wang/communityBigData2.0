<template>
  <section id="operationStatic">
    <divShell viewTitle="社区运营统计">
      <div class="static">
        <div id="operation-pie-echart">

        </div>
      </div>
      <div class="notice">
        <i class="iconfont el-icon-notice"></i>
        <div>
          <scroll :data="noticeList" :class-option="optionSingleHeight">
            <p class="notice-p" v-for="(item,index) in noticeList" :key="index">
              {{item.newsTitle}}
            </p>
          </scroll>
        </div>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from './divShell.vue';
import AnimatedNumber from "animated-number-vue";
import scroll from 'vue-seamless-scroll'
const echarts = require('echarts');
export default {
  name:'operationStatic',
  components:{
    divShell,
    AnimatedNumber,
    scroll
  },
  props:['spreadData'],
  data() {
    return {
      pieChartObj:null,
      noticeList:[
        {
          insidenotice_id:'1',
          insidenotice_title:'关于小区停电通知',
          insidenotice_utterer:'http://www.baidu.com'
        },
        {
          insidenotice_id:'2',
          insidenotice_title:'关于小区停电通知123123',
          insidenotice_utterer:'http://www.baidu.com'
        },
        {
          insidenotice_id:'3',
          insidenotice_title:'关于小区停电通知asdasdasd',
          insidenotice_utterer:'http://www.baidu.com'
        },
        {
          insidenotice_id:'4',
          insidenotice_title:'轮播开始',
          insidenotice_utterer:'http://www.baidu.com'
        },
      ]
    }
  },
  computed: {
    optionSingleHeight () {
        return {
          singleHeight: 47,
          limitMoveNum: this.noticeList.length,
          waitTime: 2800
        }
    }
  },
  watch:{
    spreadData(){
      this.noticeList=this.spreadData.noticeData;
      this.renderPieEcharts();
    }

  },
  created(){
  },
  mounted() {
    this.$nextTick(()=>{
      this.pieChartObj = echarts.init(document.getElementById('operation-pie-echart'));
      this.renderPieEcharts();
    })
  },
  methods: {
    renderPieEcharts(){
      var option={
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          graphic:{
            type:'text',
            left:'center',
            top:'95px',
            z:2,
            zlevel:100,
            style:{
              fill:'#B5EFFE',
              width:100,
              height:30,
              fontSize:16,
              text:'社区运营',
            }
          },
          series: [
              {
                  name:'运营统计',
                  type:'pie',
                  
                  radius: ['58%', '78%'],
                  center: ['50%', '50%'],
                  color:['#89FFE7','#549AF2','#FF9C9E','#F24C84'],
                  label: {
                      position:'outside',
                       alignTo:'edge',
                      normal:{
                         formatter: '{b}\n{d}%',
                         fontSize:12
                      }
                  },
                  labelLine:{
                    length:10,
                    length2:20
                  },
                  data:[
                      {
                        value:this.spreadData.newsData, 
                        name:'新闻资讯',
                      },
                      {
                        value:this.spreadData.bbsActivityData, 
                        name:'小区活动',
                      },
                      {
                        value:this.spreadData.bbsPostData, 
                        name:'帖子',
                      },
                      // {
                      //   value:this.spreadData.bbsBusinessData, 
                      //   name:'二手交易',
                      // },
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      }
      this.pieChartObj.setOption(option,true);
    },
  }
}
</script>

<style scoped lang="less">
  #operationStatic {
    width: 100%;
    height: 100%;
    position: relative;
    & .info{
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      &>div{
        width: 50%;
        display: flex;
        // margin-right: 74px;
        &>div{
          margin-right: 14px;
          &>p{
            color: #B5EFFE;
            font-size: 14px;
            text-align: right;
          }
        }
        &>p{
          color: #B5EFFE;
          font-size: 28px;
        }
      }
    }
    & .static{
      width: 100%;
      height: 190px;
      display: flex;
      align-items: center;
      &>div{
        height: 100%;
        width: 100%;
      }
    }
    & .notice{
      width:323px;
      height:47px;
      background:rgba(40,51,84,1);
      border-radius:10px;
      margin: 8px auto;
      padding: 0 12px 0 46px;
      box-sizing: border-box;
      position: relative;
      &>i{
        position: absolute;
        top: 14px;
        left: 27px;
        font-size: 20px;
        color: #89FFE7;
      }
      &>div{
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      & .notice-p{
        width: 264px;
        font-size:16px;
        color: #B5EFFE;
        padding-left: 20px;
        box-sizing: border-box; 
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        height: 47px;
        line-height: 47px;
      }
    }
  }
</style>
<style>

</style>

