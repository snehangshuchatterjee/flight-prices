export const formatDate = (date) => {
    var currentDate = new Date(date),
        month = '' + (currentDate.getMonth() + 1),
        day = '' + currentDate.getDate(),
        year = currentDate.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export const getSessionDataString = (sessionData) => {
    const { country, currency, locale, origin, destination, outDate, headCount } = sessionData;
    const sessionDataString = `country=${country}&currency=${currency}&locale=${locale}&originPlace=${origin}&destinationPlace=${destination}&outboundDate=${outDate}&adults=${headCount}`;

    return sessionDataString;
}

export const getSessionId = (headers) => {
    const locationArray = headers.split('/');
    const sessionId = locationArray[locationArray.length - 1];

    return sessionId;
}

export const getLowestPrice = (serverResponse) => {
    const parsedResponse = serverResponse;
    const itinerariesArray = parsedResponse.Itineraries;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    let result;

    if (itinerariesArray.length === 0) {
        result = formatter.format(0);
    }
    else {
        const price = itinerariesArray[0].PricingOptions[0].Price;
        result = formatter.format(price);
    }

    return result;
}

export const getFlightPriceDefaultURLParams = () => {
    return "sortType=price&sortOrder=asc&pageIndex=0&pageSize=10";
}