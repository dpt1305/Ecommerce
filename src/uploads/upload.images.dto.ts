import { ApiProperty } from '@nestjs/swagger';
export class ImagesUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  images: Express.Multer.File[];
}
