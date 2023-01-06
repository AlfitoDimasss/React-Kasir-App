// import { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import './App.css';
// import Hasil from './components/hasil/Hasil';
// import ListCategories from './components/list-categories/ListCategories';
// import NavbarComponent from './components/navbar-component/NavbarComponent';
// import { API_URL } from './utils/constants';
// import axios from 'axios';
// import Menus from './components/menus/Menus';
// import swal from 'sweetalert';

// function App() {
//   // STATE
//   const [menu, setMenu] = useState([]);
//   const [choosen, setChoosen] = useState('Makanan');
//   const [keranjang, setKeranjang] = useState([]);

//   // USE EFFECT
//   useEffect(() => {
//     axios.get(API_URL + "/products?category.nama=" + choosen)
//       .then(res => {
//         const menus = res.data;
//         setMenu(menus);
//       })
//       .catch(error => {
//         console.log(error);
//       });

//     axios.get(API_URL + "/keranjangs")
//       .then(res => {
//         const keranjangs = res.data;
//         setKeranjang(keranjangs);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, [choosen, keranjang]);

//   // FUNGSI UBAH KATEGORI
//   const changeCategory = (value) => {
//     setChoosen(value);
//     setMenu([]);
//     axios.get(API_URL + "/products?category.nama=" + value)
//       .then(res => {
//         const menus = res.data;
//         setMenu(menus);
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   // FUNGSI INPUT PRODUK KE KERANJANG
//   const masukKeranjang = (value) => {
//     // CEK APAKAH PRODUK SUDAH ADA DI KERANJANG
//     axios.get(API_URL + "/keranjangs?product.id=" + value.id)
//       .then(res => {
//         if (res.data.length === 0) {
//           const keranjangTmp = {
//             jumlah: 1,
//             total_harga: value.harga,
//             product: value
//           };
//           axios.post(API_URL + "/keranjangs", keranjangTmp)
//             .then(res => {
//               swal({
//                 title: "Success",
//                 text: keranjangTmp.product.nama + " berhasil ditambahkan ke keranjang",
//                 icon: "success",
//                 timer: 1500
//               });
//             })
//             .catch(error => {
//               console.log(error);
//             });
//         } else {
//           const keranjangTmp = {
//             jumlah: res.data[0].jumlah + 1,
//             total_harga: res.data[0].total_harga + value.harga,
//             product: value
//           };
//           axios.put(API_URL + "/keranjangs/" + res.data[0].id, keranjangTmp)
//             .then(res => {
//               swal({
//                 title: "Success",
//                 text: keranjangTmp.product.nama + " berhasil ditambahkan ke keranjang",
//                 icon: "success",
//                 timer: 1500
//               });
//             })
//             .catch(error => {
//               console.log(error);
//             });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   return (
//     <div className="App">
//       <NavbarComponent />
//       <div className='mt-3'>
//         <Container fluid>
//           <Row>
//             <ListCategories changeCategory={changeCategory} choosen={choosen} />
//             <Col>
//               <h4><strong>Daftar Produk</strong></h4>
//               <hr />
//               <Row>
//                 {menu && menu.map((item) =>
//                   <Menus key={item.id} menu={item} masukKeranjang={masukKeranjang} />
//                 )}
//               </Row>
//             </Col>
//             <Hasil keranjang={keranjang} />
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
