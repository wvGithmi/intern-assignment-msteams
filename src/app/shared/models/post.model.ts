export class Post {
    id: number;
    createdBy: number;
    createdTime: Date;
    content: string;

    constructor(id: number, createBy: number, createdTime:Date, content:string) {
      this.id = id;
      this.createdBy = createBy;
      this.createdTime = createdTime;
      this.content = content;
    }
}

// export class Post {
//     id: number;
//     createdBy: number;
//     createdTime: Date;
//     content: string;
// }
