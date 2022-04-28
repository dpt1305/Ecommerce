import { PartialType } from '@nestjs/swagger';
import { CreateFlashsaleDto } from './create-flashsale.dto';

export class UpdateFlashsaleDto extends PartialType(CreateFlashsaleDto) {}
