export class Task {
  id: number;
  isCompleted: boolean;
  title: string;
  description: string;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.isCompleted = false;
    this.title = title;
    this.description = description;
  }
}