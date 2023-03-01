import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { updateSchema } from "../schemas/validUpdate";

function UpdateModal(props) {
	const { id } = useParams();
	const navigate = useNavigate();

	const [user, setUser] = useState();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:4000/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (res.status === 200) {
				setUser(res.data[0]);
			} else {
				alert("something went wrog!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const initialValues = {
		name: user?.name,
		mobile: user?.mobile,
		pan: user?.pan,
	};

	// console.log("user-->", user);

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			enableReinitialize: true,
			validationSchema: updateSchema,
			onSubmit: async (values, action) => {
				console.log(values);
				try {
					const res = await axios.put(
						`http://localhost:4000/${id}`,
						{
							name: values.name,
							mobile: values.mobile,
							pan: values.pan,
						},
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					);
					console.log(res);
					if (res.status === 200) {
						window.location = `/individual/${id}`;
					} else {
						alert("Something went wrong!!!");
					}
				} catch (error) {
					console.log(error);
				}
				action.resetForm();
			},
		});

	return (
		<div className="modal fade" tabIndex={-1} id="updateModal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Update Data</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div className="modal-body">
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
								{/* {errors.name && touched.name ? (
									<p className="form-error">{errors.name}</p>
								) : null} */}
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
								{/* {errors.mobile && touched.mobile ? (
									<p className="form-error">{errors.mobile}</p>
								) : null} */}
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
								{/* {errors.pan && touched.pan ? (
									<p className="form-error">{errors.pan}</p>
								) : null} */}
							</div>

							<div className="d-flex justify-content-end">
								<button type="submit" className="btn btn-warning ms-3">
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UpdateModal;
