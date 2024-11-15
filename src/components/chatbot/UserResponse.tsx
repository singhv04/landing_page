import { ResponseProps } from "@/types/all-types";

const UserResponse: React.FC<ResponseProps> = ({ text }) => {
  return (
    <div className="flex justify-end">
      <div className="text-sm p-3 rounded-lg max-w-[80%]">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserResponse;
