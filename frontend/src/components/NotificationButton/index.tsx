import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/requests';
import './styles.css';

type Props = {
  saleid: number;
}

function handleClick(id: number) {
  axios
    .get(`${BASE_URL}/sales/${id}/notification`)
    .then(res => {
      toast.info("SMS enviado com sucesso!!!");
    });
}

function NotificationButton({ saleid }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleid)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
