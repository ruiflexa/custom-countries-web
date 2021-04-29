import { OnInit, Directive } from '@angular/core';

import { BaseModel } from './../../../models/base.model';
import { BaseService } from './../../../services/base.service';

@Directive()
export abstract class BaseListComponent<T extends BaseModel> implements OnInit {

  entities: T[] = [];

  constructor(private baseService: BaseService<T>) { }

  ngOnInit() {
  
    
  }

}