const user= {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      { name: "name", title: "Full Name", type: "string" },
      { name: "email", title: "Email", type: "string", unique: true },
      { name: "password", title: "Password", type: "string" }, // Hashed password
    ],
  };
  export default user;
  