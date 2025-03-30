import NavBar from '@/components/NavBar.vue'

// 定义插件安装方法
const install = (app: any) => {
  app.component('NavBar', NavBar) // 全局注册组件
}

// 支持按需导入
export { NavBar }

// 默认导出插件
export default {
  install
}
