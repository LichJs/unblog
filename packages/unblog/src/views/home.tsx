import { defineComponent } from 'vue';
// import { MDXProvider } from '@mdx-js/vue';
import Hello from '@/components/hello.mdx';

export default defineComponent({
  render() {
    return (
      <>
        <div class="container">
          <Hello></Hello>
        </div>
      </>
    );
  },
});
