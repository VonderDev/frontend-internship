export type Role = 'CLIENT' | 'ADMIN' 

export interface authData {
  id: string
  username: string
  password: string
  email: string
  roles: Role[]
  created_at: string
}