import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const data = reactive({ count: 0 });

    return (
      <>
        <button onClick={() => (data.count = data.count + 1)}>
          Counter: {data.count}
        </button>
      </>
    );
  },
});
