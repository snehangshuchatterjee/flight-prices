export const getCalendarDates = () => {
    let dates = [];
    let today = new Date();
    for (let index = 0; index < 30; index++) {
        dates.push(new Date().setDate(today.getDate() + index));
    }

    return dates;
}