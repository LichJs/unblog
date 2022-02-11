import { config } from '../utils/config';
import { request } from '../utils/request';
const { repo } = config;

export interface BlogLabel {
  id: number;
  node_id: string;
  url: string;
  color: string;
  default: boolean;
  description: string;
  name: string;
}

export type BlogLabels = Array<BlogLabel>;

export async function getLabels() {
  const { data } = await request.get<BlogLabels>(`/repos/${repo}/labels`);
  return data.map(label => label.name);
}
