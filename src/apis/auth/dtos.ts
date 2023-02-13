export interface CreateUserDto {
  nickName: string;

  phoneNumber: string;

  profileImageId: string;

  introduction: string;

  password: string;
}
export interface UpdateUserDto extends Omit<CreateUserDto, 'password'> {
  role?: number;
  feeling?: string;
}
