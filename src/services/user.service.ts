import { db } from "../db.server";
import { itemDeletedAndAdded } from "../helpers/utility";
import { IUser } from "../models/user.model";
import UserRoleRepository from "../repository/user-role.repository";
import { userTransformer } from "../transformer";

export default class UserService {
  public async createUser(req: IUser): Promise<IUser> {
    try {
      const newUser = await db.users.create({
        data: {
          firstName: req.firstName,
          lastName: req.lastName,
          email: req.email,
          password: req.password,
          userName: req.userName,
          dob: req.dob,
          fathers_name: req.fathers_name,
          mothers_name: req.mothers_name,
          marital_status: req.marital_status,
          blood_group: req.blood_group,
          contact_number: req.contact_number,
          present_address: req.present_address,
          emergency_contact_number: req.emergency_contact_number,
          nid: req.nid,
          permanent_address: req.permanent_address,
          tin_number: req.tin_number,
          tshirt: req.tshirt,
          gender: req.gender,
          religion: req.religion,
          profile_picture: req.profile_picture,
        },
      });
      return userTransformer.getTransformer().transform(newUser);
    } catch (error) {
      throw error;
    }
  }

  public async getAllUsers(): Promise<IUser[]> {
    try {
      const allRawUsers = await db.users.findMany();
      const allUsers = allRawUsers.map((user) =>
        userTransformer.getTransformer().transform(user)
      );
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async getUser(id: string): Promise<IUser> {
    try {
      const user = await db.users.findUnique({
        where: {
          id: id,
        },
        include: {
          user_roles: {
            include: {
              role: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
      return userTransformer.getTransformer().transform(user);
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(id: string, payload: Partial<IUser>): Promise<IUser> {
    try {
      const { email, firstName, lastName } = payload;
      const user = await db.users.update({
        where: {
          id: id,
        },
        data: {
          ...(email ? { email } : {}),
          ...(firstName ? { firstName } : {}),
          ...(lastName ? { lastName } : {}),
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(id: string): Promise<IUser> {
    try {
      const user = await db.users.delete({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async getAllUserRoles(userId: string) {
    try {
      const userRoles = await db.user_role.findMany({
        where: {
          userId: userId,
        },
        select: {
          role: true,
        },
      });
      return userRoles;
    } catch (error) {
      return null;
    }
  }

  public async addOrRemoveUserRoles({ roleIds, userId }) {
    try {
      const userRoleRepository = new UserRoleRepository();
      const UserALLRoles = await userRoleRepository.findAllRolesByUserId(userId);
      const { itemsToBeAdded, itemsToBeDeleted } = itemDeletedAndAdded(
        UserALLRoles,
        roleIds
      );
      await userRoleRepository.bulkAdd(itemsToBeAdded, userId);
      await userRoleRepository.bulkDelete(itemsToBeDeleted, userId);
    } catch (error) {
      throw error;
    }
  }
}



// import { db } from "../db.server";
// import { itemDeletedAndAdded } from "../helpers/utility";
// import { IUser } from "../models/user.model";
// import userRoleRepository from "../repository/user-role.repository";
// import { userTransformer } from "../transformer";



// const createUser = async (req: IUser): Promise<IUser> => {

//   try {
//     const newUser = await db.users.create({
//       data: {
//         firstName: req.firstName,
//         lastName: req.lastName,
//         email: req.email,
//         password: req.password,
//         userName: req.userName,
//         dob: req.dob,
//         fathersName: req.fathersName,
//         mothersName: req.mothersName,
//         maritalStatus: req.maritalStatus,
//         bloodGroup: req.bloodGroup,
//         contactNumber: req.contactNumber,
//         presentAddress: req.presentAddress,
//         emergencyContactNumber: req.emergencyContactNumber,
//         nid: req.nid,
//         permanentAddress: req.permanentAddress,
//         tinNumber: req.tinNumber,
//         tshirt: req.tshirt,
//         gender: req.gender,
//         religion: req.religion,
//         profilepicture: req.profilepicture,
//       },
//     });
//     return Promise.resolve(userTransformer.getTransformer().transform(newUser))
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }


// const getAllUsers = async (): Promise<IUser[]> => {

//   try {
//     const allRawUsers = await db.users.findMany();
//     const allUsers = allRawUsers.map(user => userTransformer.getTransformer().transform(user))
//     return Promise.resolve(allUsers)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// const getUser = async (id: string): Promise<IUser> => {
//   try {
//     const user = await db.users.findUnique({
//       where: {
//         userId: id,

//       },
//       include: {
//         userRole: {
//           include: {
//             role: {
//               select: {
//                 roleId: true,
//                 roleName: true
//               }
//             }
//           }
//         }
//       }
//     })
//     const transformedUser = userTransformer.getTransformer().transform(user)
//     return Promise.resolve(transformedUser)
//   }
//   catch (error) {
//     return Promise.reject(error)
//   }
// }

// const updateUser = async (id: string, payload: Partial<IUser>): Promise<IUser> => {
//   try {
//     const { email, firstName, lastName } = payload;
//     const user = await db.users.update({
//       where: {
//         userId: id
//       },
//       data: {
//         ...(email ? { email } : {}),
//         ...(firstName ? { firstName } : {}),
//         ...(lastName ? { lastName } : {}),
//       },
//     })
//     return Promise.resolve(user)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }


// const deleteUser = async (id: string): Promise<IUser> => {
//   try {
//     const user = await db.users.delete({
//       where: {
//         userId: id
//       },
//     })
//     return Promise.resolve(user)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }
// const getAllUserRoles = async (userId: string) => {
//   try {
//     const userRoles = await db.user_role.findMany({
//       where: {
//         userId: userId,
//       },
//       select: {
//         role: true,
//       },
//     });
//     return userRoles
//   } catch (error) {
//     return null
//   }
// }

// const addOrRemoveUserRoles = async ({ roleIds, userId }) => {
//   try {
//     const UserALLRoles = await userRoleRepository.findAllRolesByUserId(userId)
//     const { itemsToBeAdded, itemsToBeDeleted } = itemDeletedAndAdded(UserALLRoles, roleIds)
//     await userRoleRepository.bulkAdd(itemsToBeAdded, userId)
//     await userRoleRepository.bulkDelete(itemsToBeDeleted, userId)

//   } catch (error) {
//     return error
//   }
// }
// const userService = {
//   createUser,
//   getAllUsers,
//   getUser,
//   updateUser,
//   deleteUser,
//   addOrRemoveUserRoles,
//   getAllUserRoles
// }

// export default userService