import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries';
import { DELETE_PROJECT } from '../mutations/projectMutations';

export const DeleteProjectButton = ({ projectID }) => {
  const navigate = useNavigate();
  
  const [deleteProject] = useMutation(
    DELETE_PROJECT,
    {
      variables: { id: projectID },
      onCompleted: () => navigate('/'),
      refetchQueries: [{ query: GET_PROJECTS }],
    },
  );

  return <div className='d-flex mt-5 ms-auto'>
    <button className="btn btn-danger m-2" onClick={deleteProject}>
      <FaTrash className='ison' /> Delete project
    </button>
  </div>;
};
