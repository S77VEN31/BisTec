import { MenuConstants } from "../../constants/screens/Menu/MenuConstants";

export const getMenuByDay = (day, id) => {
    const foundMenu = MenuConstants.restaurants[id].menusData.find(
        (menuItem) => menuItem.day === day.toLowerCase()
    );
    return foundMenu || null;
}
