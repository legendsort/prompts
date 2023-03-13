import { useState } from 'react';
import AutoComplete from 'react-autocomplete';
const PromptDetail = () => {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col w-full rounded-lg w-[550px] mx-auto min-w-[470px] items-center gap-y-2">
      <div className="flex flex-col items-center justify-center">
        <h3>PromptDetail</h3>
        <p>Tell us about the prompt you want to sell.</p>
        <p>These details are not final. Our team will make edits if it goes live</p>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <label>Prompt Type</label>
        <label className="italic text-gray-400">Select the type of prompt you want to sell</label>
        <select className="login-input rounded-md outline-none text-gray-400" placeholder="Select Prompts Type">
          <option selected>Select Prompts Type</option>
          <option>Austria</option>
        </select>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <label>Name</label>
        <label className="italic text-gray-400">Select the type of prompt you want to sell</label>
        <input
          className="login-input mb-4 focus:outline-none focus:shadow-outline "
          placeholder="Movie to Emoji Generator"
        />
        <label className="italic text-gray-400 ml-auto text-sm">0/40</label>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <label>Description</label>
        <label className="italic text-gray-400">
          Describe what your prompt does to a potential buyer. A more detailed description will increase your sales.
        </label>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          className="login-input mb-4 focus:outline-none focus:shadow-outline "
          placeholder="Converts movie titles into emoji"
        ></textarea>
        <label className="italic text-gray-400 ml-auto text-sm">0/500</label>
      </div>

      <div className="w-full flex flex-col gap-y-2">
        <label>Estimated Price</label>
        <label className="italic text-gray-400">What do you think the price of this prompt should be?</label>
        <select className="login-input rounded-md outline-none text-gray-400" placeholder="Select Prompts Type">
          <option selected>Select Prompts Type</option>
          <option>Austria</option>
        </select>
      </div>
    </div>
  );
};

export default PromptDetail;
