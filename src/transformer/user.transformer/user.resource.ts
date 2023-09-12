import { IUser, PrismaUserModel } from "../../types";
import { Transformer } from "../transformer";


class UserResource implements Transformer {

  
  transform(user: PrismaUserModel): IUser {
    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      username: user.username,
      dob: user.dob,
      phone_number: user.phone_number,
      user_type: user.user_type,
      roles: !! user?.roles ? user.roles?.map(user_role => user_role.role).map(role=>({id: role.id, name:role.name,description:role.description})): null
    }
  }
}

const userResource = new UserResource()

export default userResource