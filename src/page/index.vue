<template>
  <section id="index">
    <div class="header">
      <HeaderLogin />
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
          <SchedulingCard :schedulingData="schedulingData" :isNoScheduling="isNoScheduling" />
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
        videoUrl:'https://flvopen.ys7.com:9188/openlive/2509401a1e3948aeb5bb6afc65f7b134.flv',
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
        schedulingData:[],
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
          "openRecordData":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          "ownerOpenRecordData":0,
          "familyOpenRecordData":0,
          "visitorOpenRecordData":0
        },
        loadRepairTotal:{
          commonDeal: 2,
          commonTotal: 3,
          homeDeal: 2,
          homeTotal: 4,
          monthDealNumber: 3,
          report: 0,
          reportTotal: 0,
          todayNewNumber: 7,
          repairRecordList:[
            {
              recordTime: "04-16 13:02:00",
              userName: "姚丽玲", 
              repairType: "公共区域"
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
        }

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
      this.getHouseDataAPI();
      this.getDeptUserDataAPI();
      this.getSchedulingDataAPI();
      this.getCarInOutDataAPI();
      this.getSpreadDataAPI();
      this.getComplaintsDataAPI();
      this.getPersonInOutDataAPI();
      this.getLoadRepairTotalAPI();
      this.getLoadInsTotalAPI();
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
          if (res.status === 0) {
            this.basicCardData=res.datas;
          }else{
            this.$message.error('数据丢失!');
          }
        })

      },
      //物业员工部门接口
      getDeptUserDataAPI(){
        this.request(this.api.DeptUserDataAPI, {
          
        }, 'get').then(res => {
          if (res.status === 0) {
            this.departUserData=res.datas;
          }else{
            this.$message.error('数据丢失!');
          }
        })
      },
      //排班出勤接口
      getSchedulingDataAPI(){
        this.request(this.api.SchedulingDataAPI, {}, 'get').then(res => {
          if (res.status === 0) {
            this.schedulingData=res.datas;
          }else{
            this.$message(res.msg);
            this.schedulingData=[];
            this.isNoScheduling=true;
          }
        })
      },
      // 获取车辆进出数据的接口
      getCarInOutDataAPI(){
        this.request(this.api.CarInOutDataAPI, {}, 'get').then(res => {
          if (res.status === 0) {
            this.carInOutData=res.datas;
          }else{
            this.$message.error('数据丢失!');
          }
        })
      },
      // 社区运营统计接口
      getSpreadDataAPI(){
        this.request(this.api.SpreadDataAPI, {}, 'get').then(res => {
          if (res.status === 0) {
            this.spreadData=res.datas;
          }else{
            this.$message.error('数据丢失!');
          }
        })
      },
      // 投诉表扬统计接口
      getComplaintsDataAPI(){
        this.request(this.api.ComplaintsDataAPI, {}, 'get').then(res => {
          if (res.status === 0) {
            this.complaintsData=res.datas;
          }else{
            this.$message.error('数据丢失!');
          }
        })
      },
      // 人员进出统计接口
      getPersonInOutDataAPI(){
        this.request(this.api.PersonInOutDataAPI, {}, 'get').then(res => {
          if (res.status === 0) {
            this.personInOutData=res.datas;
          }else{
            this.$message.error('数据丢失!');
          }
        })
      },
      // 报修统计接口
      getLoadRepairTotalAPI(){
        this.request(this.api.LoadRepairTotalAPI, {}, 'get').then(res => {
          if (res.state) {
            this.loadRepairTotal=res.scsRepairTotal;
          }else{
            this.$message.error('数据丢失!');
          }
        })
      },
      // 巡检统计接口
      getLoadInsTotalAPI(){
        this.request(this.api.LoadInsTotalAPI, {}, 'get').then(res => {
          if (res.state) {
            this.loadInsTotal=res.planTotal;
          }else{
            this.$message.error('数据丢失!');
          }
        })
      },
      // 设备统计接口
      getLoadEquipTotalAPI(){
        this.request(this.api.LoadEquipTotalAPI, {}, 'get').then(res => {
          if (res.state) {
            this.loadEquipTotal=res.ppmEquipTotal;
          }else{
            this.$message.error('数据丢失!');
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
