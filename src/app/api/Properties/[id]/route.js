import { connectDB } from "@/config/connectDB";
import Property from "@/models/Property";
export const GET = async (request, { params }) => {
    try {
      await connectDB();
  
      const property = await Property.findById(params.id);
  console.log(property)
      if (!property) return new Response('Property Not Found', { status: 404 });
  
      return new Response(JSON.stringify(property), {
        status: 200,
      });
    } catch (error) {
      console.log(error);
      return new Response('Something Went Wrong', { status: 500 });
    }
  };