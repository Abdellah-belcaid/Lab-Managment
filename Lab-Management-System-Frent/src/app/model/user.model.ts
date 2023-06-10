import { Role } from './role.enum';

export class User {
  id!: number;
  name!: string;
  email!: string;
  username!: string;
  password!: string;
  createTime!: Date;
  role!: Role;
  token?: string;
}
