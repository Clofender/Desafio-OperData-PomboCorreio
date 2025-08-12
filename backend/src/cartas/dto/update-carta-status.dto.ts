import { IsIn, IsString } from 'class-validator';

export class UpdateCartaStatusDto {
  @IsString()
  @IsIn(['na fila', 'enviado', 'entregue'])
  status: string;
}
