import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCartaDto {
  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsString()
  @IsNotEmpty()
  enderecoDestinatario: string;

  @IsString()
  @IsNotEmpty()
  nomeDestinatario: string;

  @IsUUID()
  remetenteId: string;

  @IsUUID()
  pomboId: string;
}
