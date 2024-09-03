import { Group } from '@/enums';

export type ContactInfo = {
  name: string;
  phone: string;
  group: (typeof Group)[keyof typeof Group];
  record: string;
};
