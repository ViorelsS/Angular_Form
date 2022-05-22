export interface User {
  id?: number; //Id is provided by the API itself (incremental id)
  name: string;
  email: string;
  status: string;
  gender: string;
}
