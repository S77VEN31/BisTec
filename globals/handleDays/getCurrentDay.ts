import { General } from '../../constants/General';

export const getCurrentDay = () => {
    const { daysOfWeek } = General;
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
}