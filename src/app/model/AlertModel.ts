
export class AlertModel {
  constructor(
    public status: "success" | "error",
    public message: string,
    public timeout: number,
  ){
    
  }
}
