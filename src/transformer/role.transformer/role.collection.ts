import { roles } from "@prisma/client";
import { IRole } from "../../types";
import { CollectionTransformer } from "../transformer";
import roleResource from "./role.resource";

class RoleCollection implements CollectionTransformer {
  transformCollection(requestedData: roles[]): IRole[] {
    return requestedData.map((role) =>
      roleResource.transform(role)
    );
  }
}

const roleCollection = new RoleCollection()

export default roleCollection;