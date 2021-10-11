export class Quote {
  public showDescription: boolean;
  constructor(public id: number,public name: string,public description: string, public completeDate: Date,public likes:number,public hates:number,public author:string){
    this.showDescription=false;
  }
}