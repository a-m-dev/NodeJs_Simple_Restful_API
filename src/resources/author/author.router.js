import Router from "express";
import AuthorController from "./author.controllers";

const router = Router();

router
  .route("/")
  .get(AuthorController.getList)
  .post(AuthorController.createOne);

router
  .route("/:id")
  .get(AuthorController.getOne)
  .patch(AuthorController.updateOne);

export default router;
