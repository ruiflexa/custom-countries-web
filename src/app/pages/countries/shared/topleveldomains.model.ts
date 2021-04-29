
import { BaseModel } from "src/app/shared/models/base.model";

export class TopLevelDomains extends BaseModel {
    constructor(
        name?: string
    ){
        super();
    }
    static fromJson(jsonData: any): TopLevelDomains {
        return Object.assign(new TopLevelDomains(), jsonData);
      }
}