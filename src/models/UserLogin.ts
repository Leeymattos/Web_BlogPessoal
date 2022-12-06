interface UserLogin {
  id: string;
  email: string;
  password: string;
  token?: string | null
}

export default UserLogin;