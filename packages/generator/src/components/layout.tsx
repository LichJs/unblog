import { defineComponent } from 'vue';
import Header from './header';
import SideBar from './sidebar';

export default defineComponent({
  name: 'Layout',
  render() {
    return (
      <el-container>
        <el-header padding="0 30px" height="auto">
          <Header />
        </el-header>
        <el-container>
          <el-aside width="200px">
            <SideBar />
          </el-aside>
          <el-main>{this.$slots.default?.()}</el-main>
        </el-container>
      </el-container>
    );
  },
});
