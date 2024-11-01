// /api/clerk/webhook

import { db } from "@/server/db";

export const POST = async (req: Request) => {
    const data = await req.json();
    console.log("Clerk Webhook Received", data.data);
    

    const emailAddress = data.data.email_addresses[0].email_address;
    const firstName  = data.data.first_name;
    const lastName = data.data.last_name;
    const imageUrl = data.data.image_url;
    const id = data.data.id;

    await db.user.create({
        data: {
            id: id,
            emailAddress: emailAddress,
            firstName: firstName,
            lastName: lastName,
            imageUrl: imageUrl
        }
    })


    return new Response("Webhook Received", { status: 200 });
}