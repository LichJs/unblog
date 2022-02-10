import { defineComponent } from 'vue';
import { MDXProvider } from '@mdx-js/vue';
import Hello from '@/components/hello.mdx';

// async function renderMdx(component) {
//   return String(await compile(component, { jsx: true }));
// }

export default defineComponent({
  render() {
    return (
      <>
        <MDXProvider>
          <Hello></Hello>
        </MDXProvider>
      </>
    );
  },
});
