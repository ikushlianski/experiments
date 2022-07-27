import {ICarBL} from 'src/core/interfaces';
import {ICarInDb} from 'src/storage/car-in-db';

export class PostgresCarMapper {
  toBL() {

  }

  toDB(car: ICarBL): ICarInDb {
    return {
      ...car,
      saleDate: String(car.saleDate),
      pk: `${car.saleDate}-${car.salesManager}-${car.price}`
    }
  }
}

export const postgresCarMapper = new PostgresCarMapper()
