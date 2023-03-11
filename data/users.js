import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'vishalhjoshi3@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Vishal',
    email: 'vishalharij@ideyalabs.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Afnan',
    email: 'afnanf@ideyalabs.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
