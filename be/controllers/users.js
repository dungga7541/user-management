import {v4 as uuid} from 'uuid';

let users=[];

export const getUsers =async(req,res)=>{
    res.send(users);
}

export const createUsers =async(req,res)=>{
    const user=req.body;
    users.push({...user,id: uuid()});
    res.send("User Add successfully")

}

export const getUser=(req,res)=>{
    const singleUser =users.filter ((user)=> user.id === req.params.id);
    res.send(singleUser)
}

export const deleteUser=(req,res)=>{
    users =users.filter ((user)=> user.id !== req.params.id);
    res.send("User Delete Success")
}

export const updateUser= async(req,res)=>{
    const user = users.find((user)=> user.id === req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;

    res.send("User Update successfully");
}