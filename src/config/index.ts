import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const options: TypeOrmModuleOptions = {
  type: 'mysql',
  username: 'root',
  password: '',
  database: 'nest_graphql',
  logging: true,
  synchronize: true,
  entities: [path.resolve(__dirname, '..', 'db', 'entities', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};

module.exports = options;
