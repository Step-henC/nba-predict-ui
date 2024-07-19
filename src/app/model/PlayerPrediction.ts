export class PlayerPredictions {
constructor(
  public id?: number,
  public playerName?: string,
  public lastSeasonPoints?: number,
  public predictedPoints?: number,
  public predictedRebounds?: number,
  public predictedAssists?: number,
){}

}

export class PlayerCareer {
  constructor(
  public playerName?: string,
  public season?: number,
  public points?: number,
  public team?: string,
  public totalRb?: number,
  public assists?: number
  ){}
}

