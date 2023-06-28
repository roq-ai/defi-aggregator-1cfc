import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NftInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  creator_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface NftGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  creator_id?: string;
}
