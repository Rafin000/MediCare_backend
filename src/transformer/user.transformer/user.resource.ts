import { IUser } from "../../types";
import { Transformer } from "../transformer";


class UserResource implements Transformer {

  transform(user: any): IUser {
    return {
      id: user.user_Id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      username: user.username,
      dob: user.dob,
      phone_number: user.phone_number,
      user_type: user.user_type,
      roles: user?.user_roles?.map(userRole => userRole?.role)?.map(role => ({ id: role.roleId, name: role.roleName }))
    }
  }
}

const userResource = new UserResource()

export default userResource