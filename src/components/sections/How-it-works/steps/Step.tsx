import Image from "next/image";
// import testImage from "../../../../../public"

interface StepProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  background: string;
  stepNumber: string;
}

function Step({ ...props }: StepProps) {
  return (
    <div className="step" style={{ background: props.background }}>
      <div className="step-header">
        <div className="step-image-container">
          <div className="step-icon">
            <Image
              width={200}
              height={200}
              src={props.imageSrc}
              alt={props.alt}
            />
          </div>
        </div>
      </div>
      <h3 className="step-title">{props.title}</h3>
      <p className="step-description">{props.description}</p>
      <div className="step-number">
        <Image src={props.stepNumber} width={40} height={40} alt="" />
      </div>
    </div>
  );
}

export default Step;
