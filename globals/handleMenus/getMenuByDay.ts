import { MenuConstants } from "../../constants/screens/Menu/MenuConstants";

export const getMenuByDay = (day) => {
    const foundMenu = MenuConstants.menusData.find(
        (menuItem) => menuItem.day === day.toLowerCase()
    );
    return foundMenu || null;
}
