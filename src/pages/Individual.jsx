import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import UpdateModal from "../components/UpdateModal";
import { Icons } from "../icons/Icons";

function Individual(props) {
	const { id } = useParams();
	const [user, setUser] = useState();

	useEffect(() => {
		fetchApi(id);
	}, []);

	const fetchApi = async (id) => {
		try {
			const res = await axios.get(`http://localhost:4000/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (res.status === 200) {
				setUser(res.data[0]);
			} else {
			}
		} catch (error) {
			console.log(error);
		}
	};

	// -----------------------------------------------
	//  Delete data from api
	// -----------------------------------------------

	const handleDeleteApi = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:4000/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!(res.status === 200)) {
				alert("Something went wrong!");
			} else {
				window.location = "/";
			}
		} catch (error) {
			console.log(error);
		}
	};

	// console.log(user);

	return (
		<div className="container d-flex justify-content-center mt-2">
			{!user ? (
				<div>Loading ...</div>
			) : (
				<div className="card mt-5 col-8 shadow-lg p-3 mb-5 bg-body rounded">
					<div className="card-body">
						<div className="d-flex flex-column">
							<div className="d-flex justify-content-center">
								{Icons.person}
							</div>
							<div className="d-flex justify-content-center">
								<h2 className="card-title">{user?.name}</h2>
							</div>
							<div className="d-flex justify-content-evenly">
								<div className="d-flex flex-column">
									<h6 className="card-subtitle mt-4 mb-2 text-muted">
										{Icons.call} Mobile No.: {user?.mobile}
									</h6>
									<p className="card-subtitle mt-2 mb-4 text-muted">
										{Icons.email} E-mail: {user?.email}
									</p>
								</div>

								<div className="d-flex flex-column">
									<p className="card-subtitle mt-4 mb-2 text-muted">
										{Icons.pan} PAN Card No.: {user?.pan}
									</p>
									<p className="card-subtitle mt-2 mb-4 text-muted">
										{Icons.aadhar} Aadhaar: {user?.adhar}
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-center mb-2">
								<button
									type="button"
									className="btn btn-warning me-3"
									data-bs-toggle="modal"
									data-bs-target="#updateModal">
									{Icons.update} Update
								</button>
								<button
									type="button"
									className="btn btn-danger me-3 ms-3"
									onClick={() => handleDeleteApi(id)}>
									{Icons.delete} Delete User
								</button>
								<Link to="/">
									<button type="button" className="btn btn-secondary ms-3">
										{Icons.back} Back
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}

			<UpdateModal />
		</div>
	);
}

export default Individual;
