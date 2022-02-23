import { defineComponent } from 'vue';
import { Menu } from '@element-plus/icons-vue';
export default defineComponent({
  name: 'SideBar',
  render() {
    return (
      <div class="sidebar">
        <el-menu
          class="sidebar-el-menu"
          default-active="onRoutes"
          collapse={false}
          background-color="#324157"
          text-color="#bfcbd9"
          active-text-color="#20a0ff"
          unique-opened
          router
        >
          <el-menu-item index="2" v-slots={{ title: () => '标题啊' }}>
            <el-icon>
              <Menu />
            </el-icon>
          </el-menu-item>
        </el-menu>
      </div>
    );
  },
});
