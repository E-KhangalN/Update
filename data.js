export const about = {
  userId: "lemonboy",
  name: "Э. Хангал ",
  img: "https://understandingecommerce.com/wp-content/uploads/2020/05/Common-Screen-Sharing-Problems-and-How-to-Fix-Them.jpg",
  bio1: "Тавтай морилно уу 🤗",
  bio2: " Заримдаа хэдхэн секунд л зориг гаргахад амьдралаа тэр чигээр нь өөрчилж чадна. ✭✭✭",
  followers: 202,
  following: 1,
  postNum: 5,
};
export const postData = [
  {
    id: 1,
    desc: "My first post 1",
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "sunflower_power77",
    profileImg: "https://xsgames.co/randomusers/avatar.php?g=male",
    like: 20,
    likedBy: [
      {
        userId: "tulga",
        img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
      },
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/assets/avatars/male/67.jpg",
      },
      {
        userId: "tulga",
        img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
      },
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/assets/avatars/male/67.jpg",
      },
      {
        userId: "tulga",
        img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
      },
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/assets/avatars/male/67.jpg",
      },
    ],
    comments: [
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/avatar.php?g=female",
        comment: "Nice 😀",
      },
      {
        userId: "tulga",
        img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
        comment: "Good..",
      },
    ],
  },
  {
    id: 2,
    desc: "My first post 2",
    profileImg: "https://xsgames.co/randomusers/avatar.php?g=male",

    img: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 20,
    userId: "sunflower_power77",
    likedBy: [
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/avatar.php?g=female",
      },
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/assets/avatars/male/68.jpg",
      },
    ],
    comments: [
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/avatar.php?g=female",
        comment: "Nice 😀",
      },
      {
        userId: "tulga",
        img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
        comment: "Good..",
      },
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/avatar.php?g=female",
        comment: "Very Nice 😀",
      },
      {
        userId: "tulga",
        img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
        comment: "Very Good..",
      },
    ],
  },
  {
    id: 3,
    desc: "My first post 3",
    profileImg: "https://xsgames.co/randomusers/avatar.php?g=male",

    img: "https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 1,
    userId: "sunflower_power77",
    likedBy: [
      {
        userId: "aminul_xd",
        img: "https://xsgames.co/randomusers/avatar.php?g=male",
      },
    ],
    comments: [],
  },
];

export const stories = [
  {
    id: 1,
    img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
    userId: "sunflower_power777777",
  },
  {
    id: 2,
    img: "https://xsgames.co/randomusers/avatar.php?g=male",
    userId: "elton_john_12345",
  },
  {
    id: 1,
    img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
    userId: "sunflower_power77",
  },
  {
    id: 2,
    img: "https://xsgames.co/randomusers/avatar.php?g=male",
    userId: "bat_123",
  },
  {
    id: 1,
    img: "https://xsgames.co/randomusers/assets/avatars/female/46.jpg",
    userId: "sunflower_power77",
  },
  {
    id: 2,
    img: "https://xsgames.co/randomusers/avatar.php?g=male",
    userId: "bat_123",
  },
];

// directmessage -ийн chat list
//// энэ датагаа өөр газар ашиглана өөр газар ашиглах боломжтой болгоод const-ийнхоо урд export гэж тавьна.
export const chats = [
  // Нэг хүн олон хүнтэй чаталсан учир энд массиваар хүрээлж байгаа.
  {
    /* Нэг нуман хаалтанд нэг хүний л мэдээлэл байна.  */
    id: 1 /* чат мөн id-тай байх ёстой нэг хүнтэй бичсэн чат давтагдахгүй учир  */,
    userId: "sunflower_power77",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw2u10Gusf_KLo5pG9U_ZORV&ust=1707153548884000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiyxfGYkoQDFQAAAAAdAAAAABAE",
    lastMsg: { text: "Nice", date: "19h" },
    messageHistory: [
      { text: "Nice", date: "19h" },
    ] /*энд мжссижний түүх. текст нь найсе, мэссеж бичсэн цаг нь харагдаж байна.*/,
    seen: true /* уг чатыг харсан бол харсан гэж харуулах чат байгаа болохоор true */,
  },
  {
    id: 2,
    userId: "sunflower_power77",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw2u10Gusf_KLo5pG9U_ZORV&ust=1707153548884000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiyxfGYkoQDFQAAAAAdAAAAABAE",
    lastMsg: { text: "Nice", date: "19h" },
    messageHistory: [{ text: "Nice", date: "19h" }],
    seen: true,
  },
  {
    id: 3,
    userId: "sunflower_power77",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw2u10Gusf_KLo5pG9U_ZORV&ust=1707153548884000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiyxfGYkoQDFQAAAAAdAAAAABAE",
    lastMsg: { text: "Nice", date: "19h" },
    messageHistory: [{ text: "Nice", date: "19h" }],
    seen: true,
  },
  {
    id: 4,
    userId: "sunflower_power77",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw2u10Gusf_KLo5pG9U_ZORV&ust=1707153548884000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiyxfGYkoQDFQAAAAAdAAAAABAE",
    lastMsg: { text: "Nice", date: "19h" },
    messageHistory: [{ text: "Nice", date: "19h" }],
    seen: true,
  },
];
