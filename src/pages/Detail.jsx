import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  console.log(id); 

  return (
    <div>
      <h1>상세 페이지</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default Detail;
