import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCaseDTO";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handleUpdate(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    try {
      await this.updateUserUseCase.execute({
        id,
        name,
        email,
      });

      return response.status(200).json({ message: "User Updated" });
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error" });
    }
  }
}
