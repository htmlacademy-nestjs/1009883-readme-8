import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'The unique user ID',
    example: '6329c3d6a04ab1061c6425ea',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example:
      'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imtla3NAa2Vrcy5uZXQiLCJuYW1lIjoiS2VrcyIsImlkIjoiNjcxM2JmZGRiZTdiMTZjNDg5NTE2MTkwIiwiaWF0IjoxNzMwNzE0NjEzLCJleHAiOjE3MzA4ODc0MTN9.7Om33pMEEId1vu9lyP8TB4b1Ou8-XVjsDOXAAbhONwY',
  })
  @Expose()
  public accessToken: string;
}
