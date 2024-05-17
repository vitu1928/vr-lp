import Image from "next/image"

import { WhatsappFixedS } from "./style.module.scss"

import Whatsapp from "../../../public/Images/whatsapp.png"

export default function Whatsappfixed() {
    return (
        <a className={WhatsappFixedS} href="/redireciona"
        aria-label="Whatsapp de VR">
            <div>
                <Image
                    src={Whatsapp}
                    layout="responsive"
                    alt="Whatsapp icon"
                />
            </div>
        </a>
    )
}