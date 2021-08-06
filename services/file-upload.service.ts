import axios from 'axios';

import { API_URL, generateHeaders } from 'config';
import { optimizeImages } from 'helpers';

export const imageUpload = async (files: any[], token: string, ref: string, refId: string): Promise<any> => {
  const formData: FormData = new FormData();
  const optimizedImages = await optimizeImages(files);

  optimizedImages.map(({ buffer, filename }) => {
    formData.append(
      'files',
      new Blob([buffer],{ type: 'image/jpg' }),
      filename
    );
  });

  formData.append('ref', ref);
  formData.append('refId', refId);
  formData.append('field', 'image');

  const { status, data } = await axios.post(
    `${API_URL}/upload`,
    formData,
    generateHeaders(token)
  );

  if (status !== 200) {
    throw new Error(data.message);
  }

  return new Promise<any>(resolve => resolve(data));
};
