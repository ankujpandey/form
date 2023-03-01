import * as Yup from "yup";

export const updateSchema = Yup.object({
	name: Yup.string().min(2).max(80).required("Name should not be empty!"),
	mobile: Yup.string()
		.matches(/([6-9]){1}([0-9]){9}$/, "please enter a valid phone number.")
		.max(10)
		.required("Mobile should not be empty!"),
	pan: Yup.string()
		.matches(
			/([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
			"Please provide valid Pan number."
		)
		.required("Pan should not be empty!"),
});
