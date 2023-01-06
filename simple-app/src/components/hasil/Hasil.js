import { useState } from "react";
import { Col, Row, Badge } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { numberWithCommas } from "../../utils/utils";
import ModalKeranjang from "../modal-keranjang/ModalKeranjang";
import TotalBayar from "../total-bayar/TotalBayar";

const Hasil = (props) => {
  const [show, setShow] = useState(false);
  const [keranjangDetail, setKeranjangDetail] = useState(false);
  const [jumlah, setJumlah] = useState(0);
  const [keterangan, setKeterangan] = useState('');

  const handleShow = (item) => {
    setShow(true);
    setKeranjangDetail(item);
    setJumlah(item.jumlah);
    setKeterangan(item.keterangan)
  };
  const handleClose = () => setShow(false);

  const tambahJumlah = () => setJumlah(jumlah + 1);
  const kurangJumlah = () => {
    if (jumlah !== 1) {
      setJumlah(jumlah - 1);
    }
  };

  const changeHandler = (e) => {
    setKeterangan(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(keterangan);
  }

  const childProps = {
    show,
    setShow,
    keranjangDetail,
    setKeranjangDetail,
    jumlah,
    setJumlah,
    keterangan,
    setKeterangan
  }

  return (
    <Col md={3} mt="2">
      <h4><strong>Keranjang</strong></h4>
      <hr />
      {props.keranjang.length !== 0 &&
        (<ListGroup variant="flush">
          {props.keranjang.map((item) => (
            <ListGroup.Item className='text-left' key={item.id} onClick={(() => handleShow(item))}>
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
          <ModalKeranjang handleClose={handleClose} tambahJumlah={tambahJumlah} kurangJumlah={kurangJumlah} changeHandler={changeHandler} handleSubmit={handleSubmit} {...childProps} />
        </ListGroup>)
      }
      <TotalBayar keranjang={props.keranjang} />
    </Col>
  );
}

export default Hasil;