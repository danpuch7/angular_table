import {CarEntity} from "./car-entity";

export interface OwnerEntity {
  id:any,
  aLastName: string,
  aFirstName: string,
  aMiddleName: string,
  aCars: Array<CarEntity>
}
