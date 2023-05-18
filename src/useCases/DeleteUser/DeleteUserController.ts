import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteUserUseCase.execute({ id });

      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
