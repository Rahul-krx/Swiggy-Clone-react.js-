const Contact = () =>{

    return(
        <div className="border-2 w-9/12 ml-40 mt-4 rounded-xl bg-gray-50">
            <h1 className="text-2xl font-bold text-center mt-4 underline">Contact US😵</h1>
            <form className="text-center mt-12">
                <input type="text"placeholder="Enter Name" required className="border-2 outline-gray-950 w-3/12 h-10 rounded-md" /> <br/> <br/>
                <div>
                <input type="text" placeholder="Enter Email" required className="border-2 outline-gray-950 w-3/12 h-10 rounded-md" /> <br/> <br/>
                </div>
                <div>
                <textarea cols="30" rows="10" placeholder="Message" required className="border-2 rounded-md"></textarea> <br/>
                </div>
                <button type="submit" className="px-16 py-2 border-1 rounded-md cursor-pointer m-4 bg-blue-500 hover:bg-blue-400 font-semibold">Submit</button>
            </form>
        </div>
    )
}
export default Contact;