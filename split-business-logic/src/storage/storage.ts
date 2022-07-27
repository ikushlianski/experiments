import {ICarBL} from 'src/core/interfaces';
import {postgresCarMapper} from 'src/storage/car.mapper';

export class Storage {
  async saveOne(carBL: ICarBL) {
    const carToSaveInDb = postgresCarMapper.toDB(carBL)

    await this.db.save(carToSaveInDb)
  }
}

export const storageService = new Storage()
