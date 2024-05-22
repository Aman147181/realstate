
import { Montserrat, Roboto_Condensed, Dancing_Script } from "next/font/google";
import FeaturedRoom from "./FeaturedRoom";
import Link from "next/link";
export const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});
export const dance = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// const fetchProperties = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`);
//     console.log(res);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function Property() {
  const property ={
    properties: [
      {
        location: {
          street: "hetauda",
          city: "hetauda",
          state: "bagmati",
          zipcode: "44100"
        },
        seller_info: {
          name: "Aman Shrestha",
          email: "aman.752417@thc.tu.edu.np",
          phone: "9823576445"
        },
        _id: "66436100cc3f9dadf106396b",
        owner: "663d0219e23fe7c4e8605887",
        name: "Mountain View Condos",
        type: "Apartment",
        description: "Nestled in the heart of nature, this property offers a retreat from the hustle and bustle of city life. This exquisite villa boasts stunning panoramic views of lush greenery and serene waters, creating an oasis of tranquility. The spacious interior features luxurious amenities, including a gourmet kitchen, expansive living areas, and elegant bedrooms with en-suite bathrooms.",
        beds: 4,
        baths: 2,
        area: 1212,
        amenities: [
          "Full Kitchen",
          "Swimming Pool"
        ],
        price: 11999999,
        images: [
          "https://res.cloudinary.com/realstate/image/upload/v1715691775/Realstate/sp0evobp6xute9o837j2.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715691772/Realstate/qhmrerl3ipra6qlhuqoa.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715691771/Realstate/sayqcvs7pcozkmiu5mjt.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715691773/Realstate/rsypkwvsr0dqj91e1waq.jpg",
          
        ],
        is_featured: false,
        createdAt: "2024-05-14T13:02:56.557Z",
        updatedAt: "2024-05-14T13:02:56.557Z",
        __v: 0
      },
      {
        location: {
          street: "this street",
          city: "london",
          state: "britain",
          zipcode: "23231"
        },
        seller_info: {
          name: "Aman Shrestha",
          email: "aman.752417@thc.tu.edu.np",
          phone: "9823576415"
        },
        _id: "66464e878101d3a52207c8bf",
        owner: "663d0219e23fe7c4e8605887",
        name: "beautiful apartment in london",
        type: "Apartment",
        description: "Nestled in the heart of nature, this property offers a retreat from the hustle and bustle of city life. This exquisite villa boasts stunning panoramic views of lush greenery and serene waters, creating an oasis of tranquility. The spacious interior features luxurious amenities, including a gourmet kitchen, expansive living areas, and elegant bedrooms with en-suite bathrooms.",
        google: "https://maps.app.goo.gl/PKsis7FcePEPCG9N8",
        beds: 2,
        baths: 3,
        area: 12000,
        amenities: [
          "Swimming Pool",
          "Elevator Access",
          "Gym/Fitness Center",
          "Smart TV"
        ],
        price: 1200000,
        images: [
          "https://res.cloudinary.com/realstate/image/upload/v1715883647/Realstate/wevqkrfb4s8mbfyuzarn.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715883649/Realstate/wzqtva4z6plnv9gzizva.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715883650/Realstate/gztvjnmowxfsb7485c2z.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715883654/Realstate/ylw5bayj7yfu5rmlnzpf.jpg"
        ],
        is_featured: false,
        createdAt: "2024-05-16T18:20:55.311Z",
        updatedAt: "2024-05-16T18:20:55.311Z",
        __v: 0
      },
      {
        location: {
          street: "hetauda",
          city: "hetauda",
          state: "bagmati",
          zipcode: "44100"
        },
        seller_info: {
          name: "Roshan Subedi",
          email: "roshan.232123@thc.tu.edu.np",
          phone: "9898982312"
        },
        _id: "66464f168101d3a52207c8c8",
        owner: "663d0219e23fe7c4e8605887",
        name: "Astonishing Furnished Room",
        type: "Room",
        description: "Nestled in the heart of nature, this property offers a retreat from the hustle and bustle of city life. This exquisite villa boasts stunning panoramic views of lush greenery and serene waters, creating an oasis of tranquility. The spacious interior features luxurious amenities, including a gourmet kitchen, expansive living areas, and elegant bedrooms with en-suite bathrooms.",
        google: "https://maps.app.goo.gl/PKsis7FcePEPCG9N8",
        beds: 3,
        baths: 2,
        area: 12121,
        amenities: [
          "Wifi",
          "Wheelchair Accessible",
          "Elevator Access",
          "Balcony/Patio"
        ],
        price: 12000,
        images: [
          "https://res.cloudinary.com/realstate/image/upload/v1715883790/Realstate/quvlbyvkj3rdwt1oqpcg.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715883791/Realstate/yv4olegttopkjiiafpu2.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715883793/Realstate/tbrjupmwe8kkowwoxewa.jpg",
          "https://res.cloudinary.com/realstate/image/upload/v1715883798/Realstate/a3o6wlk0o0l6ijcuh4ca.jpg"
        ],
        is_featured: false,
        createdAt: "2024-05-16T18:23:18.997Z",
        updatedAt: "2024-05-16T18:23:18.997Z",
        __v: 0
      }
    ]
  }
 
 
  return (
    <div>
      <div className="grid px-5 sm:px-20 md:px-20 lg:px-24 gap-12 gap-y-6  lg:grid-cols-3 grid-cols-1">
        <div className="flex font-medium flex-col space-y-3 col-span-1 lg:col-span-2 item-start justify-start">
          <h1 className={`text-sm uppercase ${mont.className}`}>
            Let us help you find your dream home
          </h1>
          <h1 className={`text-5xl md:text-6xl xl:text-7xl  ${mont.className}`}>
            Our <span className="text-orange-700">Properties</span> List
          </h1>
        </div>
        <div className="flex col-span-1 text-xl item-start justify-start lg:justify-center">
          <h1 className={roboto.className}>
            From lavish estates with stunning views to modern penthouses <br />
            with state-of-the-art amenities.
            <br />
            We offer a diverse selection of luxury
            <br /> properties tailored to
            <br /> your lifestyle.
          </h1>
        </div>
      </div>
      <div className="grid pb-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-10 sm:gap-16 md:gap-12 lg:gap-10 gap-y-12 px-5 sm:px-20 md:px-20 lg:px-24">
        {property.properties?.map((info, index) => (
          <Link key={index} href={`/property/${info._id}`}>
            <FeaturedRoom info={info} />
          </Link>
        ))}
      </div>
      <Link href="/property">
        <h1
          className={`uppercase pl-5 sm:pl-20 md:pl-20 mb-10 inline-block  hover:text-orange-700 lg:pl-24 text-black text-xl font-bold ${mont.className}`}
        >
          see all properties
        </h1>
      </Link>
    </div>
  );
}
