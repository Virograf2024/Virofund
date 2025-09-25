import Image from "next/image";

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
    <article className="step" style={{ background: props.background }} role="listitem">
      <div className="step-header">
        <div className="step-image-container">
          <div className="step-icon">
            <Image
              width={900}
              height={900}
              src={props.imageSrc}
              alt={props.alt}
            />
          </div>
        </div>
      </div>
      <h3 className="step-title">{props.title}</h3>
      <p className="step-description">{props.description}</p>
      <div className="step-number" aria-hidden="true">
        <Image src={props.stepNumber} width={40} height={40} alt="" />
      </div>
    </article>
  );
}

export default Step;
