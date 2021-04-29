import { BaseModel } from "../../../shared/models/base.model";
import { Flag } from "./flag.model";
import { TopLevelDomains } from "./topleveldomains.model";

export class Country extends BaseModel {
  constructor(
    public area?: number,
    public name?: string,
    public nativeName?: string,
    public capital?: string,    
    public population?: number,    
    public populationDensity?: number,
    public flag?: Flag,
    public topLevelDomains?: TopLevelDomains,
    public isCustomInformation?: boolean

  ){
    super();
  }
  static fromJson(jsonData: any): Country {
    return Object.assign(new Country(), jsonData);
  }
}