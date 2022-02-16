import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/counter';

export default defineComponent({
  setup() {
    const store = useStore();
    const { counter, name } = storeToRefs(store);
    return {
      counter,
      name,
    };
  },
  render() {
    return (
      <>
        <h1>Hello {this.name} ~</h1>
        <el-button
          type="primary"
          class="plus-btn"
          onClick={() => (this.counter += 1)}
        >
          +
        </el-button>
        <el-button class="minus-btn" onClick={() => (this.counter -= 1)}>
          -
        </el-button>
      </>
    );
  },
});
