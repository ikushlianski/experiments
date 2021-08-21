import {ValidationError} from '@contracts/error';

export const func = (num: number) => {
  if (!num) {
    throw new ValidationError()
  }
}
