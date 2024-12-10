import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @ApiProperty({
    description: 'The unique user ID',
    example: '6329c3d6a04ab1061c6425ea',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
    required: false,
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  @Expose()
  public name: string;
}
