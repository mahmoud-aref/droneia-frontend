export class LoginModel {
  username: string = '';
  password: string = '';

  public constructor(init?: Partial<LoginModel>) {
    Object.assign(this, init);
  }
}
