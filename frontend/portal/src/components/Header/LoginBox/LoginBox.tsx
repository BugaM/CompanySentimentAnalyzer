import { Button, Image, Space } from "antd";
import { useUser } from "@auth0/nextjs-auth0";

import defaultUserPitcure from "../../../../public/defaultuser.png";

const LoginBox = () => {
  const { error, isLoading, user } = useUser();
  if (error) return <>Error</>;
  if (isLoading) return <>Loading</>;
  return (
    <Space size={"large"}>
      {user ? (
        user.picture ? (
          <Image
            alt={""}
            preview={false}
            src={user.picture}
            style={{ borderRadius: "50px" }}
            width={50}
          />
        ) : (
          <Image
            alt={""}
            preview={false}
            src={defaultUserPitcure.src}
            style={{ borderRadius: "50px" }}
            width={50}
          />
        )
      ) : null}
      <Button
        href={user ? "/api/auth/logout" : "/api/auth/login"}
        style={{ margin: "auto 0 auto 0" }}
      >
        {user ? "Logout" : "Login"}
      </Button>
    </Space>
  );
};

export default LoginBox;
