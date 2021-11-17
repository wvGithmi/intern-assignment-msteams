export class User {
    userDetailId: number;
    userFirstName: string;
    userLastName: string;
  
    constructor(userDetailId: number, userFirstName: string, userLastName: string) {
      this.userDetailId = userDetailId;
      this.userFirstName = userFirstName;
      this.userLastName = userLastName;
    }
  }

