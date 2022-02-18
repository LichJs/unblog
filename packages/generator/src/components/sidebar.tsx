import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
  render() {
    return (
      <div class="sidebar">
        <el-menu
          class="sidebar-el-menu"
          default-active="onRoutes"
          collapse="collapse"
          background-color="#324157"
          text-color="#bfcbd9"
          active-text-color="#20a0ff"
          unique-opened
          router
        ></el-menu>
      </div>
    );
  },
});
