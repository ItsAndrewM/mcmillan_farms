// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import sgClient from "@sendgrid/client";
import sgMail from "@sendgrid/mail";

sgClient.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
	const { email, name, subject, message } = await request.json();

	try {
		// Add contact to list
		await sgClient.request({
			method: "PUT",
			url: "/v3/marketing/contacts",
			body: {
				list_ids: [process.env.SENDGRID_LIST_ID],
				contacts: [{ email }],
			},
		});

		// Send thank you email
		const mailData = {
			to: "rc_mcmillan@shaw.ca",
			replyTo: String(email),
			from: process.env.SENDGRID_FROM_EMAIL, // Your verified sender email
			templateId: process.env.SENDGRID_CONTACT_FORM_TEMPLATE_ID,

			dynamicTemplateData: {
				name: name,
				email: email,
				message: message,
				subject: subject,
			},
		};

		await sgMail.send(mailData);

		return NextResponse.json(
			{
				message: "Subscribed successfully and thank you email sent",
				success: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error in subscription process", error);
		return NextResponse.json(
			{ error: "Error in subscription process", success: false },
			{ status: 500 }
		);
	}
}
