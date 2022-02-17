import { expect, test } from 'vitest';
import { getLabels, BlogLabelForm, createLabel } from '@/api/labels';

// test('getLabels', async () => {
//   const result = await getLabels();
//   expect(result).toEqual(['About', 'Published', 'Vue']);
// });

test('generateLabels', async () => {
  const labels = await getLabels();
  const initialLabels: BlogLabelForm[] = [
    {
      name: 'About',
      color: '#D4C5F9',
      description: 'Personal Introduction',
    },
    {
      name: 'Published',
      color: '#0E8A16',
      description: 'Published Articles',
    },
  ];

  initialLabels.filter(async label => {
    if (!labels.includes(label.name)) {
      console.log('needs to create label: ', label.name);
      const resp = await createLabel(label);
      console.log(resp);
    }
  });

  // console.log(needsInitialLabels);

  expect(1).toEqual(1);
});
