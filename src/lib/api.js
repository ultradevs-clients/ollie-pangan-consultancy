
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : "https://nice-idea-4c38d981a8.strapiapp.com";

const formatImageUrl = (url) =>
  url?.startsWith("http") ? url : `${BASE_URL}${url}`;

export const fetchBlogs = async (page = 1, pageSize = 9) => {
  const res = await axios.get(`${BASE_URL}/api/blogs`, {
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
	image: formatImageUrl(item.image.url),
  }));
  
  localStorage.setItem("blogs", JSON.stringify(blogs))
  return {
    blogs,
    pagination: res.data.meta.pagination,
  };
};


