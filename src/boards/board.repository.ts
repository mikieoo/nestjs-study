import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {}
