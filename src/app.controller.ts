import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { RegistroService } from './services/registroService';
import { Registro } from './models/registro';

@Controller('registros')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Get()
  findAll(): Registro[] {
    return this.registroService.findAll();
  }

  @Get('comparar')
  compararRevisoes(
    @Query('oldRev') oldRev: string,
    @Query('newRev') newRev: string,
  ): { old_rev: Registro; new_rev: Registro } {
    return this.registroService.findRevisions(oldRev, newRev);
  }
}
