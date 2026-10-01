export class Task {
  id: number;
  isCompleted: boolean;
  title: string;
  description: string;

  constructor(
    id: number,
    title: string,
    description: string,
    isCompleted?: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    if (isCompleted !== undefined && isCompleted !== null) {
      this.isCompleted = isCompleted;
    } else {
      this.isCompleted = false;
    }

    //this.isCompleted = isCompleted ?? false;
  }
}
