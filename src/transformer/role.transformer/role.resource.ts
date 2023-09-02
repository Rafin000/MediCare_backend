import { IRole } from "../../types";
import { Transformer } from "../transformer";


class RoleResource implements Transformer {

  transform(role: any): IRole {
    return {
      id: role.id,
      name: role.roleName,
      description: role.description,
    }
  }
}

const roleResource = new RoleResource()

export default roleResource;