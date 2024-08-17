
const SearchBar = () => {
  return (
    <form className="bg-slate-200 flex justify-center items-center gap-1 rounded-lg  p-6 mb-20">
        <label className="pl-1 hidden " htmlFor="name">Search</label>
        <input autoFocus className=" rounded-md px-2" type="text" placeholder="Search your token" name="search" />
        <button className="bg-slate-600 text-white py-2 px-4 rounded-md">Search</button>
    </form>
  )
}

export default SearchBar
