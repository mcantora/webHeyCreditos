export default function Steps({ contents }) {
  const { steps } = contents;
  return (
    <div className="secondary-bg square flex center-x-1 steps">
      {steps.map((step,i) => (
        <div key={i} className="step">
          <b>
            <p className="p-fix">{step.strong}</p>
          </b>
          {step.regular && <p>{step.regular}</p>}
          {step.strong2 && (
            <b>
              <p>{step.strong2}</p>
            </b>
          )}
        </div>
      ))}
    </div>
  );
}
