import supabase from '../utils/supabase';

const create = async ({ user1, user2 }: any) => {
  const room = {
    user1,
    user2,
  };
  const response = await supabase.from('room').insert(room);
  return response;
};

const find = async ({ user }: any) => {
  const { data, error } = await supabase.from('room').select('id').in('user1, user2', [user]);
  return { data, error };
};

export default {
  create,
  find,
};
