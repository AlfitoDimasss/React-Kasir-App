import axios from "axios";
import { useState } from "react";
import { Col, Row, Badge } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { API_URL } from "../../utils/constants";
import { numberWithCommas } from "../../utils/utils";
import ModalKeranjang from "../modal-keranjang/ModalKeranjang";
import TotalBayar from "../total-bayar/TotalBayar";
import swal from "sweetalert";

const Hasil = (props) => {
  const [show, setShow] = useState(false);
  const [keranjangDetail, setKeranjangDetail] = useState(false);
  const [jumlah, setJumlah] = useState(0);
  const [keterangan, setKeterangan] = useState('');
  const [totalHarga, setTotalHarga] = useState(0);

  const handleShow = (item) => {
    setShow(true);
    setKeranjangDetail(item);
    setJumlah(item.jumlah);
    setKeterangan(item.keterangan);
    setTotalHarga(item.total_harga);
  };
  const handleClose = () => setShow(false);

  const tambahJumlah = () => {
    setJumlah(jumlah + 1);
    setTotalHarga(keranjangDetail.product.harga * (jumlah + 1));
  };
  const kurangJumlah = () => {
    if (jumlah !== 1) {
      setJumlah(jumlah - 1);
      setTotalHarga(keranjangDetail.product.harga * (jumlah - 1));
    }
  };

  const changeHandler = (e) => {
    setKeterangan(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      jumlah: jumlah,
      total_harga: totalHarga,
      product: keranjangDetail.product,
      keterangan: keterangan
    };

    axios.put(API_URL + "/keranjangs/" + keranjangDetail.id, data).then((res) => {
      props.getListKeranjang();
      swal({
        title: "Sukses update pesanan",
        text: "Sukses update pesanan " + data.product.nama,
        icon: "success",
        timer: 1500
      });
    }).catch((e) => {
      console.log(e);
    });

    handleClose();
  }

  const handleDelete = (id) => {
    axios.delete(API_URL + "/keranjangs/" + id).then((res) => {
      props.getListKeranjang();
      swal({
        title: "Pesanan dihapus",
        text: "Sukses hapus pesanan " + keranjangDetail.product.nama,
        icon: "error",
        timer: 1500
      });
    }).catch((e) => {
      console.log(e);
    });

    handleClose();
  }

  const childProps = {
    show,
    setShow,
    keranjangDetail,
    setKeranjangDetail,
    jumlah,
    setJumlah,
    keterangan,
    setKeterangan,
    totalHarga,
    setTotalHarga
  }

  return (
    <Col md={3} mt="2">
      <h4><strong>Keranjang</strong></h4>
      <hr />
      {props.keranjang.length !== 0 &&
        (<ListGroup variant="flush">
          {props.keranjang.map((item) => (
            <ListGroup.Item className='text-left cursor-pointer' key={item.id} onClick={(() => handleShow(item))}>
              <Row>
                <Col xs={2}>
                  <h4>
                    <Badge pill bg="success">{item.jumlah}</Badge>
                  </h4>
                </Col>
                <Col>
                  <h5>{item.product.nama}</h5>
                  <p>Rp. {numberWithCommas(item.product.harga)}</p>
                </Col>
                <Col>
                  <strong className="float-right">Rp. {numberWithCommas(item.total_harga)}</strong></Col>
              </Row>
            </ListGroup.Item>
          ))}
          <ModalKeranjang handleClose={handleClose} tambahJumlah={tambahJumlah} kurangJumlah={kurangJumlah} changeHandler={changeHandler} handleSubmit={handleSubmit} handleDelete={handleDelete} {...childProps} />
        </ListGroup>)
      }
      <TotalBayar keranjang={props.keranjang} />
    </Col>
  );
}

export default Hasil;