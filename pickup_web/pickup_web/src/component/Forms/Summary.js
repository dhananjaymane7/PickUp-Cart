import React from "react";
import axios from "axios";


const Summary = () => {
  const dAddress = JSON.parse(sessionStorage.getItem('deliveryDetail'));
  const pAddress = JSON.parse(sessionStorage.getItem('pickDetail'))
  const packages = JSON.parse(sessionStorage.getItem('package'));
  const schedule = JSON.parse(sessionStorage.getItem('schedule'));
  const prices = JSON.parse(sessionStorage.getItem('prices'));
  const delType = JSON.parse(sessionStorage.getItem('delType'));

  

  // const postUrl = "https://pickupkart.in/api/postBooking";
  const postUrl = "https://pickupkart.in/api/postBooking1";
  const pConAd = pAddress ? pAddress.phouse + " " + pAddress.parea : '';
  const dConAd = dAddress ? dAddress.dhouse + " " + dAddress.darea : '';
  const currentDate = new Date().toISOString().slice(0, 10);

  const handleClick = () => {
    const detail = {
      pname: pAddress.pcontactname,
      pnumber: pAddress.pcontactno,
      pemail: pAddress.pemail,
      paddress: pConAd,
      ppin: Number(pAddress.ppin),
      pcity: pAddress.pcity,
      pstate: pAddress.pstate,
      dname: dAddress.dcontactname,
      dnumber: dAddress.dcontactno,
      demail: dAddress.demail,
      daddress: dConAd,
      dpin: Number(dAddress.dpin),
      dcity: dAddress.dcity,
      dstate: dAddress.dstate,
      shiptype: packages.shiptype,
      weight: packages.weight,
      unit: packages.unit,
      productValue: Number(packages.productValue),
      numberOfParcels: Number(packages.numberOfParcels),
      length: Number(packages.length),
      height: Number(packages.height),
      width: Number(packages.width),
      delType: delType,
      description: packages.description,
      schedules: schedule,
      price: delType == "stdRate" ? prices.stdPrices :
             delType == "groundRate" ? prices.groundPrices :
                                        prices.cargoPrices,
      orderDate: currentDate

    };
    axios.post(postUrl, detail)
      .then(response => {
        console.log('Response:', response.data);
        alert("Data Submitted Successfully.");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <div className="font-[Poppins] md:px-[100px] py-[30px] bg-[#ECEEED]">
        <div className="p-2 shadow-lg border border-gray-200 rounded-lg text-white bg-[#0260AA] ">
          <div className="orderSummary ">
            <h1 className="text-[30px] font-[Dosis]">Order Summary</h1>
            <hr className="mb-5" />
            <div className="p-4">
              <h5 className="text-[20px] font-fjalla-one">Address Details:</h5>
              <h6>
                {pAddress ? (<>      <span className="text-[#EF8038] pl-5">Pickup address</span> : {pAddress.pcontactname}, {pAddress.phouse}, {pAddress.parea}, {pAddress.pcity}, {pAddress.pstate}, {pAddress.ppin}</>) : (<span></span>)}
              </h6>
              <h6 className="mt-2">{dAddress ? (<> <span className="text-[#EF8038] pl-5">Delivery Address </span>:  {dAddress.dcontactname}, {dAddress.dhouse}, {dAddress.darea}, {dAddress.dcity}, {dAddress.dstate}, {dAddress.dpin}</>) : (<span></span>)}</h6>
            </div>
            <div className="p-4">
              <h5 className="text-[20px]">Package Details:</h5>
              <h6>
                {packages ? (<> <span className="text-[#EF8038] pl-5">Packge Type</span> : {packages.shiptype}</>) : (<span></span>)}
              </h6>
              <h6>
                {packages ? (<> <span className="text-[#EF8038] pl-5">Packge weight</span> : {packages.weight} {packages.unit}</>) : (<span></span>)}
              </h6>
              <h6>
                {packages ? (<><span className="text-[#EF8038] pl-5">Packge description</span> : {packages.description} </>) : (<span></span>)}
              </h6>
              <h6>
                {packages ? (<><span className="text-[#EF8038] pl-5">Packge Dimension</span> : {packages.length}cm X {packages.width}cm X {packages.height}cm </>) : (<span></span>)}
              </h6>
              <h6>
                {packages ? (<><span className="text-[#EF8038] pl-5">Product Value</span> : ₹{packages.productValue} </>) : (<span></span>)}
              </h6>
              <h6>
                {packages ? (<><span className="text-[#EF8038] pl-5">Number of Parcels</span> : {packages.numberOfParcels} </>) : (<span></span>)}
              </h6>
            </div>
            <div className="p-4">
              <h5 className="text-[20px]">Price:</h5>
              <div className="pl-5">
                <h6 >
                  {delType == "stdRate" ? `Pickupkart Standard" : ₹${prices.stdPrices}` :
                    delType == "groundRate" ? `Pickupkart Ground : ₹${prices.groundPrices}` :
                      `Pickupkart Cargo : ₹${prices.cargoPrices}`
                  }
                </h6>
              </div> </div>
            <div className="p-4">
              <h5 className="text-[20px]">Pickup Schedule:</h5>
              {schedule ? (<>  <span className="text-[#EF8038] pl-5">Date</span> : {schedule}</>) : (<span></span>)}

            </div>
          </div>

          <div className="flex justify-center  items-center"><button onClick={handleClick} className="w-[133px]  max-[475px]:text-[13px] max-[475px]:w-[140px] max-[475px]:h-[40px] h-[30px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO mt-5 rounded-lg mb-4">Get Quote</button></div>
        </div>
      </div>
    </>
  );
};



export default Summary;
