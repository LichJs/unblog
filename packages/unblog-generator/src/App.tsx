import { defineComponent, reactive } from 'vue';
import { getLabels, BlogLabels } from '@/api/labels';

const useGetLabels = async () => {
  const labels = reactive<BlogLabels>([]);
  const result = await getLabels();
  console.log(result);
};

export default defineComponent({
  setup() {
    useGetLabels();
  },

  render() {
    return (
      <>
        <h1>get labels</h1>
        <ul>
          <li></li>
        </ul>
      </>
    );
  },
});
