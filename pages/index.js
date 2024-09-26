import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20210907/pngtree-business-daytime-conference-table-meeting-room-placement-photographs-and-pictures-image_816353.jpg',
        address: 'Some address 5, 12345 some city',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20210907/pngtree-business-daytime-conference-table-meeting-room-placement-photographs-and-pictures-image_816353.jpg',
        address: 'Some address 5, 12345 some city',
        description: 'This is a second meetup!'
    }
];

function HomePage(props) {
   return <MeetupList meetups={props.meetups} />
   }

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//         // fatch data from an API
//   return {
//     props:{
//         meetups:DUMMY_MEETUPS
//     }
//   };
// }


export async function getStaticProps(){
    // fatch data from an API
    return{
        props:{
            meetups: DUMMY_MEETUPS
        },
        revalidate:1
    }
}

export default HomePage;