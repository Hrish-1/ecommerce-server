import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jack Jones',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Jill Jones',
    email: 'jill@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users