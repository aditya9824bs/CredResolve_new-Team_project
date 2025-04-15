import loanImage from '../../../public/loanImage.webp'
const ApplyForLoan = () => {
  return (
    <div className="py-20">
       <div className="flex flex-row md:flex-col-reverse">
          {/* text section */}
          <div>
             <div> 
                <p>Choose the Loan That Fits Your Needs</p>
                </div>
             <div>
                <button className="text-base capitalize">apply now</button>
             </div>
          </div>
          {/* image section */}
          <div>
             <img src={loanImage}/>
          </div>
       </div>
    </div>
  )
}

export default ApplyForLoan
