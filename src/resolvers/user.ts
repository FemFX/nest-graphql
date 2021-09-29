import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import User from 'src/db/entities/user';
import RepoService from 'src/repo.service';
import UserInput from './input/user';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }
  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<User> {
    return this.repoService.userRepo.findOne(id);
  }
  // @Mutation(() => User)
  // public async createUser(@Args('data') input: UserInput): Promise<User> {
  //   const user = this.repoService.userRepo.create({ email: input.email });
  //   return this.repoService.userRepo.save(user);
  // }
  @Mutation(() => User)
  public async createOrLoginUser(
    @Args('data') input: UserInput,
  ): Promise<User> {
    let user = await this.repoService.userRepo.findOne({
      where: { email: input.email.toLowerCase().trim() },
    });
    if (!user) {
      user = this.repoService.userRepo.create({
        email: input.email.toLowerCase().trim(),
      });

      await this.repoService.userRepo.save(user);
    }

    return user;
  }
}
