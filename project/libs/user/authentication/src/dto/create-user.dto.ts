import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsMongoId,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { AuthenticationValidateMessage } from '../authentication-module/authentication.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email',
    example: 'user@user.ru',
  })
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  @IsString()
  @Length(3, 50)
  public name: string;

  @ApiProperty({
    description: 'User avatar file id',
    example: '67865f49e29de26ecff7e44a',
    required: false,
  })
  @IsMongoId()
  @IsOptional()
  public avatar?: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  @IsString()
  @Length(6, 12)
  public password: string;
}
