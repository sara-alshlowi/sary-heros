import { ReactChild } from "react";
import { Layout as AntLayout } from "antd";
import styles from "./Layout.module.scss";

const { Header, Footer, Content } = AntLayout;

interface IProps {
  children: ReactChild;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <AntLayout className={styles.layout}>
        <Header className={styles.header}>
          <h2 style={{ color: "#29d7b6" }}>Sary heros</h2>
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}></Footer>
      </AntLayout>
    </>
  );
};
export default Layout;
