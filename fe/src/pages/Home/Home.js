import React,{useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom";
import "./Home.scss";
import axios from "axios";
import { toast } from 'react-toastify';

const Home = () => {
	const [data,setData]=useState([]);
	const {id} =useParams();
	useEffect(()=>{
		getUsers();
	},[]);

	const getUsers=async()=>{
		const response=await axios.get("http://localhost:9000/users");
		if(response.status === 200){
			setData(response.data);
		}
	};
	const onDeleteUser = async (id) =>{
		if(window.confirm("Are you sure you want to delete?")){
			const response=await axios.delete(`http://localhost:9000/user/${id}`);
			if(response.status === 200){
				toast.success(response.data);
				getUsers();
			}
		}
	};
	return (
		<div className='home'>
			<table>
				<thead>
					<tr>
						<th>No.</th>
						<th>Name</th>
						<th>Email</th>
						<th>Contact</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data&& data.map((item,index)=>{
						return(
							<tr key ={index}>
								<th scope="row">{index+1}</th>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.contact}</td>
								<td>
									<Link to={`/update/${item.id}`}>
										<button className="btn btnEdit">
											Edit
										</button>
									</Link>
									<button className="btn btnDelete" onClick={()=>onDeleteUser(item.id)}> Delete</button>

								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
};
			
export default Home;