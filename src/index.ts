import {validator} from "./services/validator";

export const someEtl = (res: any) => {
    const data = 5;

    if (validator(500)) {
        return res.send('success')
    } else {
        return res.send('fail')
    }
}
