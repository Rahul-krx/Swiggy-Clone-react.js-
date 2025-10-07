import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      <div className="">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="border-b-2 p-4 border-gray-200 text-left flex justify-between "
          >
            <div className="w-8/12">
            <div className="p-2">
              <span className="font-bold opacity-80">
                {item.card.info.name}
              </span>{" "}
              <br />
              <span className="font-semibold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>{" "}
              <br />
              <span className="text-green-600">
                {" "}
                ⭐{item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCount}){" "}
              </span>
            </div>
            <p className="text-md font-semibold opacity-75">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
            <div className="absolute"> 
              <button className=" py-2 px-6 mx-4 mt-22 bg-white shadow-lg  text-green-800 font-bold rounded-lg cursor-pointer hover:bg-gray-100">ADD +</button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="Image"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
