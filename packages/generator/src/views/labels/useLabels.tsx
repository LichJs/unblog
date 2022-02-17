import type { BlogLabels } from '@/api/labels';

export function useLabels(data: BlogLabels) {
  return data.map(label => (
    <el-descriptions
      class="margin-top"
      column={3}
      size="large"
      border
      title="分类标签"
      v-slots={{
        extra: () => <el-button type="primary">添加博文</el-button>,
      }}
    >
      <el-descriptions-item label="标签名称">{label.name}</el-descriptions-item>

      <el-descriptions-item label="标签颜色">
        <el-tag
          size="small"
          color={`#${label.color}`}
          style={{ '--el-tag-text-color': '#fff' }}
        >
          #{label.color}
        </el-tag>
      </el-descriptions-item>

      <el-descriptions-item label="描述">
        {label.description}
      </el-descriptions-item>
    </el-descriptions>
  ));
}
