import { reactive, ref } from 'vue';
import { useStore, GithubData } from '@/stores/github';

export function useQuery() {
  const data = useStore();
  const formData = reactive<GithubData>({ repo: data.repo, token: data.token });
  const isEdit = ref<boolean>(true);
  const onSubmit = (e: Event) => {
    e.preventDefault();
    data.setGithub(formData);
    isEdit.value = true;
  };

  return {
    data,
    dom: () => (
      <>
        <el-alert
          gitblog:m="y-2"
          title="温馨提示"
          description="以下数据将存储在您的本地 localStorage 中"
          type="success"
          show-icon
        />
        <el-form label-position="left" label-width="120px">
          <el-form-item label="Github Repo">
            <el-input
              v-model={formData.repo}
              disabled={isEdit.value}
              clearable
              placeholder="dmoosocool/dmoosocool.github.io"
            ></el-input>
          </el-form-item>
          <el-form-item label="Github Token">
            <el-input
              v-model={formData.token}
              disabled={isEdit.value}
              clearable
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            ></el-input>
          </el-form-item>
          <el-form-item>
            {!isEdit.value ? (
              <el-button type="primary" onClick={(e: Event) => onSubmit(e)}>
                保存
              </el-button>
            ) : (
              <el-button type="primary" onClick={() => (isEdit.value = false)}>
                修改
              </el-button>
            )}
          </el-form-item>
        </el-form>
      </>
    ),
  };
}
