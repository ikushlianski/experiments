import Mock = jest.Mock;
import {validator} from "./services/validator";
import {someEtl} from "./index";

jest.mock('./services/validator');

const mockValidator = validator as Mock;

describe('Index', function () {
  afterEach(() => {
    mockValidator.mock.calls.length = 0;
  })

  it('should return success if validation succeeds', () => {
    mockValidator.mockReturnValue(true)

    const mockResponse = {
      send: jest.fn()
    }

    someEtl(mockResponse)

    expect(mockValidator).toHaveBeenCalledTimes(1);
    expect(mockResponse.send).toBeCalledWith('success')
  })

  it('should return "fail" if validation fails', () => {
    mockValidator.mockReturnValue(false)

    const mockResponse = {
      send: jest.fn()
    }

    someEtl(mockResponse)

    expect(mockValidator).toHaveBeenCalledTimes(1);
    expect(mockResponse.send).toBeCalledWith('fail')
  })
});
