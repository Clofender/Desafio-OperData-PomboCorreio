import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartasService } from './cartas.service';
import { CreateCartaDto } from './dto/create-carta.dto';
import { UpdateCartaDto } from './dto/update-carta.dto';

@Controller('cartas')
export class CartasController {
  constructor(private readonly cartasService: CartasService) {}

  @Post()
  create(@Body() createCartaDto: CreateCartaDto) {
    return this.cartasService.create(createCartaDto);
  }

  @Get()
  findAll() {
    return this.cartasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartaDto: UpdateCartaDto) {
    return this.cartasService.update(+id, updateCartaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartasService.remove(+id);
  }
}
