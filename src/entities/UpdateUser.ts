export class UpdateUser {
  public readonly id: string;

  public name: string;
  public email: string;

  constructor(props: Omit<UpdateUser, "id">) {
    Object.assign(this, props);
  }
}
