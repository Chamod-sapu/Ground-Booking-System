// Import Images from Image folder

import hockey1 from '../../Images/ListofGrounds/ColomboHockeyTurf/Hockey1.jpg'
import hockey2 from '../../Images/ListofGrounds/ColomboHockeyTurf/Hockey2.jpg'
import hockey3 from '../../Images/ListofGrounds/ColomboHockeyTurf/Hockey3.jpg'
import hockey4 from '../../Images/ListofGrounds/ColomboHockeyTurf/Hockey4.jpg'

import dambulla1 from '../../Images/ListofGrounds/DambullaStaduim/Dambulla1.jpg'
import dambulla2 from '../../Images/ListofGrounds/DambullaStaduim/Dambulla2.jpg'
import dambulla3 from '../../Images/ListofGrounds/DambullaStaduim/Dambulla3.jpg'
import dambulla4 from '../../Images/ListofGrounds/DambullaStaduim/Dambulla4.jpeg'

import galle1 from '../../Images/ListofGrounds/GalleStadium/galle_stadium_1.jpg'
import galle2 from '../../Images/ListofGrounds/GalleStadium/galle_stadium_2.jpg'
import galle3 from '../../Images/ListofGrounds/GalleStadium/galle_stadium_3.jpg'
import galle4 from '../../Images/ListofGrounds/GalleStadium/galle_stadium_4.jpg'

import havelocks1 from '../../Images/ListofGrounds/HavelocksGround/Havelocks1.jpg'
import havelocks2 from '../../Images/ListofGrounds/HavelocksGround/Havelocks2.jpg'
import havelocks3 from '../../Images/ListofGrounds/HavelocksGround/Havelocks3.jpg'
import havelocks4 from '../../Images/ListofGrounds/HavelocksGround/Havelocks4.jpg'

import pallekale1 from '../../Images/ListofGrounds/PallekaleCricketStaduim/Pallekale1.jpg'
import pallekale2 from '../../Images/ListofGrounds/PallekaleCricketStaduim/Pallekale2.jpg'
import pallekale3 from '../../Images/ListofGrounds/PallekaleCricketStaduim/Pallekale3.jpg'
import pallekale4 from '../../Images/ListofGrounds/PallekaleCricketStaduim/Pallekale4.jpg'

import police1 from '../../Images/ListofGrounds/PoliceParkGround/Police1.jpg'
import police2 from '../../Images/ListofGrounds/PoliceParkGround/Police2.jpg'
import police3 from '../../Images/ListofGrounds/PoliceParkGround/Police3.jpg'
import police4 from '../../Images/ListofGrounds/PoliceParkGround/Police4.jpg'

import sugathadasa1 from '../../Images/ListofGrounds/SugathadasaStaduim/Sugathadasa1.jpg'
import sugathadasa2 from '../../Images/ListofGrounds/SugathadasaStaduim/Sugathadasa2.jpg'
import sugathadasa3 from '../../Images/ListofGrounds/SugathadasaStaduim/Sugathadasa3.jpg'
import sugathadasa4 from '../../Images/ListofGrounds/SugathadasaStaduim/Sugathadasa4.png'

import welagedara1 from '../../Images/ListofGrounds/WelagedaraStaduim/Welagedara1.webp'
import welagedara2 from '../../Images/ListofGrounds/WelagedaraStaduim/Welagedara2.jpg'
import welagedara3 from '../../Images/ListofGrounds/WelagedaraStaduim/Welagedara3.jpg'
import welagedara4 from '../../Images/ListofGrounds/WelagedaraStaduim/Welagedara4.jpg'



export const images = {
    hockey1,
    hockey2,
    hockey3,
    hockey4,

    dambulla1,
    dambulla2,
    dambulla3,
    dambulla4,

    galle1,
    galle2,
    galle3,
    galle4,

    havelocks1,
    havelocks2,
    havelocks3,
    havelocks4,

    pallekale1,
    pallekale2,
    pallekale3,
    pallekale4,

    police1,
    police2,
    police3,
    police4,

    sugathadasa1,
    sugathadasa2,
    sugathadasa3,
    sugathadasa4,

    welagedara1,
    welagedara2,
    welagedara3,
    welagedara4,
}


// Import icons from Icon folder

import {staff,parking,changingroom,power,washroom,lighting} from "../../Icons/Index"

export {

    staff,
    parking,
    changingroom,
    power,
    washroom,
    lighting
}


export const grounds =[
                        {   
                            id: 1,
                            name: 'Pallekele Cricket Stadium',
                            sport: 'Cricket',
                            address :  'Kandy-Mahiyangane-Padiyatalawa Hwy, Pallekele',
                            location: 'Kandy',
                            capacity: '35,000',
                            timing: '8.00 a.m. - 11.00p.m',
                            price: '100,000',
                            images: [pallekale1, pallekale2, pallekale3, pallekale4],
                            facilities: [
                                            {
                                                type: 'Ground Staff',
                                                icon: staff
                                            },
                                            {
                                                type: 'Changing Room',
                                                icon: changingroom
                                            },
                                            {
                                                type: 'Power',
                                                icon: power
                                            },
                                            {
                                                type: 'Washroom',
                                                icon: washroom
                                            },
                                        ],
                            additionalFac:[
                                            {
                                                type: 'Floodlights',
                                                icon: lighting,
                                                addPrice: '30,000'
                                            },
                                            {
                                                type: 'Car Park',
                                                icon: parking,
                                                addPrice: '10,000'
                                            }
                                        ],
                        },

                        {   
                            id: 2,
                            name: 'Welagedara Stadium',
                            sport: 'Cricket',
                            location: 'Kurunegala',
                            capacity: '10,000',
                            timing: '8.00 a.m. - 6.00p.m',
                            price: '25,000',
                            images: [welagedara1,welagedara2,welagedara3,welagedara4],
                            facilities: [
                                            {
                                                type: 'Ground Staff',
                                                icon: staff
                                            },
                                            {
                                                type: 'Changing Room',
                                                icon: changingroom
                                            },
                                            {
                                                type: 'Power',
                                                icon: power
                                            },
                                            {
                                                type: 'Washroom',
                                                icon: washroom
                                            },
                                        ],
                            additionalFac:[
                                            {
                                                type: 'Car Park',
                                                icon: parking,
                                                addPrice: '10,000'
                                            }
                                        ],
                        },

                        {
                            
                            id: 3,
                            name: 'Galle Stadium',
                            sport: 'Cricket',
                            location: 'Galle',
                            capacity: '35,000',
                            timing: '8.00 a.m. - 6.00p.m',
                            price: '75,000',
                            images: [galle1,galle2,galle3,galle4],
                            facilities: [
                                            {
                                                type: 'Ground Staff',
                                                icon: staff
                                            },
                                            {
                                                type: 'Changing Room',
                                                icon: changingroom
                                            },
                                            {
                                                type: 'Power',
                                                icon: power
                                            },
                                            {
                                                type: 'Washroom',
                                                icon: washroom
                                            },
                                        ],
                            additionalFac:[
                                            {
                                                type: 'Car Park',
                                                icon: parking,
                                                addPrice: '10,000'
                                            }
                                        ],
                    },

                    {   
                        id: 4,
                        name: 'Colombo Hockey Turf',
                        sport: 'Hockey',
                        location: 'Colombo',
                        capacity: '2000',
                        timing: '8.00 a.m. - 6.00p.m',
                        price: '20,000',
                        images: [hockey1,hockey2,hockey3,hockey4],
                        facilities: [
                                        {
                                            type: 'Ground Staff',
                                            icon: staff
                                        },
                                        {
                                            type: 'Changing Room',
                                            icon: changingroom
                                        },
                                        {
                                            type: 'Power',
                                            icon: power
                                        },
                                        {
                                            type: 'Washroom',
                                            icon: washroom
                                        },
                                    ],
                        additionalFac:[
                                        {   
                                            type: 'Car Park',
                                            icon: parking,
                                            addPrice: '10,000'
                                        }
                                    ],
                        },

                        {   
                            id: 5,
                            name: 'Dambulla Staduim',
                            sport: 'Cricket',
                            location: 'Matale',
                            capacity: '16,800',
                            timing: '8.00 a.m. - 11.00p.m',
                            price: '60,000',
                            images: [dambulla1,dambulla2,dambulla3,dambulla4],
                            facilities: [
                                            {
                                                type: 'Ground Staff',
                                                icon: staff
                                            },
                                            {
                                                type: 'Changing Room',
                                                icon: changingroom
                                            },
                                            {
                                                type: 'Power',
                                                icon: power
                                            },
                                            {
                                                type: 'Washroom',
                                                icon: washroom
                                            },
                                        ],
                            additionalFac:[
                                            {
                                                type: 'Floodlights',
                                                icon: lighting,
                                                addPrice: '30,000'
                                            },
                                            {
                                                type: 'Car Park',
                                                icon: parking,
                                                addPrice: '10,000'
                                            }
                                        ],
                        },


                        {   
                            id: 6,
                            name: 'Havelocks Ground',
                            sport: 'Rugby',
                            location: 'Colombo',
                            capacity: '5,000',
                            timing: '8.00 a.m. - 6.00p.m',
                            price: '35,000',
                            images: [havelocks1,havelocks2,havelocks3,havelocks4],
                            facilities: [
                                            {
                                                type: 'Ground Staff',
                                                icon: staff
                                            },
                                            {
                                                type: 'Changing Room',
                                                icon: changingroom
                                            },
                                            {
                                                type: 'Power',
                                                icon: power
                                            },
                                            {
                                                type: 'Washroom',
                                                icon: washroom
                                            },
                                        ],
                            additionalFac:[
                                            {
                                                type: 'Car Park',
                                                icon: parking,
                                                addPrice: '10,000'
                                            }
                                        ],
                        },


                        {   
                            id: 7,
                            name: 'Police Park Ground',
                            sport: 'Football',
                            location: 'Colombo',
                            capacity: '1,000',
                            timing: '8.00 a.m. - 6.00p.m',
                            price: '15,000',
                            images: [police1,police2,police3,police4],
                            facilities: [
                                            {
                                                type: 'Ground Staff',
                                                icon: staff
                                            },
                                            {
                                                type: 'Changing Room',
                                                icon: changingroom
                                            },
                                            {
                                                type: 'Power',
                                                icon: power
                                            },
                                            {
                                                type: 'Washroom',
                                                icon: washroom
                                            },
                                        ],
                            additionalFac:[
                                            {
                                                type: 'Car Park',
                                                icon: parking,
                                                addPrice: '10,000'
                                            }
                                        ],
                        },

                        {   
                            id: 8,
                            name: 'Sugathadasa Stadium',
                            sport: 'Athletics',
                            location: 'Colombo',
                            capacity: '25,000',
                            timing: '8.00 a.m. - 6.00p.m',
                            price: '29,000',
                            images: [sugathadasa1,sugathadasa2,sugathadasa3,sugathadasa4],
                            facilities: [
                                            {
                                                type: 'Ground Staff',
                                                icon: staff
                                            },
                                            {
                                                type: 'Changing Room',
                                                icon: changingroom
                                            },
                                            {
                                                type: 'Power',
                                                icon: power
                                            },
                                            {
                                                type: 'Washroom',
                                                icon: washroom
                                            },
                                        ],
                            additionalFac:[
                                            {
                                                type: 'Car Park',
                                                icon: parking,
                                                addPrice: '10,000'
                                            }
                                        ],
}]

import user1 from '../../Images/AccountDetails/Jayath.jpg'
import user2 from '..//../Images/AccountDetails/Mayura.jpg'
import user3 from '../../Images/AccountDetails/Supun.jpg'

export const users = [
                        {
                            user_id : '0001',
                            name : 'Jayath Indula',
                            email : 'jayathindula2001@gmail.com',
                            address : '35/A,Mahagodawatta,Kiyanduwa,Akuressa,Matara.',
                            telephone : '+94 773 7891',
                            image : user1,
                            bookings : grounds[0,1,5,7],
                            userName: 'Indu',
                            password: 'Dil002',
                            
                        },
                        {
                            user_id : '0002',
                            name : 'Mayura Jayatissa',
                            email : 'mayurajayatissa1999@gmail.com',
                            address : '180,Thalduwa,Kagalle.',
                            telephone : '+94 715 0458',
                            image : user2,
                            bookings : grounds[0,2,6,4],
                            userName: 'PAM',
                            password: 'Chmthka2000'
                        },
                        {
                            user_id : '0003',
                            name : 'Supun Jayamal',
                            email : 'supunjayamal2000@gmail.com',
                            address : 'Mallika Niwasa,Udapola,Kahawatte Ela,Polgahawela',
                            telephone : '+94 752 1278',
                            image : user3,
                            bookings : grounds[5,7],
                            userName: 'SUPUN',
                            password: 'Yasho96'                            
                        }
                    ]
                    

export const booking = [
                        {
                            client : users[0].user_id,
                            image : grounds[2].images[0],
                            venue : grounds[2].name,
                            price : grounds[2].price,
                            fromDate: '02 Jan 2024',
                            toDate: '03 Jan 2024',
                        },
                        {
                            client : users[1].user_id,
                            image : grounds[0].images[0],
                            venue : grounds[0].name,
                            price : grounds[0].price,
                            fromDate: '10 Mar 2024',
                            toDate: '11 Mar 2024',
                        },
                        {
                            client : users[1].user_id,
                            image : grounds[6].images[0],
                            venue : grounds[6].name,
                            price : grounds[6].price,
                            fromDate: '15 May 2024',
                            toDate: '-',
                        },
                        {
                            client : users[2].user_id,
                            image : grounds[3].images[0],
                            venue : grounds[3].name,
                            price : grounds[3].price,
                            fromDate: '29 Apr 2024',
                            toDate: '30 Apr 2024',
                        },
                        {
                            client : users[0].user_id,
                            image : grounds[6].images[0],
                            venue : grounds[6].name,
                            price : grounds[6].price,
                            fromDate: '22 Feb 2024',
                            toDate: '-',
                        },
                        {
                            client : users[0].user_id,
                            image : grounds[1].images[0],
                            venue : grounds[1].name,
                            price : grounds[1].price,
                            fromDate: '20 Jan 2024',
                            toDate: '-',
                        },
                        {
                            client : users[0].user_id,
                            image : grounds[5].images[0],
                            venue : grounds[5].name,
                            price : grounds[5].price,
                            fromDate: '30 Mar 2024',
                            toDate: '-',
                        },
                        {
                            client : users[1].user_id,
                            image : grounds[2].images[0],
                            venue : grounds[2].name,
                            price : grounds[2].price,
                            fromDate: '17 Feb 2024',
                            toDate: '18 Feb 2024',
                        },
                        {
                            client : users[0].user_id,
                            image : grounds[2].images[0],
                            venue : grounds[2].name,
                            price : grounds[2].price,
                            fromDate: '10 Jul 2024',
                            toDate: '-',
                        }
                    ]
                    


