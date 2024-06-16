import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RegistroController } from './app.controller';
import { RegistroModule } from './registroModule';

@Module({
  imports: [RegistroModule], // Importe o módulo de registros aqui
  controllers: [RegistroController],
  providers: [AppService],
})
export class AppModule {}
