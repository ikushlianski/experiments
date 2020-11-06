import {validator} from "./services/validator";

export const someEtl = (res: any) => {
    const DATA = 500;

    if (validator(DATA)) {
        return res.send('success')
    } else {
        return res.send('fail')
    }
}
