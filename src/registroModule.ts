// src/registro/registro.module.ts

import { Module } from '@nestjs/common';
import { RegistroService } from './services/registroService';
import { RegistroController } from './app.controller';


@Module({
  providers: [RegistroService],
  controllers: [RegistroController],
  exports: [RegistroService], // Se precisar exportar o serviço para outros módulos
})
export class RegistroModule {}
