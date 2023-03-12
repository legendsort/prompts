import supabase from '../utils/supabase';

const create = async ({ tag, price, image }: any) => {
  const prompt = {
    tag,
    price,
    image,
  };
  const response = await supabase.from('prompt').insert(prompt);

  return response;
};

const find_all = async (tag: any) => {
  const { data, error } = await supabase.from('prompt').select('id, tag, price, image').like('tag', `%${tag}%`);

  return {
    data,
    error,
  };
};

const find = async (tag: any, page_size = 10, page = 1) => {
  const { data, error } = await supabase
    .from('prompt')
    .select('id, tag, price, image')
    .like('tag', `%${tag}%`)
    .limit(page_size)
    .range((page - 1) * page_size, page * page_size - 1);
  return { data, error };
};

export default {
  create,
  find,
  find_all,
};
