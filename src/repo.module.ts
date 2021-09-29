import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Message from './db/entities/messages';
import User from './db/entities/user';
import RepoService from './repo.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Message])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}
export default RepoModule;
