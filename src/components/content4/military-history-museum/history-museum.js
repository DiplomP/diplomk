import { useState } from "react";
import './history-museum.css';
import History1 from "./history1";
import History2 from "./history2";
import History3 from "./history3";

function Historymuseum() {

	const [step, setStep] = useState(0);

	const FormTitles = ["history1", "history2", "history3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <History1/>
		} else if (step === 1){
			return <History2/>
		} else{
			return <History3/>
		}
	}

	return (
		<div className="museum-container">
			<div className="museum-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "museum-button-hidden" : step === 1 ? "museum-button-1" : "museum-button-1"} 
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Военно-исторический музей" : "Археологический Музей Академии наук Казахстана"}
			</button>
			<button className={step === 0 ? "museum-button-2" : step === 1 ? "museum-button-2" : "museum-button-hidden"}
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Археологический Музей Академии наук Казахстана" : step === 1 ? "Центральный государственный музей Республики Казахстан" : ""}
			</button>
		</div>
	)
  }
  
  export default Historymuseum