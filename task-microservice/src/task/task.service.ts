import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(title: string, description: string): Promise<Task> {
    const newTask = this.taskRepository.create({ title, description });
    return this.taskRepository.save(newTask);
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTask(id: number): Promise<Task> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async updateTask(id: number, title: string, description: string, isCompleted: boolean): Promise<Task> {
    const task = await this.getTask(id);
    task.title = title;
    task.description = description;
    task.isCompleted = isCompleted;
    return this.taskRepository.save(task);
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
