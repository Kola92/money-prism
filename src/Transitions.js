function FastSlider({ defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <Slider
      value={value}
      onChange={(e, nextValue) => {
        /* 
          Update the value state from the slider actions, 
          and then use this new value to transition the CHART UI to the 
          corresponding slider value
        */
        setValue(nextValue);
        onChange(nextValue);
      }}
    />
  );
}

function ClassicAssociationsBubbles({ associations }) {
  const [minScore, setMinScore] = useState(0.1);

  const data = computeData(minScore);

  return (
    <>
      <FastSlider
        defaultValue={0.1}
        onChange={(val) => {
          setMinScore(val);
        }}
      />

      {/* Chart UI that transitions from one layout based on the user's slider action */}
      <ExpensiveChart data={data} />
    </>
  );
}
