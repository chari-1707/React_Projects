import React from "react";
import { useParams } from "react-router-dom"; // this is hook used for dynamic rendering of user becoz every user is different while using webpage so dynamically we hvae to render them

function User() {
    const { userid } = useParams();

    return (
        <div className="bg-orange-500 text-black text-3xl text-center py-5">
            User: {userid}
        </div>
    );
}

export default User;
