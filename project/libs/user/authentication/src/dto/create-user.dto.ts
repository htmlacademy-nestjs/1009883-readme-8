import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email',
    example: 'user@user.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  public name: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
    required: false,
  })
  public avatar?: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;
}
