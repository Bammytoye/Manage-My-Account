
const Myaccount = () => {
  return (
    <div>
      <div className="container mx-auto py-8 px-4">
        <div className="md:max-w-[1200px] m-auto w-full h-full flex justify-between items-center mt-20">
          <ul className="flex gap-6 text-dark-100 text-[14px]">
            <li className="hover:text-gray-300">
              <a href="#">Home</a>
            </li>
            <li>/</li>
            <li className="hover:text-gray-300">
              <a href="">My Account</a>
            </li>
          </ul>
        
          <h3>Welcome! <a href="#" className="text-red-500">Md Rimel</a></h3>
        </div>
      </div>
    </div>
  )
}

export default Myaccount