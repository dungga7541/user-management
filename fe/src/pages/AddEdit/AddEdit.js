import React, { useState,useEffect } from 'react';
import { useHistory, useLocation,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "./AddEdit.js.scss";
const initialState = {
	name: "",
	email: "",
	contact: "",
};
const AddEdit = () => {

	const navigate=useNavigate();
	const [state, setState] = useState(initialState);
	const {name,email,contact}= initialState;

	const {id}= useParams();
	const addUser = async (data)=>{
		const response =await axios.post("http://localhost:9000/user",data)
		if(response.status === 200){
			toast.success(response.data);
		}
	};
	useEffect(()=>{
		if(id){
			getSingleUser(id);
		}
	},[id]);

	const getSingleUser = async (id)=>{
		const response =await axios.get(`http://localhost:9000/user/${id},`);
		if(response.status === 200){
			setState({...response.data[0]});
		}
	};
	const updateUser=async (data,id)=>{
		const response =await axios.put(`http://localhost:9000/user/${id}`,data)
		if(response.status === 200){
			toast.success(response.data);
		}
	}

	const handleInputChange=(e)=>{
		let {name ,value} =e.target;
		setState({...state,[name]:value})
		
	}
	const handleSubmit= (e) => {
		e.preventDefault();
		if(!state.name || !state.email || !state.contact){

			toast.error("Please Provider value into each input field.");
		}else{
			if(!id){
				addUser(state);
			}else{
				updateUser(state,id)
			}
			setTimeout(()=>navigate("/"),500);
		}
		navigate("/");
	}
	


	return (
		<div className='addEdit'>
			<form>
				<label htmlFor='name'>Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter Name..."
					onChange={handleInputChange}
					defaultValue={name}
				/>
				<label htmlFor='name'>Email</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Enter email..."
					onChange={handleInputChange}
					defaultValue={email}
				/>
				<label htmlFor='name'>Contact</label>
				<input
					type="text"
					id="contact"
					name="contact"
					placeholder="Enter contact..."
					onChange={handleInputChange}
					defaultValue={contact}
				/>
				<input type="submit" value={id?"Update":"Add"} onClick={handleSubmit}/>
			</form>
		</div>
	);
};

export default AddEdit;