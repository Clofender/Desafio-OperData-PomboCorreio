import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreatePomboDto {
  @IsString()
  @IsNotEmpty()
  apelido: string;

  @IsUrl()
  @IsNotEmpty()
  fotoUrl: string;

  @IsNumber()
  velocidadeMedia: number;
}
