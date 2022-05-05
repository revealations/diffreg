import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = CreateBoardDto;

    const board = this.create({
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    });
    await this.save(board);

    return board;
  }
}
