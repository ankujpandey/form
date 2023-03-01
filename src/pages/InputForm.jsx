import React from "react";
import { Icons } from "../icons/Icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { submitSchema } from "../schemas";
import axios from "axios";

const initialValues = {
	name: "",
	mobile: "",
	email: "",
	pan: "",
	aadhaar: "",
};

function InputForm(props) {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: submitSchema,
			onSubmit: async (values, action) => {
				console.log(values);
				try {
					const res = await axios.post(
						"http://localhost:4000/",
						{
							name: values.name,
							mobile: values.mobile,
							email: values.email,
							pan: values.pan,
							adhar: values.aadhaar,
						},
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					);
					console.log(res);
					if (res.status === 200) {
						window.location = "/";
					} else {
						alert("Something went wrong!!!");
					}
				} catch (error) {
					console.log(error);
				}
				action.resetForm();
			},
		});

	console.log(errors);

	// console.log("formic data----", formik);

	return (
		<div className="container d-flex flex-column align-items-center mt-3">
			<h2>Add User</h2>
			<div className="card mt-2 col-7	shadow-lg p-3 mb-5 bg-body rounded mb-3">
				<div className="container mt-3 mb-3">
					<form onSubmit={handleSubmit} action="">
						<div className="mb-2">
							<label htmlFor="name" className="form-label">
								Full Name
							</label>
							<input
								type="name"
								className="form-control"
								id="name"
								placeholder="Full Name"
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.name && touched.name ? (
								<p className="form-error">{errors.name}</p>
							) : null}
						</div>

						<div className="mb-3">
							<label htmlFor="mobile" className="form-label">
								Mobile No.
							</label>
							<input
								type="mobile"
								className="form-control"
								id="mobile"
								placeholder="9876543210"
								value={values.mobile}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.mobile && touched.mobile ? (
								<p className="form-error">{errors.mobile}</p>
							) : null}
						</div>

						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email Address
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="name@gmail.com"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.email && touched.email ? (
								<p className="form-error">{errors.email}</p>
							) : null}
						</div>

						<div className="mb-3">
							<label htmlFor="pan" className="form-label">
								Pan Card No.
							</label>
							<input
								type="pan"
								className="form-control"
								id="pan"
								placeholder="ABCDE23423"
								value={values.pan}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.pan && touched.pan ? (
								<p className="form-error">{errors.pan}</p>
							) : null}
						</div>

						<div className="mb-3">
							<label htmlFor="aadhaar" className="form-label">
								Aadhaar No.
							</label>
							<input
								type="aadhaar"
								className="form-control"
								id="aadhaar"
								placeholder="000000000000"
								value={values.aadhaar}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.aadhaar && touched.aadhaar ? (
								<p className="form-error">{errors.aadhaar}</p>
							) : null}
						</div>

						<div className="d-flex justify-content-end">
							<button type="submit" className="btn btn-warning ms-3">
								{Icons.addUser} Add User
							</button>
							<Link to="/">
								<button type="button" className="btn btn-secondary ms-3 me-3">
									{Icons.back} Back
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default InputForm;
