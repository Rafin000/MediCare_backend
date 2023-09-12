import { IRole, PrismaRoleModel } from "../../types";
import { Transformer } from "../transformer";
import userResource from "../user.transformer/user.resource";


class RoleResource implements Transformer {

  transform(role: PrismaRoleModel): IRole {
    return {
      id: role.id,
      name: role.name,
      description: role.description,
      users: role.users ? role.users?.map(user_role => userResource.transform(user_role.user)) : null,
    }
  }
}

const roleResource = new RoleResource()

export default roleResource;