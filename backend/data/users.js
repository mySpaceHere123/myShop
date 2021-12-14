import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ujjwal Raj",
    email: "ujjwal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Aniket Raj",
    email: "aniket@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
