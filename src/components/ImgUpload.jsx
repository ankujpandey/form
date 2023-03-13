import axios from "axios";
// import React, { useState } from "react";
import { Icons } from "../icons/Icons";

function ImgUpload(props) {
	const { id } = props;
	// const [file, setFile] = useState([]);
	let formData = new FormData();

	console.log("id---", id);
	// console.log("images---", file);

	const handleSubmit = async (e) => {
		// formData.append("user_file", file[0]);
		// formData.append("user_file", file[1]);
		try {
			await axios.post(`http://localhost:4000/uploadImage/${id}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		} catch (error) {
			console.log(error);
		}
		window.location = "/";
	};

	return (
		<div className="modal fade" tabIndex={-1} id="imgUpload">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Upload Aadhaar</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div className="modal-body">
						<form onSubmit={(e) => handleSubmit(e)} action="#">
							<div>
								<label htmlFor="img1" className="form-label">
									Please upload Front image of Aadhaar
								</label>

								<div>
									<input
										className="form-control border border-warning form-control-sm"
										id="img1"
										name="img1"
										type="file"
										onChange={(e) => {
											formData.append("user_file", e.target.files[0]);
											// setFile([...file, e.target.files[0]]);
										}}
									/>
								</div>

								<label htmlFor="img2" className="form-label mt-3">
									Please upload Back image of Aadhaar
								</label>
								<div>
									<input
										className="form-control border border-warning form-control-sm"
										id="img2"
										name="img2"
										type="file"
										onChange={(e) => {
											formData.append("user_file", e.target.files[0]);
											// setFile([...file, e.target.files[0]]);
										}}
									/>
								</div>

								<label htmlFor="img3" className="form-label mt-3">
									Please Upload Your Photo
								</label>

								<div>
									<input
										className="form-control border border-warning form-control-sm"
										id="img3"
										name="img3"
										type="file"
										onChange={(e) => {
											formData.append("user_file", e.target.files[0]);
											// setFile([...file, e.target.files[0]]);
										}}
									/>
								</div>
							</div>

							<div className="d-flex justify-content-start mt-3">
								<button type="submit" className="btn btn-warning">
									{Icons.upload} Upload
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImgUpload;
