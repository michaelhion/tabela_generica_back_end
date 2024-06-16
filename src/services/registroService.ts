import { Injectable } from '@nestjs/common';
import { Registro } from 'src/models/registro';

@Injectable()
export class RegistroService {
  private registros: Registro[] = [
    {
      revisao: '1',
      nome: 'John Doe',
      idEndereco: '123',
      banco_associado: 'Banco A',
      dataAlteracao: '2022-01-01',
    },
    {
      revisao: '2',
      nome: 'Jane Smith',
      idEndereco: '456',
      banco_associado: 'Banco B',
      dataAlteracao: '2022-01-02',
    },
    {
      revisao: '3',
      nome: 'Alice Johnson',
      idEndereco: '789',
      banco_associado: 'Banco C',
      dataAlteracao: '2022-01-03',
    },
    {
      revisao: '4',
      nome: 'Bob Brown',
      idEndereco: '321',
      banco_associado: 'Banco D',
      dataAlteracao: '2022-01-04',
    },
    {
      revisao: '5',
      nome: 'Charlie Davis',
      idEndereco: '654',
      banco_associado: 'Banco E',
      dataAlteracao: '2022-01-05',
    },
    {
      revisao: '6',
      nome: 'Diana Evans',
      idEndereco: '987',
      banco_associado: 'Banco F',
      dataAlteracao: '2022-01-06',
    },
    {
      revisao: '7',
      nome: 'Evan Green',
      idEndereco: '432',
      banco_associado: 'Banco G',
      dataAlteracao: '2022-01-07',
    },
    {
      revisao: '8',
      nome: 'Fiona Harris',
      idEndereco: '876',
      banco_associado: 'Banco H',
      dataAlteracao: '2022-01-08',
    },
    {
      revisao: '9',
      nome: 'George King',
      idEndereco: '765',
      banco_associado: 'Banco I',
      dataAlteracao: '2022-01-09',
    },
    {
      revisao: '10',
      nome: 'Hannah Lee',
      idEndereco: '543',
      banco_associado: 'Banco J',
      dataAlteracao: '2022-01-10',
    },
    {
      revisao: '11',
      nome: 'Ian Miller',
      idEndereco: '210',
      banco_associado: 'Banco K',
      dataAlteracao: '2022-01-11',
    },
    {
      revisao: '12',
      nome: 'Jackie Nelson',
      idEndereco: '109',
      banco_associado: 'Banco L',
      dataAlteracao: '2022-01-12',
    },
    {
      revisao: '13',
      nome: "Karen O'Neal",
      idEndereco: '908',
      banco_associado: 'Banco M',
      dataAlteracao: '2022-01-13',
    },
    {
      revisao: '14',
      nome: 'Liam Parker',
      idEndereco: '807',
      banco_associado: 'Banco N',
      dataAlteracao: '2022-01-14',
    },
    {
      revisao: '15',
      nome: 'Mia Quinn',
      idEndereco: '706',
      banco_associado: 'Banco O',
      dataAlteracao: '2022-01-15',
    },
    {
      revisao: '16',
      nome: 'Noah Roberts',
      idEndereco: '605',
      banco_associado: 'Banco P',
      dataAlteracao: '2022-01-16',
    },
    {
      revisao: '17',
      nome: 'Olivia Scott',
      idEndereco: '504',
      banco_associado: 'Banco Q',
      dataAlteracao: '2022-01-17',
    },
    {
      revisao: '18',
      nome: 'Paul Taylor',
      idEndereco: '403',
      banco_associado: 'Banco R',
      dataAlteracao: '2022-01-18',
    },
    {
      revisao: '19',
      nome: 'Quinn Underwood',
      idEndereco: '302',
      banco_associado: 'Banco S',
      dataAlteracao: '2022-01-19',
    },
    {
      revisao: '20',
      nome: 'Rachel Vaughn',
      idEndereco: '201',
      banco_associado: 'Banco T',
      dataAlteracao: '2022-01-20',
    },
    {
      revisao: '21',
      nome: 'Sam Walker',
      idEndereco: '100',
      banco_associado: 'Banco U',
      dataAlteracao: '2022-01-21',
    },
    {
      revisao: '22',
      nome: 'Tina Xavier',
      idEndereco: '999',
      banco_associado: 'Banco V',
      dataAlteracao: '2022-01-22',
    },
    {
      revisao: '23',
      nome: 'Uma Young',
      idEndereco: '888',
      banco_associado: 'Banco W',
      dataAlteracao: '2022-01-23',
    },
    {
      revisao: '24',
      nome: 'Victor Zane',
      idEndereco: '777',
      banco_associado: 'Banco X',
      dataAlteracao: '2022-01-24',
    },
    {
      revisao: '25',
      nome: 'Wendy Adams',
      idEndereco: '666',
      banco_associado: 'Banco Y',
      dataAlteracao: '2022-01-25',
    },
    {
      revisao: '26',
      nome: 'Xander Bell',
      idEndereco: '555',
      banco_associado: 'Banco Z',
      dataAlteracao: '2022-01-26',
    },
    {
      revisao: '27',
      nome: 'Yara Clark',
      idEndereco: '444',
      banco_associado: 'Banco AA',
      dataAlteracao: '2022-01-27',
    },
    {
      revisao: '28',
      nome: 'Zachary Davis',
      idEndereco: '333',
      banco_associado: 'Banco BB',
      dataAlteracao: '2022-01-28',
    },
    {
      revisao: '29',
      nome: 'Ava Ellis',
      idEndereco: '222',
      banco_associado: 'Banco CC',
      dataAlteracao: '2022-01-29',
    },
    {
      revisao: '30',
      nome: 'Benjamin Foster',
      idEndereco: '111',
      banco_associado: 'Banco DD',
      dataAlteracao: '2022-01-30',
    },
  ];

  findAll(): Registro[] {
    return this.registros;
  }

  findRevisions(
    oldRev: string,
    newRev: string,
  ): { old_rev: Registro; new_rev: Registro } {
    const oldRegistro = this.registros.find((reg) => reg.revisao === oldRev);
    const newRegistro = this.registros.find((reg) => reg.revisao === newRev);

    return { old_rev: oldRegistro, new_rev: newRegistro };
  }
}
