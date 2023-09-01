import { IRole } from "../types/role.type"
import { Transformer } from "./transformer";

export class roleTransformer implements Transformer {
  static getTransformer() {
    return new roleTransformer();
  }

  transform(role: any): IRole {
    return {
      id: role.id,
      name: role.roleName,
      description: role.description,
    }
  }
}
