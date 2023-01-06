import { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCoffee, faCheese } from '@fortawesome/free-solid-svg-icons';

const Icon = (props) => {
  if (props.nama === "Makanan") {
    return <FontAwesomeIcon icon={faUtensils} className='mr-2' />
  }
  if (props.nama === "Minuman") {
    return <FontAwesomeIcon icon={faCoffee} className='mr-2' />
  }
  return <FontAwesomeIcon icon={faCheese} className='mr-2' />
}

const ListCategories = (props) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(API_URL + "/categories")
      .then(res => {
        const categories = res.data;
        setCategory(categories);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <Col md={2} mt="2">
      <h4><strong>Daftar Kategori</strong></h4>
      <hr />
      <ListGroup className="mt-4 text-left">
        {category && category.map((item) =>
          <ListGroup.Item key={item.id} onClick={() => props.changeCategory(item.nama)} className={props.choosen === item.nama && 'category-active'} style={{ cursor: 'pointer' }}>
            <h4><Icon nama={item.nama} />{item.nama}</h4>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Col>
  );
}

export default ListCategories;