export interface User {
  _id?: string; // NeDB 会自动生成 _id 字段
  name: string;
  mobile: string;
  email: string;
}
