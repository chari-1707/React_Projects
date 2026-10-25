import React from "react";

function card({ username }) {
    // you can write this or there is another way that is destructure it like what ever you want take that only
    // console.log(props);
    return (
        <div>
            <div className="flex flex-col items-center p-7 rounded-2xl">
                <div>
                    <img
                        className="size-48 shadow-xl rounded-md"
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yrq33hAAwNVLlr9ZgPv_9Uni_Od6-6AYfQE77nrR4GOyOZb07aKueLdQ&s=10"
                    />
                </div>
                <div className="flex">
                    <span className="text-2xl font-medium">{username || "Shafi nihal"}</span> // if we not found
                    username means by default if coder didnt provided use shafi nihal but not preferable in production
                    <span className="flex gap-2 font-medium text-gray-600 ">
                        <span>No. 4</span>
                        <span>·</span>
                        <span>2025</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default card;
