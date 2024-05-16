import { connectDB } from "@/config/connectDB";
import Property from "@/models/Property";
import { getSessionUser } from "@/config/getSessionUser";
import cloudinary from "@/config/cloudinary";

export const POST = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    const formData = await request.formData();

    // Access all values from amenities and images
    const amenities = formData.getAll("amenities");

    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");

    // Create propertyData object for database
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      google: formData.get("google"),
      baths: formData.get("baths"),
      area: formData.get("area"),
      price: formData.get("price"),
      amenities,

      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };

    // Upload image(s) to Cloudinary
    const imageUploadPromises = [];

    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString("base64");

      // Make request to upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "Realstate",
        }
      );

      imageUploadPromises.push(result.secure_url);

      // Wait for all images to upload
      const uploadedImages = await Promise.all(imageUploadPromises);
      // Add uploaded images to the propertyData object
      propertyData.images = uploadedImages;
    }
    console.log(propertyData);
    const newProperty = new Property(propertyData);
    await newProperty.save();
    console.log(newProperty);
    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/property/${newProperty._id}`
    );
  } catch (error) {
    return new Response("Failed to add property", error, { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await connectDB();

    const total = await Property.countDocuments({});
    console.log(total);
    const pageSize = total > 3 ? 3 : total;
    const properties = await Property.find({}).limit(pageSize);

    const result = {
      properties,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong",error, { status: 500 });
  }
};
