import { ReactChild } from "react";
import { Layout as AntLayout } from "antd";
import styles from "./Layout.module.scss";

const { Header, Footer, Sider, Content } = AntLayout;

interface IProps {
  children: ReactChild;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <AntLayout className={styles.layout}>
        <Header className={styles.header}>Header</Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}>Footer</Footer>
      </AntLayout>
    </>
  );
};
export default Layout;
