import React, { useState } from "react";
import { Icons } from "../icons/Icons";

function ImgUpload(props) {
	const [img, setImg] = useState();

	console.log("img---", img);

	const handleSubmit = (e) => {};
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
						<form onSubmit={(e) => handleSubmit(e)} action="">
							<div>
								<label htmlFor="formFileLg" className="form-label">
									Please upload image of Aadhar
								</label>
								<div class="border border-warning rounded" id="img" type="file">
									<div className="m-4">
										<input
											className="form-control border border-warning form-control-sm"
											id="img"
											type="file"
											onChange={(e) => setImg(e.target.files[0])}
										/>
										<h5 className="text-warning mt-3 mb-3">Or Drag It Here</h5>
									</div>
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
