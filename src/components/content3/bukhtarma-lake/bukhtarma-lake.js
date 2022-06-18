import { useState } from "react";
import './bukhtarma-lake.css';
import Lakecontent31 from "./bukhtarma-lake1";
import Lakecontent32 from "./bukhtarma-lake2";
import Lakecontent33 from "./bukhtarma-lake3";

function Lakecontent3() {
	const [step, setStep] = useState(0);

	const FormTitles = ["bukhtarma-lake1", "bukhtarma-lake2", "bukhtarma-lake3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <Lakecontent31/>
		} else if (step === 1){
			return <Lakecontent32/>
		} else{
			return <Lakecontent33/>
		}
	}
	return (
		<div className="lake-container3">
			<div className="lake-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "lake-button-hidden" : step === 1 ? "lake-button-1"     : "lake-button-1"    }
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Бухтарминское водохранилище" : "Озеро Алаколь"}
			</button>
			<button className={step === 0 ? "lake-button-2" : step === 1 ? "lake-button-2"   : "lake-button-hidden" } 
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Озеро Алаколь" : step === 1 ? "Каспийское море" : ""}
			</button>
		</div>
	)
  }
  
  export default Lakecontent3