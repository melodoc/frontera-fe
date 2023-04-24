import { useState, useEffect } from 'react';

export const useTransformPhoneNumber = (phoneNumber: string): string => {
  const [transformedPhoneNumber, setTransformedPhoneNumber] = useState<string>(phoneNumber);

  useEffect(() => {
    const getCountry = (stripped: string): { code: string; length: number } => {
      const prefix = stripped.substring(0, 1);

      return prefix === '8' || prefix === '7'
        ? {
            code: '+7',
            length: 1
          }
        : {
            code: stripped.substring(0, 2),
            length: stripped.substring(0, 2).length
          };
    };

    const stripped = phoneNumber.replace(/[\s-]/g, '');
    const country = getCountry(stripped);
    const digits = stripped.substring(country.length);
    const groups = digits.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);

    setTransformedPhoneNumber(
      groups ? `${country.code} (${groups[1]}) ${groups[2]} ${groups[3]} ${groups[4]}` : phoneNumber
    );
  }, [phoneNumber]);

  return transformedPhoneNumber;
};
