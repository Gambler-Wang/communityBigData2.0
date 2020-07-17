//公共接口
export const login = '/xhuachina-auth/token' //登录
export const getToken = '/xhuachina-user/changeDefaultCommunityCode' //根据社区账号获取token信息
export const communityCodeSelect = '/xhuachina-user/queryCommunityCodes' //获取下拉社区


//业务接口
export const HouseDataAPI = '/xhuachina-scm/scm/bigdata/houseData' //楼栋、房产、住户人员相关接
export const DeptUserDataAPI = '/xhuachina-ppm/ppm/bigdata/deptUserData' //物业员工部门接口
export const SchedulingDataAPI = '/xhuachina-ppm/ppm/bigdata/schedulingData' //排班出勤接口
export const CarInOutDataAPI ='/xhuachina-user/user/bigbata/appRegistData' // 车辆进出统计接口
export const SpreadDataAPI ='/xhuachina-scs/scs/bigdata/spreadData'// 社区运营统计接口
export const ComplaintsDataAPI ='/xhuachina-scs/scs/bigdata/complaint/list'// 投诉表扬统计接口
export const PersonInOutDataAPI ='/xhuachina-ppm/ppm/bigdata/personInOutData'// 人员进出统计
export const LoadRepairTotalAPI ='/xhuachina-scs/scs/bigdata/repair/list'// 报修统计接口
export const LoadInsTotalAPI ='/xhkj/majorproperty/dataTotal/loadInsTotal'// 巡检统计接口
export const LoadEquipTotalAPI ='/xhuachina-ppm/ppm/bigdata/equipList'// 设备统计接口
export const videoShowAPI = '/xhuachina-ppm/ppm/bigdata/video' // 置顶视频展示

