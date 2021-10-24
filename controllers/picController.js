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
];

const user = {
  name: "fwangguslee",
  email: "stlsh0516@gmail.com",
};

export const home = async (req, res) => {
  await res.render("home", { pics });
};

export const picsDetail = (req, res) => {
  console.log(req.params);
  res.render("picsDetail");
};
