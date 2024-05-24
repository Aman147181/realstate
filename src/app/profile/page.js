"use client";
import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Spinner,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const Profile = () => {
  const { data: session, status } = useSession();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }

      try {
        const res = await fetch(`/api/Properties/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch user properties when session is available
    if (session?.user?.id) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/Properties/${propertyId}`, {
        method: "DELETE",
      });
      console.log(res);

      if (res.status === 200) {
        // Remove the property from state
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyId
        );

        setProperties(updatedProperties);

        toast.success("Property Deleted");
      } else {
        toast.error("Failed to delete property");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  if (status === "loading")
    return (
      <div className="min-h-screen flex w-full items-center justify-center">
        <Spinner color="primary" size="lg" />
      </div>
    );
  else
    return (
      <div className="flex flex-col w-full min-h-screen px-3 py-20 pb-10 bg-white ">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center w-full px-5 space-x-0 mobile:flex-row mobile:space-x-6 sm:space-x-10 mobile:items-center mobile:justify-center">
            <div className="border-2 rounded-full min-w-24 min-h-24 max-w-28 max-h-28 md:min-w-28 md:max-w-36 md:max-h-36 md:min-h-28 border-slate-50">
              <img
                className="object-cover object-center w-full rounded-full"
                src={session?.user?.image}
                alt="Your Image"
              />
            </div>
            <div className="flex flex-col items-center justify-center px-2 pb-5 mobile:items-start ">
              <h1 className="text-base font-semibold text-black sm:text-lg font-poppins ">
                {session?.user?.name}
              </h1>
              <div className="flex items-center justify-center space-x-1 text-gray-600">
                <h1 className="text-base">{session?.user?.email}</h1>
              </div>

              <div className="flex mt-5 space-x-5 text-gray-600">
                <h1>
                  <span className="text-black font-semibold pr-[2px]">0</span>{" "}
                  Bookmarks
                </h1>
                <h1>
                  {" "}
                  <span className="text-black font-semibold pr-[2px]">
                    {properties.length}
                  </span>{" "}
                  Properties
                </h1>
              </div>
            </div>
          </div>

          <Tabs
            variant="underlined"
            fullWidth
            size="lg"
            placement="center"
            aria-label="Options"
            className="mt-10 "
            color="primary"
          >
            <Tab key="Bookmarks" title="Bookmarks">
              <div className="flex flex-col items-center justify-center w-full ">
                <h1 className="font-mono text-lg pt-6 sm:text-2xl text-sky-900 font-bold">
                  You have no bookmarks!
                </h1>
              </div>
            </Tab>
            <Tab key="Property" title="My Properties">
              {!loading && properties.length === 0 && (
                <div className="flex w-full items-center justify-center h-96">
                  <p>You have no property listings</p>
                </div>
              )}

              {loading ? (
                <div className="flex w-full items-center justify-center h-96">
                  <Spinner loading={loading} />{" "}
                </div>
              ) : (
                <div className="grid w-full px-3 mobile:px-6 sm:px-12 md:px-20 lg:px-0 pt-10 grid-cols-1 gap-10 lg:grid-cols-2 ">
                  {properties.map((info) => (
                    <div
                      key={info._id}
                      className={`flex flex-col  item-center w-full justify-start space-y-5 ${montserrat.className}`}
                    >
                      <div className="overflow-hidden">
                        <Link href={`/property/${info._id}`}>
                          <img
                            radius="none"
                            className="max-h-72 min-h-72 object-cover w-full scale-125 hover:scale-100 hover:rounded-[20px] transition-all duration-500 ease-in-out "
                            alt="Featured Room"
                            src={info.images[0]}
                          />
                        </Link>
                      </div>

                      <div className="grid grid-cols-9 ">
                        <div className="flex col-span-4 flex-col justify-start items-start">
                          <h1 className="font-bold text-xl">{info.name}</h1>
                          <h1 className="text-slate-700 text-lg">
                            {info.type}
                          </h1>
                        </div>
                        <div className="flex flex-col col-span-4 justify-start items-end">
                          <h1 className="font-bold text-xl">
                            Nrs. {info.price}
                          </h1>
                          <h1 className="text-slate-700 text-lg">
                            {info.location.city}
                          </h1>
                        </div>
                        <div className="flex col-span-1  flex-grow items-start pt-1 justify-end">
                          <Dropdown>
                            <DropdownTrigger>
                              <button className="focus:outline-none ">
                                <BsThreeDotsVertical />
                              </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                              <DropdownItem key="view">View</DropdownItem>

                              <DropdownItem key="edit">
                                <Link href={`/property/${info._id}/edit`}>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                                onClick={() => handleDeleteProperty(info._id)}
                              >
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Tab>
            <Tab key="Messages" title="Messages">
              <div className="flex flex-col items-center justify-center w-full ">
                <h1 className="font-mono text-lg pt-6 sm:text-2xl text-sky-900 font-bold">
                  You have no messages!
                </h1>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
};

export default Profile;
