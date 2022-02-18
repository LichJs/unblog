import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export interface GithubData {
  repo: string;
  token: string;
}

export const useStore = defineStore('github', {
  state: () => {
    return {
      repo: useStorage('repo', String(import.meta.env.VITE_GITHUB_REPO) || ''),
      token: useStorage('token', String(import.meta.env.VITE_TOKEN) || ''),
    };
  },

  actions: {
    setRepo(repo: string) {
      this.repo = repo;
    },
    setToken(token: string) {
      this.token = token;
    },
    setGithub({ repo, token }: GithubData) {
      this.repo = repo;
      this.token = token;
    },
  },
});
