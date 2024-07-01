import { faInstagram, faMeta, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faChartPie, faStore, faW } from "@fortawesome/free-solid-svg-icons";

import { OfferProps } from "../sections/Offer";
import { ProjectsProps } from "../sections/Projects";

export const sectionData = {

    despreNoi: {
        borderTitle: 'Despre Noi',
        title: 'DE CE NE-AI ALEGE?',
        message: 'Fusce condimentum lorem ac ex venenatis accumsan. Aliquam fermentum ex non mi posuere semper. Ut sed nunc velit. In  sollicitudin mauris ut ipsum fermentum, in vulputate ipsum elementum. Aliquam sit amet bibendum arcu. Sed nulla lacus, tincidunt vel ligula vel',

    },
    serviciileNoastre: {
        borderTitle: 'Serviciile Noastre',
        title: 'CU CE VĂ PUTEM AJUTA?',
        message: 'Ut sit amet quam faucibus turpis pulvinar efficitur. Sed consectetur pharetra facilisis. Donec at diam semper, sodales lectus in, pharetra lectus. Donec ullamcorper ante ac tellus sollicitudin dictum.',
    },
    proiecteleNoastre: {
        borderTitle: 'Proiectele Noastre',
        title: 'TREBUIE SĂ TE CONVINGI!',
        message: 'Ut sit amet quam faucibus turpis pulvinar efficitur. Sed consectetur pharetra facilisis. Donec at diam semper, sodales lectus in, pharetra lectus. Donec ullamcorper ante ac tellus sollicitudin dictum.',
    },
    contact: {
        borderTitle: 'Contact',
        title: 'LUAȚI LEGĂTURA CU NOI',
        message: 'Ut sit amet quam faucibus turpis pulvinar efficitur. Sed consectetur pharetra facilisis. Donec at diam semper, sodales lectus in, pharetra lectus. Donec ullamcorper ante ac tellus sollicitudin dictum.',
    }

};

export const offerData: OfferProps[] = [

    {
        logo: faMeta,
        title: 'META MARKETING',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus',

    },
    {
        logo: faInstagram,
        title: 'INSTAGRAM MANAGEMENT',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus',

    },
    {
        logo: faTiktok,
        title: 'TIKTOK MARKETING',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus',

    },
    {
        logo: faW,
        title: 'WEB DEVELOPMENT',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus',

    },
    {
        logo: faStore,
        title: 'BRANDING & IDENTITY',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus',

    },
    {
        logo: faChartPie,
        title: 'GA MASTERY',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus',

    }

];


export const projectData: ProjectsProps[] = [

    {
        title: 'TITLU PROIECT',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci pretium ipsum suscipit dignissim. Ut ac sollicitudin purus. Sed vel volutpat ligula. Vestibulum maximus, turpis nec venenatis varius, odio orci porttitor ipsum, vel condimentum augue libero eu justo. Nulla et enim sapien. Morbi vel enim a lorem tempus faucibus. Nulla nec placerat elit, in ornare ipsum.',
        photo: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'TITLU ALT PROIECT',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci pretium ipsum suscipit dignissim. Ut ac sollicitudin purus. Sed vel volutpat ligula. Vestibulum maximus, turpis nec venenatis varius, odio orci porttitor ipsum, vel condimentum augue libero eu justo. Nulla et enim sapien. Morbi vel enim a lorem tempus faucibus. Nulla nec placerat elit, in ornare ipsum.',
        photo: 'https://media.istockphoto.com/id/1360521208/ro/fotografie/om-de-afaceri-folosind-un-computer-pentru-analiz%C4%83-seo-search-engine-optimization.jpg?s=2048x2048&w=is&k=20&c=3AfOT6oArU-HyJJITHJaotJkZRtZa5YeAPWXawk3OV4=',
    },
    {
        title: 'TITLU UNUI ALT PROIECT',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci pretium ipsum suscipit dignissim. Ut ac sollicitudin purus. Sed vel volutpat ligula. Vestibulum maximus, turpis nec venenatis varius, odio orci porttitor ipsum, vel condimentum augue libero eu justo. Nulla et enim sapien. Morbi vel enim a lorem tempus faucibus. Nulla nec placerat elit, in ornare ipsum.',
        photo: 'https://images.pexels.com/photos/20668096/pexels-photo-20668096/free-photo-of-haine-imbracaminte-cumparaturi-vanzare-cu-amanuntul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'GEN INCA UNUL',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales orci pretium ipsum suscipit dignissim. Ut ac sollicitudin purus. Sed vel volutpat ligula. Vestibulum maximus, turpis nec venenatis varius, odio orci porttitor ipsum, vel condimentum augue libero eu justo. Nulla et enim sapien. Morbi vel enim a lorem tempus faucibus. Nulla nec placerat elit, in ornare ipsum.',
        photo: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }





]

