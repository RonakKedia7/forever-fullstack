const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // You can add your email submission logic here (API call, etc.)
  };

  return (
    <div className="text-center my-10">
      <p className="text-2xl font-medium text-gray-800">
        Join Our Newsletter & Get 12% Off
      </p>
      <p className="text-gray-400 mt-3">
        Be the first to know about new arrivals, exclusive deals, and fashion
        updates from Forever.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
