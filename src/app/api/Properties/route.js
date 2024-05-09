import { connectDB } from "@/config/connectDB";
import { Property } from "@/models/Property";
export const GET = async (request) => {
    try {
        await connectDB();
        const properties = await Property.find({});
        return new Response(JSON.stringify(properties), { status: 200 });
    } catch (error) {
        
    }
}