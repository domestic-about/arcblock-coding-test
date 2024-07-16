import { createContext } from 'react';

export type FormProps = { name: string; email: string; mobile: string };

export type UserDataProps = FormProps & { _id: number };
type ProfileType = {
  isEdit: boolean;
  editForm: FormProps;
  setEditForm: (value: FormProps) => void;
  getUserData: () => void;
  userList: UserDataProps[] | [];
};

export const ProfileContext = createContext<ProfileType>({
  isEdit: false,
  editForm: { name: '', email: '', mobile: '' },
  setEditForm: () => {},
  getUserData: () => {},
  userList: [],
});

export const isValidEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
};
export const isValidMobile = (email: string) => {
  const pattern = /^\+?[1-9]\d{1,14}$/;
  return pattern.test(email);
};
export const isValidName = (email: string) => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return pattern.test(email);
};
