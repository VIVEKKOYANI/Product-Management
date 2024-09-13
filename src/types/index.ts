export interface APIResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export type Image = {
  _id: string;
  localPath: string;
  url: string;
};

export type User = {
  _v: number;
  _id: string;
  avatar: Image;
  createdAt: string;
  email: string;
  isEmailVerified: boolean;
  role: "ADMIN" | "USER";
  username: string;
  updatedAt: string;
};

export type Category = {
  _v: number;
  _id: string;
  updatedAt: string;
  createdAt: string;
  owner: string;
  name: string;
};