import {
  BsBookmarkPlusFill as Add,
  BsBookmarkDashFill as Remove,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/actions";

const Button = ({ movie }) => {
  const dispatch = useDispatch();

  // izleme listesindeki film verilerini al
  const { list } = useSelector((store) => store);

  // prop olarak gelen film izleme listesinde var mı?
  const isAdded = !!list.find((item) => item.id === movie.id);

  // film eğer listede varsa kaldır yoksa listeye ekle
  const handleClick = () => {
    dispatch(toggleWatchList(movie, !isAdded));
  };

  return (
    <button
      onClick={handleClick}
      className="hero-btn bg-blue-600 hover:bg-blue-700 cursor-pointer"
    >
      {isAdded ? (
        <>
          <Remove />
          Listeden Kaldır
        </>
      ) : (
        <>
          <Add />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default Button;
