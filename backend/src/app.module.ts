import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PombosModule } from './pombos/pombos.module';
import { ClientesModule } from './clientes/clientes.module';
import { CartasModule } from './cartas/cartas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PombosModule,
    ClientesModule,
    CartasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
