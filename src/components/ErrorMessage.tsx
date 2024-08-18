const ErrorMessage = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h3 className="text-red-500 font-bold text-3xl mb-2">Whoops!</h3>
      <p className="text-center text-2xl w-2/3">
        It looks like the network is busy right now. Please try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
