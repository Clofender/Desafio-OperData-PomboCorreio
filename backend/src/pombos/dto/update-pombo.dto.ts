import { PartialType } from '@nestjs/mapped-types';
import { CreatePomboDto } from './create-pombo.dto';

export class UpdatePomboDto extends PartialType(CreatePomboDto) {}
