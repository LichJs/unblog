import { getLabels } from './api/labels';

async function bootstrap() {
  const labels = await getLabels();
  console.log(labels);
}

bootstrap();
