import { useEffect, useState } from "react";
import { useApi } from "../../api";
import styles from "./Home.module.scss";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Card, Input, Button, Rate } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { BackEndPiont } = useApi();
  const [dataSource, setDataSource] = useState([]);
  const history = useNavigate();
  const [updateTrigger, setUpdateTrigger] = useState(false);
  useEffect(() => {
    BackEndPiont.get("heros/")
      .then((res) => {
        setDataSource(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateTrigger]);

  const updateRate = (
    value: number,
    id: number,
    first_name: string,
    last_name: string,
    power: Array<string>
  ) => {
    BackEndPiont.put(`heros/${id}`, {
      rate: value,
      first_name: first_name,
      last_name: last_name,
      power: power,
    }).then((res) => {
      setUpdateTrigger(!updateTrigger);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <Card>
          <div className={styles.listContainer__searchBoxContent}>
            <div style={{ width: "30%" }}>
              <Input
                id="searchCaseFilter"
                placeholder="Search"
                suffix={<SearchOutlined />}
              />
            </div>
          </div>
        </Card>

        {dataSource?.map((data: any, index: number) => (
          <Card className={styles.listContainer__card}>
            <Button
              type="link"
              className={styles.cardItems__name}
              onClick={() => {
                history(`/profile/${data.id}/`);
              }}
            >
              {data.first_name} {data.last_name}{" "}
            </Button>
            <Rate
              value={data.rate}
              onChange={(val) => {
                updateRate(
                  val,
                  data.id,
                  data.first_name,
                  data.last_name,
                  data.power
                );
              }}
            />
            <div className={styles.cardItems__power}>
              Power:{" "}
              {data.power?.map((power: any) => (
                <span>{power} -</span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.filterCard}>
        <Card>
          <h1 style={{ marginTop: "20px" }}>
            <FilterOutlined />
            Advance Search
          </h1>
          <div style={{ marginTop: "20px" }}>
            <div className={styles.filterCard__fields}></div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Home;
