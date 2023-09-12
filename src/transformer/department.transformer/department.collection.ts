import { Department } from "@prisma/client";
import { IDepartment, PrismaDepartmentModel } from "../../types";
import { CollectionTransformer } from "../transformer";
import departmentResource from "./department.resource";

class DepartmentCollection implements CollectionTransformer {
  transformCollection(requestedData: PrismaDepartmentModel[]): IDepartment[] {
    return requestedData.map((department) =>
      departmentResource.transform(department)
    );
  }
}

const departmentCollection = new DepartmentCollection();

export default departmentCollection;
