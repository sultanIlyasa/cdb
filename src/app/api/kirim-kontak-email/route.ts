import { sendEmail, SendEmailTo } from "@/lib/mail-utils";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const sender = JSON.parse(formData.get("sender") as string);
    const recipients = JSON.parse(formData.get("recipients") as string);
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const attachments = await Promise.all(
      (formData.getAll("attachment") as File[]).map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const emailData: SendEmailTo = {
      sender,
      recipients,
      subject,
      message,
      attachment: attachments,
    };

    const result = await sendEmail(emailData);

    return new Response(JSON.stringify(result));
  } catch (error) {
    return new Response(JSON.stringify({ message: "gagal" }), { status: 500 });
  }
}
