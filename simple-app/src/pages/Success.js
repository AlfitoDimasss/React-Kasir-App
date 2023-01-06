import { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from '../utils/constants';
import axios from 'axios';

const Success = () => {
  useEffect(() => {
    axios.get(API_URL + "/keranjangs")
      .then(res => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios.delete(API_URL + "/keranjangs/" + item.id);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mt-4 flex flex-col justify-center items-center">
      <Image src="assets/images/undraw_success.png" width={500} />
      <h2 className="text-2xl mb-1">Sukses Pesan</h2>
      <p className="text-sm mb-2">Terima Kasih Sudah Memesan!</p>
      <Button variant='primary' as={Link} to="/">Kembali</Button>
    </div>
  );
}

export default Success;