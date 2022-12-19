import React, { useEffect, useState } from 'react';
// import{profileData} from './data'
const profileData = {
  data: [
    {
      category_id: {
        primary_category: "book",
        sub_category: "bookloader",
        browser_node_id: "1318145031",
        barcode_exemption: false,
      }
    }
  ]
}

function Task() {
  const [first, setFirst] = useState<any>({})
  const [second, setSecond] = useState<any>({
    Data: {
      primary_category: "",
      sub_category: "",
      browser_node_id: "",
      barcode_exemption: false,
    },
  })

  const getpreviousdata = () => {
    let data: any = profileData.data[0];
    setFirst({ ...profileData.data[0] });

    let tempFirst: any = { ...second };
    // tempFirst["category_settings"] = Object.assign({},data?.category_id);
    tempFirst["category_settings"] = {...data?.category_id};
    setSecond({ ...tempFirst });
  };

  useEffect(() => {
    getpreviousdata();
  }, []);

  useEffect(() => {
    console.log(first);
    console.log("inventorySettings", second);
  }, [second])
  function handlechange() {
    let tempSecond = { ...second };
    tempSecond["category_settings"]["primary_category"] = "devendra";
    setSecond({ ...tempSecond });
  };
  return (
    <div className="App">
      <h1>debug this issue</h1>
      <button onClick={handlechange}>click this</button>
    </div>
  );
}

export default Task;
