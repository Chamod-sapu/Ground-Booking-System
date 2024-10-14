import { useEffect, useState } from "react";
import GroundCard from "../Components/GroundCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

function ListOfGrounds() {
  const [grounds, setGrounds] = useState([]);
  const [gId, setGid] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    function getGrounds() {
      axios.get(`${backendUrl}/Ground/`).then((res) => {
        setGrounds(res.data);
        console.log(res.data);
      }).catch((err) => {
        alert(err.message);
      });
    }
    getGrounds();
  }, []);

  const handleGroundClick = async (groundId) => {
    setGid(groundId);
    localStorage.setItem('gId', groundId);
    navigate("/grounddetails");
  };

  console.log(gId);

  return (
    <div className="w-[1330px] mt-28 ml-10">
      <div className="grid grid-cols-4 gap-[44px] ">
        {
          grounds.map((el) => {
            return (
              <GroundCard 
                key={el._id}
                nm={el.name}
                sprt={el.sport}
                lct={el.location}
                cap={el.capacity}
                img={el.image}
                prc={el.price}
                index={el.index}
                onClick={() => handleGroundClick(el._id)}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default ListOfGrounds;
