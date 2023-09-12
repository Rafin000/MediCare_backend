import { IDepartment, PrismaDepartmentModel } from "../../types";
import hospitalResource from "../hospital.transformer/hospital.resource";
import { Transformer } from "../transformer";

class DepartmentResource implements Transformer {
  transform(department: PrismaDepartmentModel): IDepartment {
    return {
      id: department.id,
      name: department.name,
      description: department.description,
      hospitals: department.hospitals ? department.hospitals?.map(hospital_department => hospitalResource.transform(hospital_department.hospital)) : null,
    };
  }
}

const departmentResource = new DepartmentResource();

export default departmentResource;
