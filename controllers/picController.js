let pics = [
  {
    id: 1,
    username: "fwanggus",
    userAvatar: "/user_img.jpg",
    picUrl: "/IMG_2675.jpg",
    numLiked: 10,
    commentIds: [1, 4, 7, 10],
  },
  {
    id: 2,
    username: "gyul",
    userAvatar: "/user_img.jpg",
    picUrl: "/IMG_3736.JPG",
    numLiked: 3,
    commentIds: [10, 40, 70, 100],
  },
  {
    id: 3,
    username: "sanho",
    userAvatar: "/user_img.jpg",
    picUrl: "/jeju_bg.jpeg",
    numLiked: 2,
    commentIds: [3, 6, 9, 19],
  },
  {
    id: 3,
    username: "sanho",
    userAvatar: "/user_img.jpg",
    picUrl: "/jeju_bg.jpeg",
    numLiked: 2,
    commentIds: [3, 6, 9, 19],
  },
  {
    id: 3,
    username: "sanho",
    userAvatar: "/user_img.jpg",
    picUrl: "/jeju_bg.jpeg",
    numLiked: 2,
    commentIds: [3, 6, 9, 19],
  },
  {
    id: 2,
    username: "gyul",
    userAvatar: "/user_img.jpg",
    picUrl: "/IMG_3736.JPG",
    numLiked: 3,
    commentIds: [10, 40, 70, 100],
  },
  {
    id: 2,
    username: "gyul",
    userAvatar: "/user_img.jpg",
    picUrl: "/IMG_3736.JPG",
    numLiked: 3,
    commentIds: [10, 40, 70, 100],
  },
  {
    id: 2,
    username: "gyul",
    userAvatar: "/user_img.jpg",
    picUrl: "/IMG_3736.JPG",
    numLiked: 3,
    commentIds: [10, 40, 70, 100],
  },
  {
    id: 2,
    username: "gyul",
    userAvatar: "/user_img.jpg",
    picUrl: "/IMG_3736.JPG",
    numLiked: 3,
    commentIds: [10, 40, 70, 100],
  },
];

export const home = async (req, res) => {
  await res.render("home", { pics });
};
