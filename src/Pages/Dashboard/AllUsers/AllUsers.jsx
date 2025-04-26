import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Table } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = ()=>{
    
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
            {users.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
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
