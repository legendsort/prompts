import supabase from "../utils/supabase";

const get_session = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
};

const sign_up = async ({ email, password, username }: any) => {
  const user = { email, password, username };
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
      },
    },
  });
  if (error === null) {
    alert("Please check your email");
  }
  return {
    data,
    error,
  };
};

const sign_in = async ({ email, password }: any) => {
  const user = { email, password };
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return {
    data,
    error,
  };
};

/**
 *
 * @param username username
 * @returns schema {data: [{id, username}], error: error}
 */

const find = async ({ id }: any) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, nickname, avatar_url")
    .eq("id", id);
  return {
    data,
    error,
  };
};

/**
 *
 * @param username username
 * @returns schema {data: [{id, username}], error: error}
 */
const find_all = async () => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, nickname, avatar_url");
  return {
    data,
    error,
  };
};

const User = {
  sign_in,
  sign_up,
  find,
  find_all,
  get_session,
};

export default User;
