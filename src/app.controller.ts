import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import RepoService from './repo.service';

@Controller()
export class AppController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  async getHello(): Promise<string> {
    return `Count  : ${await this.repoService.userRepo.count()}`;
  }
}
