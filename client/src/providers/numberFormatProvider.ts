import { intlNumberFormatValues } from "config";

const NumberFormatProvider = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});

export default NumberFormatProvider;
