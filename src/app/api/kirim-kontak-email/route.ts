import { sendEmail } from "@/lib/mail-utils"

export async function POST(request:any) {
    const { sender, recipients, subject, message } = await request.json();

    try {
        const result = await sendEmail({
            sender,
            recipients,
            subject,
            message,
        });
        return new Response(JSON.stringify(result));
    } catch (error) {
        return new Response(JSON.stringify({ message: "gagal" }), { status: 500 });
    }
}
