import { useEffect, useState } from "react"
import logo from "../../assets/fundsroomlogo_green.svg"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { authActions, updateUser } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import Button from "../../components/Button"
import axiosInstance from "../../services/paymentAPI"
import { Bounce, toast } from "react-toastify"
import { db } from "../../../firebase-config"
import { doc, getDoc } from "firebase/firestore"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import { IoIosOpen } from "react-icons/io"

export default function HomePage({}) {
  //REDUX
  const { user } = useAppSelector(state => state.auth)
  const isLoading = useAppSelector(state => state.auth.loading)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // STATES

  const options = ["B.A.", "M.B.A", "B.Tech"]

  const [enrollmentData, setEnrollmentData] = useState({
    uid: user.uid,
    name: user.name,
    orgName: user.orgName,
    agreementToTermsAndConditions: false,
    educationalBackground: options[0],
    email: user.email,
    phone: user.phone
  })

  const [amount, setAmount] = useState(null)

  const handleFormInput = event => {
    const { name, value } = event.target
    setEnrollmentData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false)

  const signOut = () => {
    dispatch(authActions.signOut())
    navigate("/login")
  }

  useEffect(() => {
    //get amount value from firestore on path websiteContent/websiteData
    const getAmount = async () => {
      const docRef = doc(db, "websiteContent", "websiteData")
      const docSnap = await getDoc(docRef)
      const cgst = parseFloat(docSnap.data()?.cgst)
      const sgst = parseFloat(docSnap.data()?.sgst)
      const gst = cgst + sgst
      const basePrice = parseFloat(docSnap.data()?.basePrice)
      const totalAmount = basePrice + gst
      setAmount(totalAmount)
    }
    getAmount()
  }, [])

  const initiatePayment = async e => {
    e.preventDefault()
    try {
      //---ORDER ID RETRIEVAL START
      const response = await axiosInstance.post("/createOrder")
      const orderData = await response.data
      // ---ORDER ID RETRIEVAL END

      // ---PAYMENT CHECKOUT START

      if (amount === null) {
        toast.error("An error occured, please try again later!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce
        })
        return
      }
      const paisaAmount = amount * 100
      var options = {
        key: "rzp_live_E55RxKjc6uEvKK", // Enter the Key ID generated from the Dashboard
        amount: paisaAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "FundsResearch",
        description: "Test Transaction",
        image: logo,
        order_id: orderData.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function(response) {
          verifyPayment(response, orderData.data.id)
        },
        prefill: {
          name: enrollmentData.name,
          email: enrollmentData.email,
          contact: enrollmentData.phone
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#2b966f"
        }
      }

      var rzp1 = new window.Razorpay(options)
      rzp1.open()
      e.preventDefault()
    } catch (error) {
      console.log(error)
    }
  }

  const verifyPayment = async (paymentResponse, orderID) => {
    setIsPaymentProcessing(true)
    try {
      //---VERIFICATION START
      const response = await axiosInstance.post("/verifyPayment", {
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_order_id: paymentResponse.razorpay_order_id,
        razorpay_signature: paymentResponse.razorpay_signature,
        orderID,
        enrollmentData
      })

      if (response.status === 200) {
        toast.success("Payment Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce
        })

        dispatch(updateUser({ uid: user.uid }))
      }
      // ---VERIFICATION END
      setIsPaymentProcessing(false)
    } catch (error) {
      toast.error("An error occured, please try again later!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      })
      setIsPaymentProcessing(false)
    }
  }

  return (
    <>
      <div className="pt-20">
        <div className="pt-10">
          <div className="flex justify-between p-4 md:py-6 md:px-8 flex-col lg:flex-row mb-28">
            {/* container 1 */}
            <div className="flex flex-col gap-5">
              <div>
                <div className="text-2xl font-semibold">
                  Welcome, {user.name}
                </div>
                {user.hasEnrolled ? (
                  <div className="mt-2">
                    Congrats, You have already enrolled in our course!
                  </div>
                ) : (
                  <div className="mt-2">
                    Enroll in our course to get started!
                  </div>
                )}
              </div>
              <button
                className="border-2 border-red-500 max-w-fit text-red-500 px-4 py-2 rounded-xl"
                type="button"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>

            {user.hasEnrolled ? (
              <div></div>
            ) : (
              <>
                {/* container 2 */}
                <div>
                  <form onSubmit={initiatePayment}>
                    {/* Type of inquiry */}
                    <div className="">
                      <div className="mt-6">
                        <div className="text-xs text-gray lg:leading-3 font-medium">
                          Name
                        </div>
                        <input
                          required
                          name="name"
                          disabled
                          value={enrollmentData.name || enrollmentData.orgName}
                          onChange={handleFormInput}
                          type="text"
                          className="border-2 bg-transparent border-gray rounded-xl py-2 px-6 mt-2 w-full"
                        />
                      </div>
                    </div>

                    {/* EMAIL AND PHONE CONTAINER */}
                    <div className="flex flex-col lg:flex-row lg:gap-6">
                      {/* Email */}
                      <div>
                        <div className="text-xs text-gray font-medium mt-2">
                          Email
                        </div>
                        <input
                          required
                          name="email"
                          disabled
                          value={user.email}
                          onChange={handleFormInput}
                          type="email"
                          className="border-2 bg-transparent border-gray rounded-xl py-2 px-6 mt-2 w-full"
                        />
                      </div>
                      {/* Phone */}
                      <div>
                        <div className="text-xs text-gray font-medium mt-2">
                          Phone
                        </div>
                        <input
                          required
                          name="phone"
                          value={enrollmentData.phone}
                          onChange={handleFormInput}
                          type="text"
                          maxLength={10}
                          className="border-2 bg-transparent border-gray rounded-xl py-2 px-6 mt-2 w-full"
                        />
                      </div>
                    </div>
                    {/* Educational background */}
                    <div className="mt-4">
                      <div className="text-xs text-gray font-medium">
                        Educational Background
                      </div>
                      <Dropdown
                        options={options}
                        value={enrollmentData.educationalBackground}
                        onChange={option =>
                          setEnrollmentData(prevState => ({
                            ...prevState,
                            educationalBackground: option.value
                          }))
                        }
                        placeholder="Select an background"
                        controlClassName="dropdownStyle"
                      />
                    </div>

                    {/* AGREEMENT */}
                    <div className="mt-4">
                      <div className="flex items-center">
                        <input
                          name="agreementToTermsAndConditions"
                          required
                          onChange={event =>
                            setEnrollmentData(prevState => ({
                              ...prevState,
                              agreementToTermsAndConditions:
                                event.target.checked
                            }))
                          }
                          type="checkbox"
                          className="mr-2"
                        />
                        <div className="text-sm text-gray font-medium flex gap-1 place-items-center place-content-center">
                          I agree to the
                          <a
                            className="text-blue-500 flex place-items-center place-content-center gap-2"
                            target="_blank"
                            href="terms-and-conditions"
                          >
                            terms and conditions
                            <IoIosOpen />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 flex lg:justify-center">
                      {!!isPaymentProcessing ? (
                        <div className="flex place-content-center gap-10 place-items-center">
                          <PacmanLoader
                            size={15}
                            speedMultiplier={2}
                            color="#2b966f"
                          />
                          <div className="text-primary-600 font-semibold">
                            Payment Processing!
                          </div>
                        </div>
                      ) : (
                        <Button
                          disabled={
                            isLoading ||
                            !enrollmentData.agreementToTermsAndConditions
                          }
                          type="submit"
                          variant="default"
                          text={`Pay ₹${amount} (taxes included)`}
                        />
                      )}
                    </div>
                  </form>
                </div>
                {/* container end */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
