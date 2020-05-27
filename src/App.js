import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchBike from './SearchBike';
import BikeStepList from './BikeStepList'
import Pages from './Pages';
import Footer from './Footer';

function App() {
  const [datas, setDatas] = useState([]);
  const [filterdatas, setFilterdatas] = useState([]);
  const [areas, setAreas] = useState([]);
  const [pageD, setPageD] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://e-traffic.taichung.gov.tw/DataAPI/api/YoubikeAllAPI');
      const datas = await response.json();
      let areas = datas.map(data => data.CArea);
      areas = areas.filter((element, index, arr) => arr.indexOf(element) === index);
      setDatas(datas);
      setAreas(areas);
    }
    fetchData();
    //每分鐘更新一次
    setInterval(fetchData, 60000)
  }, []);


  function Filterdata(area) {
    if (area) {
      const filterdatas = datas.filter(data => data.CArea === area);
      setFilterdatas(filterdatas)
      setPageD(1);
    }
  }

  return (
    <div className="App">
      <Header />
      <SearchBike Filterdata={Filterdata} areas={areas} />
      <BikeStepList datas={filterdatas.length > 0 ? filterdatas.slice(pageD * 10 - 10, pageD * 10) : datas.slice(pageD * 10 - 10, pageD * 10)} />
      <Pages
        dataL={filterdatas.length > 0 ? filterdatas.length : datas.length}
        setPageD={setPageD}
        pageD={pageD}
      />
      <Footer />
    </div>
  );
}

export default App;
