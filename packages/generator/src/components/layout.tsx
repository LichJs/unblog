import { defineComponent } from 'vue';
import GHeader from './header';
import SideBar from './sidebar';

export default defineComponent({
  name: 'Layout',
  render() {
    return (
      <el-container>
        <el-aside width="200px">
          <SideBar />
        </el-aside>
        <el-container>
          <el-header height="auto" style="--el-header-padding: 0;">
            <GHeader />
          </el-header>
          <el-main>{this.$slots.default?.()}</el-main>
        </el-container>
      </el-container>
    );
  },
});
