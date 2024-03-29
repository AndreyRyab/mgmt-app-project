import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

export const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">Client info</h5>

      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className='ison' /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className='ison' /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className='ison' /> {client.phone}
        </li>
      </ul>
    </>
  );
};
