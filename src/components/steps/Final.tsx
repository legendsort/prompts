interface FinalProps {
  handleClick: any;
}
export default function Final({ handleClick }: FinalProps) {
  return (
    <div className="grow flex flex-col items-center py-32">
      <div className="flex flex-col items-center justify-center max-w-[540px] mb-16">
        <h2 className="mb-2">Thankyou</h2>
        <p>
          Quis ipsum viverra montes pretium eget viverra diam amet. Convallis
          venenatis felis lacus viverra sagittis tempor sed. Convallis.
        </p>
      </div>
      <button
        className="px-16 py-3 bg-yellow text-black border-2"
        onClick={() => handleClick()}
      >
        Go Back
      </button>
    </div>
  );
}
