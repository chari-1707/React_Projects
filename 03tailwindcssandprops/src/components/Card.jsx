import React from "react";

function card(props) {
    console.log(props);
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
                    <span className="text-2xl font-medium">Class Warfare</span>
                    <span className="font-medium text-sky-500">The Anti-Patterns</span>
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
