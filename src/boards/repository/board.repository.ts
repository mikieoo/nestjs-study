import { Repository } from 'typeorm';
import { Board } from '../entity/board.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardRepository extends Repository<Board> {}
