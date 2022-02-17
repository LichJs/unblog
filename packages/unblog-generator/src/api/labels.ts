import { request } from '../utils/request';

// import from .env file
const repo = import.meta.env.VITE_GITHUB_REPO;

export interface BlogLabelForm {
  description: string;
  color: string;
  name: string;
}
export interface BlogLabel extends BlogLabelForm {
  id: number;
  node_id: string;
  url: string;
  default: boolean;
}

export type BlogLabels = Array<BlogLabel>;

export async function getLabels() {
  const { data } = await request.get<BlogLabels>(`/repos/${repo}/labels`);
  return data;
}

export async function createLabel(params: BlogLabelForm) {
  const result = await request.post(`/repos/${repo}/labels`, params);
  return result;
}
