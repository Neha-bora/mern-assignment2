import React, { useEffect, useState } from "react"
import Base from "../core/base";
import Card from "./card";
import { getaUser, getuserList } from "./Hepler/userapicall";


const Users = ({histroy}) =>{

  
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
 
  const loadAllUser= () => {
     getuserList().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
          setItems(data);
      }
    });
  };

  useEffect(() => {
      loadAllUser ();
  }, []);



    return(
      <Base>
      <Card items={items}/>
      </Base>
    )
}

export default Users;