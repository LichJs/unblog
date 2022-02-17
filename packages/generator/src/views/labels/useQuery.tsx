import { useStore } from '@/stores/github';

export function useQuery() {
  const data = useStore();

  const onSubmit = (e: Event) => {
    e.preventDefault();
    console.log(data);
  };

  return {
    data,
    dom: () => (
      <>
        <el-alert
          gitblog:m="y-2"
          title="温馨提示"
          description="以下数据将存储在您的本地localStorage中"
          type="success"
          show-icon
        />
        <el-form label-position="left" label-width="120px">
          <el-form-item label="Github Repo">
            <el-input
              v-model={data.repo}
              clearable
              placeholder="dmoosocool/dmoosocool.github.io"
            ></el-input>
          </el-form-item>
          <el-form-item label="Github Token">
            <el-input
              v-model={data.token}
              clearable
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" onClick={(e: Event) => onSubmit(e)}>
              保存
            </el-button>
          </el-form-item>
        </el-form>
      </>
    ),
  };
}
