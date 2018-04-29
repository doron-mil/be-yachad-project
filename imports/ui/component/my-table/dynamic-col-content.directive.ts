import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, Type, ViewContainerRef
} from '@angular/core';
import {MyColContent1Component} from './my-col-content1.component';
import {MyColContent2Component} from './my-col-content2.component';
import {MyColContent3Component} from './my-col-content3.component';
import {colContentInterface} from './my-col-content.interface';
import { row_data } from '../../../models/row_data';
import { col_meta_data } from '../../../models/col_meta_data';

@Directive({
  selector: '[appDynamicColContent]'
})
export class DynamicColContentDirective implements OnInit  {

  @Input() dynamicRow: row_data;
  @Input() colMetaData: col_meta_data;

  private componentRef: ComponentRef<any> = null;

  constructor( public vcRef: ViewContainerRef ) {
    //console.log( "#######2 input Row : " + this.dynamicRow );

  }

  ngOnInit(): void {
    //console.log( "####### input Row : " + this.colMetaData.col_type );

    this.vcRef.clear();
    this.componentRef = null;

    if (true) {
      const elInjector = this.vcRef.parentInjector;
      const componentFactoryResolver = elInjector.get(ComponentFactoryResolver);

      let contentClassType: Type<colContentInterface>;
      switch(this.colMetaData.col_type) {
        case 1: {
          contentClassType = MyColContent1Component ;
          break;
        }
        case 2: {
          contentClassType = MyColContent2Component;
          break;
        }
        case 3: {
            contentClassType = MyColContent3Component ;
            break;
        }
        default: {
          //statements;
          break;
        }
      }


      const componentFactory = componentFactoryResolver.resolveComponentFactory(contentClassType);
      this.componentRef = this.vcRef.createComponent(componentFactory);

      (<colContentInterface>this.componentRef.instance).setData( this.dynamicRow , this.colMetaData )

    }
  }


  ngOnDestroy() {
    if(this.componentRef) {
      this.vcRef.clear();
      this.vcRef = null;
    }
  }

}
