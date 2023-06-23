import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import ImgUpload from "../components/ImgUpload";
import { Icons } from "../icons/Icons";

function UserDetails(props) {
	const [user, setUser] = useState();
	const [itemLen, setItemLen] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [personId, setPersonId] = useState();

	const [page, setPage] = useState(1);

	const pageCount = Math.ceil(itemLen?.length / 5);

	useEffect(() => {
		fetchApi();
		setIsLoading(false);
	}, [isLoading]);

	// --------------------------------------------------
	//  Fetching API data
	// --------------------------------------------------

	const fetchApi = async () => {
		try {
			const res = await axios.get(
				`http://localhost:5000/?page=${page}&limit=5`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (res.status === 200) {
				console.log(res);
				setUser(res.data.result);
				setItemLen(res.data.length[0]);
			} else {
				alert("Somthing went Wrong!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	// -----------------------------------------------
	//  page changing
	// -----------------------------------------------

	const handlePageClick = (event) => {
		setPage(event.selected + 1);
		console.log("hit");
		setIsLoading(true);
	};

	// -----------------------------------------------
	//  Delete data from api
	// -----------------------------------------------

	const handleDeleteApi = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:5000/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!(res.status === 200)) {
				alert("Something went wrong!");
			} else {
				setIsLoading(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	// const handleDecrement = () => {
	// 	if (page > 1) {
	// 		setPage(page - 1);
	// 		setIsLoading(true);
	// 		document.getElementById("next").disabled = false;
	// 	} else {
	// 		document.getElementById("prev").disabled = true;
	// 	}
	// };

	// const handleIncrement = () => {
	// 	if (page < pageCount) {
	// 		setPage(page + 1);
	// 		setIsLoading(true);
	// 		document.getElementById("prev").disabled = false;
	// 	} else {
	// 		document.getElementById("next").disabled = true;
	// 	}
	// };

	// console.log(user);

	return (
		<div className="container mt-5">
			<h2>Users List</h2>

			<hr className="mb-0 mt-4" />
			<table className="table table-striped shadow-sm p-3 mb-5 bg-body rounded">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Name</th>
						<th scope="col">Mobile</th>
						<th scope="col">E-mail</th>
						<th scope="col">Pan Number</th>
						<th scope="col">Aadhar number</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{user?.map((person) => (
						<tr key={person.id}>
							<th scope="row">
								<Link
									data-bs-toggle="modal"
									data-bs-target="#imgUpload"
									onClick={() => setPersonId(person.id)}>
									{person.id}
								</Link>
							</th>
							<td>{person.name}</td>
							<td>{person.mobile}</td>
							<td>{person.email}</td>
							<td>{person.pan}</td>
							<td>{person.adhar}</td>
							<td>
								<button
									type="button"
									className="btn btn-danger btn-sm"
									onClick={() => handleDeleteApi(person.id)}>
									{Icons.delete}
								</button>
							</td>

							<td>
								<Link to={`/individual/${person.id}`}>
									<button type="button" className="btn btn-warning">
										View
									</button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* -------------------------------
				Pagination part
			----------------------------------- */}

			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				initialPage={0}
				pageRangeDisplayed={2}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				containerClassName={"pagination justify-content-center"}
				pageClassName={"page-item"}
				pageLinkClassName={"page-link"}
				previousClassName={"page-item"}
				previousLinkClassName={"page-link"}
				nextClassName={"page-item"}
				nextLinkClassName={"page-link"}
				breakLinkClassName={"page-link"}
				activeClassName={"active"}
				disabledClassName={"disabled"}
			/>

			{/* <nav aria-label="Page navigation example">
				<ul className="pagination justify-content-center">
					<li className="page-item">
						<button
							className="page-link"
							id="prev"
							onClick={() => handleDecrement()}>
							Previous
						</button>
					</li>
					
					<li className="page-item">
						<button
							className="page-link"
							id="next"
							onClick={() => handleIncrement()}>
							Next
						</button>
					</li>
				</ul>
			</nav> */}

			<ImgUpload id={personId} />
		</div>
	);
}

export default UserDetails;
