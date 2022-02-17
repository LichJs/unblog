import { defineComponent } from 'vue';
import { config } from '@/utils/config';
export default defineComponent({
  setup() {
    console.log(config);
  },
  render() {
    return <>about</>;
  },
});
