import {ICarBL} from 'src/core/interfaces';
import {Storage, storageService} from 'src/storage/storage';

export class CarManager {
  storageService: Storage

  constructor(storageService: Storage) {
    this.storageService = storageService
  }

  sell(car: ICarBL) {
    const discountPrice = car.price - (car.price * 0.2)

    this.storageService.saveOne({
      ...car,
      price: discountPrice
    })
  }
}

export const carManager = new CarManager(storageService)
