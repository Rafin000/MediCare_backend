import { IDepartment } from "../../types";
import { Transformer } from "../transformer";

class DepartmentResource implements Transformer {
  transform(department: any): IDepartment {
    return {
      id: department.id,
      name: department.name,
      description: department.description,
    };
  }
}

const departmentResource = new DepartmentResource();

export default departmentResource;
