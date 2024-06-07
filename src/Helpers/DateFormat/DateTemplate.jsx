import React from 'react'
import { formatDate } from './DateFormat';

function DateTemplate(orDate) {
    const formattedDate = formatDate(orDate.created_at);

    return (
        <React.Fragment>
            {formattedDate}
        </React.Fragment>
    );
}

export default DateTemplate