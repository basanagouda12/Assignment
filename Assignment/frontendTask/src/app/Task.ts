export interface Task {
  archive: boolean;
  completed: boolean;
  inProgress: boolean;
  createdAt: string;
  id?: String;
  title: string;
  subtask:[],
  
  
}
