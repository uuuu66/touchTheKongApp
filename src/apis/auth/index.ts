import { plainToInstance } from 'class-transformer';
import httpRequest from '@src/networks/httpRequest';
import { SignInRequestDto, SignInResponseDto } from './dtos';

const url = '/authentication';
export const signIn = async (
  body: SignInRequestDto,
): Promise<SignInResponseDto> => {
  const param = 'sign-in';

  const { data } = await httpRequest({ method: 'post', url, param, body });
  const { row } = data;
  return row;
};

export const checkToken = async () => {};
