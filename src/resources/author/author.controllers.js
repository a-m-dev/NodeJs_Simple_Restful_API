import { model as AuthorModel } from "./author.model";
import ResponseGenerator from "../../utils/ResponseGenerator";

const AuthorController = {};

AuthorController.getList = async (req, res, next) => {
  try {
    const authorData = await AuthorModel.find({})
      .lean()
      .exec();

    const result = {
      count: authorData.length,
      authors: [...authorData]
    };

    res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        result
      })
    );
  } catch (e) {
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        message: e.message || "some thing happened",
        error: e
      })
    );
  }
};

// Mock related functions
AuthorController.getOne = async (req, res, next) => {
  return res.status(200).json(
    ResponseGenerator.success({
      code: 200,
      result: []
    })
  );
};

AuthorController.createOne = async (req, res, next) => {
  const { name, age, email } = req.body;

  try {
    const result = await AuthorModel.create({ name, age, email });
    return res.status(201).json(
      ResponseGenerator.success({
        code: 201,
        message: "created",
        result: result.toJSON()
      })
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        message: err.message,
        error: err
      })
    );
  }
};

AuthorController.updateOne = async (req, res, next) => {
  return res.status(200).json(
    ResponseGenerator.success({
      code: 200,
      result: []
    })
  );
};

export default AuthorController;
