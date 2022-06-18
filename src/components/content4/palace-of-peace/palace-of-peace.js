import { useState } from "react";
import './palace-of-peace.css';
import Palace1 from "./palace-of-peace1"
import Palace2 from "./palace-of-peace2"
import Palace3 from "./palace-of-peace3"

function Palace_accord() {

	const [step, setStep] = useState(0);

	const FormTitles = ["place1", "place2", "place3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <Palace1/>
		} else if (step === 1){
			return <Palace2/>
		} else{
			return <Palace3/>
		}
	}

	return (
		<div className="palace-container">
		<div className="palace-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "palace-button-hidden" : step === 1 ? "palace-button-1" : "palace-button-1"}
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Дворец мира и согласия" : "Дворец Бракосочетания"}
			</button>
			<button className={step === 0 ? "palace-button-2" : step === 1 ? "palace-button-2" : "palace-button-hidden"}
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Дворец Бракосочетания" : step === 1 ? "Дворец Независимости" : ""}
			</button>
		</div>
	)
  }
  
  export default Palace_accord