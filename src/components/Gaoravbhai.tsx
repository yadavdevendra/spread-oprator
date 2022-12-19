import { useEffect, useState } from "react";
import { profileData } from "./data";
// import "./styles.css";

export default function Gaoravbhai() {
  const [testProfileData, setTestProfiledata] = useState<any>({});
  const [inventorySettings, setInventorySettings] = useState<any>({
    category_settings: {
      primary_category: "",
      sub_category: "",
      browser_node_id: "",
      barcode_exemption: false,
      displayPath: [], //displayPath -> full_path
      parentNodes: [], //parentNodes -> parent_id
      type: "" //search or select
    },
    attributes_mapping: {
      required_attribute: [],
      optional_attribute: []
    }
  });

  const getInventorySettings = () => {
    let data: any = profileData.data[0];
    setTestProfiledata({ ...profileData.data[0] });
    let tempInventorySettings: any = JSON.parse(JSON.stringify({ ...inventorySettings }));//deep copy
    // let tempInventorySettings: any =Object.assign({ ...inventorySettings });// shallow copy
    tempInventorySettings["attributes_mapping"]["required_attribute"] =
      data?.attributes_mapping?.required_attribute ?? [];
    tempInventorySettings["attributes_mapping"]["optional_attribute"] =
      data?.attributes_mapping?.optional_attribute ?? [];
    tempInventorySettings["category_settings"] = {...data?.category_id};
    setInventorySettings({...tempInventorySettings });

    // console.log("tempInventorySettings",tempInventorySettings);
    
  };
  useEffect(() => {
    getInventorySettings();
  }, []);

  useEffect(() => {
    console.log(testProfileData);
    console.log("inventorySettings", inventorySettings);
  }, [inventorySettings]);

  const onCategorySettingsChange = () => {
    ////console.log(key, value, "dvjbv");
    let tempcategoryAndAttributesSettings = { ...inventorySettings };
    tempcategoryAndAttributesSettings["category_settings"]["primary_category"] = "devendra";
    setInventorySettings({ ...tempcategoryAndAttributesSettings });
    // console.log(tempcategoryAndAttributesSettings, "tempcategoryAndAttributesSettings")
  };
  return (
    <div className="App">
      <h1>debug this issue</h1>
      <button onClick={onCategorySettingsChange}>click this</button>
    </div>
  );
}
