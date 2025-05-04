import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Table } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users",{
        headers:{
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
     
      return res.data;
    },
  });
  const handleMakeAdmin =(user)=>{
    axiosSecure.patch (`/users/admin/${user._id}`)
 .then(res=>{
  if(res.data.modifiedCount > 0){
    refetch();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${user.name} is an Admin Now!`,
      showConfirmButton: false,
      timer: 1500
    });
  }
 })
  }
  const handleDeleteUser = (user)=>{
     Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/users/${user._id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });

  }
  

  
  return (
    <div>
      <div>
        
        <SectionTitle
          subTitle="---How Many---"
          mainTitle="MANAGE ALL USER"
        ></SectionTitle>
      </div>
     

      <div className="shadow p-3">
      <h3 className="pb-3">TOTAL USERS: {users.length}</h3>
        <Table className="w-100" bordered responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {user.role === 'admin'? 'Admin' : <button
                     onClick={() => handleMakeAdmin(user)}
                    style={{ backgroundColor: "orange", border: 0 }}
                  >
                    <FaUsers
                      style={{ height: "25px", width: "24px", color: "#fff" }}
                    />
                  </button>}

                </td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    style={{ backgroundColor: "red", border: 0 }}
                  >
                    <RiDeleteBin6Line
                      style={{ height: "25px", width: "24px", color: "#fff" }}
                    />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllUsers;
