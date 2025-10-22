import type React from "react";

type AuthProps = {
    Component: React.FC
}

export const AuthLayout: React.FC<AuthProps> = ({Component}) => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <Component/>
    </div>
  );
}