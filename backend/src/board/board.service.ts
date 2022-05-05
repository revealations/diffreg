import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
  //   private boards: Boards[] = [];
  //   getAllBoard(): Boards[] {
  //     return this.boards;
  //   }
  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = CreateBoardDto;

    const board = this.boardRepository.create({
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    });
    await this.boardRepository.save(board);

    return board;
  }
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    console.log(result);
  }

  //   deleteBoard(id: string): void {
  //     this.boards = this.boards.filter((board) => board.id != id);
  //   }
  //   updateBoardStatus(id: string, status: BoardStatus): Boards {
  //     const board = this.getBoardById(id);
  //     board.status = status;
  //     return board;
  //   }
}
