import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
    title:"Doorvi - Refund Policy",
}
export default function RefundPolicy () {
        return (
            <div className='py-20 max-w-[80%] flex flex-col itmes-center mx-auto'>
                <h1 className="font-semibold text-[55px] leading-15 pb-4">Refund Policy</h1>
                <div className="mb-[60px] font-semibold text-[24px]">
                    <h3>Refund policy</h3>
                    <h3>Last Update: March 05, 2023</h3>
                </div>

                <p>
                    At DoorVi, your security and satisfaction is our highest priority! We work tirelessly to delight you with our service and make you feel secure. We understand that using DoorVi is a personal choice and if you are dissatisfied or do not like our products due to any reason, we will gladly issue a full refund for any full priced (non-discounted) merchandise that is unopened, unused and returned within 20 days from the date of purchase. Simply contact us on media@doorvi.com and return the products to our address. However, if we pick the products, postage will be charged at actuals and deducted from the refund amount. Please note, we do not offer ANY refund on personalised products.<br />
                    <br />
                    Please note that we cannot offer exchanges or refund on opened or used products. In exceptional cases, we may issue a gift card.<br />
                    <br />
                    You can return the products at : 6 Floor Tower A, Office No 602, The I Thum Tower<br />
                    A-40,Sector-62, Noida, Gautam Buddha Nagar<br />
                    Uttar Pradesh, 201309<br />
                    India<br />
                    <br />
                    DoorVi is not responsible for damage after delivery. We will only offer one year warranty on the QR Kit for damages during delivery, or any internal defects or product failures. Please note no refunds will be processed in case a warranty claim is accepted. Successful warranty claim makes you eligible for a replacement only. We have a set procedure and SOP that needs to be followed to claim warranty on our product. We request your co-operation on the same.<br />
                    <br />
                    Please allow us one to three weeks from the day you return your package for your request to be processed. You will be contacted once your return is complete.<br />
                    <br />
                    All claims for shortages or damages must be reported to customer service on the day of delivery with an unboxing video via email on media@doorvi.co or call/whatsapp on +91 - 9711150832. An unboxing video is mandatory to claim shortage or damage in transit.<br />
                </p>
                <p className='pera-heading'>CONTACT INFORMATION</p>
                <p>For general inquiries, complaints, questions or claims concerning the licensed Application, please contact:<br />
                    <br />
                    DoorVi support<br />
                    6 Floor Tower A, Office No 602, The I Thum Tower<br />
                    A-40,Sector-62, Noida, Gautam Buddha Nagar<br />
                    Uttar Pradesh, 201309<br />
                    India<br />
                    <Link href='mailto:media@doorvi.cosubject=DoorVi' style={{ color: "#0000EE", cursor: "pointer" }}>media@doorvi.co</Link></p>
            </div>
        )
    
}
