interface SaveData {
  [key: string]: any;
}

interface Application {
  broker: string,
  brokerEmail:string,
  linkTime: string,
  isCosigner: boolean,
  cosignerApplicationId?: string,
  needCosigner: boolean,
  type: string
}