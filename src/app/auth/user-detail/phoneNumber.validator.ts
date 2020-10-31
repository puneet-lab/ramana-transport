import { ValidatorFn } from '@angular/forms';

export class PhoneNumberValidators {
  public static phoneInitial(): ValidatorFn {
    return (c: { value: string }): { [key: string]: boolean } | null => {
      const { value } = c;
      return PhoneNumberValidators.validatePhone(value);
    };
  }

  public static validatePhone(value: string) {
    if (value !== null && value.length >= 10) {
      const infrontNumber = value.substring(0, 1);
      const isHomeNumber = infrontNumber === '0';
      const checkLength = value.replace(/[^0-9]/g, '').length;
      if (isHomeNumber) {
        if (checkLength === 10) {
          return null;
        } else {
          return { phoneinit: true };
        }
      }
    } else {
      return { phoneinit: true };
    }
  }
}
