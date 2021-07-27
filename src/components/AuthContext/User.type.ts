export type Role = 'CLIENT' | 'ADMIN' 

export interface authData {
  token: string
  username: string
  password: string
  email: string
  roles: Role[]
  created_at: string
}