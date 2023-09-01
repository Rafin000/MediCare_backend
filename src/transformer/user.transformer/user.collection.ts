import { users } from "@prisma/client";
import { IUser } from "../../types";
import { CollectionTransformer, Transformer } from "../transformer";
import userResource from "./user.resource";

 class UserCollection implements CollectionTransformer{
  transformCollection(requestedData : users[]): IUser[] {
    return requestedData.map((user) =>
    userResource.transform(user)
  );
  }
}

const userCollection = new UserCollection

export default userCollection