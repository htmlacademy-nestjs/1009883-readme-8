import { HttpService } from '@nestjs/axios';
import 'multer';
import {
  Body,
  Controller,
  FileTypeValidator,
  HttpStatus,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Req,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';

import {
  AuthenticationResponseMessage,
  LoggedUserRdo,
  LoginUserDto,
} from '@project/authentication';

import { ApplicationServiceURL } from './app.config';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('users')
@Controller('users')
@UseFilters(AxiosExceptionFilter)
export class UsersController {
  constructor(private readonly httpService: HttpService) {}

  @UseInterceptors(FileInterceptor('avatar'))
  @Post('register')
  public async register(
    @Body() dto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 500000 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
        ],
        fileIsRequired: false,
      })
    )
    avatar?: Express.Multer.File
  ) {
    if (avatar) {
      const formData = new FormData();

      formData.append(
        'file',
        new Blob([avatar.buffer], { type: avatar.mimetype }),
        avatar.originalname
      );

      const { data } = await this.httpService.axiosRef.post(
        `${ApplicationServiceURL.Files}/upload`,
        formData
      );

      dto.avatar = data.id;
    }

    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/register`,
      dto
    );
    return data;
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: AuthenticationResponseMessage.LoggedSuccess,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: AuthenticationResponseMessage.LoggedError,
  })
  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/login`,
      loginUserDto
    );
    return data;
  }

  @Post('refresh')
  public async refreshToken(@Req() req: Request) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Users}/refresh`,
      null,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );

    return data;
  }
}
