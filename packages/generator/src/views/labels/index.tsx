import { defineComponent, ref, onMounted } from 'vue';
import { BlogLabels, getLabels } from '@/api/labels';
import Layout from '@/components/layout';

import { useLoading } from '@/hooks/useLoading';
import { useLabels } from './useLabels';
import { useQuery } from './useQuery';

export default defineComponent({
  name: 'LabelsView',
  setup() {
    const labels = ref<BlogLabels>([]);
    const { data: queryData, dom: queryDom } = useQuery();

    const loadData = async () => {
      const queryData = getLabels();
      const result = await useLoading<BlogLabels>({ queryData });
      if (result.value !== undefined) {
        labels.value = result.value;
      }
    };

    onMounted(() => {
      loadData();
    });

    return {
      repos: import.meta.env.VITE_GITHUB_REPO,
      labels,
      loadData,
      queryData,
      queryDom,
    };
  },

  render() {
    return (
      <Layout>
        <h1>分类标签</h1>
        {this.queryDom()}
        <el-row>
          <el-col span={24}>{useLabels(this.labels)}</el-col>
        </el-row>
      </Layout>
    );
  },
});
