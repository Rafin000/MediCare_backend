import { Role } from "@prisma/client";
import { IRole, PrismaRoleModel } from "../../types";
import { CollectionTransformer } from "../transformer";
import roleResource from "./role.resource";

class RoleCollection implements CollectionTransformer {
  transformCollection(requestedData: PrismaRoleModel[]): IRole[] {
    return requestedData.map((role) =>
      roleResource.transform(role)
    );
  }
}

const roleCollection = new RoleCollection()

export default roleCollection;