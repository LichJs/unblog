import { request } from '../utils/request';

// import from .env file
const repo = import.meta.env.VITE_GITHUB_REPO;

console.log(import.meta.env);

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
  return data.map(label => label.name);
}

export async function createLabel(params: BlogLabelForm) {
  console.log('create label.....');
  console.log(params);
  const result = await request.post(`/repos/${repo}/labels`, params);
  console.log('create label result: ');
  console.log(result);
  return result;
}
