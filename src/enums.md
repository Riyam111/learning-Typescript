📘 Enums in TypeScript – Important Concepts
# 1️⃣ What is an Enum?

Enum = group of named constants

Used when values are fixed and limited

# 2️⃣ Numeric Enum (Default)
enum Status {
  Pending,
  Success,
  Failed
}


Values:

Pending = 0
Success = 1
Failed = 2

# 3️⃣ Custom Numeric Enum
enum Status {
  Pending = 1,
  Success = 2,
  Failed = 3
}

# 4️⃣ String Enum ⭐ (Most used)
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}


✔ Safer
✔ More readable
✔ Preferred in real projects

# 5️⃣ Using Enum
let userRole: Role = Role.Admin;

# 6️⃣ Enum in Functions
function checkStatus(status: Status): void {
  if (status === Status.Success) {
    console.log("Done");
  }
}

# 7️⃣ Enum in Objects
type User = {
  name: string;
  role: Role;
};

const u1: User = {
  name: "Riya",
  role: Role.User
};
