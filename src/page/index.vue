<template>
  <section id="index">
    <div class="header">
      <HeaderLogin @_changeCommunity="_changeCommunity" />
    </div>
    <div class="row row-1">
      <div class="basic-card-box">
        <BasicCard :basicCardData="basicCardData" />
      </div>
      <div>
        <div class="department-static-box">
          <DepartmentCard :departUserData="departUserData" />
        </div>
        <div class="scheduling-static-box">
          <SchedulingCard :schedulData="schedulData" :attendanceList="attendanceList" :isNoScheduling="isNoScheduling" />
        </div>
      </div>
    </div>
    <div class="row row-2">
      <div>
        <PersonInAndOutRecord :personInOutData="personInOutData" />
      </div>
      <div>
        <VideoCard :videoUrl="videoUrl" />
      </div>
      <div>
        <CarInAndOutRecord :carInOutData="carInOutData" />
      </div>
    </div>
    <div class="row row-3">
      <div>
        <CheckStatic :loadInsTotal="loadInsTotal"/>
      </div>
      <div>
        <RepairStatic :loadRepairTotal="loadRepairTotal" />
      </div>
      <div>
        <DeviceStatic :loadEquipTotal="loadEquipTotal" />
      </div>
      <div>
        <PraiseStatic :complaintsData="complaintsData" />
      </div>
      <div>
        <OperationStatic :spreadData="spreadData" />
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderLogin from '../components/headerLogin.vue';
  import BasicCard from '../components/basicCard.vue';
  import DepartmentCard from '../components/departmentCard.vue';
  import SchedulingCard from '../components/schedulingCard.vue';
  import PersonInAndOutRecord from '../components/personInAndOutRecord.vue';
  import CarInAndOutRecord from '../components/carInAndOutRecord.vue';
  import VideoCard from '../components/videoCard.vue';
  import CheckStatic from '../components/checkStatic.vue';
  import RepairStatic from '../components/repairStatic.vue';
  import DeviceStatic from '../components/deviceStatic.vue';
  import PraiseStatic from '../components/praiseStatic.vue';
  import OperationStatic from '../components/operationStatic.vue';
  export default {
    name: 'index',
    components: {
      HeaderLogin,
      BasicCard,
      DepartmentCard,
      SchedulingCard,
      PersonInAndOutRecord,
      CarInAndOutRecord,
      VideoCard,
      CheckStatic,
      RepairStatic,
      DeviceStatic,
      PraiseStatic,
      OperationStatic
    },
    data() {
      return {
        videoUrl:'',
        basicCardData:{
          pavilionData:1,
          newPavilionData:0,
          houseData:0,
          newhouseData:0,
          moveInto:0,
          newMoveInto:0,
          newMoveIn:0,
          moveIn:0,
          newMoveOut:0,
          moveOut:0,
          ownerData:0,
          newOwnerData:0,
          familyData:0,
          newFamilyData:0,
          visitorData:0,
          newVisitorData:0,
          tenant:0,
          newTenant:0,
          business:0,
          newBusiness:0
        },
        departUserData:{
          deptsData: 0,
          newUserData: 0,
          workerData: 0,
          deptUserList:[]
        },
        schedulData:[],
        attendanceList:[],
        isNoScheduling:false,
        carInOutData:{
          carInData: [],
          carOutData: [],
          moonCarInData: 0,
          moonCarOutData: 0,
          otherCarInData: 0,
          otherCarOutData: 0,
          tempCarInData: 0,
          tempCarrOutData: 0,

        },
        spreadData:{
          bbsActivityData: 0,
          bbsBusinessData: 0,
          bbsPostData: 0,
          newsData: 0,
          noticeData: [],
        },
        complaintsData:{
          commentType: ["保洁", "安全", "绿化", "行政", "工程", "其他"],
          complaint: 0,
          complaintCommentTypeData: [],
          praiseCommentTypeData: [],
          praiseData: 0,
        },
        personInOutData:{
          "ownerOpenRecord": 0,
          "ownerOpenRecordData": [],
          "familyOpenRecord": 0,
          "familyOpenRecordData": [],
          "tenantOpenRecord": 0,
          "tenantOpenRecordData": [],
          "visitorOpenRecord": 0,
          "visitorOpenRecordData": [],
        },
        loadRepairTotal:{
          monthDealBS: 1,
          monthDealGGBX: 6,
          monthDealJTBX: 68,
          monthTotal: 99,
          monthTotalBS: 1,
          monthTotalGGBX: 7,
          monthTotalJTBX: 91,
          repairList:[
            {
              startName: "刘颖",
              startTime: "07-13 10:01:27",
              type: 1,
              typeName: "家庭区域报修"
            }
          ]
        },
        loadInsTotal:{
          dateAllSpot: 5,
          dateCheckSpot: 2,
          dateUncheckSpot: 3,
          lineTotal: 8,
          planTotal: 26,
          spotAbnormal: 2,
          spotAll: 18,
          spotNormal: 16,
          insRecordList:[
            {
              recordTime: "04-16 13:02:00", 
              userName: "姚丽玲1", 
              placeName: "A2-5-2-13-水电井"
            },
            {
              recordTime: "04-16 13:02:00", 
              userName: "姚丽玲2", 
              placeName: "A2-5-2-13-水电井"
            },
            {
              recordTime: "04-16 13:02:00", 
              userName: "姚丽玲3", 
              placeName: "A2-5-2-13-水电井"
            }
          ]
        },
        loadEquipTotal:{
          equipPlanTotal: 0,
          equipTotal: 278,
          equipDataXYList:[
            {nameX: "供配电系统", valueY: 37}
          ]
        },

        // 视频部分
        accessToken:''

      }
    },
    //监听路由变化选中
    watch: {
      
    },
    computed: {
      onRoutes(name) {
        return this.$route.name;
      }
    },

    created() {
      this.getVideoShowAPI();
      // this.getToken();
      this.getHouseDataAPI();
      this.getDeptUserDataAPI();
      this.getSchedulingDataAPI();
      this.getCarInOutDataAPI();
      this.getSpreadDataAPI();
      this.getComplaintsDataAPI();
      this.getPersonInOutDataAPI();
      this.getLoadRepairTotalAPI();
      // this.getLoadInsTotalAPI();
      this.getLoadEquipTotalAPI();
    },
    mounted(){
      let that = this;
      this.$nextTick(()=>{
        that.setScreenScalc();
      })
      window.onresize = () => {
        return (() => {
          that.setScreenScalc();
        })();
      };
    },
    methods: {
      _changeCommunity(){
        this.getVideoShowAPI();
        // this.getToken();
        this.getHouseDataAPI();
        this.getDeptUserDataAPI();
        this.getSchedulingDataAPI();
        this.getCarInOutDataAPI();
        this.getSpreadDataAPI();
        this.getComplaintsDataAPI();
        this.getPersonInOutDataAPI();
        this.getLoadRepairTotalAPI();
        // this.getLoadInsTotalAPI();
        this.getLoadEquipTotalAPI();
      },
      // getToken(){
      //   var that =this;
      //   $.ajax({
      //       type: "post",
      //       url: "https://open.ys7.com/api/lapp/token/get",
      //       data: {appKey: 'b9bec1fbaee547ccbca1f5100f942f07', appSecret: 'b6ad64d929cd10f45dfe0471751722da'},
      //       dataType: "json",
      //       success: function (res) {
      //           if(res.code ==='200'){
      //             that.accessToken = res.data.accessToken;
      //             that.getVideoList();
      //           }

      //       }
      //   });
      // },
      // getVideoList() {
      //   var that =this;
      //   $.ajax({
      //       type: "post",
      //       url: "https://open.ys7.com/api/lapp/live/video/list",
      //       data: {accessToken: that.accessToken, pageSize:50},
      //       dataType: "json",
      //       success: function (res) {
      //         if(res.code ==='200'){
      //           for (let index = 0; index < res.data.length; index++) {
      //             const element = res.data[index];
      //             if(element.flvAddress){
      //               that.videoUrl=element.flvAddress;
      //               return;
      //             }
      //           }
      //         }
      //       }
      //   });
      // },
      
      //展示视频接口请求
      getVideoShowAPI(){
        this.request(this.api.videoShowAPI, {
          
        }, 'get').then(res => {
          if (res.code==200) {
            this.videoUrl=res.data.hls;
          }
        })
      },
      setScreenScalc(){
        // 默认1920*1080
        const screenObj=document.getElementById('index');
        let clientWidth=document.body.clientWidth;
        let clientHeight=document.body.clientHeight;
        let scaleX=clientWidth/1920;
        let scaleY=clientHeight/1080;
        screenObj.style.transform='scale('+scaleX+','+scaleY+')';
      },

      //楼栋、房产、住户人员相关接口
      getHouseDataAPI(){
        this.request(this.api.HouseDataAPI, {}, 'get').then(res => {
          if (res.code==200) {
            this.basicCardData=res.data;
          }
        })

      },
      //物业员工部门接口
      getDeptUserDataAPI(){
        this.request(this.api.DeptUserDataAPI, {
          
        }, 'get').then(res => {
          if (res.code==200) {
            this.departUserData=res.data;
          }
        })
      },
      //排班出勤接口
      getSchedulingDataAPI(){
        this.request(this.api.SchedulingDataAPI, {}, 'get').then(res => {
          if (res.code === 200) {
            this.schedulData=res.data.schedulData;
            this.attendanceList=res.data.attendanceList;
          }else{
            // this.$message(res.msg);
            this.schedulData=[];
            this.attendanceList=[];
            this.isNoScheduling=true;
          }
        })
      },
      // 获取车辆进出数据的接口
      getCarInOutDataAPI(){
        this.request(this.api.CarInOutDataAPI, {}, 'get').then(res => {
          if (res.code === 200) {
            this.carInOutData=res.data;
          }
        })
      },
      // 社区运营统计接口
      getSpreadDataAPI(){
        this.request(this.api.SpreadDataAPI, {}, 'get').then(res => {
          if (res.code === 200) {
            this.spreadData=res.data;
          }
        })
      },
      // 投诉表扬统计接口
      getComplaintsDataAPI(){
        this.request(this.api.ComplaintsDataAPI, {}, 'get').then(res => {
          if (res.code === 200) {
            this.complaintsData=res.data;
          }
        })
      },
      // 人员进出统计接口
      getPersonInOutDataAPI(){
        this.request(this.api.PersonInOutDataAPI, {}, 'get').then(res => {
          if (res.code === 200) {
            this.personInOutData=res.data;
          }
        })
      },
      // 报修统计接口
      getLoadRepairTotalAPI(){
        this.request(this.api.LoadRepairTotalAPI, {}, 'get').then(res => {
          if (res.code==200) {
            this.loadRepairTotal=res.data;
          }
        })
      },
      // 巡检统计接口
      getLoadInsTotalAPI(){
        this.request(this.api.LoadInsTotalAPI, {}, 'get').then(res => {
          if (res.state) {
            this.loadInsTotal=res.planTotal;
          }
        })
      },
      // 设备统计接口
      getLoadEquipTotalAPI(){
        this.request(this.api.LoadEquipTotalAPI, {}, 'get').then(res => {
          if (res.code==200) {
            this.loadEquipTotal=res.data;
          }
        })
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #index{
    width: 1920px;
    height: 1080px;
    transform:scale(1,1);
    transform-origin: left top;
    transition: all .2s linear;
    background: url('../assets/img/index-bg.jpg') no-repeat center center;
    background-size: cover;
    & .header{
      height: 60px;
      // background-color: red;
      margin-bottom: 12px;
    }
    & .row{
      padding: 0 12px;
      box-sizing: border-box;
      &.row-1{
        height: 210px;
        display: flex;
        justify-content: space-between;
        &>div{
          flex:1 1 50%;
          margin-right: 29px;
          &:nth-last-of-type(1){
            margin-right: 0;
            position: relative;
            &::before{
              content: '';
              position:absolute;
              left: -14px;
              top: 2px;
              width: 1px;
              height: 193px;
              background: url('../assets/img/desc-col.png') center center no-repeat;
            }
            &>div{
              height: 90px;
              margin-bottom: 15px;
            }
          }
        }
      }
      &.row-2{
        // background-color: green;
        margin-bottom: 14px;
        height: 462px;
        display: flex;
        &>div{
          margin-right: 12px;
          &:nth-of-type(1){
            flex:0 0 554px;
          }
          &:nth-of-type(2){
            flex:0 0 761px;
          }
          &:nth-of-type(3){
            flex:0 0 554px;
            margin-right: 0;
          }
        }
      }
      &.row-3{
        margin-bottom: 14px;
        height: 308px;
        display: flex;
        // background-color: blue;
        &>div{
          width: 370px;
          height: 308px;
          margin-right: 12px;
          &:nth-last-of-type(1){
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
