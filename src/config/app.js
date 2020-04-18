//李骁 http://172.16.97.110:8899/lx
//王鹏 http://172.16.98.57
//开发环境 http://172.16.98.44:8899
//测试环境 http://172.16.97.110:8899
//正式环境 http://172.16.97.202:8899/xhuachina-auth
//沃云服务 http://39.104.16.221:8899
// const root = '/lx'
const root = '';
export const IS_MOCK = false
export const API_BASE_URL = IS_MOCK ? '/mock/' : (process.env.NODE_ENV === 'development' ? 'https://www.xhuachina.com:8443/smartcommunity' + root : 'https://www.xhuachina.com:8443/smartcommunity')
export const TOKEN_KEY = 'X-Token'
export const HISTORY_KEY = 'History-Key'
// 菜单和权限所属模块
export const CURRENT_MODEL = 6
