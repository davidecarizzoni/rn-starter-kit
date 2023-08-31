export enum UserRole {
  User = 'user',
}
export type User = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  role: UserRole;
};
