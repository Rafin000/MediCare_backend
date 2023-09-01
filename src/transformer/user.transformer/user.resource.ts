import { IUser } from "../../types";
import { Transformer } from "../transformer";


 class UserResource implements Transformer {
 
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

const userResource = new UserResource()

export default userResource