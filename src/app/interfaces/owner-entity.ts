import {CarEntity} from "./car-entity";

export interface OwnerEntity {
  aId:number,
  aLastName: string,
  aFirstName: string,
  aMiddleName: string,
  aCars: CarEntity[]
}
