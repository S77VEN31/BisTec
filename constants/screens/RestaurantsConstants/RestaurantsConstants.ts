export const RestaurantsConstants = {
    restaurants: [
        {
            id: 1,
            name: 'Comedor institucional',
            state: true,
            schedule: "Lunes a Sábado de 8:15am a 7:30pm",
            images: [
                require('../../../assets/images/restaurants/restaurante-institucional/restaInstitucional1.png'),
                require('../../../assets/images/restaurants/restaurante-institucional/restaInstitucional2.png'),
                require('../../../assets/images/restaurants/restaurante-institucional/restaInstitucional3.png'),
            ],
        },
        {
            id: 2,
            name: 'Soda el lago',
            state: true,
            schedule: "Lunes a Viernes de 7:00am a 5:00pm",
            images: [
                require('../../../assets/images/restaurants/soda-el-lago/sodaLago1.png'),
                require('../../../assets/images/restaurants/soda-el-lago/sodaLago2.png'),
                require('../../../assets/images/restaurants/soda-el-lago/sodaLago3.png'),
            ],
        },
        {
            id: 3,
            name: 'Soda la Casita Forestal',
            state: false,
            schedule: "Lunes a Domingo de 7:30am a 4:00pm",
            images: [
                require('../../../assets/images/restaurants/soda-la-casita-forestal/sodaForestal1.png'),
                require('../../../assets/images/restaurants/soda-la-casita-forestal/sodaForestal2.png'),
                require('../../../assets/images/restaurants/soda-la-casita-forestal/sodaForestal3.png'),
            ],
        },
        {
            id: 4,
            name: 'Soda la Deportiva',
            state: false,
            schedule: "Lunes a Domingo de 7:00am a 5:00pm",
            images: [
                require('../../../assets/images/restaurants/soda-la-deportiva/sodaDeportiva1.png'),
                require('../../../assets/images/restaurants/soda-la-deportiva/sodaDeportiva2.png'),
                require('../../../assets/images/restaurants/soda-la-deportiva/sodaDeportiva3.png'),
            ],
        },
    ]


};