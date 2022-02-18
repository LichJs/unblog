import { ElLoading, ElNotification } from 'element-plus';
import { ref } from 'vue';

export interface LoadingParams<T> {
  queryData: Promise<T>;
  loadingText?: string;
  isLock?: boolean;
  errorText?: string;
  errorTitle?: string;
}

export async function useLoading<T>({
  queryData,
  loadingText = '正在加载中...',
  errorText = '数据加载失败',
  errorTitle = '温馨提示',
  isLock = true,
}: LoadingParams<T>) {
  // 先清楚所有的 Notification
  ElNotification.closeAll();
  // 调起 loading
  const loading = ElLoading.service({
    lock: isLock,
    text: loadingText,
  });

  const result = ref<T>();
  try {
    // 发起请求
    result.value = await queryData;
  } catch (e: any) {
    if (e.response.status === 401) {
      ElNotification({
        title: errorTitle,
        type: 'error',
        message: 'Github Token 有误.',
        duration: 0,
      });
    } else {
      ElNotification({
        title: errorTitle,
        type: 'error',
        message: errorText,
        duration: 0,
      });
    }

    // 如果请求失败，则提示错误信息
  } finally {
    // 关闭 loading
    loading.close();
  }

  return result;
}
