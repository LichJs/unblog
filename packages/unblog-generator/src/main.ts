import { getLabels } from './api/getlabels';

async function bootstrap() {
  const labels = await getLabels();
  console.log(labels);
}

bootstrap();
