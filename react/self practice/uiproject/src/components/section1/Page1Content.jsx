import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


const Page1Content = (props) => {
  return (
    <div className=" pt-6 pb-16 flex  justify-between items-center h-[90vh] gap-5">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
}

export default Page1Content
