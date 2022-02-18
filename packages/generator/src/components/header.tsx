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
          <div class="header-right">
            <div class="header-user-con">
              <div class="btn-bell">
                <el-tooltip
                  effect="dark"
                  content={
                    this.message ? `有${this.message}条未读消息` : `消息中心`
                  }
                  placement="bottom"
                >
                  <router-link to="/tabs">
                    <i class="el-icon-bell"></i>
                  </router-link>
                </el-tooltip>
                {this.message > 0 && <span class="btn-bell-badge"></span>}
              </div>
              <div class="user-avatar">
                <img src="/assets/img/icon.png" />
              </div>
              <el-dropdown
                class="user-name"
                trigger="click"
                onCommand="handleCommand"
                v-slots={{
                  dropdown: () => (
                    <el-dropdown-menu>
                      <a
                        href="https://github.com/lin-xin/vue-manage-system"
                        target="_blank"
                      >
                        <el-dropdown-item>项目仓库</el-dropdown-item>
                      </a>
                      <el-dropdown-item command="user">
                        个人中心
                      </el-dropdown-item>
                      <el-dropdown-item divided command="logout">
                        退出登录
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  ),
                }}
              >
                <span class="el-dropdown-link">
                  {this.username}
                  <i class="el-icon-caret-bottom"></i>
                </span>
              </el-dropdown>
            </div>
          </div>
        </div>
      </>
    );
  },
});
