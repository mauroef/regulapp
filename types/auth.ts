export enum Status {
  PENDING = 'Pending',
  RESOLVED = 'Resolved',
}

export interface User {
  id: string
  email: string
  name: string
  image: string
  signOut: Function
}
