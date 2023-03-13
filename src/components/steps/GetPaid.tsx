export default function GetPaid() {
  return (
    <div className="grow flex flex-col items-center pt-32">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2">Get Paid</h2>
        <p className="max-w-[465px] mb-12">
          Connect your Bank account with Stripe to start receiving payments from every sale of your Prompt.
        </p>
        <h4 className="mb-2 leading-5 font-semibold">Country of residence</h4>
        <p className="max-w-[465px] mb-2 text-sm italic opacity-80">
          We need to know this for sending payouts. Please read our FAQ if your country does not appear here.
        </p>
        <select className="w-[550px] px-6 py-4 bg-[#FFFFFF4D] rounded-md outline-none">
          <option>Austria</option>
        </select>
      </div>
      {/* <div className="flex items-center gap-x-5">
        <button className="px-12 py-3 bg-yellow text-black border-2">Next</button>
        <button className="px-12 py-3 bg-transparent text-white border-2">Back</button>
      </div> */}
    </div>
  );
}
