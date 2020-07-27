import React from 'react';
import moment from "moment";

export const textLimit = (text, limit = 25) => {
    if (!text) return null
    return text.length > limit ? `${text.substring(0, limit)}...` : text
}

export const getDateTime = (data, type = 1) => {
    if (!data) return ''
    if (type === 1) {
        return <moment format="D MMM YYYY HH:mm" withTitle>
            {data}
        </moment>
    } else if (type === 2) {
        return <moment format="D MMM YYYY" withTitle>
            {data}
        </moment>
    } else if (type === 3) {
        return <moment format="HH:mm" withTitle>
            {data}
        </moment>
    }
}
