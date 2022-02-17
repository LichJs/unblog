import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useStore = defineStore('github', {
  state: () => {
    return {
      repo: useStorage('repo', ''),
      token: useStorage('token', ''),
    };
  },

  actions: {
    setRepo(repo: string) {
      this.repo = repo;
    },
    setToken(token: string) {
      this.token = token;
    },
  },
});
