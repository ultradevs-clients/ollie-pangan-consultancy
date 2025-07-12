
import axios from "axios";

export const fetchBlogs = async (page = 1, pageSize = 9) => {
  const res = await axios.get(`http://localhost:1337/api/blogs`, {
    params: {
      populate: "image",
      pagination: {
        page,
        pageSize,
      },
    },
  });

  const blogs = res.data.data.map((item) => ({
    id: item.id,
    title: item.title || "",
    description: Array.isArray(item.description)
      ? item.description.map((d) =>
          d.children?.map((c) => c.text).join(" ")
        ).join("\n")
      : item.description || "",
    date: item.date || item.createdAt || "",
     image: item.image?.url
      ? `http://localhost:1337${item.image.url}`
      : "",
  }));
  
  localStorage.setItem("blogs", JSON.stringify(blogs))
  return {
    blogs,
    pagination: res.data.meta.pagination,
  };
};
