import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';

import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

import { DELETE_CLIENT } from '../mutations/clientMutations';

export const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [
      { query: GET_CLIENTS },
      { query: GET_PROJECTS },
    ],
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-outline-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};
