import { IUser } from "../types/user.type";
import { Transformer } from "./transformer";

export class userTransformer implements Transformer {
  static getTransformer() {
    return new userTransformer();
  }

  transform(user: any): IUser {
    return {
      id: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      userName: user.userName,
      dob: user.dob,
      fathers_name: user.fathersName,
      mothers_name: user.mothersName,
      marital_status: user.maritalStatus,
      blood_group: user.bloodGroup,
      contact_number: user.contactNumber,
      present_address: user.presentAddress,
      emergency_contact_number: user.emergencyContactNumber,
      nid: user.nid,
      permanent_address: user.permanentAddress,
      tin_number: user.tinNumber,
      tshirt: user.tshirt,
      gender: user.gender,
      religion: user.religion,
      profile_picture: user.profilepicture,
      roles: user?.userRole?.map(userRole => userRole?.role)?.map(role => ({ id: role.roleId, name: role.roleName }))
    }
  }
}


// export const userTransformer = (user: any): IUser => {
//   return {
//     userId: user.userId,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     email: user.email,
//     password: user.password,
//     userName: user.userName,
//     dob: user.dob,
//     fathersName: user.fathersName,
//     mothersName: user.mothersName,
//     maritalStatus: user.maritalStatus,
//     bloodGroup: user.bloodGroup,
//     contactNumber: user.contactNumber,
//     presentAddress: user.presentAddress,
//     emergencyContactNumber: user.emergencyContactNumber,
//     nid: user.nid,
//     permanentAddress: user.permanentAddress,
//     tinNumber: user.tinNumber,
//     tshirt: user.tshirt,
//     gender: user.gender,
//     religion: user.religion,
//     profilepicture: user.profilepicture,
//     roles: user?.userRole?.map(userRole => userRole?.role)?.map(role => ({ id: role.roleId, name: role.roleName }))
//   }
// }