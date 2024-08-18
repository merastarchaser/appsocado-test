import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthMiddleware } from '../auth/jwt-auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    JwtModule.register({
      secret: 'd#8Gp@2L!xYfPzQwR^k8%MzZk3uS!7tL',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtAuthMiddleware).forRoutes(TaskController);
  }
}
