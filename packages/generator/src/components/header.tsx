import { defineComponent } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'Header',
  setup() {
    return {
      message: 10,
      username: 'dmoosocool',
      collapse: false,
    };
  },
  render() {
    return (
      <>
        <div class="header">
          <div
            class="collapse-btn"
            onClick={() => console.log('collapseChange')}
          >
            {this.collapse ? (
              <el-icon size={22} color="#fff">
                <Fold />
              </el-icon>
            ) : (
              <el-icon size={22} color="#fff">
                <Expand />
              </el-icon>
            )}
          </div>
          <div class="logo">后台管理系统</div>
        </div>
      </>
    );
  },
});
