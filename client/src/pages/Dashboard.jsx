import { Button, Card, Flex, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout, userData } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <Card className="profile-card">
      <Flex vertical gap="small" align="center">
        <Avatar size={150} icon={<UserOutlined />} className="avatar" />
        <Typography.Title level={2} strong className="username">
          {userData.name}
        </Typography.Title>
        <Typography.Text type="secondary">
          Email: {userData.email}
        </Typography.Text>
        <Typography.Text type="secondary">
          Role: {userData.role}
        </Typography.Text>
        <Button
          size="large"
          type="primary"
          className="profile-btn"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </Card>
  );
};

export default Dashboard;
