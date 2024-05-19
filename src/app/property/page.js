"use client";
import NoProductsFound from "@/components/NoProductsFound";
import React, { useEffect, useState } from "react";
import { Slider, Spinner, Pagination } from "@nextui-org/react";
import Link from "next/link";
import FeaturedRoom from "@/components/FeaturedRoom";
import { RiFilterOffFill } from "react-icons/ri";
import { RiFilterFill } from "react-icons/ri";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import PropertyAddForm from "@/components/PropertyAddForm";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
const Property = () => {
  const [value, setValue] = React.useState([5, 60000000]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: session } = useSession();
  const [categoryArray] = useState([
    "All",
    "Apartment",
    "Condo",
    "House",
    "Cabin Or Cottage",
    "Room",
    "Studio",
    "Other",
  ]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState(true);
  const [filteredProperty, setFilteredProperty] = useState([]);
  const [page, setPage] = useState(1);
  const [propertyToShow, setPropertyToShow] = useState([]);
  const addProperty = () => {
    if (session) onOpen();
    else toast.error("You have to sign in to add property");
  };
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties`
        );
        console.log(res);
        // if (!res.ok) {
        //   throw new Error("Failed to fetch data");
        // }

        const data = await res.json();
        setProperties(data.properties);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [page]);
  useEffect(() => {
    setFilteredProperty(() =>
      properties?.filter((property) => {
        // Filter by price range
        const priceInRange =
          property.price >= value[0] && property.price <= value[1];

        // Filter by category (if not 'all' category)
        const categoryMatch =
          selectedCategory === "All" || property.type === selectedCategory;

        // Return true if both conditions are met
        return priceInRange && categoryMatch;
      })
    );
  }, [selectedCategory, value, properties]);
  useEffect(() => {
    let indexOfLastItem = page * 6;
    let indexOfFirstItem = indexOfLastItem - 6;
    setPropertyToShow(() =>
      filteredProperty?.slice(indexOfFirstItem, indexOfLastItem)
    );
  }, [page, filteredProperty]);
  useEffect(() => {
    setPage(1);
  }, [value]);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  else
    return (
      <div className="px-8 relative md:px-16 xl:px-20 pt-20  min-h-screen grid w-full grid-cols-4 gap-6">
        <div className="col-span-1 block lg:hidden">
          <div
            className="text-xl text-[#062338] flex hover:cursor-pointer items-center space-x-2 "
            onClick={() => setFilter((el) => !el)}
          >
            <h1 className="font-roboto font-medium text-black">Filter</h1>{" "}
            {filter ? <RiFilterOffFill /> : <RiFilterFill />}
          </div>
        </div>
        <div
          className={`absolute top-32 bg-white z-10 flex w-60 pt-0 p-12 pr-6 border-slate-200 border border-t-0 rounded-b-md shadow-md lg:hidden flex-col transform transition-transform duration-500 ease-in-out ${
            filter ? "translate-x-0" : "-translate-x-[400px]"
          }`}
        >
          <h1 className="font-roboto font-semibold text-[#062338] mb-2">
            Filter By Price (Nrs)
          </h1>
          <Slider
            disableThumbScale={true}
            showTooltip={true}
            size="md"
            step={100}
            maxValue={100000000}
            minValue={0}
            value={value}
            onChange={setValue}
            className="max-w-sm"
          />
          <h1 className="font-roboto font-semibold text-[#062338] mt-5 mb-2">
            Property Category
          </h1>
          <div className="flex flex-col w-full">
            {categoryArray.map((el, index) => (
              <h1
                key={index}
                onClick={() => {
                  setSelectedCategory((a) => el);
                  setPage(1);
                }}
                className={
                  selectedCategory == el
                    ? "text-[#254D4D] font-medium hover:cursor-pointer"
                    : "text-slate-400 hover:cursor-pointer"
                }
              >
                {el}
              </h1>
            ))}

            <Button
              className="mt-3"
              onPress={addProperty}
              size="sm"
              color="primary"
            >
              Add Property
            </Button>
          </div>
        </div>
        <div className="lg:col-span-1 max-w-64 lg:block hidden ">
          <div className="w-full  max-w-[170px] lg:max-w-56 xl:max-w-64 top-32 px-2">
            <h1 className="font-roboto font-semibold text-[#062338] mb-2">
              Filter By Price (Nrs)
            </h1>
            <Slider
              disableThumbScale={true}
              showTooltip={true}
              size="md"
              step={100}
              maxValue={100000}
              minValue={0}
              value={value}
              onChange={setValue}
              className="max-w-sm"
            />
            <h1 className="font-roboto font-semibold text-[#062338] mt-5 mb-2">
              Property Category
            </h1>
            <div className="flex flex-col w-full">
              {categoryArray.map((el, index) => (
                <h1
                  key={index}
                  onClick={() => {
                    setSelectedCategory((a) => el);
                    setPage(1);
                  }}
                  className={
                    selectedCategory == el
                      ? "text-[#254D4D] font-medium hover:cursor-pointer"
                      : "text-slate-400 hover:cursor-pointer"
                  }
                >
                  {el}
                </h1>
              ))}
              <Button
                className="mt-3"
                onPress={addProperty}
                size="sm"
                color="primary"
              >
                Add Property
              </Button>
            </div>
          </div>
        </div>
        {filteredProperty?.length == 0 && (
          <div className="col-span-4 lg:col-span-3 flex items-start mt-16 justify-center">
            <NoProductsFound />
          </div>
        )}
        {filteredProperty?.length > 0 && (
          <div className="lg:col-span-3 col-span-4 flex flex-col items-center space-y-10">
            <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-6 w-full">
              {console.log(propertyToShow, "ajhdasdkshbjahgsbjahdbasjd")}
              {propertyToShow?.map((info, index) => (
                <Link key={index} href={`/property/${info._id}`}>
                  <FeaturedRoom info={info} />
                </Link>
              ))}
            </div>
            {properties && (
              <Pagination
                variant="light"
                showControls
                radius="full"
                showShadow
                color="primary"
                page={page}
                total={Math.ceil(filteredProperty?.length / 6)}
                onChange={setPage}
              />
            )}
          </div>
        )}

        <Modal
          isDismissable={false}
          size="5xl"
          scrollBehavior="inside"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add Property
                </ModalHeader>
                <ModalBody>
                  <PropertyAddForm />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
};

export default Property;
