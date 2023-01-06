import { Button } from "react-bootstrap";
import axios from "axios";
import { numberWithCommas } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from '../../utils/constants';
import { Link } from "react-router-dom";

const TotalBayar = (props) => {
  function submit(totalBayar) {
    const pesanan = {
      total_bayar: totalBayar,
      menu: props.keranjang
    }
    axios.post(API_URL + "/pesanans", pesanan);
  }
  const totalBayar = props.keranjang.reduce(function (result, item) {
    return result + item.total_harga;
  }, 0);

  return (
    <div className="border-t-2 py-2">
      <h4>Total Harga : <strong className="float-right mr-4">Rp. {numberWithCommas(totalBayar)}</strong></h4>
      <Button className="bg-blue-500 w-full mt-4" onClick={(() => submit(totalBayar))} as={Link} to="/success">
        <FontAwesomeIcon icon={faShoppingCart} /><strong className="ml-2">Bayar</strong></Button>
    </div>
  );
}

export default TotalBayar;