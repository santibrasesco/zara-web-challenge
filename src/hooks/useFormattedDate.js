import { useState, useEffect } from 'react';

export const useFormattedDate = (date, format) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        if (date instanceof Date && !isNaN(date)) {
            let formattedValue = '';

            switch (format) {
                case 'year':
                    formattedValue = date.getFullYear().toString();
                    break;
                default:
                    formattedValue = 'Invalid Format';
                    break;
            }

            setFormattedDate(formattedValue);
        } else {
            setFormattedDate('Invalid Date');
        }
    }, [date, format]);

    return formattedDate;
};
