import supabase from "../utils/supabase";

const create = async ({
  type,
  description,
  price,
  image,
  category,
  rating,
}: any) => {
  const prompt = {
    type,
    description,
    price,
    image,
    category,
    rating,
  };
  const response = await supabase.from("prompt").insert(prompt);

  return response;
};

const find_all = async (type: any) => {
  const { data, error } = await supabase
    .from("prompt")
    .select("id, type, description, price, image, category, rating")
    .like("type", `%${type}%`);

  return {
    data,
    error,
  };
};

const find = async (
  type = "DALLE",
  category = "3D",
  rating = "Trending",
  page_size = 35,
  page = 1
) => {
  const { data, error } = await supabase
    .from("prompt")
    .select("id, type, description, price, image, category, rating")
    .eq("type", type)
    .eq("category", category)
    .eq("rating", rating)
    .limit(page_size)
    .range((page - 1) * page_size, page * page_size - 1);
  return { data, error };
};

const Prompt = {
  create,
  find,
  find_all,
};

export default Prompt;
