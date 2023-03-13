import supabase from "../utils/supabase";

const create = async ({ user1, user2 }: any) => {
  const room = {
    user1,
    user2,
  };
  await supabase.from("room").insert(room);
  let response = await find({ user1, user2 });
  if (response.error) return;
  if (response.data === null) return null;
  if (response.data?.length > 0) {
    return response.data[0].id;
  }
  return null;
};

const find_all = async ({ user }: any) => {
  const { data, error } = await supabase
    .from("room")
    .select("id")
    .in("user1, user2", [user]);
  return { data, error };
};

const find = async ({ user1, user2 }: any) => {
  const { data, error } = await supabase
    .from("room")
    .select("id, user1, user2")
    .or(
      `and(user1.eq.${user1},user2.eq.${user2}),and(user1.eq.${user2},user2.eq.${user1})`
    );
  return { data, error };
};

const find_room = async ({ room_id }: any) => {
  const { data, error } = await supabase
    .from("room")
    .select("id, user1, user2")
    .eq("id", room_id);
  return { data, error };
};

const Room = {
  create,
  find,
  find_all,
  find_room,
};

export default Room;
