import { faCameraRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

type SpinnerProps = {

}

export default function Spinner({}:SpinnerProps){

    return (
        <div className={clsx("flex w-full h-full justify-center",
        "align-middle content-center overflow-hidden",
        "select-none mx-auto")}>
            <div className="flex flex-col my-auto mx-auto">

                <FontAwesomeIcon spin className={clsx("text-white text-xl md:text-3xl",
                "mx-auto my-auto text-center leading-none")} icon={faCameraRotate} />

                <div className="text-white font-semibold mt-1">Loading...</div>
                
            </div>
        </div>
    )
}