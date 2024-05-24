import { connectDB } from "@/config/connectDB";
import Property from "@/models/Property";

export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find();
    const result = {
      properties,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching properties:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
