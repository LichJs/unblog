import { defineComponent, reactive } from 'vue';
import { useRoute, RouterView } from 'vue-router';

export default defineComponent({
  render() {
    return (
      <>
        <RouterView />
      </>
    );
  },
});
