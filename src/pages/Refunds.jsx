export default function Refunds() {
  return (
    <>
      <div className="pt-20"></div>
      <div className="pt-16"></div>
      <div className="p-8">
        <h1 className="text-center font-bold text-4xl mb-10">Refund Policy</h1>

        <div className="flex flex-col place-content-center place-items-center">
          <div className="flex flex-col gap-4 max-w-4xl px-1 mb-20">
            {" "}
            {/* Added horizontal padding */}
            <p className="font-bold text-justify">
              We appreciate your interest in our online internship program.
              Please note that all payments made towards enrollment in our
              program are non-refundable.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
