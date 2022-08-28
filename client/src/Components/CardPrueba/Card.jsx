import "./card.css";
// import Heart from "../../img/heart.svg";
// import HeartFilled from "../../img/heartFilled.svg";
// import Comment from "../../img/comment.svg";
// import Share from "../../img/share.svg";
// import Info from "../../img/info.svg";
import { useState } from "react";

const Card = ({ post, socket, user }) => {
    const [liked, setLiked] = useState(false);

    const handleNotification = (type) => { //Esto mismo tendria que estar en el componente checkout, cuando se el de a "comprar"..
        type === 1 && setLiked(true);
        socket.emit("sendNotification", {
            senderName: user,
            recipientId: post.id,
            type,
        });
    };

    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" className="userImg" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" className="postImg" />
            <div className="interaction">
                {liked ? (
                    <img src="https://www.svgrepo.com/show/5410/heart.svg" alt="" className="cardIcon" />
                ) : (
                    <img
                        src="https://www.svgrepo.com/show/5233/heart.svg"
                        alt=""
                        className="cardIcon"
                        onClick={() => handleNotification(1)}
                    />
                )}
                <img
                    src="https://www.svgrepo.com/show/334567/comment.svg"
                    alt=""
                    className="cardIcon"
                    onClick={() => handleNotification(2)}
                />
                <img
                    src="https://www.svgrepo.com/show/29717/share.svg"
                    alt=""
                    className="cardIcon"
                    onClick={() => handleNotification(3)}
                />
                <img src="https://www.svgrepo.com/show/62998/info.svg" alt="" className="cardIcon infoIcon" />
            </div>
        </div>
    );
};

export default Card;