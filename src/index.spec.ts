import Mock = jest.Mock;

jest.mock('./services/validator');

import {validator} from "./services/validator";
import {someEtl} from "./index";

describe('Index', function () {
  it('should return success if validation succeeds', () => {
    (validator as Mock).mockReturnValue(true)

    const mockResponse = {
      send: jest.fn()
    }

    someEtl(mockResponse)

    expect(validator).toHaveBeenCalledTimes(1);
    expect(mockResponse.send).toBeCalledWith('success')
  })

  it('should return fail if validation fails', () => {
    (validator as Mock).mockReturnValue(false)

    const mockResponse = {
      send: jest.fn()
    }

    someEtl(mockResponse)

    expect(validator).toHaveBeenCalledTimes(1);
    expect(mockResponse.send).toBeCalledWith('fail')
  })
});
