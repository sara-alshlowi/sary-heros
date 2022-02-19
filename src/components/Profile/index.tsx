import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../api";

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const { BackEndPiont } = useApi();
  const [heroData, setHeroData] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    power: [],
    rate: 0,
  });

  useEffect(() => {
    BackEndPiont.get(`heros/${id}`).then((res) => {
      setHeroData(res.data);
    });
  }, [id]);
  return (
    <div>
      <h1>Hello {heroData?.first_name}</h1>
    </div>
  );
};
export default Profile;
