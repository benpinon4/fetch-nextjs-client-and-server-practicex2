
import { use } from "react";
const Page = ({ params }) => {
    let params1 = use(params)
  return (
    <>
      <h1> Blog Details Blog ID {params1.blogId}</h1>
    </>
  );
};

export default Page;
