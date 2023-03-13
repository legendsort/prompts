import UserService from '../supabase/User';
import PromtService from '../supabase/Prompt';
import RoomService from '../supabase/Room';
import MessageService from '../supabase/Message';

const SignIn = () => {
  const handleClick = async (e: any) => {
    e.preventDefault();

    const response = await UserService.sign_up({
      email: 'sortoite@gmail.com',
      password: '123123',
      username: 'Timo ',
    });
    console.log(response);

    // test for user service find
    // const response = await UserService.find('Sortoite');
    // console.log(response);

    // const prompt = {
    //   "tag": "test s",
    //   "price": "price 1",
    //   "image": "image 1"
    // }
    // const response = await PromtService.create(prompt);
    // console.log(response);

    // const response = await PromtService.findAll("test 1");
    // console.log(response);

    // const response = await PromtService.find("test", 2, 2);
    // console.log(response);

    // const responsea = await RoomService.create({user1: "2a7ab893-b450-4551-a662-70b0f4602eeb", user2: "d326edc2-fb02-44b3-8f2a-b03fb92d1ab5"});
    // console.log(responsea);

    // const response = await RoomService.find({user: "2a7ab893-b450-4551-a662-70b0f4602eeb"});
    // console.log(response);
  };
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl justify-center items-center ">
      <input className="bg-blue-200 p-4 border-round-2" type="button" value="test" onClick={handleClick} color="red" />
    </div>
  );
};

export default SignIn;
