import sgClient from "@sendgrid/client";
import sgMail from "@sendgrid/mail";

sgClient.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(request, response) {
	const data = await request.body;
	console.log(data);
	const { email, fullName, subject, message } = await request.body;

	try {
		// Add contact to list
		// await sgClient.request({
		// 	method: "PUT",
		// 	url: "/v3/marketing/contacts",
		// 	body: {
		// 		list_ids: [process.env.SENDGRID_LIST_ID],
		// 		contacts: [{ email }],
		// 	},
		// });

		// Send thank you email
		const mailData = {
			to: process.env.SENDGRID_TO_EMAIL,
			replyTo: String(email),
			from: process.env.SENDGRID_FROM_EMAIL, // Your verified sender email
			templateId: process.env.SENDGRID_CONTACT_FORM_TEMPLATE_ID,

			dynamicTemplateData: {
				name: fullName,
				email: email,
				message: message,
				subject: subject,
			},
		};

		await sgMail.send(mailData);

		return response.json(
			{
				message: "Subscribed successfully and thank you email sent",
				success: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error in subscription process", error.response.body.errors);
		return response.json(
			{ error: "Error in subscription process", success: false },
			{ status: 500 }
		);
	}
}
