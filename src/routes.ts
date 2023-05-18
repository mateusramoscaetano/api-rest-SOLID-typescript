import { Router, request } from "express";
import { createUserController } from "./useCases/CreateUser";
import { updateUserController } from "./useCases/UpdateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { getUsersController } from "./useCases/GetUsers";

const router = Router();

router.get("/users", (request, response) => {
  return getUsersController.handle(request, response);
});
router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});
router.put("/users", (request, response) => {
  return updateUserController.handleUpdate(request, response);
});
router.delete("/users/:id", (request, response) => {
  return deleteUserController.handle(request, response);
});

export { router };
