import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body('title') title: string, @Body('description') description: string) {
    return this.taskService.createTask(title, description);
  }

  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  async getTask(@Param('id') id: number) {
    return this.taskService.getTask(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('isCompleted') isCompleted: boolean,
  ) {
    return this.taskService.updateTask(id, title, description, isCompleted);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}
