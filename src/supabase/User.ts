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

const sign_in_google = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "/marketplace",
    },
  });
  console.log(data, error);
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
 * @param id id
 * @returns schema {data: [{id, username, nickname, avatar_url}], error: error}
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

/**
 *
 * @param username username
 * @returns schema {data: [{id, username}], error: error}
 */
const find_by_name = async ({ username }: any) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, nickname, avatar_url")
    .like("username", `%${username}%`);

  return {
    data,
    error,
  };
};

const User = {
  sign_in,
  sign_up,
  sign_in_google,
  find,
  find_all,
  get_session,
  find_by_name,
};

export default User;
