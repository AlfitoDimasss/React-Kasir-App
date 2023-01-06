import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../../utils/utils";

const Menus = (props) => {
  return (
    <Col md={4} xs={6} className='mb-4 mt-4'>
      <Card className='shadow-md' onClick={() => props.masukKeranjang(props.menu)}>
        <Card.Img variant="top" src={"assets/images/" + props.menu.category.nama.toLowerCase() + "/" + props.menu.gambar} />
        <Card.Body>
          <Card.Title>{props.menu.nama}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(props.menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Menus;