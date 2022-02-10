import { createApp } from 'vue';
import App from './App';
import router, { setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  await router.isReady();
  app.mount('#app', true);

  if (import.meta.env.DEV) {
    window.__APP__ = app;
  }
}

bootstrap();
