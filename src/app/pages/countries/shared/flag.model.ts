import { BaseModel } from "src/app/shared/models/base.model";

export class Flag extends BaseModel {
    constructor(
        emoji?: string,
        emojiUnicode?: string,
        svgFile?: string
    ){
        super();
    }
    static fromJson(jsonData: any): Flag {
        return Object.assign(new Flag(), jsonData);
      }
}

