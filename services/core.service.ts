import axios from 'axios';

import { NEXT_API_URL, generateHeaders } from 'config';
import { ModuleConfig } from 'models';

export const getModuleConfig = async (): Promise<ModuleConfig> => {
  const { status, data } = await axios.get(
    `${NEXT_API_URL}/modules`,
    generateHeaders()
  );

  if (status !== 200) {
    throw new Error(data.message);
  }

  return new Promise<ModuleConfig>(resolve => resolve(data));
};
