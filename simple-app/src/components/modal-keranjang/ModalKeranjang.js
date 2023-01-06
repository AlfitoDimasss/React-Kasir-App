import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Form } from 'react-bootstrap';
import { numberWithCommas } from '../../utils/utils';
const ModalKeranjang = (props) => {
  if (props.keranjangDetail) {
    return (
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.keranjangDetail.product.nama + " "}
            <strong>Rp. {numberWithCommas(props.keranjangDetail.product.harga)}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga</Form.Label>
              <p><strong>Rp. {numberWithCommas(props.keranjangDetail.total_harga)}</strong></p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Jumlah</Form.Label>
              <br />
              <Button variant='primary' size='sm' className='bg-blue-500 mr-2' onClick={(() => props.kurangJumlah())}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <strong>{props.jumlah}</strong>
              <Button variant='primary' size='sm' className='bg-blue-500 ml-2' onClick={(() => props.tambahJumlah())}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control as="textarea" rows={3} name="keterangan" placeholder='Contoh: Pedas, Porsi Setengah, dll' value={props.keterangan} onChange={((event) => props.changeHandler(event))} />
            </Form.Group>
            <Button variant='primary' className='bg-blue-500' type='submit'>Simpan</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="bg-slate-500" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="danger" className="bg-red-500" onClick={props.handleClose}>
            Hapus Pesanan
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalKeranjang;