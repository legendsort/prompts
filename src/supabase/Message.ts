import supabase from "../utils/supabase";

const create = async ({ room_id, sender_id, receiver_id, content }: any) => {
  const message = {
    room_id,
    sender_id,
    receiver_id,
    content,
  };
  const response = await supabase.from("message").insert(message);

  return response;
};

// get last messages
const retrieve = async ({ room_id, page_size = 10, page = 1 }: any) => {
  const { data, error } = await supabase
    .from("message")
    .select("id, sender_id, receiver_id, room_id, content, created_at")
    .eq("room_id", room_id)
    .order("created_at", { ascending: false })
    .limit(page_size)
    .range((page - 1) * page_size, page * page_size - 1);
  if (data === null) return { data, error };
  if (data.length) {
    data.reverse();
  }
  return { data, error };
};

const Message = {
  create,
  retrieve,
};
export default Message;
