import { IUser } from "../types/user.type";
import { Transformer } from "./transformer";

export class userTransformer implements Transformer {
  static getTransformer() {
    return new userTransformer();
  }

  transform(user: any): IUser {
    return {
      id: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      userName: user.userName,
      dob: user.dob,
      phone: user.phone,
      user_type: user.user_type,
      roles: user?.user_roles?.map(userRole => userRole?.role)?.map(role => ({ id: role.roleId, name: role.roleName }))
    }
  }
}
