import {Builder, BuilderConfiguration, BuilderContext, BuildEvent} from '@angular-devkit/architect';
import { Observable, of } from 'rxjs';

export interface ElectronBuilderSchema{
}

export default class ElectronBuilder implements Builder<ElectronBuilderSchema> {
  constructor(private context: BuilderContext) {
  }

  run(builderConfig: BuilderConfiguration<Partial<ElectronBuilderSchema>>): Observable<BuildEvent> {
    console.log(`From ts file`);

      return of({success: true})
  }

}