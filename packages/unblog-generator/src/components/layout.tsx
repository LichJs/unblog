import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout',
  render() {
    return (
      <el-row>
        <el-col span={12} push={6}>
          <div>{this.$slots.default?.()}</div>
        </el-col>
      </el-row>
    );
  },
});
