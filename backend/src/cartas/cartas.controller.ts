import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CartasService } from './cartas.service';
import { CreateCartaDto } from './dto/create-carta.dto';
import { UpdateCartaStatusDto } from './dto/update-carta-status.dto';

@Controller('cartas')
export class CartasController {
  constructor(private readonly cartasService: CartasService) {}

  @Post()
  create(@Body() createCartaDto: CreateCartaDto) {
    return this.cartasService.create(createCartaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartasService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() updateCartaStatusDto: UpdateCartaStatusDto,
  ) {
    return this.cartasService.updateStatus(id, updateCartaStatusDto);
  }

  findAll() {
    return this.cartasService.findAll();
  }

  update(id: number) {
    return this.cartasService.update(id);
  }

  remove(id: number) {
    return this.cartasService.remove(id);
  }
}
