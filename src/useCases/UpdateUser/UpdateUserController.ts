import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCaseDTO";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handleUpdate(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    try {
      await this.updateUserUseCase.execute({
        name,
        email,
      });

      return response.status(200).json({ message: "User Updated" });
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error" });
    }
  }
}
