import { DataSource } from 'typeorm';
import { UserOrmEntity } from '../../users/infraestructure/entities/userOrm.entity';
import { PostOrmEntity } from '../../posts/infraestructure/entities/postOrmEntity';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: +process.env.POSTGRES_DB_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [UserOrmEntity, PostOrmEntity],
});
