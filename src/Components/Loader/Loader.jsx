import { Audio, FallingLines } from 'react-loader-spinner'
;<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-white">
      <FallingLines
  color="#28baf5"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
    </div>
  );
};

export default Loader;