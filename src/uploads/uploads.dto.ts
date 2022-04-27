import { ApiProperty } from '@nestjs/swagger';
// import { ApiProperty}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
export class AvatarUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  avatar: any;
}
export class ImagesUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  images: Express.Multer.File[];
}
