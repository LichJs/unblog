import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(0);
    return { count };
  },
  render(ctx: any) {
    return (
      <>
        <button onClick={() => (ctx.count = ctx.count + 1)}>
          this count is {ctx.count}{' '}
        </button>
      </>
    );
  },
});
